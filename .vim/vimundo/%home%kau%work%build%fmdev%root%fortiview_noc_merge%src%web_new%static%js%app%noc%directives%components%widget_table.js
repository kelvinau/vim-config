Vim�UnDo� W����A���@ĉT��(P9-�
WM�|�E�I   
         table: '<',                             [��L    _�                             ����                                                                                                                                                                                                                                                                                                                                                  V        [��     �                   �               5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                       j          V        [��     �          j      '  mod.component('fiNocFortiviewList', {5�_�                       D    ����                                                                                                                                                                                                                                                                                                                                       j          V        [��"     �         j      F    templateUrl: '/static/partials/noc/fortiview/fortiview_list.html',5�_�                           ����                                                                                                                                                                                                                                                                                                                                       j          V        [��-     �      	   j      D    controller: function nocFortiviewCtrl($scope, $element, NocBase,5�_�                           ����                                                                                                                                                                                                                                                                                                                                       j          V        [��.     �      	   j      D    controller: function NocFortiviewCtrl($scope, $element, NocBase,5�_�                            ����                                                                                                                                                                                                                                                                                                                                      f           V       [��6     �             [         const ctrl = this;   >      let widgetClass = class NocWidgetChart extends NocBase {   7        constructor(theme, widgetSettings, chartProp) {   2          super(theme, widgetSettings, chartProp);   	        }           parse(resp){   n          ctrl.dataSet = fiNocFortiviewService.parseTableData(resp, ctrl.widgetSettings.chartConfig.viewName);   	        }         };         // Fortiview related vars         ctrl.vs = {};         ctrl.dataSet = {};   S      ctrl.dataCfg = fiFortiviewLoadDataCfg.getRunCfg(ctrl.widgetSettings.dataCfg);         ctrl.tableMessage = {};       4      // Init view for both viewSettings and dataCfg   b      fiNocFortiviewService.init(ctrl.widgetSettings.chartConfig.viewName, ctrl.vs, ctrl.dataCfg);             // Drilldown related   )      function getSelectedDDviews (row) {   <        var ddViews = angular.copy(ctrl.vs.viewCfg.ddViews);   )        if(ctrl.vs.viewCfg.ddViewNameFn){   6          ddViews = ctrl.vs.viewCfg.ddViewNameFn(row);   	        }           return ddViews;         }   C      // add quotes to string with comma or space inside for search          function commaHandle(val){           var newVal = val;   !        var reg = /^.+[,\s].+$/g;           if(reg.test(val)){   ,          newVal = ['"', val, '"'].join("");   	        }           return newVal;         }   2      let createDrillDownParams = (row, view) => {   !        var drilldownFilter = {};   2        var logfilter = ctrl.vs.viewCfg.logfilter;   6        var logfilterFn = ctrl.vs.viewCfg.logfilterFn;           var logviewFilter = '';   &        if(ctrl.vs.viewCfg.ddViews ) {   <          // if has ddViewNameFn function filter the ddViews   =          ctrl.vs.viewCfg.ddViews = getSelectedDDviews(row) ;   �          var drilldownKeys = ctrl.vs.viewCfg.drilldownKeyFn ? ctrl.vs.viewCfg.drilldownKeyFn(row._oData) : ctrl.vs.viewCfg.drilldownKeys;   s          if (ctrl.vs.viewCfg.ddViews.length === 1 && fiFortiviewCfg[ctrl.vs.viewCfg.ddViews[0]].type === 'chart'){   :          // drilldown to chart view (e.g. Resource Usage)   8            $.each(drilldownKeys, function(index, key) {   B              drilldownFilter[key] = commaHandle(row._oData[key]);               });               /*   3            $state.go('adom.fortiview.chartview', {   $              viewName: vs.viewName,   >              drilldownFilter: JSON.stringify(drilldownFilter)               });               */   9          } else if(view || ctrl.vs.viewCfg.ddViews[0]) {   0          // drilldonw to regular drilldown view   8            $.each(drilldownKeys, function(index, key) {   B              drilldownFilter[key] = commaHandle(row._oData[key]);               });               if(logfilter) {   x              logviewFilter = logfilterFn ? logfilterFn(row._oData[logfilter], drilldownFilter) : row._oData[logfilter];               }               return {   -              listViewName: ctrl.vs.viewName,   j              listSummaryData: {'oData': row._oData,'maxValue': ctrl.dataSet.chartData.meta['max-value']},   =              ddViewName: view || ctrl.vs.viewCfg.ddViews[0],   ?              drilldownFilter: JSON.stringify(drilldownFilter),   X              logtype: isNaN(row._oData.logtype) ? null : row._oData.logtype.toString(),   @              //devtype: $state.params.devtype,   // Fabric Adom   @              //ostype: $state.params.ostype,     // Fabric Adom   o              logviewSubtype: isNaN(row._oData.logview_subtype) ? null : row._oData.logview_subtype.toString(),   n              //returnViewType: $state.params.returnViewType =='vulnscan' ? $state.params.returnViewType : '',   M              //returnSort: { sort: dataCfg.sort, sortDir: dataCfg.sortDir },   *              logviewFilter: logviewFilter               };             }   	        }         }       /      ctrl.drilldownCmd = function(row, view) {   <        let widgetParams = createDrillDownParams(row, view);   \        $scope.$emit('drilldown', {widget:ctrl.widgetSettings, widgetParams: widgetParams});         }           T      let widget = new widgetClass(ctrl.theme, ctrl.widgetSettings, ctrl.chartProp);   @      widget.QUERY_ID = ctrl.widgetSettings.chartConfig.queryId;         widget.init();         widget.render();    5�_�                       ,    ����                                                                                                                                                                                                                                                                                                                                         ,       v   ,    [��D     �      	         F    controller: function NocWidgetTableCtrl($scope, $element, NocBase,         fiFortiviewCfg,         fiNocFortiviewService,         fiFortiviewLoadDataCfg) {5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                  V   ,    [��F     �   
              5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                            
                    V       [��K     �                /    controller: function NocWidgetTableCtrl() {           }5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                V       [��Q     �                     theme: '<',5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                V       [��\     �                     widgetSettings: '<',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       [��h     �                     chartProp: '<'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        [��n     �                      table: '<',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        [��n     �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V       [��o     �             �             �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       [��q    �                     widgetSettings: '<'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       [�ǃ     �                   })5�_�                    	        ����                                                                                                                                                                                                                                                                                                                            	           	           V        [�Ǆ     �               �               �      	           5�_�                            ����                                                                                                                                                                                                                                                                                                                            	           	          V        [�ǈ     �          	      %  mod.component('fiNocWidgetTable', {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        [�ǉ     �          	    �         	    �                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                       
           V        [�Ǌ    �                #mod.component('fiNocWidgetTable', {5�_�                            ����                                                                                                                                                                                                                                                                                                                                       
           V        [��K    �         
            table: '<',5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       [��l     �              5��