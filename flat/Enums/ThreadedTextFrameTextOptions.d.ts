/**
 * ThreadedTextFrameTextOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ThreadedTextFrameTextOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ThreadedTextFrameTextOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ThreadedTextFrameTextOptions>): boolean;

  /**
   * @internal **WARNING:** `__ThreadedTextFrameTextOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ThreadedTextFrameTextOptions]: never;
}


/**
 * Text within the current text frame.
 */
interface ThreadedTextFrameTextOptions_TEXT_WITHIN_TEXTFRAME extends ThreadedTextFrameTextOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700021844;
}

/**
 * Text for the complete story.
 */
interface ThreadedTextFrameTextOptions_TEXT_FOR_COMPLETE_STORY extends ThreadedTextFrameTextOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1698911092;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether an operation considers only the text in the current frame or the entire threaded
 * story.
 */
export declare namespace ThreadedTextFrameTextOptions {
/**
 * Text within the current text frame.
 */
type TEXT_WITHIN_TEXTFRAME = ThreadedTextFrameTextOptions_TEXT_WITHIN_TEXTFRAME;

/**
 * Text for the complete story.
 */
type TEXT_FOR_COMPLETE_STORY = ThreadedTextFrameTextOptions_TEXT_FOR_COMPLETE_STORY;

}
/**
 * Whether an operation considers only the text in the current frame or the entire threaded
 * story.
 */
export declare const ThreadedTextFrameTextOptions: typeof Enumeration & {

  /**
   * Text within the current text frame.
   */
  readonly TEXT_WITHIN_TEXTFRAME: ThreadedTextFrameTextOptions_TEXT_WITHIN_TEXTFRAME;
  /**
   * Text within the current text frame.
   */
  readonly textWithinTextframe: ThreadedTextFrameTextOptions_TEXT_WITHIN_TEXTFRAME;
  /**
   * Text within the current text frame.
   */
  readonly textwithintextframe: ThreadedTextFrameTextOptions_TEXT_WITHIN_TEXTFRAME;

  /**
   * Text for the complete story.
   */
  readonly TEXT_FOR_COMPLETE_STORY: ThreadedTextFrameTextOptions_TEXT_FOR_COMPLETE_STORY;
  /**
   * Text for the complete story.
   */
  readonly textForCompleteStory: ThreadedTextFrameTextOptions_TEXT_FOR_COMPLETE_STORY;
  /**
   * Text for the complete story.
   */
  readonly textforcompletestory: ThreadedTextFrameTextOptions_TEXT_FOR_COMPLETE_STORY;

}
