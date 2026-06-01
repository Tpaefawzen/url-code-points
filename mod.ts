/**
 * List of ASCII URL code points.
 * @module
 */

const di = "0123456789";
const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lo = "abcdefghijklmnopqrstuvwxyz";
const sy = "!$&'()*+,-./:;=?@_~";

/**
 * Ordered as mentioned by WHATWG.
 *
 * "The URL code points are ASCII alphanumeric, U+0021 (!), U+0024 ($), ..."
 *   Source: https://url.spec.whatwg.org/#url-code-points
 * "An ASCII alphanumeric is an ASCII digit or ASCII alpha."
 *   Source: https://infra.spec.whatwg.org/#ascii-alphanumeric
 * "An ASCII alpha is an ASCII upper alpha or ASCII lower alpha."
 *   Source: https://infra.spec.whatwg.org/#ascii-alpha
 */
export const whatwg = `${di}${up}${lo}${sy}` as const;

/**
 * In code points.
 */
export const sorted = [...whatwg].sort().join("");
