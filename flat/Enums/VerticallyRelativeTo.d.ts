/**
 * VerticallyRelativeTo.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __VerticallyRelativeTo: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface VerticallyRelativeTo extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<VerticallyRelativeTo>): boolean;

  /**
   * @internal **WARNING:** `__VerticallyRelativeTo` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__VerticallyRelativeTo]: never;
}


/**
 * Align the anchored object to the edge of the text or table column.
 */
interface VerticallyRelativeTo_COLUMN_EDGE extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095787375;
}

/**
 * Align the anchored object to the edge of the text frame.
 */
interface VerticallyRelativeTo_TEXT_FRAME extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1954051174;
}

/**
 * Align the anchored object to the page margin.
 */
interface VerticallyRelativeTo_PAGE_MARGINS extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095789927;
}

/**
 * Align the anchored object to the edge of the page.
 */
interface VerticallyRelativeTo_PAGE_EDGE extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095790695;
}

/**
 * Align the anchored object to the baseline of the line of text.
 */
interface VerticallyRelativeTo_LINE_BASELINE extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096180321;
}

/**
 * Align the anchored object to the top of lower case letters with no ascent, such as x.
 */
interface VerticallyRelativeTo_LINE_XHEIGHT extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096185960;
}

/**
 * Align the anchored object to the top of the tallest letters in the text.
 */
interface VerticallyRelativeTo_LINE_ASCENT extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096180083;
}

/**
 * Align the anchored object to the top of capital letters.
 */
interface VerticallyRelativeTo_CAPHEIGHT extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096185955;
}

/**
 * Align the anchored object to the top of the text leading.
 */
interface VerticallyRelativeTo_TOP_OF_LEADING extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096180332;
}

/**
 * Align the anchored object to the top of the embox.
 */
interface VerticallyRelativeTo_EMBOX_TOP extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096181101;
}

/**
 * Align the anchored object to the middle of the embox.
 */
interface VerticallyRelativeTo_EMBOX_MIDDLE extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096183117;
}

/**
 * Align the anchored object to the bottom of the embox.
 */
interface VerticallyRelativeTo_EMBOX_BOTTOM extends VerticallyRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096183106;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The vertical alignment point of an anchored object.
 */
export declare namespace VerticallyRelativeTo {
/**
 * Align the anchored object to the edge of the text or table column.
 */
type COLUMN_EDGE = VerticallyRelativeTo_COLUMN_EDGE;

/**
 * Align the anchored object to the edge of the text frame.
 */
type TEXT_FRAME = VerticallyRelativeTo_TEXT_FRAME;

/**
 * Align the anchored object to the page margin.
 */
type PAGE_MARGINS = VerticallyRelativeTo_PAGE_MARGINS;

/**
 * Align the anchored object to the edge of the page.
 */
type PAGE_EDGE = VerticallyRelativeTo_PAGE_EDGE;

/**
 * Align the anchored object to the baseline of the line of text.
 */
type LINE_BASELINE = VerticallyRelativeTo_LINE_BASELINE;

/**
 * Align the anchored object to the top of lower case letters with no ascent, such as x.
 */
type LINE_XHEIGHT = VerticallyRelativeTo_LINE_XHEIGHT;

/**
 * Align the anchored object to the top of the tallest letters in the text.
 */
type LINE_ASCENT = VerticallyRelativeTo_LINE_ASCENT;

/**
 * Align the anchored object to the top of capital letters.
 */
type CAPHEIGHT = VerticallyRelativeTo_CAPHEIGHT;

/**
 * Align the anchored object to the top of the text leading.
 */
type TOP_OF_LEADING = VerticallyRelativeTo_TOP_OF_LEADING;

/**
 * Align the anchored object to the top of the embox.
 */
type EMBOX_TOP = VerticallyRelativeTo_EMBOX_TOP;

/**
 * Align the anchored object to the middle of the embox.
 */
type EMBOX_MIDDLE = VerticallyRelativeTo_EMBOX_MIDDLE;

/**
 * Align the anchored object to the bottom of the embox.
 */
type EMBOX_BOTTOM = VerticallyRelativeTo_EMBOX_BOTTOM;

}
/**
 * The vertical alignment point of an anchored object.
 */
