/**
 * List of ASCII URL code points.
 * @module
 */

const di = "0123456789";
const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lo = "abcdefghijklmnopqrstuvwxyz";
const sy = "!$&'()*+,-./:;=?@_~";

type S = string & { length: 81, };

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
export const whatwg: S = `${di}${up}${lo}${sy}` as S;

/**
 * In code points.
 */
export const sorted: S = [...whatwg].sort().join("") as S;
