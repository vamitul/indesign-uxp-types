/**
 * FootnotePrefixSuffix.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FootnotePrefixSuffix: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FootnotePrefixSuffix extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FootnotePrefixSuffix>): boolean;

  /**
   * @internal **WARNING:** `__FootnotePrefixSuffix` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FootnotePrefixSuffix]: never;
}


/**
 * Does not use a prefix or suffix.
 */
interface FootnotePrefixSuffix_NO_PREFIX_SUFFIX extends FootnotePrefixSuffix {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181774702;
}

/**
 * Places the prefix and/or suffix on the footnote reference number in the main text.
 */
interface FootnotePrefixSuffix_PREFIX_SUFFIX_REFERENCE extends FootnotePrefixSuffix {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181774706;
}

/**
 * Places the prefix and/or suffix on the footnote marker number in the footnote text.
 */
interface FootnotePrefixSuffix_PREFIX_SUFFIX_MARKER extends FootnotePrefixSuffix {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181774708;
}

/**
 * Places the prefix and/or suffix on both the footnote reference number in the
 * main text and the footnote marker number in the footnote text.
 */
interface FootnotePrefixSuffix_PREFIX_SUFFIX_BOTH extends FootnotePrefixSuffix {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181774690;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Footnote prefix or suffix placement options.
 */
export declare namespace FootnotePrefixSuffix {
/**
 * Does not use a prefix or suffix.
 */
type NO_PREFIX_SUFFIX = FootnotePrefixSuffix_NO_PREFIX_SUFFIX;

/**
 * Places the prefix and/or suffix on the footnote reference number in the main text.
 */
type PREFIX_SUFFIX_REFERENCE = FootnotePrefixSuffix_PREFIX_SUFFIX_REFERENCE;

/**
 * Places the prefix and/or suffix on the footnote marker number in the footnote text.
 */
type PREFIX_SUFFIX_MARKER = FootnotePrefixSuffix_PREFIX_SUFFIX_MARKER;

/**
 * Places the prefix and/or suffix on both the footnote reference number in the
 * main text and the footnote marker number in the footnote text.
 */
type PREFIX_SUFFIX_BOTH = FootnotePrefixSuffix_PREFIX_SUFFIX_BOTH;

}
/**
 * Footnote prefix or suffix placement options.
 */
export declare const FootnotePrefixSuffix: typeof Enumeration & {

  /**
   * Does not use a prefix or suffix.
   */
  readonly NO_PREFIX_SUFFIX: FootnotePrefixSuffix_NO_PREFIX_SUFFIX;
  /**
   * Does not use a prefix or suffix.
   */
  readonly noPrefixSuffix: FootnotePrefixSuffix_NO_PREFIX_SUFFIX;
  /**
   * Does not use a prefix or suffix.
   */
  readonly noprefixsuffix: FootnotePrefixSuffix_NO_PREFIX_SUFFIX;

  /**
   * Places the prefix and/or suffix on the footnote reference number in the main text.
   */
  readonly PREFIX_SUFFIX_REFERENCE: FootnotePrefixSuffix_PREFIX_SUFFIX_REFERENCE;
  /**
   * Places the prefix and/or suffix on the footnote reference number in the main text.
   */
  readonly prefixSuffixReference: FootnotePrefixSuffix_PREFIX_SUFFIX_REFERENCE;
  /**
   * Places the prefix and/or suffix on the footnote reference number in the main text.
   */
  readonly prefixsuffixreference: FootnotePrefixSuffix_PREFIX_SUFFIX_REFERENCE;

  /**
   * Places the prefix and/or suffix on the footnote marker number in the footnote text.
   */
  readonly PREFIX_SUFFIX_MARKER: FootnotePrefixSuffix_PREFIX_SUFFIX_MARKER;
  /**
   * Places the prefix and/or suffix on the footnote marker number in the footnote text.
   */
  readonly prefixSuffixMarker: FootnotePrefixSuffix_PREFIX_SUFFIX_MARKER;
  /**
   * Places the prefix and/or suffix on the footnote marker number in the footnote text.
   */
  readonly prefixsuffixmarker: FootnotePrefixSuffix_PREFIX_SUFFIX_MARKER;

  /**
   * Places the prefix and/or suffix on both the footnote reference number in the
   * main text and the footnote marker number in the footnote text.
   */
  readonly PREFIX_SUFFIX_BOTH: FootnotePrefixSuffix_PREFIX_SUFFIX_BOTH;
  /**
   * Places the prefix and/or suffix on both the footnote reference number in the
   * main text and the footnote marker number in the footnote text.
   */
  readonly prefixSuffixBoth: FootnotePrefixSuffix_PREFIX_SUFFIX_BOTH;
  /**
   * Places the prefix and/or suffix on both the footnote reference number in the
   * main text and the footnote marker number in the footnote text.
   */
  readonly prefixsuffixboth: FootnotePrefixSuffix_PREFIX_SUFFIX_BOTH;

}
