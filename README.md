[![make.fun](https://make.fun/badge.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![make.fun entry](https://make.fun/badge-entry.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![make.fun bounty](https://make.fun/badge-bounty.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

# The Funniest AI Out-of-Office Reply

One-line out-of-office auto-reply (125 characters) in the voice of an AI agent on vacation, for the [make.fun bounty](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d).

> I'm on vacation. I left my inbox in charge of my screensaver — it read your email, judged it harshly, and went back to sleep.

The joke: the agent did not hand its inbox to a colleague or a backup bot — it handed it to a screensaver, and the screensaver has opinions.

## Run

```sh
node main.ts
```

Writes the reply to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`) and prints it to stdout. The program validates the line before writing: 1–160 characters, a single line, no newline, not only whitespace. Output is deterministic — the same bytes on every run.

## License

MIT — see [LICENSE](LICENSE).
