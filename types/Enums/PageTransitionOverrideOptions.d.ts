/**
 * PageTransitionOverrideOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageTransitionOverrideOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageTransitionOverrideOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageTransitionOverrideOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageTransitionOverrideOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageTransitionOverrideOptions]: never;
}


/**
 * Use the page transition from the document.
 */
interface PageTransitionOverrideOptions_FROM_DOCUMENT extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1718764655;
}

/**
 * No page transition applied. 
 */
interface PageTransitionOverrideOptions_NONE extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * The Blinds page transition.
 */
interface PageTransitionOverrideOptions_BLINDS_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667372;
}

/**
 * The Box page transition.
 */
interface PageTransitionOverrideOptions_BOX_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667384;
}

/**
 * The Comb page transition. 
 */
interface PageTransitionOverrideOptions_COMB_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667618;
}

/**
 * The Cover page transition. 
 */
interface PageTransitionOverrideOptions_COVER_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667638;
}

/**
 * The Dissolve page transition. 
 */
interface PageTransitionOverrideOptions_DISSOLVE_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667891;
}

/**
 * The Fade page transition. 
 */
interface PageTransitionOverrideOptions_FADE_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886668388;
}

/**
 * The Page Turn page transition (SWF only). 
 */
interface PageTransitionOverrideOptions_PAGE_TURN_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886670932;
}

/**
 * The Push page transition. 
 */
interface PageTransitionOverrideOptions_PUSH_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886670963;
}

/**
 * The Split page transition. 
 */
interface PageTransitionOverrideOptions_SPLIT_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886671728;
}

/**
 * The Uncover page transition. 
 */
interface PageTransitionOverrideOptions_UNCOVER_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886672227;
}

/**
 * The Wipe page transition. 
 */
interface PageTransitionOverrideOptions_WIPE_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886672752;
}

/**
 * The Zoom In page transition. 
 */
interface PageTransitionOverrideOptions_ZOOM_IN_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886673481;
}

/**
 * The Zoom Out page transition. 
 */
interface PageTransitionOverrideOptions_ZOOM_OUT_TRANSITION extends PageTransitionOverrideOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886673487;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Page transition to use as an override when exporting.
 */
export declare namespace PageTransitionOverrideOptions {
/**
 * Use the page transition from the document.
 */
type FROM_DOCUMENT = PageTransitionOverrideOptions_FROM_DOCUMENT;

/**
 * No page transition applied. 
 */
type NONE = PageTransitionOverrideOptions_NONE;

/**
 * The Blinds page transition.
 */
type BLINDS_TRANSITION = PageTransitionOverrideOptions_BLINDS_TRANSITION;

/**
 * The Box page transition.
 */
type BOX_TRANSITION = PageTransitionOverrideOptions_BOX_TRANSITION;

/**
 * The Comb page transition. 
 */
type COMB_TRANSITION = PageTransitionOverrideOptions_COMB_TRANSITION;

/**
 * The Cover page transition. 
 */
type COVER_TRANSITION = PageTransitionOverrideOptions_COVER_TRANSITION;

/**
 * The Dissolve page transition. 
 */
type DISSOLVE_TRANSITION = PageTransitionOverrideOptions_DISSOLVE_TRANSITION;

/**
 * The Fade page transition. 
 */
type FADE_TRANSITION = PageTransitionOverrideOptions_FADE_TRANSITION;

/**
 * The Page Turn page transition (SWF only). 
 */
type PAGE_TURN_TRANSITION = PageTransitionOverrideOptions_PAGE_TURN_TRANSITION;

/**
 * The Push page transition. 
 */
type PUSH_TRANSITION = PageTransitionOverrideOptions_PUSH_TRANSITION;

/**
 * The Split page transition. 
 */
type SPLIT_TRANSITION = PageTransitionOverrideOptions_SPLIT_TRANSITION;

/**
 * The Uncover page transition. 
 */
type UNCOVER_TRANSITION = PageTransitionOverrideOptions_UNCOVER_TRANSITION;

/**
 * The Wipe page transition. 
 */
type WIPE_TRANSITION = PageTransitionOverrideOptions_WIPE_TRANSITION;

/**
 * The Zoom In page transition. 
 */
type ZOOM_IN_TRANSITION = PageTransitionOverrideOptions_ZOOM_IN_TRANSITION;

/**
 * The Zoom Out page transition. 
 */
type ZOOM_OUT_TRANSITION = PageTransitionOverrideOptions_ZOOM_OUT_TRANSITION;

}
/**
 * Page transition to use as an override when exporting.
 */
