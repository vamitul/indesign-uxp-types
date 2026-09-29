/**
 * EpubCover.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EpubCover: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EpubCover extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EpubCover>): boolean;

  /**
   * @internal **WARNING:** `__EpubCover` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EpubCover]: never;
}


/**
 * no cover image.
 */
interface EpubCover_NONE extends EpubCover {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Rasterize first page as cover image.
 */
interface EpubCover_FIRST_PAGE extends EpubCover {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700947536;
}

/**
 * Use external image as cover image.
 */
interface EpubCover_EXTERNAL_IMAGE extends EpubCover {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700952169;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * EPub export option for cover image.
 */
export declare namespace EpubCover {
/**
 * no cover image.
 */
type NONE = EpubCover_NONE;

/**
 * Rasterize first page as cover image.
 */
type FIRST_PAGE = EpubCover_FIRST_PAGE;

/**
 * Use external image as cover image.
 */
type EXTERNAL_IMAGE = EpubCover_EXTERNAL_IMAGE;

}
/**
 * EPub export option for cover image.
 */
export declare const EpubCover: typeof Enumeration & {

  /**
   * no cover image.
   */
  readonly NONE: EpubCover_NONE;
  /**
   * no cover image.
   */
  readonly none: EpubCover_NONE;

  /**
   * Rasterize first page as cover image.
   */
  readonly FIRST_PAGE: EpubCover_FIRST_PAGE;
  /**
   * Rasterize first page as cover image.
   */
  readonly firstPage: EpubCover_FIRST_PAGE;
  /**
   * Rasterize first page as cover image.
   */
  readonly firstpage: EpubCover_FIRST_PAGE;

  /**
   * Use external image as cover image.
   */
  readonly EXTERNAL_IMAGE: EpubCover_EXTERNAL_IMAGE;
  /**
   * Use external image as cover image.
   */
  readonly externalImage: EpubCover_EXTERNAL_IMAGE;
  /**
   * Use external image as cover image.
   */
  readonly externalimage: EpubCover_EXTERNAL_IMAGE;

}
