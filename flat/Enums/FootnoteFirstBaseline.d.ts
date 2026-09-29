/**
 * FootnoteFirstBaseline.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FootnoteFirstBaseline: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FootnoteFirstBaseline extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FootnoteFirstBaseline>): boolean;

  /**
   * @internal **WARNING:** `__FootnoteFirstBaseline` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FootnoteFirstBaseline]: never;
}


/**
 * The tallest character in the font falls below the top of the footnote container.
 */
interface FootnoteFirstBaseline_ASCENT_OFFSET extends FootnoteFirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296135023;
}

/**
 * The tops of upper case letters touch the top of the footnote container.
 */
interface FootnoteFirstBaseline_CAP_HEIGHT extends FootnoteFirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296255087;
}

/**
 * The leading value of the text defines the distance between the baseline of the text and the top of the footnote container.
 */
interface FootnoteFirstBaseline_LEADING_OFFSET extends FootnoteFirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296852079;
}

/**
 * The em box height of the text defines the distance between the baseline of the text and the top of the footnote container.
 */
interface FootnoteFirstBaseline_EMBOX_HEIGHT extends FootnoteFirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296386159;
}

/**
 * The tops of lower case letters without ascents, such as x, touch the top of the footnote container.
 */
interface FootnoteFirstBaseline_X_HEIGHT extends FootnoteFirstBaseline {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299728495;
}

/**
 * The footnote minimum first baseline offset value defines the distance between the baseline of the text and the top of the footnote container.
 */
interface FootnoteFirstBaseline_FIXED_HEIGHT extends FootnoteFirstBaseline {
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
 * Options for specifying the amount of vertical space between the top of the footnote container and the first line of footnote text.
 */
export declare namespace FootnoteFirstBaseline {
/**
 * The tallest character in the font falls below the top of the footnote container.
 */
type ASCENT_OFFSET = FootnoteFirstBaseline_ASCENT_OFFSET;

/**
 * The tops of upper case letters touch the top of the footnote container.
 */
type CAP_HEIGHT = FootnoteFirstBaseline_CAP_HEIGHT;

/**
 * The leading value of the text defines the distance between the baseline of the text and the top of the footnote container.
 */
type LEADING_OFFSET = FootnoteFirstBaseline_LEADING_OFFSET;

/**
 * The em box height of the text defines the distance between the baseline of the text and the top of the footnote container.
 */
type EMBOX_HEIGHT = FootnoteFirstBaseline_EMBOX_HEIGHT;

/**
 * The tops of lower case letters without ascents, such as x, touch the top of the footnote container.
 */
type X_HEIGHT = FootnoteFirstBaseline_X_HEIGHT;

/**
 * The footnote minimum first baseline offset value defines the distance between the baseline of the text and the top of the footnote container.
 */
type FIXED_HEIGHT = FootnoteFirstBaseline_FIXED_HEIGHT;

}
/**
 * Options for specifying the amount of vertical space between the top of the footnote container and the first line of footnote text.
 */
export declare const FootnoteFirstBaseline: typeof Enumeration & {

  /**
   * The tallest character in the font falls below the top of the footnote container.
   */
  readonly ASCENT_OFFSET: FootnoteFirstBaseline_ASCENT_OFFSET;
  /**
   * The tallest character in the font falls below the top of the footnote container.
   */
  readonly ascentOffset: FootnoteFirstBaseline_ASCENT_OFFSET;
  /**
   * The tallest character in the font falls below the top of the footnote container.
   */
  readonly ascentoffset: FootnoteFirstBaseline_ASCENT_OFFSET;

  /**
   * The tops of upper case letters touch the top of the footnote container.
   */
  readonly CAP_HEIGHT: FootnoteFirstBaseline_CAP_HEIGHT;
  /**
   * The tops of upper case letters touch the top of the footnote container.
   */
  readonly capHeight: FootnoteFirstBaseline_CAP_HEIGHT;
  /**
   * The tops of upper case letters touch the top of the footnote container.
   */
  readonly capheight: FootnoteFirstBaseline_CAP_HEIGHT;

  /**
   * The leading value of the text defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly LEADING_OFFSET: FootnoteFirstBaseline_LEADING_OFFSET;
  /**
   * The leading value of the text defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly leadingOffset: FootnoteFirstBaseline_LEADING_OFFSET;
  /**
   * The leading value of the text defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly leadingoffset: FootnoteFirstBaseline_LEADING_OFFSET;

  /**
   * The em box height of the text defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly EMBOX_HEIGHT: FootnoteFirstBaseline_EMBOX_HEIGHT;
  /**
   * The em box height of the text defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly emboxHeight: FootnoteFirstBaseline_EMBOX_HEIGHT;
  /**
   * The em box height of the text defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly emboxheight: FootnoteFirstBaseline_EMBOX_HEIGHT;

  /**
   * The tops of lower case letters without ascents, such as x, touch the top of the footnote container.
   */
  readonly X_HEIGHT: FootnoteFirstBaseline_X_HEIGHT;
  /**
   * The tops of lower case letters without ascents, such as x, touch the top of the footnote container.
   */
  readonly xHeight: FootnoteFirstBaseline_X_HEIGHT;
  /**
   * The tops of lower case letters without ascents, such as x, touch the top of the footnote container.
   */
  readonly xheight: FootnoteFirstBaseline_X_HEIGHT;

  /**
   * The footnote minimum first baseline offset value defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly FIXED_HEIGHT: FootnoteFirstBaseline_FIXED_HEIGHT;
  /**
   * The footnote minimum first baseline offset value defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly fixedHeight: FootnoteFirstBaseline_FIXED_HEIGHT;
  /**
   * The footnote minimum first baseline offset value defines the distance between the baseline of the text and the top of the footnote container.
   */
  readonly fixedheight: FootnoteFirstBaseline_FIXED_HEIGHT;

}
