/**
 * FloatingWindowSize.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FloatingWindowSize: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FloatingWindowSize extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FloatingWindowSize>): boolean;

  /**
   * @internal **WARNING:** `__FloatingWindowSize` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FloatingWindowSize]: never;
}


/**
 * The floating window is one fifth the length and height of the movie's original display size.
 */
interface FloatingWindowSize_ONE_FIFTH extends FloatingWindowSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298557286;
}

/**
 * The floating window is one fourth the length and height of the movie's original display size.
 */
interface FloatingWindowSize_ONE_FOURTH extends FloatingWindowSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298558834;
}

/**
 * The floating window is one half the length and height of the movie's original display size.
 */
interface FloatingWindowSize_ONE_HALF extends FloatingWindowSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298686316;
}

/**
 * The floating window is the movie's original display size.
 */
interface FloatingWindowSize_FULL extends FloatingWindowSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298560364;
}

/**
 * The floating window is twice the length and height of the movie's original display size.
 */
interface FloatingWindowSize_TWICE extends FloatingWindowSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299476344;
}

/**
 * The floating window is triple the length and height of the movie's original display size.
 */
interface FloatingWindowSize_TRIPLE extends FloatingWindowSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299477112;
}

/**
 * The floating window is quadruple the length and height of the movie's original display size.
 */
interface FloatingWindowSize_QUADRUPLE extends FloatingWindowSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299281272;
}

/**
 * The floating window fills the entire screen.
 */
interface FloatingWindowSize_MAX extends FloatingWindowSize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299014008;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The size of the movie's floating window. Valid only when floating window is true.
 */
export declare namespace FloatingWindowSize {
/**
 * The floating window is one fifth the length and height of the movie's original display size.
 */
type ONE_FIFTH = FloatingWindowSize_ONE_FIFTH;

/**
 * The floating window is one fourth the length and height of the movie's original display size.
 */
type ONE_FOURTH = FloatingWindowSize_ONE_FOURTH;

/**
 * The floating window is one half the length and height of the movie's original display size.
 */
type ONE_HALF = FloatingWindowSize_ONE_HALF;

/**
 * The floating window is the movie's original display size.
 */
type FULL = FloatingWindowSize_FULL;

/**
 * The floating window is twice the length and height of the movie's original display size.
 */
type TWICE = FloatingWindowSize_TWICE;

/**
 * The floating window is triple the length and height of the movie's original display size.
 */
type TRIPLE = FloatingWindowSize_TRIPLE;

/**
 * The floating window is quadruple the length and height of the movie's original display size.
 */
type QUADRUPLE = FloatingWindowSize_QUADRUPLE;

/**
 * The floating window fills the entire screen.
 */
type MAX = FloatingWindowSize_MAX;

}
/**
 * The size of the movie's floating window. Valid only when floating window is true.
 */
export declare const FloatingWindowSize: typeof Enumeration & {

  /**
   * The floating window is one fifth the length and height of the movie's original display size.
   */
  readonly ONE_FIFTH: FloatingWindowSize_ONE_FIFTH;
  /**
   * The floating window is one fifth the length and height of the movie's original display size.
   */
  readonly oneFifth: FloatingWindowSize_ONE_FIFTH;
  /**
   * The floating window is one fifth the length and height of the movie's original display size.
   */
  readonly onefifth: FloatingWindowSize_ONE_FIFTH;

  /**
   * The floating window is one fourth the length and height of the movie's original display size.
   */
  readonly ONE_FOURTH: FloatingWindowSize_ONE_FOURTH;
  /**
   * The floating window is one fourth the length and height of the movie's original display size.
   */
  readonly oneFourth: FloatingWindowSize_ONE_FOURTH;
  /**
   * The floating window is one fourth the length and height of the movie's original display size.
   */
  readonly onefourth: FloatingWindowSize_ONE_FOURTH;

  /**
   * The floating window is one half the length and height of the movie's original display size.
   */
  readonly ONE_HALF: FloatingWindowSize_ONE_HALF;
  /**
   * The floating window is one half the length and height of the movie's original display size.
   */
  readonly oneHalf: FloatingWindowSize_ONE_HALF;
  /**
   * The floating window is one half the length and height of the movie's original display size.
   */
  readonly onehalf: FloatingWindowSize_ONE_HALF;

  /**
   * The floating window is the movie's original display size.
   */
  readonly FULL: FloatingWindowSize_FULL;
  /**
   * The floating window is the movie's original display size.
   */
  readonly full: FloatingWindowSize_FULL;

  /**
   * The floating window is twice the length and height of the movie's original display size.
   */
  readonly TWICE: FloatingWindowSize_TWICE;
  /**
   * The floating window is twice the length and height of the movie's original display size.
   */
  readonly twice: FloatingWindowSize_TWICE;

  /**
   * The floating window is triple the length and height of the movie's original display size.
   */
  readonly TRIPLE: FloatingWindowSize_TRIPLE;
  /**
   * The floating window is triple the length and height of the movie's original display size.
   */
  readonly triple: FloatingWindowSize_TRIPLE;

  /**
   * The floating window is quadruple the length and height of the movie's original display size.
   */
  readonly QUADRUPLE: FloatingWindowSize_QUADRUPLE;
  /**
   * The floating window is quadruple the length and height of the movie's original display size.
   */
  readonly quadruple: FloatingWindowSize_QUADRUPLE;

  /**
   * The floating window fills the entire screen.
   */
  readonly MAX: FloatingWindowSize_MAX;
  /**
   * The floating window fills the entire screen.
   */
  readonly max: FloatingWindowSize_MAX;

}
