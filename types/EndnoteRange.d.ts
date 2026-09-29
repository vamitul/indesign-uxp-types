/**
 * EndnoteRange.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Text } from './Text';
import type { InsertionPoint } from './InsertionPoint';
import type { TextStyleRange } from './TextStyleRange';
import type { Paragraph } from './Paragraph';
import type { TextColumn } from './TextColumn';
import type { Line } from './Line';
import type { Word } from './Word';
import type { Character } from './Character';
import type { Story } from './Story';
import type { XmlStory } from './XmlStory';
import type { Endnote } from './Endnote';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { NothingEnum } from './Enums/NothingEnum';

/**
 * The text range holding one endnote's content, collected (together with
 * every other endnote's range in the same story) at the end of the story
 * rather than inline — see {@link Endnote} for the in-text marker it belongs to.
 */
export interface EndnoteRange<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Text | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word | Character | Story | XmlStory, M>,
    IndexedDOMObject<Text | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word | Character | Story | XmlStory, M>,
    NamableDOMObject<Text | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word | Character | Story | XmlStory, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EndnoteRange';

  /** Resolves the proxy into the individual {@link EndnoteRange} objects it stands for. */
  getElements(): EndnoteRange<'single'>[];

  /** The unique ID of the endnote range, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The zero-based start index of this range within the endnote text frame's story. */
  readonly endnoteRangeStartIndex: Read<M, number>;

  /** The zero-based end index of this range within the endnote text frame's story. */
  readonly endnoteRangeEndIndex: Read<M, number>;

  /** The {@link Endnote} marker this range's text belongs to. */
  get sourceEndnote(): Read<M, Endnote>;
  set sourceEndnote(value: Endnote);

  /**
   * The range's text content, excluding its endnote number marker. Assigning
   * `NothingEnum.NOTHING` (or an array item of it) clears that portion.
   */
  get endnoteRangeContent(): Read<M, string | SpecialCharacters | Array<string | SpecialCharacters | NothingEnum>>;
  set endnoteRangeContent(value: string | SpecialCharacters | Array<string | SpecialCharacters | NothingEnum>);

  /** Deletes the endnote range and its associated {@link Endnote} anchor. */
  deleteEndnoteRange(): Read<M, void>;
}
