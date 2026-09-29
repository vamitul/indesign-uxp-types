/**
 * HyperlinkTextDestination.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { InsertionPoint } from './InsertionPoint';
import type { Text } from './Text';
import type { Hyperlink } from './Hyperlink';
import type { ParagraphDestination } from './ParagraphDestination';

/**
 * A {@link Hyperlink} destination anchored to a specific {@link InsertionPoint}
 * or text range within the document's stories.
 */
export interface HyperlinkTextDestination<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name — reports `'ParagraphDestination'` when the destination is actually a {@link ParagraphDestination}. */
  readonly constructorName: 'HyperlinkTextDestination' | 'ParagraphDestination';

  /** Resolves the proxy into the individual {@link HyperlinkTextDestination} objects it stands for. */
  getElements(): HyperlinkTextDestination<'single'>[];

  /** The unique ID of the destination, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** Whether the hyperlink is hidden. */
  readonly hidden: Read<M, boolean>;

  /** The insertion point that the hyperlink points to. Accepts a {@link Text} range, normalized to its start. */
  get destinationText(): Read<M, InsertionPoint>;
  set destinationText(value: InsertionPoint | Text);

  /** Deletes the destination. */
  remove(): Read<M, void>;

  /** Jumps to the hyperlink destination. */
  showDestination(): Read<M, void>;
}
