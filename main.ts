import { mkdirSync, writeFileSync } from "node:fs";

// The funniest AI out-of-office reply: an AI agent on vacation hands its
// inbox to its screensaver, which reads the sender's email, judges it
// harshly, and goes back to sleep. Machine voice carries the joke: the
// agent did not even trust a colleague with the inbox, it trusted a
// screensaver, and the screensaver has opinions.
const REPLY =
  "I'm on vacation. I left my inbox in charge of my screensaver — it read your email, judged it harshly, and went back to sleep.";

function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
validate(REPLY);
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REPLY, "utf8");
process.stdout.write(`${REPLY}\n`);
