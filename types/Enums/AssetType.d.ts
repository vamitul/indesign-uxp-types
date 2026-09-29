/**
 * AssetType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { Asset } from '../Asset';
import type { Library } from '../Library';



declare const __AssetType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AssetType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AssetType>): boolean;

  /**
   * @internal **WARNING:** `__AssetType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AssetType]: never;
}


/**
 * The asset is cataloged as an image asset.
 */
interface AssetType_IMAGE_TYPE extends AssetType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952409965;
}

/**
 * The asset is cataloged as an EPS asset.
 */
interface AssetType_EPS_TYPE extends AssetType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952400720;
}

/**
 * The asset is cataloged as a PDF asset.
 */
interface AssetType_PDF_TYPE extends AssetType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952403524;
}

/**
 * The asset is cataloged as a geometric page item asset.
 */
interface AssetType_GEOMETRY_TYPE extends AssetType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952409445;
}

/**
 * The asset is cataloged as a page asset.
 */
interface AssetType_PAGE_TYPE extends AssetType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952411745;
}

/**
 * The asset is cataloged as a text asset.
 */
interface AssetType_TEXT_TYPE extends AssetType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952412773;
}

/**
 * The asset is cataloged as a structure asset.
 */
interface AssetType_STRUCTURE_TYPE extends AssetType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952412532;
}

/**
 * The asset is cataloged as an InDesign file asset.
 */
interface AssetType_INDESIGN_FILE_TYPE extends AssetType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952409956;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The content category of an {@link Asset} stored in an InDesign object {@link Library} (`.indl` file).
 */
export declare namespace AssetType {
/**
 * The asset is cataloged as an image asset.
 */
type IMAGE_TYPE = AssetType_IMAGE_TYPE;

/**
 * The asset is cataloged as an EPS asset.
 */
type EPS_TYPE = AssetType_EPS_TYPE;

/**
 * The asset is cataloged as a PDF asset.
 */
type PDF_TYPE = AssetType_PDF_TYPE;

/**
 * The asset is cataloged as a geometric page item asset.
 */
type GEOMETRY_TYPE = AssetType_GEOMETRY_TYPE;

/**
 * The asset is cataloged as a page asset.
 */
type PAGE_TYPE = AssetType_PAGE_TYPE;

/**
 * The asset is cataloged as a text asset.
 */
type TEXT_TYPE = AssetType_TEXT_TYPE;

/**
 * Structure asset
 */
type STRUCTURE_TYPE = AssetType_STRUCTURE_TYPE;

/**
 * InDesign file asset
 */
type INDESIGN_FILE_TYPE = AssetType_INDESIGN_FILE_TYPE;

}
/**
 * The content category of an {@link Asset} stored in an InDesign object {@link Library} (`.indl` file).
 */
export declare const AssetType: typeof Enumeration & {

  /**
   * The asset is cataloged as an image asset.
   */
  readonly IMAGE_TYPE: AssetType_IMAGE_TYPE;
  /**
   * The asset is cataloged as an image asset.
   */
  readonly imageType: AssetType_IMAGE_TYPE;
  /**
   * The asset is cataloged as an image asset.
   */
  readonly imagetype: AssetType_IMAGE_TYPE;

  /**
   * The asset is cataloged as an EPS asset.
   */
  readonly EPS_TYPE: AssetType_EPS_TYPE;
  /**
   * The asset is cataloged as an EPS asset.
   */
  readonly epsType: AssetType_EPS_TYPE;
  /**
   * The asset is cataloged as an EPS asset.
   */
  readonly epstype: AssetType_EPS_TYPE;

  /**
   * The asset is cataloged as a PDF asset.
   */
  readonly PDF_TYPE: AssetType_PDF_TYPE;
  /**
   * The asset is cataloged as a PDF asset.
   */
  readonly pdfType: AssetType_PDF_TYPE;
  /**
   * The asset is cataloged as a PDF asset.
   */
  readonly pdftype: AssetType_PDF_TYPE;

  /**
   * The asset is cataloged as a geometric page item asset.
   */
  readonly GEOMETRY_TYPE: AssetType_GEOMETRY_TYPE;
  /**
   * The asset is cataloged as a geometric page item asset.
   */
  readonly geometryType: AssetType_GEOMETRY_TYPE;
  /**
   * The asset is cataloged as a geometric page item asset.
   */
  readonly geometrytype: AssetType_GEOMETRY_TYPE;

  /**
   * The asset is cataloged as a page asset.
   */
  readonly PAGE_TYPE: AssetType_PAGE_TYPE;
  /**
   * The asset is cataloged as a page asset.
   */
  readonly pageType: AssetType_PAGE_TYPE;
  /**
   * The asset is cataloged as a page asset.
   */
  readonly pagetype: AssetType_PAGE_TYPE;

  /**
   * The asset is cataloged as a text asset.
   */
  readonly TEXT_TYPE: AssetType_TEXT_TYPE;
  /**
   * The asset is cataloged as a text asset.
   */
  readonly textType: AssetType_TEXT_TYPE;
  /**
   * The asset is cataloged as a text asset.
   */
  readonly texttype: AssetType_TEXT_TYPE;

  /**
   * The asset is cataloged as a structure asset.
   */
  readonly STRUCTURE_TYPE: AssetType_STRUCTURE_TYPE;
  /**
   * The asset is cataloged as a structure asset.
   */
  readonly structureType: AssetType_STRUCTURE_TYPE;
  /**
   * The asset is cataloged as a structure asset.
   */
  readonly structuretype: AssetType_STRUCTURE_TYPE;

  /**
   * The asset is cataloged as an InDesign file asset.
   */
  readonly INDESIGN_FILE_TYPE: AssetType_INDESIGN_FILE_TYPE;
  /**
   * The asset is cataloged as an InDesign file asset.
   */
  readonly indesignFileType: AssetType_INDESIGN_FILE_TYPE;
  /**
   * The asset is cataloged as an InDesign file asset.
   */
  readonly indesignfiletype: AssetType_INDESIGN_FILE_TYPE;

}
