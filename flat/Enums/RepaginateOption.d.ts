/**
 * RepaginateOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RepaginateOption: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RepaginateOption extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RepaginateOption>): boolean;

  /**
   * @internal **WARNING:** `__RepaginateOption` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RepaginateOption]: never;
}


/**
 * Continues page numbers sequentially from the previous book content object.
 */
interface RepaginateOption_NEXT_PAGE extends RepaginateOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885500011;
}

/**
 * Starts page numbers for each book content object at the next odd-numbered page after the last page of the previous book content object.
 */
interface RepaginateOption_NEXT_ODD_PAGE extends RepaginateOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1332765291;
}

/**
 * Starts page numbers for each book content object at the next even-numbered page after the last page of the previous book content object.
 */
interface RepaginateOption_NEXT_EVEN_PAGE extends RepaginateOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1164993131;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Page numbering options for book content objects within the book.
 */
export declare namespace RepaginateOption {
/**
 * Continues page numbers sequentially from the previous book content object.
 */
type NEXT_PAGE = RepaginateOption_NEXT_PAGE;

/**
 * Starts page numbers for each book content object at the next odd-numbered page after the last page of the previous book content object.
 */
type NEXT_ODD_PAGE = RepaginateOption_NEXT_ODD_PAGE;

/**
 * Starts page numbers for each book content object at the next even-numbered page after the last page of the previous book content object.
 */
type NEXT_EVEN_PAGE = RepaginateOption_NEXT_EVEN_PAGE;

}
/**
 * Page numbering options for book content objects within the book.
 */
export declare const RepaginateOption: typeof Enumeration & {

  /**
   * Continues page numbers sequentially from the previous book content object.
   */
  readonly NEXT_PAGE: RepaginateOption_NEXT_PAGE;
  /**
   * Continues page numbers sequentially from the previous book content object.
   */
  readonly nextPage: RepaginateOption_NEXT_PAGE;
  /**
   * Continues page numbers sequentially from the previous book content object.
   */
  readonly nextpage: RepaginateOption_NEXT_PAGE;

  /**
   * Starts page numbers for each book content object at the next odd-numbered page after the last page of the previous book content object.
   */
  readonly NEXT_ODD_PAGE: RepaginateOption_NEXT_ODD_PAGE;
  /**
   * Starts page numbers for each book content object at the next odd-numbered page after the last page of the previous book content object.
   */
  readonly nextOddPage: RepaginateOption_NEXT_ODD_PAGE;
  /**
   * Starts page numbers for each book content object at the next odd-numbered page after the last page of the previous book content object.
   */
  readonly nextoddpage: RepaginateOption_NEXT_ODD_PAGE;

  /**
   * Starts page numbers for each book content object at the next even-numbered page after the last page of the previous book content object.
   */
  readonly NEXT_EVEN_PAGE: RepaginateOption_NEXT_EVEN_PAGE;
  /**
   * Starts page numbers for each book content object at the next even-numbered page after the last page of the previous book content object.
   */
  readonly nextEvenPage: RepaginateOption_NEXT_EVEN_PAGE;
  /**
   * Starts page numbers for each book content object at the next even-numbered page after the last page of the previous book content object.
   */
  readonly nextevenpage: RepaginateOption_NEXT_EVEN_PAGE;

}
