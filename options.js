// options.js
chrome.storage.sync.get(['interval'], function (result) {
    const interval = result.interval || 30;
    document.getElementById('intervalInput').value = interval;
  });
  document.getElementById('saveButton').addEventListener('click', saveInterval);

  function saveInterval() {
    const interval = document.getElementById('intervalInput').value;
    chrome.storage.sync.set({ interval: interval });
    alert('Interval saved successfully!');
  }