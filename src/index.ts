const _browser = chrome ?? browser;

const networkRuleId = 1;

_browser.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [networkRuleId],
  addRules: [{
    id: networkRuleId,
    priority: 1,
    action: {
      type: _browser.declarativeNetRequest.RuleActionType.REDIRECT,
      redirect: { url: 'https://mscott-api.thomas-cogez.workers.dev/' }
    },
    condition: {
      urlFilter: '.*',
      resourceTypes: [_browser.declarativeNetRequest.ResourceType.IMAGE]
    }
  }]
}).catch(() => { });
