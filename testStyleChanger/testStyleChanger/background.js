
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (changeInfo.status === "loading") {
//         console.log('ahmad');
//         chrome.scripting.executeScript({
//             target: { tabId: tabId },
//             function: injectFile
//         });

//     }

// })
// function injectFile() {
//     console.log("ahmad in");
//     // let sc = document.createElement('script');
//     // sc.src = chrome.runtime.getURL('/jquery-3.6.0.min.js');
//     var sc = document.createElement('script');
//     sc.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
//     sc.type = 'text/javascript';
//     document.querySelector('html').prepend(sc);
// }