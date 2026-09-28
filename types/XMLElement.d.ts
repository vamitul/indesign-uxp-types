/**
 * XMLElement.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { XMLItem } from './XMLItem';
import type { Story } from './Story';
import type { InsertionPoint } from './InsertionPoint';
import type { XMLAttributes } from './XMLAttributes';
import type { XMLElements } from './XMLElements';
import type { XMLItems } from './XMLItems';
import type { XMLComments } from './XMLComments';
import type { XMLInstructions } from './XMLInstructions';
import type { XMLTag } from './XMLTag';
import type { XMLAttribute } from './XMLAttribute';
import type { PageItems } from './PageItems';
import type { Images } from './Images';
import type { Graphics } from './Graphics';
import type { EPSs } from './EPSs';
import type { WMFs } from './WMFs';
import type { PICTs } from './PICTs';
import type { PDFs } from './PDFs';
import type { SVGs } from './SVGs';
import type { Stories } from './Stories';
import type { Tables } from './Tables';
import type { Cells } from './Cells';
import type { Texts } from './Texts';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { Paragraphs } from './Paragraphs';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';
import type { PageItem } from './PageItem';
import type { Movie } from './Movie';
import type { Sound } from './Sound';
import type { Graphic } from './Graphic';
import type { Table } from './Table';
import type { Cell } from './Cell';
import type { Text } from './Text';
import type { Library } from './Library';
import type { Asset } from './Asset';
import type { ValidationError } from './ValidationError';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { TableStyle } from './TableStyle';
import type { CellStyle } from './CellStyle';
import type { ObjectStyle } from './ObjectStyle';
import type { Spread } from './Spread';
import type { Page } from './Page';
import type { MasterSpread } from './MasterSpread';
import type { PDFExportPreset } from './PDFExportPreset';
import type { BackgroundTask } from './BackgroundTask';
import type { LocationOptions } from './Enums/LocationOptions';
import type { XMLElementPosition } from './Enums/XMLElementPosition';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { ExportFormat } from './Enums/ExportFormat';
import type { FilePath, MeasurementValue } from './_base/Types';

/**
 * A tagged element in a document's underlying XML structure.
 *
 * May be associated with a page item, a range of story text, or nothing at all (a purely
 * structural node), and can itself contain child elements, attributes, comments, and
 * processing instructions.
 */
