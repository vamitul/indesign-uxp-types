/**
 * NoteColorChoices.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __NoteColorChoices: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface NoteColorChoices extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<NoteColorChoices>): boolean;

  /**
   * @internal **WARNING:** `__NoteColorChoices` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__NoteColorChoices]: never;
}


/**
 * Uses the color assigned to the user.
 */
interface NoteColorChoices_USE_USER_COLOR extends NoteColorChoices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700091203;
}

/**
 * Uses the note color.
 */
interface NoteColorChoices_USE_NOTE_PREF_COLOR extends NoteColorChoices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700089923;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a note takes the colour assigned to its author or the colour set in note preferences.
 */
export declare namespace NoteColorChoices {
/**
 * Uses the color assigned to the user.
 */
type USE_USER_COLOR = NoteColorChoices_USE_USER_COLOR;

/**
 * Uses the note color.
 */
type USE_NOTE_PREF_COLOR = NoteColorChoices_USE_NOTE_PREF_COLOR;

}
/**
 * Whether a note takes the colour assigned to its author or the colour set in note preferences.
 */
export declare const NoteColorChoices: typeof Enumeration & {

  /**
   * Uses the color assigned to the user.
   */
  readonly USE_USER_COLOR: NoteColorChoices_USE_USER_COLOR;
  /**
   * Uses the color assigned to the user.
   */
  readonly useUserColor: NoteColorChoices_USE_USER_COLOR;
  /**
   * Uses the color assigned to the user.
   */
  readonly useusercolor: NoteColorChoices_USE_USER_COLOR;

  /**
   * Uses the note color.
   */
  readonly USE_NOTE_PREF_COLOR: NoteColorChoices_USE_NOTE_PREF_COLOR;
  /**
   * Uses the note color.
   */
  readonly useNotePrefColor: NoteColorChoices_USE_NOTE_PREF_COLOR;
  /**
   * Uses the note color.
   */
  readonly usenoteprefcolor: NoteColorChoices_USE_NOTE_PREF_COLOR;

}
