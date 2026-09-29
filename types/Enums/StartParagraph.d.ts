/**
 * StartParagraph.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StartParagraph: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StartParagraph extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StartParagraph>): boolean;

  /**
   * @internal **WARNING:** `__StartParagraph` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StartParagraph]: never;
}


/**
 * Starts in the next available space.
 */
interface StartParagraph_ANYWHERE extends StartParagraph {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1851945579;
}

/**
 * Starts at the top of the next column.
 */
interface StartParagraph_NEXT_COLUMN extends StartParagraph {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667396203;
}

/**
 * Starts at the top of the next text frame in the thread.
 */
interface StartParagraph_NEXT_FRAME extends StartParagraph {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1313235563;
}

/**
 * Starts at the top of the next page.
 */
interface StartParagraph_NEXT_PAGE extends StartParagraph {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885500011;
}

/**
 * Starts at the top of the next odd-numbered page.
 */
interface StartParagraph_NEXT_ODD_PAGE extends StartParagraph {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1332765291;
}

/**
 * Starts at the top of the next even-numbered page.
 */
interface StartParagraph_NEXT_EVEN_PAGE extends StartParagraph {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1164993131;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Column and page break options.
 */
export declare namespace StartParagraph {
/**
 * Starts in the next available space.
 */
type ANYWHERE = StartParagraph_ANYWHERE;

/**
 * Starts at the top of the next column.
 */
type NEXT_COLUMN = StartParagraph_NEXT_COLUMN;

/**
 * Starts at the top of the next text frame in the thread.
 */
type NEXT_FRAME = StartParagraph_NEXT_FRAME;

/**
 * Starts at the top of the next page.
 */
type NEXT_PAGE = StartParagraph_NEXT_PAGE;

/**
 * Starts at the top of the next odd-numbered page.
 */
type NEXT_ODD_PAGE = StartParagraph_NEXT_ODD_PAGE;

/**
 * Starts at the top of the next even-numbered page.
 */
type NEXT_EVEN_PAGE = StartParagraph_NEXT_EVEN_PAGE;

}
/**
 * Column and page break options.
 */
export declare const StartParagraph: typeof Enumeration & {

  /**
   * Starts in the next available space.
   */
  readonly ANYWHERE: StartParagraph_ANYWHERE;
  /**
   * Starts in the next available space.
   */
  readonly anywhere: StartParagraph_ANYWHERE;

  /**
   * Starts at the top of the next column.
   */
  readonly NEXT_COLUMN: StartParagraph_NEXT_COLUMN;
  /**
   * Starts at the top of the next column.
   */
  readonly nextColumn: StartParagraph_NEXT_COLUMN;
  /**
   * Starts at the top of the next column.
   */
  readonly nextcolumn: StartParagraph_NEXT_COLUMN;

  /**
   * Starts at the top of the next text frame in the thread.
   */
  readonly NEXT_FRAME: StartParagraph_NEXT_FRAME;
  /**
   * Starts at the top of the next text frame in the thread.
   */
  readonly nextFrame: StartParagraph_NEXT_FRAME;
  /**
   * Starts at the top of the next text frame in the thread.
   */
  readonly nextframe: StartParagraph_NEXT_FRAME;

  /**
   * Starts at the top of the next page.
   */
  readonly NEXT_PAGE: StartParagraph_NEXT_PAGE;
  /**
   * Starts at the top of the next page.
   */
  readonly nextPage: StartParagraph_NEXT_PAGE;
  /**
   * Starts at the top of the next page.
   */
  readonly nextpage: StartParagraph_NEXT_PAGE;

  /**
   * Starts at the top of the next odd-numbered page.
   */
  readonly NEXT_ODD_PAGE: StartParagraph_NEXT_ODD_PAGE;
  /**
   * Starts at the top of the next odd-numbered page.
   */
  readonly nextOddPage: StartParagraph_NEXT_ODD_PAGE;
  /**
   * Starts at the top of the next odd-numbered page.
   */
  readonly nextoddpage: StartParagraph_NEXT_ODD_PAGE;

  /**
   * Starts at the top of the next even-numbered page.
   */
  readonly NEXT_EVEN_PAGE: StartParagraph_NEXT_EVEN_PAGE;
  /**
   * Starts at the top of the next even-numbered page.
   */
  readonly nextEvenPage: StartParagraph_NEXT_EVEN_PAGE;
  /**
   * Starts at the top of the next even-numbered page.
   */
  readonly nextevenpage: StartParagraph_NEXT_EVEN_PAGE;

}
