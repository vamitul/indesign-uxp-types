/**
 * EmptyFrameFittingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EmptyFrameFittingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EmptyFrameFittingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EmptyFrameFittingOptions>): boolean;

  /**
   * @internal **WARNING:** `__EmptyFrameFittingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EmptyFrameFittingOptions]: never;
}


/**
 * Does not use a fitting option.
 */
interface EmptyFrameFittingOptions_NONE extends EmptyFrameFittingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Resizes content to fit the frame. Note: Content that has different proportions than the frame appears stretched or squeezed.
 */
interface EmptyFrameFittingOptions_CONTENT_TO_FRAME extends EmptyFrameFittingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668575078;
}

/**
 * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
 */
interface EmptyFrameFittingOptions_PROPORTIONALLY extends EmptyFrameFittingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668247152;
}

/**
 * Resizes content to fill the frame while preserving the content's proportions.
 * If the content and frame have different proportions, some of the content is
 * obscured by the frame.
 */
interface EmptyFrameFittingOptions_FILL_PROPORTIONALLY extends EmptyFrameFittingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718185072;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for fitting content in an empty frame.
 */
export declare namespace EmptyFrameFittingOptions {
/**
 * Does not use a fitting option.
 */
type NONE = EmptyFrameFittingOptions_NONE;

/**
 * Resizes content to fit the frame. Note: Content that has different proportions than the frame appears stretched or squeezed.
 */
type CONTENT_TO_FRAME = EmptyFrameFittingOptions_CONTENT_TO_FRAME;

/**
 * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
 */
type PROPORTIONALLY = EmptyFrameFittingOptions_PROPORTIONALLY;

/**
 * Resizes content to fill the frame while preserving the content's proportions.
 * If the content and frame have different proportions, some of the content is
 * obscured by the frame.
 */
type FILL_PROPORTIONALLY = EmptyFrameFittingOptions_FILL_PROPORTIONALLY;

}
/**
 * Options for fitting content in an empty frame.
 */
export declare const EmptyFrameFittingOptions: typeof Enumeration & {

  /**
   * Does not use a fitting option.
   */
  readonly NONE: EmptyFrameFittingOptions_NONE;
  /**
   * Does not use a fitting option.
   */
  readonly none: EmptyFrameFittingOptions_NONE;

  /**
   * Resizes content to fit the frame. Note: Content that has different proportions than the frame appears stretched or squeezed.
   */
  readonly CONTENT_TO_FRAME: EmptyFrameFittingOptions_CONTENT_TO_FRAME;
  /**
   * Resizes content to fit the frame. Note: Content that has different proportions than the frame appears stretched or squeezed.
   */
  readonly contentToFrame: EmptyFrameFittingOptions_CONTENT_TO_FRAME;
  /**
   * Resizes content to fit the frame. Note: Content that has different proportions than the frame appears stretched or squeezed.
   */
  readonly contenttoframe: EmptyFrameFittingOptions_CONTENT_TO_FRAME;

  /**
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
   */
  readonly PROPORTIONALLY: EmptyFrameFittingOptions_PROPORTIONALLY;
  /**
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
   */
  readonly proportionally: EmptyFrameFittingOptions_PROPORTIONALLY;

  /**
   * Resizes content to fill the frame while preserving the content's proportions.
   * If the content and frame have different proportions, some of the content is
   * obscured by the frame.
   */
  readonly FILL_PROPORTIONALLY: EmptyFrameFittingOptions_FILL_PROPORTIONALLY;
  /**
   * Resizes content to fill the frame while preserving the content's proportions.
   * If the content and frame have different proportions, some of the content is
   * obscured by the frame.
   */
  readonly fillProportionally: EmptyFrameFittingOptions_FILL_PROPORTIONALLY;
  /**
   * Resizes content to fill the frame while preserving the content's proportions.
   * If the content and frame have different proportions, some of the content is
   * obscured by the frame.
   */
  readonly fillproportionally: EmptyFrameFittingOptions_FILL_PROPORTIONALLY;

}
