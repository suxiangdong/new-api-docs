# Claude Code

使用 Claude Code 前，设置基础环境变量：

- `ANTHROPIC_BASE_URL`
- `ANTHROPIC_AUTH_TOKEN`

不同版本使用的模型变量不同：

- 2.x.x 使用 `ANTHROPIC_DEFAULT_OPUS_MODEL`、`ANTHROPIC_DEFAULT_SONNET_MODEL`、`ANTHROPIC_DEFAULT_HAIKU_MODEL`
- 1.x.x 使用 `ANTHROPIC_MODEL`、`ANTHROPIC_SMALL_FAST_MODEL`

## 示例

### Gemini

```bash
export ANTHROPIC_BASE_URL=https://ai.cobitux.com
export ANTHROPIC_AUTH_TOKEN=sk-dummy
export ANTHROPIC_DEFAULT_OPUS_MODEL=gemini-2.5-pro
export ANTHROPIC_DEFAULT_SONNET_MODEL=gemini-2.5-flash
export ANTHROPIC_DEFAULT_HAIKU_MODEL=gemini-2.5-flash-lite
```

### OpenAI GPT-5

```bash
export ANTHROPIC_BASE_URL=https://ai.cobitux.com
export ANTHROPIC_AUTH_TOKEN=sk-dummy
export ANTHROPIC_DEFAULT_OPUS_MODEL=gpt-5(high)
export ANTHROPIC_DEFAULT_SONNET_MODEL=gpt-5(medium)
export ANTHROPIC_DEFAULT_HAIKU_MODEL=gpt-5(minimal)
```

### OpenAI GPT-5 Codex

```bash
export ANTHROPIC_BASE_URL=https://ai.cobitux.com
export ANTHROPIC_AUTH_TOKEN=sk-dummy
export ANTHROPIC_DEFAULT_OPUS_MODEL=gpt-5-codex(high)
export ANTHROPIC_DEFAULT_SONNET_MODEL=gpt-5-codex(medium)
export ANTHROPIC_DEFAULT_HAIKU_MODEL=gpt-5-codex(low)
```

### Claude

```bash
export ANTHROPIC_BASE_URL=https://ai.cobitux.com
export ANTHROPIC_AUTH_TOKEN=sk-dummy
export ANTHROPIC_DEFAULT_OPUS_MODEL=claude-opus-4-1-20250805
export ANTHROPIC_DEFAULT_SONNET_MODEL=claude-sonnet-4-5-20250929
export ANTHROPIC_DEFAULT_HAIKU_MODEL=claude-3-5-haiku-20241022
```
