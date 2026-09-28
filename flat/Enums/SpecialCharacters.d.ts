/**
 * SpecialCharacters.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { TextFrameContents } from "./TextFrameContents";



declare const __SpecialCharacters: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SpecialCharacters extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SpecialCharacters, TextFrameContents>): boolean;

  /**
   * @internal **WARNING:** `__SpecialCharacters` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SpecialCharacters]: never;
}


/**
 * Inserts an automatic page number.
 */
interface SpecialCharacters_AUTO_PAGE_NUMBER extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396797550;
}

/**
 * Inserts the next page number.
 */
interface SpecialCharacters_NEXT_PAGE_NUMBER extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397649518;
}

/**
 * Inserts the previous page number.
 */
interface SpecialCharacters_PREVIOUS_PAGE_NUMBER extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397780590;
}

/**
 * Inserts a section marker.
 */
interface SpecialCharacters_SECTION_MARKER extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1400073805;
}

/**
 * Inserts a bullet character.
 */
interface SpecialCharacters_BULLET_CHARACTER extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396862068;
}

/**
 * Inserts a copyright symbol.
 */
interface SpecialCharacters_COPYRIGHT_SYMBOL extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396929140;
}

/**
 * Inserts a degree symbol.
 */
interface SpecialCharacters_DEGREE_SYMBOL extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396991858;
}

/**
 * Inserts an ellipsis character.
 */
interface SpecialCharacters_ELLIPSIS_CHARACTER extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397518451;
}

/**
 * Inserts a forced line break.
 */
interface SpecialCharacters_FORCED_LINE_BREAK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397124194;
}

/**
 * Inserts a paragraph symbol.
 */
interface SpecialCharacters_PARAGRAPH_SYMBOL extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397776754;
}

/**
 * Inserts a registered trademark.
 */
interface SpecialCharacters_REGISTERED_TRADEMARK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397904493;
}

/**
 * Inserts a section symbol.
 */
interface SpecialCharacters_SECTION_SYMBOL extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1400073811;
}

/**
 * Inserts a trademark symbol.
 */
interface SpecialCharacters_TRADEMARK_SYMBOL extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1398041963;
}

/**
 * Inserts a right indent tab.
 */
interface SpecialCharacters_RIGHT_INDENT_TAB extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397909876;
}

/**
 * Inserts an indent to here character.
 */
interface SpecialCharacters_INDENT_HERE_TAB extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397319796;
}

/**
 * Inserts an em dash.
 */
interface SpecialCharacters_EM_DASH extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397058884;
}

/**
 * Inserts an en dash.
 */
interface SpecialCharacters_EN_DASH extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397059140;
}

/**
 * Inserts a discretionary hyphen.
 */
interface SpecialCharacters_DISCRETIONARY_HYPHEN extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396983920;
}

/**
 * Inserts a nonbreaking hyphen.
 */
interface SpecialCharacters_NONBREAKING_HYPHEN extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397645928;
}

/**
 * Inserts an end nested style here character.
 */
interface SpecialCharacters_END_NESTED_STYLE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396855379;
}

/**
 * Inserts a double left quote.
 */
interface SpecialCharacters_DOUBLE_LEFT_QUOTE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396984945;
}

/**
 * Inserts a double right quote.
 */
interface SpecialCharacters_DOUBLE_RIGHT_QUOTE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396986481;
}

/**
 * Inserts a single left quote.
 */
interface SpecialCharacters_SINGLE_LEFT_QUOTE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397967985;
}

/**
 * Inserts a single right quote.
 */
interface SpecialCharacters_SINGLE_RIGHT_QUOTE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397969521;
}

/**
 * Inserts an em space.
 */
interface SpecialCharacters_EM_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397058899;
}

/**
 * Inserts an en space.
 */
interface SpecialCharacters_EN_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397059155;
}

/**
 * Inserts a flush space.
 */
interface SpecialCharacters_FLUSH_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397124179;
}

/**
 * Inserts a hair space.
 */
interface SpecialCharacters_HAIR_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397256787;
}

/**
 * Inserts a nonbreaking space.
 */
interface SpecialCharacters_NONBREAKING_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397645907;
}

/**
 * Inserts a thin space.
 */
interface SpecialCharacters_THIN_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1398042195;
}

/**
 * Inserts a figure space.
 */
interface SpecialCharacters_FIGURE_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397122899;
}

/**
 * Inserts a punctuation space.
 */
interface SpecialCharacters_PUNCTUATION_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397780051;
}

/**
 * Inserts a column break.
 */
interface SpecialCharacters_COLUMN_BREAK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396927554;
}

/**
 * Inserts a frame break.
 */
interface SpecialCharacters_FRAME_BREAK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397125698;
}

/**
 * Inserts a page break.
 */
interface SpecialCharacters_PAGE_BREAK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397778242;
}

/**
 * Inserts a break to the next odd page.
 */
interface SpecialCharacters_ODD_PAGE_BREAK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397715010;
}

/**
 * Inserts a break to the next even page.
 */
interface SpecialCharacters_EVEN_PAGE_BREAK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397059650;
}

/**
 * Inserts a footnote symbol.
 */
interface SpecialCharacters_FOOTNOTE_SYMBOL extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399221837;
}

/**
 * Inserts a left to right embedding mark.
 */
interface SpecialCharacters_LEFT_TO_RIGHT_EMBEDDING extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399616101;
}

/**
 * Inserts a right to left embedding mark.
 */
interface SpecialCharacters_RIGHT_TO_LEFT_EMBEDDING extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1400007781;
}

/**
 * Inserts a pop directional formatting mark.
 */
interface SpecialCharacters_POP_DIRECTIONAL_FORMATTING extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399874662;
}

/**
 * Inserts a left to right override mark.
 */
interface SpecialCharacters_LEFT_TO_RIGHT_OVERRIDE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399616111;
}

/**
 * Inserts a right to left override mark.
 */