export interface XMLElement<M extends Mode = 'single'> extends XMLItem<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'XMLElement';

  /** Resolves the proxy into the individual {@link XMLElement} objects it stands for. */
  getElements(): XMLElement<'single'>[];

  /** The insertion point immediately before this element's content in its containing story. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** The story that contains this element's text content. */
  readonly parentStory: Read<M, Story>;

  /** The page item, text, or media object this element is associated with, if any. */
  readonly xmlContent: Read<M, Text | Story | PageItem | Movie | Sound | Graphic | Table | Cell>;

  /** This element's own attribute nodes. */
  readonly xmlAttributes: XMLAttributes;

  /** This element's child XML elements. */
  readonly xmlElements: XMLElements;

  /** Every XML item (element, comment, or instruction) directly under this element. */
  readonly xmlItems: XMLItems;

  /** This element's child XML comments. */
  readonly xmlComments: XMLComments;

  /** This element's child XML processing instructions. */
  readonly xmlInstructions: XMLInstructions;

  /** All page items associated with content under this element, regardless of type. */
  readonly pageItems: PageItems<XMLElement>;

  /** Bitmap images associated with content under this element. */
  readonly images: Images<XMLElement>;

  /** Imported graphics of any format associated with content under this element. */
  readonly graphics: Graphics<XMLElement>;

  /** EPS files associated with content under this element. */
  readonly epss: EPSs<XMLElement>;

  /** WMF graphics associated with content under this element. */
  readonly wmfs: WMFs<XMLElement>;

  /** PICT graphics associated with content under this element. */
  readonly picts: PICTs<XMLElement>;

  /** PDF files associated with content under this element. */
  readonly pdfs: PDFs<XMLElement>;

  /** Stories associated with content under this element. */
  readonly stories: Stories;

  /** Tables associated with content under this element. */
  readonly tables: Tables;

  /** Table cells associated with content under this element. */
  readonly cells: Cells;

  /** Text objects within this element's text content. */
  readonly texts: Texts<XMLElement>;

  /** Characters within this element's text content. */
  readonly characters: Characters<XMLElement>;

  /** Words within this element's text content. */
  readonly words: Words<XMLElement>;

  /** Lines within this element's text content. */
  readonly lines: Lines<XMLElement>;

  /** Text columns within this element's text content. */
  readonly textColumns: TextColumns<XMLElement>;

  /** Paragraphs within this element's text content. */
  readonly paragraphs: Paragraphs<XMLElement>;

  /** Insertion points within this element's text content. */
  readonly insertionPoints: InsertionPoints<XMLElement>;

  /** Text style ranges within this element's text content. */
  readonly textStyleRanges: TextStyleRanges<XMLElement>;

  /** SVG files associated with content under this element. */
  readonly svgs: SVGs<XMLElement>;

  /** The tag applied to this element. */
  get markupTag(): Read<M, XMLTag>;
  set markupTag(value: XMLTag | string);

  /** The text content of the element. */
  get contents(): Read<M, string | SpecialCharacters>;
  set contents(value: string | SpecialCharacters);

  /**
   * Stores the element in a library, capturing its markup and associated content.
   * @param using The library to store the element in.
   * @param withProperties Initial values for properties of the new library asset.
   */
  store(using: Library, withProperties?: Object): Read<M, Asset>;

  /**
   * Moves the element to the specified location.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference object. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: XMLItem | Text): Read<M, XMLElement>;

  /** Duplicates the element. */
  duplicate(): Read<M, XMLElement>;

  /** Associates this element with `using`, tagging it while preserving its existing content. */
  markup(using: PageItem | Movie | Sound | Graphic | Story | Text | Table): Read<M, void>;

  /** Places this element's XML content into `using`, replacing its existing content. */
  placeXML(using: Story | PageItem | Graphic | Movie | Sound): Read<M, void>;

  /** Removes this element's tag, detaching it from the XML structure while leaving its content in place. */
  untag(): Read<M, void>;

  /**
   * Validates this element (and its descendants) against the document's DTD.
   * @param maximumErrors The maximum number of validation errors to generate. Defaults to `250`.
   */
  validate(maximumErrors?: number): Read<M, ValidationError[]>;

  /**
   * Applies a paragraph style to this element's text content.
   * @param clearingOverrides If `true`, clears local formatting before applying the style. Defaults to `true`.
   */
  applyParagraphStyle(using: string | ParagraphStyle, clearingOverrides?: boolean): Read<M, void>;

  /** Applies a character style to this element's text content. */
  applyCharacterStyle(using: string | CharacterStyle): Read<M, void>;

  /**
   * Converts this element to an attribute of its parent element.
   * @param using The name to give the new attribute.
   */
  convertToAttribute(using?: string): Read<M, XMLAttribute>;

  /**
   * Converts this element's content to a table, using its child elements as
   * row and cell delimiters.
   * @param rowTag The tag that marks a table row.
   * @param cellTag The tag that marks a table cell.
   */
  convertElementToTable(rowTag: XMLTag, cellTag: XMLTag): Read<M, Table>;

  /**
   * Places this element into a new inline frame anchored in its parent's text flow.
   * @param dimensions The frame's `[width, height]`.
   */
  placeIntoInlineFrame(dimensions: MeasurementValue[]): Read<M, PageItem>;

  /**
   * Associates an existing page item with this element and places it into an inline frame.
   * @param retainExistingFrame If `true`, moves `copyItem` itself. If `false`, moves a copy of it. Defaults to `false`.
   */
  placeIntoInlineCopy(copyItem: PageItem, retainExistingFrame?: boolean): Read<M, PageItem>;

  /**
   * Replaces this element's content with content imported from a file.
   * @param using The path to the import file.
   * @param relativeBasePath Base path used to resolve relative paths within the imported content.
   */
  setContent(using: string, relativeBasePath?: string): Read<M, PageItem>;

  /**
   * Inserts text before, in, or after this element.
   * @param using The text to insert.
   * @param position Where to insert the text. Text inserted before or after the element becomes content of the element's *parent*, not the element itself.
   */
  insertTextAsContent(using: string | SpecialCharacters, position: XMLElementPosition): Read<M, Text>;

  /**
   * Applies a table style to the table associated with this element.
   * @param clearingOverrides If `true`, removes local formatting before applying the style. Defaults to `true`.
   */
  applyTableStyle(using: string | TableStyle, clearingOverrides?: boolean): Read<M, void>;

  /**
   * Applies a cell style to the table cells associated with this element.
   * @param clearingOverrides If `true`, removes local formatting before applying the style. Defaults to `true`.
   */
  applyCellStyle(using: string | CellStyle, clearingOverrides?: boolean): Read<M, void>;

  /**
   * Applies an object style to the frame associated with this element.
   * @param clearingOverrides If `true`, removes local formatting before applying the style. Defaults to `true`.
   * @param clearingOverridesThroughRootObjectStyle If `true`, clears unchecked category attributes through the root object style. Defaults to `false`.
   */
  applyObjectStyle(
    using: string | ObjectStyle,
    clearingOverrides?: boolean,
    clearingOverridesThroughRootObjectStyle?: boolean,
  ): void;

  /**
   * Places this element into a new rectangular frame. If it was already
   * associated with a page item, that page item is deleted first.
   * @param on The page or spread to create the new frame on.
   * @param geometricBounds The frame's bounds, excluding stroke width, as `[y1, x1, y2, x2]`.
   */
  placeIntoFrame(on: Spread | Page | MasterSpread, geometricBounds: MeasurementValue[]): Read<M, PageItem>;

  /**
   * Associates this element with a copy of an existing page item.
   * @param on The page or spread to create the new page item on.
   * @param placePoint The page coordinates `[y, x]` of the copy's top-left corner.
   * @param retainExistingFrame If `true`, associates the element with the existing page item and moves it, rather than copying it. Defaults to `false`.
   */
  placeIntoCopy(
    on: Spread | Page | MasterSpread,
    placePoint: MeasurementValue[],
    copyItem: PageItem,
    retainExistingFrame?: boolean,
  ): PageItem;

  /** Imports the XML file `from` into the document at this element. */
  importXML(from: FilePath): Read<M, void>;

  /**
   * Evaluates an XPath expression starting at this element.
   * @param using The XPath expression.
   * @param prefixMappingTable Namespace prefix-to-URI mappings, each `[prefix, uri]`.
   */
  evaluateXPathExpression(using: string, prefixMappingTable?: Array<[string, string]>): Read<M, XMLItem[]>;

  /**
   * Finds text within this element's content that matches the current find preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds and replaces text within this element's content per the current find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text within this element's content matching the current GREP find preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds and replaces text within this element's content per the current GREP find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text within this element's content matching the current find-transliterate preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds and replaces text within this element's content per the current transliterate find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Exports this element's associated content to a file.
   * @param format The export format, as an {@link ExportFormat} or a file-extension string.
   * @param to The destination file.
   * @param showingOptions If `true`, displays the export options dialog. Defaults to `false`.
   * @param using The export preset to use.
   * @param versionComments The comment for this version, if the destination is under version control.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  exportFile(
    format: ExportFormat | string,
    to: FilePath,
    showingOptions?: boolean,
    using?: PDFExportPreset,
    versionComments?: string,
    forceSave?: boolean,
  ): void;

  /**
   * Asynchronously exports this element's associated content to a file.
   * @param format The export format, as an {@link ExportFormat} or a file-extension string.
   * @param to The destination file.
   * @param showingOptions If `true`, displays the export options dialog. Defaults to `false`.
   * @param using The export preset to use.
   * @param versionComments The comment for this version, if the destination is under version control.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  asynchronousExportFile(
    format: ExportFormat | string,
    to: FilePath,
    showingOptions?: boolean,
    using?: PDFExportPreset,
    versionComments?: string,
    forceSave?: boolean,
  ): BackgroundTask;

  /**
   * Selects the object.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}
