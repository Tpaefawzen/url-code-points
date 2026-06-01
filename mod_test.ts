import {
   assertEquals
   , assertNotEquals
} from "jsr:@std/assert";

import {
   whatwg
   , sorted
} from "./mod.ts";

Deno.test("length", () => {
   assertEquals(81, sorted.length);
});

Deno.test("No duplicates", () => {
   for (let i = 0; i < sorted.length; i++) {
      for (let j = i+1; j < sorted.length; j++) {
	 assertNotEquals(sorted[i], sorted[j]);
      }
   }
});

Deno.test("Same character set", () => {
   assertEquals(sorted, [...whatwg].sort().join(""));
});