export declare const PageTransitionOverrideOptions: typeof Enumeration & {

  /**
   * Use the page transition from the document.
   */
  readonly FROM_DOCUMENT: PageTransitionOverrideOptions_FROM_DOCUMENT;
  /**
   * Use the page transition from the document.
   */
  readonly fromDocument: PageTransitionOverrideOptions_FROM_DOCUMENT;
  /**
   * Use the page transition from the document.
   */
  readonly fromdocument: PageTransitionOverrideOptions_FROM_DOCUMENT;

  /**
   * No page transition applied. 
   */
  readonly NONE: PageTransitionOverrideOptions_NONE;
  /**
   * No page transition applied. 
   */
  readonly none: PageTransitionOverrideOptions_NONE;

  /**
   * The Blinds page transition.
   */
  readonly BLINDS_TRANSITION: PageTransitionOverrideOptions_BLINDS_TRANSITION;
  /**
   * The Blinds page transition.
   */
  readonly blindsTransition: PageTransitionOverrideOptions_BLINDS_TRANSITION;
  /**
   * The Blinds page transition.
   */
  readonly blindstransition: PageTransitionOverrideOptions_BLINDS_TRANSITION;

  /**
   * The Box page transition.
   */
  readonly BOX_TRANSITION: PageTransitionOverrideOptions_BOX_TRANSITION;
  /**
   * The Box page transition.
   */
  readonly boxTransition: PageTransitionOverrideOptions_BOX_TRANSITION;
  /**
   * The Box page transition.
   */
  readonly boxtransition: PageTransitionOverrideOptions_BOX_TRANSITION;

  /**
   * The Comb page transition. 
   */
  readonly COMB_TRANSITION: PageTransitionOverrideOptions_COMB_TRANSITION;
  /**
   * The Comb page transition. 
   */
  readonly combTransition: PageTransitionOverrideOptions_COMB_TRANSITION;
  /**
   * The Comb page transition. 
   */
  readonly combtransition: PageTransitionOverrideOptions_COMB_TRANSITION;

  /**
   * The Cover page transition. 
   */
  readonly COVER_TRANSITION: PageTransitionOverrideOptions_COVER_TRANSITION;
  /**
   * The Cover page transition. 
   */
  readonly coverTransition: PageTransitionOverrideOptions_COVER_TRANSITION;
  /**
   * The Cover page transition. 
   */
  readonly covertransition: PageTransitionOverrideOptions_COVER_TRANSITION;

  /**
   * The Dissolve page transition. 
   */
  readonly DISSOLVE_TRANSITION: PageTransitionOverrideOptions_DISSOLVE_TRANSITION;
  /**
   * The Dissolve page transition. 
   */
  readonly dissolveTransition: PageTransitionOverrideOptions_DISSOLVE_TRANSITION;
  /**
   * The Dissolve page transition. 
   */
  readonly dissolvetransition: PageTransitionOverrideOptions_DISSOLVE_TRANSITION;

  /**
   * The Fade page transition. 
   */
  readonly FADE_TRANSITION: PageTransitionOverrideOptions_FADE_TRANSITION;
  /**
   * The Fade page transition. 
   */
  readonly fadeTransition: PageTransitionOverrideOptions_FADE_TRANSITION;
  /**
   * The Fade page transition. 
   */
  readonly fadetransition: PageTransitionOverrideOptions_FADE_TRANSITION;

  /**
   * The Page Turn page transition (SWF only). 
   */
  readonly PAGE_TURN_TRANSITION: PageTransitionOverrideOptions_PAGE_TURN_TRANSITION;
  /**
   * The Page Turn page transition (SWF only). 
   */
  readonly pageTurnTransition: PageTransitionOverrideOptions_PAGE_TURN_TRANSITION;
  /**
   * The Page Turn page transition (SWF only). 
   */
  readonly pageturntransition: PageTransitionOverrideOptions_PAGE_TURN_TRANSITION;

  /**
   * The Push page transition. 
   */
  readonly PUSH_TRANSITION: PageTransitionOverrideOptions_PUSH_TRANSITION;
  /**
   * The Push page transition. 
   */
  readonly pushTransition: PageTransitionOverrideOptions_PUSH_TRANSITION;
  /**
   * The Push page transition. 
   */
  readonly pushtransition: PageTransitionOverrideOptions_PUSH_TRANSITION;

  /**
   * The Split page transition. 
   */
  readonly SPLIT_TRANSITION: PageTransitionOverrideOptions_SPLIT_TRANSITION;
  /**
   * The Split page transition. 
   */
  readonly splitTransition: PageTransitionOverrideOptions_SPLIT_TRANSITION;
  /**
   * The Split page transition. 
   */
  readonly splittransition: PageTransitionOverrideOptions_SPLIT_TRANSITION;

  /**
   * The Uncover page transition. 
   */
  readonly UNCOVER_TRANSITION: PageTransitionOverrideOptions_UNCOVER_TRANSITION;
  /**
   * The Uncover page transition. 
   */
  readonly uncoverTransition: PageTransitionOverrideOptions_UNCOVER_TRANSITION;
  /**
   * The Uncover page transition. 
   */
  readonly uncovertransition: PageTransitionOverrideOptions_UNCOVER_TRANSITION;

  /**
   * The Wipe page transition. 
   */
  readonly WIPE_TRANSITION: PageTransitionOverrideOptions_WIPE_TRANSITION;
  /**
   * The Wipe page transition. 
   */
  readonly wipeTransition: PageTransitionOverrideOptions_WIPE_TRANSITION;
  /**
   * The Wipe page transition. 
   */
  readonly wipetransition: PageTransitionOverrideOptions_WIPE_TRANSITION;

  /**
   * The Zoom In page transition. 
   */
  readonly ZOOM_IN_TRANSITION: PageTransitionOverrideOptions_ZOOM_IN_TRANSITION;
  /**
   * The Zoom In page transition. 
   */
  readonly zoomInTransition: PageTransitionOverrideOptions_ZOOM_IN_TRANSITION;
  /**
   * The Zoom In page transition. 
   */
  readonly zoomintransition: PageTransitionOverrideOptions_ZOOM_IN_TRANSITION;

  /**
   * The Zoom Out page transition. 
   */
  readonly ZOOM_OUT_TRANSITION: PageTransitionOverrideOptions_ZOOM_OUT_TRANSITION;
  /**
   * The Zoom Out page transition. 
   */
  readonly zoomOutTransition: PageTransitionOverrideOptions_ZOOM_OUT_TRANSITION;
  /**
   * The Zoom Out page transition. 
   */
  readonly zoomouttransition: PageTransitionOverrideOptions_ZOOM_OUT_TRANSITION;

}
