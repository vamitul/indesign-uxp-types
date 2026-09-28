/**
 * PrintPageOrientation.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PrintPageOrientation: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PrintPageOrientation extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PrintPageOrientation>): boolean;

  /**
   * @internal **WARNING:** `__PrintPageOrientation` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PrintPageOrientation]: never;
}


/**
 * Portrait.
 */
interface PrintPageOrientation_PORTRAIT extends PrintPageOrientation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1751738216;
}

/**
 * Landscape.
 */
interface PrintPageOrientation_LANDSCAPE extends PrintPageOrientation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2003395685;
}

/**
 * Reverse portrait.
 */
interface PrintPageOrientation_REVERSE_PORTRAIT extends PrintPageOrientation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1869771376;
}

/**
 * Reverse landscape.
 */
interface PrintPageOrientation_REVERSE_LANDSCAPE extends PrintPageOrientation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1869771372;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How the page is turned on the paper — portrait, landscape, or either of them reversed.
 */
export declare namespace PrintPageOrientation {
/**
 * Portrait.
 */
type PORTRAIT = PrintPageOrientation_PORTRAIT;

/**
 * Landscape.
 */
type LANDSCAPE = PrintPageOrientation_LANDSCAPE;

/**
 * Reverse portrait.
 */
type REVERSE_PORTRAIT = PrintPageOrientation_REVERSE_PORTRAIT;

/**
 * Reverse landscape.
 */
type REVERSE_LANDSCAPE = PrintPageOrientation_REVERSE_LANDSCAPE;

}
/**
 * How the page is turned on the paper — portrait, landscape, or either of them reversed.
 */
export declare const PrintPageOrientation: typeof Enumeration & {

  /**
   * Portrait.
   */
  readonly PORTRAIT: PrintPageOrientation_PORTRAIT;
  /**
   * Portrait.
   */
  readonly portrait: PrintPageOrientation_PORTRAIT;

  /**
   * Landscape.
   */
  readonly LANDSCAPE: PrintPageOrientation_LANDSCAPE;
  /**
   * Landscape.
   */
  readonly landscape: PrintPageOrientation_LANDSCAPE;

  /**
   * Reverse portrait.
   */
  readonly REVERSE_PORTRAIT: PrintPageOrientation_REVERSE_PORTRAIT;
  /**
   * Reverse portrait.
   */
  readonly reversePortrait: PrintPageOrientation_REVERSE_PORTRAIT;
  /**
   * Reverse portrait.
   */
  readonly reverseportrait: PrintPageOrientation_REVERSE_PORTRAIT;

  /**
   * Reverse landscape.
   */
  readonly REVERSE_LANDSCAPE: PrintPageOrientation_REVERSE_LANDSCAPE;
  /**
   * Reverse landscape.
   */
  readonly reverseLandscape: PrintPageOrientation_REVERSE_LANDSCAPE;
  /**
   * Reverse landscape.
   */
  readonly reverselandscape: PrintPageOrientation_REVERSE_LANDSCAPE;

}
