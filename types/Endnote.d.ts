/**
 * Endnote.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { InsertionPoint } from './InsertionPoint';
import type { Story } from './Story';
import type { XmlStory } from './XmlStory';
import type { Cell } from './Cell';
import type { Table } from './Table';
import type { EndnoteRange } from './EndnoteRange';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { Texts } from './Texts';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { Footnote } from './Footnote';
import type { Character } from './Character';
import type { Line } from './Line';
import type { Text } from './Text';
import type { TextColumn } from './TextColumn';
import type { TextStyleRange } from './TextStyleRange';
import type { Word } from './Word';

/**
 * A reference marker for an endnote — the anchor point in the main text.
 *
 * The endnote's own text content lives in the associated {@link EndnoteRange}, collected
 * together with other endnotes at the end of the story (via an {@link EndnoteTextFrame})
 * rather than inline like a {@link Footnote}.
 */
export interface Endnote<M extends Mode = 'single'>
  extends LabelableEventDOMObject<InsertionPoint | Story | XmlStory | Cell | Table, M>,
    IndexedDOMObject<InsertionPoint | Story | XmlStory | Cell | Table, M>,
    NamableDOMObject<InsertionPoint | Story | XmlStory | Cell | Table, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Endnote';

  /** Resolves the proxy into the individual {@link Endnote} objects it stands for. */
  getElements(): Endnote<'single'>[];

  /** The unique ID of the endnote, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The {@link InsertionPoint} in the parent story where the endnote marker sits. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** A collection of {@link TextColumn}s in the endnote marker's local text context. */
  readonly textColumns: TextColumns<Endnote>;

  /** A collection of {@link Text} objects spanning the endnote marker's local text context. */
  readonly texts: Texts<Endnote>;

  /** A collection of {@link TextStyleRange}s in the endnote marker's local text context. */
  readonly textStyleRanges: TextStyleRanges<Endnote>;

  /** A collection of {@link Line}s in the endnote marker's local text context. */
  readonly lines: Lines<Endnote>;

  /** A collection of {@link Word}s in the endnote marker's local text context. */
  readonly words: Words<Endnote>;

  /** A collection of {@link Character}s in the endnote marker's local text context. */
  readonly characters: Characters<Endnote>;

  /** A collection of {@link InsertionPoint}s in the endnote marker's local text context. */
  readonly insertionPoints: InsertionPoints<Endnote>;

  /** The {@link EndnoteRange} holding this endnote's text content. */
  get endnoteTextRange(): Read<M, EndnoteRange>;
  set endnoteTextRange(value: EndnoteRange);

  /** Deletes the endnote reference and its associated {@link EndnoteRange} text. */
  deleteEndnote(): Read<M, void>;

  /**
   * Inserts text into this endnote's range at a specific position.
   * @param storyOffset The insertion point within the endnote range to insert at. Must lie between the range's start and end, excluding the markers.
   * @param contents The text to insert.
   */
  insertTextInEndnote(storyOffset: InsertionPoint, contents: string): Read<M, void>;
}
