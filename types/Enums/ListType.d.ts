/**
 * ListType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ListType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ListType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ListType>): boolean;

  /**
   * @internal **WARNING:** `__ListType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ListType]: never;
}


/**
 * No list.
 */
interface ListType_NO_LIST extends ListType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280601711;
}

/**
 * Bullet list.
 */
interface ListType_BULLET_LIST extends ListType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280598644;
}

/**
 * Numbered list.
 */
interface ListType_NUMBERED_LIST extends ListType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1280601709;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a paragraph is part of a bulleted list, a numbered list, or no list at all.
 */
export declare namespace ListType {
/**
 * No list.
 */
type NO_LIST = ListType_NO_LIST;

/**
 * Bullet list.
 */
type BULLET_LIST = ListType_BULLET_LIST;

/**
 * Numbered list.
 */
type NUMBERED_LIST = ListType_NUMBERED_LIST;

}
/**
 * Whether a paragraph is part of a bulleted list, a numbered list, or no list at all.
 */
export declare const ListType: typeof Enumeration & {

  /**
   * No list.
   */
  readonly NO_LIST: ListType_NO_LIST;
  /**
   * No list.
   */
  readonly noList: ListType_NO_LIST;
  /**
   * No list.
   */
  readonly nolist: ListType_NO_LIST;

  /**
   * Bullet list.
   */
  readonly BULLET_LIST: ListType_BULLET_LIST;
  /**
   * Bullet list.
   */
  readonly bulletList: ListType_BULLET_LIST;
  /**
   * Bullet list.
   */
  readonly bulletlist: ListType_BULLET_LIST;

  /**
   * Numbered list.
   */
  readonly NUMBERED_LIST: ListType_NUMBERED_LIST;
  /**
   * Numbered list.
   */
  readonly numberedList: ListType_NUMBERED_LIST;
  /**
   * Numbered list.
   */
  readonly numberedlist: ListType_NUMBERED_LIST;

}
