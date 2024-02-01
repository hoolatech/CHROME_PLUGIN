chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const interval = request.interval || 2;
    const lastPopupTime = localStorage.getItem('lastPopupTime') || 0;
  
    if (Date.now() - lastPopupTime > interval * 60 * 1000) {
      chrome.storage.sync.get(['sentences'], function (result) {
        const sentences = result.sentences || ['Default sentence.'];
        const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
        alert('张一鸣:\n'+ randomSentence);
        localStorage.setItem('lastPopupTime', Date.now());
      });
    }
  });
  