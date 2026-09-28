/**
 * Application.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject } from './_base/DomObjects';
import type { FilePath, FolderPath, File, Folder } from './_base/Types';

import type { ColorSpace } from './Enums/ColorSpace';
import type { DigpubArticleVersion } from './Enums/DigpubArticleVersion';
import type { DigpubVersion } from './Enums/DigpubVersion';
import type { ExportPresetFormat } from './Enums/ExportPresetFormat';
import type { FeatureSetOptions } from './Enums/FeatureSetOptions';
import type { GlobalClashResolutionStrategy } from './Enums/GlobalClashResolutionStrategy';
import type { ImportFormat } from './Enums/ImportFormat';
import type { InCopyUIColors } from './Enums/InCopyUIColors';
import type { LanguageAndRegion } from './Enums/LanguageAndRegion';
import type { LiveDrawingOptions } from './Enums/LiveDrawingOptions';
import type { Locale } from './Enums/Locale';
import type { NothingEnum } from './Enums/NothingEnum';
import type { OpenOptions } from './Enums/OpenOptions';
import type { PerformanceMetricOptions } from './Enums/PerformanceMetricOptions';
import type { PrinterPresetTypes } from './Enums/PrinterPresetTypes';
import type { SaveOptions } from './Enums/SaveOptions';
import type { ScriptLanguage } from './Enums/ScriptLanguage';
import type { SearchModes } from './Enums/SearchModes';
import type { SelectAll } from './Enums/SelectAll';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { StyleType } from './Enums/StyleType';
import type { TaskState } from './Enums/TaskState';
import type { UndoModes } from './Enums/UndoModes';

import type { Book } from './Book';
import type { Library } from './Library';
import type { CellStyle } from './CellStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { Color } from './Color';
import type { Document } from './Document';
import type { MotionPreset } from './MotionPreset';
import type { ObjectStyle } from './ObjectStyle';
import type { PageItem } from './PageItem';
import type { ParagraphStyle } from './ParagraphStyle';
import type { PreflightProfile } from './PreflightProfile';
import type { PrinterPreset } from './PrinterPreset';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { TableStyle } from './TableStyle';
import type { Text } from './Text';
import type { Window } from './Window';
import type { LayoutWindow } from './LayoutWindow';
import type { StoryWindow } from './StoryWindow';

// Preference / settings / default objects (readonly accessors)
import type { AlignDistributePreference } from './AlignDistributePreference';
import type { AnchoredObjectDefault } from './AnchoredObjectDefault';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { AutoCorrectPreference } from './AutoCorrectPreference';
import type { BaselineFrameGridOption } from './BaselineFrameGridOption';
import type { ButtonPreference } from './ButtonPreference';
import type { CjkGridPreference } from './CjkGridPreference';
import type { ClipboardPreference } from './ClipboardPreference';
import type { ColorSetting } from './ColorSetting';
import type { ConditionalTextPreference } from './ConditionalTextPreference';
import type { ContentPlacerObject } from './ContentPlacerObject';
import type { DataMergeOption } from './DataMergeOption';
import type { DictionaryPreference } from './DictionaryPreference';
import type { DisplayPerformancePreference } from './DisplayPerformancePreference';
import type { DisplaySettings } from './DisplaySettings';
import type { DocumentPreference } from './DocumentPreference';
import type { EPSExportPreference } from './EPSExportPreference';
import type { EPSImportPreference } from './EPSImportPreference';
import type { EPubExportPreviewAppPreference } from './EPubExportPreviewAppPreference';
import type { EndnoteOption } from './EndnoteOption';
import type { ExcelImportPreference } from './ExcelImportPreference';
import type { ExportForWebPreference } from './ExportForWebPreference';
import type { FontLockingPreference } from './FontLockingPreference';
import type { FontSyncPreference } from './FontSyncPreference';
import type { FootnoteOption } from './FootnoteOption';
import type { FrameFittingOption } from './FrameFittingOption';
import type { GalleyPreference } from './GalleyPreference';
import type { GeneralPreference } from './GeneralPreference';
import type { GpuPerformancePreference } from './GpuPerformancePreference';
import type { GrabberPreference } from './GrabberPreference';
import type { GridPreference } from './GridPreference';
import type { GridPrintingPreference } from './GridPrintingPreference';
import type { GuidePreference } from './GuidePreference';
import type { HttpLinkConnectionManagerObject } from './HttpLinkConnectionManagerObject';
import type { IMEPreference } from './IMEPreference';
import type { ImageIOPreference } from './ImageIOPreference';
import type { ImagePreference } from './ImagePreference';
import type { ImportedPageAttribute } from './ImportedPageAttribute';
import type { InCopyExportOption } from './InCopyExportOption';
import type { IndexOptions } from './IndexOptions';
import type { InteractivePDFExportPreference } from './InteractivePDFExportPreference';
import type { JPEGExportPreference } from './JPEGExportPreference';
import type { LayoutGridDataInformation } from './LayoutGridDataInformation';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { LinkedStoryOption } from './LinkedStoryOption';
import type { LinkingPreference } from './LinkingPreference';
import type { MarginPreference } from './MarginPreference';
import type { MojikumiUiPreference } from './MojikumiUiPreference';
import type { NotePreference } from './NotePreference';
import type { PDFExportPreference } from './PDFExportPreference';
import type { PDFPlacePreference } from './PDFPlacePreference';
import type { PNGExportPreference } from './PNGExportPreference';
import type { PageItemDefault } from './PageItemDefault';
import type { PasteboardPreference } from './PasteboardPreference';
import type { PolygonPreference } from './PolygonPreference';
import type { PreflightBookOption } from './PreflightBookOption';
import type { PreflightOption } from './PreflightOption';
import type { ScriptPreference } from './ScriptPreference';
import type { SmartGuidePreference } from './SmartGuidePreference';
import type { SpellPreference } from './SpellPreference';
import type { StoryGridDataInformation } from './StoryGridDataInformation';
import type { StoryPreference } from './StoryPreference';
import type { StrokeFillProxySetting } from './StrokeFillProxySetting';
import type { TaggedPDFPreference } from './TaggedPDFPreference';
import type { TaggedTextExportPreference } from './TaggedTextExportPreference';
import type { TaggedTextImportPreference } from './TaggedTextImportPreference';
import type { TextDefault } from './TextDefault';
import type { TextEditingPreference } from './TextEditingPreference';
import type { TextExportPreference } from './TextExportPreference';
import type { TextFramePreference } from './TextFramePreference';
import type { TextImportPreference } from './TextImportPreference';
import type { TextPreference } from './TextPreference';
import type { TextWrapPreference } from './TextWrapPreference';
import type { ToolBox } from './ToolBox';
import type { TrackChangesPreference } from './TrackChangesPreference';
import type { TransformPreference } from './TransformPreference';
import type { TransparencyPreference } from './TransparencyPreference';
import type { TypeContextualUiPreference } from './TypeContextualUiPreference';
import type { ViewPreference } from './ViewPreference';
import type { WatermarkPreference } from './WatermarkPreference';
import type { WordRTFImportPreference } from './WordRTFImportPreference';
import type { XMLExportPreference } from './XMLExportPreference';
import type { XMLImportPreference } from './XMLImportPreference';
import type { XMLPreference } from './XMLPreference';
import type { XMLViewPreference } from './XMLViewPreference';

// Find/change preference objects
import type { FindChangeColorOption } from './FindChangeColorOption';
import type { FindColorPreference } from './FindColorPreference';
import type { ChangeColorPreference } from './ChangeColorPreference';
import type { FindChangeTextOption } from './FindChangeTextOption';
import type { FindChangeGrepOption } from './FindChangeGrepOption';
import type { FindChangeGlyphOption } from './FindChangeGlyphOption';
import type { FindChangeObjectOption } from './FindChangeObjectOption';
import type { FindTextPreference } from './FindTextPreference';
import type { ChangeTextPreference } from './ChangeTextPreference';
import type { FindGrepPreference } from './FindGrepPreference';
import type { ChangeGrepPreference } from './ChangeGrepPreference';
import type { FindGlyphPreference } from './FindGlyphPreference';
import type { ChangeGlyphPreference } from './ChangeGlyphPreference';
import type { FindObjectPreference } from './FindObjectPreference';
import type { ChangeObjectPreference } from './ChangeObjectPreference';
import type { FindChangeTransliterateOption } from './FindChangeTransliterateOption';
import type { FindTransliteratePreference } from './FindTransliteratePreference';
import type { ChangeTransliteratePreference } from './ChangeTransliteratePreference';

// Application-scoped collections
import type { Preferences } from './Preferences';
import type { PreflightProfiles } from './PreflightProfiles';
import type { PreflightRules } from './PreflightRules';
import type { PreflightProcesses } from './PreflightProcesses';
import type { Panels } from './Panels';
import type { Libraries } from './Libraries';
import type { PrinterPresets } from './PrinterPresets';
import type { XMLExportMaps } from './XMLExportMaps';
import type { XMLImportMaps } from './XMLImportMaps';
import type { XMLRuleProcessors } from './XMLRuleProcessors';
import type { XMLTags } from './XMLTags';
import type { FlattenerPresets } from './FlattenerPresets';
import type { UserDictionaries } from './UserDictionaries';
import type { ParagraphStyleGroups } from './ParagraphStyleGroups';
import type { CharacterStyleGroups } from './CharacterStyleGroups';
import type { CharacterStyles } from './CharacterStyles';
import type { ParagraphStyles } from './ParagraphStyles';
import type { TextVariables } from './TextVariables';
import type { TableStyles } from './TableStyles';
import type { TableStyleGroups } from './TableStyleGroups';
import type { CellStyles } from './CellStyles';
import type { CellStyleGroups } from './CellStyleGroups';
import type { StrokeStyles } from './StrokeStyles';
import type { DashedStrokeStyles } from './DashedStrokeStyles';
import type { DottedStrokeStyles } from './DottedStrokeStyles';
import type { StripedStrokeStyles } from './StripedStrokeStyles';
import type { DocumentPresets } from './DocumentPresets';
import type { AutoCorrectTables } from './AutoCorrectTables';
import type { ParaStyleMappings } from './ParaStyleMappings';
import type { CharStyleMappings } from './CharStyleMappings';
import type { TableStyleMappings } from './TableStyleMappings';
import type { CellStyleMappings } from './CellStyleMappings';
import type { IdleTasks } from './IdleTasks';
import type { Inks } from './Inks';
import type { TrapPresets } from './TrapPresets';
import type { PDFExportPresets } from './PDFExportPresets';
import type { LanguagesWithVendors } from './LanguagesWithVendors';
import type { IndexingSortOptions } from './IndexingSortOptions';
import type { ObjectStyleGroups } from './ObjectStyleGroups';
import type { ObjectStyles } from './ObjectStyles';
import type { TransformationMatrices } from './TransformationMatrices';
import type { Fonts } from './Fonts';
import type { MotionPresets } from './MotionPresets';
import type { Documents } from './Documents';
import type { Swatches } from './Swatches';
import type { Colors } from './Colors';
import type { Tints } from './Tints';
import type { Gradients } from './Gradients';
import type { MixedInks } from './MixedInks';
import type { MixedInkGroups } from './MixedInkGroups';
import type { ColorGroups } from './ColorGroups';
import type { Dialogs } from './Dialogs';
import type { Conditions } from './Conditions';
import type { ConditionSets } from './ConditionSets';
import type { CompositeFonts } from './CompositeFonts';
import type { NamedGrids } from './NamedGrids';
import type { KinsokuTables } from './KinsokuTables';
import type { MojikumiTables } from './MojikumiTables';
import type { Books } from './Books';
import type { NumberingLists } from './NumberingLists';
import type { Windows } from './Windows';
import type { LayoutWindows } from './LayoutWindows';
import type { StoryWindows } from './StoryWindows';
import type { BackgroundTasks } from './BackgroundTasks';
import type { MenuActions } from './MenuActions';
import type { ScriptMenuActions } from './ScriptMenuActions';
import type { Menus } from './Menus';
import type { SelectionItem } from './_base/Unions';

/**
 * The InDesign application, reached as the global `app` — where every script starts.
 *
 * It holds the session-wide surface: the application-scoped collections
 * ({@link documents}, {@link fonts}, {@link swatches}, {@link menus}, and the style and
 * preset collections), the *default* preference objects that seed new documents, the
 * find/change preference objects the document-level `findText` and `changeGrep` searches
 * read, and the session commands `open`, `close`, `quit`, `print`, `place`, `doScript`
 * and `undo`.
 *
 * Document-scoped state — `activeLayer`, page items, the document body — is on
 * {@link Document}, not here.
 */
