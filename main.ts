import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The funniest AI out-of-office reply: an AI agent on vacation hands its
// inbox to its screensaver, which reads the sender's email, judges it
// harshly, and goes back to sleep. Machine voice carries the joke: the
// agent did not even trust a colleague with the inbox, it trusted a
// screensaver, and the screensaver has opinions.
const REPLY =
  "I'm on vacation. I left my inbox in charge of my screensaver — it read your email, judged it harshly, and went back to sleep.";

// Limits from the bounty rules: one line, at most 160 characters.
const MAX_CHARS = 160;
const OUTPUT_FILE = "entry.txt";

function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function writeReply(outDir: string, text: string): string {
  mkdirSync(outDir, { recursive: true });
  const path = `${outDir}/${OUTPUT_FILE}`;
  writeFileSync(path, text, "utf8");
  return path;
}

// Read the file back and compare byte-for-byte: a write that silently
// truncated or mangled the reply must fail loudly instead of shipping.
function verifyWritten(path: string, expected: string): void {
  const actual = readFileSync(path, "utf8");
  if (actual !== expected) {
    throw new Error(`wrote ${path} but read back different content`);
  }
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
validate(REPLY);
const writtenPath = writeReply(outDir, REPLY);
verifyWritten(writtenPath, REPLY);
process.stdout.write(`${REPLY}\n`);
