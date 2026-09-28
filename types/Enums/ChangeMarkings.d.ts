/**
 * ChangeMarkings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ChangeMarkings: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ChangeMarkings extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ChangeMarkings>): boolean;

  /**
   * @internal **WARNING:** `__ChangeMarkings` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ChangeMarkings]: never;
}


/**
 * Does not mark changed text.
 */
interface ChangeMarkings_NONE extends ChangeMarkings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses a strikethrough to mark changed text.
 */
interface ChangeMarkings_STRIKETHROUGH extends ChangeMarkings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699968114;
}

/**
 * Underlines changed text.
 */
interface ChangeMarkings_UNDERLINE_SINGLE extends ChangeMarkings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700097636;
}

/**
 * Outlines changed text.
 */
interface ChangeMarkings_OUTLINE extends ChangeMarkings {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1869900910;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Marking options for changed text.
 */
export declare namespace ChangeMarkings {
/**
 * Does not mark changed text.
 */
type NONE = ChangeMarkings_NONE;

/**
 * Uses a strikethrough to mark changed text.
 */
type STRIKETHROUGH = ChangeMarkings_STRIKETHROUGH;

/**
 * Underlines changed text.
 */
type UNDERLINE_SINGLE = ChangeMarkings_UNDERLINE_SINGLE;

/**
 * Outlines changed text.
 */
type OUTLINE = ChangeMarkings_OUTLINE;

}
/**
 * Marking options for changed text.
 */
export declare const ChangeMarkings: typeof Enumeration & {

  /**
   * Does not mark changed text.
   */
  readonly NONE: ChangeMarkings_NONE;
  /**
   * Does not mark changed text.
   */
  readonly none: ChangeMarkings_NONE;

  /**
   * Uses a strikethrough to mark changed text.
   */
  readonly STRIKETHROUGH: ChangeMarkings_STRIKETHROUGH;
  /**
   * Uses a strikethrough to mark changed text.
   */
  readonly strikethrough: ChangeMarkings_STRIKETHROUGH;

  /**
   * Underlines changed text.
   */
  readonly UNDERLINE_SINGLE: ChangeMarkings_UNDERLINE_SINGLE;
  /**
   * Underlines changed text.
   */
  readonly underlineSingle: ChangeMarkings_UNDERLINE_SINGLE;
  /**
   * Underlines changed text.
   */
  readonly underlinesingle: ChangeMarkings_UNDERLINE_SINGLE;

  /**
   * Outlines changed text.
   */
  readonly OUTLINE: ChangeMarkings_OUTLINE;
  /**
   * Outlines changed text.
   */
  readonly outline: ChangeMarkings_OUTLINE;

}
