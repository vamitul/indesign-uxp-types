/**
 * PagePositions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PagePositions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PagePositions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PagePositions>): boolean;

  /**
   * @internal **WARNING:** `__PagePositions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PagePositions]: never;
}


/**
 * Places the page in the upper left corner.
 */
interface PagePositions_UPPER_LEFT extends PagePositions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668183118;
}

/**
 * Centers the page horizontally.
 */
interface PagePositions_CENTER_HORIZONTALLY extends PagePositions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668183112;
}

/**
 * Centers the page vertically.
 */
interface PagePositions_CENTER_VERTICALLY extends PagePositions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668183126;
}

/**
 * Centers the page horizontally and vertically.
 */
interface PagePositions_CENTERED extends PagePositions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668183106;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for positioning the page on the paper or film.
 */
export declare namespace PagePositions {
/**
 * Places the page in the upper left corner.
 */
type UPPER_LEFT = PagePositions_UPPER_LEFT;

/**
 * Centers the page horizontally.
 */
type CENTER_HORIZONTALLY = PagePositions_CENTER_HORIZONTALLY;

/**
 * Centers the page vertically.
 */
type CENTER_VERTICALLY = PagePositions_CENTER_VERTICALLY;

/**
 * Centers the page horizontally and vertically.
 */
type CENTERED = PagePositions_CENTERED;

}
/**
 * Options for positioning the page on the paper or film.
 */
export declare const PagePositions: typeof Enumeration & {

  /**
   * Places the page in the upper left corner.
   */
  readonly UPPER_LEFT: PagePositions_UPPER_LEFT;
  /**
   * Places the page in the upper left corner.
   */
  readonly upperLeft: PagePositions_UPPER_LEFT;
  /**
   * Places the page in the upper left corner.
   */
  readonly upperleft: PagePositions_UPPER_LEFT;

  /**
   * Centers the page horizontally.
   */
  readonly CENTER_HORIZONTALLY: PagePositions_CENTER_HORIZONTALLY;
  /**
   * Centers the page horizontally.
   */
  readonly centerHorizontally: PagePositions_CENTER_HORIZONTALLY;
  /**
   * Centers the page horizontally.
   */
  readonly centerhorizontally: PagePositions_CENTER_HORIZONTALLY;

  /**
   * Centers the page vertically.
   */
  readonly CENTER_VERTICALLY: PagePositions_CENTER_VERTICALLY;
  /**
   * Centers the page vertically.
   */
  readonly centerVertically: PagePositions_CENTER_VERTICALLY;
  /**
   * Centers the page vertically.
   */
  readonly centervertically: PagePositions_CENTER_VERTICALLY;

  /**
   * Centers the page horizontally and vertically.
   */
  readonly CENTERED: PagePositions_CENTERED;
  /**
   * Centers the page horizontally and vertically.
   */
  readonly centered: PagePositions_CENTERED;

}
