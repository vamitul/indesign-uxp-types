/**
 * TilingTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TilingTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TilingTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TilingTypes>): boolean;

  /**
   * @internal **WARNING:** `__TilingTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TilingTypes]: never;
}


/**
 * Automatically calculates the number of tiles required, including the overlap. For information, see tiling overlap.
 */
interface TilingTypes_AUTO extends TilingTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635019116;
}

/**
 * Increases the amount of overlap as necessary so that the right sides of the right-most
 * tiles are aligned at the right edge of the document page, and the bottom sides of the
 * bottom-most tiles are aligned at the bottom edge of the document page.
 *
 * For information, see tiling overlap.
 */
interface TilingTypes_AUTO_JUSTIFIED extends TilingTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634366324;
}

/**
 * Prints a single tile whose upper left corner is at the zero point of the rulers.
 */
interface TilingTypes_MANUAL extends TilingTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835955308;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How a document's pages are split into printed tiles — calculated automatically, automatically
 * with edges justified to the page, or a single tile placed manually at the ruler origin.
 */
export declare namespace TilingTypes {
/**
 * Automatically calculates the number of tiles required, including the overlap. For information, see tiling overlap.
 */
type AUTO = TilingTypes_AUTO;

/**
 * Increases the amount of overlap as necessary so that the right sides of the right-most
 * tiles are aligned at the right edge of the document page, and the bottom sides of the
 * bottom-most tiles are aligned at the bottom edge of the document page.
 *
 * For information, see tiling overlap.
 */
type AUTO_JUSTIFIED = TilingTypes_AUTO_JUSTIFIED;

/**
 * Prints a single tile whose upper left corner is at the zero point of the rulers.
 */
type MANUAL = TilingTypes_MANUAL;

}
/**
 * How a document's pages are split into printed tiles — calculated automatically, automatically
 * with edges justified to the page, or a single tile placed manually at the ruler origin.
 */
export declare const TilingTypes: typeof Enumeration & {

  /**
   * Automatically calculates the number of tiles required, including the overlap. For information, see tiling overlap.
   */
  readonly AUTO: TilingTypes_AUTO;
  /**
   * Automatically calculates the number of tiles required, including the overlap. For information, see tiling overlap.
   */
  readonly auto: TilingTypes_AUTO;

  /**
   * Increases the amount of overlap as necessary so that the right sides of the right-most
   * tiles are aligned at the right edge of the document page, and the bottom sides of the
   * bottom-most tiles are aligned at the bottom edge of the document page.
   *
   * For information, see tiling overlap.
   */
  readonly AUTO_JUSTIFIED: TilingTypes_AUTO_JUSTIFIED;
  /**
   * Increases the amount of overlap as necessary so that the right sides of the right-most
   * tiles are aligned at the right edge of the document page, and the bottom sides of the
   * bottom-most tiles are aligned at the bottom edge of the document page.
   *
   * For information, see tiling overlap.
   */
  readonly autoJustified: TilingTypes_AUTO_JUSTIFIED;
  /**
   * Increases the amount of overlap as necessary so that the right sides of the right-most
   * tiles are aligned at the right edge of the document page, and the bottom sides of the
   * bottom-most tiles are aligned at the bottom edge of the document page.
   *
   * For information, see tiling overlap.
   */
  readonly autojustified: TilingTypes_AUTO_JUSTIFIED;

  /**
   * Prints a single tile whose upper left corner is at the zero point of the rulers.
   */
  readonly MANUAL: TilingTypes_MANUAL;
  /**
   * Prints a single tile whose upper left corner is at the zero point of the rulers.
   */
  readonly manual: TilingTypes_MANUAL;

}
