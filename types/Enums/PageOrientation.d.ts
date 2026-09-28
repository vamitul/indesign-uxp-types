/**
 * PageOrientation.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageOrientation: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageOrientation extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageOrientation>): boolean;

  /**
   * @internal **WARNING:** `__PageOrientation` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageOrientation]: never;
}


/**
 * Landscape.
 */
interface PageOrientation_LANDSCAPE extends PageOrientation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2003395685;
}

/**
 * Portrait.
 */
interface PageOrientation_PORTRAIT extends PageOrientation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1751738216;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether the page is wider than it is tall, or taller than it is wide.
 */
export declare namespace PageOrientation {
/**
 * Landscape.
 */
type LANDSCAPE = PageOrientation_LANDSCAPE;

/**
 * Portrait.
 */
type PORTRAIT = PageOrientation_PORTRAIT;

}
/**
 * Whether the page is wider than it is tall, or taller than it is wide.
 */
export declare const PageOrientation: typeof Enumeration & {

  /**
   * Landscape.
   */
  readonly LANDSCAPE: PageOrientation_LANDSCAPE;
  /**
   * Landscape.
   */
  readonly landscape: PageOrientation_LANDSCAPE;

  /**
   * Portrait.
   */
  readonly PORTRAIT: PageOrientation_PORTRAIT;
  /**
   * Portrait.
   */
  readonly portrait: PageOrientation_PORTRAIT;

}
