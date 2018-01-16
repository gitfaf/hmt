const HMT = {}

HMT.fn = {
    listAllTabs: () => {
        const containerId = 'opened-tabs'
        const container = document.querySelector(`#${containerId}`)
        chrome.tabs.query({}, tabs => {
            tabs.forEach(tab => {
                console.log(tab.url)
            })
        })
    }
}

HMT.actions = {
    fireWhenDOMContentIsLoaded: () => {
        console.log(Date.now(), `${HMT.constants.EVENT_DOM_CONTENT_LOADED} fired.`)
        HMT.fn.listAllTabs()
    }
}

HMT.constants = {
    EVENT_DOM_CONTENT_LOADED: 'DOMContentLoaded'
}

document.addEventListener(HMT.constants.EVENT_DOM_CONTENT_LOADED, HMT.actions.fireWhenDOMContentIsLoaded);
