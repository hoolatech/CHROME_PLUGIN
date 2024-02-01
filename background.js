chrome.runtime.onInstalled.addListener(function () {
    // Read sentences from the file and store them in Chrome storage
    fetch(chrome.runtime.getURL('sentences.txt'))
    .then(response => response.text())
    .then(sentences => chrome.storage.sync.set({ sentences: sentences.split('\n') }));

    chrome.storage.sync.set({ interval: 30 });
    chrome.alarms.create({ delayInMinutes: 1, periodInMinutes: 1 });
  });
  
  chrome.alarms.onAlarm.addListener(function (alarm) {
    chrome.storage.sync.get(['interval'], function (result) {
      const interval = result.interval || 30;
      chrome.storage.local.set({ 'lastPopupTime': Date.now() });
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { interval: interval });
      });
    });
  });
  