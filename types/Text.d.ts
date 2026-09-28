/**
 * Text.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { CharacterFormatAttributes, ParagraphFormatAttributes, TextGraphicAttributes } from './_base/TextAttributes';
import type { TextRangeContent } from './_base/TextContent';
import type { TextParent } from './_base/Parents';
import type { AnyGraphic, AnyPageItem, PageItemUnion } from './_base/Unions';
import type { FilePath, Mode, Read } from './_base/Types';

import type { ColorSpace } from './Enums/ColorSpace';
import type { ExportFormat } from './Enums/ExportFormat';
import type { LocationOptions } from './Enums/LocationOptions';
import type { RangeSortOrder } from './Enums/RangeSortOrder';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { StyleType } from './Enums/StyleType';

import type { BackgroundTask } from './BackgroundTask';
import type { Buttons } from './Buttons';
import type { Cell } from './Cell';
import type { CharacterStyle } from './CharacterStyle';
import type { CheckBoxes } from './CheckBoxes';
import type { Column } from './Column';
import type { ComboBoxes } from './ComboBoxes';
import type { Condition } from './Condition';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { EPSTexts } from './EPSTexts';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { HyperlinkTextSource } from './HyperlinkTextSource';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Note } from './Note';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { ParagraphStyle } from './ParagraphStyle';
import type { PDFExportPreset } from './PDFExportPreset';
import type { Polygons } from './Polygons';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { Row } from './Row';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { Story } from './Story';
import type { Swatch } from './Swatch';
import type { Table } from './Table';
import type { TextBoxes } from './TextBoxes';
import type { TextFrame } from './TextFrame';
import type { TextFrames } from './TextFrames';
import type { TextPath } from './TextPath';
import type { XMLElement } from './XMLElement';
import type { XMLItem } from './XMLItem';
import type { Character } from './Character';
import type { InsertionPoint } from './InsertionPoint';
import type { Line } from './Line';
import type { Paragraph } from './Paragraph';
import type { TextColumn } from './TextColumn';
import type { TextStyleRange } from './TextStyleRange';
import type { Word } from './Word';
import type { Bullet } from './Bullet';
import type { Color } from './Color';
import type { EndnoteRanges } from './EndnoteRanges';
import type { BalanceLinesStyle } from './Enums/BalanceLinesStyle';
import type { Capitalization } from './Enums/Capitalization';
import type { CornerOptions } from './Enums/CornerOptions';
import type { DigitsTypeOptions } from './Enums/DigitsTypeOptions';
import type { Leading } from './Enums/Leading';
import type { NumberingStyle } from './Enums/NumberingStyle';
import type { ParagraphJustificationOptions } from './Enums/ParagraphJustificationOptions';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyTypes } from './Enums/RubyTypes';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Font } from './Font';
import type { Footnotes } from './Footnotes';
import type { Gradient } from './Gradient';
import type { HiddenTexts } from './HiddenTexts';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { MixedInk } from './MixedInk';
import type { Notes } from './Notes';
import type { NumberingRestartPolicy } from './NumberingRestartPolicy';
import type { TabStop } from './TabStop';
import type { Tables } from './Tables';
import type { TextVariableInstances } from './TextVariableInstances';
import type { Tint } from './Tint';

/**
 * Reference object accepted by {@link Text.duplicate} / {@link Text.move} as the
 * `reference` argument — required when `to` is {@link LocationOptions.BEFORE} or
 * {@link LocationOptions.AFTER}.
 */
export type TextDuplicateReference = Text | Story | Cell | Row | Column | Table | PageItem;

/**
 * A range of text: the family base for {@link Character}, {@link Word},
 * {@link Line}, {@link Paragraph}, {@link TextColumn}, {@link TextStyleRange},
 * and {@link InsertionPoint}.
 *
 * Reachable at any granularity from within the range — {@link characters},
 * {@link words}, {@link lines}, {@link paragraphs} — and searchable with
 * find/change, GREP, glyph, and transliterate. Also exposes the range's
 * parent {@link Story} and frames, position measurements such as baseline
 * and ascent, and operations on the resolved text: placing files, exporting,
 * generating QR codes, and converting to a table.
 */