interface SpecialCharacters_RIGHT_TO_LEFT_OVERRIDE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1400007791;
}

/**
 * Inserts a dotted circle.
 */
interface SpecialCharacters_DOTTED_CIRCLE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399092323;
}

/**
 * Inserts a zero width joiner.
 */
interface SpecialCharacters_ZERO_WIDTH_JOINER extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1400534890;
}

/**
 * Inserts the specified text variable.
 */
interface SpecialCharacters_TEXT_VARIABLE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397781622;
}

/**
 * Inserts a single straight quote.
 */
interface SpecialCharacters_SINGLE_STRAIGHT_QUOTE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397969777;
}

/**
 * Inserts a double straight quote.
 */
interface SpecialCharacters_DOUBLE_STRAIGHT_QUOTE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396986737;
}

/**
 * Inserts a discretionary line break.
 */
interface SpecialCharacters_DISCRETIONARY_LINE_BREAK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397777484;
}

/**
 * Inserts a zero-width non-joiner.
 */
interface SpecialCharacters_ZERO_WIDTH_NONJOINER extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397780074;
}

/**
 * Inserts a third-width space.
 */
interface SpecialCharacters_THIRD_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1398040659;
}

/**
 * Inserts a quarter-width space.
 */
interface SpecialCharacters_QUARTER_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397847379;
}

/**
 * Inserts a sixth-width space.
 */
interface SpecialCharacters_SIXTH_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397975379;
}

/**
 * Inserts a fixed-width nonbreaking space.
 */
interface SpecialCharacters_FIXED_WIDTH_NONBREAKING_SPACE extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399746146;
}

/**
 * Inserts a hebrew maqaf.
 */
interface SpecialCharacters_HEBREW_MAQAF extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397252717;
}

/**
 * Inserts a hebrew geresh.
 */
interface SpecialCharacters_HEBREW_GERESH extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397253989;
}

/**
 * Inserts a hebrew gershayim.
 */
interface SpecialCharacters_HEBREW_GERSHAYIM extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397254003;
}

/**
 * Inserts an arabic kashida.
 */
interface SpecialCharacters_ARABIC_KASHIDA extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396798059;
}

/**
 * Inserts an arabic comma.
 */
interface SpecialCharacters_ARABIC_COMMA extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396798051;
}

/**
 * Inserts an arabic semicolon.
 */
interface SpecialCharacters_ARABIC_SEMICOLON extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396798307;
}

/**
 * Inserts an arabic question mark.
 */
interface SpecialCharacters_ARABIC_QUESTION_MARK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396797805;
}

/**
 * Inserts a left to right mark.
 */
interface SpecialCharacters_LEFT_TO_RIGHT_MARK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399616109;
}

/**
 * Inserts a right to left mark.
 */
interface SpecialCharacters_RIGHT_TO_LEFT_MARK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1400007789;
}

/**
 * Inserts a hebrew sof pasuk.
 */
interface SpecialCharacters_HEBREW_SOF_PASUK extends SpecialCharacters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397252723;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which special character, break, or space to insert at the cursor — a symbol, page or section
 * marker, a break, a space, or a directional mark.
 */
