Vim�UnDo� �,si�������\L��+�J���<�Ϊ����  �             fiMessageBox            +       +   +   +    \��#    _�                    *       ����                                                                                                                                                                                                                                                                                                                                                             \���     �  *  ,              if ()�  )  ,  ~            }5�_�                   +   
    ����                                                                                                                                                                                                                                                                                                                                                             \���     �  *  ,              if (ctrl.errors.errors)5�_�                   +       ����                                                                                                                                                                                                                                                                                                                                                             \���     �  +  -  �    �  *  -              if (!ctrl.errors.errors)5�_�                   .        ����                                                                                                                                                                                                                                                                                                                           .   
      B          V       \���     �  -  .                let promise;         switch (action) {           case 'create':   =          promise = fiRecorderIo.addCameraProfile(ctrl.data);             break;           case 'edit':   F          promise = fiRecorderIo.updateCameraProfile(mkey, ctrl.data);             break;         }         promise.then(() => {           if (!modalInstance) {   @          $state.go('adom.fortirecorder.manager.cameraprofile');   	        }           else {             modalInstance.close({               data: ctrl.data,             });   	        }         }, (err) => {         console.error(err);         }).finally(() => {});5�_�                   ,        ����                                                                                                                                                                                                                                                                                                                           ,          ,           V        \���     �  +  A  k    �  ,  -  k    �  +  ,           5�_�                   ,        ����                                                                                                                                                                                                                                                                                                                           ,          A          V       \���     �  ?  A                }).finally(() => {});�  >  @                console.error(err);�  =  ?                }, (err) => {�  <  >          	        }�  ;  =                    });�  :  <                      data: ctrl.data,�  9  ;                    modalInstance.close({�  8  :                  else {�  7  9          	        }�  6  8          @          $state.go('adom.fortirecorder.manager.cameraprofile');�  5  7                  if (!modalInstance) {�  4  6                promise.then(() => {�  3  5                }�  2  4                    break;�  1  3          F          promise = fiRecorderIo.updateCameraProfile(mkey, ctrl.data);�  0  2                  case 'edit':�  /  1                    break;�  .  0          =          promise = fiRecorderIo.addCameraProfile(ctrl.data);�  -  /                  case 'create':�  ,  .                switch (action) {�  +  -                let promise;5�_�                   B        ����                                                                                                                                                                                                                                                                                                                           B          C           V       \���    �  A  B               5�_�      	                 2    ����                                                                                                                                                                                                                                                                                                                           N   2      N   3       v   3    \��     �      	  ~      2    const {action, mkey, modalInstance} = rParams;5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                           Q   2      Q   3       v   3    \��     �        �          fiIo.listCameraProfiles()�        �       5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                           R   2      R   3       v   3    \��     �        �          fiIo.listCameraProfiles()5�_�   
                    %    ����                                                                                                                                                                                                                                                                                                                           R   2      R   3       v   3    \��     �      	  �    �      	  �      &    fiIo.listCameraProfiles().then(())5�_�                       $    ����                                                                                                                                                                                                                                                                                                                           T   2      T   3       v   3    \��     �        �      *    fiIo.listCameraProfiles().then(() => {5�_�                            ����                                                                                                                                                                                                                                                                                                                           T   2      T   3       v   3    \��     �      	  �       5�_�                           ����                                                                                                                                                                                                                                                                                                                           T   2      T   3       v   3    \��    �      	  �            console.log(r)5�_�                           ����                                                                                                                                                                                                                                                                                                                           T   2      T   3       v   3    \��4    �        �      +    fiIo.listCameraProfiles().then((r) => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                         "       v   "    \��     �        �      3    fiRecorderIo.listCameraProfiles().then((r) => {�        �    5�_�                       *    ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \�߃    �        �      :    fiRecorderIo.listCameraDevicesDiscover().then((r) => {5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \�ߦ     �        �      ;    fiRecorderIo.listCameraDevicesDiscovery().then((r) => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \���     �      	  �            console.log(r);5�_�                           ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \���     �      	  �            5�_�                           ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \��     �      	  �            const found = r.find((p))5�_�                           ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \��     �      	  �      #      const found = r.find((p) => )5�_�                       *    ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \��	     �      	  �      +      const found = r.find(({profile}) => )5�_�                            ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \��O     �        �      	    if ()�        �       5�_�                           ����                                                                                                                                                                                                                                                                                                                                         )       v   "    \��R     �      	  �    �      	  �          if (action === 'edit')5�_�                    
        ����                                                                                                                                                                                                                                                                                                                            
   :                 V       \��V     �   	   
          ;    fiRecorderIo.listCameraDevicesDiscovery().then((r) => {   7      const found = r.find(({profile}) => profile === )       })5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        \��W     �        �    �      	  �    �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       \��Z     �   	                 })�      
          7      const found = r.find(({profile}) => profile === )�      	          ;    fiRecorderIo.listCameraDevicesDiscovery().then((r) => {5�_�                    	   8    ����                                                                                                                                                                                                                                                                                                                                                V       \��     �      
  �      9        const found = r.find(({profile}) => profile === )5�_�                     	   >    ����                                                                                                                                                                                                                                                                                                                                                V       \��     �        �      >        const found = r.find(({profile}) => profile === mkey);5�_�      !               
        ����                                                                                                                                                                                                                                                                                                                                                V       \���     �   	     �       5�_�       "           !   
        ����                                                                                                                                                                                                                                                                                                                                                V       \���     �   	     �       5�_�   !   #           "   
        ����                                                                                                                                                                                                                                                                                                                                                V       \���     �   	     �       5�_�   "   $           #   
        ����                                                                                                                                                                                                                                                                                                                            
          
          V       \���     �   	   
                  return found5�_�   #   %           $   	   >    ����                                                                                                                                                                                                                                                                                                                            
          
          V       \���     �   
     �    �   	     �              if ()�        �      >        const found = r.find(({profile}) => profile === mkey);5�_�   $   &           %      �    ����                                                                                                                                                                                                                                                                                                                                                V       \���     �        �      �  mod.controller('fiForitiRecorderCameraProfileEditCtrl', function ($scope, $state, $q, fiRecorderIo, fiModal, rParams, fiRecorderUtil, $timeout) {5�_�   %   '           &      �    ����                                                                                                                                                                                                                                                                                                                                                V       \��     �        �      �  mod.controller('fiForitiRecorderCameraProfileEditCtrl', function ($scope, $state, $q, fiRecorderIo, fiModal, rParams, fiRecorderUtil, $timeout, fiMessage) {5�_�   &   (           '           ����                                                                                                                                                                                                                                                                                                                                                  V   �    \��     �   
     �    �        �    �   
              5�_�   '   )           (           ����                                                                                                                                                                                                                                                                                                                                                  V        \��     �   
             fiMessageBox5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                  V        \��     �   
     �                fiMessageBox5�_�   )   +           *      &    ����                                                                                                                                                                                                                                                                                                                                                  V        \��!     �   
     �      &          fiMessageBox.show(gettext())5�_�   *               +      $    ����                                                                                                                                                                                                                                                                                                                                                  V        \��"    �   
     �      '          fiMessageBox.show(gettext());5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V���    \��X     �      	        5��