/**
 * PDFCrop.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PDFCrop: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PDFCrop extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PDFCrop>): boolean;

  /**
   * @internal **WARNING:** `__PDFCrop` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PDFCrop]: never;
}


/**
 * Places only the area defined by the PDF author as placeable artwork.
 */
interface PDFCrop_CROP_ART extends PDFCrop {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131573313;
}

/**
 * Places only the area displayed by Acrobat.
 */
interface PDFCrop_CROP_PDF extends PDFCrop {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131573328;
}

/**
 * Places only the area that represents the final trim size of the document.
 */
interface PDFCrop_CROP_TRIM extends PDFCrop {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131573332;
}

/**
 * Places only the area that represents clipped content.
 */
interface PDFCrop_CROP_BLEED extends PDFCrop {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131573314;
}

/**
 * Places the area that represents the physical paper size of the original PDF document.
 */
interface PDFCrop_CROP_MEDIA extends PDFCrop {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131573325;
}

/**
 * Places the page's bounding box using visible layers only.
 */
interface PDFCrop_CROP_CONTENT_VISIBLE_LAYERS extends PDFCrop {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131566703;
}

/**
 * Places the page's bounding box using all layers.
 */
interface PDFCrop_CROP_CONTENT_ALL_LAYERS extends PDFCrop {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131561324;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The amount of the PDF document to place.
 */
export declare namespace PDFCrop {
/**
 * Places only the area defined by the PDF author as placeable artwork.
 */
type CROP_ART = PDFCrop_CROP_ART;

/**
 * Places only the area displayed by Acrobat.
 */
type CROP_PDF = PDFCrop_CROP_PDF;

/**
 * Places only the area that represents the final trim size of the document.
 */
type CROP_TRIM = PDFCrop_CROP_TRIM;

/**
 * Places only the area that represents clipped content.
 */
type CROP_BLEED = PDFCrop_CROP_BLEED;

/**
 * Places the area that represents the physical paper size of the original PDF document.
 */
type CROP_MEDIA = PDFCrop_CROP_MEDIA;

/**
 * Places the page's bounding box using visible layers only.
 */
type CROP_CONTENT_VISIBLE_LAYERS = PDFCrop_CROP_CONTENT_VISIBLE_LAYERS;

/**
 * Places the page's bounding box using all layers.
 */
type CROP_CONTENT_ALL_LAYERS = PDFCrop_CROP_CONTENT_ALL_LAYERS;

}
/**
 * The amount of the PDF document to place.
 */
export declare const PDFCrop: typeof Enumeration & {

  /**
   * Places only the area defined by the PDF author as placeable artwork.
   */
  readonly CROP_ART: PDFCrop_CROP_ART;
  /**
   * Places only the area defined by the PDF author as placeable artwork.
   */
  readonly cropArt: PDFCrop_CROP_ART;
  /**
   * Places only the area defined by the PDF author as placeable artwork.
   */
  readonly cropart: PDFCrop_CROP_ART;

  /**
   * Places only the area displayed by Acrobat.
   */
  readonly CROP_PDF: PDFCrop_CROP_PDF;
  /**
   * Places only the area displayed by Acrobat.
   */
  readonly cropPdf: PDFCrop_CROP_PDF;
  /**
   * Places only the area displayed by Acrobat.
   */
  readonly croppdf: PDFCrop_CROP_PDF;

  /**
   * Places only the area that represents the final trim size of the document.
   */
  readonly CROP_TRIM: PDFCrop_CROP_TRIM;
  /**
   * Places only the area that represents the final trim size of the document.
   */
  readonly cropTrim: PDFCrop_CROP_TRIM;
  /**
   * Places only the area that represents the final trim size of the document.
   */
  readonly croptrim: PDFCrop_CROP_TRIM;

  /**
   * Places only the area that represents clipped content.
   */
  readonly CROP_BLEED: PDFCrop_CROP_BLEED;
  /**
   * Places only the area that represents clipped content.
   */
  readonly cropBleed: PDFCrop_CROP_BLEED;
  /**
   * Places only the area that represents clipped content.
   */
  readonly cropbleed: PDFCrop_CROP_BLEED;

  /**
   * Places the area that represents the physical paper size of the original PDF document.
   */
  readonly CROP_MEDIA: PDFCrop_CROP_MEDIA;
  /**
   * Places the area that represents the physical paper size of the original PDF document.
   */
  readonly cropMedia: PDFCrop_CROP_MEDIA;
  /**
   * Places the area that represents the physical paper size of the original PDF document.
   */
  readonly cropmedia: PDFCrop_CROP_MEDIA;

  /**
   * Places the page's bounding box using visible layers only.
   */
  readonly CROP_CONTENT_VISIBLE_LAYERS: PDFCrop_CROP_CONTENT_VISIBLE_LAYERS;
  /**
   * Places the page's bounding box using visible layers only.
   */
  readonly cropContentVisibleLayers: PDFCrop_CROP_CONTENT_VISIBLE_LAYERS;
  /**
   * Places the page's bounding box using visible layers only.
   */
  readonly cropcontentvisiblelayers: PDFCrop_CROP_CONTENT_VISIBLE_LAYERS;

  /**
   * Places the page's bounding box using all layers.
   */
  readonly CROP_CONTENT_ALL_LAYERS: PDFCrop_CROP_CONTENT_ALL_LAYERS;
  /**
   * Places the page's bounding box using all layers.
   */
  readonly cropContentAllLayers: PDFCrop_CROP_CONTENT_ALL_LAYERS;
  /**
   * Places the page's bounding box using all layers.
   */
  readonly cropcontentalllayers: PDFCrop_CROP_CONTENT_ALL_LAYERS;

}
