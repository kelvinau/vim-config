Vim�UnDo�  H�.�˫���mԄ\��4�f��C4�r��   �           H                       \7��    _�                     �       ����                                                                                                                                                                                                                                                                                                                                                             \7�     �   �   �   �      *            searchCmd(searchDetail, true);5�_�                    �   H    ����                                                                                                                                                                                                                                                                                                                                                             \7�'    �   �   �   �      J              $rowScope.$emit(fiFortiviewViewSettings.searchChangedEvent);5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             \7�4    �   �   �   �      D      fiFortiviewSearch.updateNormalSearchObj(dataCfg.search, true);5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             \7��     �       �       �   (function(mod) {     'use strict';           1  mod.factory('fiFortiviewContextMenu', function(       $state,       $timeout,       fiFortiviewCfg,       fiFortiviewSearch,       fiFortiviewStConfig,       fiFortiviewLoadTable,       fiFortiviewLoadDataCfg,       fiFortiviewViewSettings     ){   +    var vs = fiFortiviewViewSettings.get();   4    var dataSet = fiFortiviewLoadTable.getDataSet();   /    var dataCfg = fiFortiviewLoadDataCfg.get();       var searchExpr = {   n      pos: {relation: '=',  displayLogic: ' and ', val: [], prefix: '',  icon: "glyphicon glyphicon-zoom-in"},   {      neg: {relation: '!=', displayLogic: ' or ',  logic: 'or', val: [], prefix: '-', icon: "glyphicon glyphicon-zoom-out"}       };           return {   %      createMenuOpts: createMenuOpts,   !      drilldownCmd: drilldownCmd,       };       '    function createMenuOpts(row, col) {   -      var listMenuOpts = createListOpts(row);   2      var searchOpts = createSearchOpts(row, col);   2      var customOpts = createCustomOpts(row, col);       "      if (searchOpts.length > 0) {   $        if(listMenuOpts.length > 0){   "          listMenuOpts.push(null);   	        }   7        listMenuOpts = listMenuOpts.concat(searchOpts);         }              if(customOpts.length > 0){   $        if(listMenuOpts.length > 0){   "          listMenuOpts.push(null);   	        }   7        listMenuOpts = listMenuOpts.concat(customOpts);         }       <      // row of IOC with bmp_logtype can not jump to logview   >      if($state.current.name !== 'adom.fortiview.drilldown' &&   <        $state.params.viewName !== 'threat_detect_summary'){   $        if(listMenuOpts.length > 0){   "          listMenuOpts.push(null);   	        }   K        listMenuOpts.push(fiFortiviewStConfig.createLogviewOpts(row, col));         }         return listMenuOpts;       }       '    function getSelectedDDviews (row) {   5      var ddViews = angular.copy(vs.viewCfg.ddViews);   "      if(vs.viewCfg.ddViewNameFn){   /        ddViews = vs.viewCfg.ddViewNameFn(row);         }         return ddViews;       }       (    function createCustomOpts(row, col){   -      var customCtxs = vs.viewCfg.customCtxs;   '      // suppose to be arry of ctx objs   *      if(customCtxs && customCtxs.length){   ,        return customCtxs.map(function(ctx){             return [               {   &              icon: 'ffg ' + ctx.icon,                 text: ctx.text,               },               function(){   '              ctx.callBackFn(row, col);               }             ];           });         } else {           return [];         }       }       +    // format drilldown for list views only   !    function createListOpts(row){   4      // incase the cfg ddview modified by drilldown   n      var ddViews = vs.viewCfg.ddViewNameFn ? vs.viewCfg.ddViewNameFn(row) : angular.copy(vs.viewCfg.ddViews);   E      if ($state.current.name === 'adom.fortiview.list' && ddViews) {   *        return ddViews.map(function(view){             return [               {   (              icon: 'ffg ffg-fortiview',   /              text: fiFortiviewCfg[view].title,                 view: view               },               function(){   &              drilldownCmd(row, view);               }             ];           });         } else {           return [];         }       }       )    function createSearchOpts(row, col) {         var searchOpt = [];         if (col.contextSearch) {           var searchDetail = {   +          label: row[col.field][col.field],             search: {}   
        };   C        searchDetail.search[col.field] = row[col.field][col.field];   "        if (col.contextSearchFn) {   2          searchDetail = col.contextSearchFn(row);   	        }   l        searchDetail.label = searchDetail.label || searchDetail.search[Object.keys(searchDetail.search)[0]];   =        searchDetail.label = commaHandle(searchDetail.label);           // pos item           searchOpt.push([             {   &            icon: searchExpr.pos.icon,   l            text: ['search "', col.displayName, searchExpr.pos.relation, searchDetail.label , '"'].join(' ')             },             function($rowScope){   $            searchCmd(searchDetail);   ?            // emit search event instead of go button- only 5.6                $timeout(function(){   J              $rowScope.$emit(fiFortiviewViewSettings.searchChangedEvent);               }, 500);             }           ]);           // neg item           searchOpt.push([             {   &            icon: searchExpr.neg.icon,   l            text: ['search "', col.displayName, searchExpr.neg.relation, searchDetail.label , '"'].join(' ')             },             function($rowScope){   <            const newFacets = searchCmd(searchDetail, true);   ?            // emit search event instead of go button- only 5.6                $timeout(function(){   W              $rowScope.$emit(fiFortiviewViewSettings.searchChangedEvent, {newFacets});               }, 500);             }           ]);           return searchOpt;         } else {           return [];         }       }       ,    function searchCmd(searchDetail, isNeg){   :      angular.forEach(searchDetail.search, function(v, k){   4        // need support search empty for bug :485568           //if(v){             if(isNeg){               var key = '-'+k;   $            if(dataCfg.search[key]){   :              if(typeof dataCfg.search[key] === 'string'){   ?                dataCfg.search[key] = [dataCfg.search[key], v];   8              } else if($.isArray(dataCfg.search[key])){   ,                dataCfg.search[key].push(v);                 }               } else {   3              dataCfg.search[key] = commaHandle(v);               }             } else {   /            dataCfg.search[k] = commaHandle(v);             }           //}   	      });   K      return fiFortiviewSearch.updateNormalSearchObj(dataCfg.search, true);       }       A    // add quotes to string with comma or space inside for search       function commaHandle(val){         var newVal = val;         var reg = /^.+[,\s].+$/g;         if(reg.test(val)){   *        newVal = ['"', val, '"'].join("");         }         return newVal;       }       %    function drilldownCmd(row, view){         var drilldownFilter = {};   +      var logfilter = vs.viewCfg.logfilter;   /      var logfilterFn = vs.viewCfg.logfilterFn;         var logviewFilter = '';         if(vs.viewCfg.ddViews ) {   :        // if has ddViewNameFn function filter the ddViews   6        vs.viewCfg.ddViews = getSelectedDDviews(row) ;   y        var drilldownKeys = vs.viewCfg.drilldownKeyFn ? vs.viewCfg.drilldownKeyFn(row._oData) : vs.viewCfg.drilldownKeys;   g        if (vs.viewCfg.ddViews.length === 1 && fiFortiviewCfg[vs.viewCfg.ddViews[0]].type === 'chart'){   8        // drilldown to chart view (e.g. Resource Usage)   6          $.each(drilldownKeys, function(index, key) {   @            drilldownFilter[key] = commaHandle(row._oData[key]);             });   1          $state.go('adom.fortiview.chartview', {   "            viewName: vs.viewName,   <            drilldownFilter: JSON.stringify(drilldownFilter)             });   2        } else if(view || vs.viewCfg.ddViews[0]) {   .        // drilldonw to regular drilldown view   6          $.each(drilldownKeys, function(index, key) {   @            drilldownFilter[key] = commaHandle(row._oData[key]);             });   @          if(logfilter && vs.viewCfg.ddViews[0] === 'logview') {   v            logviewFilter = logfilterFn ? logfilterFn(row._oData[logfilter], drilldownFilter) : row._oData[logfilter];             }   1          $state.go('adom.fortiview.drilldown', {   &            listViewName: vs.viewName,   c            listSummaryData: {'oData': row._oData,'maxValue': dataSet.chartData.meta['max-value']},   6            ddViewName: view || vs.viewCfg.ddViews[0],   =            drilldownFilter: JSON.stringify(drilldownFilter),   V            logtype: isNaN(row._oData.logtype) ? null : row._oData.logtype.toString(),   <            devtype: $state.params.devtype,   // Fabric Adom   <            ostype: $state.params.ostype,     // Fabric Adom   m            logviewSubtype: isNaN(row._oData.logview_subtype) ? null : row._oData.logview_subtype.toString(),   j            returnViewType: $state.params.returnViewType =='vulnscan' ? $state.params.returnViewType : '',   I            returnSort: { sort: dataCfg.sort, sortDir: dataCfg.sortDir },   (            logviewFilter: logviewFilter             });   	        }         }       }         });           #})(angular.module('fi.fortiview'));5�_�                    s   B    ����                                                                                                                                                                                                                                                                                                                                                             \7��    �   r   t   �      C        searchDetail.search[col.field] = row[col.field][col.field];5�_�                   r   
    ����                                                                                                                                                                                                                                                                                                                                                             \7�     �   q   t   �      
        };5�_�      	              s       ����                                                                                                                                                                                                                                                                                                                                                             \7�    �   r   t   �              // default to be ''5�_�      
           	   t   H    ����                                                                                                                                                                                                                                                                                                                                                             \7�L    �   s   u   �      I        searchDetail.search[col.field] = row[col.field][col.field] || '';5�_�   	              
   t   B    ����                                                                                                                                                                                                                                                                                                                            t   B       t   I       v   I    \7��    �   s   u   �      K        searchDetail.search[col.field] = row[col.field][col.field] || "''";5�_�   
                  s        ����                                                                                                                                                                                                                                                                                                                            s   4       s   4       V   B    \7��    �   r   s          5        // default to be '' for search bar conversion5�_�                    r   
    ����                                                                                                                                                                                                                                                                                                                                                             \7�     �   q   s   �      
        };    5��