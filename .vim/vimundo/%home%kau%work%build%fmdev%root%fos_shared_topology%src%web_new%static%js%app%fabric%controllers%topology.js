Vim�UnDo� e`r�������2����}id5���������   n              G   G       G   G   G    [۪�   
 _�                  G           ����                                                                                                                                                                                                                                                                                                                                         3       v   3    [۪�     �               n   (function(mod) {       ]  mod.controller('FiFabricPhysicalTopologyController', function($scope, $state, $stateParams,       topologyState,       TOPOLOGY,       fiDvmDataLoader,       rCsfGrps) {   )    if (!$stateParams.selectedCsfGroup) {           return;         }         var ctrl = this;             ctrl.csfs = rCsfGrps;         ctrl.changeCsf = csf => {   #        $state.go($state.current, {              selectedCsfGroup: csf,   %        }, {reload: $state.current});         }   <      ctrl.selectedCsfGroup = $stateParams.selectedCsfGroup;   ,      // update SN for selectedCsfGroup root   0      fiDvmDataLoader.isReady().then(function(){   a        ctrl.selectedCsfGroup.rootData = fiDvmDataLoader.getDevice(ctrl.selectedCsfGroup.rootId);   A        // console.log('rootSn', ctrl.selectedCsfGroup.rootData);           /**   L         * In this example, all we need to do is to pass the settings to the   F         * component and let it deals with all the data collection and            * rendering.            */   <        var BUBBLE_OPTIONS = TOPOLOGY.CONFIG.BUBBLE_OPTIONS;   <        var UPSTREAM_TYPES = TOPOLOGY.CONFIG.UPSTREAM_TYPES;   :        var TRAFFIC_TYPES = TOPOLOGY.CONFIG.TRAFFIC_TYPES;   J        var ACCESS_DEVICE_OPTIONS = TOPOLOGY.CONFIG.ACCESS_DEVICE_OPTIONS;   <        var TOPOLOGY_TYPES = TOPOLOGY.CONFIG.TOPOLOGY_TYPES;   B        /* Physical + Access Device SHOW whenever page reloaded */   ?        topologyState.accessDevice(ACCESS_DEVICE_OPTIONS.SHOW);           ctrl.settings = {               baseFontSize: 16,   Y            /* If state is ever set, we use that, so that when page refresh, the settings   2             * is preserved, else initialize it */   Q            bubbleOption: topologyState.bubbleOption() || BUBBLE_OPTIONS.TRAFFIC,               currentFgt: {   8              serial: ctrl.selectedCsfGroup.rootData.sn,   =              deviceName: ctrl.selectedCsfGroup.rootData.name               },               isRealtime: true,   L            trafficType: topologyState.trafficType() || TRAFFIC_TYPES.BYTES,   v            accessDevice: topologyState.accessDevice() || ACCESS_DEVICE_OPTIONS.SHOW, // safe settings, not neccessary   2            topologyType: TOPOLOGY_TYPES.PHYSICAL,   N            upstreamType: topologyState.upstreamType() || UPSTREAM_TYPES.CLOUD   
        };           ctrl.loading = false;         })         ctrl.loading = true;         });       \  mod.controller('FiFabricLogicalTopologyController', function($scope, $state, $stateParams,       topologyState,       TOPOLOGY,       fiDvmDataLoader,       rCsfGrps) {   )    if (!$stateParams.selectedCsfGroup) {           return;         }         var ctrl = this;             ctrl.csfs = rCsfGrps;         ctrl.changeCsf = csf => {   #        $state.go($state.current, {              selectedCsfGroup: csf,   %        }, {reload: $state.current});         }   <      ctrl.selectedCsfGroup = $stateParams.selectedCsfGroup;   ,      // update SN for selectedCsfGroup root   0      fiDvmDataLoader.isReady().then(function(){   a        ctrl.selectedCsfGroup.rootData = fiDvmDataLoader.getDevice(ctrl.selectedCsfGroup.rootId);   A        // console.log('rootSn', ctrl.selectedCsfGroup.rootData);               /**   L         * In this example, all we need to do is to pass the settings to the   F         * component and let it deals with all the data collection and            * rendering.            */   <        var BUBBLE_OPTIONS = TOPOLOGY.CONFIG.BUBBLE_OPTIONS;   <        var UPSTREAM_TYPES = TOPOLOGY.CONFIG.UPSTREAM_TYPES;   :        var TRAFFIC_TYPES = TOPOLOGY.CONFIG.TRAFFIC_TYPES;   J        var ACCESS_DEVICE_OPTIONS = TOPOLOGY.CONFIG.ACCESS_DEVICE_OPTIONS;   <        var TOPOLOGY_TYPES = TOPOLOGY.CONFIG.TOPOLOGY_TYPES;   7        /* Logical + Of Course Without Access Device */   ?        topologyState.accessDevice(ACCESS_DEVICE_OPTIONS.HIDE);           ctrl.settings = {               baseFontSize: 16,   Y            /* If state is ever set, we use that, so that when page refresh, the settings   2             * is preserved, else initialize it */   Q            bubbleOption: topologyState.bubbleOption() || BUBBLE_OPTIONS.TRAFFIC,               currentFgt: {   8              serial: ctrl.selectedCsfGroup.rootData.sn,   =              deviceName: ctrl.selectedCsfGroup.rootData.name               },               isRealtime: true,   L            trafficType: topologyState.trafficType() || TRAFFIC_TYPES.BYTES,   1            topologyType: TOPOLOGY_TYPES.LOGICAL,   N            upstreamType: topologyState.upstreamType() || UPSTREAM_TYPES.CLOUD   
        };           ctrl.loading = false;         })         ctrl.loading = true;         });   })(module.exports);5�_�              G              ����                                                                                                                                                                                                                                                                                                                                                             [ہ     �         n   
                                        5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             [ہ     �         w       �         w          topologyState,5�_�                            ����                                                                                                                                                                                                                                                                                                                                         3       v   3    [ہ%     �         w       5�_�                          ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         w      &    rCsfGrps, fiFabricSliderService) {5�_�                            ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         w    �         w      fiFabricSliderService5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         w      0fiFabricSliderService.setType('security-rating')5�_�      	                 /    ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         w      2fiFabricSliderService.setType('security-rating', {   })�                6    fiFabricSliderService.setType('security-rating', {�                    })�         x            �         y            data: {         }�         z              �         {              selected: ''5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         {              selected: 'xyz'5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         {      B    console.log(fiFabricSliderService.setType('security-rating', {5�_�   
                        ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�    �         {          }))5�_�                            ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         {              console.log()�         |      -    console.log(fiFabricSliderService.open())5�_�                       -    ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�    �         |      .    console.log(fiFabricSliderService.open());5�_�                            ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         |          s5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         |          setTimeout(())5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                 v       [ۂ�     �         |          setTimeout(() => {       })�         }       �         ~          })5�_�                           ����                                                                                                                                                                                                                                                                                                                               
          
       V   
    [ۂ�     �         ~          }, 5000)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃ     �              5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃ     �              �         |    �         |      .    console.log(fiFabricSliderService.open());5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃ    �         }      0      console.log(fiFabricSliderService.open());5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃ8     �         }          5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃC     �         }      *    rCsfGrps, fiFabricSliderService, fi) {5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃK     �         }      B    rCsfGrps, fiFabricSliderService, fiFabricAuditReportService) {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃR     �         }      ,    console.log(fiFabricAuditReportService.)5�_�                       +    ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃd     �         }      A    console.log(fiFabricAuditReportService.getDeviceAuditScore())5�_�                       A    ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃp    �         }      B    console.log(fiFabricAuditReportService.getDeviceAuditScore());5�_�                       @    ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃ{     �         }      K    console.log(fiFabricAuditReportService.getDeviceAuditScore().then(()));5�_�                       H    ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃ}     �         }      M    console.log(fiFabricAuditReportService.getDeviceAuditScore().then(() => {       }));�         ~            �                     console.log(result);5�_�                       G    ����                                                                                                                                                                                                                                                                                                                                                v       [ۃ�     �               S    console.log(fiFabricAuditReportService.getDeviceAuditScore().then((result) => {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       [ۃ�     �               G    fiFabricAuditReportService.getDeviceAuditScore().then((result) => {5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                v       [ۃ�    �                   });5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                v       [ۃ�     �               (    // ******* FOR gianghmd only *******5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                               9          9       V   9    [ۃ�     �               B    // ******* FOR gianghmd only Please remove these later *******5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                                                  V       [ۃ�     �             �               B    // ******* FOR gianghmd only Please remove these later *******5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                                  V       [ۃ�     �              5�_�   $   &           %      B    ����                                                                                                                                                                                                                                                                                                                                                V       [ۃ�     �               B    // ******* FOR gianghmd only Please remove these later *******       //       //       //5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                                                V       [ۃ�     �              5�_�   &   (           '           ����                                                                                                                                                                                                                                                                                                                                                V       [ۃ�     �                        5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                V       [ۃ�     �         �          rCsfGrps,   8    fiFabricSliderService, fiFabricAuditReportService) {5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                V       [ۃ�     �      	   �          fiFabricSliderService,   !    fiFabricAuditReportService) {5�_�   )   +           *   	       ����                                                                                                                                                                                                                                                                                                                            
           
           V        [ۃ�     �      
   �          fiFabricAuditReportService   ) {5�_�   *   ,           +   
        ����                                                                                                                                                                                                                                                                                                                               A                  v        [ۃ�     �   	               ) {5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                               A                  v        [ۃ�     �      	   �    �      	   �      \    fiFabricSliderService,    // ******* FOR gianghmd only Please remove these later *******5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                         X       v   X    [ۃ�     �      	   �      Y    fiFabricSliderService, // ******* FOR gianghmd only Please remove these later *******5�_�   -   /           .   	       ����                                                                                                                                                                                                                                                                                                                                         X       v   X    [ۃ�     �   	   
   �    �      
   �      \    fiFabricAuditReportService// ******* FOR gianghmd only Please remove these later *******5�_�   .   0           /   	       ����                                                                                                                                                                                                                                                                                                                                         X       v   X    [ۃ�     �      
   �      ]    fiFabricAuditReportService // ******* FOR gianghmd only Please remove these later *******5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                                                v       [ۄ     �         �              selected: 'xyz'    5�_�   0   2           1           ����                                                                                                                                                                                                                                                                                                                                                v       [ۄ     �         �              selected: ''5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                                                v       [ۄ     �         �    �         �       5�_�   2   4           3          ����                                                                                                                                                                                                                                                                                                                                                  V   "    [ۄ     �         �    �         �      $        selected: 'LF100D3G12800006'5�_�   3   5           4           ����                                                                                                                                                                                                                                                                                                                                                V       [ۄ     �              5�_�   4   6           5           ����                                                                                                                                                                                                                                                                                                                               #          #       V   7    [ۄ    �                        // selected: 'xyz'5�_�   5   7           6           ����                                                                                                                                                                                                                                                                                                                                                  V        [ۄ$     �                '        // selected: 'LF100D3G12800006'5�_�   6   8           7           ����                                                                                                                                                                                                                                                                                                                                         %       v   %    [ۄ%     �                        selected: 'xyz'5�_�   7   9           8          ����                                                                                                                                                                                                                                                                                                                                                V   ,    [ۄq    �         �    �         �      '        // selected: 'FGVM010000136827'5�_�   8   :           9           ����                                                                                                                                                                                                                                                                                                                                                  V        [ۄ�     �                        // selected: 'xyz'5�_�   9   ?           :           ����                                                                                                                                                                                                                                                                                                                                                  V        [ۄ�    �                $        selected: 'FGVM010000136827'5�_�   :   @   >       ?          ����                                                                                                                                                                                                                                                                                                                                                  V        [ۄ�     �         �              // selected: 'xyz'           csfGroup: {}�         �              csfGroup: {   	        }�         �       �         �      
        },5�_�   ?   B           @           ����                                                                                                                                                                                                                                                                                                                                                v       [ۄ�     �         �       5�_�   @   C   A       B          ����                                                                                                                                                                                                                                                                                                                                                v       [ۅ     �         �              csfGroup: ,5�_�   B   D           C          ����                                                                                                                                                                                                                                                                                                                                                V       [ۅ   	 �         �              csfGroup: rCsfGrps[1],5�_�   C   E           D           ����                                                                                                                                                                                                                                                                                                                                                V       [ۅ�   
 �                J    // fiFabricAuditReportService.getDeviceAuditScore().then((result) => {�                      // console.log(result);�                 
    // });5�_�   D   F           E           ����                                                                                                                                                                                                                                                                                                                                                 V       [۪_     �              5�_�   E               F           ����                                                                                                                                                                                                                                                                                                                                                 V       [۪b     �              5�_�   @           B   A          ����                                                                                                                                                                                                                                                                                                                                                  V        [ۅ     �         �              v%},5�_�   :       =   ?   >          ����                                                                                                                                                                                                                                                                                                                                                  V        [ۄ�     �         �            data: {           csfG5�_�   :       ;   >   =          ����                                                                                                                                                                                                                                                                                                                                                  V        [ۄ�     �         �            data: {           csf5�_�   :   <       =   ;           ����                                                                                                                                                                                                                                                                                                                                                  V        [ۄ�     �                '        // selected: 'FGVM010000136827'5�_�   ;               <           ����                                                                                                                                                                                                                                                                                                                                                  V        [ۄ�     �                        selected: 'xyz'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        [ۃ5     �         }    �         }      J    function getDeviceAuditScore(csfGroup=$stateParams.selectedCsfGroup) {   H      let csfRootDevName = csfGroup._rawData.root[0].name.escapeSlash();   5      var adomName = fiAdomService.getCurrent().name;   N      var target = [ "adom/%s/device/%s".printf([adomName, csfRootDevName]) ];         var resource = {           path: 'system',            name: 'security-rating',           action: 'select'         };   L      return fiJSONRPC.proxy(target, 'get', resource).then(function (resp) {   (        return resp[0].data[0].response;         }, function () {           return null;   	      });       }5�_�                            ����                                                                                                                                                                                                                                                                                                                                         3       v   3    [ۂ�     �         w      cc5��