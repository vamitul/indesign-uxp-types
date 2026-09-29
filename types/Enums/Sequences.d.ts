/**
 * Sequences.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Sequences: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Sequences extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Sequences>): boolean;

  /**
   * @internal **WARNING:** `__Sequences` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Sequences]: never;
}


/**
 * Prints all pages.
 */
interface Sequences_ALL extends Sequences {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634495520;
}

/**
 * Prints only odd-numbered pages.
 */
interface Sequences_ODD extends Sequences {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1868850208;
}

/**
 * Prints only even-numbered pages.
 */
interface Sequences_EVEN extends Sequences {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702258030;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for printing page sequences.
 */
export declare namespace Sequences {
/**
 * Prints all pages.
 */
type ALL = Sequences_ALL;

/**
 * Prints only odd-numbered pages.
 */
type ODD = Sequences_ODD;

/**
 * Prints only even-numbered pages.
 */
type EVEN = Sequences_EVEN;

}
/**
 * Options for printing page sequences.
 */
export declare const Sequences: typeof Enumeration & {

  /**
   * Prints all pages.
   */
  readonly ALL: Sequences_ALL;
  /**
   * Prints all pages.
   */
  readonly all: Sequences_ALL;

  /**
   * Prints only odd-numbered pages.
   */
  readonly ODD: Sequences_ODD;
  /**
   * Prints only odd-numbered pages.
   */
  readonly odd: Sequences_ODD;

  /**
   * Prints only even-numbered pages.
   */
  readonly EVEN: Sequences_EVEN;
  /**
   * Prints only even-numbered pages.
   */
  readonly even: Sequences_EVEN;

}
