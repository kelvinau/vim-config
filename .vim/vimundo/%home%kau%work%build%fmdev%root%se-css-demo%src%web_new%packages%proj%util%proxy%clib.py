Vim�UnDo� �'��k�\���=eOp��G3�Q��  �                 0       0   0   0    [��1    _�                     N        ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�     �   N   Q  x    �   N   O  x    5�_�                    Q        ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�     �   P   S  z       5�_�                    N        ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�     �   M   P  {       5�_�                    P       ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�     �   O   Q  |      /def py_get_session_id_from_cookie(session_str):5�_�                    P   )    ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�     �   O   Q  |      +def py_get_cookie_name_prefix(session_str):5�_�                    Q   @    ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�     �   P   R  |      A    return __LIBPYTHON.py_get_session_id_from_cookie(session_str)5�_�                    Q   4    ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�     �   P   R  |      6    return __LIBPYTHON.py_get_session_id_from_cookie()5�_�      	              Q   !    ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�    �   P   R  |      #    return __LIBPYTHON.py_get_ses()5�_�      
           	  {   -    ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�q�    �  z  |  |      -    return __LIBOSAPI.has_ondemand_license();5�_�   	              
   #        ����                                                                                                                                                                                                                                                                                                                            L          M          V       [�r\     �   "   %  |       5�_�   
                 $        ����                                                                                                                                                                                                                                                                                                                            $           $           V        [�r]     �   #   %  |    �   $   %  |    �   #   $           5�_�                    $       ����                                                                                                                                                                                                                                                                                                                            $           $          V        [�r^     �   #   %  }      COOKIE_NAME_PREFIX5�_�                    Q        ����                                                                                                                                                                                                                                                                                                                            $           $          V        [�rl     �   P   S  }       def py_get_cookie_name_prefix():5�_�                    R        ����                                                                                                                                                                                                                                                                                                                            R           R           V       [�rr     �   Q   T  }    �   R   S  }    �   Q   R           5�_�                    S       ����                                                                                                                                                                                                                                                                                                                            R           S          V       [�rs     �   R   U            if not COOKIE_NAME_PREFIX:5�_�                    T        ����                                                                                                                                                                                                                                                                                                                            R           S          V       [�ru     �   S   U  �       5�_�                    U       ����                                                                                                                                                                                                                                                                                                                            U          U   1       v   1    [�r{     �   T   V  �      2    return __LIBPYTHON.py_get_cookie_name_prefix()5�_�                    T       ����                                                                                                                                                                                                                                                                                                                            U          U   1       v   1    [�r|     �   S   U  �              COOKIE_NAME_PREFIX = �   T   U  �    5�_�                    T   D    ����                                                                                                                                                                                                                                                                                                                            U          U   1       v   1    [�r}    �   U   W  �          return �   S   V  �      D        COOKIE_NAME_PREFIX = __LIBPYTHON.py_get_cookie_name_prefix()5�_�                    %        ����                                                                                                                                                                                                                                                                                                                            V          V   1       v   1    [�r�     �   $   '  �       5�_�                    &        ����                                                                                                                                                                                                                                                                                                                            &           &           V   4    [�r�    �   %   &           5�_�                    %        ����                                                                                                                                                                                                                                                                                                                            &           &           V   4    [�r�    �   $   '  �       5�_�                    V        ����                                                                                                                                                                                                                                                                                                                            V           V           V       [�sR    �   U   V           5�_�                   T       ����                                                                                                                                                                                                                                                                                                                           f   F      k          V   j    [�{�     �   S   V  �          if not COOKIE_NAME_PREFIX:5�_�                    U        ����                                                                                                                                                                                                                                                                                                                            U           U           V       [�{�     �   T   [  �    �   U   V  �    �   T   U           5�_�                    U        ����                                                                                                                                                                                                                                                                                                                            U           Z           V        [�{�     �   T   [  �      G    max_size = 63  # refer to faz_core/include/fazcore_cfgcommon.h file   (    buf = create_string_buffer(max_size)   -    if __LIBPYTHON.py_get_host_name(buf) > 0:           return buf.value   	    else:           return None5�_�                    Z       ����                                                                                                                                                                                                                                                                                                                            U           Z           V        [�{�     �   Y   \  �                  return None5�_�                    W   '    ����                                                                                                                                                                                                                                                                                                                            U           Z           V        [�{�     �   V   X  �      1        if __LIBPYTHON.py_get_host_name(buf) > 0:5�_�                    W   :    ����                                                                                                                                                                                                                                                                                                                            U           Z           V        [�{�     �   V   Y  �      :        if __LIBPYTHON.py_get_cookie_name_prefix(buf) > 0:5�_�                     X        ����                                                                                                                                                                                                                                                                                                                            ]          ]          v       [�{�     �   W   Y  �       �   X   Y  �    5�_�      !               X        ����                                                                                                                                                                                                                                                                                                                            X          X          V       [�{�     �   W   Y  �      COOKIE_NAME_PREFIX5�_�       "           !   X       ����                                                                                                                                                                                                                                                                                                                            X          X          V       [�{�     �   W   Y  �                  COOKIE_NAME_PREFIX5�_�   !   #           "   Y        ����                                                                                                                                                                                                                                                                                                                            Y          Y          V   )    [�{�     �   X   Y                      return buf.value5�_�   "   $           #   Y        ����                                                                                                                                                                                                                                                                                                                            Y          \          V       [�{�   	 �   X   Y                  else:               return None       D        COOKIE_NAME_PREFIX = __LIBPYTHON.py_get_cookie_name_prefix()5�_�   #   %           $   U       ����                                                                                                                                                                                                                                                                                                                            Y          Y          V       [�{�     �   T   V  �      K        max_size = 63  # refer to faz_core/include/fazcore_cfgcommon.h file5�_�   $   &           %   U   F    ����                                                                                                                                                                                                                                                                                                                            Y          Y          V       [�|L   
 �   T   V  �      K        max_size = 37  # refer to faz_core/include/fazcore_cfgcommon.h file5�_�   %   '           &   W   :    ����                                                                                                                                                                                                                                                                                                                            Y          Y          V       [�~�     �   W   Y  �                  print ''�   V   Y  �      :        if __LIBPYTHON.py_get_cookie_name_prefix(buf) > 0:5�_�   &   (           '   V   ,    ����                                                                                                                                                                                                                                                                                                                            Z          Z          V       [�     �   V   X  �              print ()�   U   X  �      ,        buf = create_string_buffer(max_size)5�_�   '   )           (   S       ����                                                                                                                                                                                                                                                                                                                            [          [          V       [�
     �   R   U  �          global COOKIE_NAME_PREFIX5�_�   (   *           )   U       ����                                                                                                                                                                                                                                                                                                                            \          \          V       [�     �   U   W  �              print ''�   T   W  �          if not COOKIE_NAME_PREFIX:5�_�   )   +           *   T        ����                                                                                                                                                                                                                                                                                                                            ]          ]          V       [�    �   S   U              5�_�   *   ,           +   [        ����                                                                                                                                                                                                                                                                                                                            [          [          V   0    [�'     �   Z   [                      print 'here'5�_�   +   -           ,   Y        ����                                                                                                                                                                                                                                                                                                                            Y          Y          V       [�(     �   X   Y                  print ('abc')5�_�   ,   .           -   V        ����                                                                                                                                                                                                                                                                                                                            V          V          V       [�)     �   U   V                  print 'def'5�_�   -   /           .   Y   *    ����                                                                                                                                                                                                                                                                                                                            V          V          V       [�,     �   Y   [  �                  print ()�   X   [  �      *            COOKIE_NAME_PREFIX = buf.value5�_�   .   0           /   Z       ����                                                                                                                                                                                                                                                                                                                            V          V          V       [�2    �   Y   [  �                  print ('value:')5�_�   /               0   Z        ����                                                                                                                                                                                                                                                                                                                            Z   &       Z   &       V   \    [��0    �   Y   Z          '            print ('value:', buf.value)5�_�                    U   B    ����                                                                                                                                                                                                                                                                                                                            V           V           V       [�u&    �   T   V  �      E        COOKIE_NAME_PREFIX = __LIBPYTHON.py_get_cookie_name_prefixx()5��