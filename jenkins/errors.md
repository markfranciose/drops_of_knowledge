Slack webhook problems:
in Jenkins script console:
```
import jenkins.plugins.slack.webhook.GlobalConfig;
import jenkins.plugins.slack.webhook.WebhookEndpoint;
def splackConfig=Jenkins.getActiveInstance().getDescriptor(GlobalConfig.class);
def slackWebHook=Jenkins.getActiveInstance().getExtensionList(WebhookEndpoint.class).get(0);
println splackConfig
println slackWebHook
println slackWebHook.@globalConfig
slackWebHook.@globalConfig=splackConfig
```
output:
jenkins.plugins.slack.webhook.GlobalConfig@526ba2e2
jenkins.plugins.slack.webhook.WebhookEndpoint@15ab7a57
null
Result: jenkins.plugins.slack.webhook.GlobalConfig@526ba2e2


