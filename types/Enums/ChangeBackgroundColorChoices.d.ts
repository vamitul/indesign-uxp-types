/**
 * ChangeBackgroundColorChoices.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ChangeBackgroundColorChoices: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ChangeBackgroundColorChoices extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ChangeBackgroundColorChoices>): boolean;

  /**
   * @internal **WARNING:** `__ChangeBackgroundColorChoices` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ChangeBackgroundColorChoices]: never;
}


/**
 * The background color for changed text is the same as the galley background color.
 */
interface ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR extends ChangeBackgroundColorChoices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700095842;
}

/**
 * The background color for changed text is the same as the color assigned to the current user.
 */
interface ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_USER_COLOR extends ChangeBackgroundColorChoices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700099426;
}

/**
 * The background color for changed text is the same as the track changes preferences background color. For information, see background color for added text, background color for deleted text, or background color for moved text.
 */
interface ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR extends ChangeBackgroundColorChoices {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700098146;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Background color options for changed text. 
 */
export declare namespace ChangeBackgroundColorChoices {
/**
 * The background color for changed text is the same as the galley background color.
 */
type CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR = ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR;

/**
 * The background color for changed text is the same as the color assigned to the current user.
 */
type CHANGE_BACKGROUND_USES_USER_COLOR = ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_USER_COLOR;

/**
 * The background color for changed text is the same as the track changes preferences background color. For information, see background color for added text, background color for deleted text, or background color for moved text.
 */
type CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR = ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR;

}
/**
 * Background color options for changed text. 
 */
export declare const ChangeBackgroundColorChoices: typeof Enumeration & {

  /**
   * The background color for changed text is the same as the galley background color.
   */
  readonly CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR;
  /**
   * The background color for changed text is the same as the galley background color.
   */
  readonly changeBackgroundUsesGalleyBackgroundColor: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR;
  /**
   * The background color for changed text is the same as the galley background color.
   */
  readonly changebackgroundusesgalleybackgroundcolor: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR;

  /**
   * The background color for changed text is the same as the color assigned to the current user.
   */
  readonly CHANGE_BACKGROUND_USES_USER_COLOR: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_USER_COLOR;
  /**
   * The background color for changed text is the same as the color assigned to the current user.
   */
  readonly changeBackgroundUsesUserColor: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_USER_COLOR;
  /**
   * The background color for changed text is the same as the color assigned to the current user.
   */
  readonly changebackgroundusesusercolor: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_USER_COLOR;

  /**
   * The background color for changed text is the same as the track changes preferences background color. For information, see background color for added text, background color for deleted text, or background color for moved text.
   */
  readonly CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR;
  /**
   * The background color for changed text is the same as the track changes preferences background color. For information, see background color for added text, background color for deleted text, or background color for moved text.
   */
  readonly changeBackgroundUsesChangePrefColor: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR;
  /**
   * The background color for changed text is the same as the track changes preferences background color. For information, see background color for added text, background color for deleted text, or background color for moved text.
   */
  readonly changebackgrounduseschangeprefcolor: ChangeBackgroundColorChoices_CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR;

}
