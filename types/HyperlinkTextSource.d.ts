/**
 * HyperlinkTextSource.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Text } from './Text';
import type { CharacterStyle } from './CharacterStyle';
import type { Hyperlink } from './Hyperlink';
import type { CrossReferenceSource } from './CrossReferenceSource';

/**
 * A {@link Hyperlink} source that is a range of text or an insertion point —
 * the clickable "hotspot" leading to the hyperlink's destination.
 */
export interface HyperlinkTextSource<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name — reports the specific kind, such as `'CrossReferenceSource'` when the object is a {@link CrossReferenceSource}. */
  readonly constructorName: 'HyperlinkTextSource' | 'CrossReferenceSource';

  /** Resolves the proxy into the individual {@link HyperlinkTextSource} objects it stands for. */
  getElements(): HyperlinkTextSource<'single'>[];

  /** The unique ID of the source, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** Whether the hyperlink is hidden. */
  readonly hidden: Read<M, boolean>;

  /** The hyperlinked text or insertion point. */
  get sourceText(): Read<M, Text>;
  set sourceText(value: Text);

  /** The character style applied to the hyperlinked text. Accepts a {@link CharacterStyle} or its name. */
  get appliedCharacterStyle(): Read<M, CharacterStyle>;
  set appliedCharacterStyle(value: CharacterStyle | string);

  /** Deletes the source. */
  remove(): Read<M, void>;

  /** Jumps to the hyperlink source. */
  showSource(): Read<M, void>;
}
