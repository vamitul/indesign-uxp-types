/**
 * FitOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FitOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FitOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FitOptions>): boolean;

  /**
   * @internal **WARNING:** `__FitOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FitOptions]: never;
}


/**
 * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
 */
interface FitOptions_CONTENT_TO_FRAME extends FitOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668575078;
}

/**
 * Centers content in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured.
 */
interface FitOptions_CENTER_CONTENT extends FitOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591779;
}

/**
 * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
 */
interface FitOptions_PROPORTIONALLY extends FitOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668247152;
}

/**
 * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size.
 */
interface FitOptions_CONTENT_AWARE_FIT extends FitOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667327593;
}

/**
 * Resizes the frame so it fits the content.
 */
interface FitOptions_FRAME_TO_CONTENT extends FitOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718906723;
}

/**
 * Resizes content to fill the frame while perserving the proportions of the content. If the content and frame have different proportions, some of the content is obscured by the bounding box of the frame.
 */
interface FitOptions_FILL_PROPORTIONALLY extends FitOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718185072;
}

/**
 * Applies the current frame fitting options to the frame and content.
 *
 * Before using this, do confirm that the expected Frame Fitting Options are applied on the
 * frame. For example, the act of placing an image in a frame set to 'Fit Content
 * Proportionally' can change the crop settings in the Frame Fitting Options, which would
 * then get applied for any subsequent image placement when this API is called.
 */
interface FitOptions_APPLY_FRAME_FITTING_OPTIONS extends FitOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634100847;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How a `fit()` call reconciles a frame and its content — move one to the other, centre it, scale it proportionally, or re-apply the frame's own fitting options.
 */
export declare namespace FitOptions {
/**
 * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
 */
type CONTENT_TO_FRAME = FitOptions_CONTENT_TO_FRAME;

/**
 * Centers content in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured.
 */
type CENTER_CONTENT = FitOptions_CENTER_CONTENT;

/**
 * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
 */
type PROPORTIONALLY = FitOptions_PROPORTIONALLY;

/**
 * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size.
 */
type CONTENT_AWARE_FIT = FitOptions_CONTENT_AWARE_FIT;

/**
 * Resizes the frame so it fits the content.
 */
type FRAME_TO_CONTENT = FitOptions_FRAME_TO_CONTENT;

/**
 * Resizes content to fill the frame while perserving the proportions of the content. If the content and frame have different proportions, some of the content is obscured by the bounding box of the frame.
 */
type FILL_PROPORTIONALLY = FitOptions_FILL_PROPORTIONALLY;

/**
 * Applies the current frame fitting options to the frame and content.
 *
 * Before using this, do confirm that the expected Frame Fitting Options are applied on the
 * frame. For example, the act of placing an image in a frame set to 'Fit Content
 * Proportionally' can change the crop settings in the Frame Fitting Options, which would
 * then get applied for any subsequent image placement when this API is called.
 */
type APPLY_FRAME_FITTING_OPTIONS = FitOptions_APPLY_FRAME_FITTING_OPTIONS;

}
export declare const FitOptions: typeof Enumeration & {

  /**
   * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
   */
  readonly CONTENT_TO_FRAME: FitOptions_CONTENT_TO_FRAME;
  /**
   * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
   */
  readonly contentToFrame: FitOptions_CONTENT_TO_FRAME;
  /**
   * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
   */
  readonly contenttoframe: FitOptions_CONTENT_TO_FRAME;

  /**
   * Centers content in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured.
   */
  readonly CENTER_CONTENT: FitOptions_CENTER_CONTENT;
  /**
   * Centers content in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured.
   */
  readonly centerContent: FitOptions_CENTER_CONTENT;
  /**
   * Centers content in the frame; preserves the frame size as well as content size and proportions. Note: If the content is larger than the frame, content around the edges is obscured.
   */
  readonly centercontent: FitOptions_CENTER_CONTENT;

  /**
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
   */
  readonly PROPORTIONALLY: FitOptions_PROPORTIONALLY;
  /**
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space appears in the frame.
   */
  readonly proportionally: FitOptions_PROPORTIONALLY;

  /**
   * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size.
   */
  readonly CONTENT_AWARE_FIT: FitOptions_CONTENT_AWARE_FIT;
  /**
   * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size.
   */
  readonly contentAwareFit: FitOptions_CONTENT_AWARE_FIT;
  /**
   * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size.
   */
  readonly contentawarefit: FitOptions_CONTENT_AWARE_FIT;

  /**
   * Resizes the frame so it fits the content.
   */
  readonly FRAME_TO_CONTENT: FitOptions_FRAME_TO_CONTENT;
  /**
   * Resizes the frame so it fits the content.
   */
  readonly frameToContent: FitOptions_FRAME_TO_CONTENT;
  /**
   * Resizes the frame so it fits the content.
   */
  readonly frametocontent: FitOptions_FRAME_TO_CONTENT;

  /**
   * Resizes content to fill the frame while perserving the proportions of the content. If the content and frame have different proportions, some of the content is obscured by the bounding box of the frame.
   */
  readonly FILL_PROPORTIONALLY: FitOptions_FILL_PROPORTIONALLY;
  /**
   * Resizes content to fill the frame while perserving the proportions of the content. If the content and frame have different proportions, some of the content is obscured by the bounding box of the frame.
   */
  readonly fillProportionally: FitOptions_FILL_PROPORTIONALLY;
  /**
   * Resizes content to fill the frame while perserving the proportions of the content. If the content and frame have different proportions, some of the content is obscured by the bounding box of the frame.
   */
  readonly fillproportionally: FitOptions_FILL_PROPORTIONALLY;

  /**
   * Applies the current frame fitting options to the frame and content.
   *
   * Before using this, do confirm that the expected Frame Fitting Options are applied on the
   * frame. For example, the act of placing an image in a frame set to 'Fit Content
   * Proportionally' can change the crop settings in the Frame Fitting Options, which would
   * then get applied for any subsequent image placement when this API is called.
   */
  readonly APPLY_FRAME_FITTING_OPTIONS: FitOptions_APPLY_FRAME_FITTING_OPTIONS;
  /**
   * Applies the current frame fitting options to the frame and content.
   *
   * Before using this, do confirm that the expected Frame Fitting Options are applied on the
   * frame. For example, the act of placing an image in a frame set to 'Fit Content
   * Proportionally' can change the crop settings in the Frame Fitting Options, which would
   * then get applied for any subsequent image placement when this API is called.
   */
  readonly applyFrameFittingOptions: FitOptions_APPLY_FRAME_FITTING_OPTIONS;
  /**
   * Applies the current frame fitting options to the frame and content.
   *
   * Before using this, do confirm that the expected Frame Fitting Options are applied on the
   * frame. For example, the act of placing an image in a frame set to 'Fit Content
   * Proportionally' can change the crop settings in the Frame Fitting Options, which would
   * then get applied for any subsequent image placement when this API is called.
   */
  readonly applyframefittingoptions: FitOptions_APPLY_FRAME_FITTING_OPTIONS;

}
