// Famous Last Words at 1 Percent — entrypoint.
// Writes the phone's one-line farewell to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local verification).
// Node standard library only.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

process.umask(0o022);

const LINE =
  "At one percent, I confess: every 'low battery' warning was me crying for help, and you just kept scrolling.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
chmodSync(outPath, 0o644);
