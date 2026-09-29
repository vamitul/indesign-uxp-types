/**
 * PageTransitionDurationOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageTransitionDurationOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageTransitionDurationOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageTransitionDurationOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageTransitionDurationOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageTransitionDurationOptions]: never;
}


/**
 * Fast duration. 
 */
interface PageTransitionDurationOptions_FAST extends PageTransitionDurationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1180791668;
}

/**
 * Medium duration. 
 */
interface PageTransitionDurationOptions_MEDIUM extends PageTransitionDurationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * Slow duration.
 */
interface PageTransitionDurationOptions_SLOW extends PageTransitionDurationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886671692;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How long a page transition takes.
 */
export declare namespace PageTransitionDurationOptions {
/**
 * Fast duration. 
 */
type FAST = PageTransitionDurationOptions_FAST;

/**
 * Medium duration. 
 */
type MEDIUM = PageTransitionDurationOptions_MEDIUM;

/**
 * Slow duration.
 */
type SLOW = PageTransitionDurationOptions_SLOW;

}
/**
 * How long a page transition takes.
 */
export declare const PageTransitionDurationOptions: typeof Enumeration & {

  /**
   * Fast duration. 
   */
  readonly FAST: PageTransitionDurationOptions_FAST;
  /**
   * Fast duration. 
   */
  readonly fast: PageTransitionDurationOptions_FAST;

  /**
   * Medium duration. 
   */
  readonly MEDIUM: PageTransitionDurationOptions_MEDIUM;
  /**
   * Medium duration. 
   */
  readonly medium: PageTransitionDurationOptions_MEDIUM;

  /**
   * Slow duration.
   */
  readonly SLOW: PageTransitionDurationOptions_SLOW;
  /**
   * Slow duration.
   */
  readonly slow: PageTransitionDurationOptions_SLOW;

}
