/**
 * PageTransitionTypeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageTransitionTypeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageTransitionTypeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageTransitionTypeOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageTransitionTypeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageTransitionTypeOptions]: never;
}


/**
 * No page transition applied. 
 */
interface PageTransitionTypeOptions_NONE extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * The Blinds page transition.
 */
interface PageTransitionTypeOptions_BLINDS_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667372;
}

/**
 * The Box page transition.
 */
interface PageTransitionTypeOptions_BOX_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667384;
}

/**
 * The Comb page transition. 
 */
interface PageTransitionTypeOptions_COMB_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667618;
}

/**
 * The Cover page transition. 
 */
interface PageTransitionTypeOptions_COVER_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667638;
}

/**
 * The Dissolve page transition. 
 */
interface PageTransitionTypeOptions_DISSOLVE_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886667891;
}

/**
 * The Fade page transition. 
 */
interface PageTransitionTypeOptions_FADE_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886668388;
}

/**
 * The Push page transition. 
 */
interface PageTransitionTypeOptions_PUSH_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886670963;
}

/**
 * The Split page transition. 
 */
interface PageTransitionTypeOptions_SPLIT_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886671728;
}

/**
 * The Uncover page transition. 
 */
interface PageTransitionTypeOptions_UNCOVER_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886672227;
}

/**
 * The Wipe page transition. 
 */
interface PageTransitionTypeOptions_WIPE_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886672752;
}

/**
 * The Zoom In page transition. 
 */
interface PageTransitionTypeOptions_ZOOM_IN_TRANSITION extends PageTransitionTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886673481;
}

/**
 * The Zoom Out page transition. 
 */
