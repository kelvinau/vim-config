Vim�UnDo� ��+e���Ψ�{]*�B\u���7_Qm�kh�t�~                                      [���     _�                              ����                                                                                                                                                                                                                                                                                                                                                             [�ǿ     �                  #ifndef __PYLIB_H__   #define __PYLIB_H__       #include "debug.h"   #include "json/json.h"       #ifdef __cplusplus   extern "C" {   #endif       3int py_get_session_id_from_cookie(char* cookieStr);   int py_get_config_gui_number();   ,int py_get_current_adom_id(char* cookieStr);   >int py_get_current_adom_name(char* cookieStr, char* adomName);   &int py_is_super_user(char* cookieStr);   (uint32_t py_get_log_def_disk_quota_sz();   $int py_get_adom_oid(int session_id);   )int py_get_restricted_prod(int adom_oid);   int py_get_img_type();   @int py_unittest_login(char *user, char *pass, char* cookie_out);   -int py_get_adom_oid_by_name(char* adom_name);   Oint py_get_admin_from_ssl_client_cert(char *cert, char *userjson, int sslfail);   Dint py_is_adom_valid_by_id(unsigned int sessionId, char *remoteSvr);       #ifdef __cplusplus   }   #endif       #endif /* __PYLIB_H__ */5��