export interface Application<M extends Mode = 'single'> extends LabelableEventDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Application';

  /** Resolves the proxy into the individual {@link Application} objects it stands for. */
  getElements(): Application<'single'>[];

  /** The application's name. Unlike most named objects, it cannot be renamed. */
  readonly name: Read<M, string>;

  /** The application version, e.g. `"21.0"`. */
  readonly version: Read<M, string>;

  /** The UI/formatting locale the application is running under. */
  readonly locale: Read<M, Locale>;

  /** The application's own executable file, as a {@link File} entry — reach the path with `.nativePath`. */
  readonly fullName: Read<M, Promise<File>>;

  /** The folder containing the application executable, as a {@link Folder} entry — reach the path with `.nativePath`. Not the executable itself; see {@link fullName}. */
  readonly filePath: Read<M, Promise<Folder>>;

  /** Whether the application is visible on screen. */
  readonly visible: Read<M, boolean>;

  /** The user's serial number. */
  readonly serialNumber: Read<M, string>;

  /** The current user's Adobe ID. */
  readonly userAdobeId: Read<M, string>;

  /** The current user's GUID. */
  readonly userGuid: Read<M, string>;

  /** Whether a modal dialog or alert is currently active — script operations that touch the UI may block while this is `true`. */
  readonly modalState: Read<M, boolean>;

  /** The licensed feature set. */
  readonly featureSet: Read<M, FeatureSetOptions>;

  /** Path to the script currently running from the Scripts panel, if any. */
  readonly activeScript: Read<M, Promise<File>>;

  /** Undo mode in effect for the current script execution. */
  readonly activeScriptUndoMode: Read<M, UndoModes>;

  /** Name of the action at the top of the undo stack — what {@link undo} will reverse. */
  readonly undoName: Read<M, string>;

  /** Name of the action at the top of the redo stack — what {@link redo} will reapply. */
  readonly redoName: Read<M, string>;

  /** Names of the queued undo steps, most-recent first. */
  readonly undoHistory: Read<M, string[]>;

  /** Names of the queued redo steps. */
  readonly redoHistory: Read<M, string[]>;

  /** Whether the Home screen is currently shown. */
  readonly homeScreenVisible: Read<M, boolean>;

  /** Extensions of the file types that {@link place} can import. */
  readonly placeableFileExtensions: Read<M, string[]>;

  /** The file types that {@link place} can import. */
  readonly placeableFileTypes: Read<M, string[]>;

  /** Live sampled performance metrics — see {@link performanceMetric}. */
  readonly performanceMetrics: Read<M, number[]>;

  /** Object types a preflight rule can operate on. */
  readonly allPreflightObjectTypes: Read<M, string[]>;

  /** Preflight rule categories declared by loaded rules. */
  readonly allPreflightRuleCategories: Read<M, string[]>;

  /** IDs of all declared preflight rules. */
  readonly allPreflightRuleIDs: Read<M, string[]>;

  // ---- Snapshot arrays (all styles across groups) --------------------------

  /** Every {@link ParagraphStyle}, flattening all style groups. A snapshot array. */
  readonly allParagraphStyles: Read<M, ParagraphStyle[]>;

  /** Every {@link CharacterStyle}, flattening all style groups. A snapshot array. */
  readonly allCharacterStyles: Read<M, CharacterStyle[]>;

  /** Every {@link ObjectStyle}, flattening all style groups. A snapshot array. */
  readonly allObjectStyles: Read<M, ObjectStyle[]>;

  /** Every {@link TableStyle}, flattening all style groups. A snapshot array. */
  readonly allTableStyles: Read<M, TableStyle[]>;

  /** Every {@link CellStyle}, flattening all style groups. A snapshot array. */
  readonly allCellStyles: Read<M, CellStyle[]>;

  /** {@link Swatch}es not currently applied to any object. A snapshot array. */
  readonly unusedSwatches: Read<M, Swatch[]>;

  // ---- Read/write application state ----------------------------------------

  /** The front-most {@link Document}. Assign a document to bring it forward. */
  get activeDocument(): Read<M, Document>;
  set activeDocument(value: Document);

  /** The front-most window. Assign a window to bring it forward. */
  get activeWindow(): Read<M, Window | LayoutWindow | StoryWindow>;
  set activeWindow(value: Window | LayoutWindow | StoryWindow);

  /** The active {@link Book}. */
  get activeBook(): Read<M, Book>;
  set activeBook(value: Book);

  /**
   * The current selection. Assign a single object, an array of objects, or
   * {@link NothingEnum.NOTHING} to clear it.
   */
  get selection(): Read<M, SelectionItem[]>;
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);

  /** Key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): Read<M, PageItem | null>;
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);

  /** Whether page items redraw live during mouse operations — never, immediately, or after a brief pause. See {@link LiveDrawingOptions}. */
  get liveScreenDrawing(): Read<M, LiveDrawingOptions>;
  set liveScreenDrawing(value: LiveDrawingOptions);

  /** The tracked-changes / notes author name used for edits made through scripting. */
  get userName(): Read<M, string>;
  set userName(value: string);

  /**
   * The tracked-changes / notes author color. Assign an `[R, G, B]` triple
   * (each `0`–`255`) or a named {@link InCopyUIColors} value.
   */
  get userColor(): Read<M, number[] | InCopyUIColors>;
  set userColor(value: [number, number, number] | InCopyUIColors);

  /** Whether flex-layout attributes are auto-detected when adding elements to a flex container from the canvas. */
  get autoDetectionEnabled(): Read<M, boolean>;
  set autoDetectionEnabled(value: boolean);

  /** Whether applying an object style first clears any local overrides on the target. */
  get clearOverridesWhenApplyingStyle(): Read<M, boolean>;
  set clearOverridesWhenApplyingStyle(value: boolean);

  /** The HTTP link connection manager — experimental. */
  get httpLinkConnectionManager(): Read<M, HttpLinkConnectionManagerObject>;
  set httpLinkConnectionManager(value: HttpLinkConnectionManagerObject);

  // ---- Toolbox / display ---------------------------------------------------

  /** Current tool-box state — see {@link ToolBox}. */
  readonly toolBoxTools: Read<M, ToolBox>;

  /** Live display-quality settings — see {@link DisplaySettings}. */
  readonly displaySettings: DisplaySettings;

  /** The content placer used to load and place linked/unlinked page-item content. */
  readonly contentPlacer: Read<M, ContentPlacerObject>;

  // ---- Default preference & settings objects -------------------------------
  // These seed new documents; per-document overrides live on Document.

  /** General preference defaults. */
  readonly generalPreferences: Read<M, GeneralPreference>;

  /** Clipboard interaction defaults. */
  readonly clipboardPreferences: Read<M, ClipboardPreference>;

  /** Default transform (rotate/scale/flip/shear) behaviors. */
  readonly transformPreferences: Read<M, TransformPreference>;

  /** XML view preference defaults. */
  readonly xmlViewPreferences: Read<M, XMLViewPreference>;

  /** Display-performance defaults. */
  readonly displayPerformancePreferences: Read<M, DisplayPerformancePreference>;

  /** GPU-performance defaults. */
  readonly gpuPerformancePreferences: Read<M, GpuPerformancePreference>;

  /** Galley/story-editor view defaults. */
  readonly galleyPreferences: Read<M, GalleyPreference>;

  /** Text-editing defaults. */
  readonly textEditingPreferences: Read<M, TextEditingPreference>;

  /** Preflight option defaults. */
  readonly preflightOptions: Read<M, PreflightOption>;

  /** Preflight book option defaults. */
  readonly preflightBookOptions: Read<M, PreflightBookOption>;

  /** Data-merge option defaults. */
  readonly dataMergeOptions: Read<M, DataMergeOption>;

  /** Note preference defaults. */
  readonly notePreferences: Read<M, NotePreference>;

  /** JPEG export defaults. */
  readonly jpegExportPreferences: Read<M, JPEGExportPreference>;

  /** Text import defaults. */
  readonly textImportPreferences: Read<M, TextImportPreference>;

  /** Text export defaults. */
  readonly textExportPreferences: Read<M, TextExportPreference>;

  /** Tagged-text export defaults. */
  readonly taggedTextExportPreferences: Read<M, TaggedTextExportPreference>;

  /** Tagged-text import defaults. */
  readonly taggedTextImportPreferences: Read<M, TaggedTextImportPreference>;

  /** Word / RTF import defaults. */
  readonly wordRTFImportPreferences: Read<M, WordRTFImportPreference>;

  /** Excel import defaults. */
  readonly excelImportPreferences: Read<M, ExcelImportPreference>;

  /** EPUB preview-app defaults. */
  readonly epubViewingAppsPreferences: Read<M, EPubExportPreviewAppPreference>;

  /** XML defaults. */
  readonly xmlPreferences: Read<M, XMLPreference>;

  /** XML import defaults. */
  readonly xmlImportPreferences: Read<M, XMLImportPreference>;

  /** XML export defaults. */
  readonly xmlExportPreferences: Read<M, XMLExportPreference>;

  /** Export-for-web defaults. */
  readonly exportForWebPreferences: Read<M, ExportForWebPreference>;

  /** Transparency defaults. */
  readonly transparencyPreferences: Read<M, TransparencyPreference>;

  /** Text-frame defaults. */
  readonly textFramePreferences: Read<M, TextFramePreference>;

  /** Text defaults (composer, etc.). */
  readonly textPreferences: Read<M, TextPreference>;

  /** Default text formatting applied to new text. */
  readonly textDefaults: Read<M, TextDefault>;

  /** Endnote option defaults. */
  readonly endnoteOptions: Read<M, EndnoteOption>;

  /** User-dictionary defaults. */
  readonly dictionaryPreferences: Read<M, DictionaryPreference>;

  /** Font-sync (Adobe Fonts) defaults. */
  readonly fontSyncPreferences: Read<M, FontSyncPreference>;

  /** Story defaults. */
  readonly storyPreferences: Read<M, StoryPreference>;

  /** Anchored-object defaults. */
  readonly anchoredObjectDefaults: Read<M, AnchoredObjectDefault>;

  /** Anchored-object settings. */
  readonly anchoredObjectSettings: Read<M, AnchoredObjectSetting>;

  /** Baseline frame-grid defaults. */
  readonly baselineFrameGridOptions: Read<M, BaselineFrameGridOption>;

  /** Footnote option defaults. */
  readonly footnoteOptions: Read<M, FootnoteOption>;

  /** Text-wrap defaults for wrapping text around objects. */
  readonly textWrapPreferences: Read<M, TextWrapPreference>;

  /** Contextual-UI-for-alternates defaults. */
  readonly typeContextualUiPrefs: Read<M, TypeContextualUiPreference>;

  /** Document defaults (page size/margins) applied to new documents. */
  readonly documentPreferences: Read<M, DocumentPreference>;

  /** Baseline/document grid defaults. */
  readonly gridPreferences: Read<M, GridPreference>;

  /** Guide defaults. */
  readonly guidePreferences: Read<M, GuidePreference>;

  /** Margin/column defaults. */
  readonly marginPreferences: Read<M, MarginPreference>;

  /** Pasteboard defaults. */
  readonly pasteboardPreferences: Read<M, PasteboardPreference>;

  /** View defaults. */
  readonly viewPreferences: Read<M, ViewPreference>;

  /** Smart-guide defaults. */
  readonly smartGuidePreferences: Read<M, SmartGuidePreference>;

  /** Spell-check defaults. */
  readonly spellPreferences: Read<M, SpellPreference>;

  /** Auto-correct defaults. */
  readonly autoCorrectPreferences: Read<M, AutoCorrectPreference>;

  /** Linked-story option defaults. */
  readonly linkedStoryOptions: Read<M, LinkedStoryOption>;

  /** Linked-page-item option defaults. */
  readonly linkedPageItemOptions: Read<M, LinkedPageItemOption>;

  /** Scripting defaults (measurement units, user-interaction level). */
  readonly scriptPreferences: Read<M, ScriptPreference>;


  /** EPS export defaults. */
  readonly epsExportPreferences: Read<M, EPSExportPreference>;

  /** PNG export defaults. */
  readonly pngExportPreferences: Read<M, PNGExportPreference>;

  /** PDF export defaults (used when exporting without an explicit preset). */
  readonly pdfExportPreferences: Read<M, PDFExportPreference>;

  /** Interactive-PDF export defaults. */
  readonly interactivePDFExportPreferences: Read<M, InteractivePDFExportPreference>;

  /** PDF placement defaults. */
  readonly pdfPlacePreferences: Read<M, PDFPlacePreference>;

  /** Tagged-PDF defaults. */
  readonly taggedPDFPreferences: Read<M, TaggedPDFPreference>;

  /** Link-management defaults. */
  readonly linkingPreferences: Read<M, LinkingPreference>;

  /** Grabber (scroll display-quality) defaults. */
  readonly grabberPreferences: Read<M, GrabberPreference>;

  /** Index-formatting defaults. */
  readonly indexGenerationOptions: Read<M, IndexOptions>;

  /** Track-changes defaults. */
  readonly trackChangesPreferences: Read<M, TrackChangesPreference>;

  /** InCopy (INCX) export defaults. */
  readonly incopyExportOptions: Read<M, InCopyExportOption>;

  /** IME (input method) defaults. */
  readonly imePreferences: Read<M, IMEPreference>;

  /** Image import defaults. */
  readonly imageIOPreferences: Read<M, ImageIOPreference>;

  /** Image display defaults. */
  readonly imagePreferences: Read<M, ImagePreference>;

  /** Stroke/fill proxy (swatch-proxy) defaults. */
  readonly strokeFillProxySettings: Read<M, StrokeFillProxySetting>;

  /** Polygon-creation defaults. */
  readonly polygonPreferences: Read<M, PolygonPreference>;

  /** Default page-item formatting. */
  readonly pageItemDefaults: Read<M, PageItemDefault>;

  /** Align/distribute defaults. */
  readonly alignDistributePreferences: Read<M, AlignDistributePreference>;

  /** Frame-fitting defaults applied to placed or pasted content. */
  readonly frameFittingOptions: Read<M, FrameFittingOption>;

  /** Button-form defaults. */
  readonly buttonPreferences: Read<M, ButtonPreference>;

  /** EPS import defaults. */
  readonly epsImportPreferences: Read<M, EPSImportPreference>;

  /** Placed-InDesign-page attribute defaults. */
  readonly importedPageAttributes: Read<M, ImportedPageAttribute>;

  /** Watermark defaults. */
  readonly watermarkPreferences: Read<M, WatermarkPreference>;

  /** Conditional-text defaults. */
  readonly conditionalTextPreferences: Read<M, ConditionalTextPreference>;

  /** Color-management defaults. */
  readonly colorSettings: Read<M, ColorSetting>;

  /** Layout-grid defaults (CJK). */
  readonly layoutGridData: Read<M, LayoutGridDataInformation>;

  /** Frame-grid defaults (CJK). */
  readonly storyGridData: Read<M, StoryGridDataInformation>;

  /** CJK grid defaults. */
  readonly cjkGridPreferences: Read<M, CjkGridPreference>;

  /** Grid printing/export defaults. */
  readonly gridPrintingPreferences: Read<M, GridPrintingPreference>;

  /** Font-locking defaults. */
  readonly fontLockingPreferences: Read<M, FontLockingPreference>;

  /** Mojikumi UI defaults. */
  readonly mojikumiUIPreferences: Read<M, MojikumiUiPreference>;

  // ---- Find / change preference objects ------------------------------------
  // Fill these in before calling the corresponding find*/change* method.

  /** Options for {@link findColor} / {@link changeColor}. */
  get findChangeColorOptions(): Read<M, FindChangeColorOption>;
  set findChangeColorOptions(value: FindChangeColorOption | NothingEnum.NOTHING | null);
  /** The color to search for. */
  get findColorPreferences(): Read<M, FindColorPreference>;
  set findColorPreferences(value: FindColorPreference | NothingEnum.NOTHING | null);
  /** The replacement color. */
  get changeColorPreferences(): Read<M, ChangeColorPreference>;
  set changeColorPreferences(value: ChangeColorPreference | NothingEnum.NOTHING | null);

  /** Options for {@link findText} / {@link changeText}. */
  get findChangeTextOptions(): Read<M, FindChangeTextOption>;
  set findChangeTextOptions(value: FindChangeTextOption | NothingEnum.NOTHING | null);
  /** Options for {@link findGrep} / {@link changeGrep}. */
  get findChangeGrepOptions(): Read<M, FindChangeGrepOption>;
  set findChangeGrepOptions(value: FindChangeGrepOption | NothingEnum.NOTHING | null);
  /** Options for {@link findGlyph} / {@link changeGlyph}. */
  get findChangeGlyphOptions(): Read<M, FindChangeGlyphOption>;
  set findChangeGlyphOptions(value: FindChangeGlyphOption | NothingEnum.NOTHING | null);
  /** Options for {@link findObject} / {@link changeObject}. */
  get findChangeObjectOptions(): Read<M, FindChangeObjectOption>;
  set findChangeObjectOptions(value: FindChangeObjectOption | NothingEnum.NOTHING | null);

  /** Text criteria to search for. */
  get findTextPreferences(): Read<M, FindTextPreference>;
  set findTextPreferences(value: FindTextPreference | NothingEnum.NOTHING | null);
  /** Replacement text and formatting. */
  get changeTextPreferences(): Read<M, ChangeTextPreference>;
  set changeTextPreferences(value: ChangeTextPreference | NothingEnum.NOTHING | null);
  /** GREP pattern to search for. */
  get findGrepPreferences(): Read<M, FindGrepPreference>;
  set findGrepPreferences(value: FindGrepPreference | NothingEnum.NOTHING | null);
  /** GREP replacement. */
  get changeGrepPreferences(): Read<M, ChangeGrepPreference>;
  set changeGrepPreferences(value: ChangeGrepPreference | NothingEnum.NOTHING | null);
  /** Glyph criteria to search for. */
  get findGlyphPreferences(): Read<M, FindGlyphPreference>;
  set findGlyphPreferences(value: FindGlyphPreference | NothingEnum.NOTHING | null);
  /** Glyph replacement. */
  get changeGlyphPreferences(): Read<M, ChangeGlyphPreference>;
  set changeGlyphPreferences(value: ChangeGlyphPreference | NothingEnum.NOTHING | null);
  /** Object criteria to search for. */
  get findObjectPreferences(): Read<M, FindObjectPreference>;
  set findObjectPreferences(value: FindObjectPreference | NothingEnum.NOTHING | null);
  /** Object replacement formatting. */
  get changeObjectPreferences(): Read<M, ChangeObjectPreference>;
  set changeObjectPreferences(value: ChangeObjectPreference | NothingEnum.NOTHING | null);

  /** Options for {@link findTransliterate} / {@link changeTransliterate}. */
  get findChangeTransliterateOptions(): Read<M, FindChangeTransliterateOption>;
  set findChangeTransliterateOptions(value: FindChangeTransliterateOption | NothingEnum.NOTHING | null);
  /** Character-type criteria to search for. */
  get findTransliteratePreferences(): Read<M, FindTransliteratePreference>;
  set findTransliteratePreferences(value: FindTransliteratePreference | NothingEnum.NOTHING | null);
  /** Character-type replacement. */
  get changeTransliteratePreferences(): Read<M, ChangeTransliteratePreference>;
  set changeTransliteratePreferences(value: ChangeTransliteratePreference | NothingEnum.NOTHING | null);

  // ---- Application-scoped collections --------------------------------------

  /** {@link Preferences} objects scoped to the application. */
  readonly preferences: Preferences;

  /** Open {@link Documents}. Adding creates and opens a new document. */
  readonly documents: Documents;

  /** Open {@link Books}. */
  readonly books: Books;

  /** All {@link Windows} across open documents. */
  readonly windows: Windows;

  /** Layout {@link LayoutWindows}. */
  readonly layoutWindows: LayoutWindows;

  /** Story-editor {@link StoryWindows}. */
  readonly storyWindows: StoryWindows;

  /** Installed {@link Fonts}. */
  readonly fonts: Fonts;

  /** Application-level {@link Swatches}. */
  readonly swatches: Swatches;

  /** Application-level {@link Colors}. */
  readonly colors: Colors;

  /** Application-level {@link Tints}. */
  readonly tints: Tints;

  /** Application-level {@link Gradients}. */
  readonly gradients: Gradients;

  /** Application-level {@link MixedInks}. */
  readonly mixedInks: MixedInks;

  /** Application-level {@link MixedInkGroups}. */
  readonly mixedInkGroups: MixedInkGroups;

  /** Application-level {@link ColorGroups}. */
  readonly colorGroups: ColorGroups;

  /** Application-level {@link Inks}. */
  readonly inks: Inks;

  /** Application-level {@link ParagraphStyles}. */
  readonly paragraphStyles: ParagraphStyles;

  /** Application-level {@link CharacterStyles}. */
  readonly characterStyles: CharacterStyles;

  /** Application-level {@link ParagraphStyleGroups}. */
  readonly paragraphStyleGroups: ParagraphStyleGroups;

  /** Application-level {@link CharacterStyleGroups}. */
  readonly characterStyleGroups: CharacterStyleGroups;

  /** Application-level {@link ObjectStyles}. */
  readonly objectStyles: ObjectStyles;

  /** Application-level {@link ObjectStyleGroups}. */
  readonly objectStyleGroups: ObjectStyleGroups;

  /** Application-level {@link TableStyles}. */
  readonly tableStyles: TableStyles;

  /** Application-level {@link TableStyleGroups}. */
  readonly tableStyleGroups: TableStyleGroups;

  /** Application-level {@link CellStyles}. */
  readonly cellStyles: CellStyles;

  /** Application-level {@link CellStyleGroups}. */
  readonly cellStyleGroups: CellStyleGroups;

  /** Application-level {@link TextVariables}. */
  readonly textVariables: TextVariables;

  /** Application-level {@link NumberingLists}. */
  readonly numberingLists: NumberingLists;

  /** Application-level {@link Conditions} for conditional text. */
  readonly conditions: Conditions;

  /** Application-level {@link ConditionSets}. */
  readonly conditionSets: ConditionSets;

  /** {@link StrokeStyles} (all stroke-style kinds). */
  readonly strokeStyles: StrokeStyles;

  /** {@link DashedStrokeStyles}. */
  readonly dashedStrokeStyles: DashedStrokeStyles;

  /** {@link DottedStrokeStyles}. */
  readonly dottedStrokeStyles: DottedStrokeStyles;

  /** {@link StripedStrokeStyles}. */
  readonly stripedStrokeStyles: StripedStrokeStyles;

  /** {@link Dialogs} created by scripts. */
  readonly dialogs: Dialogs;

  /** {@link Panels}. */
  readonly panels: Panels;

  /** {@link Menus}. */
  readonly menus: Menus;

  /** {@link MenuActions}. */
  readonly menuActions: MenuActions;

  /** {@link ScriptMenuActions} created by scripts. */
  readonly scriptMenuActions: ScriptMenuActions;

  /** Object {@link Libraries}. */
  readonly libraries: Libraries;

  /** {@link DocumentPresets}. */
  readonly documentPresets: DocumentPresets;

  /** {@link PrinterPresets}. */
  readonly printerPresets: PrinterPresets;

  /** {@link PDFExportPresets}. */
  readonly pdfExportPresets: PDFExportPresets;

  /** Transparency {@link FlattenerPresets}. */
  readonly flattenerPresets: FlattenerPresets;

  /** {@link TrapPresets}. */
  readonly trapPresets: TrapPresets;

  /** {@link MotionPresets} for interactive animation. */
  readonly motionPresets: MotionPresets;

  /** {@link PreflightProfiles}. */
  readonly preflightProfiles: PreflightProfiles;

  /** {@link PreflightRules}. */
  readonly preflightRules: PreflightRules;

  /** Running {@link PreflightProcesses}. */
  readonly preflightProcesses: PreflightProcesses;

  /** {@link UserDictionaries}. */
  readonly userDictionaries: UserDictionaries;

  /** {@link CompositeFonts} (CJK). */
  readonly compositeFonts: CompositeFonts;

  /** {@link NamedGrids} (CJK). */
  readonly namedGrids: NamedGrids;

  /** {@link KinsokuTables} (CJK line-breaking). */
  readonly kinsokuTables: KinsokuTables;

  /** {@link MojikumiTables} (CJK spacing). */
  readonly mojikumiTables: MojikumiTables;

  /** {@link AutoCorrectTables}. */
  readonly autoCorrectTables: AutoCorrectTables;

  /** {@link LanguagesWithVendors}. */
  readonly languagesWithVendors: LanguagesWithVendors;

  /** {@link IndexingSortOptions}. */
  readonly indexingSortOptions: IndexingSortOptions;

  /** {@link IdleTasks} attachable to the idle loop. */
  readonly idleTasks: IdleTasks;

  /** Running {@link BackgroundTasks}. */
  readonly backgroundTasks: BackgroundTasks;

  /** {@link TransformationMatrices}. */
  readonly transformationMatrices: TransformationMatrices;

  /** {@link XMLTags} shared across documents. */
  readonly xmlTags: XMLTags;

  /** {@link XMLImportMaps}. */
  readonly xmlImportMaps: XMLImportMaps;

  /** {@link XMLExportMaps}. */
  readonly xmlExportMaps: XMLExportMaps;

  /** {@link XMLRuleProcessors}. */
  readonly xmlRuleProcessors: XMLRuleProcessors;

  /** InCopy paragraph-style {@link ParaStyleMappings}. */
  readonly paraStyleMappings: ParaStyleMappings;

  /** InCopy character-style {@link CharStyleMappings}. */
  readonly charStyleMappings: CharStyleMappings;

  /** InCopy table-style {@link TableStyleMappings}. */
  readonly tableStyleMappings: TableStyleMappings;

  /** InCopy cell-style {@link CellStyleMappings}. */
  readonly cellStyleMappings: CellStyleMappings;

  // ==== Methods =============================================================

  // ---- Documents & files ---------------------------------------------------

  /**
   * Opens the specified document, book, or library.
   * @param from The file path to open.
   * @param showingWindow If `false`, opens without a visible window. Defaults to `true`.
   * @param openOption How to open the file — as the original or as a copy. Defaults to `OpenOptions.OPEN_ORIGINAL`.
   */
  open(from: FilePath, showingWindow?: boolean, openOption?: OpenOptions): Read<M, Document | Book | Library>;
  /**
   * Opens several files at once.
   * @param from The file paths to open.
   * @param showingWindow If `false`, opens without a visible window. Defaults to `true`.
   * @param openOption How to open the files — as originals or as copies. Defaults to `OpenOptions.OPEN_ORIGINAL`.
   */
  open(from: FilePath[], showingWindow?: boolean, openOption?: OpenOptions): Read<M, Array<Document | Book | Library>>;

  /**
   * Opens an Adobe cloud document by its asset reference.
   * @param assetReference The cloud asset reference.
   * @param showingWindow If `false`, opens without a visible window. Defaults to `true`.
   */
  openCloudDocument(assetReference: string, showingWindow?: boolean): Read<M, Document>;

  /** Deletes the cloud document identified by `assetReference`. */
  deleteCloudDocument(assetReference: string): Read<M, boolean>;

  /**
   * Places one or more files following the Place-menu behavior: loads the place
   * gun or replaces the current selection depending on preferences.
   * @param fileName One or more files to place.
   * @param showingOptions If `true`, shows the import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath | FilePath[], showingOptions?: boolean, withProperties?: object): Read<M, void>;

  /**
   * Prints the specified file(s).
   * @param from One or more file paths to print.
   * @param printDialog If `true`, shows the print dialog first. Defaults to `false`.
   * @param using A {@link PrinterPreset} or a built-in {@link PrinterPresetTypes} value.
   */
  print(from: FilePath | FilePath[], printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): Read<M, void>;

  /**
   * Quits the application.
   * @param saving How to handle unsaved changes in open documents. Defaults to `SaveOptions.ASK`.
   */
  quit(saving?: SaveOptions): Read<M, void>;

  /** Count that will be used to name the next untitled document. */
  getUntitledCount(): Read<M, number>;

  /**
   * Sets the count used to name the next untitled document.
   * @param untitledCount A positive integer.
   */
  setUntitledCount(untitledCount: number): Read<M, void>;

  /** Creates a temporary copy of `from` and returns the copy's path. */
  createTemporaryCopy(from: FilePath): Read<M, string>;

  /** Removes `to` from the recently-used-files list. */
  removeFileFromRecentFiles(to: FilePath): Read<M, boolean>;

  // ---- Editing / clipboard / undo -----------------------------------------

  /** Cuts the active document's selection to the clipboard. */
  cut(): Read<M, void>;

  /** Copies the active document's selection to the clipboard. */
  copy(): Read<M, void>;

  /** Pastes the clipboard into the active document. */
  paste(): Read<M, void>;

  /** Pastes the clipboard into the selected object of the active document. */
  pasteInto(): Read<M, void>;

  /** Pastes the clipboard at the same position the data held in its source document. */
  pasteInPlace(): Read<M, void>;

  /** Pastes the clipboard without its source formatting. */
  pasteWithoutFormatting(): Read<M, void>;

  /** Undoes the last action. */
  undo(): Read<M, void>;

  /** Redoes the last undone action. */
  redo(): Read<M, void>;

  /**
   * Selects the specified object(s).
   * @param selectableItems The object(s) to select, {@link SelectAll} for
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): Read<M, void>;

  // ---- Find / change -------------------------------------------------------

  /** Finds color matching {@link findColorPreferences}. */
  findColor(): Read<M, number>;
  /** Replaces color matching {@link findColorPreferences} with {@link changeColorPreferences}. */
  changeColor(): Read<M, number>;

  /**
   * Finds text matching {@link findTextPreferences} across all open documents.
   * @param reverseOrder If `true`, returns results in reverse order. Defaults to `false`.
   */
  findText(reverseOrder?: boolean): Read<M, Text[]>;
  /** Finds and replaces text ({@link findTextPreferences} → {@link changeTextPreferences}). */
  changeText(reverseOrder?: boolean): Read<M, Text[]>;

  /** Finds text matching the GREP pattern in {@link findGrepPreferences}. */
  findGrep(reverseOrder?: boolean): Read<M, Text[]>;
  /** Finds and replaces via GREP ({@link findGrepPreferences} → {@link changeGrepPreferences}). */
  changeGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /** Finds glyphs matching {@link findGlyphPreferences}. */
  findGlyph(reverseOrder?: boolean): Read<M, Text[]>;
  /** Finds and replaces glyphs ({@link findGlyphPreferences} → {@link changeGlyphPreferences}). */
  changeGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /** Finds objects matching {@link findObjectPreferences}. */
  findObject(reverseOrder?: boolean): Read<M, PageItem[]>;
  /** Finds and replaces object formatting ({@link findObjectPreferences} → {@link changeObjectPreferences}). */
  changeObject(reverseOrder?: boolean): Read<M, PageItem[]>;

  /** Finds text matching the find-character-type criteria. */
  findTransliterate(reverseOrder?: boolean): Read<M, Text[]>;
  /** Finds and replaces by character type. */
  changeTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Saves the current find/change query under a name.
   * @param queryName Name to save the query as.
   * @param searchMode Which find/change mode the query belongs to.
   */
  saveFindChangeQuery(queryName: string, searchMode: SearchModes): Read<M, void>;

  /** Loads a previously saved find/change query into the current preferences. */
  loadFindChangeQuery(queryName: string, searchMode: SearchModes): Read<M, void>;

  /** Deletes a saved find/change query. */
  deleteFindChangeQuery(queryName: string, searchMode: SearchModes): Read<M, void>;

  // ---- Styles / swatches / presets I/O -------------------------------------

  /**
   * Imports styles from a file.
   * @param format The style category to import.
   * @param from The file (or InDesign document) to import from.
   * @param globalStrategy How to resolve name clashes with existing styles.
   */
  importStyles(format: ImportFormat, from: FilePath, globalStrategy?: GlobalClashResolutionStrategy): Read<M, void>;

  /**
   * Exports stroke styles to a file.
   * @param to Destination file.
   * @param strokeStyleList Stroke styles to export.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  exportStrokeStyles(to: FilePath, strokeStyleList: StrokeStyle | StrokeStyle[], versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Loads swatches from a swatch file or InDesign document. */
  loadSwatches(from: FilePath): Read<M, void>;

  /**
   * Saves swatches to a swatchbook file.
   * @param to Destination swatchbook file.
   * @param swatchList Swatches to save.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  saveSwatches(to: FilePath, swatchList: Swatch | Swatch[], versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Imports a spot color by name from an Adobe color book. */
  importAdobeSwatchbookSpotColor(name: string): Read<M, Color>;

  /** Imports a process color by name from a preloaded Adobe color book. */
  importAdobeSwatchbookProcessColor(name: string): Read<M, Color>;

  /**
   * Loads conditional-text conditions from a file.
   * @param from File containing the conditions.
   * @param loadConditionSets If `true`, also loads condition sets. Defaults to `false`.
   */
  loadConditions(from: FilePath, loadConditionSets?: boolean): Read<M, void>;

  /**
   * Exports presets to a file.
   * @param format The preset category.
   * @param to Destination file.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  exportPresets(format: ExportPresetFormat, to: FilePath, versionComments?: string, forceSave?: boolean): Read<M, void>;

  /**
   * Imports presets of the given category from a file.
   * @param format The preset category.
   * @param from Source file.
   */
  importFile(format: ExportPresetFormat, from: FilePath): Read<M, void>;

  /** Loads a Flash motion preset from a file. */
  loadMotionPreset(from: FilePath): Read<M, MotionPreset>;

  /** Loads a preflight profile from a `.idpp` file or InDesign document. */
  loadPreflightProfile(from: FilePath): Read<M, PreflightProfile>;

  // ---- XML tags ------------------------------------------------------------

  /** Deletes unused XML markup tags. */
  deleteUnusedTags(): Read<M, void>;

  /** Loads XML markup tags from a file. */
  loadXMLTags(from: FilePath): Read<M, void>;

  /**
   * Saves XML markup tags to a file.
   * @param to Destination file.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  saveXMLTags(to: FilePath, versionComments?: string, forceSave?: boolean): Read<M, void>;

  /**
   * Generates the IDML schema.
   * @param to Destination folder for the schema.
   * @param packageFormat If `true`, generates the multi-file package schema. Defaults to `false`.
   */
  generateIDMLSchema(to: FolderPath, packageFormat?: boolean): Read<M, void>;

  /** Unpackages a UCF file into a folder structure. */
  unpackageUCF(ucfFile: FilePath, destinationFolder: FolderPath): Read<M, void>;

  /**
   * Packages a folder into a UCF file (does not validate the IDML structure).
   * @param sourceFolder Folder to package.
   * @param ucfFile Destination UCF file (overwritten if present).
   * @param mimeMediaType MIME media type; defaults to the IDML identifier.
   */
  packageUCF(sourceFolder: FolderPath, ucfFile: FilePath, mimeMediaType?: string): Read<M, void>;

  // ---- Scripting / workspace / windows -------------------------------------

  /**
   * Executes a script as a single transaction (undo step).
   * @param script The script source, a file path, or a function.
   * @param language The script language; defaults to the calling language.
   * @param withArguments Arguments exposed to the script. Reachable from ExtendScript through `app.scriptArgs`, which UXP does not expose.
   * @param undoMode How the script's changes are grouped for undo.
   * @param undoName Undo-step name when `undoMode` is entire-script.
   */
  doScript(script: FilePath | string | Function, language?: ScriptLanguage, withArguments?: unknown[], undoMode?: UndoModes, undoName?: string): Read<M, unknown>;

  /** Brings the application to the front / activates it. */
  activate(): Read<M, void>;

  /** Cascades all open document windows. */
  cascadeWindows(): Read<M, void>;

  /** Tiles all open document windows. */
  tileWindows(): Read<M, void>;

  /** Toggles visibility of the entire panel system. */
  togglePanelSystemVisibility(): Read<M, void>;

  /** Applies a keyboard-shortcut set; omit `name` for the default set. */
  applyShortcutSet(name?: string): Read<M, void>;

  /** Applies a workspace; omit `name` for the default. */
  applyWorkspace(name?: string): Read<M, void>;

  /** Applies a menu-customization set; empty string resets all menus, omit for default. */
  applyMenuCustomization(name?: string): Read<M, void>;

  /**
   * Sets the application's default preferences from an IDML defaults file or a
   * language/region enumeration.
   */
  setApplicationPreferences(applicationPreferences: FilePath | LanguageAndRegion): Read<M, void>;

  /** Imports customised settings from an asset reference. */
  importSettings(fileReference: string): Read<M, void>;

  /** Exports customised settings to an asset reference. */
  exportSettings(fileReference: string): Read<M, void>;

  /** Resets all preferences to their defaults. */
  resetPreference(): Read<M, void>;

  /** Opens the panel associated with the given action ID. */
  openPanel(id: number): Read<M, void>;

  /** Forces a rescan of the font folders for newly added fonts. */
  updateFonts(): Read<M, void>;

  /** Mounts a Version Cue project. */
  mountProject(serverURL: string, projectName: string): Read<M, void>;

  // ---- Background tasks ----------------------------------------------------

  /** Cancels all running background tasks. */
  cancelAllTasks(): Read<M, void>;

  /** Blocks until all background tasks finish, returning their final states. */
  waitForAllTasks(): Read<M, TaskState[]>;

  // ---- Color / performance / misc ------------------------------------------

  /**
   * Invokes InDesign's color picker.
   * @param space The color space to edit in.
   * @param colorValue Initial color values.
   * @returns The chosen color as a string, or empty if cancelled.
   */
  invokeColorPicker(space: ColorSpace, colorValue: number[]): Read<M, string>;

  /**
   * Converts a color value between color spaces.
   * @param colorValue Source color values.
   * @param sourceColorSpace Source space.
   * @param destinationColorSpace Destination space.
   */
  colorTransform(colorValue: number[], sourceColorSpace: ColorSpace, destinationColorSpace: ColorSpace): Read<M, number[]>;

  /** Current value of the given performance metric. */
  performanceMetric(forStatus: number | PerformanceMetricOptions): Read<M, number | string>;

  /** Short name of the given performance metric. */
  performanceMetricShortName(forStatus: number | PerformanceMetricOptions): Read<M, string>;

  /** Long name of the given performance metric. */
  performanceMetricLongName(forStatus: number | PerformanceMetricOptions): Read<M, string>;

  /** Server memory statistics. */
  memoryStatistics(): Read<M, unknown[]>;

  /** Dumps memory allocations from the given mark. */
  dumpFromMemoryMark(from: number[]): Read<M, void>;

  /** Dumps memory allocations between two marks. */
  dumpBetweenMemoryMarks(from: number[], to: number[]): Read<M, void>;

  /** Whether the user has opted in to sharing app-usage data. */
  isUserSharingAppUsageData(): Read<M, boolean>;

  /** Whether the application is in touch mode. */
  isAppInTouchMode(): Read<M, boolean>;

  /**
   * Locale-independent string(s) matching a localized string, from the internal
   * string-localization database.
   * @param forStatus The (localized) string to look up.
   */
  findKeyStrings(forStatus: string): Read<M, string[]>;

  /**
   * Translates a key string into localized form for the current locale.
   * @param forStatus The key string to translate.
   */
  translateKeyString(forStatus: string): Read<M, string>;

  /** Style-conflict resolution strategy for the given style type, or `false` if cancelled. */
  getStyleConflictResolutionStrategy(charOrParaStyle?: StyleType): Read<M, GlobalClashResolutionStrategy | false>;

  /** Exports the current selection as cloud-library assets. */
  exportSelectionForCloudLibrary(to: FilePath): Read<M, boolean>;

  /** Opens a cloud-library asset for editing. */
  openCloudAssetForEdit(jsondata: string): Read<M, boolean>;

  /** Sets the thumbnail export options for cloud-asset generation. */
  setCloudLibraryOptions(maxwidth: number, maxheight: number): Read<M, void>;

  /** Sets the cloud-libraries collection info. */
  setCloudLibraryCollection(librariesCollectionInfo: string): Read<M, void>;

  /** JSON data for the CCX welcome dialog. */
  getCCXUserJSONData(jsondata?: string): Read<M, string>;

  /** User's choice for adding text-frame vs. whole-story content to the cloud. */
  getUserChoiceForCloudTextAddition(): Read<M, unknown>;

  // ---- Internal use only -----------------------------------------------------

  /** Internal use only. */
  internalMethod(internalParameter1: string, internalParameter2: string): Read<M, string>;

  /** Internal use only. */
  getContextMathMLDescription(): Read<M, string>;

  /** Internal use only. */
  getPathToExportMml2svg(): Read<M, string>;

  /** Internal use only. */
  handleMathMLMessage(resyncData: string): Read<M, void>;

  /** Removes the frame-fitting options, resetting to the initial state. */
  clearFrameFittingOptions(): Read<M, void>;

  // ---- Legacy Digital Publishing (DPS) folio internals ---------------------

  /** Exports documents to an article folio, returning an XML structure. */
  exportArticleFolio(destination: FilePath, portraitDocument: Document, landscapeDocument: Document, folioMetadata?: object[], miniFolioParams?: object[]): Read<M, string>;

  /** Exports a document to a DPS article. */
  exportDpsArticle(destination: FilePath, document: Document, dpsArticleParams: object[]): Read<M, string[]>;

  /** Digital-publishing article version number(s). */
  getDigpubArticleVersion(digpubArticleVersion: DigpubArticleVersion): Read<M, string[]>;

  /** Article-viewer versions supported by the digital-publishing plugin. */
  getSupportedArticleViewerVersions(): Read<M, string[]>;

  /** Digital-publishing version number(s). */
  getDigpubVersion(digpubVersion: DigpubVersion): Read<M, string[]>;

  /** Viewer versions supported by the digital-publishing plugin. */
  getSupportedViewerVersions(): Read<M, string[]>;

  /** Exports documents to a mini-folio. */
  exportMiniFolio(destination: FilePath, portraitDocument: Document, landscapeDocument: Document, folioMetadata?: object[], miniFolioParams?: object[]): Read<M, string[]>;

  /** Exports selected documents to a compressed folio package. */
  exportFolioToPackage(destination: FilePath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): Read<M, void>;

  /** Exports selected documents to a folio directory. */
  exportFolioToDirectory(destination: FolderPath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): Read<M, void>;

  /** Exports selected documents to a directory package (uncompressed mini-folios). */
  exportFolioToDirectoryPackage(destination: FilePath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): Read<M, void>;

  /** Gets all overlays for the given portrait/landscape documents. */
  getAllOverlays(portraitDocumentForCheckingOverlays: Document, landscapeDocumentForCheckingOverlays: Document, miniFolioParams?: object[]): Read<M, unknown[]>;

  /** Creates a custom mini-folio from asset and overlay descriptions. */
  createCustomMiniFolio(miniFolioDescription: object[], destination: FilePath): Read<M, void>;
}
