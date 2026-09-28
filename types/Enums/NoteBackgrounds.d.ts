/**
 * NoteBackgrounds.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __NoteBackgrounds: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface NoteBackgrounds extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<NoteBackgrounds>): boolean;

  /**
   * @internal **WARNING:** `__NoteBackgrounds` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__NoteBackgrounds]: never;
}


/**
 * Uses the galley background color.
 */
interface NoteBackgrounds_GALLEY_BACKGROUND_COLOR extends NoteBackgrounds {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699168839;
}

/**
 * Uses the note color.
 */
interface NoteBackgrounds_USE_NOTE_COLOR extends NoteBackgrounds {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700020807;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a note's background takes the galley colour or the note's own colour.
 */
export declare namespace NoteBackgrounds {
/**
 * Uses the galley background color.
 */
type GALLEY_BACKGROUND_COLOR = NoteBackgrounds_GALLEY_BACKGROUND_COLOR;

/**
 * Uses the note color.
 */
type USE_NOTE_COLOR = NoteBackgrounds_USE_NOTE_COLOR;

}
/**
 * Whether a note's background takes the galley colour or the note's own colour.
 */
export declare const NoteBackgrounds: typeof Enumeration & {

  /**
   * Uses the galley background color.
   */
  readonly GALLEY_BACKGROUND_COLOR: NoteBackgrounds_GALLEY_BACKGROUND_COLOR;
  /**
   * Uses the galley background color.
   */
  readonly galleyBackgroundColor: NoteBackgrounds_GALLEY_BACKGROUND_COLOR;
  /**
   * Uses the galley background color.
   */
  readonly galleybackgroundcolor: NoteBackgrounds_GALLEY_BACKGROUND_COLOR;

  /**
   * Uses the note color.
   */
  readonly USE_NOTE_COLOR: NoteBackgrounds_USE_NOTE_COLOR;
  /**
   * Uses the note color.
   */
  readonly useNoteColor: NoteBackgrounds_USE_NOTE_COLOR;
  /**
   * Uses the note color.
   */
  readonly usenotecolor: NoteBackgrounds_USE_NOTE_COLOR;

}
