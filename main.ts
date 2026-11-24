// One Word From Your Ex — the word my ex would use to describe me.
// One word, seven letters: the whole relationship in a single noun.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "Rebound", "utf8");
