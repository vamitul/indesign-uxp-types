/**
 * Table.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { TableFormatAttributes } from './_base/TableAttributes';
import type { MeasurementValue } from './_base/Types';

import type { XMLElement } from './XMLElement';
import type { XmlStory } from './XmlStory';
import type { TextFrame } from './TextFrame';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { Text } from './Text';
import type { InsertionPoint } from './InsertionPoint';
import type { TextStyleRange } from './TextStyleRange';
import type { Paragraph } from './Paragraph';
import type { TextColumn } from './TextColumn';
import type { Line } from './Line';
import type { Word } from './Word';
import type { Character } from './Character';
import type { Story } from './Story';
import type { Cell } from './Cell';

import type { XMLItem } from './XMLItem';
import type { TableStyle } from './TableStyle';
import type { Cells } from './Cells';
import type { Rows } from './Rows';
import type { Columns } from './Columns';

import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';

import type { Footnotes } from './Footnotes';
import type { Endnotes } from './Endnotes';
import type { TextVariableInstances } from './TextVariableInstances';
import type { Changes } from './Changes';
import type { Notes } from './Notes';
import type { HiddenTexts } from './HiddenTexts';

import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { NothingEnum } from './Enums/NothingEnum';
import type { HeaderFooterBreakTypes } from './Enums/HeaderFooterBreakTypes';
import type { AlternatingFillsTypes } from './Enums/AlternatingFillsTypes';
import type { TableDirectionOptions } from './Enums/TableDirectionOptions';
import type { DisplayOrderOptions } from './Enums/DisplayOrderOptions';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { HeaderColumnsPositionTypes } from './Enums/HeaderColumnsPositionTypes';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';
import type { Column } from './Column';
import type { Row } from './Row';
import type { TableCaptionPositionOptions } from './Enums/TableCaptionPositionOptions';

/** Any object a {@link Table} can anchor into: a text-flow-bearing object or another table's cell. */
export type TableParent =
  | XMLElement | XmlStory | TextFrame | EndnoteTextFrame | Text
  | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word
  | Character | Story | Cell;

/**
 * A table anchored in a text flow: a grid of {@link Cell}s organized into
 * {@link Rows} and {@link Columns}.
 *
 * Unlike a {@link Cell}, {@link Row}, or {@link Column}, a table has no text
 * of its own — {@link findText} and related methods operate across its
 * cells' text instead.
 */
