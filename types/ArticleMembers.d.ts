/**
 * ArticleMembers.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { LocationOptions } from './Enums/LocationOptions';
import type { PageItem } from './PageItem';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { ArticleMember } from './ArticleMember';
import type { Article } from './Article';

/**
 * A collection of {@link ArticleMember} objects belonging to an {@link Article}.
 * Provides ordered access to the page items that are members of the article,
 * used for controlling reading order in exported formats such as PDF and EPUB.
 *
 * @collection ArticleMember
 */
export interface ArticleMembers
  extends BaseCollection<ArticleMember, ArticleMember, ArticleMember<'plural'>>, IdCollection<ArticleMember> {
  /** The object's DOM class name. */
  readonly constructorName: 'ArticleMembers';

  /**
   * Adds a page item to the article as a new {@link ArticleMember}.
   *
   * When `at` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}, the
   * `reference` parameter is required and specifies the existing member relative to which the
   * new member is inserted.
   * @param itemRef The page item (e.g., TextFrame, Rectangle, Group) to add to the article.
   * @param at The location relative to the `reference` member. Required if `at` is `BEFORE` or `AFTER`.
   * @param reference The existing {@link ArticleMember} relative to which the new member is inserted.
   * @param withProperties Initial values for properties of the new ArticleMember.
   */
  add(
    itemRef: PageItem,
    at: LocationOptions.BEFORE | LocationOptions.AFTER,
    reference: ArticleMember,
    withProperties?: PropertiesSetter<ArticleMember>,
  ): ArticleMember;

  /**
   * Adds a page item to the article as a new {@link ArticleMember}.
   *
   * @param itemRef The page item (e.g., TextFrame, Rectangle, Group) to add to the article.
   * @param at The location within the article. Defaults to {@link LocationOptions.AT_END}.
   * @param reference Ignored for these `at` values.
   * @param withProperties Initial values for properties of the new ArticleMember.
   */
  add(
    itemRef: PageItem,
    at?:
      | LocationOptions.AT_BEGINNING
      | LocationOptions.AT_END
      | LocationOptions.UNKNOWN,
    reference?: ArticleMember,
    withProperties?: PropertiesSetter<ArticleMember>,
  ): ArticleMember;
}
