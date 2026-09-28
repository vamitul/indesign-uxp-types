/**
 * Fitting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { FitOptions } from './FitOptions';



declare const __Fitting: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Fitting extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Fitting>): boolean;

  /**
   * @internal **WARNING:** `__Fitting` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Fitting]: never;
}


/**
 * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space occurs in the frame.
 */
interface Fitting_PROPORTIONAL extends Fitting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684885618;
}

/**
 * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
 */
interface Fitting_FIT_CONTENT_TO_FRAME extends Fitting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684883043;
}

/**
 * Resizes the frame to fit the content.
 */
interface Fitting_FIT_FRAME_TO_CONTENT extends Fitting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684883046;
}

/**
 * Preserves the original sizes of the frame and the content. Note: Content that is larger than the frame is obscured around the edges.
 */
interface Fitting_PRESERVE_SIZES extends Fitting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684885619;
}

/**
 * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size. If this fitting is set, centerImage property is turned-off.
 */
interface Fitting_CONTENT_AWARE_FITTING extends Fitting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684882241;
}

/**
 * Apply the frame fitting based on existing setting applied on the orginal frame.
 */
interface Fitting_HONOUR_EXISTING_STYLE extends Fitting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684883539;
}

/**
 * Resizes content to fill the frame while preserving content proportions. If the
 * content and frame have different proportions, some content is obscured by the
 * bounding box of the frame.
 */
interface Fitting_FILL_PROPORTIONAL extends Fitting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684883056;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The fitting rule stored on a frame or object style and applied automatically whenever content is placed — as opposed to {@link FitOptions}, which is what a one-off `fit()` call takes.
 */
export declare namespace Fitting {
/**
 * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space occurs in the frame.
 */
type PROPORTIONAL = Fitting_PROPORTIONAL;

/**
 * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
 */
type FIT_CONTENT_TO_FRAME = Fitting_FIT_CONTENT_TO_FRAME;

/**
 * Resizes the frame to fit the content.
 */
type FIT_FRAME_TO_CONTENT = Fitting_FIT_FRAME_TO_CONTENT;

/**
 * Preserves the original sizes of the frame and the content. Note: Content that is larger than the frame is obscured around the edges.
 */
type PRESERVE_SIZES = Fitting_PRESERVE_SIZES;

/**
 * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size. If this fitting is set, centerImage property is turned-off.
 */
type CONTENT_AWARE_FITTING = Fitting_CONTENT_AWARE_FITTING;

/**
 * Apply the frame fitting based on existing setting applied on the orginal frame.
 */
type HONOUR_EXISTING_STYLE = Fitting_HONOUR_EXISTING_STYLE;

/**
 * Resizes content to fill the frame while preserving content proportions. If the
 * content and frame have different proportions, some content is obscured by the
 * bounding box of the frame.
 */
type FILL_PROPORTIONAL = Fitting_FILL_PROPORTIONAL;

}
export declare const Fitting: typeof Enumeration & {

  /**
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space occurs in the frame.
   */
  readonly PROPORTIONAL: Fitting_PROPORTIONAL;
  /**
   * Resizes content to fit the frame while preserving content proportions. If the content and frame have different proportions, some empty space occurs in the frame.
   */
  readonly proportional: Fitting_PROPORTIONAL;

  /**
   * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
   */
  readonly FIT_CONTENT_TO_FRAME: Fitting_FIT_CONTENT_TO_FRAME;
  /**
   * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
   */
  readonly fitContentToFrame: Fitting_FIT_CONTENT_TO_FRAME;
  /**
   * Resizes content to fit the frame. Note: Content that is a different size than the frame appears stretched or squeezed.
   */
  readonly fitcontenttoframe: Fitting_FIT_CONTENT_TO_FRAME;

  /**
   * Resizes the frame to fit the content.
   */
  readonly FIT_FRAME_TO_CONTENT: Fitting_FIT_FRAME_TO_CONTENT;
  /**
   * Resizes the frame to fit the content.
   */
  readonly fitFrameToContent: Fitting_FIT_FRAME_TO_CONTENT;
  /**
   * Resizes the frame to fit the content.
   */
  readonly fitframetocontent: Fitting_FIT_FRAME_TO_CONTENT;

  /**
   * Preserves the original sizes of the frame and the content. Note: Content that is larger than the frame is obscured around the edges.
   */
  readonly PRESERVE_SIZES: Fitting_PRESERVE_SIZES;
  /**
   * Preserves the original sizes of the frame and the content. Note: Content that is larger than the frame is obscured around the edges.
   */
  readonly preserveSizes: Fitting_PRESERVE_SIZES;
  /**
   * Preserves the original sizes of the frame and the content. Note: Content that is larger than the frame is obscured around the edges.
   */
  readonly preservesizes: Fitting_PRESERVE_SIZES;

  /**
   * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size. If this fitting is set, centerImage property is turned-off.
   */
  readonly CONTENT_AWARE_FITTING: Fitting_CONTENT_AWARE_FITTING;
  /**
   * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size. If this fitting is set, centerImage property is turned-off.
   */
  readonly contentAwareFitting: Fitting_CONTENT_AWARE_FITTING;
  /**
   * Selects best crop region of the content for the frame based on Adobe Sensei. Note: Preserves frame size but might scale the content size. If this fitting is set, centerImage property is turned-off.
   */
  readonly contentawarefitting: Fitting_CONTENT_AWARE_FITTING;

  /**
   * Apply the frame fitting based on existing setting applied on the orginal frame.
   */
  readonly HONOUR_EXISTING_STYLE: Fitting_HONOUR_EXISTING_STYLE;
  /**
   * Apply the frame fitting based on existing setting applied on the orginal frame.
   */
  readonly honourExistingStyle: Fitting_HONOUR_EXISTING_STYLE;
  /**
   * Apply the frame fitting based on existing setting applied on the orginal frame.
   */
  readonly honourexistingstyle: Fitting_HONOUR_EXISTING_STYLE;

  /**
   * Resizes content to fill the frame while preserving content proportions. If the
   * content and frame have different proportions, some content is obscured by the
   * bounding box of the frame.
   */
  readonly FILL_PROPORTIONAL: Fitting_FILL_PROPORTIONAL;
  /**
   * Resizes content to fill the frame while preserving content proportions. If the
   * content and frame have different proportions, some content is obscured by the
   * bounding box of the frame.
   */
  readonly fillProportional: Fitting_FILL_PROPORTIONAL;
  /**
   * Resizes content to fill the frame while preserving content proportions. If the
   * content and frame have different proportions, some content is obscured by the
   * bounding box of the frame.
   */
  readonly fillproportional: Fitting_FILL_PROPORTIONAL;

}
