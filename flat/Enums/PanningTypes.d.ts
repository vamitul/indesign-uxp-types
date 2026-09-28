/**
 * PanningTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PanningTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PanningTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PanningTypes>): boolean;

  /**
   * @internal **WARNING:** `__PanningTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PanningTypes]: never;
}


/**
 * While scrolling, does not greek images or text; lowest quality display with the fastest performance.
 */
interface PanningTypes_NO_GREEKING extends PanningTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699116368;
}

/**
 * While scrolling, greeks newly revealed images until the mouse is released; medium quality display with medium performance speed.
 */
interface PanningTypes_GREEK_IMAGES extends PanningTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699111248;
}

/**
 * While scrolling, greeks newly revealed images and text until the mouse is released; highest quality display with the slowest performance.
 */
interface PanningTypes_GREEK_IMAGES_AND_TEXT extends PanningTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699639120;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The display performance settings to use while scrolling.
 */
export declare namespace PanningTypes {
/**
 * While scrolling, does not greek images or text; lowest quality display with the fastest performance.
 */
type NO_GREEKING = PanningTypes_NO_GREEKING;

/**
 * While scrolling, greeks newly revealed images until the mouse is released; medium quality display with medium performance speed.
 */
type GREEK_IMAGES = PanningTypes_GREEK_IMAGES;

/**
 * While scrolling, greeks newly revealed images and text until the mouse is released; highest quality display with the slowest performance.
 */
type GREEK_IMAGES_AND_TEXT = PanningTypes_GREEK_IMAGES_AND_TEXT;

}
/**
 * The display performance settings to use while scrolling.
 */
export declare const PanningTypes: typeof Enumeration & {

  /**
   * While scrolling, does not greek images or text; lowest quality display with the fastest performance.
   */
  readonly NO_GREEKING: PanningTypes_NO_GREEKING;
  /**
   * While scrolling, does not greek images or text; lowest quality display with the fastest performance.
   */
  readonly noGreeking: PanningTypes_NO_GREEKING;
  /**
   * While scrolling, does not greek images or text; lowest quality display with the fastest performance.
   */
  readonly nogreeking: PanningTypes_NO_GREEKING;

  /**
   * While scrolling, greeks newly revealed images until the mouse is released; medium quality display with medium performance speed.
   */
  readonly GREEK_IMAGES: PanningTypes_GREEK_IMAGES;
  /**
   * While scrolling, greeks newly revealed images until the mouse is released; medium quality display with medium performance speed.
   */
  readonly greekImages: PanningTypes_GREEK_IMAGES;
  /**
   * While scrolling, greeks newly revealed images until the mouse is released; medium quality display with medium performance speed.
   */
  readonly greekimages: PanningTypes_GREEK_IMAGES;

  /**
   * While scrolling, greeks newly revealed images and text until the mouse is released; highest quality display with the slowest performance.
   */
  readonly GREEK_IMAGES_AND_TEXT: PanningTypes_GREEK_IMAGES_AND_TEXT;
  /**
   * While scrolling, greeks newly revealed images and text until the mouse is released; highest quality display with the slowest performance.
   */
  readonly greekImagesAndText: PanningTypes_GREEK_IMAGES_AND_TEXT;
  /**
   * While scrolling, greeks newly revealed images and text until the mouse is released; highest quality display with the slowest performance.
   */
  readonly greekimagesandtext: PanningTypes_GREEK_IMAGES_AND_TEXT;

}
