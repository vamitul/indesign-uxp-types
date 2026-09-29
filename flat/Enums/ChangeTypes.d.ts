/**
 * ChangeTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ChangeTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ChangeTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ChangeTypes>): boolean;

  /**
   * @internal **WARNING:** `__ChangeTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ChangeTypes]: never;
}


/**
 * Added text.
 */
interface ChangeTypes_INSERTED_TEXT extends ChangeTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1799974515;
}

/**
 * Deleted text.
 */
interface ChangeTypes_DELETED_TEXT extends ChangeTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1799644524;
}

/**
 * Moved text.
 */
interface ChangeTypes_MOVED_TEXT extends ChangeTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1800236918;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Change type options.
 */
export declare namespace ChangeTypes {
/**
 * Added text.
 */
type INSERTED_TEXT = ChangeTypes_INSERTED_TEXT;

/**
 * Deleted text.
 */
type DELETED_TEXT = ChangeTypes_DELETED_TEXT;

/**
 * Moved text.
 */
type MOVED_TEXT = ChangeTypes_MOVED_TEXT;

}
/**
 * Change type options.
 */
export declare const ChangeTypes: typeof Enumeration & {

  /**
   * Added text.
   */
  readonly INSERTED_TEXT: ChangeTypes_INSERTED_TEXT;
  /**
   * Added text.
   */
  readonly insertedText: ChangeTypes_INSERTED_TEXT;
  /**
   * Added text.
   */
  readonly insertedtext: ChangeTypes_INSERTED_TEXT;

  /**
   * Deleted text.
   */
  readonly DELETED_TEXT: ChangeTypes_DELETED_TEXT;
  /**
   * Deleted text.
   */
  readonly deletedText: ChangeTypes_DELETED_TEXT;
  /**
   * Deleted text.
   */
  readonly deletedtext: ChangeTypes_DELETED_TEXT;

  /**
   * Moved text.
   */
  readonly MOVED_TEXT: ChangeTypes_MOVED_TEXT;
  /**
   * Moved text.
   */
  readonly movedText: ChangeTypes_MOVED_TEXT;
  /**
   * Moved text.
   */
  readonly movedtext: ChangeTypes_MOVED_TEXT;

}
