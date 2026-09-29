/**
 * ContentPlacerObject.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { PageItem } from './PageItem';

/**
 * The content-linking placer used to load page items for link-aware pasting
 * or placement (Edit > Content Placer workflows).
 */
export interface ContentPlacerObject<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ContentPlacerObject';

  /** Resolves the proxy into the individual {@link ContentPlacerObject} objects it stands for. */
  getElements(): ContentPlacerObject<'single'>[];

  /** If `true`, the Content Placer currently holds loaded content. */
  readonly loaded: Read<M, boolean>;

  /**
   * Loads the Content Placer with one or more page items.
   * @param linkPageItems Whether to link the page items in the Content Placer. Overrides `linkStories` when `true`. Defaults to `false`.
   * @param linkStories Whether to link stories in the Content Placer (only applies to a single story; page-item links are also created for more than one item). Defaults to `false`.
   * @param mapStyles Whether to map styles in the Content Placer. Defaults to `false`.
   * @param showingOptions Whether to display the link options dialog. Defaults to `false`.
   */
  load(
    pageItems: PageItem | PageItem[],
    linkPageItems?: boolean,
    linkStories?: boolean,
    mapStyles?: boolean,
    showingOptions?: boolean,
  ): void;
}
