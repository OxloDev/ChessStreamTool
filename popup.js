let queryOptions = { active: true, currentWindow: true };

hideInfo.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query(queryOptions);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearInfo
    });
});

hideNames.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query(queryOptions);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearNames
    });
});

hideAvatars.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query(queryOptions);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearAvatar
    });
});

function clearInfo() {
    var documentElements = document.getElementsByClassName("user-tagline-rating user-tagline-dark")
    for (var i = 0; i < documentElements.length; i++) {
        documentElements[i].textContent = ""
    }

    var documentElements = document.getElementsByClassName("resizable-chat-area-component")
    for (var i = 0; i < documentElements.length; i++) {
        documentElements[i].innerHTML = ""
    }
    var documentElements = document.getElementsByClassName("rating")
    for (var i = 0; i < documentElements.length; i++) {
            documentElements[i].textContent = ""
    }
}

function clearNames() {
    var documentElements = document.getElementsByClassName("user-username-component user-username-dark user-username-link user-tagline-username")
    for (var i = 0; i < documentElements.length; i++) {
        documentElements[i].innerHTML = ""
    }

    var documentElements = document.getElementsByClassName("text ulpt")
    for (var i = 0; i < documentElements.length; i++) {
            documentElements[i].textContent = ""
    }

    var documentElements = document.getElementsByClassName("text")
    for (var i = 0; i < documentElements.length; i++) {
            documentElements[i].textContent = ""
    }
}

function clearAvatar() {
    var documentElements = document.getElementsByClassName("player-avatar")
    for (var i = 0; i < documentElements.length; i++) {
        documentElements[i].innerHTML = ""
    }
}

