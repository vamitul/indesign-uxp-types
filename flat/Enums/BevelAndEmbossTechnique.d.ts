/**
 * BevelAndEmbossTechnique.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BevelAndEmbossTechnique: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BevelAndEmbossTechnique extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BevelAndEmbossTechnique>): boolean;

  /**
   * @internal **WARNING:** `__BevelAndEmbossTechnique` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BevelAndEmbossTechnique]: never;
}


/**
 * Emboss and bevel contours are smooth.
 */
interface BevelAndEmbossTechnique_SMOOTH_CONTOUR extends BevelAndEmbossTechnique {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020619105;
}

/**
 * Emboss and bevel contours are chiseled and have hard corners.
 */
interface BevelAndEmbossTechnique_CHISEL_HARD extends BevelAndEmbossTechnique {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020619106;
}

/**
 * Emboss or bevel contours chiseled but softened somewhat.
 */
interface BevelAndEmbossTechnique_CHISEL_SOFT extends BevelAndEmbossTechnique {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020619107;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Bevel and emboss technique options.
 */
export declare namespace BevelAndEmbossTechnique {
/**
 * Emboss and bevel contours are smooth.
 */
type SMOOTH_CONTOUR = BevelAndEmbossTechnique_SMOOTH_CONTOUR;

/**
 * Emboss and bevel contours are chiseled and have hard corners.
 */
type CHISEL_HARD = BevelAndEmbossTechnique_CHISEL_HARD;

/**
 * Emboss or bevel contours chiseled but softened somewhat.
 */
type CHISEL_SOFT = BevelAndEmbossTechnique_CHISEL_SOFT;

}
/**
 * Bevel and emboss technique options.
 */
export declare const BevelAndEmbossTechnique: typeof Enumeration & {

  /**
   * Emboss and bevel contours are smooth.
   */
  readonly SMOOTH_CONTOUR: BevelAndEmbossTechnique_SMOOTH_CONTOUR;
  /**
   * Emboss and bevel contours are smooth.
   */
  readonly smoothContour: BevelAndEmbossTechnique_SMOOTH_CONTOUR;
  /**
   * Emboss and bevel contours are smooth.
   */
  readonly smoothcontour: BevelAndEmbossTechnique_SMOOTH_CONTOUR;

  /**
   * Emboss and bevel contours are chiseled and have hard corners.
   */
  readonly CHISEL_HARD: BevelAndEmbossTechnique_CHISEL_HARD;
  /**
   * Emboss and bevel contours are chiseled and have hard corners.
   */
  readonly chiselHard: BevelAndEmbossTechnique_CHISEL_HARD;
  /**
   * Emboss and bevel contours are chiseled and have hard corners.
   */
  readonly chiselhard: BevelAndEmbossTechnique_CHISEL_HARD;

  /**
   * Emboss or bevel contours chiseled but softened somewhat.
   */
  readonly CHISEL_SOFT: BevelAndEmbossTechnique_CHISEL_SOFT;
  /**
   * Emboss or bevel contours chiseled but softened somewhat.
   */
  readonly chiselSoft: BevelAndEmbossTechnique_CHISEL_SOFT;
  /**
   * Emboss or bevel contours chiseled but softened somewhat.
   */
  readonly chiselsoft: BevelAndEmbossTechnique_CHISEL_SOFT;

}
