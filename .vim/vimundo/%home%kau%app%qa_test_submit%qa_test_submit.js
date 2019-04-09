Vim�UnDo� �|�k߶0�#�^Z��� 4A�E�w�iw̋�4k  !   *      $('#popup_prompt').html(errContent);   �                          [��I    _�                             ����                                                                                                                                                                                                                                                                                                                                                 V        [���    �                   �               �                // ==UserScript==   // @name         QA Test Submit   *// @namespace    https://www.fortinet.com/   // @version      2.0   D// @description  Auto fill-in the QA Test Request form and do submit   )// @author       Live Lei Feng. FMG & FAZ   G// @match        https://mantis.fortinet.com/bug_view_page.php?bug_id=*   "// @grant        GM_xmlhttpRequest   "// @connect      wiki.fortinet.com   // @connect      self   // ==/UserScript==       (function() {     'use strict';       1  // --->Name of your folder from 3.47 ftp server   &  var FTP_FOLDER_NAME = 'jeffreychen';     var fill = {};   l  var SUBMIT_URL = 'https://wiki.fortinet.com/twiki/bin/view/QualityAssurance/FortiManagerDevQATestRequest';   p  // var SUBMIT_URL = 'https://wiki.fortinet.com/twiki/bin/view/QualityAssurance/FortiAnalyzerDevQATestRequest';         // Gets info from mantis   4  var content_table = $('table:contains(ID)').eq(0);   e  var bug_id = content_table.find('tr:contains(ID)').eq(0).next('tr').find('td').eq(0).text().trim();   Q  // Removes the 0 in front of the bug number. Comments off it if you don't need.   $  bug_id = bug_id.replace(/^0/, '');     fill['bug number'] = bug_id;   `  fill['bug description'] = content_table.find('td:contains(Summary)').next('td').text().trim();   4  // --->Sets the name of image to whatever you want   Z  fill['image path'] = 'ftp://172.18.3.47/pub/' + FTP_FOLDER_NAME + '/' + bug_id + '.out';   ^  var fix_schedule = content_table.find('td:contains(Fix Schedule)').next('td').text().trim();   {  var severity = content_table.find('tr:contains(Severity)').eq(0).next('tr').find('td').eq(2).text().trim().split('-')[0];   E  fill['note'] = fix_schedule + (fix_schedule ? ' ' : '') + severity;   &  fill['special note'] = 'Thank you.';         // Error Code     const ERR_CODE = {       'NO_LOGIN': Symbol(),   !    'ERR_LOAD_QA_FORM': Symbol(),   %    'ERR_LOAD_MANTIS_PAGE': Symbol(),   "    'ERR_QA_TEST_SUBMIT': Symbol()     };       �  $('span a:contains("Bug History")').parents('td').prepend('<span class="small">[<a id="qa_test" href="#">Send Test Request</a>]</span>');       "  $('#qa_test').click(function() {       �    $('body').append('<div id="qa_test_form_popup"><div id="popup_prompt" style="position: relative; left: 50%; float: left; top: 50%; transform: translate(-50%, -50%);">Loading ...</div></div>');   "    $('#qa_test_form_popup').css({         'position': 'fixed',         'top': 0,         'left': 0,         'bottom': 0,         'right': 0,         'margin': 'auto',         'width': '600px',         'height': '300px',         'background': 'white'       });       genPopup();     });         function genPopup() {   ;    return Promise.all([loadQaPage(), loadBugUpdatePage()])       .then(function(resps) {         var qaForm = resps[0];   "      $('#popup_prompt').remove();   /      var formPopup = $('#qa_test_form_popup');   "      qaForm.prependTo(formPopup);   C      qaForm.find('input[name=bugnumber]').val(fill['bug number']);   F      qaForm.find('textarea[name=desc]').val(fill['bug description']);   A      qaForm.find('input[name=imgpath]').val(fill['image path']);   8      qaForm.find('input[name=note]').val(fill['note']);   J      qaForm.find('textarea[name=specialnote]').val(fill['special note']);   W      // Hides the Submit button for the embedded form so that it can be override later   1      qaForm.find('input[type="submit"]').hide();       #      var mantisPageDom = resps[1];   J      // Appends the whole Mantis page so that its script can get running.   ,      // Otherwise you will get wrong value.   (      mantisPageDom.appendTo(formPopup);         mantisPageDom.hide();   c      var mantisForm = mantisPageDom.find(':contains("Updating Bug Information")').parents('form');   (      mantisForm.prop('onsubmit', null);       C      // Fetches versions from Dev Status of Mantis bug update form         formPopup.append(   *      '<div style="margin-top: -40px;">' +   ?        '<div style="display: inline;">Set Test Status</div>' +   `        '<div id="dev_status_checkboxes" style="display: inline; vertical-align: sub;"></div>' +         '</div>'         );   J      var checkboxes = mantisForm.find('input.dev_status[type=checkbox]');   "      if (checkboxes.length > 0) {   $        checkboxes.each(function() {   &          var version = $(this).val();   >          // Auto set the Dev Status based on the Fix Schedule   �          var checked = mantisForm.find('input.fixforecast[type=checkbox][value="' + version + '"]:checked').length > 0 ? 'checked' : '';   z          $('#dev_status_checkboxes').append('<input type="checkbox" value="' + version + '" ' + checked + '>' + version);           });         } else {   Z        // If the bug is SP branch or TOP3 branch, it does not have versions in Dev Status   T        $('#dev_status_checkboxes').append('<input type="checkbox" value checked>');         }       v      formPopup.append('<div id="submit_btn_div" style="text-align: center;"><span id="submit_prompt"></span></div>');       o      $('<button id="submit_btn" type="button">Submit</button>').appendTo('#submit_btn_div').click(function() {   P        var dev_status_value = mantisForm.find('[name=dev_status]').val() || '';   C        // Overrides the Dev Status which version has been checked.   P        // NOTE: the Dev Status of those unchecked version will remain unchange.   Z        $('#dev_status_checkboxes').find('input[type=checkbox]:checked').each(function() {   -          var checkedVersion = $(this).val();             if (checkedVersion) {   7            var valToSet = checkedVersion + ':testing';   C            var regexp = new RegExp(checkedVersion + ':\\w+', 'g');   .            // Changes or addes the Dev status   1            if (dev_status_value.match(regexp)) {   L              dev_status_value = dev_status_value.replace(regexp, valToSet);               } else {   %              if (dev_status_value) {   )                dev_status_value += ', ';                 }   +              dev_status_value += valToSet;               }             } else {   *            // SP branch/TOP 3 branch case   )            dev_status_value = 'testing';             }           });   T        dev_status_value = dev_status_value.replace(/ /g, ''); // Removes all Spaces   7        dev_status_value = dev_status_value.split(',');   2        dev_status_value = dev_status_value.sort()   1        .filter(function(element, index, array) {   8          // Fault-Tolerance. Removes dunplicates items.   7          return !index || element != array[index - 1];           });   7        dev_status_value = dev_status_value.join(', ');       !        // Send Request to submit           sendQaRequest(qaForm)           .then(function() {   O          $('#submit_prompt').text('QA Request Submitted. Page reloading ...');   !          if (dev_status_value) {   -            // Update Dev Status for this bug   G            mantisForm.find('[name=dev_status]').val(dev_status_value);                mantisForm.submit();             } else {               location.reload();             }   
        })           .catch(function(err) {   H          $('#submit_prompt').text(getErrText(err)).css('color', 'red');           });       7        $('#submit_btn').prop('disabled', true).hide();   3        $('#submit_prompt').text('Processing ...');   	      });       })       .catch(function(err) {   $      var errText = getErrText(err);   '      $('#popup_prompt').text(errText);       });     }         function loadQaPage() {   2    return new Promise(function(resolve, reject) {         GM_xmlhttpRequest({           'method': 'GET',   o        // --> ATTENTION: you may need to change the url since FMG and FAZ goes to two different QA Test Pages.           'url': SUBMIT_URL,   "        'onload': function(resp) {   +          var respText = resp.responseText;   7          var respDom = $($.parseHTML(respText, true));   8          var respForm = respDom.find('#fmgbuildtest0');   &          if (respForm.length === 0) {   &            reject(ERR_CODE.NO_LOGIN);               return;             }             resolve(respForm);   
        },           'onerror': function() {   ,          reject(ERR_CODE.ERR_LOAD_QA_FORM);   	        }   	      });       });     }       +  // Fetches the form that updates the bug.      function loadBugUpdatePage() {   2    return new Promise(function(resolve, reject) {         GM_xmlhttpRequest({           'method': 'GET',   R        'url': 'https://mantis.fortinet.com/bug_update_page.php?bug_id=' + bug_id,   "        'onload': function(resp) {   +          var respText = resp.responseText;   7          var respDom = $($.parseHTML(respText, true));             resolve(respDom);   
        },           'onerror': function() {   0          reject(ERR_CODE.ERR_LOAD_MANTIS_PAGE);   	        }   	      });       });     }         // Sends QA Test Request   "  function sendQaRequest(qaForm) {   $    var url = qaForm.prop('action');       var headers = {   ,      'Content-Type': qaForm.prop('enctype')       };       var data = new FormData();   +    qaForm.find('[name]').each(function() {         var elm = $(this);   /      data.append(elm.prop('name'), elm.val());       });   2    return new Promise(function(resolve, reject) {         GM_xmlhttpRequest({           'method': 'POST',           'url': url,           'headers': headers,           'data': data,           'onload': function() {   A          if (arguments[0].responseText.match('fmgbuildtest0')) {               resolve();             }   .          reject(ERR_CODE.ERR_QA_TEST_SUBMIT);   
        },           'onerror': function() {             reject();   	        }   	      });       });     }          function getErrText(errCode) {       var errText;       switch (errCode) {         case ERR_CODE.NO_LOGIN:   \        errText = 'Fails to load forms. You may need to log in to QA Test Request website.';           break;   %      case ERR_CODE.ERR_LOAD_QA_FORM:   :        errText = 'Error while loading the QA Test page.';           break;   )      case ERR_CODE.ERR_LOAD_MANTIS_PAGE:   D        errText = 'Error while loading the Mantis bug update page.';           break;   '      case ERR_CODE.ERR_QA_TEST_SUBMIT:   -        errText = 'Fails to submit QA Test.';           break;         default:   "        errText = 'Unknown Error';           break;       }       return errText;     }       })();5�_�                          ����                                                                                                                                                                                                                                                                                                                                                  V        [���     �        !      n   var SUBMIT_URL = 'https://wiki.fortinet.com/twiki/bin/view/QualityAssurance/FortiAnalyzerDevQATestRequest';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       [���     �                m  var SUBMIT_URL = 'https://wiki.fortinet.com/twiki/bin/view/QualityAssurance/FortiAnalyzerDevQATestRequest';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        [���    �                n  //var SUBMIT_URL = 'https://wiki.fortinet.com/twiki/bin/view/QualityAssurance/FortiManagerDevQATestRequest';5�_�                     �       ����                                                                                                                                                                                                                                                                                                                                                             [��H    �   �   �  !      *      $('#popup_prompt').html(errContent);5�_�                          ����                                                                                                                                                                                                                                                                                                                                                  V        [���     �        !      m   ar SUBMIT_URL = 'https://wiki.fortinet.com/twiki/bin/view/QualityAssurance/FortiAnalyzerDevQATestRequest';5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        [���     �                q   // var SUBMIT_URL = 'https://wiki.fortinet.com/twiki/bin/view/QualityAssurance/FortiAnalyzerDevQATestRequest';5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        [���     �                l  var SUBMIT_URL = 'https://wiki.fortinet.com/twiki/bin/view/QualityAssurance/FortiManagerDevQATestRequest';5��