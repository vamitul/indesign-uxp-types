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

/**
 * An InDesign book — an ordered collection of {@link BookContent} documents
 * managed and synchronized together.
 */
export interface Book<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Book';

  /** Resolves the proxy into the individual {@link Book} objects it stands for. */
  getElements(): Book<'single'>[];

  /** The name of the Book. */
  readonly name: Read<M, string>;

  /** The book's own file, as a {@link File} entry — reach the path with `.nativePath`. Throws if the book has never been saved; check {@link saved} first. */
  readonly fullName: Read<M, Promise<File>>;

  /** The folder containing the book file, as a {@link Folder} entry — reach the path with `.nativePath`. Not the book file itself; see {@link fullName}. */
  readonly filePath: Read<M, Promise<Folder>>;

  /** If `true`, the Book has been modified since it was last saved. */
  readonly modified: Read<M, boolean>;

  /** If `true`, the Book has been saved since it was created. */
  readonly saved: Read<M, boolean>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;

  /** The documents contained in this Book. */
  readonly bookContents: BookContents;

  /** Preflight settings applied when preflighting the whole book. */
  readonly preflightBookOptions: Read<M, PreflightBookOption>;

  /** EPub fixed-layout export settings for this book. */
  readonly epubFixedLayoutExportPreferences: Read<M, EPubFixedLayoutExportPreference>;

  /** EPub export settings for this book. */
  readonly epubExportPreferences: Read<M, EPubExportPreference>;

  /** Print settings for this book. */
  readonly printPreferences: Read<M, PrintPreference>;

  /** The document whose styles other book contents are synchronized against. */
  get styleSourceDocument(): Read<M, Document | BookContent>;
  set styleSourceDocument(value: Document | BookContent);

  /** Page-numbering behavior applied to book contents during repagination. */
  get repaginationOption(): Read<M, RepaginateOption>;
  set repaginationOption(value: RepaginateOption);

  /** If `true`, inserts a blank page to fill page-number gaps caused by the odd/even setting in {@link repaginationOption}. */
  get insertBlankPage(): Read<M, boolean>;
  set insertBlankPage(value: boolean);

  /** If `true`, automatically updates page numbers as book content files are added, deleted, or rearranged. */
  get automaticPagination(): Read<M, boolean>;
  set automaticPagination(value: boolean);

  /** If `true`, automatically converts book content files during repagination and synchronization. */
  get automaticDocumentConversion(): Read<M, boolean>;
  set automaticDocumentConversion(value: boolean);

  /** If `true`, synchronizes cross-reference formats across the book. */
  get synchronizeCrossReferenceFormat(): Read<M, boolean>;
  set synchronizeCrossReferenceFormat(value: boolean);

  /** If `true`, merges identically named layers when exporting the book to PDF. */
  get mergeIdenticalLayers(): Read<M, boolean>;
  set mergeIdenticalLayers(value: boolean);

  /** If `true`, synchronizes table of contents styles across the book. */
  get synchronizeTableOfContentStyle(): Read<M, boolean>;
  set synchronizeTableOfContentStyle(value: boolean);

  /** If `true`, synchronizes text variables across the book. */
  get synchronizeTextVariable(): Read<M, boolean>;
  set synchronizeTextVariable(value: boolean);

  /** If `true`, synchronizes table styles across the book. */
  get synchronizeTableStyle(): Read<M, boolean>;
  set synchronizeTableStyle(value: boolean);

  /** If `true`, synchronizes paragraph styles across the book. */
  get synchronizeParagraphStyle(): Read<M, boolean>;
  set synchronizeParagraphStyle(value: boolean);

  /** If `true`, synchronizes character styles across the book. */
  get synchronizeCharacterStyle(): Read<M, boolean>;
  set synchronizeCharacterStyle(value: boolean);

  /** If `true`, synchronizes trap styles across the book. */
  get synchronizeTrapStyle(): Read<M, boolean>;
  set synchronizeTrapStyle(value: boolean);

  /** If `true`, synchronizes master pages across the book. */
  get synchronizeMasterPage(): Read<M, boolean>;
  set synchronizeMasterPage(value: boolean);

  /** If `true`, synchronizes object styles across the book. */
  get synchronizeObjectStyle(): Read<M, boolean>;
  set synchronizeObjectStyle(value: boolean);

  /** If `true`, synchronizes swatches across the book. */
  get synchronizeSwatch(): Read<M, boolean>;
  set synchronizeSwatch(value: boolean);

  /** If `true`, synchronizes cell styles across the book. */
  get synchronizeCellStyle(): Read<M, boolean>;
  set synchronizeCellStyle(value: boolean);

  /** If `true`, synchronizes bullets and numbering lists across the book. */
  get synchronizeBulletNumberingList(): Read<M, boolean>;
  set synchronizeBulletNumberingList(value: boolean);

  /** If `true`, synchronizes conditional text across the book. */
  get synchronizeConditionalText(): Read<M, boolean>;
  set synchronizeConditionalText(value: boolean);

  /** How to match styles that share a name while synchronizing the book. */
  get smartMatchStyleGroups(): Read<M, SmartMatchOptions>;
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
  preflight(to?: FilePath, autoOpen?: boolean): Read<M, void>;

  /** Prints the book. */
  print(printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): Read<M, void>;

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
  save(to?: FilePath, versionComments?: string, forceSave?: boolean): Read<M, void>;

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
  synchronize(): Read<M, void>;

  /** Repaginates the book. */
  repaginate(): Read<M, void>;

  /** Updates chapter numbers and paragraph numbers throughout the book. */
  updateChapterAndParagraphNumbers(): Read<M, void>;

  /** Updates all numbers (page, chapter, and paragraph) throughout the book. */
  updateAllNumbers(): Read<M, void>;

  /** Updates the cross-references in the entire book. */
  updateAllCrossReferences(): Read<M, void>;
}
