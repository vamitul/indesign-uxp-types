/**
 * FirstBaseline.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FirstBaseline: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FirstBaseline extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FirstBaseline>): boolean;

  /**
   * @internal **WARNING:** `__FirstBaseline` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FirstBaseline]: never;
}


/**
 * The tallest character in the font falls below the top inset of the object.
 */
interface FirstBaseline_ASCENT_OFFSET extends FirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296135023;
}

/**
 * The tops of upper case letters touch the top inset of the object.
 */
interface FirstBaseline_CAP_HEIGHT extends FirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296255087;
}

/**
 * The text leading value defines the distance between the baseline of the text and the top inset of the object.
 */
interface FirstBaseline_LEADING_OFFSET extends FirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296852079;
}

/**
 * The text em box height is the distance between the baseline of the text and the top inset of the object.
 */
interface FirstBaseline_EMBOX_HEIGHT extends FirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296386159;
}

/**
 * The tops of lower case letters touch the top inset of the object.
 */
interface FirstBaseline_X_HEIGHT extends FirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299728495;
}

/**
 * Uses the value specified for minimum first baseline offset as the distance between the baseline of the text and the top inset of the object.
 */
interface FirstBaseline_FIXED_HEIGHT extends FirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1313228911;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Starting point options for the first baseline of text.
 */
export declare namespace FirstBaseline {
/**
 * The tallest character in the font falls below the top inset of the object.
 */
type ASCENT_OFFSET = FirstBaseline_ASCENT_OFFSET;

/**
 * The tops of upper case letters touch the top inset of the object.
 */
type CAP_HEIGHT = FirstBaseline_CAP_HEIGHT;

/**
 * The text leading value defines the distance between the baseline of the text and the top inset of the object.
 */
type LEADING_OFFSET = FirstBaseline_LEADING_OFFSET;

/**
 * The text em box height is the distance between the baseline of the text and the top inset of the object.
 */
type EMBOX_HEIGHT = FirstBaseline_EMBOX_HEIGHT;

/**
 * The tops of lower case letters touch the top inset of the object.
 */
type X_HEIGHT = FirstBaseline_X_HEIGHT;

/**
 * Uses the value specified for minimum first baseline offset as the distance between the baseline of the text and the top inset of the object.
 */
type FIXED_HEIGHT = FirstBaseline_FIXED_HEIGHT;

}
/**
 * Starting point options for the first baseline of text.
 */
export declare const FirstBaseline: typeof Enumeration & {

  /**
   * The tallest character in the font falls below the top inset of the object.
   */
  readonly ASCENT_OFFSET: FirstBaseline_ASCENT_OFFSET;
  /**
   * The tallest character in the font falls below the top inset of the object.
   */
  readonly ascentOffset: FirstBaseline_ASCENT_OFFSET;
  /**
   * The tallest character in the font falls below the top inset of the object.
   */
  readonly ascentoffset: FirstBaseline_ASCENT_OFFSET;

  /**
   * The tops of upper case letters touch the top inset of the object.
   */
  readonly CAP_HEIGHT: FirstBaseline_CAP_HEIGHT;
  /**
   * The tops of upper case letters touch the top inset of the object.
   */
  readonly capHeight: FirstBaseline_CAP_HEIGHT;
  /**
   * The tops of upper case letters touch the top inset of the object.
   */
  readonly capheight: FirstBaseline_CAP_HEIGHT;

  /**
   * The text leading value defines the distance between the baseline of the text and the top inset of the object.
   */
  readonly LEADING_OFFSET: FirstBaseline_LEADING_OFFSET;
  /**
   * The text leading value defines the distance between the baseline of the text and the top inset of the object.
   */
  readonly leadingOffset: FirstBaseline_LEADING_OFFSET;
  /**
   * The text leading value defines the distance between the baseline of the text and the top inset of the object.
   */
  readonly leadingoffset: FirstBaseline_LEADING_OFFSET;

  /**
   * The text em box height is the distance between the baseline of the text and the top inset of the object.
   */
  readonly EMBOX_HEIGHT: FirstBaseline_EMBOX_HEIGHT;
  /**
   * The text em box height is the distance between the baseline of the text and the top inset of the object.
   */
  readonly emboxHeight: FirstBaseline_EMBOX_HEIGHT;
  /**
   * The text em box height is the distance between the baseline of the text and the top inset of the object.
   */
  readonly emboxheight: FirstBaseline_EMBOX_HEIGHT;

  /**
   * The tops of lower case letters touch the top inset of the object.
   */
  readonly X_HEIGHT: FirstBaseline_X_HEIGHT;
  /**
   * The tops of lower case letters touch the top inset of the object.
   */
  readonly xHeight: FirstBaseline_X_HEIGHT;
  /**
   * The tops of lower case letters touch the top inset of the object.
   */
  readonly xheight: FirstBaseline_X_HEIGHT;

  /**
   * Uses the value specified for minimum first baseline offset as the distance between the baseline of the text and the top inset of the object.
   */
  readonly FIXED_HEIGHT: FirstBaseline_FIXED_HEIGHT;
  /**
   * Uses the value specified for minimum first baseline offset as the distance between the baseline of the text and the top inset of the object.
   */
  readonly fixedHeight: FirstBaseline_FIXED_HEIGHT;
  /**
   * Uses the value specified for minimum first baseline offset as the distance between the baseline of the text and the top inset of the object.
   */
  readonly fixedheight: FirstBaseline_FIXED_HEIGHT;

}
