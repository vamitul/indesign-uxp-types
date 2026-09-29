/**
 * PublishCoverEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PublishCoverEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PublishCoverEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PublishCoverEnum>): boolean;

  /**
   * @internal **WARNING:** `__PublishCoverEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PublishCoverEnum]: never;
}


/**
 * Rasterize first page as cover image.
 */
interface PublishCoverEnum_FIRST_PAGE extends PublishCoverEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700947536;
}

/**
 * Use external image as cover image.
 */
interface PublishCoverEnum_EXTERNAL_IMAGE extends PublishCoverEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700952169;
}

/**
 * Rasterize chosen page as cover image.
 */
interface PublishCoverEnum_CHOSEN_PAGE extends PublishCoverEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701013072;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where the cover image of a published document comes from — the first page, a chosen page, or
 * an external file.
 */
export declare namespace PublishCoverEnum {
/**
 * Rasterize first page as cover image.
 */
type FIRST_PAGE = PublishCoverEnum_FIRST_PAGE;

/**
 * Use external image as cover image.
 */
type EXTERNAL_IMAGE = PublishCoverEnum_EXTERNAL_IMAGE;

/**
 * Rasterize chosen page as cover image.
 */
type CHOSEN_PAGE = PublishCoverEnum_CHOSEN_PAGE;

}
/**
 * Where the cover image of a published document comes from — the first page, a chosen page, or
 * an external file.
 */
export declare const PublishCoverEnum: typeof Enumeration & {

  /**
   * Rasterize first page as cover image.
   */
  readonly FIRST_PAGE: PublishCoverEnum_FIRST_PAGE;
  /**
   * Rasterize first page as cover image.
   */
  readonly firstPage: PublishCoverEnum_FIRST_PAGE;
  /**
   * Rasterize first page as cover image.
   */
  readonly firstpage: PublishCoverEnum_FIRST_PAGE;

  /**
   * Use external image as cover image.
   */
  readonly EXTERNAL_IMAGE: PublishCoverEnum_EXTERNAL_IMAGE;
  /**
   * Use external image as cover image.
   */
  readonly externalImage: PublishCoverEnum_EXTERNAL_IMAGE;
  /**
   * Use external image as cover image.
   */
  readonly externalimage: PublishCoverEnum_EXTERNAL_IMAGE;

  /**
   * Rasterize chosen page as cover image.
   */
  readonly CHOSEN_PAGE: PublishCoverEnum_CHOSEN_PAGE;
  /**
   * Rasterize chosen page as cover image.
   */
  readonly chosenPage: PublishCoverEnum_CHOSEN_PAGE;
  /**
   * Rasterize chosen page as cover image.
   */
  readonly chosenpage: PublishCoverEnum_CHOSEN_PAGE;

}
