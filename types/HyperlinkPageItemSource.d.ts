/**
 * HyperlinkPageItemSource.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { PageItem } from './PageItem';
import type { Hyperlink } from './Hyperlink';

/**
 * A {@link Hyperlink} source that is a specific page item — a rectangle,
 * image, group, or any other {@link PageItem} — rather than a text range.
 */
export interface HyperlinkPageItemSource<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkPageItemSource';

  /** Resolves the proxy into the individual {@link HyperlinkPageItemSource} objects it stands for. */
  getElements(): HyperlinkPageItemSource<'single'>[];

  /** The unique ID of the source, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** Whether the hyperlink is hidden. */
  readonly hidden: Read<M, boolean>;

  /** The page item that acts as the hyperlink's clickable source. */
  get sourcePageItem(): Read<M, PageItem>;
  set sourcePageItem(value: PageItem);

  /** Deletes the source. */
  remove(): Read<M, void>;

  /** Jumps to the hyperlink source. */
  showSource(): Read<M, void>;
}
