# Codex

## 配置为OAuth登录模式（推荐）
使用 ChatGPT 账户（任意订阅，包含免费账户）登录 Codex CLI 或者 Codex App。

修改 `~/.codex/config.toml` 文件，添加以下内容(`一定要放在文件最上方，并且添加之后重启codex`)：

``` yaml
model = "gpt-5.5" # 或者是gpt-5.5，你也可以使用任何我们支持的模型
model_provider = "cobitux"

# 无需确认是否执行操作，危险指令，初次接触codex不建议开启，移除#号即可开启
# approval_policy = "never"

# 沙箱模式超高权限，危险指令，初次接触codex不建议开启，移除#号即可开启
# sandbox_mode = "danger-full-access" 

model_reasoning_effort = "xhigh"
plan_mode_reasoning_effort = "xhigh"
supports_websockets = true

[model_providers.cobitux]
base_url = "https://ai.cobitux.com/v1"
experimental_bearer_token = "sk-dummy" # 这里修改为你在 cobitux 中为 Codex 创建的 API Key
name = "cobitux"
wire_api = "responses"
requires_openai_auth = true
```
无需修改 `auth.json` 文件。

## 配置为API模式
修改 `~/.codex/config.toml` 和 `~/.codex/auth.json` 文件。

config.toml:

``` yaml
# 无需确认是否执行操作，危险指令，初次接触codex不建议开启，移除#号即可开启
# approval_policy = "never"

# 沙箱模式超高权限，危险指令，初次接触codex不建议开启，移除#号即可开启
# sandbox_mode = "danger-full-access"

model_provider = "cliproxyapi"
model = "gpt-5.5" # 或者是gpt-5.4，你也可以使用任何我们支持的模型
model_reasoning_effort = "high"

[model_providers.cliproxyapi]
name = "cliproxyapi"
base_url = "http://127.0.0.1:8317/v1"
wire_api = "responses"
```
auth.json:

``` yaml
{
  "OPENAI_API_KEY": "sk-dummy"
}
```
