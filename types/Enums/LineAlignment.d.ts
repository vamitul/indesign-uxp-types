/**
 * LineAlignment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LineAlignment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LineAlignment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LineAlignment>): boolean;

  /**
   * @internal **WARNING:** `__LineAlignment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LineAlignment]: never;
}


/**
 * Left aligns horizontal text or top aligns vertical text. 
 */
interface LineAlignment_LEFT_OR_TOP_LINE_ALIGN extends LineAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818324084;
}

/**
 * Center aligns the text. 
 */
interface LineAlignment_CENTER_LINE_ALIGN extends LineAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818321774;
}

/**
 * Right aligns horizontal text or bottom aligns vertical text.
 */
interface LineAlignment_RIGHT_OR_BOTTOM_LINE_ALIGN extends LineAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818325602;
}

/**
 * Justifies horizontal text on both the right and left and left aligns the last line or justifies vertical text on both the top and bottom and top aligns the last line.
 */
interface LineAlignment_LEFT_OR_TOP_LINE_JUSTIFY extends LineAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819047018;
}

/**
 * Justifies horizontal text on both the right and left and center aligns the last line or justifies vertical text on both the top and bottom and center aligns the last line.
 */
interface LineAlignment_CENTER_LINE_JUSTIFY extends LineAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818455658;
}

/**
 * Justifies horizontal text on both the right and left and right aligns the last line or justifies vertical text on both the top and bottom and bottom aligns the last line.
 */
interface LineAlignment_RIGHT_OR_BOTTOM_LINE_JUSTIFY extends LineAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819435626;
}

/**
 * Justifies horizontal text on both the right and left or justifies vertical text on both the top and bottom and gives all lines a uniform length.
 */
interface LineAlignment_FULL_LINE_JUSTIFY extends LineAlignment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818651754;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How a line of text is aligned or justified within its column.
 */
export declare namespace LineAlignment {
/**
 * Left aligns horizontal text or top aligns vertical text. 
 */
type LEFT_OR_TOP_LINE_ALIGN = LineAlignment_LEFT_OR_TOP_LINE_ALIGN;

/**
 * Center aligns the text. 
 */
type CENTER_LINE_ALIGN = LineAlignment_CENTER_LINE_ALIGN;

/**
 * Right aligns horizontal text or bottom aligns vertical text.
 */
type RIGHT_OR_BOTTOM_LINE_ALIGN = LineAlignment_RIGHT_OR_BOTTOM_LINE_ALIGN;

/**
 * Justifies horizontal text on both the right and left and left aligns the last line or justifies vertical text on both the top and bottom and top aligns the last line.
 */
type LEFT_OR_TOP_LINE_JUSTIFY = LineAlignment_LEFT_OR_TOP_LINE_JUSTIFY;

/**
 * Justifies horizontal text on both the right and left and center aligns the last line or justifies vertical text on both the top and bottom and center aligns the last line.
 */
type CENTER_LINE_JUSTIFY = LineAlignment_CENTER_LINE_JUSTIFY;

/**
 * Justifies horizontal text on both the right and left and right aligns the last line or justifies vertical text on both the top and bottom and bottom aligns the last line.
 */
type RIGHT_OR_BOTTOM_LINE_JUSTIFY = LineAlignment_RIGHT_OR_BOTTOM_LINE_JUSTIFY;

/**
 * Justifies horizontal text on both the right and left or justifies vertical text on both the top and bottom and gives all lines a uniform length.
 */
type FULL_LINE_JUSTIFY = LineAlignment_FULL_LINE_JUSTIFY;

}
/**
 * How a line of text is aligned or justified within its column.
 */
