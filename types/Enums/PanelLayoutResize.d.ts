/**
 * PanelLayoutResize.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PanelLayoutResize: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PanelLayoutResize extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PanelLayoutResize>): boolean;

  /**
   * @internal **WARNING:** `__PanelLayoutResize` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PanelLayoutResize]: never;
}


/**
 * Resize panel areas proportionally.
 */
interface PanelLayoutResize_PROPORTIONAL_RESIZE extends PanelLayoutResize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886417010;
}

/**
 * Do not resize document pages panel area when resizing panel.
 */
interface PanelLayoutResize_PAGES_FIXED extends PanelLayoutResize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886414456;
}

/**
 * Do not resize master pages panel area when resizing panel.
 */
interface PanelLayoutResize_MASTERS_FIXED extends PanelLayoutResize {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886416230;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which part of the Pages panel keeps its size when the panel is resized.
 */
export declare namespace PanelLayoutResize {
/**
 * Resize panel areas proportionally.
 */
type PROPORTIONAL_RESIZE = PanelLayoutResize_PROPORTIONAL_RESIZE;

/**
 * Do not resize document pages panel area when resizing panel.
 */
type PAGES_FIXED = PanelLayoutResize_PAGES_FIXED;

/**
 * Do not resize master pages panel area when resizing panel.
 */
type MASTERS_FIXED = PanelLayoutResize_MASTERS_FIXED;

}
/**
 * Which part of the Pages panel keeps its size when the panel is resized.
 */
export declare const PanelLayoutResize: typeof Enumeration & {

  /**
   * Resize panel areas proportionally.
   */
  readonly PROPORTIONAL_RESIZE: PanelLayoutResize_PROPORTIONAL_RESIZE;
  /**
   * Resize panel areas proportionally.
   */
  readonly proportionalResize: PanelLayoutResize_PROPORTIONAL_RESIZE;
  /**
   * Resize panel areas proportionally.
   */
  readonly proportionalresize: PanelLayoutResize_PROPORTIONAL_RESIZE;

  /**
   * Do not resize document pages panel area when resizing panel.
   */
  readonly PAGES_FIXED: PanelLayoutResize_PAGES_FIXED;
  /**
   * Do not resize document pages panel area when resizing panel.
   */
  readonly pagesFixed: PanelLayoutResize_PAGES_FIXED;
  /**
   * Do not resize document pages panel area when resizing panel.
   */
  readonly pagesfixed: PanelLayoutResize_PAGES_FIXED;

  /**
   * Do not resize master pages panel area when resizing panel.
   */
  readonly MASTERS_FIXED: PanelLayoutResize_MASTERS_FIXED;
  /**
   * Do not resize master pages panel area when resizing panel.
   */
  readonly mastersFixed: PanelLayoutResize_MASTERS_FIXED;
  /**
   * Do not resize master pages panel area when resizing panel.
   */
  readonly mastersfixed: PanelLayoutResize_MASTERS_FIXED;

}
