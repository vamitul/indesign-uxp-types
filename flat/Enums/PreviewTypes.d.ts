/**
 * PreviewTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PreviewTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PreviewTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PreviewTypes>): boolean;

  /**
   * @internal **WARNING:** `__PreviewTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PreviewTypes]: never;
}


/**
 * Does not save a preview image.
 */
interface PreviewTypes_NONE extends PreviewTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Saves the preview in TIFF format.
 */
interface PreviewTypes_TIFF_PREVIEW extends PreviewTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1164997734;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a preview image is saved inside the document, and in what format.
 */
export declare namespace PreviewTypes {
/**
 * Does not save a preview image.
 */
type NONE = PreviewTypes_NONE;

/**
 * Saves the preview in TIFF format.
 */
type TIFF_PREVIEW = PreviewTypes_TIFF_PREVIEW;

}
/**
 * Whether a preview image is saved inside the document, and in what format.
 */
export declare const PreviewTypes: typeof Enumeration & {

  /**
   * Does not save a preview image.
   */
  readonly NONE: PreviewTypes_NONE;
  /**
   * Does not save a preview image.
   */
  readonly none: PreviewTypes_NONE;

  /**
   * Saves the preview in TIFF format.
   */
  readonly TIFF_PREVIEW: PreviewTypes_TIFF_PREVIEW;
  /**
   * Saves the preview in TIFF format.
   */
  readonly tiffPreview: PreviewTypes_TIFF_PREVIEW;
  /**
   * Saves the preview in TIFF format.
   */
  readonly tiffpreview: PreviewTypes_TIFF_PREVIEW;

}
