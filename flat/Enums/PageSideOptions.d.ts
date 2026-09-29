/**
 * PageSideOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageSideOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageSideOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageSideOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageSideOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageSideOptions]: never;
}


/**
 * The page is on the right side of the binding spine in the spread.
 */
interface PageSideOptions_RIGHT_HAND extends PageSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919382632;
}

/**
 * The page is on the left side of the binding spine in the spread.
 */
interface PageSideOptions_LEFT_HAND extends PageSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818653800;
}

/**
 * The page is a single-sided page.
 */
interface PageSideOptions_SINGLE_SIDED extends PageSideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1970496888;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Binding spine placement options.
 */
export declare namespace PageSideOptions {
/**
 * The page is on the right side of the binding spine in the spread.
 */
type RIGHT_HAND = PageSideOptions_RIGHT_HAND;

/**
 * The page is on the left side of the binding spine in the spread.
 */
type LEFT_HAND = PageSideOptions_LEFT_HAND;

/**
 * The page is a single-sided page.
 */
type SINGLE_SIDED = PageSideOptions_SINGLE_SIDED;

}
/**
 * Binding spine placement options.
 */
export declare const PageSideOptions: typeof Enumeration & {

  /**
   * The page is on the right side of the binding spine in the spread.
   */
  readonly RIGHT_HAND: PageSideOptions_RIGHT_HAND;
  /**
   * The page is on the right side of the binding spine in the spread.
   */
  readonly rightHand: PageSideOptions_RIGHT_HAND;
  /**
   * The page is on the right side of the binding spine in the spread.
   */
  readonly righthand: PageSideOptions_RIGHT_HAND;

  /**
   * The page is on the left side of the binding spine in the spread.
   */
  readonly LEFT_HAND: PageSideOptions_LEFT_HAND;
  /**
   * The page is on the left side of the binding spine in the spread.
   */
  readonly leftHand: PageSideOptions_LEFT_HAND;
  /**
   * The page is on the left side of the binding spine in the spread.
   */
  readonly lefthand: PageSideOptions_LEFT_HAND;

  /**
   * The page is a single-sided page.
   */
  readonly SINGLE_SIDED: PageSideOptions_SINGLE_SIDED;
  /**
   * The page is a single-sided page.
   */
  readonly singleSided: PageSideOptions_SINGLE_SIDED;
  /**
   * The page is a single-sided page.
   */
  readonly singlesided: PageSideOptions_SINGLE_SIDED;

}
