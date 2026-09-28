/**
 * RecordsPerPage.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RecordsPerPage: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RecordsPerPage extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RecordsPerPage>): boolean;

  /**
   * @internal **WARNING:** `__RecordsPerPage` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RecordsPerPage]: never;
}


/**
 * Places each record on a new page.
 */
interface RecordsPerPage_SINGLE_RECORD extends RecordsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684886386;
}

/**
 * Places as many records as fit on a page.
 */
interface RecordsPerPage_MULTIPLE_RECORD extends RecordsPerPage {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684884850;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The number of records per page.
 */
export declare namespace RecordsPerPage {
/**
 * Places each record on a new page.
 */
type SINGLE_RECORD = RecordsPerPage_SINGLE_RECORD;

/**
 * Places as many records as fit on a page.
 */
type MULTIPLE_RECORD = RecordsPerPage_MULTIPLE_RECORD;

}
/**
 * The number of records per page.
 */
export declare const RecordsPerPage: typeof Enumeration & {

  /**
   * Places each record on a new page.
   */
  readonly SINGLE_RECORD: RecordsPerPage_SINGLE_RECORD;
  /**
   * Places each record on a new page.
   */
  readonly singleRecord: RecordsPerPage_SINGLE_RECORD;
  /**
   * Places each record on a new page.
   */
  readonly singlerecord: RecordsPerPage_SINGLE_RECORD;

  /**
   * Places as many records as fit on a page.
   */
  readonly MULTIPLE_RECORD: RecordsPerPage_MULTIPLE_RECORD;
  /**
   * Places as many records as fit on a page.
   */
  readonly multipleRecord: RecordsPerPage_MULTIPLE_RECORD;
  /**
   * Places as many records as fit on a page.
   */
  readonly multiplerecord: RecordsPerPage_MULTIPLE_RECORD;

}
