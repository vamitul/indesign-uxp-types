/**
 * LibraryPanelViews.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LibraryPanelViews: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LibraryPanelViews extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LibraryPanelViews>): boolean;

  /**
   * @internal **WARNING:** `__LibraryPanelViews` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LibraryPanelViews]: never;
}


/**
 * List view.
 */
interface LibraryPanelViews_LIST_VIEW extends LibraryPanelViews {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699501673;
}

/**
 * Thumbnail view.
 */
interface LibraryPanelViews_THUMBNAIL_VIEW extends LibraryPanelViews {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700030550;
}

/**
 * Large thumbnail view.
 */
interface LibraryPanelViews_LARGE_THUMBNAIL_VIEW extends LibraryPanelViews {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1699501142;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The display view of an InDesign object Library panel.
 */
export declare namespace LibraryPanelViews {
/**
 * List view.
 */
type LIST_VIEW = LibraryPanelViews_LIST_VIEW;

/**
 * Thumbnail view.
 */
type THUMBNAIL_VIEW = LibraryPanelViews_THUMBNAIL_VIEW;

/**
 * Large thumbnail view.
 */
type LARGE_THUMBNAIL_VIEW = LibraryPanelViews_LARGE_THUMBNAIL_VIEW;

}
/**
 * The display view of an InDesign object Library panel.
 */
export declare const LibraryPanelViews: typeof Enumeration & {

  /**
   * List view.
   */
  readonly LIST_VIEW: LibraryPanelViews_LIST_VIEW;
  /**
   * List view.
   */
  readonly listView: LibraryPanelViews_LIST_VIEW;
  /**
   * List view.
   */
  readonly listview: LibraryPanelViews_LIST_VIEW;

  /**
   * Thumbnail view.
   */
  readonly THUMBNAIL_VIEW: LibraryPanelViews_THUMBNAIL_VIEW;
  /**
   * Thumbnail view.
   */
  readonly thumbnailView: LibraryPanelViews_THUMBNAIL_VIEW;
  /**
   * Thumbnail view.
   */
  readonly thumbnailview: LibraryPanelViews_THUMBNAIL_VIEW;

  /**
   * Large thumbnail view.
   */
  readonly LARGE_THUMBNAIL_VIEW: LibraryPanelViews_LARGE_THUMBNAIL_VIEW;
  /**
   * Large thumbnail view.
   */
  readonly largeThumbnailView: LibraryPanelViews_LARGE_THUMBNAIL_VIEW;
  /**
   * Large thumbnail view.
   */
  readonly largethumbnailview: LibraryPanelViews_LARGE_THUMBNAIL_VIEW;

}
