/**
 * Article.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { ArticleMembers } from './ArticleMembers';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * An entry in the Articles panel: a named, ordered set of page items used to
 * drive Article-based EPUB/HTML export order, independent of layer or z-order.
 */
export interface Article<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Article';

  /** Resolves the proxy into the individual {@link Article} objects it stands for. */
  getElements(): Article<'single'>[];

  /** The unique ID of the article. */
  readonly id: Read<M, number>;

  /** The page items belonging to this article. */
  readonly articleMembers: ArticleMembers;

  /** Whether the article is included when exporting. */
  get articleExportStatus(): Read<M, boolean>;
  set articleExportStatus(value: boolean);

  /** Deletes the article (its member page items are not deleted). */
  remove(): Read<M, void>;

  /**
   * Moves the article to the specified location.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference article. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: Article): Read<M, Article>;

  /** Adds every page item in the document to this article. */
  addDocumentContent(): Read<M, void>;
}
