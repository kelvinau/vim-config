Vim�UnDo� .����@�}d�Q�ʔ�_X�T=�Z�]ə]  W                                   \&p�    _�                    �       ����                                                                                                                                                                                                                                                                                                                           �         �          V       \&p�     �  �  �          ||||||| .merge-left.r123597   =======5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V        \&p�     �              >>>>>>> .merge-right.r1235975�_�                    �        ����                                                                                                                                                                                                                                                                                                                           �          �           V        \&p�    �  �  �              <<<<<<< .working   4def cdb_io(request, url, method, adom, params=None):   .    # to handle get/update for CMDB/CDB access       sendInfo = {           'method': method,           'adom': adom,           'params': [{               'url': url,   ;            '__session': get_session_from_request(request),           }],       }           if params:   .        sendInfo['params'][0]['data'] = params       &    ret = FmgJSONRpc2.submit(sendInfo)       return ret    5��