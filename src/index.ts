const _browser = chrome ?? browser;

_browser.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    id: 1,
    priority: 1,
    action: {
      type: _browser.declarativeNetRequest.RuleActionType.REDIRECT,
      redirect: { url: 'https://mscott-api.thomas-cogez.workers.dev/' }
    },
    condition: {
      urlFilter: '.*',
      resourceTypes: [_browser.declarativeNetRequest.ResourceType.IMAGE]
    }
  }],
  removeRuleIds: [1]
}).catch(() => { });
