/**
 * Book.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Preferences } from './Preferences';
import type { BookContents } from './BookContents';
import type { BookContent } from './BookContent';
import type { Document } from './Document';
import type { PreflightBookOption } from './PreflightBookOption';
import type { EPubFixedLayoutExportPreference } from './EPubFixedLayoutExportPreference';
import type { EPubExportPreference } from './EPubExportPreference';
import type { PrintPreference } from './PrintPreference';
import type { RepaginateOption } from './Enums/RepaginateOption';
import type { SmartMatchOptions } from './Enums/SmartMatchOptions';
import type { SaveOptions } from './Enums/SaveOptions';
import type { ExportFormat } from './Enums/ExportFormat';
import type { PrinterPresetTypes } from './Enums/PrinterPresetTypes';
import type { PrinterPreset } from './PrinterPreset';
import type { PDFExportPreset } from './PDFExportPreset';
import type { File, Folder, FilePath, FolderPath } from './_base/Types';
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
 * An InDesign book — an ordered collection of {@link BookContent} documents
 * managed and synchronized together.
 */
export interface Book {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Book, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Book, 'single'>);
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
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): string;
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): void;
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): string;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The object's DOM class name. */
  readonly constructorName: 'Book';
  /** Resolves the proxy into the individual {@link Book} objects it stands for. */
  getElements(): Book[];
  /** The name of the Book. */
  readonly name: string;
  /** The book's own file, as a {@link File} entry — reach the path with `.nativePath`. Throws if the book has never been saved; check {@link saved} first. */
  readonly fullName: Promise<File>;
  /** The folder containing the book file, as a {@link Folder} entry — reach the path with `.nativePath`. Not the book file itself; see {@link fullName}. */
  readonly filePath: Promise<Folder>;
  /** If `true`, the Book has been modified since it was last saved. */
  readonly modified: boolean;
  /** If `true`, the Book has been saved since it was created. */
  readonly saved: boolean;
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
  /** The documents contained in this Book. */
  readonly bookContents: BookContents;
  /** Preflight settings applied when preflighting the whole book. */
  readonly preflightBookOptions: PreflightBookOption;
  /** EPub fixed-layout export settings for this book. */
  readonly epubFixedLayoutExportPreferences: EPubFixedLayoutExportPreference;
  /** EPub export settings for this book. */
  readonly epubExportPreferences: EPubExportPreference;
  /** Print settings for this book. */
  readonly printPreferences: PrintPreference;
  /** The document whose styles other book contents are synchronized against. */
  get styleSourceDocument(): Document | BookContent;
  set styleSourceDocument(value: Document | BookContent);
  /** Page-numbering behavior applied to book contents during repagination. */
  get repaginationOption(): RepaginateOption;
  set repaginationOption(value: RepaginateOption);
  /** If `true`, inserts a blank page to fill page-number gaps caused by the odd/even setting in {@link repaginationOption}. */
  get insertBlankPage(): boolean;
  set insertBlankPage(value: boolean);
  /** If `true`, automatically updates page numbers as book content files are added, deleted, or rearranged. */
  get automaticPagination(): boolean;
  set automaticPagination(value: boolean);
  /** If `true`, automatically converts book content files during repagination and synchronization. */
  get automaticDocumentConversion(): boolean;
  set automaticDocumentConversion(value: boolean);
  /** If `true`, synchronizes cross-reference formats across the book. */
  get synchronizeCrossReferenceFormat(): boolean;
  set synchronizeCrossReferenceFormat(value: boolean);
  /** If `true`, merges identically named layers when exporting the book to PDF. */
  get mergeIdenticalLayers(): boolean;
  set mergeIdenticalLayers(value: boolean);
  /** If `true`, synchronizes table of contents styles across the book. */
  get synchronizeTableOfContentStyle(): boolean;
  set synchronizeTableOfContentStyle(value: boolean);
  /** If `true`, synchronizes text variables across the book. */
  get synchronizeTextVariable(): boolean;
  set synchronizeTextVariable(value: boolean);
  /** If `true`, synchronizes table styles across the book. */
  get synchronizeTableStyle(): boolean;
  set synchronizeTableStyle(value: boolean);
  /** If `true`, synchronizes paragraph styles across the book. */
  get synchronizeParagraphStyle(): boolean;
  set synchronizeParagraphStyle(value: boolean);
  /** If `true`, synchronizes character styles across the book. */
  get synchronizeCharacterStyle(): boolean;
  set synchronizeCharacterStyle(value: boolean);
  /** If `true`, synchronizes trap styles across the book. */
  get synchronizeTrapStyle(): boolean;
  set synchronizeTrapStyle(value: boolean);
  /** If `true`, synchronizes master pages across the book. */
  get synchronizeMasterPage(): boolean;
  set synchronizeMasterPage(value: boolean);
  /** If `true`, synchronizes object styles across the book. */
  get synchronizeObjectStyle(): boolean;
  set synchronizeObjectStyle(value: boolean);
  /** If `true`, synchronizes swatches across the book. */
  get synchronizeSwatch(): boolean;
  set synchronizeSwatch(value: boolean);
  /** If `true`, synchronizes cell styles across the book. */
  get synchronizeCellStyle(): boolean;
  set synchronizeCellStyle(value: boolean);
  /** If `true`, synchronizes bullets and numbering lists across the book. */
  get synchronizeBulletNumberingList(): boolean;
  set synchronizeBulletNumberingList(value: boolean);
  /** If `true`, synchronizes conditional text across the book. */
  get synchronizeConditionalText(): boolean;
  set synchronizeConditionalText(value: boolean);
  /** How to match styles that share a name while synchronizing the book. */
  get smartMatchStyleGroups(): SmartMatchOptions;
  set smartMatchStyleGroups(value: SmartMatchOptions);
  /**
   * Packages the book for print, collecting fonts, links, and profiles into a folder.
   * @param to The folder in which to place the packaged files.
   * @param pdfStyle If specified and `includePdf` is `true`, the PDF preset to use if valid; otherwise the last-used preset is used.
   * @param useDocumentHyphenationExceptionsOnly If set, flags the document so it does not reflow when opened on a machine with different hyphenation/dictionary settings.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  packageForPrint(
    to: FolderPath,
    copyingFonts: boolean,
    copyingLinkedGraphics: boolean,
    copyingProfiles: boolean,
    updatingGraphics: boolean,
    includingHiddenLayers: boolean,
    ignorePreflightErrors: boolean,
    creatingReport: boolean,
    includeIdml?: boolean,
    includePdf?: boolean,
    pdfStyle?: string,
    useDocumentHyphenationExceptionsOnly?: boolean,
    versionComments?: string,
    forceSave?: boolean,
  ): boolean;
  /**
   * Preflights the book and optionally saves the resulting report.
   * @param autoOpen If `true`, automatically opens the report after creation. Defaults to `false`.
   */
  preflight(to?: FilePath, autoOpen?: boolean): void;
  /** Prints the book. */
  print(printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): void;
  /**
   * Closes the book.
   * @param saving Whether to save changes before closing. Defaults to {@link SaveOptions.ASK}.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  close(
    saving?: SaveOptions,
    savingIn?: FilePath,
    versionComments?: string,
    forceSave?: boolean,
  ): void;
  /**
   * Saves the book.
   * @param to The file path. Required only if the book has not previously been saved; if it has, specifying a path saves a copy and closes the original.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  save(to?: FilePath, versionComments?: string, forceSave?: boolean): void;
  /**
   * Exports the book to a file.
   * @param format The export format, as an enumeration value or a Save-as-type/Format-menu extension string.
   * @param showingOptions Whether to show the export options dialog. Defaults to `false`.
   * @param using The export preset to use; if `showingOptions` is `true`, the preset chosen in the dialog overrides this.
   * @param whichDocuments A list of book contents to export (may contain duplicates); if omitted, the entire book is exported.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  exportFile(
    format: ExportFormat | string,
    to?: FilePath,
    showingOptions?: boolean,
    using?: PDFExportPreset,
    whichDocuments?: BookContent | BookContent[],
    versionComments?: string,
    forceSave?: boolean,
  ): void;
  /** Synchronizes the entire book to {@link styleSourceDocument}. */
  synchronize(): void;
  /** Repaginates the book. */
  repaginate(): void;
  /** Updates chapter numbers and paragraph numbers throughout the book. */
  updateChapterAndParagraphNumbers(): void;
  /** Updates all numbers (page, chapter, and paragraph) throughout the book. */
  updateAllNumbers(): void;
  /** Updates the cross-references in the entire book. */
  updateAllCrossReferences(): void;
}


