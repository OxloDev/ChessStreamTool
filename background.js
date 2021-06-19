let chessHideInfo = true;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ chessHideInfo });
});
