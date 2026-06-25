# Codex

## OAuth Login Mode (Recommended)

Log in to Codex CLI or Codex App with a ChatGPT account. Any subscription level is supported, including free accounts.

Edit `~/.codex/config.toml` and add the following content. Place it at the very top of the file, then restart Codex after saving:

```toml
model = "gpt-5.5" # Or gpt-5.5. You can also use any supported model.
model_provider = "cobitux"

# Run operations without confirmation. This is risky and is not recommended for first-time Codex users.
# Remove the leading # to enable it.
# approval_policy = "never"

# High-permission sandbox mode. This is risky and is not recommended for first-time Codex users.
# Remove the leading # to enable it.
# sandbox_mode = "danger-full-access"

model_reasoning_effort = "xhigh"
plan_mode_reasoning_effort = "xhigh"
supports_websockets = true

[model_providers.cobitux]
base_url = "https://ai.cobitux.com/v1"
experimental_bearer_token = "sk-dummy" # Replace this with the API key you created for Codex in cobitux.
name = "cobitux"
wire_api = "responses"
requires_openai_auth = true
```

You do not need to modify `auth.json`.

## API Mode

Edit both `~/.codex/config.toml` and `~/.codex/auth.json`.

config.toml:

```toml
# Run operations without confirmation. This is risky and is not recommended for first-time Codex users.
# Remove the leading # to enable it.
# approval_policy = "never"

# High-permission sandbox mode. This is risky and is not recommended for first-time Codex users.
# Remove the leading # to enable it.
# sandbox_mode = "danger-full-access"

model_provider = "cliproxyapi"
model = "gpt-5.5" # Or gpt-5.4. You can also use any supported model.
model_reasoning_effort = "high"

[model_providers.cliproxyapi]
name = "cliproxyapi"
base_url = "http://127.0.0.1:8317/v1"
wire_api = "responses"
```

auth.json:

```json
{
  "OPENAI_API_KEY": "sk-dummy"
}
```