interface PageTransitionTypeOptions_ZOOM_OUT_TRANSITION extends PageTransitionTypeOptions {
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
 * The animation played when turning a page in an interactive document.
 */
export declare namespace PageTransitionTypeOptions {
/**
 * No page transition applied. 
 */
type NONE = PageTransitionTypeOptions_NONE;

/**
 * The Blinds page transition.
 */
type BLINDS_TRANSITION = PageTransitionTypeOptions_BLINDS_TRANSITION;

/**
 * The Box page transition.
 */
type BOX_TRANSITION = PageTransitionTypeOptions_BOX_TRANSITION;

/**
 * The Comb page transition. 
 */
type COMB_TRANSITION = PageTransitionTypeOptions_COMB_TRANSITION;

/**
 * The Cover page transition. 
 */
type COVER_TRANSITION = PageTransitionTypeOptions_COVER_TRANSITION;

/**
 * The Dissolve page transition. 
 */
type DISSOLVE_TRANSITION = PageTransitionTypeOptions_DISSOLVE_TRANSITION;

/**
 * The Fade page transition. 
 */
type FADE_TRANSITION = PageTransitionTypeOptions_FADE_TRANSITION;

/**
 * The Push page transition. 
 */
type PUSH_TRANSITION = PageTransitionTypeOptions_PUSH_TRANSITION;

/**
 * The Split page transition. 
 */
type SPLIT_TRANSITION = PageTransitionTypeOptions_SPLIT_TRANSITION;

/**
 * The Uncover page transition. 
 */
type UNCOVER_TRANSITION = PageTransitionTypeOptions_UNCOVER_TRANSITION;

/**
 * The Wipe page transition. 
 */
type WIPE_TRANSITION = PageTransitionTypeOptions_WIPE_TRANSITION;

/**
 * The Zoom In page transition. 
 */
type ZOOM_IN_TRANSITION = PageTransitionTypeOptions_ZOOM_IN_TRANSITION;

/**
 * The Zoom Out page transition. 
 */
type ZOOM_OUT_TRANSITION = PageTransitionTypeOptions_ZOOM_OUT_TRANSITION;

}
/**
 * The animation played when turning a page in an interactive document.
 */
export declare const PageTransitionTypeOptions: typeof Enumeration & {

  /**
   * No page transition applied. 
   */
  readonly NONE: PageTransitionTypeOptions_NONE;
  /**
   * No page transition applied. 
   */
  readonly none: PageTransitionTypeOptions_NONE;

  /**
   * The Blinds page transition.
   */
  readonly BLINDS_TRANSITION: PageTransitionTypeOptions_BLINDS_TRANSITION;
  /**
   * The Blinds page transition.
   */
  readonly blindsTransition: PageTransitionTypeOptions_BLINDS_TRANSITION;
  /**
   * The Blinds page transition.
   */
  readonly blindstransition: PageTransitionTypeOptions_BLINDS_TRANSITION;

  /**
   * The Box page transition.
   */
  readonly BOX_TRANSITION: PageTransitionTypeOptions_BOX_TRANSITION;
  /**
   * The Box page transition.
   */
  readonly boxTransition: PageTransitionTypeOptions_BOX_TRANSITION;
  /**
   * The Box page transition.
   */
  readonly boxtransition: PageTransitionTypeOptions_BOX_TRANSITION;

  /**
   * The Comb page transition. 
   */
  readonly COMB_TRANSITION: PageTransitionTypeOptions_COMB_TRANSITION;
  /**
   * The Comb page transition. 
   */
  readonly combTransition: PageTransitionTypeOptions_COMB_TRANSITION;
  /**
   * The Comb page transition. 
   */
  readonly combtransition: PageTransitionTypeOptions_COMB_TRANSITION;

  /**
   * The Cover page transition. 
   */
  readonly COVER_TRANSITION: PageTransitionTypeOptions_COVER_TRANSITION;
  /**
   * The Cover page transition. 
   */
  readonly coverTransition: PageTransitionTypeOptions_COVER_TRANSITION;
  /**
   * The Cover page transition. 
   */
  readonly covertransition: PageTransitionTypeOptions_COVER_TRANSITION;

  /**
   * The Dissolve page transition. 
   */
  readonly DISSOLVE_TRANSITION: PageTransitionTypeOptions_DISSOLVE_TRANSITION;
  /**
   * The Dissolve page transition. 
   */
  readonly dissolveTransition: PageTransitionTypeOptions_DISSOLVE_TRANSITION;
  /**
   * The Dissolve page transition. 
   */
  readonly dissolvetransition: PageTransitionTypeOptions_DISSOLVE_TRANSITION;

  /**
   * The Fade page transition. 
   */
  readonly FADE_TRANSITION: PageTransitionTypeOptions_FADE_TRANSITION;
  /**
   * The Fade page transition. 
   */
  readonly fadeTransition: PageTransitionTypeOptions_FADE_TRANSITION;
  /**
   * The Fade page transition. 
   */
  readonly fadetransition: PageTransitionTypeOptions_FADE_TRANSITION;

  /**
   * The Push page transition. 
   */
  readonly PUSH_TRANSITION: PageTransitionTypeOptions_PUSH_TRANSITION;
  /**
   * The Push page transition. 
   */
  readonly pushTransition: PageTransitionTypeOptions_PUSH_TRANSITION;
  /**
   * The Push page transition. 
   */
  readonly pushtransition: PageTransitionTypeOptions_PUSH_TRANSITION;

  /**
   * The Split page transition. 
   */
  readonly SPLIT_TRANSITION: PageTransitionTypeOptions_SPLIT_TRANSITION;
  /**
   * The Split page transition. 
   */
  readonly splitTransition: PageTransitionTypeOptions_SPLIT_TRANSITION;
  /**
   * The Split page transition. 
   */
  readonly splittransition: PageTransitionTypeOptions_SPLIT_TRANSITION;

  /**
   * The Uncover page transition. 
   */
  readonly UNCOVER_TRANSITION: PageTransitionTypeOptions_UNCOVER_TRANSITION;
  /**
   * The Uncover page transition. 
   */
  readonly uncoverTransition: PageTransitionTypeOptions_UNCOVER_TRANSITION;
  /**
   * The Uncover page transition. 
   */
  readonly uncovertransition: PageTransitionTypeOptions_UNCOVER_TRANSITION;

  /**
   * The Wipe page transition. 
   */
  readonly WIPE_TRANSITION: PageTransitionTypeOptions_WIPE_TRANSITION;
  /**
   * The Wipe page transition. 
   */
  readonly wipeTransition: PageTransitionTypeOptions_WIPE_TRANSITION;
  /**
   * The Wipe page transition. 
   */
  readonly wipetransition: PageTransitionTypeOptions_WIPE_TRANSITION;

  /**
   * The Zoom In page transition. 
   */
  readonly ZOOM_IN_TRANSITION: PageTransitionTypeOptions_ZOOM_IN_TRANSITION;
  /**
   * The Zoom In page transition. 
   */
  readonly zoomInTransition: PageTransitionTypeOptions_ZOOM_IN_TRANSITION;
  /**
   * The Zoom In page transition. 
   */
  readonly zoomintransition: PageTransitionTypeOptions_ZOOM_IN_TRANSITION;

  /**
   * The Zoom Out page transition. 
   */
  readonly ZOOM_OUT_TRANSITION: PageTransitionTypeOptions_ZOOM_OUT_TRANSITION;
  /**
   * The Zoom Out page transition. 
   */
  readonly zoomOutTransition: PageTransitionTypeOptions_ZOOM_OUT_TRANSITION;
  /**
   * The Zoom Out page transition. 
   */
  readonly zoomouttransition: PageTransitionTypeOptions_ZOOM_OUT_TRANSITION;

}
