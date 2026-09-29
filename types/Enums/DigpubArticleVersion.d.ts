/**
 * DigpubArticleVersion.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DigpubArticleVersion: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DigpubArticleVersion extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DigpubArticleVersion>): boolean;

  /**
   * @internal **WARNING:** `__DigpubArticleVersion` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DigpubArticleVersion]: never;
}


/**
 * Returns the plugin and article versions, in that order.
 */
interface DigpubArticleVersion_ALL extends DigpubArticleVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634495520;
}

/**
 * Returns the plugin version.
 */
interface DigpubArticleVersion_PLUGIN extends DigpubArticleVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685090412;
}

/**
 * Returns the article version.
 */
interface DigpubArticleVersion_ARTICLE extends DigpubArticleVersion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685078390;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which version information to retrieve for a digital publishing plugin and its
 * article.
 */
export declare namespace DigpubArticleVersion {
/**
 * Returns the plugin and article versions, in that order.
 */
type ALL = DigpubArticleVersion_ALL;

/**
 * Returns the plugin version.
 */
type PLUGIN = DigpubArticleVersion_PLUGIN;

/**
 * Returns the article version.
 */
type ARTICLE = DigpubArticleVersion_ARTICLE;

}
/**
 * Which version information to retrieve for a digital publishing plugin and its
 * article.
 */
export declare const DigpubArticleVersion: typeof Enumeration & {

  /**
   * Returns the plugin and article versions, in that order.
   */
  readonly ALL: DigpubArticleVersion_ALL;
  /**
   * Returns the plugin and article versions, in that order.
   */
  readonly all: DigpubArticleVersion_ALL;

  /**
   * Returns the plugin version.
   */
  readonly PLUGIN: DigpubArticleVersion_PLUGIN;
  /**
   * Returns the plugin version.
   */
  readonly plugin: DigpubArticleVersion_PLUGIN;

  /**
   * Returns the article version.
   */
  readonly ARTICLE: DigpubArticleVersion_ARTICLE;
  /**
   * Returns the article version.
   */
  readonly article: DigpubArticleVersion_ARTICLE;

}