export declare const VerticallyRelativeTo: typeof Enumeration & {

  /**
   * Align the anchored object to the edge of the text or table column.
   */
  readonly COLUMN_EDGE: VerticallyRelativeTo_COLUMN_EDGE;
  /**
   * Align the anchored object to the edge of the text or table column.
   */
  readonly columnEdge: VerticallyRelativeTo_COLUMN_EDGE;
  /**
   * Align the anchored object to the edge of the text or table column.
   */
  readonly columnedge: VerticallyRelativeTo_COLUMN_EDGE;

  /**
   * Align the anchored object to the edge of the text frame.
   */
  readonly TEXT_FRAME: VerticallyRelativeTo_TEXT_FRAME;
  /**
   * Align the anchored object to the edge of the text frame.
   */
  readonly textFrame: VerticallyRelativeTo_TEXT_FRAME;
  /**
   * Align the anchored object to the edge of the text frame.
   */
  readonly textframe: VerticallyRelativeTo_TEXT_FRAME;

  /**
   * Align the anchored object to the page margin.
   */
  readonly PAGE_MARGINS: VerticallyRelativeTo_PAGE_MARGINS;
  /**
   * Align the anchored object to the page margin.
   */
  readonly pageMargins: VerticallyRelativeTo_PAGE_MARGINS;
  /**
   * Align the anchored object to the page margin.
   */
  readonly pagemargins: VerticallyRelativeTo_PAGE_MARGINS;

  /**
   * Align the anchored object to the edge of the page.
   */
  readonly PAGE_EDGE: VerticallyRelativeTo_PAGE_EDGE;
  /**
   * Align the anchored object to the edge of the page.
   */
  readonly pageEdge: VerticallyRelativeTo_PAGE_EDGE;
  /**
   * Align the anchored object to the edge of the page.
   */
  readonly pageedge: VerticallyRelativeTo_PAGE_EDGE;

  /**
   * Align the anchored object to the baseline of the line of text.
   */
  readonly LINE_BASELINE: VerticallyRelativeTo_LINE_BASELINE;
  /**
   * Align the anchored object to the baseline of the line of text.
   */
  readonly lineBaseline: VerticallyRelativeTo_LINE_BASELINE;
  /**
   * Align the anchored object to the baseline of the line of text.
   */
  readonly linebaseline: VerticallyRelativeTo_LINE_BASELINE;

  /**
   * Align the anchored object to the top of lower case letters with no ascent, such as x.
   */
  readonly LINE_XHEIGHT: VerticallyRelativeTo_LINE_XHEIGHT;
  /**
   * Align the anchored object to the top of lower case letters with no ascent, such as x.
   */
  readonly lineXheight: VerticallyRelativeTo_LINE_XHEIGHT;
  /**
   * Align the anchored object to the top of lower case letters with no ascent, such as x.
   */
  readonly linexheight: VerticallyRelativeTo_LINE_XHEIGHT;

  /**
   * Align the anchored object to the top of the tallest letters in the text.
   */
  readonly LINE_ASCENT: VerticallyRelativeTo_LINE_ASCENT;
  /**
   * Align the anchored object to the top of the tallest letters in the text.
   */
  readonly lineAscent: VerticallyRelativeTo_LINE_ASCENT;
  /**
   * Align the anchored object to the top of the tallest letters in the text.
   */
  readonly lineascent: VerticallyRelativeTo_LINE_ASCENT;

  /**
   * Align the anchored object to the top of capital letters.
   */
  readonly CAPHEIGHT: VerticallyRelativeTo_CAPHEIGHT;
  /**
   * Align the anchored object to the top of capital letters.
   */
  readonly capheight: VerticallyRelativeTo_CAPHEIGHT;

  /**
   * Align the anchored object to the top of the text leading.
   */
  readonly TOP_OF_LEADING: VerticallyRelativeTo_TOP_OF_LEADING;
  /**
   * Align the anchored object to the top of the text leading.
   */
  readonly topOfLeading: VerticallyRelativeTo_TOP_OF_LEADING;
  /**
   * Align the anchored object to the top of the text leading.
   */
  readonly topofleading: VerticallyRelativeTo_TOP_OF_LEADING;

  /**
   * Align the anchored object to the top of the embox.
   */
  readonly EMBOX_TOP: VerticallyRelativeTo_EMBOX_TOP;
  /**
   * Align the anchored object to the top of the embox.
   */
  readonly emboxTop: VerticallyRelativeTo_EMBOX_TOP;
  /**
   * Align the anchored object to the top of the embox.
   */
  readonly emboxtop: VerticallyRelativeTo_EMBOX_TOP;

  /**
   * Align the anchored object to the middle of the embox.
   */
  readonly EMBOX_MIDDLE: VerticallyRelativeTo_EMBOX_MIDDLE;
  /**
   * Align the anchored object to the middle of the embox.
   */
  readonly emboxMiddle: VerticallyRelativeTo_EMBOX_MIDDLE;
  /**
   * Align the anchored object to the middle of the embox.
   */
  readonly emboxmiddle: VerticallyRelativeTo_EMBOX_MIDDLE;

  /**
   * Align the anchored object to the bottom of the embox.
   */
  readonly EMBOX_BOTTOM: VerticallyRelativeTo_EMBOX_BOTTOM;
  /**
   * Align the anchored object to the bottom of the embox.
   */
  readonly emboxBottom: VerticallyRelativeTo_EMBOX_BOTTOM;
  /**
   * Align the anchored object to the bottom of the embox.
   */
  readonly emboxbottom: VerticallyRelativeTo_EMBOX_BOTTOM;

}