export interface Text<TParent = TextParent, M extends Mode = 'single'>
  extends EventTargetDOMObject<TParent, M>,
    IndexedDOMObject<TParent, M>,
    CharacterFormatAttributes<M>,
    ParagraphFormatAttributes<M>,
    TextGraphicAttributes<M>,
    TextRangeContent<TParent, M> {
  /** The object's DOM class name — reports the specific kind, such as `'Paragraph'` when the object is a {@link Paragraph}. */
  readonly constructorName: 'Text' | 'Character' | 'InsertionPoint' | 'Line' | 'Paragraph' | 'TextColumn' | 'TextStyleRange' | 'Word';

  /** Resolves the proxy into the individual {@link Text} ranges it stands for. */
  getElements(): Text<TParent, 'single'>[];


  /** Forces the text to recompose, applying any pending composition changes. */
  recompose(): Read<M, void>;

  /** The number of characters spanned by this range. */
  readonly length: Read<M, number>;

  /** The {@link XMLItem} elements (XML elements, comments, or instructions) associated with this text. */
  readonly associatedXMLElements: Read<M, XMLItem[]>;

  /** The {@link Story} that contains this text. */
  readonly parentStory: Read<M, Story>;

  /** The {@link TextFrame}s or {@link TextPath}s the text flows through. */
  readonly parentTextFrames: Read<M, Array<TextFrame | TextPath>>;

  /** The maximum ascent of any character in the range. */
  readonly ascent: Read<M, number>;

  /** The maximum descent of any character in the range. */
  readonly descent: Read<M, number>;

  /** The vertical offset of the range's baseline. */
  readonly baseline: Read<M, number>;

  /** The horizontal offset of the range's start. */
  readonly horizontalOffset: Read<M, number>;

  /** The vertical offset of the range's end baseline. */
  readonly endBaseline: Read<M, number>;

  /** The horizontal offset of the range's end. */
  readonly endHorizontalOffset: Read<M, number>;

  /** Whether the applied style has been overridden with additional attributes on this range. */
  readonly styleOverridden: Read<M, boolean>;

  /** The {@link CharacterStyle}s dictated by nested styles for each character in the range. */
  readonly appliedNestedStyles: Read<M, CharacterStyle[]>;

  /** The {@link Condition}s applied to the range. */
  get appliedConditions(): Read<M, Condition[]>;
  set appliedConditions(value: Array<Condition | string>);

  /** The amount of space to add or remove between characters, in thousandths of an em. */
  get kerningValue(): Read<M, number>;
  set kerningValue(value: number);

  /** {@link Ovals} (ellipses) anchored in this range. */
  readonly ovals: Ovals<Character>;

  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) anchored in this range. */
  readonly splineItems: SplineItems<Character>;

  /** Every {@link PageItem} anchored in this range, regardless of type. */
  readonly pageItems: PageItems<Character>;

  /** {@link Rectangles} anchored in this range. */
  readonly rectangles: Rectangles<Character>;

  /** {@link GraphicLines} anchored in this range. */
  readonly graphicLines: GraphicLines<Character>;

  /** {@link TextFrames} anchored in this range. */
  readonly textFrames: TextFrames<Character>;

  /** {@link Polygons} anchored in this range. */
  readonly polygons: Polygons<Character>;

  /** {@link EndnoteTextFrames} anchored in this range. */
  readonly endnoteTextFrames: EndnoteTextFrames<Character>;

  /** {@link Groups} anchored in this range. */
  readonly groups: Groups<Character>;

  /** {@link EPSTexts} anchored in this range. */
  readonly epstexts: EPSTexts<Character>;

  /** {@link FormFields} of every kind anchored in this range. */
  readonly formFields: FormFields<Character>;

  /** {@link Buttons} anchored in this range. */
  readonly buttons: Buttons<Character>;

  /** {@link MultiStateObjects} anchored in this range. */
  readonly multiStateObjects: MultiStateObjects<Character>;

  /** {@link CheckBoxes} anchored in this range. */
  readonly checkBoxes: CheckBoxes<Character>;

  /** {@link ComboBoxes} anchored in this range. */
  readonly comboBoxes: ComboBoxes<Character>;

  /** {@link ListBoxes} anchored in this range. */
  readonly listBoxes: ListBoxes<Character>;

  /** {@link RadioButtons} anchored in this range. */
  readonly radioButtons: RadioButtons<Character>;

  /** {@link TextBoxes} anchored in this range. */
  readonly textBoxes: TextBoxes<Character>;

  /** {@link SignatureFields} anchored in this range. */
  readonly signatureFields: SignatureFields<Character>;

  /** Every {@link Graphic} anchored anywhere in this range, recursing into nested groups. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** Every {@link PageItem} anchored anywhere in this range, recursing into nested groups. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /**
   * The range's plain-text contents. Reading yields the text as a `string`, or a
   * {@link SpecialCharacters} value when the range holds only a single special
   * character; assignment accepts either form.
   */
  get contents(): Read<M, string | SpecialCharacters>;
  set contents(value: string | SpecialCharacters);

  /**
   * Creates a thumbnail image of the range as it would render, independent of
   * its currently applied style.
   * @param space The color space to render swatches in.
   * @param to Destination path for the generated image.
   */
  createThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: FilePath): Read<M, boolean>;

  /**
   * Whether the range has local formatting overrides on top of its applied style.
   * @param charStyleAsOverride If `true`, treats an applied {@link CharacterStyle} itself as an override. Defaults to `true`.
   */
  textHasOverrides(charOrParaStyle: StyleType, charStyleAsOverride?: boolean): Read<M, boolean>;

  /**
   * Creates a thumbnail image of the range using its applied style and any
   * local overrides.
   * @param space The color space to render swatches in.
   * @param to Destination path for the generated image.
   * @param charOrParaStyle Which applied style (character or paragraph) to render with.
   */
  createStyleThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: FilePath, charOrParaStyle: StyleType): Read<M, boolean>;

  /** Tags the range's parent story using the default tags from XML preferences. */
  autoTag(): Read<M, void>;

  /** Associates the range with an XML element while preserving its existing content. @param using The XML element to associate. */
  markup(using: XMLElement): Read<M, void>;

  /** Deletes the text in this range. */
  remove(): Read<M, void>;

  /**
   * Converts the range's text to a {@link Table}, splitting on the given
   * separator characters.
   * @param columnSeparator Character that starts a new column.
   * @param rowSeparator Character that starts a new row.
   * @param numberOfColumns Number of columns to split into. Valid only when
   * `columnSeparator` and `rowSeparator` are the same character. Defaults to `1`.
   */
  convertToTable(columnSeparator?: string, rowSeparator?: string, numberOfColumns?: number): Read<M, Table>;

  /**
   * Sets the Nth design axis of a variable font applied to the range.
   * @param nthAxisIndex Index of the design axis.
   * @param nthAxisValue Value to set the axis to.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): Read<M, void>;

  /** Whether the Nth design axis of the range's variable font is hidden. @param nthAxisIndex Index of the design axis. */
  isNthDesignAxisHidden(nthAxisIndex: number): Read<M, boolean>;

  /** Scrolls the active window to bring this range into view. */
  showText(): Read<M, void>;

  /**
   * Applies a {@link ParagraphStyle} to the paragraphs spanned by the range.
   * @param clearingOverrides If `true`, clears local text attributes before applying the style. Defaults to `true`.
   */
  applyParagraphStyle(using: ParagraphStyle, clearingOverrides?: boolean): Read<M, void>;

  /** Applies a {@link CharacterStyle} to the range. */
  applyCharacterStyle(using: CharacterStyle): Read<M, void>;

  /**
   * Duplicates the range's text into a new location.
   * @param to Where to insert the copy relative to `reference`, or within the containing object.
   * @param reference Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER} — see {@link TextDuplicateReference}.
   */
  duplicate(to: LocationOptions, reference?: TextDuplicateReference): Read<M, Text>;

  /**
   * Moves the range's text into a new location.
   * @param to Where to move the text relative to `reference`, or within the containing object.
   * @param reference Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER} — see {@link TextDuplicateReference}.
   */
  move(to: LocationOptions, reference?: TextDuplicateReference): Read<M, Text>;

  /**
   * Places a file into the range, replacing its content.
   * @param fileName Path to the asset to place.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath, showingOptions?: boolean, withProperties?: object): Read<M, PageItemUnion[]>;

  /** Converts the range to a {@link Note}. */
  convertToNote(): Read<M, Note>;

  /**
   * Finds hyperlink sources that intersect the range.
   * @param sortOrder Sort order of the returned sources.
   */
  findHyperlinks(sortOrder?: RangeSortOrder): Read<M, HyperlinkTextSource[]>;

  /**
   * Creates a plain-text QR code and places it as a graphic anchored to the range.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code linking to a URL, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code that composes an SMS, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code that composes an email, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /**
   * Creates a business-card (vCard) QR code, placed as a graphic anchored to the range.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createVCardQRCode(
    firstName?: string,
    lastName?: string,
    jobTitle?: string,
    cellPhone?: string,
    phone?: string,
    email?: string,
    organisation?: string,
    streetAddress?: string,
    city?: string,
    adrState?: string,
    country?: string,
    postalCode?: string,
    website?: string,
    qrCodeSwatch?: Swatch | string,
    withProperties?: object,
  ): void;

  /**
   * Exports the range to a file.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using An export preset such as a {@link PDFExportPreset}.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): Read<M, void>;

  /**
   * Exports the range to a file on a background thread, returning the running {@link BackgroundTask}.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): Read<M, BackgroundTask>;

  /**
   * Applies one or more {@link Condition}s to the range.
   * @param removeExisting If `true`, removes conditions already applied before applying the new ones. Defaults to `false`.
   */
  applyConditions(using: Condition | Condition[], removeExisting?: boolean): Read<M, void>;

  /**
   * Selects the range in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}
