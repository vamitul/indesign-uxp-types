/**
 * FolioOrientationOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FolioOrientationOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FolioOrientationOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FolioOrientationOptions>): boolean;

  /**
   * @internal **WARNING:** `__FolioOrientationOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FolioOrientationOptions]: never;
}


/**
 * Portrait orientation only.
 */
interface FolioOrientationOptions_PORTRAIT extends FolioOrientationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1751738216;
}

/**
 * Landscape orientation only.
 */
interface FolioOrientationOptions_LANDSCAPE extends FolioOrientationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2003395685;
}

/**
 * Both portrait and landscape orientations.
 */
interface FolioOrientationOptions_PORTRAIT_AND_LANDSCAPE extends FolioOrientationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699303266;
}

/**
 * Automatically determines orientation based on the orientation of the mini
 * folios.
 */
interface FolioOrientationOptions_AUTO extends FolioOrientationOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1635019116;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which page orientations the folio supports.
 */
export declare namespace FolioOrientationOptions {
/**
 * Portrait orientation only.
 */
type PORTRAIT = FolioOrientationOptions_PORTRAIT;

/**
 * Landscape orientation only.
 */
type LANDSCAPE = FolioOrientationOptions_LANDSCAPE;

/**
 * Both portrait and landscape orientations.
 */
type PORTRAIT_AND_LANDSCAPE = FolioOrientationOptions_PORTRAIT_AND_LANDSCAPE;

/**
 * Automatically determines orientation based on the orientation of the mini
 * folios.
 */
type AUTO = FolioOrientationOptions_AUTO;

}
/**
 * Which page orientations the folio supports.
 */
export declare const FolioOrientationOptions: typeof Enumeration & {

  /**
   * Portrait orientation only.
   */
  readonly PORTRAIT: FolioOrientationOptions_PORTRAIT;
  /**
   * Portrait orientation only.
   */
  readonly portrait: FolioOrientationOptions_PORTRAIT;

  /**
   * Landscape orientation only.
   */
  readonly LANDSCAPE: FolioOrientationOptions_LANDSCAPE;
  /**
   * Landscape orientation only.
   */
  readonly landscape: FolioOrientationOptions_LANDSCAPE;

  /**
   * Both portrait and landscape orientations.
   */
  readonly PORTRAIT_AND_LANDSCAPE: FolioOrientationOptions_PORTRAIT_AND_LANDSCAPE;
  /**
   * Both portrait and landscape orientations.
   */
  readonly portraitAndLandscape: FolioOrientationOptions_PORTRAIT_AND_LANDSCAPE;
  /**
   * Both portrait and landscape orientations.
   */
  readonly portraitandlandscape: FolioOrientationOptions_PORTRAIT_AND_LANDSCAPE;

  /**
   * Automatically determines orientation based on the orientation of the mini
   * folios.
   */
  readonly AUTO: FolioOrientationOptions_AUTO;
  /**
   * Automatically determines orientation based on the orientation of the mini
   * folios.
   */
  readonly auto: FolioOrientationOptions_AUTO;

}