export declare const LineAlignment: typeof Enumeration & {

  /**
   * Left aligns horizontal text or top aligns vertical text. 
   */
  readonly LEFT_OR_TOP_LINE_ALIGN: LineAlignment_LEFT_OR_TOP_LINE_ALIGN;
  /**
   * Left aligns horizontal text or top aligns vertical text. 
   */
  readonly leftOrTopLineAlign: LineAlignment_LEFT_OR_TOP_LINE_ALIGN;
  /**
   * Left aligns horizontal text or top aligns vertical text. 
   */
  readonly leftortoplinealign: LineAlignment_LEFT_OR_TOP_LINE_ALIGN;

  /**
   * Center aligns the text. 
   */
  readonly CENTER_LINE_ALIGN: LineAlignment_CENTER_LINE_ALIGN;
  /**
   * Center aligns the text. 
   */
  readonly centerLineAlign: LineAlignment_CENTER_LINE_ALIGN;
  /**
   * Center aligns the text. 
   */
  readonly centerlinealign: LineAlignment_CENTER_LINE_ALIGN;

  /**
   * Right aligns horizontal text or bottom aligns vertical text.
   */
  readonly RIGHT_OR_BOTTOM_LINE_ALIGN: LineAlignment_RIGHT_OR_BOTTOM_LINE_ALIGN;
  /**
   * Right aligns horizontal text or bottom aligns vertical text.
   */
  readonly rightOrBottomLineAlign: LineAlignment_RIGHT_OR_BOTTOM_LINE_ALIGN;
  /**
   * Right aligns horizontal text or bottom aligns vertical text.
   */
  readonly rightorbottomlinealign: LineAlignment_RIGHT_OR_BOTTOM_LINE_ALIGN;

  /**
   * Justifies horizontal text on both the right and left and left aligns the last line or justifies vertical text on both the top and bottom and top aligns the last line.
   */
  readonly LEFT_OR_TOP_LINE_JUSTIFY: LineAlignment_LEFT_OR_TOP_LINE_JUSTIFY;
  /**
   * Justifies horizontal text on both the right and left and left aligns the last line or justifies vertical text on both the top and bottom and top aligns the last line.
   */
  readonly leftOrTopLineJustify: LineAlignment_LEFT_OR_TOP_LINE_JUSTIFY;
  /**
   * Justifies horizontal text on both the right and left and left aligns the last line or justifies vertical text on both the top and bottom and top aligns the last line.
   */
  readonly leftortoplinejustify: LineAlignment_LEFT_OR_TOP_LINE_JUSTIFY;

  /**
   * Justifies horizontal text on both the right and left and center aligns the last line or justifies vertical text on both the top and bottom and center aligns the last line.
   */
  readonly CENTER_LINE_JUSTIFY: LineAlignment_CENTER_LINE_JUSTIFY;
  /**
   * Justifies horizontal text on both the right and left and center aligns the last line or justifies vertical text on both the top and bottom and center aligns the last line.
   */
  readonly centerLineJustify: LineAlignment_CENTER_LINE_JUSTIFY;
  /**
   * Justifies horizontal text on both the right and left and center aligns the last line or justifies vertical text on both the top and bottom and center aligns the last line.
   */
  readonly centerlinejustify: LineAlignment_CENTER_LINE_JUSTIFY;

  /**
   * Justifies horizontal text on both the right and left and right aligns the last line or justifies vertical text on both the top and bottom and bottom aligns the last line.
   */
  readonly RIGHT_OR_BOTTOM_LINE_JUSTIFY: LineAlignment_RIGHT_OR_BOTTOM_LINE_JUSTIFY;
  /**
   * Justifies horizontal text on both the right and left and right aligns the last line or justifies vertical text on both the top and bottom and bottom aligns the last line.
   */
  readonly rightOrBottomLineJustify: LineAlignment_RIGHT_OR_BOTTOM_LINE_JUSTIFY;
  /**
   * Justifies horizontal text on both the right and left and right aligns the last line or justifies vertical text on both the top and bottom and bottom aligns the last line.
   */
  readonly rightorbottomlinejustify: LineAlignment_RIGHT_OR_BOTTOM_LINE_JUSTIFY;

  /**
   * Justifies horizontal text on both the right and left or justifies vertical text on both the top and bottom and gives all lines a uniform length.
   */
  readonly FULL_LINE_JUSTIFY: LineAlignment_FULL_LINE_JUSTIFY;
  /**
   * Justifies horizontal text on both the right and left or justifies vertical text on both the top and bottom and gives all lines a uniform length.
   */
  readonly fullLineJustify: LineAlignment_FULL_LINE_JUSTIFY;
  /**
   * Justifies horizontal text on both the right and left or justifies vertical text on both the top and bottom and gives all lines a uniform length.
   */
  readonly fulllinejustify: LineAlignment_FULL_LINE_JUSTIFY;

}
