/**
 * ArticleChildren.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { ArticleChild } from './ArticleChild';
import type { Article } from './Article';

/**
 * A collection of {@link ArticleChild} objects that are part of an {@link Article}.
 * This typically includes items within a grouped member or other hierarchical
 * structures belonging to the article.
 *
 * @collection ArticleChild
 */
export interface ArticleChildren
  extends BaseCollection<ArticleChild, ArticleChild, ArticleChild<'plural'>>, IdCollection<ArticleChild> {
  /** The object's DOM class name. */
  readonly constructorName: 'ArticleChildren';
}
