/**
 * SmoothScrollingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SmoothScrollingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SmoothScrollingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SmoothScrollingOptions>): boolean;

  /**
   * @internal **WARNING:** `__SmoothScrollingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SmoothScrollingOptions]: never;
}


/**
 * No smooth scrolling.
 */
interface SmoothScrollingOptions_NO_SMOOTH_SCROLL extends SmoothScrollingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699959662;
}

/**
 * Vertical smooth scrolling.
 */
interface SmoothScrollingOptions_VERTICAL extends SmoothScrollingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1986359924;
}

/**
 * Horizontal smooth scrolling.
 */
interface SmoothScrollingOptions_HORIZONTAL extends SmoothScrollingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1752134266;
}

/**
 * Vertical and horizontal smooth scrolling.
 */
interface SmoothScrollingOptions_VERTICAL_AND_HORIZONTAL extends SmoothScrollingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699959650;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which scrolling directions animate smoothly rather than jumping.
 */
export declare namespace SmoothScrollingOptions {
/**
 * No smooth scrolling.
 */
type NO_SMOOTH_SCROLL = SmoothScrollingOptions_NO_SMOOTH_SCROLL;

/**
 * Vertical smooth scrolling.
 */
type VERTICAL = SmoothScrollingOptions_VERTICAL;

/**
 * Horizontal smooth scrolling.
 */
type HORIZONTAL = SmoothScrollingOptions_HORIZONTAL;

/**
 * Vertical and horizontal smooth scrolling.
 */
type VERTICAL_AND_HORIZONTAL = SmoothScrollingOptions_VERTICAL_AND_HORIZONTAL;

}
/**
 * Which scrolling directions animate smoothly rather than jumping.
 */
export declare const SmoothScrollingOptions: typeof Enumeration & {

  /**
   * No smooth scrolling.
   */
  readonly NO_SMOOTH_SCROLL: SmoothScrollingOptions_NO_SMOOTH_SCROLL;
  /**
   * No smooth scrolling.
   */
  readonly noSmoothScroll: SmoothScrollingOptions_NO_SMOOTH_SCROLL;
  /**
   * No smooth scrolling.
   */
  readonly nosmoothscroll: SmoothScrollingOptions_NO_SMOOTH_SCROLL;

  /**
   * Vertical smooth scrolling.
   */
  readonly VERTICAL: SmoothScrollingOptions_VERTICAL;
  /**
   * Vertical smooth scrolling.
   */
  readonly vertical: SmoothScrollingOptions_VERTICAL;

  /**
   * Horizontal smooth scrolling.
   */
  readonly HORIZONTAL: SmoothScrollingOptions_HORIZONTAL;
  /**
   * Horizontal smooth scrolling.
   */
  readonly horizontal: SmoothScrollingOptions_HORIZONTAL;

  /**
   * Vertical and horizontal smooth scrolling.
   */
  readonly VERTICAL_AND_HORIZONTAL: SmoothScrollingOptions_VERTICAL_AND_HORIZONTAL;
  /**
   * Vertical and horizontal smooth scrolling.
   */
  readonly verticalAndHorizontal: SmoothScrollingOptions_VERTICAL_AND_HORIZONTAL;
  /**
   * Vertical and horizontal smooth scrolling.
   */
  readonly verticalandhorizontal: SmoothScrollingOptions_VERTICAL_AND_HORIZONTAL;

}