export declare namespace SpecialCharacters {
/**
 * Inserts an automatic page number.
 */
type AUTO_PAGE_NUMBER = SpecialCharacters_AUTO_PAGE_NUMBER;

/**
 * Inserts the next page number.
 */
type NEXT_PAGE_NUMBER = SpecialCharacters_NEXT_PAGE_NUMBER;

/**
 * Inserts the previous page number.
 */
type PREVIOUS_PAGE_NUMBER = SpecialCharacters_PREVIOUS_PAGE_NUMBER;

/**
 * Inserts a section marker.
 */
type SECTION_MARKER = SpecialCharacters_SECTION_MARKER;

/**
 * Inserts a bullet character.
 */
type BULLET_CHARACTER = SpecialCharacters_BULLET_CHARACTER;

/**
 * Inserts a copyright symbol.
 */
type COPYRIGHT_SYMBOL = SpecialCharacters_COPYRIGHT_SYMBOL;

/**
 * Inserts a degree symbol.
 */
type DEGREE_SYMBOL = SpecialCharacters_DEGREE_SYMBOL;

/**
 * Inserts an ellipsis character.
 */
type ELLIPSIS_CHARACTER = SpecialCharacters_ELLIPSIS_CHARACTER;

/**
 * Inserts a forced line break.
 */
type FORCED_LINE_BREAK = SpecialCharacters_FORCED_LINE_BREAK;

/**
 * Inserts a paragraph symbol.
 */
type PARAGRAPH_SYMBOL = SpecialCharacters_PARAGRAPH_SYMBOL;

/**
 * Inserts a registered trademark.
 */
type REGISTERED_TRADEMARK = SpecialCharacters_REGISTERED_TRADEMARK;

/**
 * Inserts a section symbol.
 */
type SECTION_SYMBOL = SpecialCharacters_SECTION_SYMBOL;

/**
 * Inserts a trademark symbol.
 */
type TRADEMARK_SYMBOL = SpecialCharacters_TRADEMARK_SYMBOL;

/**
 * Inserts a right indent tab.
 */
type RIGHT_INDENT_TAB = SpecialCharacters_RIGHT_INDENT_TAB;

/**
 * Inserts an indent to here character.
 */
type INDENT_HERE_TAB = SpecialCharacters_INDENT_HERE_TAB;

/**
 * Inserts an em dash.
 */
type EM_DASH = SpecialCharacters_EM_DASH;

/**
 * Inserts an en dash.
 */
type EN_DASH = SpecialCharacters_EN_DASH;

/**
 * Inserts a discretionary hyphen.
 */
type DISCRETIONARY_HYPHEN = SpecialCharacters_DISCRETIONARY_HYPHEN;

/**
 * Inserts a nonbreaking hyphen.
 */
type NONBREAKING_HYPHEN = SpecialCharacters_NONBREAKING_HYPHEN;

/**
 * Inserts an end nested style here character.
 */
type END_NESTED_STYLE = SpecialCharacters_END_NESTED_STYLE;

/**
 * Inserts a double left quote.
 */
type DOUBLE_LEFT_QUOTE = SpecialCharacters_DOUBLE_LEFT_QUOTE;

/**
 * Inserts a double right quote.
 */
type DOUBLE_RIGHT_QUOTE = SpecialCharacters_DOUBLE_RIGHT_QUOTE;

/**
 * Inserts a single left quote.
 */
type SINGLE_LEFT_QUOTE = SpecialCharacters_SINGLE_LEFT_QUOTE;

/**
 * Inserts a single right quote.
 */
type SINGLE_RIGHT_QUOTE = SpecialCharacters_SINGLE_RIGHT_QUOTE;

/**
 * Inserts an em space.
 */
type EM_SPACE = SpecialCharacters_EM_SPACE;

/**
 * Inserts an en space.
 */
type EN_SPACE = SpecialCharacters_EN_SPACE;

/**
 * Inserts a flush space.
 */
type FLUSH_SPACE = SpecialCharacters_FLUSH_SPACE;

/**
 * Inserts a hair space.
 */
type HAIR_SPACE = SpecialCharacters_HAIR_SPACE;

/**
 * Inserts a nonbreaking space.
 */
type NONBREAKING_SPACE = SpecialCharacters_NONBREAKING_SPACE;

/**
 * Inserts a thin space.
 */
type THIN_SPACE = SpecialCharacters_THIN_SPACE;

/**
 * Inserts a figure space.
 */
type FIGURE_SPACE = SpecialCharacters_FIGURE_SPACE;

/**
 * Inserts a punctuation space.
 */
type PUNCTUATION_SPACE = SpecialCharacters_PUNCTUATION_SPACE;

/**
 * Inserts a column break.
 */
type COLUMN_BREAK = SpecialCharacters_COLUMN_BREAK;

/**
 * Inserts a frame break.
 */
type FRAME_BREAK = SpecialCharacters_FRAME_BREAK;

/**
 * Inserts a page break.
 */
type PAGE_BREAK = SpecialCharacters_PAGE_BREAK;

/**
 * Inserts a break to the next odd page.
 */
type ODD_PAGE_BREAK = SpecialCharacters_ODD_PAGE_BREAK;

/**
 * Inserts a break to the next even page.
 */
type EVEN_PAGE_BREAK = SpecialCharacters_EVEN_PAGE_BREAK;

/**
 * Inserts a footnote symbol.
 */
type FOOTNOTE_SYMBOL = SpecialCharacters_FOOTNOTE_SYMBOL;

/**
 * Inserts a left to right embedding mark.
 */
type LEFT_TO_RIGHT_EMBEDDING = SpecialCharacters_LEFT_TO_RIGHT_EMBEDDING;

/**
 * Inserts a right to left embedding mark.
 */
type RIGHT_TO_LEFT_EMBEDDING = SpecialCharacters_RIGHT_TO_LEFT_EMBEDDING;

/**
 * Inserts a pop directional formatting mark.
 */
type POP_DIRECTIONAL_FORMATTING = SpecialCharacters_POP_DIRECTIONAL_FORMATTING;

/**
 * Inserts a left to right override mark.
 */
type LEFT_TO_RIGHT_OVERRIDE = SpecialCharacters_LEFT_TO_RIGHT_OVERRIDE;

/**
 * Inserts a right to left override mark.
 */
type RIGHT_TO_LEFT_OVERRIDE = SpecialCharacters_RIGHT_TO_LEFT_OVERRIDE;

/**
 * Inserts a dotted circle.
 */
type DOTTED_CIRCLE = SpecialCharacters_DOTTED_CIRCLE;

/**
 * Inserts a zero width joiner.
 */
type ZERO_WIDTH_JOINER = SpecialCharacters_ZERO_WIDTH_JOINER;

/**
 * Inserts the specified text variable.
 */
type TEXT_VARIABLE = SpecialCharacters_TEXT_VARIABLE;

/**
 * Inserts a single straight quote.
 */
type SINGLE_STRAIGHT_QUOTE = SpecialCharacters_SINGLE_STRAIGHT_QUOTE;

/**
 * Inserts a double straight quote.
 */
type DOUBLE_STRAIGHT_QUOTE = SpecialCharacters_DOUBLE_STRAIGHT_QUOTE;

/**
 * Inserts a discretionary line break.
 */
type DISCRETIONARY_LINE_BREAK = SpecialCharacters_DISCRETIONARY_LINE_BREAK;

/**
 * Inserts a zero-width non-joiner.
 */
type ZERO_WIDTH_NONJOINER = SpecialCharacters_ZERO_WIDTH_NONJOINER;

/**
 * Inserts a third-width space.
 */
type THIRD_SPACE = SpecialCharacters_THIRD_SPACE;

/**
 * Inserts a quarter-width space.
 */
type QUARTER_SPACE = SpecialCharacters_QUARTER_SPACE;

/**
 * Inserts a sixth-width space.
 */
type SIXTH_SPACE = SpecialCharacters_SIXTH_SPACE;

/**
 * Inserts a fixed-width nonbreaking space.
 */
type FIXED_WIDTH_NONBREAKING_SPACE = SpecialCharacters_FIXED_WIDTH_NONBREAKING_SPACE;

/**
 * Inserts a hebrew maqaf.
 */
type HEBREW_MAQAF = SpecialCharacters_HEBREW_MAQAF;

/**
 * Inserts a hebrew geresh.
 */
type HEBREW_GERESH = SpecialCharacters_HEBREW_GERESH;

/**
 * Inserts a hebrew gershayim.
 */
type HEBREW_GERSHAYIM = SpecialCharacters_HEBREW_GERSHAYIM;

/**
 * Inserts an arabic kashida.
 */
type ARABIC_KASHIDA = SpecialCharacters_ARABIC_KASHIDA;

/**
 * Inserts an arabic comma.
 */
type ARABIC_COMMA = SpecialCharacters_ARABIC_COMMA;

/**
 * Inserts an arabic semicolon.
 */
type ARABIC_SEMICOLON = SpecialCharacters_ARABIC_SEMICOLON;

/**
 * Inserts an arabic question mark.
 */
type ARABIC_QUESTION_MARK = SpecialCharacters_ARABIC_QUESTION_MARK;

/**
 * Inserts a left to right mark.
 */
type LEFT_TO_RIGHT_MARK = SpecialCharacters_LEFT_TO_RIGHT_MARK;

/**
 * Inserts a right to left mark.
 */
type RIGHT_TO_LEFT_MARK = SpecialCharacters_RIGHT_TO_LEFT_MARK;

/**
 * Inserts a hebrew sof pasuk.
 */
type HEBREW_SOF_PASUK = SpecialCharacters_HEBREW_SOF_PASUK;

}
/**
 * Which special character, break, or space to insert at the cursor — a symbol, page or section
 * marker, a break, a space, or a directional mark.
 */
