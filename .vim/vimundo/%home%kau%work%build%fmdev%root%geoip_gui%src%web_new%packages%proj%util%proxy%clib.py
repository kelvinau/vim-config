Vim�UnDo� ��e!6���X�s%�bS�;�.��������  {           -                       [ӱ�    _�                    m        ����                                                                                                                                                                                                                                                                                                                            m           t           V        [Ӗ&     �   l   m          def get_country_abbr(ip):       """   '    @param ip A string of ipv4 address.       """   #    cabbr = create_string_buffer(3)   $    cname = create_string_buffer(64)   8    __LIBPYTHON.get_country_abbr_by_ip(ip, cabbr, cname)       return cabbr5�_�                    m        ����                                                                                                                                                                                                                                                                                                                            m           m           V        [Ӗ(     �   l   m           5�_�                    m        ����                                                                                                                                                                                                                                                                                                                            m           m           V        [Ӗ)    �   l   m           5�_�      
              m        ����                                                                                                                                                                                                                                                                                                                            m           m           V        [Ӥ}    �      �      �   Ufrom ctypes import CDLL, RTLD_GLOBAL, create_string_buffer, c_char_p, c_double, byref   import code   import json   """   BThis is only a proxy that do one-to-one match with clib functions.       ,Don't including business logic in this file.   """   %# requred for all other libs to work.   /__SRCHD = CDLL("/lib/libsrchd.so", RTLD_GLOBAL)   :__SESSION_MGR = CDLL("/lib/libsessionmgr.so", RTLD_GLOBAL)       2__LIBOSAPI = CDLL("/lib/libosapi.so", RTLD_GLOBAL)       4__CMDB_API = CDLL('/lib/libcmdbapi.so', RTLD_GLOBAL)   __CMDB_API.nCfg_init()       2__CMF_API = CDLL('/lib/libcmfapi.so', RTLD_GLOBAL)   __CMF_API.init_cmdb_app()       5__FAZ_STDEXT = CDLL("/lib/libstdext.so", RTLD_GLOBAL)   -__LZ4 = CDLL("/lib/liblz4.so.1", RTLD_GLOBAL)   4__LOG_BASE = CDLL("/lib/liblogbase.so", RTLD_GLOBAL)   @__FAZCORE_CTXT = CDLL("/lib/libfazcore_context.so", RTLD_GLOBAL)   5__FAZ_BASE = CDLL("/lib/libfaz_base.so", RTLD_GLOBAL)       2__LIBICONV = CDLL("/lib/libiconv.so", RTLD_GLOBAL)   0__LIBAUTH = CDLL("/lib/libauth.so", RTLD_GLOBAL)   3__LIBCERT = CDLL("/lib/libfamcert.so", RTLD_GLOBAL)       7__LIBPYTHON = CDLL("/lib/libfazpython.so", RTLD_GLOBAL)           ADOM_MAX_SIZE = 36           # session manager   !def session_is_valid(session_id):   5    return __SESSION_MGR.session_is_valid(session_id)           (def session_reset_idletimer(session_id):   5    __SESSION_MGR.session_reset_idletimer(session_id)            def py_get_admin_setting_lang():   0    """Get language set from system settings."""   2    return __LIBPYTHON.py_get_admin_setting_lang()           !def session_get_lang(session_id):       """   &    @brief Get language configuration.        @param sessionId session ID.       @return current language.       """       lang_max_size = 32       lang = 'en'   -    buf = create_string_buffer(lang_max_size)   <    if __SESSION_MGR.session_get_lang(session_id, buf) == 0:           lang = buf.value       return lang           'def session_get_csrf_token(session_id):       token_max_size = 65       token = ''   .    buf = create_string_buffer(token_max_size)   +    if __SESSION_MGR.session_get_csrfToken(   6            session_id, buf, token_max_size - 1) == 0:           token = buf.value       return token           # libpython   /def py_get_session_id_from_cookie(session_str):   A    return __LIBPYTHON.py_get_session_id_from_cookie(session_str)           def py_get_http_port():   )    return __LIBPYTHON.py_get_http_port()           4def py_get_current_adom_name(session_str, ret_adom):       """   %    @brief Get adom name from cookie.       """   F    return __LIBPYTHON.py_get_current_adom_name(session_str, ret_adom)           def py_get_fazId(adom_oid):       """        FMG gets faz id by adom oid.       """   -    return __LIBPYTHON.py_get_fazId(adom_oid)           +def py_get_current_adom(session_str, adom):   =    return __LIBPYTHON.py_get_current_adom(session_str, adom)           def adom_enabled():       """   :    Gets from session data if the current adom is enabled.       """   1    return bool(__LIBPYTHON.py_get_adom_status())           def get_userid(session_id):       """       @brief Get admin user.   2    @param session_str session string from cookie.       @return current admin user.       """   3    ret_admin = create_string_buffer(ADOM_MAX_SIZE)   /    if __SESSION_MGR.session_get_username_skip(   :            session_id, ret_admin, ADOM_MAX_SIZE, 1) >= 0:           return ret_admin.value   	    else:           return ''           .def get_cur_adom_restricted_prds(session_str):   G    return __LIBPYTHON.py_get_current_adom_restricted_prod(session_str)           (def get_logtype_list_by_logdevtype(ldt):       ret = ''       buf_sz = 128   &    buf = create_string_buffer(buf_sz)   ?    __LIBPYTHON.py_get_logtypes_by_logdevtype(ldt, buf, buf_sz)       if buf:           ret = buf.value       return ret            def get_log_def_disk_quota_sz():   5    return __LIBPYTHON.py_get_log_def_disk_quota_sz()           def py_get_config_gui_number():   1    return __LIBPYTHON.py_get_config_gui_number()           def fn_country_abbr_by_name():   $    fn = __FAZ_BASE.country_get_code       fn.argtypes = [c_char_p]       fn.restype = c_char_p       return fn           def fn_country_abbr_by_ipv4():   +    fn = __LIBPYTHON.get_country_abbr_by_ip   0    fn.argtypes = [c_char_p, c_char_p, c_char_p]       return fn           def get_adom_oid(session_id):   2    return __LIBPYTHON.py_get_adom_oid(session_id)           "def get_restricted_prod(adom_oid):   7    return __LIBPYTHON.py_get_restricted_prod(adom_oid)           (def get_logdev_type_by_os_type(os_type):   B    return __FAZCORE_CTXT.fazcore_dvm_to_faz_devtype(int(os_type))           ;def get_dvm_devtype_by_faz_logdev_type(logdev_type, devid):   @    return __FAZCORE_CTXT.faz_to_dvm_devtype(logdev_type, devid)           def get_img_type():       (    return __LIBPYTHON.py_get_img_type()           def get_adom_name(adom_id):   2    buf = create_string_buffer(code.MAX_ADOM_SIZE)   7    if __LIBPYTHON.py_get_adom_name(adom_id, buf) == 0:           return buf.value   	    else:           return 'root'           (def get_permission(priv_id, session_id):       """   D    Returns one of fazproxy.macros.adminapi.AdminprivPermisssionEnum       """   =    return __LIBPYTHON.py_get_permission(priv_id, session_id)           ,def get_log_ts_index_list(logtype, devtype):       """   "    brief: text search column list       """           # buffer size refer to:   B    #   struct sqlts_index_t in faz_core/cmf/plugin/apps/sys_sql.h   &    fields = create_string_buffer(512)   A    ret = __LIBPYTHON.log_ts_index_list(logtype, devtype, fields)   6    return fields.value if ret == 0 and fields else []           def get_country_flag():       '''       return value:           1: enabled, 0: disabled       '''   0    return __LIBPYTHON.py_country_flag_enabled()           %def get_admin_profile_datamask(user):       sz = 4096   '    customed = create_string_buffer(sz)       ret = {           'dm_fldbmp': 0       }   T    ret['dm_fldbmp'] = __LIBPYTHON.py_get_admin_profile_datamask(user, customed, sz)   #    if customed and customed.value:   (        ret['custflds'] = customed.value       return ret           #def unittest_login(user, password):   '    cookie = create_string_buffer(4096)   ?    sid = __LIBPYTHON.py_unittest_login(user, password, cookie)       return sid, cookie.value            def unittest_logout(session_id):   3    return __SESSION_MGR.session_logout(session_id)           $def get_adom_oid_by_name(adom_name):   9    return __LIBPYTHON.py_get_adom_oid_by_name(adom_name)           #def get_pre_login_banner_message():       '''       C module return status:           0: error or no banner           1: customized banner           2: default banner       '''   (    message = create_string_buffer(3072)   =    status = __LIBPYTHON.py_pre_login_banner_message(message)       if status:           if status == 2:   F            # default message, need restruct to use text-align:justify   )            b = message.value.split('\n')   >            return '\n'.join([b[0], ' '.join(b[1:-2]), b[-2]])           else:                return message.value   	    else:           return None           $def get_post_login_banner_message():       '''       C module return status:           0: error or no banner           1: customized banner           2: default banner       '''   (    message = create_string_buffer(1024)   >    status = __LIBPYTHON.py_post_login_banner_message(message)       if status:           if status == 2:   F            # default message, need restruct to use text-align:justify   )            b = message.value.split('\n')   >            return '\n'.join([b[0], ' '.join(b[1:-2]), b[-2]])           else:                return message.value   	    else:           return None           )def get_admin_from_ssl_client_cert(cert):   )    userjson = create_string_buffer(1024)   D    __LIBPYTHON.py_get_admin_from_ssl_client_cert(cert, userjson, 0)   %    return json.loads(userjson.value)           def get_gui_theme():   )    return __LIBPYTHON.py_get_gui_theme()           def get_logfetch_profile_max():   1    return __LIBPYTHON.get_logfetch_profile_max()           (def get_logforward_client_profile_max():   :    return __LIBPYTHON.get_logforward_client_profile_max()           %def get_log_file_download_max_rows():   7    return __LIBPYTHON.get_log_file_download_max_rows()           def get_utm_log_types():   $    buf = create_string_buffer(1024)   &    __LIBPYTHON.get_utm_log_types(buf)        return json.loads(buf.value)           "def get_tunnel_session_id(devOid):   $    buf = create_string_buffer(1024)   2    __LIBPYTHON.get_tunnel_session_id(devOid, buf)       return buf.value           )def get_dev_geolocation_by_name(devName):       latitude = c_double(0)       longitude = c_double(0)   \    __LIBPYTHON.get_dev_geolocation_by_name(str(devName), byref(latitude), byref(longitude))   ,    return (latitude.value, longitude.value)           !def get_ha_cid(mgmt_id, os_type):       LEN = 24   #    cid = create_string_buffer(LEN)   6    log_dev_type = get_logdev_type_by_os_type(os_type)   0    ret = __LOG_BASE.logdev_ha_cid_from_devtype(   (        cid, LEN, mgmt_id, log_dev_type)   .    return 'UNKNOWN' if ret < 0 else cid.value           %def session_get_userfrom(session_id):   J    max_size = 65  # refer to UserFromMaxSize in include/sessionmgr.h file   (    buf = create_string_buffer(max_size)   J    if __SESSION_MGR.session_get_userfrom(session_id, buf, max_size) == 0:           buf = buf.value       return buf           def get_hostname():   G    max_size = 63  # refer to faz_core/include/fazcore_cfgcommon.h file   (    buf = create_string_buffer(max_size)   -    if __LIBPYTHON.py_get_host_name(buf) > 0:           return buf.value   	    else:           return None           2def is_adom_valid(session_id, remotesvrname=None):   H    return __LIBPYTHON.py_is_adom_valid_by_id(session_id, remotesvrname)           'def get_admin_profile_name(session_id):   2    max_size = 37  # sessionmgr.h AdminProfMaxSize   (    buf = create_string_buffer(max_size)   C    if 0 == __LIBPYTHON.py_get_admin_profile_name(session_id, buf):           return buf.value   	    else:           return None           $def get_datamask_status(session_id):   A    return __LIBPYTHON.py_get_admin_profile_dm_status(session_id)           def has_ondemand_license():   -    return __LIBOSAPI.has_ondemand_license();           def get_geoinfo_by_ip(ip):       """       ip: IP address as string.   &    Returns: A geo ip info dictionary.       Example: {   M        "latitude": 44.389359, "longitude": -79.690331, "country_code": "CA",   L        "city": "Barrie", "region_name": "Ontario", "country_name": "Canada"         }   '      All returned strings are unicode.       """   $    buf = create_string_buffer(2048)   N    if __LIBPYTHON.py_get_geoinfo_by_ip(c_char_p(ip), buf) == 0 and buf.value:           try:   (            return json.loads(buf.value)           except ValueError:               pass       # Something is wrong.       return None5�_�                
  m   -    ����                                                                                                                                                                                                                                                                                                                            �           �           V        [Ӫ�    �  l  n  �      -    return __LIBOSAPI.has_ondemand_license();5�_�   
                 �        ����                                                                                                                                                                                                                                                                                                                            �          �           V       [ӱ�     �   �   �          def fn_country_abbr_by_ipv4():   +    fn = __LIBPYTHON.get_country_abbr_by_ip   0    fn.argtypes = [c_char_p, c_char_p, c_char_p]       return fn    5�_�                     �        ����                                                                                                                                                                                                                                                                                                                            �           �           V        [ӱ�    �   �   �           5�_�             
      �        ����                                                                                                                                                                                                                                                                                                                            �           �           V        [Ӧ�     �   �   �        5�_�                    �        ����                                                                                                                                                                                                                                                                                                                            �           �           V        [Ӧ�    �   �   �        5�_�      	             g   -    ����                                                                                                                                                                                                                                                                                                                            �           �           V        [ӧd    �  f  h  {      ,    return __LIBOSAPI.has_ondemand_license()5�_�                  	  T        ����                                                                                                                                                                                                                                                                                                                            �           �           V        [Ӫ     �      |      {   Ufrom ctypes import CDLL, RTLD_GLOBAL, create_string_buffer, c_char_p, c_double, byref   import code   import json   """   BThis is only a proxy that do one-to-one match with clib functions.       ,Don't including business logic in this file.   """   %# requred for all other libs to work.   /__SRCHD = CDLL("/lib/libsrchd.so", RTLD_GLOBAL)   :__SESSION_MGR = CDLL("/lib/libsessionmgr.so", RTLD_GLOBAL)       2__LIBOSAPI = CDLL("/lib/libosapi.so", RTLD_GLOBAL)       4__CMDB_API = CDLL('/lib/libcmdbapi.so', RTLD_GLOBAL)   __CMDB_API.nCfg_init()       2__CMF_API = CDLL('/lib/libcmfapi.so', RTLD_GLOBAL)   __CMF_API.init_cmdb_app()       5__FAZ_STDEXT = CDLL("/lib/libstdext.so", RTLD_GLOBAL)   -__LZ4 = CDLL("/lib/liblz4.so.1", RTLD_GLOBAL)   4__LOG_BASE = CDLL("/lib/liblogbase.so", RTLD_GLOBAL)   @__FAZCORE_CTXT = CDLL("/lib/libfazcore_context.so", RTLD_GLOBAL)   5__FAZ_BASE = CDLL("/lib/libfaz_base.so", RTLD_GLOBAL)       2__LIBICONV = CDLL("/lib/libiconv.so", RTLD_GLOBAL)   0__LIBAUTH = CDLL("/lib/libauth.so", RTLD_GLOBAL)   3__LIBCERT = CDLL("/lib/libfamcert.so", RTLD_GLOBAL)       7__LIBPYTHON = CDLL("/lib/libfazpython.so", RTLD_GLOBAL)           ADOM_MAX_SIZE = 36           # session manager   !def session_is_valid(session_id):   5    return __SESSION_MGR.session_is_valid(session_id)           (def session_reset_idletimer(session_id):   5    __SESSION_MGR.session_reset_idletimer(session_id)            def py_get_admin_setting_lang():   0    """Get language set from system settings."""   2    return __LIBPYTHON.py_get_admin_setting_lang()           !def session_get_lang(session_id):       """   &    @brief Get language configuration.        @param sessionId session ID.       @return current language.       """       lang_max_size = 32       lang = 'en'   -    buf = create_string_buffer(lang_max_size)   <    if __SESSION_MGR.session_get_lang(session_id, buf) == 0:           lang = buf.value       return lang           'def session_get_csrf_token(session_id):       token_max_size = 65       token = ''   .    buf = create_string_buffer(token_max_size)   +    if __SESSION_MGR.session_get_csrfToken(   6            session_id, buf, token_max_size - 1) == 0:           token = buf.value       return token           # libpython   /def py_get_session_id_from_cookie(session_str):   A    return __LIBPYTHON.py_get_session_id_from_cookie(session_str)           def py_get_http_port():   )    return __LIBPYTHON.py_get_http_port()           4def py_get_current_adom_name(session_str, ret_adom):       """   %    @brief Get adom name from cookie.       """   F    return __LIBPYTHON.py_get_current_adom_name(session_str, ret_adom)           def py_get_fazId(adom_oid):       """        FMG gets faz id by adom oid.       """   -    return __LIBPYTHON.py_get_fazId(adom_oid)           +def py_get_current_adom(session_str, adom):   =    return __LIBPYTHON.py_get_current_adom(session_str, adom)           def adom_enabled():       """   :    Gets from session data if the current adom is enabled.       """   1    return bool(__LIBPYTHON.py_get_adom_status())           def get_userid(session_id):       """       @brief Get admin user.   2    @param session_str session string from cookie.       @return current admin user.       """   3    ret_admin = create_string_buffer(ADOM_MAX_SIZE)   /    if __SESSION_MGR.session_get_username_skip(   :            session_id, ret_admin, ADOM_MAX_SIZE, 1) >= 0:           return ret_admin.value   	    else:           return ''           .def get_cur_adom_restricted_prds(session_str):   G    return __LIBPYTHON.py_get_current_adom_restricted_prod(session_str)           (def get_logtype_list_by_logdevtype(ldt):       ret = ''       buf_sz = 128   &    buf = create_string_buffer(buf_sz)   ?    __LIBPYTHON.py_get_logtypes_by_logdevtype(ldt, buf, buf_sz)       if buf:           ret = buf.value       return ret            def get_log_def_disk_quota_sz():   5    return __LIBPYTHON.py_get_log_def_disk_quota_sz()           def py_get_config_gui_number():   1    return __LIBPYTHON.py_get_config_gui_number()           def fn_country_abbr_by_name():   $    fn = __FAZ_BASE.country_get_code       fn.argtypes = [c_char_p]       fn.restype = c_char_p       return fn           def get_adom_oid(session_id):   2    return __LIBPYTHON.py_get_adom_oid(session_id)           "def get_restricted_prod(adom_oid):   7    return __LIBPYTHON.py_get_restricted_prod(adom_oid)           (def get_logdev_type_by_os_type(os_type):   B    return __FAZCORE_CTXT.fazcore_dvm_to_faz_devtype(int(os_type))           ;def get_dvm_devtype_by_faz_logdev_type(logdev_type, devid):   @    return __FAZCORE_CTXT.faz_to_dvm_devtype(logdev_type, devid)           def get_img_type():       (    return __LIBPYTHON.py_get_img_type()           def get_adom_name(adom_id):   2    buf = create_string_buffer(code.MAX_ADOM_SIZE)   7    if __LIBPYTHON.py_get_adom_name(adom_id, buf) == 0:           return buf.value   	    else:           return 'root'           (def get_permission(priv_id, session_id):       """   D    Returns one of fazproxy.macros.adminapi.AdminprivPermisssionEnum       """   =    return __LIBPYTHON.py_get_permission(priv_id, session_id)           ,def get_log_ts_index_list(logtype, devtype):       """   "    brief: text search column list       """           # buffer size refer to:   B    #   struct sqlts_index_t in faz_core/cmf/plugin/apps/sys_sql.h   &    fields = create_string_buffer(512)   A    ret = __LIBPYTHON.log_ts_index_list(logtype, devtype, fields)   6    return fields.value if ret == 0 and fields else []           def get_country_flag():       '''       return value:           1: enabled, 0: disabled       '''   0    return __LIBPYTHON.py_country_flag_enabled()           %def get_admin_profile_datamask(user):       sz = 4096   '    customed = create_string_buffer(sz)       ret = {           'dm_fldbmp': 0       }   T    ret['dm_fldbmp'] = __LIBPYTHON.py_get_admin_profile_datamask(user, customed, sz)   #    if customed and customed.value:   (        ret['custflds'] = customed.value       return ret           #def unittest_login(user, password):   '    cookie = create_string_buffer(4096)   ?    sid = __LIBPYTHON.py_unittest_login(user, password, cookie)       return sid, cookie.value            def unittest_logout(session_id):   3    return __SESSION_MGR.session_logout(session_id)           $def get_adom_oid_by_name(adom_name):   9    return __LIBPYTHON.py_get_adom_oid_by_name(adom_name)           #def get_pre_login_banner_message():       '''       C module return status:           0: error or no banner           1: customized banner           2: default banner       '''   (    message = create_string_buffer(3072)   =    status = __LIBPYTHON.py_pre_login_banner_message(message)       if status:           if status == 2:   F            # default message, need restruct to use text-align:justify   )            b = message.value.split('\n')   >            return '\n'.join([b[0], ' '.join(b[1:-2]), b[-2]])           else:                return message.value   	    else:           return None           $def get_post_login_banner_message():       '''       C module return status:           0: error or no banner           1: customized banner           2: default banner       '''   (    message = create_string_buffer(1024)   >    status = __LIBPYTHON.py_post_login_banner_message(message)       if status:           if status == 2:   F            # default message, need restruct to use text-align:justify   )            b = message.value.split('\n')   >            return '\n'.join([b[0], ' '.join(b[1:-2]), b[-2]])           else:                return message.value   	    else:           return None           )def get_admin_from_ssl_client_cert(cert):   )    userjson = create_string_buffer(1024)   D    __LIBPYTHON.py_get_admin_from_ssl_client_cert(cert, userjson, 0)   %    return json.loads(userjson.value)           def get_gui_theme():   )    return __LIBPYTHON.py_get_gui_theme()           def get_logfetch_profile_max():   1    return __LIBPYTHON.get_logfetch_profile_max()           (def get_logforward_client_profile_max():   :    return __LIBPYTHON.get_logforward_client_profile_max()           %def get_log_file_download_max_rows():   7    return __LIBPYTHON.get_log_file_download_max_rows()           def get_utm_log_types():   $    buf = create_string_buffer(1024)   &    __LIBPYTHON.get_utm_log_types(buf)        return json.loads(buf.value)           "def get_tunnel_session_id(devOid):   $    buf = create_string_buffer(1024)   2    __LIBPYTHON.get_tunnel_session_id(devOid, buf)       return buf.value           )def get_dev_geolocation_by_name(devName):       latitude = c_double(0)       longitude = c_double(0)   \    __LIBPYTHON.get_dev_geolocation_by_name(str(devName), byref(latitude), byref(longitude))   ,    return (latitude.value, longitude.value)           !def get_ha_cid(mgmt_id, os_type):       LEN = 24   #    cid = create_string_buffer(LEN)   6    log_dev_type = get_logdev_type_by_os_type(os_type)   0    ret = __LOG_BASE.logdev_ha_cid_from_devtype(   (        cid, LEN, mgmt_id, log_dev_type)   .    return 'UNKNOWN' if ret < 0 else cid.value           %def session_get_userfrom(session_id):   J    max_size = 65  # refer to UserFromMaxSize in include/sessionmgr.h file   (    buf = create_string_buffer(max_size)   J    if __SESSION_MGR.session_get_userfrom(session_id, buf, max_size) == 0:           buf = buf.value       return buf           def get_hostname():   G    max_size = 63  # refer to faz_core/include/fazcore_cfgcommon.h file   (    buf = create_string_buffer(max_size)   -    if __LIBPYTHON.py_get_host_name(buf) > 0:           return buf.value   	    else:           return None           2def is_adom_valid(session_id, remotesvrname=None):   H    return __LIBPYTHON.py_is_adom_valid_by_id(session_id, remotesvrname)           'def get_admin_profile_name(session_id):   2    max_size = 37  # sessionmgr.h AdminProfMaxSize   (    buf = create_string_buffer(max_size)   C    if 0 == __LIBPYTHON.py_get_admin_profile_name(session_id, buf):           return buf.value   	    else:           return None           $def get_datamask_status(session_id):   A    return __LIBPYTHON.py_get_admin_profile_dm_status(session_id)           def has_ondemand_license():   ,    return __LIBOSAPI.has_ondemand_license()           def get_geoinfo_by_ip(ip):       """       ip: IP address as string.   &    Returns: A geo ip info dictionary.       Example: {   M        "latitude": 44.389359, "longitude": -79.690331, "country_code": "CA",   L        "city": "Barrie", "region_name": "Ontario", "country_name": "Canada"         }   '      All returned strings are unicode.       """   $    buf = create_string_buffer(2048)   N    if __LIBPYTHON.py_get_geoinfo_by_ip(c_char_p(ip), buf) == 0 and buf.value:           try:   (            return json.loads(buf.value)           except ValueError:               pass       # Something is wrong.       return None5�_�                     m        ����                                                                                                                                                                                                                                                                                                                            m          m          V       [ӕs     �   l   u        5��