/**
 * CharacterCountLocation.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CharacterCountLocation: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CharacterCountLocation extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CharacterCountLocation>): boolean;

  /**
   * @internal **WARNING:** `__CharacterCountLocation` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CharacterCountLocation]: never;
}


/**
 * Hides the character count.
 */
interface CharacterCountLocation_NONE extends CharacterCountLocation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Displays the character count at the top of the frame.
 */
interface CharacterCountLocation_TOP_ALIGN extends CharacterCountLocation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953460256;
}

/**
 * Displays the character count on the left side of the frame.
 */
interface CharacterCountLocation_LEFT_ALIGN extends CharacterCountLocation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Displays the character count at the bottom of the frame.
 */
interface CharacterCountLocation_BOTTOM_ALIGN extends CharacterCountLocation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651471469;
}

/**
 * Displays the character count on the right side of the frame.
 */
interface CharacterCountLocation_RIGHT_ALIGN extends CharacterCountLocation {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Character count location options.
 */
export declare namespace CharacterCountLocation {
/**
 * Hides the character count.
 */
type NONE = CharacterCountLocation_NONE;

/**
 * Displays the character count at the top of the frame.
 */
type TOP_ALIGN = CharacterCountLocation_TOP_ALIGN;

/**
 * Displays the character count on the left side of the frame.
 */
type LEFT_ALIGN = CharacterCountLocation_LEFT_ALIGN;

/**
 * Displays the character count at the bottom of the frame.
 */
type BOTTOM_ALIGN = CharacterCountLocation_BOTTOM_ALIGN;

/**
 * Displays the character count on the right side of the frame.
 */
type RIGHT_ALIGN = CharacterCountLocation_RIGHT_ALIGN;

}
/**
 * Character count location options.
 */
export declare const CharacterCountLocation: typeof Enumeration & {

  /**
   * Hides the character count.
   */
  readonly NONE: CharacterCountLocation_NONE;
  /**
   * Hides the character count.
   */
  readonly none: CharacterCountLocation_NONE;

  /**
   * Displays the character count at the top of the frame.
   */
  readonly TOP_ALIGN: CharacterCountLocation_TOP_ALIGN;
  /**
   * Displays the character count at the top of the frame.
   */
  readonly topAlign: CharacterCountLocation_TOP_ALIGN;
  /**
   * Displays the character count at the top of the frame.
   */
  readonly topalign: CharacterCountLocation_TOP_ALIGN;

  /**
   * Displays the character count on the left side of the frame.
   */
  readonly LEFT_ALIGN: CharacterCountLocation_LEFT_ALIGN;
  /**
   * Displays the character count on the left side of the frame.
   */
  readonly leftAlign: CharacterCountLocation_LEFT_ALIGN;
  /**
   * Displays the character count on the left side of the frame.
   */
  readonly leftalign: CharacterCountLocation_LEFT_ALIGN;

  /**
   * Displays the character count at the bottom of the frame.
   */
  readonly BOTTOM_ALIGN: CharacterCountLocation_BOTTOM_ALIGN;
  /**
   * Displays the character count at the bottom of the frame.
   */
  readonly bottomAlign: CharacterCountLocation_BOTTOM_ALIGN;
  /**
   * Displays the character count at the bottom of the frame.
   */
  readonly bottomalign: CharacterCountLocation_BOTTOM_ALIGN;

  /**
   * Displays the character count on the right side of the frame.
   */
  readonly RIGHT_ALIGN: CharacterCountLocation_RIGHT_ALIGN;
  /**
   * Displays the character count on the right side of the frame.
   */
  readonly rightAlign: CharacterCountLocation_RIGHT_ALIGN;
  /**
   * Displays the character count on the right side of the frame.
   */
  readonly rightalign: CharacterCountLocation_RIGHT_ALIGN;

}
