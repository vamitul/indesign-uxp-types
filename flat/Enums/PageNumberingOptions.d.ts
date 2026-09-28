/**
 * PageNumberingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageNumberingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageNumberingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageNumberingOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageNumberingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageNumberingOptions]: never;
}


/**
 * Numbers pages according to page numbering specifications of the section.
 */
interface PageNumberingOptions_SECTION extends PageNumberingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1935897710;
}

/**
 * Numbers all pages in the document sequentially.
 */
interface PageNumberingOptions_ABSOLUTE extends PageNumberingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1096971116;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for page numbering.
 */
export declare namespace PageNumberingOptions {
/**
 * Numbers pages according to page numbering specifications of the section.
 */
type SECTION = PageNumberingOptions_SECTION;

/**
 * Numbers all pages in the document sequentially.
 */
type ABSOLUTE = PageNumberingOptions_ABSOLUTE;

}
/**
 * Options for page numbering.
 */
export declare const PageNumberingOptions: typeof Enumeration & {

  /**
   * Numbers pages according to page numbering specifications of the section.
   */
  readonly SECTION: PageNumberingOptions_SECTION;
  /**
   * Numbers pages according to page numbering specifications of the section.
   */
  readonly section: PageNumberingOptions_SECTION;

  /**
   * Numbers all pages in the document sequentially.
   */
  readonly ABSOLUTE: PageNumberingOptions_ABSOLUTE;
  /**
   * Numbers all pages in the document sequentially.
   */
  readonly absolute: PageNumberingOptions_ABSOLUTE;

}
