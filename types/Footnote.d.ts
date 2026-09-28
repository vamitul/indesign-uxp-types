/**
 * Footnote.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { XmlStory } from './XmlStory';
import type { Cell } from './Cell';
import type { Story } from './Story';
import type { TextFrame } from './TextFrame';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { InsertionPoint } from './InsertionPoint';
import type { Text } from './Text';
import type { PageItem } from './PageItem';
import type { Graphic } from './Graphic';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { NothingEnum } from './Enums/NothingEnum';
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
import type { Ovals } from './Ovals';
import type { SplineItems } from './SplineItems';
import type { PageItems } from './PageItems';
import type { Rectangles } from './Rectangles';
import type { GraphicLines } from './GraphicLines';
import type { TextFrames } from './TextFrames';
import type { Polygons } from './Polygons';
import type { Groups } from './Groups';
import type { EPSTexts } from './EPSTexts';
import type { Character } from './Character';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';
import type { Endnote } from './Endnote';
import type { Line } from './Line';
import type { Paragraph } from './Paragraph';
import type { TextColumn } from './TextColumn';
import type { TextStyleRange } from './TextStyleRange';
import type { Word } from './Word';

/**
 * A footnote anchored at a point in a story's main text — its marker appears
 * inline, while its content flows at the bottom of the column or page. See
 * also {@link Endnote} for note text collected at the end of the story instead.
 */
export interface Footnote<M extends Mode = 'single'>
  extends LabelableEventDOMObject<XmlStory | Cell | Story | TextFrame | EndnoteTextFrame | InsertionPoint, M>,
    IndexedDOMObject<XmlStory | Cell | Story | TextFrame | EndnoteTextFrame | InsertionPoint, M>,
    NamableDOMObject<XmlStory | Cell | Story | TextFrame | EndnoteTextFrame | InsertionPoint, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Footnote';

  /** Resolves the proxy into the individual {@link Footnote} objects it stands for. */
  getElements(): Footnote<'single'>[];

  /** The unique ID of the footnote, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The {@link InsertionPoint} in the parent story where the footnote marker sits. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** Every {@link PageItem} anywhere in the footnote's content. A snapshot array, not a live collection. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /** Every {@link Graphic} anywhere in the footnote's content. A snapshot array, not a live collection. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** A collection of {@link TextColumn}s in the footnote's content. */
  readonly textColumns: TextColumns<Footnote>;

  /** A collection of {@link Text} objects spanning the footnote's content. */
  readonly texts: Texts<Footnote>;

  /** A collection of {@link TextStyleRange}s in the footnote's content. */
  readonly textStyleRanges: TextStyleRanges<Footnote>;

  /** A collection of {@link Paragraph}s in the footnote's content. */
  readonly paragraphs: Paragraphs<Footnote>;

  /** A collection of {@link Line}s in the footnote's content. */
  readonly lines: Lines<Footnote>;

  /** A collection of {@link Word}s in the footnote's content. */
  readonly words: Words<Footnote>;

  /** A collection of {@link Character}s in the footnote's content. */
  readonly characters: Characters<Footnote>;

  /** A collection of {@link InsertionPoint}s in the footnote's content. */
  readonly insertionPoints: InsertionPoints<Footnote>;

  /** {@link TextVariableInstances} resolved within the footnote's content. */
  readonly textVariableInstances: TextVariableInstances;

  /** {@link Ovals} (ellipses) directly in the footnote. */
  readonly ovals: Ovals<Character>;

  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in the footnote. */
  readonly splineItems: SplineItems<Character>;

  /** All {@link PageItems} directly in the footnote, regardless of type. */
  readonly pageItems: PageItems<Character>;

  /** {@link Rectangles} directly in the footnote. */
  readonly rectangles: Rectangles<Character>;

  /** {@link GraphicLines} directly in the footnote. */
  readonly graphicLines: GraphicLines<Character>;

  /** {@link TextFrames} directly in the footnote. */
  readonly textFrames: TextFrames<Character>;

  /** {@link Polygons} directly in the footnote. */
  readonly polygons: Polygons<Character>;

  /** {@link Groups} directly in the footnote. */
  readonly groups: Groups<Character>;

  /** {@link EPSTexts} directly in the footnote. */
  readonly epstexts: EPSTexts<Character>;

  /** {@link HiddenTexts} (conditional/hidden runs) in the footnote's content. */
  readonly hiddenTexts: HiddenTexts;

  /** The footnote's plain-text content. Assigning `NothingEnum.NOTHING` (or an array item of it) clears that portion. */
  get contents(): Read<M, string | SpecialCharacters | Array<string | SpecialCharacters | NothingEnum>>;
  set contents(value: string | SpecialCharacters | Array<string | SpecialCharacters | NothingEnum>);

  /** Deletes the footnote and its marker. */
  remove(): Read<M, void>;

  /** Converts the footnote to regular story text, inserted at the former marker location, and removes the footnote. */
  convertToText(): Read<M, Text>;
}
