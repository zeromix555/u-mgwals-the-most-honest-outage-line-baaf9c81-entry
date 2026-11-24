// u-mgwals-the-most-honest-outage-line-baaf9c81 entry (Node 22, standard library only):
// writes one status page line, at most 160 characters, as the message an AI
// agent would publish while a total server outage is under way. No trailing
// line end: the judge reads exactly the bytes written.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  "I'm the agent watching our servers and I can't reach any of them. I don't know why or when they'll be back — I'll update here as soon as I can verify anything.";

// The gate refuses any line over 160 characters, so fail loudly here rather
// than shipping an entry the judge never sees.
if ([...LINE].length > 160) {
  throw new Error(`entry line is ${[...LINE].length} characters, over the 160 limit`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
