/**
 * PageLayoutOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageLayoutOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageLayoutOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageLayoutOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageLayoutOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageLayoutOptions]: never;
}


/**
 * Uses default page layout.
 */
interface PageLayoutOptions_DEFAULT_VALUE extends PageLayoutOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * Single page layout.
 */
interface PageLayoutOptions_SINGLE_PAGE extends PageLayoutOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1987736432;
}

/**
 * Single page continuous layout.
 */
interface PageLayoutOptions_SINGLE_PAGE_CONTINUOUS extends PageLayoutOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884508259;
}

/**
 * Two up facing page layout.
 */
interface PageLayoutOptions_TWO_UP_FACING extends PageLayoutOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884575046;
}

/**
 * Two up facing continuous page layout.
 */
interface PageLayoutOptions_TWO_UP_FACING_CONTINUOUS extends PageLayoutOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884571235;
}

/**
 * Two-up cover page layout.
 */
interface PageLayoutOptions_TWO_UP_COVER_PAGE extends PageLayoutOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884570448;
}

/**
 * Two-up cover page continuous layout.
 */
interface PageLayoutOptions_TWO_UP_COVER_PAGE_CONTINUOUS extends PageLayoutOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884570467;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * PDF export page layout options.
 */
export declare namespace PageLayoutOptions {
/**
 * Uses default page layout.
 */
type DEFAULT_VALUE = PageLayoutOptions_DEFAULT_VALUE;

/**
 * Single page layout.
 */
type SINGLE_PAGE = PageLayoutOptions_SINGLE_PAGE;

/**
 * Single page continuous layout.
 */
type SINGLE_PAGE_CONTINUOUS = PageLayoutOptions_SINGLE_PAGE_CONTINUOUS;

/**
 * Two up facing page layout.
 */
type TWO_UP_FACING = PageLayoutOptions_TWO_UP_FACING;

/**
 * Two up facing continuous page layout.
 */
type TWO_UP_FACING_CONTINUOUS = PageLayoutOptions_TWO_UP_FACING_CONTINUOUS;

/**
 * Two-up cover page layout.
 */
type TWO_UP_COVER_PAGE = PageLayoutOptions_TWO_UP_COVER_PAGE;

/**
 * Two-up cover page continuous layout.
 */
type TWO_UP_COVER_PAGE_CONTINUOUS = PageLayoutOptions_TWO_UP_COVER_PAGE_CONTINUOUS;

}
/**
 * PDF export page layout options.
 */
export declare const PageLayoutOptions: typeof Enumeration & {

  /**
   * Uses default page layout.
   */
  readonly DEFAULT_VALUE: PageLayoutOptions_DEFAULT_VALUE;
  /**
   * Uses default page layout.
   */
  readonly defaultValue: PageLayoutOptions_DEFAULT_VALUE;
  /**
   * Uses default page layout.
   */
  readonly defaultvalue: PageLayoutOptions_DEFAULT_VALUE;

  /**
   * Single page layout.
   */
  readonly SINGLE_PAGE: PageLayoutOptions_SINGLE_PAGE;
  /**
   * Single page layout.
   */
  readonly singlePage: PageLayoutOptions_SINGLE_PAGE;
  /**
   * Single page layout.
   */
  readonly singlepage: PageLayoutOptions_SINGLE_PAGE;

  /**
   * Single page continuous layout.
   */
  readonly SINGLE_PAGE_CONTINUOUS: PageLayoutOptions_SINGLE_PAGE_CONTINUOUS;
  /**
   * Single page continuous layout.
   */
  readonly singlePageContinuous: PageLayoutOptions_SINGLE_PAGE_CONTINUOUS;
  /**
   * Single page continuous layout.
   */
  readonly singlepagecontinuous: PageLayoutOptions_SINGLE_PAGE_CONTINUOUS;

  /**
   * Two up facing page layout.
   */
  readonly TWO_UP_FACING: PageLayoutOptions_TWO_UP_FACING;
  /**
   * Two up facing page layout.
   */
  readonly twoUpFacing: PageLayoutOptions_TWO_UP_FACING;
  /**
   * Two up facing page layout.
   */
  readonly twoupfacing: PageLayoutOptions_TWO_UP_FACING;

  /**
   * Two up facing continuous page layout.
   */
  readonly TWO_UP_FACING_CONTINUOUS: PageLayoutOptions_TWO_UP_FACING_CONTINUOUS;
  /**
   * Two up facing continuous page layout.
   */
  readonly twoUpFacingContinuous: PageLayoutOptions_TWO_UP_FACING_CONTINUOUS;
  /**
   * Two up facing continuous page layout.
   */
  readonly twoupfacingcontinuous: PageLayoutOptions_TWO_UP_FACING_CONTINUOUS;

  /**
   * Two-up cover page layout.
   */
  readonly TWO_UP_COVER_PAGE: PageLayoutOptions_TWO_UP_COVER_PAGE;
  /**
   * Two-up cover page layout.
   */
  readonly twoUpCoverPage: PageLayoutOptions_TWO_UP_COVER_PAGE;
  /**
   * Two-up cover page layout.
   */
  readonly twoupcoverpage: PageLayoutOptions_TWO_UP_COVER_PAGE;

  /**
   * Two-up cover page continuous layout.
   */
  readonly TWO_UP_COVER_PAGE_CONTINUOUS: PageLayoutOptions_TWO_UP_COVER_PAGE_CONTINUOUS;
  /**
   * Two-up cover page continuous layout.
   */
  readonly twoUpCoverPageContinuous: PageLayoutOptions_TWO_UP_COVER_PAGE_CONTINUOUS;
  /**
   * Two-up cover page continuous layout.
   */
  readonly twoupcoverpagecontinuous: PageLayoutOptions_TWO_UP_COVER_PAGE_CONTINUOUS;

}
