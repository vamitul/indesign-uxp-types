/**
 * Note.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { XmlStory } from './XmlStory';
import type { Story } from './Story';
import type { TextFrame } from './TextFrame';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { InsertionPoint } from './InsertionPoint';
import type { Cell } from './Cell';
import type { Text } from './Text';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { Paragraphs } from './Paragraphs';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { Texts } from './Texts';
import type { HiddenTexts } from './HiddenTexts';
import type { TextVariableInstances } from './TextVariableInstances';
import type { Endnote } from './Endnote';
import type { Footnote } from './Footnote';
import type { Character } from './Character';
import type { Line } from './Line';
import type { Paragraph } from './Paragraph';
import type { TextColumn } from './TextColumn';
import type { TextStyleRange } from './TextStyleRange';
import type { Word } from './Word';

/**
 * An inline note in a story — a small annotation attached at an insertion
 * point, shown collapsed or expanded in galley/story view. Distinct from
 * {@link Footnote}/{@link Endnote}, which render as document-level references.
 */
export interface Note<M extends Mode = 'single'>
  extends LabelableEventDOMObject<XmlStory | Story | TextFrame | EndnoteTextFrame | InsertionPoint | Cell, M>,
    IndexedDOMObject<XmlStory | Story | TextFrame | EndnoteTextFrame | InsertionPoint | Cell, M>,
    NamableDOMObject<XmlStory | Story | TextFrame | EndnoteTextFrame | InsertionPoint | Cell, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Note';

  /** Resolves the proxy into the individual {@link Note} objects it stands for. */
  getElements(): Note<'single'>[];

  /** The unique ID of the note, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** When the note was created. */
  readonly creationDate: Read<M, Date>;

  /** When the note was last modified. */
  readonly modificationDate: Read<M, Date>;

  /** The name of the user who authored the note. */
  readonly userName: Read<M, string>;

  /** The {@link InsertionPoint} in the parent story where the note is anchored. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** {@link TextVariableInstances} resolved within the note's text. */
  readonly textVariableInstances: TextVariableInstances;

  /** A collection of {@link Text} objects spanning the note's content. */
  readonly texts: Texts<Note>;

  /** A collection of {@link Character}s in the note's content. */
  readonly characters: Characters<Note>;

  /** A collection of {@link Word}s in the note's content. */
  readonly words: Words<Note>;

  /** A collection of {@link Line}s in the note's content. */
  readonly lines: Lines<Note>;

  /** A collection of {@link TextColumn}s in the note's content. */
  readonly textColumns: TextColumns<Note>;

  /** A collection of {@link Paragraph}s in the note's content. */
  readonly paragraphs: Paragraphs<Note>;

  /** A collection of {@link InsertionPoint}s in the note's content. */
  readonly insertionPoints: InsertionPoints<Note>;

  /** A collection of {@link TextStyleRange}s in the note's content. */
  readonly textStyleRanges: TextStyleRanges<Note>;

  /** {@link HiddenTexts} (conditional/hidden runs) in the note's content. */
  readonly hiddenTexts: HiddenTexts;

  /** Whether the note is shown collapsed in galley/story view. */
  get collapsed(): Read<M, boolean>;
  set collapsed(value: boolean);

  /** Deletes the note. */
  remove(): Read<M, void>;

  /** Converts the note's content into regular story text at its anchor point, removing the note. */
  convertToText(): Read<M, void>;

  /**
   * Moves the note to a new anchor location.
   * @param to Where to insert the note relative to `reference`, or within the containing object.
   * @param reference The insertion point or story to insert relative to. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: Text | Story): Read<M, Note>;
}
