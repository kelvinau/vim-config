Vim�UnDo� �Y�t�r gО1�Y-a|�c���\q�p㋆  �   4        ret['country_code'] = clib.get_country_abbr(  7                     
    [�Ϸ    _�                   1   8    ����                                                                                                                                                                                                                                                                                                                           3         4          V       [�Ϸ    �  0  2  �      8        ret = super(SiteToSiteView, cls).from_bknd(data)   #        import pdb; pdb.set_trace()5�_�                   4        ����                                                                                                                                                                                                                                                                                                                           4         3          V       [���     �  4  5  �    �  4  5  �      O        locip_record = cls.objects.geo_reader.record_by_addr(str(ret['locip']))   O        remip_record = cls.objects.geo_reader.record_by_addr(str(ret['remip']))5�_�                   3        ����                                                                                                                                                                                                                                                                                                                           4         3          V       [���     �  2  4          R        #  locip_record = cls.objects.geo_reader.record_by_addr(str(ret['locip']))�  3  5          R        #  remip_record = cls.objects.geo_reader.record_by_addr(str(ret['remip']))5�_�                   5   M    ����                                                                                                                                                                                                                                                                                                                           4         3          V       [���     �  4  6  �      E        locip_record = cls.objects.geo_reader.record_by_addr(str(''))5�_�                   5   B    ����                                                                                                                                                                                                                                                                                                                           5   C      5   B       v   B    [���     �  4  6  �      G        locip_record = cls.objects.geo_reader.record_by_addr(str('13'))5�_�                   5   B    ����                                                                                                                                                                                                                                                                                                                           6   J      6   F       v   F    [��      �  5  6  �    �  4  6  �      Q        locip_record = cls.objects.geo_reader.record_by_addr(str('62.23.141.22'))5�_�                   6   F    ����                                                                                                                                                                                                                                                                                                                           2   "      2   "       V   '    [��    �  6  7  �    �  5  7  �      V        remip_record = cls.objects.geo_reader.record_by_addr(str(ret['62.23.141.22']))5�_�                   2        ����                                                                                                                                                                                                                                                                                                                           6   A      6   D       v   D    [��T    �  1  3          &        #  import pdb; pdb.set_trace()5�_�                   6   A    ����                                                                                                                                                                                                                                                                                                                           6   A      6   D       v   D    [�Ш     �  5  7  �      R        remip_record = cls.objects.geo_reader.record_by_addr(str('62.23.141.22']))5�_�                   6   O    ����                                                                                                                                                                                                                                                                                                                           6   A      6   D       v   D    [�Щ    �  5  7  �      Q        remip_record = cls.objects.geo_reader.record_by_addr(str('62.23.141.22'))5�_�                   6   Q    ����                                                                                                                                                                                                                                                                                                                           �         �          V       [��;    �  5  7  �      Q        remip_record = cls.objects.geo_reader.record_by_addr(str('62.23.141.22'))   #        import pdb; pdb.set_trace()5�_�                   6   Q    ����                                                                                                                                                                                                                                                                                                                           7          7           V        [��P     �  5  7  �      Q        remip_record = cls.objects.geo_reader.record_by_addr(str('62.23.141.22'))            5�_�                   7        ����                                                                                                                                                                                                                                                                                                                           7          7           V        [��Y     �  6  8        �  7  8  �    �  6  7  �      8            ret['country_code'] = clib.get_country_abbr(   (                str(ret['dstip'])).value5�_�                   7        ����                                                                                                                                                                                                                                                                                                                           7          7           V        [��Z     �  6  8  �      4        ret['country_code'] = clib.get_country_abbr(5�_�                   8        ����                                                                                                                                                                                                                                                                                                                           7          7           V        [��]     �  7  9  �                      str('')).value5�_�                   8       ����                                                                                                                                                                                                                                                                                                                           7          7           V        [��`     �  7  9  �      *                str('62.23.141.22')).value5�_�                   7       ����                                                                                                                                                                                                                                                                                                                           ;         ;          V       [��d   	 �  6  8  �      %        test = clib.get_country_abbr(5�_�                   ;        ����                                                                                                                                                                                                                                                                                                                           ;         ;          V       [���   
 �  :  <          &        #  import pdb; pdb.set_trace()5�_�                    ;        ����                                                                                                                                                                                                                                                                                                                           ;         ;          V       [��N    �  :  <          #        import pdb; pdb.set_trace()5�_�                   �        ����                                                                                                                                                                                                                                                                                                                           �          �           V        [���     �  �  �  �    �  �  �  �      8            ret['country_code'] = clib.get_country_abbr(   (                str(ret['dstip'])).value5�_�                  �        ����                                                                                                                                                                                                                                                                                                                           �          �           V        [��     �  �  �          ;            #  ret['country_code'] = clib.get_country_abbr(�  �  �          +                #  str(ret['dstip'])).value5�_�                   �   (    ����                                                                                                                                                                                                                                                                                                                           �          �           V        [��     �  �  �  �       �  �  �  �      $            ret['country_code'] = ''5�_�                   �   #    ����                                                                                                                                                                                                                                                                                                                           �   %      �   "       v   "    [��
    �  �  �  �      &            ret['country_code'] = 'TW'5�_�                   �   "    ����                                                                                                                                                                                                                                                                                                                           �   "      �   "       V   "    [��&     �  �  �  �    �  �  �  �      8            ret['country_code'] = clib.get_country_abbr(   +                #  str(ret['dstip'])).value5�_�      	             �        ����                                                                                                                                                                                                                                                                                                                           �   "      �   "       V   "    [��'     �  �  �          (                str(ret['dstip'])).value5�_�      
           	  �        ����                                                                                                                                                                                                                                                                                                                           �   "      �   "       V   "    [��+     �  �  �  �                      str('')).value5�_�   	               
  �       ����                                                                                                                                                                                                                                                                                                                           �   "      �   "       V   "    [��8    �  �  �  �      *                str('62.23.141.22')).value5�_�                  �        ����                                                                                                                                                                                                                                                                                                                           �         �          V       [��     �  �  �        �  �  �  �       5�_�                   �       ����                                                                                                                                                                                                                                                                                                                           �         �          V       [���     �  �  �        �  �  �  �       5��