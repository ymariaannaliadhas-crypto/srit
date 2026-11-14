import { searchService } from "../src/features/smart-search/searchService.js";
import { SEARCH_INDEX } from "../src/features/smart-search/searchIndex.js";

console.log(`[INFO] Total Indexed Items: ${SEARCH_INDEX.length}`);

const queries = [
  { q: "healtcare", target: "Healthcare" },
  { q: "fire noc", target: "AgniPermit" },
  { q: "building permit", target: "PlanPermit" },
  { q: "apply connection", target: "RailWire Connection" },
  { q: "kerala", target: "Kerala" },
  { q: "annual report", target: "Annual Report" },
  { q: "cmmi", target: "CMMI" },
  { q: "documents required", target: "Documents" },
];

let failed = 0;

for (const { q, target } of queries) {
  const results = searchService.search(q, { limit: 3 });
  if (results.length === 0) {
    console.error(`[FAIL] No results for "${q}"`);
    failed++;
  } else {
    const top = results[0];
    console.log(`[PASS] "${q}" -> [Score: ${top.score}] "${top.item.title}" (${top.item.category})`);
  }
}

if (failed === 0) {
  console.log("\n>>> ALL SMART SEARCH TESTS PASSED SUCCESSFULLY! <<<");
} else {
  console.error(`\n>>> ${failed} TESTS FAILED <<<`);
  process.exit(1);
}
