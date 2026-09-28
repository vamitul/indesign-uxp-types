/**
 * ThumbsPerPage.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ThumbsPerPage: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ThumbsPerPage extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ThumbsPerPage>): boolean;

  /**
   * @internal **WARNING:** `__ThumbsPerPage` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ThumbsPerPage]: never;
}


/**
 * Fits one row on the page; the row contains two thumbnails.
 */
interface ThumbsPerPage_K1X2 extends ThumbsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1949399090;
}

/**
 * Fits two rows of two.
 */
interface ThumbsPerPage_K2X2 extends ThumbsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1949464626;
}

/**
 * Fits three rows of three.
 */
interface ThumbsPerPage_K3X3 extends ThumbsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1949530163;
}

/**
 * Fits four rows of four.
 */
interface ThumbsPerPage_K4X4 extends ThumbsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1949595700;
}

/**
 * Fits five rows of five.
 */
interface ThumbsPerPage_K5X5 extends ThumbsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1949661237;
}

/**
 * Fits six rows of six.
 */
interface ThumbsPerPage_K6X6 extends ThumbsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1949726774;
}

/**
 * Fits seven rows of seven.
 */
interface ThumbsPerPage_K7X7 extends ThumbsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1949792311;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How many thumbnail rows and columns are fit onto a printed page, from one row of two up to a
 * seven-by-seven grid.
 */
export declare namespace ThumbsPerPage {
/**
 * Fits one row on the page; the row contains two thumbnails.
 */
type K1X2 = ThumbsPerPage_K1X2;

/**
 * Fits two rows of two.
 */
type K2X2 = ThumbsPerPage_K2X2;

/**
 * Fits three rows of three.
 */
type K3X3 = ThumbsPerPage_K3X3;

/**
 * Fits four rows of four.
 */
type K4X4 = ThumbsPerPage_K4X4;

/**
 * Fits five rows of five.
 */
type K5X5 = ThumbsPerPage_K5X5;

/**
 * Fits six rows of six.
 */
type K6X6 = ThumbsPerPage_K6X6;

/**
 * Fits seven rows of seven.
 */
type K7X7 = ThumbsPerPage_K7X7;

}
/**
 * How many thumbnail rows and columns are fit onto a printed page, from one row of two up to a
 * seven-by-seven grid.
 */
export declare const ThumbsPerPage: typeof Enumeration & {

  /**
   * Fits one row on the page; the row contains two thumbnails.
   */
  readonly K1X2: ThumbsPerPage_K1X2;
  /**
   * Fits one row on the page; the row contains two thumbnails.
   */
  readonly k1x2: ThumbsPerPage_K1X2;

  /**
   * Fits two rows of two.
   */
  readonly K2X2: ThumbsPerPage_K2X2;
  /**
   * Fits two rows of two.
   */
  readonly k2x2: ThumbsPerPage_K2X2;

  /**
   * Fits three rows of three.
   */
  readonly K3X3: ThumbsPerPage_K3X3;
  /**
   * Fits three rows of three.
   */
  readonly k3x3: ThumbsPerPage_K3X3;

  /**
   * Fits four rows of four.
   */
  readonly K4X4: ThumbsPerPage_K4X4;
  /**
   * Fits four rows of four.
   */
  readonly k4x4: ThumbsPerPage_K4X4;

  /**
   * Fits five rows of five.
   */
  readonly K5X5: ThumbsPerPage_K5X5;
  /**
   * Fits five rows of five.
   */
  readonly k5x5: ThumbsPerPage_K5X5;

  /**
   * Fits six rows of six.
   */
  readonly K6X6: ThumbsPerPage_K6X6;
  /**
   * Fits six rows of six.
   */
  readonly k6x6: ThumbsPerPage_K6X6;

  /**
   * Fits seven rows of seven.
   */
  readonly K7X7: ThumbsPerPage_K7X7;
  /**
   * Fits seven rows of seven.
   */
  readonly k7x7: ThumbsPerPage_K7X7;

}