export interface Table<M extends Mode = 'single'>
  extends LabelableEventDOMObject<TableParent, M>,
    IndexedDOMObject<TableParent, M>,
    TableFormatAttributes<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'Table';

  /** Resolves the proxy into the individual {@link Table} objects it stands for. */
  getElements(): Table<'single'>[];

  // ---- Caption and header columns --------------------------------------------
  // Absent from the InDesign 2026 object-model dictionary; modelled from the
  // live UXP runtime.

  /** How many paragraphs at the start (or end) of the caption story belong to the caption. @default `0` */
  get captionParagraphCount(): Read<M, number>;
  set captionParagraphCount(value: number);

  /** Which edge of the table the repeating header columns sit on. */
  get headerColumnsPosition(): Read<M, HeaderColumnsPositionTypes>;
  set headerColumnsPosition(value: HeaderColumnsPositionTypes);

  /** How many columns repeat as header columns when the table breaks across frames. @default `0` */
  get numHeaderColumns(): Read<M, number>;
  set numHeaderColumns(value: number);

  /** The unique ID of the table, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the table; an alias for its {@link label}. */
  get name(): Read<M, string>;
  set name(value: string);

  /** The {@link XMLItem} this table is associated with, if tagged. */
  readonly associatedXMLElement: Read<M, XMLItem>;

  /** The {@link InsertionPoint} immediately before the table in its containing story. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** A collection of the table's cells. */
  readonly cells: Cells;

  /** A collection of the table's rows. */
  readonly rows: Rows;

  /** A collection of the table's columns. */
  readonly columns: Columns;

  /** The height of the table — the sum of its row heights. */
  get height(): Read<M, number>;
  set height(value: MeasurementValue);

  /** The width of the table — the sum of its column widths. */
  get width(): Read<M, number>;
  set width(value: MeasurementValue);

  /**
   * The text to place in each cell, as an array whose first item populates the top-left cell,
   * whose second populates the next cell to the right, and so on, wrapping to the next row
   * after the last column.
   *
   * Cells beyond the array's length are left blank.
   */
  get contents(): Read<M, Array<string | SpecialCharacters>>;
  set contents(value: Array<string | SpecialCharacters | NothingEnum.NOTHING>);

  /** The number of header rows. Range `0`–`25`. */
  get headerRowCount(): Read<M, number>;
  set headerRowCount(value: number);

  /** The number of footer rows. Range `0`–`25`. */
  get footerRowCount(): Read<M, number>;
  set footerRowCount(value: number);

  /** The number of body rows. Range `1`–`10000`. */
  get bodyRowCount(): Read<M, number>;
  set bodyRowCount(value: number);

  /** The number of columns. Range `1`–`200`. */
  get columnCount(): Read<M, number>;
  set columnCount(value: number);

  /** The {@link TableStyle} applied to the table. Accepts a style or its name. */
  get appliedTableStyle(): Read<M, TableStyle>;
  set appliedTableStyle(value: TableStyle | string);

  /** Where header rows repeat when the table breaks across text frames or pages. */
  get breakHeaders(): Read<M, HeaderFooterBreakTypes>;
  set breakHeaders(value: HeaderFooterBreakTypes);

  /** Where footer rows repeat when the table breaks across text frames or pages. */
  get breakFooters(): Read<M, HeaderFooterBreakTypes>;
  set breakFooters(value: HeaderFooterBreakTypes);

  /** If `true`, skips the first occurrence of the header rows. */
  get skipFirstHeader(): Read<M, boolean>;
  set skipFirstHeader(value: boolean);

  /** If `true`, skips the last occurrence of the footer rows. */
  get skipLastFooter(): Read<M, boolean>;
  set skipLastFooter(value: boolean);

  /** The pattern used for alternating row/column fills. */
  get alternatingFills(): Read<M, AlternatingFillsTypes>;
  set alternatingFills(value: AlternatingFillsTypes);

  /** The reading and layout direction of the table. */
  get tableDirection(): Read<M, TableDirectionOptions>;
  set tableDirection(value: TableDirectionOptions);

  /** If `true`, the table displays collapsed in Story and Galley views. */
  get displayCollapsed(): Read<M, boolean>;
  set displayCollapsed(value: boolean);

  /** The order the table's cells display in when viewing in Story and Galley views. */
  get displayOrder(): Read<M, DisplayOrderOptions>;
  set displayOrder(value: DisplayOrderOptions);

  /** {@link Ovals} (ellipses) directly in this table. */
  readonly ovals: Ovals;

  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this table. */
  readonly splineItems: SplineItems;

  /** All {@link PageItems} directly in this table, regardless of type. */
  readonly pageItems: PageItems;

  /** {@link Rectangles} directly in this table. */
  readonly rectangles: Rectangles;

  /** {@link GraphicLines} directly in this table. */
  readonly graphicLines: GraphicLines;

  /** {@link TextFrames} directly in this table. */
  readonly textFrames: TextFrames;

  /** {@link Polygons} directly in this table. */
  readonly polygons: Polygons;

  /** {@link EndnoteTextFrames} directly in this table. */
  readonly endnoteTextFrames: EndnoteTextFrames;

  /** {@link Groups} directly in this table. */
  readonly groups: Groups;

  /** {@link EPSTexts} directly in this table. */
  readonly epstexts: EPSTexts;

  /** {@link FormFields} of every kind directly in this table. */
  readonly formFields: FormFields;

  /** {@link Buttons} directly in this table. */
  readonly buttons: Buttons;

  /** {@link MultiStateObjects} directly in this table. */
  readonly multiStateObjects: MultiStateObjects;

  /** {@link CheckBoxes} directly in this table. */
  readonly checkBoxes: CheckBoxes;

  /** {@link ComboBoxes} directly in this table. */
  readonly comboBoxes: ComboBoxes;

  /** {@link ListBoxes} directly in this table. */
  readonly listBoxes: ListBoxes;

  /** {@link RadioButtons} directly in this table. */
  readonly radioButtons: RadioButtons;

  /** {@link TextBoxes} directly in this table. */
  readonly textBoxes: TextBoxes;

  /** {@link SignatureFields} directly in this table. */
  readonly signatureFields: SignatureFields;

  /** Every {@link Graphic} anywhere in this table, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** Every {@link PageItem} anywhere in this table, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /** {@link Footnotes} anchored anywhere in the table's cells. */
  readonly footnotes: Footnotes;

  /** {@link Endnotes} anchored anywhere in the table's cells. */
  readonly endnotes: Endnotes;

  /** {@link TextVariableInstances} resolved anywhere in the table's cells. */
  readonly textVariableInstances: TextVariableInstances;

  /** {@link Changes} (tracked-change records) anywhere in the table's cells. */
  readonly changes: Changes;

  /** {@link Notes} attached anywhere in the table's cells. */
  readonly notes: Notes;

  /** {@link HiddenTexts} (conditional/hidden runs) anywhere in the table's cells. */
  readonly hiddenTexts: HiddenTexts;

  /**
   * Converts text to outlines, one polygon per line. A single letter with no
   * internal spaces or detached parts yields a single-path polygon.
   * @param deleteOriginal If `true`, deletes the original text; if `false`, adds the outlines as separate object(s) on top of it. Defaults to `true`.
   */
  createOutlines(deleteOriginal?: boolean): Read<M, PageItem[]>;

  /** Tags the table (or its parent story) using the default tags defined in the XML import preferences. */
  autoTag(): Read<M, void>;

  /**
   * Associates the table with the given XML element, preserving existing content.
   * @param using The XML element to associate with the table.
   */
  markup(using: XMLElement): Read<M, void>;

  /** Recomposes the text in the table's cells. */
  recompose(): Read<M, void>;

  /**
   * Finds text within the table's cells that matches the find-what value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text within the table's cells that matches the find-what value and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text within the table's cells that matches the GREP find-what value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text within the table's cells that matches the GREP find-what value and replaces it with the change-to value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds glyphs within the table's cells that match the find-what value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds glyphs within the table's cells that match the find-what value and replaces them with the change-to value.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text within the table's cells matching the transliterate (character-type) find query.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text within the table's cells matching the transliterate find query and applies the change settings.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /** Deletes the table. */
  remove(): Read<M, void>;

  /** Unmerges every merged cell in the table, restoring the original grid. */
  unmerge(): Read<M, Cell[]>;

  /**
   * Converts the table to plain text, one row per line.
   * @param columnSeparator The character inserted between each column's content. Any single character, or a space/tab; escape quotes and backslashes; use `^p` for a paragraph break. Defaults to a tab character.
   * @param rowSeparator The character inserted between each row's content. Same format as `columnSeparator`. Defaults to `'^p'`.
   */
  convertToText(columnSeparator?: string, rowSeparator?: string): Read<M, Text>;

  /** Clears the table's style overrides. */
  clearTableStyleOverrides(): Read<M, void>;

  /** Converts any bullets or numbering in the table's cells into literal text. */
  convertBulletsAndNumberingToText(): Read<M, void>;

  /**
   * Selects the table in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}
