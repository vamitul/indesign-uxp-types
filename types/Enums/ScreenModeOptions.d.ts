/**
 * ScreenModeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ScreenModeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ScreenModeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ScreenModeOptions>): boolean;

  /**
   * @internal **WARNING:** `__ScreenModeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ScreenModeOptions]: never;
}


/**
 * Normal view; displays guides and frame edges.
 */
interface ScreenModeOptions_PREVIEW_OFF extends ScreenModeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936552047;
}

/**
 * Preview mode; displays the document as it will be printed (hides guides and frame edges).
 */
interface ScreenModeOptions_PREVIEW_TO_PAGE extends ScreenModeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936552048;
}

/**
 * Preview mode including the bleed area.
 */
interface ScreenModeOptions_PREVIEW_TO_BLEED extends ScreenModeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936552034;
}

/**
 * Preview mode including the slug area.
 */
interface ScreenModeOptions_PREVIEW_TO_SLUG extends ScreenModeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936552051;
}

/**
 * Preview mode with editing turned off. Mouse clicks and arrow keys will move to previous or next spread.
 */
interface ScreenModeOptions_PRESENTATION_PREVIEW extends ScreenModeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936552046;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How much page furniture the window shows — guides and frame edges, bleed, slug, or nothing
 * but the trimmed page.
 */
export declare namespace ScreenModeOptions {
/**
 * Normal view; displays guides and frame edges.
 */
type PREVIEW_OFF = ScreenModeOptions_PREVIEW_OFF;

/**
 * Preview mode; displays the document as it will be printed (hides guides and frame edges).
 */
type PREVIEW_TO_PAGE = ScreenModeOptions_PREVIEW_TO_PAGE;

/**
 * Preview mode including the bleed area.
 */
type PREVIEW_TO_BLEED = ScreenModeOptions_PREVIEW_TO_BLEED;

/**
 * Preview mode including the slug area.
 */
type PREVIEW_TO_SLUG = ScreenModeOptions_PREVIEW_TO_SLUG;

/**
 * Preview mode with editing turned off. Mouse clicks and arrow keys will move to previous or next spread.
 */
type PRESENTATION_PREVIEW = ScreenModeOptions_PRESENTATION_PREVIEW;

}
/**
 * How much page furniture the window shows — guides and frame edges, bleed, slug, or nothing
 * but the trimmed page.
 */
export declare const ScreenModeOptions: typeof Enumeration & {

  /**
   * Normal view; displays guides and frame edges.
   */
  readonly PREVIEW_OFF: ScreenModeOptions_PREVIEW_OFF;
  /**
   * Normal view; displays guides and frame edges.
   */
  readonly previewOff: ScreenModeOptions_PREVIEW_OFF;
  /**
   * Normal view; displays guides and frame edges.
   */
  readonly previewoff: ScreenModeOptions_PREVIEW_OFF;

  /**
   * Preview mode; displays the document as it will be printed (hides guides and frame edges).
   */
  readonly PREVIEW_TO_PAGE: ScreenModeOptions_PREVIEW_TO_PAGE;
  /**
   * Preview mode; displays the document as it will be printed (hides guides and frame edges).
   */
  readonly previewToPage: ScreenModeOptions_PREVIEW_TO_PAGE;
  /**
   * Preview mode; displays the document as it will be printed (hides guides and frame edges).
   */
  readonly previewtopage: ScreenModeOptions_PREVIEW_TO_PAGE;

  /**
   * Preview mode including the bleed area.
   */
  readonly PREVIEW_TO_BLEED: ScreenModeOptions_PREVIEW_TO_BLEED;
  /**
   * Preview mode including the bleed area.
   */
  readonly previewToBleed: ScreenModeOptions_PREVIEW_TO_BLEED;
  /**
   * Preview mode including the bleed area.
   */
  readonly previewtobleed: ScreenModeOptions_PREVIEW_TO_BLEED;

  /**
   * Preview mode including the slug area.
   */
  readonly PREVIEW_TO_SLUG: ScreenModeOptions_PREVIEW_TO_SLUG;
  /**
   * Preview mode including the slug area.
   */
  readonly previewToSlug: ScreenModeOptions_PREVIEW_TO_SLUG;
  /**
   * Preview mode including the slug area.
   */
  readonly previewtoslug: ScreenModeOptions_PREVIEW_TO_SLUG;

  /**
   * Preview mode with editing turned off. Mouse clicks and arrow keys will move to previous or next spread.
   */
  readonly PRESENTATION_PREVIEW: ScreenModeOptions_PRESENTATION_PREVIEW;
  /**
   * Preview mode with editing turned off. Mouse clicks and arrow keys will move to previous or next spread.
   */
  readonly presentationPreview: ScreenModeOptions_PRESENTATION_PREVIEW;
  /**
   * Preview mode with editing turned off. Mouse clicks and arrow keys will move to previous or next spread.
   */
  readonly presentationpreview: ScreenModeOptions_PRESENTATION_PREVIEW;

}