export declare const SpecialCharacters: typeof Enumeration & {

  /**
   * Inserts an automatic page number.
   */
  readonly AUTO_PAGE_NUMBER: SpecialCharacters_AUTO_PAGE_NUMBER;
  /**
   * Inserts an automatic page number.
   */
  readonly autoPageNumber: SpecialCharacters_AUTO_PAGE_NUMBER;
  /**
   * Inserts an automatic page number.
   */
  readonly autopagenumber: SpecialCharacters_AUTO_PAGE_NUMBER;

  /**
   * Inserts the next page number.
   */
  readonly NEXT_PAGE_NUMBER: SpecialCharacters_NEXT_PAGE_NUMBER;
  /**
   * Inserts the next page number.
   */
  readonly nextPageNumber: SpecialCharacters_NEXT_PAGE_NUMBER;
  /**
   * Inserts the next page number.
   */
  readonly nextpagenumber: SpecialCharacters_NEXT_PAGE_NUMBER;

  /**
   * Inserts the previous page number.
   */
  readonly PREVIOUS_PAGE_NUMBER: SpecialCharacters_PREVIOUS_PAGE_NUMBER;
  /**
   * Inserts the previous page number.
   */
  readonly previousPageNumber: SpecialCharacters_PREVIOUS_PAGE_NUMBER;
  /**
   * Inserts the previous page number.
   */
  readonly previouspagenumber: SpecialCharacters_PREVIOUS_PAGE_NUMBER;

  /**
   * Inserts a section marker.
   */
  readonly SECTION_MARKER: SpecialCharacters_SECTION_MARKER;
  /**
   * Inserts a section marker.
   */
  readonly sectionMarker: SpecialCharacters_SECTION_MARKER;
  /**
   * Inserts a section marker.
   */
  readonly sectionmarker: SpecialCharacters_SECTION_MARKER;

  /**
   * Inserts a bullet character.
   */
  readonly BULLET_CHARACTER: SpecialCharacters_BULLET_CHARACTER;
  /**
   * Inserts a bullet character.
   */
  readonly bulletCharacter: SpecialCharacters_BULLET_CHARACTER;
  /**
   * Inserts a bullet character.
   */
  readonly bulletcharacter: SpecialCharacters_BULLET_CHARACTER;

  /**
   * Inserts a copyright symbol.
   */
  readonly COPYRIGHT_SYMBOL: SpecialCharacters_COPYRIGHT_SYMBOL;
  /**
   * Inserts a copyright symbol.
   */
  readonly copyrightSymbol: SpecialCharacters_COPYRIGHT_SYMBOL;
  /**
   * Inserts a copyright symbol.
   */
  readonly copyrightsymbol: SpecialCharacters_COPYRIGHT_SYMBOL;

  /**
   * Inserts a degree symbol.
   */
  readonly DEGREE_SYMBOL: SpecialCharacters_DEGREE_SYMBOL;
  /**
   * Inserts a degree symbol.
   */
  readonly degreeSymbol: SpecialCharacters_DEGREE_SYMBOL;
  /**
   * Inserts a degree symbol.
   */
  readonly degreesymbol: SpecialCharacters_DEGREE_SYMBOL;

  /**
   * Inserts an ellipsis character.
   */
  readonly ELLIPSIS_CHARACTER: SpecialCharacters_ELLIPSIS_CHARACTER;
  /**
   * Inserts an ellipsis character.
   */
  readonly ellipsisCharacter: SpecialCharacters_ELLIPSIS_CHARACTER;
  /**
   * Inserts an ellipsis character.
   */
  readonly ellipsischaracter: SpecialCharacters_ELLIPSIS_CHARACTER;

  /**
   * Inserts a forced line break.
   */
  readonly FORCED_LINE_BREAK: SpecialCharacters_FORCED_LINE_BREAK;
  /**
   * Inserts a forced line break.
   */
  readonly forcedLineBreak: SpecialCharacters_FORCED_LINE_BREAK;
  /**
   * Inserts a forced line break.
   */
  readonly forcedlinebreak: SpecialCharacters_FORCED_LINE_BREAK;

  /**
   * Inserts a paragraph symbol.
   */
  readonly PARAGRAPH_SYMBOL: SpecialCharacters_PARAGRAPH_SYMBOL;
  /**
   * Inserts a paragraph symbol.
   */
  readonly paragraphSymbol: SpecialCharacters_PARAGRAPH_SYMBOL;
  /**
   * Inserts a paragraph symbol.
   */
  readonly paragraphsymbol: SpecialCharacters_PARAGRAPH_SYMBOL;

  /**
   * Inserts a registered trademark.
   */
  readonly REGISTERED_TRADEMARK: SpecialCharacters_REGISTERED_TRADEMARK;
  /**
   * Inserts a registered trademark.
   */
  readonly registeredTrademark: SpecialCharacters_REGISTERED_TRADEMARK;
  /**
   * Inserts a registered trademark.
   */
  readonly registeredtrademark: SpecialCharacters_REGISTERED_TRADEMARK;

  /**
   * Inserts a section symbol.
   */
  readonly SECTION_SYMBOL: SpecialCharacters_SECTION_SYMBOL;
  /**
   * Inserts a section symbol.
   */
  readonly sectionSymbol: SpecialCharacters_SECTION_SYMBOL;
  /**
   * Inserts a section symbol.
   */
  readonly sectionsymbol: SpecialCharacters_SECTION_SYMBOL;

  /**
   * Inserts a trademark symbol.
   */
  readonly TRADEMARK_SYMBOL: SpecialCharacters_TRADEMARK_SYMBOL;
  /**
   * Inserts a trademark symbol.
   */
  readonly trademarkSymbol: SpecialCharacters_TRADEMARK_SYMBOL;
  /**
   * Inserts a trademark symbol.
   */
  readonly trademarksymbol: SpecialCharacters_TRADEMARK_SYMBOL;

  /**
   * Inserts a right indent tab.
   */
  readonly RIGHT_INDENT_TAB: SpecialCharacters_RIGHT_INDENT_TAB;
  /**
   * Inserts a right indent tab.
   */
  readonly rightIndentTab: SpecialCharacters_RIGHT_INDENT_TAB;
  /**
   * Inserts a right indent tab.
   */
  readonly rightindenttab: SpecialCharacters_RIGHT_INDENT_TAB;

  /**
   * Inserts an indent to here character.
   */
  readonly INDENT_HERE_TAB: SpecialCharacters_INDENT_HERE_TAB;
  /**
   * Inserts an indent to here character.
   */
  readonly indentHereTab: SpecialCharacters_INDENT_HERE_TAB;
  /**
   * Inserts an indent to here character.
   */
  readonly indentheretab: SpecialCharacters_INDENT_HERE_TAB;

  /**
   * Inserts an em dash.
   */
  readonly EM_DASH: SpecialCharacters_EM_DASH;
  /**
   * Inserts an em dash.
   */
  readonly emDash: SpecialCharacters_EM_DASH;
  /**
   * Inserts an em dash.
   */
  readonly emdash: SpecialCharacters_EM_DASH;

  /**
   * Inserts an en dash.
   */
  readonly EN_DASH: SpecialCharacters_EN_DASH;
  /**
   * Inserts an en dash.
   */
  readonly enDash: SpecialCharacters_EN_DASH;
  /**
   * Inserts an en dash.
   */
  readonly endash: SpecialCharacters_EN_DASH;

  /**
   * Inserts a discretionary hyphen.
   */
  readonly DISCRETIONARY_HYPHEN: SpecialCharacters_DISCRETIONARY_HYPHEN;
  /**
   * Inserts a discretionary hyphen.
   */
  readonly discretionaryHyphen: SpecialCharacters_DISCRETIONARY_HYPHEN;
  /**
   * Inserts a discretionary hyphen.
   */
  readonly discretionaryhyphen: SpecialCharacters_DISCRETIONARY_HYPHEN;

  /**
   * Inserts a nonbreaking hyphen.
   */
  readonly NONBREAKING_HYPHEN: SpecialCharacters_NONBREAKING_HYPHEN;
  /**
   * Inserts a nonbreaking hyphen.
   */
  readonly nonbreakingHyphen: SpecialCharacters_NONBREAKING_HYPHEN;
  /**
   * Inserts a nonbreaking hyphen.
   */
  readonly nonbreakinghyphen: SpecialCharacters_NONBREAKING_HYPHEN;

  /**
   * Inserts an end nested style here character.
   */
  readonly END_NESTED_STYLE: SpecialCharacters_END_NESTED_STYLE;
  /**
   * Inserts an end nested style here character.
   */
  readonly endNestedStyle: SpecialCharacters_END_NESTED_STYLE;
  /**
   * Inserts an end nested style here character.
   */
  readonly endnestedstyle: SpecialCharacters_END_NESTED_STYLE;

  /**
   * Inserts a double left quote.
   */
  readonly DOUBLE_LEFT_QUOTE: SpecialCharacters_DOUBLE_LEFT_QUOTE;
  /**
   * Inserts a double left quote.
   */
  readonly doubleLeftQuote: SpecialCharacters_DOUBLE_LEFT_QUOTE;
  /**
   * Inserts a double left quote.
   */
  readonly doubleleftquote: SpecialCharacters_DOUBLE_LEFT_QUOTE;

  /**
   * Inserts a double right quote.
   */
  readonly DOUBLE_RIGHT_QUOTE: SpecialCharacters_DOUBLE_RIGHT_QUOTE;
  /**
   * Inserts a double right quote.
   */
  readonly doubleRightQuote: SpecialCharacters_DOUBLE_RIGHT_QUOTE;
  /**
   * Inserts a double right quote.
   */
  readonly doublerightquote: SpecialCharacters_DOUBLE_RIGHT_QUOTE;

  /**
   * Inserts a single left quote.
   */
  readonly SINGLE_LEFT_QUOTE: SpecialCharacters_SINGLE_LEFT_QUOTE;
  /**
   * Inserts a single left quote.
   */
  readonly singleLeftQuote: SpecialCharacters_SINGLE_LEFT_QUOTE;
  /**
   * Inserts a single left quote.
   */
  readonly singleleftquote: SpecialCharacters_SINGLE_LEFT_QUOTE;

  /**
   * Inserts a single right quote.
   */
  readonly SINGLE_RIGHT_QUOTE: SpecialCharacters_SINGLE_RIGHT_QUOTE;
  /**
   * Inserts a single right quote.
   */
  readonly singleRightQuote: SpecialCharacters_SINGLE_RIGHT_QUOTE;
  /**
   * Inserts a single right quote.
   */
  readonly singlerightquote: SpecialCharacters_SINGLE_RIGHT_QUOTE;

  /**
   * Inserts an em space.
   */
  readonly EM_SPACE: SpecialCharacters_EM_SPACE;
  /**
   * Inserts an em space.
   */
  readonly emSpace: SpecialCharacters_EM_SPACE;
  /**
   * Inserts an em space.
   */
  readonly emspace: SpecialCharacters_EM_SPACE;

  /**
   * Inserts an en space.
   */
  readonly EN_SPACE: SpecialCharacters_EN_SPACE;
  /**
   * Inserts an en space.
   */
  readonly enSpace: SpecialCharacters_EN_SPACE;
  /**
   * Inserts an en space.
   */
  readonly enspace: SpecialCharacters_EN_SPACE;

  /**
   * Inserts a flush space.
   */
  readonly FLUSH_SPACE: SpecialCharacters_FLUSH_SPACE;
  /**
   * Inserts a flush space.
   */
  readonly flushSpace: SpecialCharacters_FLUSH_SPACE;
  /**
   * Inserts a flush space.
   */
  readonly flushspace: SpecialCharacters_FLUSH_SPACE;

  /**
   * Inserts a hair space.
   */
  readonly HAIR_SPACE: SpecialCharacters_HAIR_SPACE;
  /**
   * Inserts a hair space.
   */
  readonly hairSpace: SpecialCharacters_HAIR_SPACE;
  /**
   * Inserts a hair space.
   */
  readonly hairspace: SpecialCharacters_HAIR_SPACE;

  /**
   * Inserts a nonbreaking space.
   */
  readonly NONBREAKING_SPACE: SpecialCharacters_NONBREAKING_SPACE;
  /**
   * Inserts a nonbreaking space.
   */
  readonly nonbreakingSpace: SpecialCharacters_NONBREAKING_SPACE;
  /**
   * Inserts a nonbreaking space.
   */
  readonly nonbreakingspace: SpecialCharacters_NONBREAKING_SPACE;

  /**
   * Inserts a thin space.
   */
  readonly THIN_SPACE: SpecialCharacters_THIN_SPACE;
  /**
   * Inserts a thin space.
   */
  readonly thinSpace: SpecialCharacters_THIN_SPACE;
  /**
   * Inserts a thin space.
   */
  readonly thinspace: SpecialCharacters_THIN_SPACE;

  /**
   * Inserts a figure space.
   */
  readonly FIGURE_SPACE: SpecialCharacters_FIGURE_SPACE;
  /**
   * Inserts a figure space.
   */
  readonly figureSpace: SpecialCharacters_FIGURE_SPACE;
  /**
   * Inserts a figure space.
   */
  readonly figurespace: SpecialCharacters_FIGURE_SPACE;

  /**
   * Inserts a punctuation space.
   */
  readonly PUNCTUATION_SPACE: SpecialCharacters_PUNCTUATION_SPACE;
  /**
   * Inserts a punctuation space.
   */
  readonly punctuationSpace: SpecialCharacters_PUNCTUATION_SPACE;
  /**
   * Inserts a punctuation space.
   */
  readonly punctuationspace: SpecialCharacters_PUNCTUATION_SPACE;

  /**
   * Inserts a column break.
   */
  readonly COLUMN_BREAK: SpecialCharacters_COLUMN_BREAK;
  /**
   * Inserts a column break.
   */
  readonly columnBreak: SpecialCharacters_COLUMN_BREAK;
  /**
   * Inserts a column break.
   */
  readonly columnbreak: SpecialCharacters_COLUMN_BREAK;

  /**
   * Inserts a frame break.
   */
  readonly FRAME_BREAK: SpecialCharacters_FRAME_BREAK;
  /**
   * Inserts a frame break.
   */
  readonly frameBreak: SpecialCharacters_FRAME_BREAK;
  /**
   * Inserts a frame break.
   */
  readonly framebreak: SpecialCharacters_FRAME_BREAK;

  /**
   * Inserts a page break.
   */
  readonly PAGE_BREAK: SpecialCharacters_PAGE_BREAK;
  /**
   * Inserts a page break.
   */
  readonly pageBreak: SpecialCharacters_PAGE_BREAK;
  /**
   * Inserts a page break.
   */
  readonly pagebreak: SpecialCharacters_PAGE_BREAK;

  /**
   * Inserts a break to the next odd page.
   */
  readonly ODD_PAGE_BREAK: SpecialCharacters_ODD_PAGE_BREAK;
  /**
   * Inserts a break to the next odd page.
   */
  readonly oddPageBreak: SpecialCharacters_ODD_PAGE_BREAK;
  /**
   * Inserts a break to the next odd page.
   */
  readonly oddpagebreak: SpecialCharacters_ODD_PAGE_BREAK;

  /**
   * Inserts a break to the next even page.
   */
  readonly EVEN_PAGE_BREAK: SpecialCharacters_EVEN_PAGE_BREAK;
  /**
   * Inserts a break to the next even page.
   */
  readonly evenPageBreak: SpecialCharacters_EVEN_PAGE_BREAK;
  /**
   * Inserts a break to the next even page.
   */
  readonly evenpagebreak: SpecialCharacters_EVEN_PAGE_BREAK;

  /**
   * Inserts a footnote symbol.
   */
  readonly FOOTNOTE_SYMBOL: SpecialCharacters_FOOTNOTE_SYMBOL;
  /**
   * Inserts a footnote symbol.
   */
  readonly footnoteSymbol: SpecialCharacters_FOOTNOTE_SYMBOL;
  /**
   * Inserts a footnote symbol.
   */
  readonly footnotesymbol: SpecialCharacters_FOOTNOTE_SYMBOL;

  /**
   * Inserts a left to right embedding mark.
   */
  readonly LEFT_TO_RIGHT_EMBEDDING: SpecialCharacters_LEFT_TO_RIGHT_EMBEDDING;
  /**
   * Inserts a left to right embedding mark.
   */
  readonly leftToRightEmbedding: SpecialCharacters_LEFT_TO_RIGHT_EMBEDDING;
  /**
   * Inserts a left to right embedding mark.
   */
  readonly lefttorightembedding: SpecialCharacters_LEFT_TO_RIGHT_EMBEDDING;

  /**
   * Inserts a right to left embedding mark.
   */
  readonly RIGHT_TO_LEFT_EMBEDDING: SpecialCharacters_RIGHT_TO_LEFT_EMBEDDING;
  /**
   * Inserts a right to left embedding mark.
   */
  readonly rightToLeftEmbedding: SpecialCharacters_RIGHT_TO_LEFT_EMBEDDING;
  /**
   * Inserts a right to left embedding mark.
   */
  readonly righttoleftembedding: SpecialCharacters_RIGHT_TO_LEFT_EMBEDDING;

  /**
   * Inserts a pop directional formatting mark.
   */
  readonly POP_DIRECTIONAL_FORMATTING: SpecialCharacters_POP_DIRECTIONAL_FORMATTING;
  /**
   * Inserts a pop directional formatting mark.
   */
  readonly popDirectionalFormatting: SpecialCharacters_POP_DIRECTIONAL_FORMATTING;
  /**
   * Inserts a pop directional formatting mark.
   */
  readonly popdirectionalformatting: SpecialCharacters_POP_DIRECTIONAL_FORMATTING;

  /**
   * Inserts a left to right override mark.
   */
  readonly LEFT_TO_RIGHT_OVERRIDE: SpecialCharacters_LEFT_TO_RIGHT_OVERRIDE;
  /**
   * Inserts a left to right override mark.
   */
  readonly leftToRightOverride: SpecialCharacters_LEFT_TO_RIGHT_OVERRIDE;
  /**
   * Inserts a left to right override mark.
   */
  readonly lefttorightoverride: SpecialCharacters_LEFT_TO_RIGHT_OVERRIDE;

  /**
   * Inserts a right to left override mark.
   */
  readonly RIGHT_TO_LEFT_OVERRIDE: SpecialCharacters_RIGHT_TO_LEFT_OVERRIDE;
  /**
   * Inserts a right to left override mark.
   */
  readonly rightToLeftOverride: SpecialCharacters_RIGHT_TO_LEFT_OVERRIDE;
  /**
   * Inserts a right to left override mark.
   */
  readonly righttoleftoverride: SpecialCharacters_RIGHT_TO_LEFT_OVERRIDE;

  /**
   * Inserts a dotted circle.
   */
  readonly DOTTED_CIRCLE: SpecialCharacters_DOTTED_CIRCLE;
  /**
   * Inserts a dotted circle.
   */
  readonly dottedCircle: SpecialCharacters_DOTTED_CIRCLE;
  /**
   * Inserts a dotted circle.
   */
  readonly dottedcircle: SpecialCharacters_DOTTED_CIRCLE;

  /**
   * Inserts a zero width joiner.
   */
  readonly ZERO_WIDTH_JOINER: SpecialCharacters_ZERO_WIDTH_JOINER;
  /**
   * Inserts a zero width joiner.
   */
  readonly zeroWidthJoiner: SpecialCharacters_ZERO_WIDTH_JOINER;
  /**
   * Inserts a zero width joiner.
   */
  readonly zerowidthjoiner: SpecialCharacters_ZERO_WIDTH_JOINER;

  /**
   * Inserts the specified text variable.
   */
  readonly TEXT_VARIABLE: SpecialCharacters_TEXT_VARIABLE;
  /**
   * Inserts the specified text variable.
   */
  readonly textVariable: SpecialCharacters_TEXT_VARIABLE;
  /**
   * Inserts the specified text variable.
   */
  readonly textvariable: SpecialCharacters_TEXT_VARIABLE;

  /**
   * Inserts a single straight quote.
   */
  readonly SINGLE_STRAIGHT_QUOTE: SpecialCharacters_SINGLE_STRAIGHT_QUOTE;
  /**
   * Inserts a single straight quote.
   */
  readonly singleStraightQuote: SpecialCharacters_SINGLE_STRAIGHT_QUOTE;
  /**
   * Inserts a single straight quote.
   */
  readonly singlestraightquote: SpecialCharacters_SINGLE_STRAIGHT_QUOTE;

  /**
   * Inserts a double straight quote.
   */
  readonly DOUBLE_STRAIGHT_QUOTE: SpecialCharacters_DOUBLE_STRAIGHT_QUOTE;
  /**
   * Inserts a double straight quote.
   */
  readonly doubleStraightQuote: SpecialCharacters_DOUBLE_STRAIGHT_QUOTE;
  /**
   * Inserts a double straight quote.
   */
  readonly doublestraightquote: SpecialCharacters_DOUBLE_STRAIGHT_QUOTE;

  /**
   * Inserts a discretionary line break.
   */
  readonly DISCRETIONARY_LINE_BREAK: SpecialCharacters_DISCRETIONARY_LINE_BREAK;
  /**
   * Inserts a discretionary line break.
   */
  readonly discretionaryLineBreak: SpecialCharacters_DISCRETIONARY_LINE_BREAK;
  /**
   * Inserts a discretionary line break.
   */
  readonly discretionarylinebreak: SpecialCharacters_DISCRETIONARY_LINE_BREAK;

  /**
   * Inserts a zero-width non-joiner.
   */
  readonly ZERO_WIDTH_NONJOINER: SpecialCharacters_ZERO_WIDTH_NONJOINER;
  /**
   * Inserts a zero-width non-joiner.
   */
  readonly zeroWidthNonjoiner: SpecialCharacters_ZERO_WIDTH_NONJOINER;
  /**
   * Inserts a zero-width non-joiner.
   */
  readonly zerowidthnonjoiner: SpecialCharacters_ZERO_WIDTH_NONJOINER;

  /**
   * Inserts a third-width space.
   */
  readonly THIRD_SPACE: SpecialCharacters_THIRD_SPACE;
  /**
   * Inserts a third-width space.
   */
  readonly thirdSpace: SpecialCharacters_THIRD_SPACE;
  /**
   * Inserts a third-width space.
   */
  readonly thirdspace: SpecialCharacters_THIRD_SPACE;

  /**
   * Inserts a quarter-width space.
   */
  readonly QUARTER_SPACE: SpecialCharacters_QUARTER_SPACE;
  /**
   * Inserts a quarter-width space.
   */
  readonly quarterSpace: SpecialCharacters_QUARTER_SPACE;
  /**
   * Inserts a quarter-width space.
   */
  readonly quarterspace: SpecialCharacters_QUARTER_SPACE;

  /**
   * Inserts a sixth-width space.
   */
  readonly SIXTH_SPACE: SpecialCharacters_SIXTH_SPACE;
  /**
   * Inserts a sixth-width space.
   */
  readonly sixthSpace: SpecialCharacters_SIXTH_SPACE;
  /**
   * Inserts a sixth-width space.
   */
  readonly sixthspace: SpecialCharacters_SIXTH_SPACE;

  /**
   * Inserts a fixed-width nonbreaking space.
   */
  readonly FIXED_WIDTH_NONBREAKING_SPACE: SpecialCharacters_FIXED_WIDTH_NONBREAKING_SPACE;
  /**
   * Inserts a fixed-width nonbreaking space.
   */
  readonly fixedWidthNonbreakingSpace: SpecialCharacters_FIXED_WIDTH_NONBREAKING_SPACE;
  /**
   * Inserts a fixed-width nonbreaking space.
   */
  readonly fixedwidthnonbreakingspace: SpecialCharacters_FIXED_WIDTH_NONBREAKING_SPACE;

  /**
   * Inserts a hebrew maqaf.
   */
  readonly HEBREW_MAQAF: SpecialCharacters_HEBREW_MAQAF;
  /**
   * Inserts a hebrew maqaf.
   */
  readonly hebrewMaqaf: SpecialCharacters_HEBREW_MAQAF;
  /**
   * Inserts a hebrew maqaf.
   */
  readonly hebrewmaqaf: SpecialCharacters_HEBREW_MAQAF;

  /**
   * Inserts a hebrew geresh.
   */
  readonly HEBREW_GERESH: SpecialCharacters_HEBREW_GERESH;
  /**
   * Inserts a hebrew geresh.
   */
  readonly hebrewGeresh: SpecialCharacters_HEBREW_GERESH;
  /**
   * Inserts a hebrew geresh.
   */
  readonly hebrewgeresh: SpecialCharacters_HEBREW_GERESH;

  /**
   * Inserts a hebrew gershayim.
   */
  readonly HEBREW_GERSHAYIM: SpecialCharacters_HEBREW_GERSHAYIM;
  /**
   * Inserts a hebrew gershayim.
   */
  readonly hebrewGershayim: SpecialCharacters_HEBREW_GERSHAYIM;
  /**
   * Inserts a hebrew gershayim.
   */
  readonly hebrewgershayim: SpecialCharacters_HEBREW_GERSHAYIM;

  /**
   * Inserts an arabic kashida.
   */
  readonly ARABIC_KASHIDA: SpecialCharacters_ARABIC_KASHIDA;
  /**
   * Inserts an arabic kashida.
   */
  readonly arabicKashida: SpecialCharacters_ARABIC_KASHIDA;
  /**
   * Inserts an arabic kashida.
   */
  readonly arabickashida: SpecialCharacters_ARABIC_KASHIDA;

  /**
   * Inserts an arabic comma.
   */
  readonly ARABIC_COMMA: SpecialCharacters_ARABIC_COMMA;
  /**
   * Inserts an arabic comma.
   */
  readonly arabicComma: SpecialCharacters_ARABIC_COMMA;
  /**
   * Inserts an arabic comma.
   */
  readonly arabiccomma: SpecialCharacters_ARABIC_COMMA;

  /**
   * Inserts an arabic semicolon.
   */
  readonly ARABIC_SEMICOLON: SpecialCharacters_ARABIC_SEMICOLON;
  /**
   * Inserts an arabic semicolon.
   */
  readonly arabicSemicolon: SpecialCharacters_ARABIC_SEMICOLON;
  /**
   * Inserts an arabic semicolon.
   */
  readonly arabicsemicolon: SpecialCharacters_ARABIC_SEMICOLON;

  /**
   * Inserts an arabic question mark.
   */
  readonly ARABIC_QUESTION_MARK: SpecialCharacters_ARABIC_QUESTION_MARK;
  /**
   * Inserts an arabic question mark.
   */
  readonly arabicQuestionMark: SpecialCharacters_ARABIC_QUESTION_MARK;
  /**
   * Inserts an arabic question mark.
   */
  readonly arabicquestionmark: SpecialCharacters_ARABIC_QUESTION_MARK;

  /**
   * Inserts a left to right mark.
   */
  readonly LEFT_TO_RIGHT_MARK: SpecialCharacters_LEFT_TO_RIGHT_MARK;
  /**
   * Inserts a left to right mark.
   */
  readonly leftToRightMark: SpecialCharacters_LEFT_TO_RIGHT_MARK;
  /**
   * Inserts a left to right mark.
   */
  readonly lefttorightmark: SpecialCharacters_LEFT_TO_RIGHT_MARK;

  /**
   * Inserts a right to left mark.
   */
  readonly RIGHT_TO_LEFT_MARK: SpecialCharacters_RIGHT_TO_LEFT_MARK;
  /**
   * Inserts a right to left mark.
   */
  readonly rightToLeftMark: SpecialCharacters_RIGHT_TO_LEFT_MARK;
  /**
   * Inserts a right to left mark.
   */
  readonly righttoleftmark: SpecialCharacters_RIGHT_TO_LEFT_MARK;

  /**
   * Inserts a hebrew sof pasuk.
   */
  readonly HEBREW_SOF_PASUK: SpecialCharacters_HEBREW_SOF_PASUK;
  /**
   * Inserts a hebrew sof pasuk.
   */
  readonly hebrewSofPasuk: SpecialCharacters_HEBREW_SOF_PASUK;
  /**
   * Inserts a hebrew sof pasuk.
   */
  readonly hebrewsofpasuk: SpecialCharacters_HEBREW_SOF_PASUK;

}