/**
 * The broadcast proxy for {@link Book} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Book} there.
 */
export interface BookPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<BookPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<BookPlural, 'plural'>);
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
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): (string)[];
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): (void)[];
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): (string)[];
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The object's DOM class name. */
  readonly constructorName: 'Book';
  /** Resolves the proxy into the individual {@link Book} objects it stands for. */
  getElements(): Book[];
  /** The name of the Book. */
  readonly name: (string)[];
  /** The book's own file, as a {@link File} entry — reach the path with `.nativePath`. Throws if the book has never been saved; check {@link saved} first. */
  readonly fullName: (Promise<File>)[];
  /** The folder containing the book file, as a {@link Folder} entry — reach the path with `.nativePath`. Not the book file itself; see {@link fullName}. */
  readonly filePath: (Promise<Folder>)[];
  /** If `true`, the Book has been modified since it was last saved. */
  readonly modified: (boolean)[];
  /** If `true`, the Book has been saved since it was created. */
  readonly saved: (boolean)[];
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
  /** The documents contained in this Book. */
  readonly bookContents: BookContents;
  /** Preflight settings applied when preflighting the whole book. */
  readonly preflightBookOptions: (PreflightBookOption)[];
  /** EPub fixed-layout export settings for this book. */
  readonly epubFixedLayoutExportPreferences: (EPubFixedLayoutExportPreference)[];
  /** EPub export settings for this book. */
  readonly epubExportPreferences: (EPubExportPreference)[];
  /** Print settings for this book. */
  readonly printPreferences: (PrintPreference)[];
  /** The document whose styles other book contents are synchronized against. */
  get styleSourceDocument(): (Document | BookContent)[];
  set styleSourceDocument(value: Document | BookContent);
  /** Page-numbering behavior applied to book contents during repagination. */
  get repaginationOption(): (RepaginateOption)[];
  set repaginationOption(value: RepaginateOption);
  /** If `true`, inserts a blank page to fill page-number gaps caused by the odd/even setting in {@link repaginationOption}. */
  get insertBlankPage(): (boolean)[];
  set insertBlankPage(value: boolean);
  /** If `true`, automatically updates page numbers as book content files are added, deleted, or rearranged. */
  get automaticPagination(): (boolean)[];
  set automaticPagination(value: boolean);
  /** If `true`, automatically converts book content files during repagination and synchronization. */
  get automaticDocumentConversion(): (boolean)[];
  set automaticDocumentConversion(value: boolean);
  /** If `true`, synchronizes cross-reference formats across the book. */
  get synchronizeCrossReferenceFormat(): (boolean)[];
  set synchronizeCrossReferenceFormat(value: boolean);
  /** If `true`, merges identically named layers when exporting the book to PDF. */
  get mergeIdenticalLayers(): (boolean)[];
  set mergeIdenticalLayers(value: boolean);
  /** If `true`, synchronizes table of contents styles across the book. */
  get synchronizeTableOfContentStyle(): (boolean)[];
  set synchronizeTableOfContentStyle(value: boolean);
  /** If `true`, synchronizes text variables across the book. */
  get synchronizeTextVariable(): (boolean)[];
  set synchronizeTextVariable(value: boolean);
  /** If `true`, synchronizes table styles across the book. */
  get synchronizeTableStyle(): (boolean)[];
  set synchronizeTableStyle(value: boolean);
  /** If `true`, synchronizes paragraph styles across the book. */
  get synchronizeParagraphStyle(): (boolean)[];
  set synchronizeParagraphStyle(value: boolean);
  /** If `true`, synchronizes character styles across the book. */
  get synchronizeCharacterStyle(): (boolean)[];
  set synchronizeCharacterStyle(value: boolean);
  /** If `true`, synchronizes trap styles across the book. */
  get synchronizeTrapStyle(): (boolean)[];
  set synchronizeTrapStyle(value: boolean);
  /** If `true`, synchronizes master pages across the book. */
  get synchronizeMasterPage(): (boolean)[];
  set synchronizeMasterPage(value: boolean);
  /** If `true`, synchronizes object styles across the book. */
  get synchronizeObjectStyle(): (boolean)[];
  set synchronizeObjectStyle(value: boolean);
  /** If `true`, synchronizes swatches across the book. */
  get synchronizeSwatch(): (boolean)[];
  set synchronizeSwatch(value: boolean);
  /** If `true`, synchronizes cell styles across the book. */
  get synchronizeCellStyle(): (boolean)[];
  set synchronizeCellStyle(value: boolean);
  /** If `true`, synchronizes bullets and numbering lists across the book. */
  get synchronizeBulletNumberingList(): (boolean)[];
  set synchronizeBulletNumberingList(value: boolean);
  /** If `true`, synchronizes conditional text across the book. */
  get synchronizeConditionalText(): (boolean)[];
  set synchronizeConditionalText(value: boolean);
  /** How to match styles that share a name while synchronizing the book. */
  get smartMatchStyleGroups(): (SmartMatchOptions)[];
  set smartMatchStyleGroups(value: SmartMatchOptions);
  /**
   * Packages the book for print, collecting fonts, links, and profiles into a folder.
   * @param to The folder in which to place the packaged files.
   * @param pdfStyle If specified and `includePdf` is `true`, the PDF preset to use if valid; otherwise the last-used preset is used.
   * @param useDocumentHyphenationExceptionsOnly If set, flags the document so it does not reflow when opened on a machine with different hyphenation/dictionary settings.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  packageForPrint(
    to: FolderPath,
    copyingFonts: boolean,
    copyingLinkedGraphics: boolean,
    copyingProfiles: boolean,
    updatingGraphics: boolean,
    includingHiddenLayers: boolean,
    ignorePreflightErrors: boolean,
    creatingReport: boolean,
    includeIdml?: boolean,
    includePdf?: boolean,
    pdfStyle?: string,
    useDocumentHyphenationExceptionsOnly?: boolean,
    versionComments?: string,
    forceSave?: boolean,
  ): boolean;
  /**
   * Preflights the book and optionally saves the resulting report.
   * @param autoOpen If `true`, automatically opens the report after creation. Defaults to `false`.
   */
  preflight(to?: FilePath, autoOpen?: boolean): (void)[];
  /** Prints the book. */
  print(printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): (void)[];
  /**
   * Closes the book.
   * @param saving Whether to save changes before closing. Defaults to {@link SaveOptions.ASK}.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  close(
    saving?: SaveOptions,
    savingIn?: FilePath,
    versionComments?: string,
    forceSave?: boolean,
  ): void;
  /**
   * Saves the book.
   * @param to The file path. Required only if the book has not previously been saved; if it has, specifying a path saves a copy and closes the original.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  save(to?: FilePath, versionComments?: string, forceSave?: boolean): (void)[];
  /**
   * Exports the book to a file.
   * @param format The export format, as an enumeration value or a Save-as-type/Format-menu extension string.
   * @param showingOptions Whether to show the export options dialog. Defaults to `false`.
   * @param using The export preset to use; if `showingOptions` is `true`, the preset chosen in the dialog overrides this.
   * @param whichDocuments A list of book contents to export (may contain duplicates); if omitted, the entire book is exported.
   * @param forceSave If `true`, forcibly saves a version. Defaults to `false`.
   */
  exportFile(
    format: ExportFormat | string,
    to?: FilePath,
    showingOptions?: boolean,
    using?: PDFExportPreset,
    whichDocuments?: BookContent | BookContent[],
    versionComments?: string,
    forceSave?: boolean,
  ): void;
  /** Synchronizes the entire book to {@link styleSourceDocument}. */
  synchronize(): (void)[];
  /** Repaginates the book. */
  repaginate(): (void)[];
  /** Updates chapter numbers and paragraph numbers throughout the book. */
  updateChapterAndParagraphNumbers(): (void)[];
  /** Updates all numbers (page, chapter, and paragraph) throughout the book. */
  updateAllNumbers(): (void)[];
  /** Updates the cross-references in the entire book. */
  updateAllCrossReferences(): (void)[];
}
