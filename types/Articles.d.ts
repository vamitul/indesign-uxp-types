/**
 * Articles.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { LocationOptions } from './Enums/LocationOptions';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Article } from './Article';

/**
 * A collection of {@link Article} objects in an InDesign document.
 * Articles allow you to group and order page items independently of their layout position,
 * providing the structural basis for accessible PDFs, EPUBs, and HTML exports.
 *
 * @collection Article
 */
export interface Articles
  extends
    BaseCollection<Article, Article, Article<'plural'>>,
    IdCollection<Article>,
    NamedCollection<Article> {
  /** The object's DOM class name. */
  readonly constructorName: 'Articles';

  /**
   * Creates a new {@link Article} in the document.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the
   * `reference` parameter is required and specifies the existing article relative to which
   * the new article is inserted.
   * @param name The name for the new article.
   * @param articleExportStatus If `true`, the article is included when exporting to digital formats (PDF, EPUB, HTML). Defaults to `true`.
   * @param at The location relative to the `reference` article. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link Article} relative to which the new article is inserted.
   * @param withProperties Initial values for properties of the new Article.
   */
  add(
    name: string | undefined,
    articleExportStatus: boolean | undefined,
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: Article,
    withProperties?: PropertiesSetter<Article>,
  ): Article;

  /**
   * Creates a new {@link Article} in the document.
   *
   * Creates a new item from a properties bag alone.
   * @param withProperties Initial values for properties of the new item.
   */
  add(withProperties: PropertiesSetter<Article>): Article;

  add(
    name?: string,
    articleExportStatus?: boolean,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: Article,
    withProperties?: PropertiesSetter<Article>,
  ): Article;
}
