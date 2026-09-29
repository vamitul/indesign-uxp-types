/**
 * PublishFormatEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PublishFormatEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PublishFormatEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PublishFormatEnum>): boolean;

  /**
   * @internal **WARNING:** `__PublishFormatEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PublishFormatEnum]: never;
}


/**
 * Publish by pages.
 */
interface PublishFormatEnum_PUBLISH_BY_PAGES extends PublishFormatEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700950134;
}

/**
 * Publish by spread.
 */
interface PublishFormatEnum_PUBLISH_BY_SPREAD extends PublishFormatEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700950902;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a published document is laid out one page at a time or one spread at a time.
 */
export declare namespace PublishFormatEnum {
/**
 * Publish by pages.
 */
type PUBLISH_BY_PAGES = PublishFormatEnum_PUBLISH_BY_PAGES;

/**
 * Publish by spread.
 */
type PUBLISH_BY_SPREAD = PublishFormatEnum_PUBLISH_BY_SPREAD;

}
/**
 * Whether a published document is laid out one page at a time or one spread at a time.
 */
export declare const PublishFormatEnum: typeof Enumeration & {

  /**
   * Publish by pages.
   */
  readonly PUBLISH_BY_PAGES: PublishFormatEnum_PUBLISH_BY_PAGES;
  /**
   * Publish by pages.
   */
  readonly publishByPages: PublishFormatEnum_PUBLISH_BY_PAGES;
  /**
   * Publish by pages.
   */
  readonly publishbypages: PublishFormatEnum_PUBLISH_BY_PAGES;

  /**
   * Publish by spread.
   */
  readonly PUBLISH_BY_SPREAD: PublishFormatEnum_PUBLISH_BY_SPREAD;
  /**
   * Publish by spread.
   */
  readonly publishBySpread: PublishFormatEnum_PUBLISH_BY_SPREAD;
  /**
   * Publish by spread.
   */
  readonly publishbyspread: PublishFormatEnum_PUBLISH_BY_SPREAD;

}
