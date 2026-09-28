/**
 * ArticleChild.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Group } from './Group';
import type { PageItem } from './PageItem';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Article } from './Article';

/**
 * An article-membership entry for one item nested inside a {@link Group} that
 * itself belongs to an {@link Article}.
 */
export interface ArticleChild<M extends Mode = 'single'>
  extends EventTargetDOMObject<Group, M>,
    IndexedDOMObject<Group, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ArticleChild';

  /** Resolves the proxy into the individual {@link ArticleChild} objects it stands for. */
  getElements(): ArticleChild<'single'>[];

  /** The underlying page item. */
  readonly itemRef: Read<M, PageItem>;

  /** The unique ID of the article child. */
  readonly id: Read<M, number>;

  /**
   * Moves the article child to the specified location.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference article child. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: ArticleChild): Read<M, ArticleChild>;
}
