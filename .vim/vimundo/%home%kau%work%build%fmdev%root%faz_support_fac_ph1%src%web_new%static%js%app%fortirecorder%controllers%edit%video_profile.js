Vim�UnDo� ��7-�u/����)���Ȕ�	n�X8�<3^   b                                  \��>    _�                     =       ����                                                                                                                                                                                                                                                                                                                                                             \��0     �   =   ?   a      	    if ()�   <   ?   `          };5�_�                    >       ����                                                                                                                                                                                                                                                                                                                                                             \��7     �   =   ?   a          if (ctrl.errors.errors)5�_�                    >       ����                                                                                                                                                                                                                                                                                                                                                             \��9     �   >   @   b    �   =   @   a          if (!ctrl.errors.errors)5�_�                    A        ����                                                                                                                                                                                                                                                                                                                            A          U          V       \��;     �   @   A              let promise;       switch (action) {         case 'create':   :        promise = fiRecorderIo.addVideoProfile(ctrl.data);           break;         case 'edit':   C        promise = fiRecorderIo.updateVideoProfile(mkey, ctrl.data);           break;       }       promise.then(() => {         if (!modalInstance) {   =        $state.go('adom.fortirecorder.manager.videoprofile');         }         else {           modalInstance.close({             data: ctrl.data,           });         }       }, (err) => {         console.error(err);       }).finally(() => {});5�_�                    ?        ����                                                                                                                                                                                                                                                                                                                            ?           ?           V       \��<     �   >   T   M    �   ?   @   M    �   >   ?           5�_�                     ?        ����                                                                                                                                                                                                                                                                                                                            ?           T          V       \��=    �   R   T              }).finally(() => {});�   Q   S                console.error(err);�   P   R              }, (err) => {�   O   Q                }�   N   P                  });�   M   O                    data: ctrl.data,�   L   N                  modalInstance.close({�   K   M                else {�   J   L                }�   I   K          =        $state.go('adom.fortirecorder.manager.videoprofile');�   H   J                if (!modalInstance) {�   G   I              promise.then(() => {�   F   H              }�   E   G                  break;�   D   F          C        promise = fiRecorderIo.updateVideoProfile(mkey, ctrl.data);�   C   E                case 'edit':�   B   D                  break;�   A   C          :        promise = fiRecorderIo.addVideoProfile(ctrl.data);�   @   B                case 'create':�   ?   A              switch (action) {�   >   @              let promise;5��