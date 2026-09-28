/**
 * ArticleMember.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Article } from './Article';
import type { PageItem } from './PageItem';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A single page item's membership entry within an {@link Article}.
 */
export interface ArticleMember<M extends Mode = 'single'>
  extends EventTargetDOMObject<Article, M>,
    IndexedDOMObject<Article, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ArticleMember';

  /** Resolves the proxy into the individual {@link ArticleMember} objects it stands for. */
  getElements(): ArticleMember<'single'>[];

  /** The underlying page item. */
  readonly itemRef: Read<M, PageItem>;

  /** The unique ID of the article member. */
  readonly id: Read<M, number>;

  /** Removes this member from the article (the underlying page item is not deleted). */
  remove(): Read<M, void>;

  /**
   * Moves the member to the specified location within the article.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference member. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: ArticleMember): Read<M, ArticleMember>;
}
