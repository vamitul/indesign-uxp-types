/**
 * XMLElement.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
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
import type { Document } from './Document';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * A tagged element in a document's underlying XML structure.
 *
 * May be associated with a page item, a range of story text, or nothing at all (a purely
 * structural node), and can itself contain child elements, attributes, comments, and
 * processing instructions.
 */
export interface XMLElement {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document | XMLElement;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<XMLElement, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<XMLElement, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The unique ID of the XMLItem. */
  readonly id: number;
  /** Deletes the XMLItem. */
  remove(): void;
  /** The object's DOM class name. */
  readonly constructorName: 'XMLElement';
  /** Resolves the proxy into the individual {@link XMLElement} objects it stands for. */
  getElements(): XMLElement[];
  /** The insertion point immediately before this element's content in its containing story. */
  readonly storyOffset: InsertionPoint;
  /** The story that contains this element's text content. */
  readonly parentStory: Story;
  /** The page item, text, or media object this element is associated with, if any. */
  readonly xmlContent: Text | Story | PageItem | Movie | Sound | Graphic | Table | Cell;
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
  get markupTag(): XMLTag;
  set markupTag(value: XMLTag | string);
  /** The text content of the element. */
  get contents(): string | SpecialCharacters;
  set contents(value: string | SpecialCharacters);
  /**
   * Stores the element in a library, capturing its markup and associated content.
   * @param using The library to store the element in.
   * @param withProperties Initial values for properties of the new library asset.
   */
  store(using: Library, withProperties?: Object): Asset;
  /**
   * Moves the element to the specified location.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference object. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: XMLItem | Text): XMLElement;
  /** Duplicates the element. */
  duplicate(): XMLElement;
  /** Associates this element with `using`, tagging it while preserving its existing content. */
  markup(using: PageItem | Movie | Sound | Graphic | Story | Text | Table): void;
  /** Places this element's XML content into `using`, replacing its existing content. */
  placeXML(using: Story | PageItem | Graphic | Movie | Sound): void;
  /** Removes this element's tag, detaching it from the XML structure while leaving its content in place. */
  untag(): void;
  /**
   * Validates this element (and its descendants) against the document's DTD.
   * @param maximumErrors The maximum number of validation errors to generate. Defaults to `250`.
   */
  validate(maximumErrors?: number): ValidationError[];
  /**
   * Applies a paragraph style to this element's text content.
   * @param clearingOverrides If `true`, clears local formatting before applying the style. Defaults to `true`.
   */
  applyParagraphStyle(using: string | ParagraphStyle, clearingOverrides?: boolean): void;
  /** Applies a character style to this element's text content. */
  applyCharacterStyle(using: string | CharacterStyle): void;
  /**
   * Converts this element to an attribute of its parent element.
   * @param using The name to give the new attribute.
   */
  convertToAttribute(using?: string): XMLAttribute;
  /**
   * Converts this element's content to a table, using its child elements as
   * row and cell delimiters.
   * @param rowTag The tag that marks a table row.
   * @param cellTag The tag that marks a table cell.
   */
  convertElementToTable(rowTag: XMLTag, cellTag: XMLTag): Table;
  /**
   * Places this element into a new inline frame anchored in its parent's text flow.
   * @param dimensions The frame's `[width, height]`.
   */
  placeIntoInlineFrame(dimensions: MeasurementValue[]): PageItem;
  /**
   * Associates an existing page item with this element and places it into an inline frame.
   * @param retainExistingFrame If `true`, moves `copyItem` itself. If `false`, moves a copy of it. Defaults to `false`.
   */
  placeIntoInlineCopy(copyItem: PageItem, retainExistingFrame?: boolean): PageItem;
  /**
   * Replaces this element's content with content imported from a file.
   * @param using The path to the import file.
   * @param relativeBasePath Base path used to resolve relative paths within the imported content.
   */
  setContent(using: string, relativeBasePath?: string): PageItem;
  /**
   * Inserts text before, in, or after this element.
   * @param using The text to insert.
   * @param position Where to insert the text. Text inserted before or after the element becomes content of the element's *parent*, not the element itself.
   */
  insertTextAsContent(using: string | SpecialCharacters, position: XMLElementPosition): Text;
  /**
   * Applies a table style to the table associated with this element.
   * @param clearingOverrides If `true`, removes local formatting before applying the style. Defaults to `true`.
   */
  applyTableStyle(using: string | TableStyle, clearingOverrides?: boolean): void;
  /**
   * Applies a cell style to the table cells associated with this element.
   * @param clearingOverrides If `true`, removes local formatting before applying the style. Defaults to `true`.
   */
  applyCellStyle(using: string | CellStyle, clearingOverrides?: boolean): void;
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
  placeIntoFrame(on: Spread | Page | MasterSpread, geometricBounds: MeasurementValue[]): PageItem;
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
  importXML(from: FilePath): void;
  /**
   * Evaluates an XPath expression starting at this element.
   * @param using The XPath expression.
   * @param prefixMappingTable Namespace prefix-to-URI mappings, each `[prefix, uri]`.
   */
  evaluateXPathExpression(using: string, prefixMappingTable?: Array<[string, string]>): XMLItem[];
  /**
   * Finds text within this element's content that matches the current find preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): Text[];
  /**
   * Finds and replaces text within this element's content per the current find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): Text[];
  /**
   * Finds text within this element's content matching the current GREP find preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Text[];
  /**
   * Finds and replaces text within this element's content per the current GREP find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Text[];
  /**
   * Finds text within this element's content matching the current find-transliterate preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Text[];
  /**
   * Finds and replaces text within this element's content per the current transliterate find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Text[];
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
  select(existingSelection?: SelectionOptions): void;
}


/**
 * The broadcast proxy for {@link XMLElement} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link XMLElement} there.
 */
export interface XMLElementPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document | XMLElement)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<XMLElementPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<XMLElementPlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The unique ID of the XMLItem. */
  readonly id: (number)[];
  /** Deletes the XMLItem. */
  remove(): (void)[];
  /** The object's DOM class name. */
  readonly constructorName: 'XMLElement';
  /** Resolves the proxy into the individual {@link XMLElement} objects it stands for. */
  getElements(): XMLElement[];
  /** The insertion point immediately before this element's content in its containing story. */
  readonly storyOffset: (InsertionPoint)[];
  /** The story that contains this element's text content. */
  readonly parentStory: (Story)[];
  /** The page item, text, or media object this element is associated with, if any. */
  readonly xmlContent: (Text | Story | PageItem | Movie | Sound | Graphic | Table | Cell)[];
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
  get markupTag(): (XMLTag)[];
  set markupTag(value: XMLTag | string);
  /** The text content of the element. */
  get contents(): (string | SpecialCharacters)[];
  set contents(value: string | SpecialCharacters);
  /**
   * Stores the element in a library, capturing its markup and associated content.
   * @param using The library to store the element in.
   * @param withProperties Initial values for properties of the new library asset.
   */
  store(using: Library, withProperties?: Object): (Asset)[];
  /**
   * Moves the element to the specified location.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference object. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: XMLItem | Text): (XMLElement)[];
  /** Duplicates the element. */
  duplicate(): (XMLElement)[];
  /** Associates this element with `using`, tagging it while preserving its existing content. */
  markup(using: PageItem | Movie | Sound | Graphic | Story | Text | Table): (void)[];
  /** Places this element's XML content into `using`, replacing its existing content. */
  placeXML(using: Story | PageItem | Graphic | Movie | Sound): (void)[];
  /** Removes this element's tag, detaching it from the XML structure while leaving its content in place. */
  untag(): (void)[];
  /**
   * Validates this element (and its descendants) against the document's DTD.
   * @param maximumErrors The maximum number of validation errors to generate. Defaults to `250`.
   */
  validate(maximumErrors?: number): (ValidationError[])[];
  /**
   * Applies a paragraph style to this element's text content.
   * @param clearingOverrides If `true`, clears local formatting before applying the style. Defaults to `true`.
   */
  applyParagraphStyle(using: string | ParagraphStyle, clearingOverrides?: boolean): (void)[];
  /** Applies a character style to this element's text content. */
  applyCharacterStyle(using: string | CharacterStyle): (void)[];
  /**
   * Converts this element to an attribute of its parent element.
   * @param using The name to give the new attribute.
   */
  convertToAttribute(using?: string): (XMLAttribute)[];
  /**
   * Converts this element's content to a table, using its child elements as
   * row and cell delimiters.
   * @param rowTag The tag that marks a table row.
   * @param cellTag The tag that marks a table cell.
   */
  convertElementToTable(rowTag: XMLTag, cellTag: XMLTag): (Table)[];
  /**
   * Places this element into a new inline frame anchored in its parent's text flow.
   * @param dimensions The frame's `[width, height]`.
   */
  placeIntoInlineFrame(dimensions: MeasurementValue[]): (PageItem)[];
  /**
   * Associates an existing page item with this element and places it into an inline frame.
   * @param retainExistingFrame If `true`, moves `copyItem` itself. If `false`, moves a copy of it. Defaults to `false`.
   */
  placeIntoInlineCopy(copyItem: PageItem, retainExistingFrame?: boolean): (PageItem)[];
  /**
   * Replaces this element's content with content imported from a file.
   * @param using The path to the import file.
   * @param relativeBasePath Base path used to resolve relative paths within the imported content.
   */
  setContent(using: string, relativeBasePath?: string): (PageItem)[];
  /**
   * Inserts text before, in, or after this element.
   * @param using The text to insert.
   * @param position Where to insert the text. Text inserted before or after the element becomes content of the element's *parent*, not the element itself.
   */
  insertTextAsContent(using: string | SpecialCharacters, position: XMLElementPosition): (Text)[];
  /**
   * Applies a table style to the table associated with this element.
   * @param clearingOverrides If `true`, removes local formatting before applying the style. Defaults to `true`.
   */
  applyTableStyle(using: string | TableStyle, clearingOverrides?: boolean): (void)[];
  /**
   * Applies a cell style to the table cells associated with this element.
   * @param clearingOverrides If `true`, removes local formatting before applying the style. Defaults to `true`.
   */
  applyCellStyle(using: string | CellStyle, clearingOverrides?: boolean): (void)[];
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
  placeIntoFrame(on: Spread | Page | MasterSpread, geometricBounds: MeasurementValue[]): (PageItem)[];
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
  importXML(from: FilePath): (void)[];
  /**
   * Evaluates an XPath expression starting at this element.
   * @param using The XPath expression.
   * @param prefixMappingTable Namespace prefix-to-URI mappings, each `[prefix, uri]`.
   */
  evaluateXPathExpression(using: string, prefixMappingTable?: Array<[string, string]>): (XMLItem[])[];
  /**
   * Finds text within this element's content that matches the current find preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds and replaces text within this element's content per the current find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text within this element's content matching the current GREP find preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds and replaces text within this element's content per the current GREP find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text within this element's content matching the current find-transliterate preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds and replaces text within this element's content per the current transliterate find/change preferences.
   * @param reverseOrder If `true`, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): (Text[])[];
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
  select(existingSelection?: SelectionOptions): (void)[];
}
