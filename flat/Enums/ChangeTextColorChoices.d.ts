/**
 * ChangeTextColorChoices.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ChangeTextColorChoices: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ChangeTextColorChoices extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ChangeTextColorChoices>): boolean;

  /**
   * @internal **WARNING:** `__ChangeTextColorChoices` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ChangeTextColorChoices]: never;
}


/**
 * The text color for changed text is the same as the galley text color.
 */
interface ChangeTextColorChoices_CHANGE_USES_GALLEY_TEXT_COLOR extends ChangeTextColorChoices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700095843;
}

/**
 * The text color for changed text is the same as the text color defined in track changes preferences. For information, see text color for added text, text color for deleted text, or text color for moved text. 
 */
interface ChangeTextColorChoices_CHANGE_USES_CHANGE_PREF_COLOR extends ChangeTextColorChoices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700098147;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Changed text color options.
 */
export declare namespace ChangeTextColorChoices {
/**
 * The text color for changed text is the same as the galley text color.
 */
type CHANGE_USES_GALLEY_TEXT_COLOR = ChangeTextColorChoices_CHANGE_USES_GALLEY_TEXT_COLOR;

/**
 * The text color for changed text is the same as the text color defined in track changes preferences. For information, see text color for added text, text color for deleted text, or text color for moved text. 
 */
type CHANGE_USES_CHANGE_PREF_COLOR = ChangeTextColorChoices_CHANGE_USES_CHANGE_PREF_COLOR;

}
/**
 * Changed text color options.
 */
export declare const ChangeTextColorChoices: typeof Enumeration & {

  /**
   * The text color for changed text is the same as the galley text color.
   */
  readonly CHANGE_USES_GALLEY_TEXT_COLOR: ChangeTextColorChoices_CHANGE_USES_GALLEY_TEXT_COLOR;
  /**
   * The text color for changed text is the same as the galley text color.
   */
  readonly changeUsesGalleyTextColor: ChangeTextColorChoices_CHANGE_USES_GALLEY_TEXT_COLOR;
  /**
   * The text color for changed text is the same as the galley text color.
   */
  readonly changeusesgalleytextcolor: ChangeTextColorChoices_CHANGE_USES_GALLEY_TEXT_COLOR;

  /**
   * The text color for changed text is the same as the text color defined in track changes preferences. For information, see text color for added text, text color for deleted text, or text color for moved text. 
   */
  readonly CHANGE_USES_CHANGE_PREF_COLOR: ChangeTextColorChoices_CHANGE_USES_CHANGE_PREF_COLOR;
  /**
   * The text color for changed text is the same as the text color defined in track changes preferences. For information, see text color for added text, text color for deleted text, or text color for moved text. 
   */
  readonly changeUsesChangePrefColor: ChangeTextColorChoices_CHANGE_USES_CHANGE_PREF_COLOR;
  /**
   * The text color for changed text is the same as the text color defined in track changes preferences. For information, see text color for added text, text color for deleted text, or text color for moved text. 
   */
  readonly changeuseschangeprefcolor: ChangeTextColorChoices_CHANGE_USES_CHANGE_PREF_COLOR;

}
