'use strict';

let acct_id, new_acct_id;
/*
 * Watch for changes to account number query string (act) so extension can update
 * when user switches ad accounts
 */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.url && changeInfo.url.includes('facebook.com/adsmanager/')) {
    new_acct_id = changeInfo.url.replace(/.+act=(\d+)&.+/, '$1');
    if(new_acct_id !== acct_id) {
      acct_id = new_acct_id;
      chrome.tabs.sendMessage(tabId, acct_id);
    }
  }
});


/*
 *
 */
chrome.webRequest.onHeadersReceived.addListener(details => {
  details.responseHeaders.forEach(header => {
    if(header.name.toLowerCase() === 'content-security-policy')
      header.value = '';
  });

  return {responseHeaders: details.responseHeaders}
}, {urls: ['<all_urls>']}, ['blocking', 'responseHeaders']);