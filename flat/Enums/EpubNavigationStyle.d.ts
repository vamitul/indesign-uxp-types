/**
 * EpubNavigationStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EpubNavigationStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EpubNavigationStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EpubNavigationStyle>): boolean;

  /**
   * @internal **WARNING:** `__EpubNavigationStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EpubNavigationStyle]: never;
}


/**
 * No navigation.
 */
interface EpubNavigationStyle_NO_NAVIGATION extends EpubNavigationStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701736054;
}

/**
 * File name based navigation
 */
interface EpubNavigationStyle_FILENAME_NAVIGATION extends EpubNavigationStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701211766;
}

/**
 * TOC style based navigation
 */
interface EpubNavigationStyle_TOC_STYLE_NAVIGATION extends EpubNavigationStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1702129270;
}

/**
 * Bookmarks based navigation
 */
interface EpubNavigationStyle_BOOKMARKS_NAVIGATION extends EpubNavigationStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700949622;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Choices for epub navigation style.
 */
export declare namespace EpubNavigationStyle {
/**
 * No navigation.
 */
type NO_NAVIGATION = EpubNavigationStyle_NO_NAVIGATION;

/**
 * File name based navigation
 */
type FILENAME_NAVIGATION = EpubNavigationStyle_FILENAME_NAVIGATION;

/**
 * TOC style based navigation
 */
type TOC_STYLE_NAVIGATION = EpubNavigationStyle_TOC_STYLE_NAVIGATION;

/**
 * Bookmarks based navigation
 */
type BOOKMARKS_NAVIGATION = EpubNavigationStyle_BOOKMARKS_NAVIGATION;

}
/**
 * Choices for epub navigation style.
 */
export declare const EpubNavigationStyle: typeof Enumeration & {

  /**
   * No navigation.
   */
  readonly NO_NAVIGATION: EpubNavigationStyle_NO_NAVIGATION;
  /**
   * No navigation.
   */
  readonly noNavigation: EpubNavigationStyle_NO_NAVIGATION;
  /**
   * No navigation.
   */
  readonly nonavigation: EpubNavigationStyle_NO_NAVIGATION;

  /**
   * File name based navigation
   */
  readonly FILENAME_NAVIGATION: EpubNavigationStyle_FILENAME_NAVIGATION;
  /**
   * File name based navigation
   */
  readonly filenameNavigation: EpubNavigationStyle_FILENAME_NAVIGATION;
  /**
   * File name based navigation
   */
  readonly filenamenavigation: EpubNavigationStyle_FILENAME_NAVIGATION;

  /**
   * TOC style based navigation
   */
  readonly TOC_STYLE_NAVIGATION: EpubNavigationStyle_TOC_STYLE_NAVIGATION;
  /**
   * TOC style based navigation
   */
  readonly tocStyleNavigation: EpubNavigationStyle_TOC_STYLE_NAVIGATION;
  /**
   * TOC style based navigation
   */
  readonly tocstylenavigation: EpubNavigationStyle_TOC_STYLE_NAVIGATION;

  /**
   * Bookmarks based navigation
   */
  readonly BOOKMARKS_NAVIGATION: EpubNavigationStyle_BOOKMARKS_NAVIGATION;
  /**
   * Bookmarks based navigation
   */
  readonly bookmarksNavigation: EpubNavigationStyle_BOOKMARKS_NAVIGATION;
  /**
   * Bookmarks based navigation
   */
  readonly bookmarksnavigation: EpubNavigationStyle_BOOKMARKS_NAVIGATION;

}
