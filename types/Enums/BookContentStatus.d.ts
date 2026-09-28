/**
 * BookContentStatus.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BookContentStatus: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BookContentStatus extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BookContentStatus>): boolean;

  /**
   * @internal **WARNING:** `__BookContentStatus` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BookContentStatus]: never;
}


/**
 * The book content object is not open and is unchanged.
 */
interface BookContentStatus_NORMAL extends BookContentStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852797549;
}

/**
 * The book content object is missing because it has been moved, renamed, or deleted.
 */
interface BookContentStatus_MISSING_DOCUMENT extends BookContentStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1148150605;
}

/**
 * The book content object has been modified after repagination.
 */
interface BookContentStatus_DOCUMENT_OUT_OF_DATE extends BookContentStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1148150596;
}

/**
 * The book content object is being used by someone else and is therefore locked.
 */
interface BookContentStatus_DOCUMENT_IN_USE extends BookContentStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1148150601;
}

/**
 * The book content object is open.
 */
interface BookContentStatus_DOCUMENT_IS_OPEN extends BookContentStatus {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1148150607;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Book content file status options.
 */
export declare namespace BookContentStatus {
/**
 * The book content object is not open and is unchanged.
 */
type NORMAL = BookContentStatus_NORMAL;

/**
 * The book content object is missing because it has been moved, renamed, or deleted.
 */
type MISSING_DOCUMENT = BookContentStatus_MISSING_DOCUMENT;

/**
 * The book content object has been modified after repagination.
 */
type DOCUMENT_OUT_OF_DATE = BookContentStatus_DOCUMENT_OUT_OF_DATE;

/**
 * The book content object is being used by someone else and is therefore locked.
 */
type DOCUMENT_IN_USE = BookContentStatus_DOCUMENT_IN_USE;

/**
 * The book content object is open.
 */
type DOCUMENT_IS_OPEN = BookContentStatus_DOCUMENT_IS_OPEN;

}
/**
 * Book content file status options.
 */
export declare const BookContentStatus: typeof Enumeration & {

  /**
   * The book content object is not open and is unchanged.
   */
  readonly NORMAL: BookContentStatus_NORMAL;
  /**
   * The book content object is not open and is unchanged.
   */
  readonly normal: BookContentStatus_NORMAL;

  /**
   * The book content object is missing because it has been moved, renamed, or deleted.
   */
  readonly MISSING_DOCUMENT: BookContentStatus_MISSING_DOCUMENT;
  /**
   * The book content object is missing because it has been moved, renamed, or deleted.
   */
  readonly missingDocument: BookContentStatus_MISSING_DOCUMENT;
  /**
   * The book content object is missing because it has been moved, renamed, or deleted.
   */
  readonly missingdocument: BookContentStatus_MISSING_DOCUMENT;

  /**
   * The book content object has been modified after repagination.
   */
  readonly DOCUMENT_OUT_OF_DATE: BookContentStatus_DOCUMENT_OUT_OF_DATE;
  /**
   * The book content object has been modified after repagination.
   */
  readonly documentOutOfDate: BookContentStatus_DOCUMENT_OUT_OF_DATE;
  /**
   * The book content object has been modified after repagination.
   */
  readonly documentoutofdate: BookContentStatus_DOCUMENT_OUT_OF_DATE;

  /**
   * The book content object is being used by someone else and is therefore locked.
   */
  readonly DOCUMENT_IN_USE: BookContentStatus_DOCUMENT_IN_USE;
  /**
   * The book content object is being used by someone else and is therefore locked.
   */
  readonly documentInUse: BookContentStatus_DOCUMENT_IN_USE;
  /**
   * The book content object is being used by someone else and is therefore locked.
   */
  readonly documentinuse: BookContentStatus_DOCUMENT_IN_USE;

  /**
   * The book content object is open.
   */
  readonly DOCUMENT_IS_OPEN: BookContentStatus_DOCUMENT_IS_OPEN;
  /**
   * The book content object is open.
   */
  readonly documentIsOpen: BookContentStatus_DOCUMENT_IS_OPEN;
  /**
   * The book content object is open.
   */
  readonly documentisopen: BookContentStatus_DOCUMENT_IS_OPEN;

}
