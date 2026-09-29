/**
 * ImportedPageCropOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImportedPageCropOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImportedPageCropOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImportedPageCropOptions>): boolean;

  /**
   * @internal **WARNING:** `__ImportedPageCropOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImportedPageCropOptions]: never;
}


/**
 * Places the page's bounding box.
 */
interface ImportedPageCropOptions_CROP_CONTENT extends ImportedPageCropOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131573315;
}

/**
 * Places the page's bleed area.
 */
interface ImportedPageCropOptions_CROP_BLEED extends ImportedPageCropOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131573314;
}

/**
 * Places the page's slug area.
 */
interface ImportedPageCropOptions_CROP_SLUG extends ImportedPageCropOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131565932;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The cropping option of an imported InDesign page.
 */
export declare namespace ImportedPageCropOptions {
/**
 * Places the page's bounding box.
 */
type CROP_CONTENT = ImportedPageCropOptions_CROP_CONTENT;

/**
 * Places the page's bleed area.
 */
type CROP_BLEED = ImportedPageCropOptions_CROP_BLEED;

/**
 * Places the page's slug area.
 */
type CROP_SLUG = ImportedPageCropOptions_CROP_SLUG;

}
/**
 * The cropping option of an imported InDesign page.
 */
export declare const ImportedPageCropOptions: typeof Enumeration & {

  /**
   * Places the page's bounding box.
   */
  readonly CROP_CONTENT: ImportedPageCropOptions_CROP_CONTENT;
  /**
   * Places the page's bounding box.
   */
  readonly cropContent: ImportedPageCropOptions_CROP_CONTENT;
  /**
   * Places the page's bounding box.
   */
  readonly cropcontent: ImportedPageCropOptions_CROP_CONTENT;

  /**
   * Places the page's bleed area.
   */
  readonly CROP_BLEED: ImportedPageCropOptions_CROP_BLEED;
  /**
   * Places the page's bleed area.
   */
  readonly cropBleed: ImportedPageCropOptions_CROP_BLEED;
  /**
   * Places the page's bleed area.
   */
  readonly cropbleed: ImportedPageCropOptions_CROP_BLEED;

  /**
   * Places the page's slug area.
   */
  readonly CROP_SLUG: ImportedPageCropOptions_CROP_SLUG;
  /**
   * Places the page's slug area.
   */
  readonly cropSlug: ImportedPageCropOptions_CROP_SLUG;
  /**
   * Places the page's slug area.
   */
  readonly cropslug: ImportedPageCropOptions_CROP_SLUG;

}
