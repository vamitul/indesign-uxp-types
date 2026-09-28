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
export interface Application {
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
  get properties(): PropertiesGetter<Application, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Application, 'single'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'Application';
  /** Resolves the proxy into the individual {@link Application} objects it stands for. */
  getElements(): Application[];
  /** The application's name. Unlike most named objects, it cannot be renamed. */
  readonly name: string;
  /** The application version, e.g. `"21.0"`. */
  readonly version: string;
  /** The UI/formatting locale the application is running under. */
  readonly locale: Locale;
  /** The application's own executable file, as a {@link File} entry — reach the path with `.nativePath`. */
  readonly fullName: Promise<File>;
  /** The folder containing the application executable, as a {@link Folder} entry — reach the path with `.nativePath`. Not the executable itself; see {@link fullName}. */
  readonly filePath: Promise<Folder>;
  /** Whether the application is visible on screen. */
  readonly visible: boolean;
  /** The user's serial number. */
  readonly serialNumber: string;
  /** The current user's Adobe ID. */
  readonly userAdobeId: string;
  /** The current user's GUID. */
  readonly userGuid: string;
  /** Whether a modal dialog or alert is currently active — script operations that touch the UI may block while this is `true`. */
  readonly modalState: boolean;
  /** The licensed feature set. */
  readonly featureSet: FeatureSetOptions;
  /** Path to the script currently running from the Scripts panel, if any. */
  readonly activeScript: Promise<File>;
  /** Undo mode in effect for the current script execution. */
  readonly activeScriptUndoMode: UndoModes;
  /** Name of the action at the top of the undo stack — what {@link undo} will reverse. */
  readonly undoName: string;
  /** Name of the action at the top of the redo stack — what {@link redo} will reapply. */
  readonly redoName: string;
  /** Names of the queued undo steps, most-recent first. */
  readonly undoHistory: string[];
  /** Names of the queued redo steps. */
  readonly redoHistory: string[];
  /** Whether the Home screen is currently shown. */
  readonly homeScreenVisible: boolean;
  /** Extensions of the file types that {@link place} can import. */
  readonly placeableFileExtensions: string[];
  /** The file types that {@link place} can import. */
  readonly placeableFileTypes: string[];
  /** Live sampled performance metrics — see {@link performanceMetric}. */
  readonly performanceMetrics: number[];
  /** Object types a preflight rule can operate on. */
  readonly allPreflightObjectTypes: string[];
  /** Preflight rule categories declared by loaded rules. */
  readonly allPreflightRuleCategories: string[];
  /** IDs of all declared preflight rules. */
  readonly allPreflightRuleIDs: string[];
  // ---- Snapshot arrays (all styles across groups) --------------------------

  /** Every {@link ParagraphStyle}, flattening all style groups. A snapshot array. */
  readonly allParagraphStyles: ParagraphStyle[];
  /** Every {@link CharacterStyle}, flattening all style groups. A snapshot array. */
  readonly allCharacterStyles: CharacterStyle[];
  /** Every {@link ObjectStyle}, flattening all style groups. A snapshot array. */
  readonly allObjectStyles: ObjectStyle[];
  /** Every {@link TableStyle}, flattening all style groups. A snapshot array. */
  readonly allTableStyles: TableStyle[];
  /** Every {@link CellStyle}, flattening all style groups. A snapshot array. */
  readonly allCellStyles: CellStyle[];
  /** {@link Swatch}es not currently applied to any object. A snapshot array. */
  readonly unusedSwatches: Swatch[];
  // ---- Read/write application state ----------------------------------------

  /** The front-most {@link Document}. Assign a document to bring it forward. */
  get activeDocument(): Document;
  set activeDocument(value: Document);
  /** The front-most window. Assign a window to bring it forward. */
  get activeWindow(): Window | LayoutWindow | StoryWindow;
  set activeWindow(value: Window | LayoutWindow | StoryWindow);
  /** The active {@link Book}. */
  get activeBook(): Book;
  set activeBook(value: Book);
  /**
   * The current selection. Assign a single object, an array of objects, or
   * {@link NothingEnum.NOTHING} to clear it.
   */
  get selection(): SelectionItem[];
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);
  /** Key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): PageItem | null;
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);
  /** Whether page items redraw live during mouse operations — never, immediately, or after a brief pause. See {@link LiveDrawingOptions}. */
  get liveScreenDrawing(): LiveDrawingOptions;
  set liveScreenDrawing(value: LiveDrawingOptions);
  /** The tracked-changes / notes author name used for edits made through scripting. */
  get userName(): string;
  set userName(value: string);
  /**
   * The tracked-changes / notes author color. Assign an `[R, G, B]` triple
   * (each `0`–`255`) or a named {@link InCopyUIColors} value.
   */
  get userColor(): number[] | InCopyUIColors;
  set userColor(value: [number, number, number] | InCopyUIColors);
  /** Whether flex-layout attributes are auto-detected when adding elements to a flex container from the canvas. */
  get autoDetectionEnabled(): boolean;
  set autoDetectionEnabled(value: boolean);
  /** Whether applying an object style first clears any local overrides on the target. */
  get clearOverridesWhenApplyingStyle(): boolean;
  set clearOverridesWhenApplyingStyle(value: boolean);
  /** The HTTP link connection manager — experimental. */
  get httpLinkConnectionManager(): HttpLinkConnectionManagerObject;
  set httpLinkConnectionManager(value: HttpLinkConnectionManagerObject);
  // ---- Toolbox / display ---------------------------------------------------

  /** Current tool-box state — see {@link ToolBox}. */
  readonly toolBoxTools: ToolBox;
  /** Live display-quality settings — see {@link DisplaySettings}. */
  readonly displaySettings: DisplaySettings;
  /** The content placer used to load and place linked/unlinked page-item content. */
  readonly contentPlacer: ContentPlacerObject;
  // ---- Default preference & settings objects -------------------------------
  // These seed new documents; per-document overrides live on Document.

  /** General preference defaults. */
  readonly generalPreferences: GeneralPreference;
  /** Clipboard interaction defaults. */
  readonly clipboardPreferences: ClipboardPreference;
  /** Default transform (rotate/scale/flip/shear) behaviors. */
  readonly transformPreferences: TransformPreference;
  /** XML view preference defaults. */
  readonly xmlViewPreferences: XMLViewPreference;
  /** Display-performance defaults. */
  readonly displayPerformancePreferences: DisplayPerformancePreference;
  /** GPU-performance defaults. */
  readonly gpuPerformancePreferences: GpuPerformancePreference;
  /** Galley/story-editor view defaults. */
  readonly galleyPreferences: GalleyPreference;
  /** Text-editing defaults. */
  readonly textEditingPreferences: TextEditingPreference;
  /** Preflight option defaults. */
  readonly preflightOptions: PreflightOption;
  /** Preflight book option defaults. */
  readonly preflightBookOptions: PreflightBookOption;
  /** Data-merge option defaults. */
  readonly dataMergeOptions: DataMergeOption;
  /** Note preference defaults. */
  readonly notePreferences: NotePreference;
  /** JPEG export defaults. */
  readonly jpegExportPreferences: JPEGExportPreference;
  /** Text import defaults. */
  readonly textImportPreferences: TextImportPreference;
  /** Text export defaults. */
  readonly textExportPreferences: TextExportPreference;
  /** Tagged-text export defaults. */
  readonly taggedTextExportPreferences: TaggedTextExportPreference;
  /** Tagged-text import defaults. */
  readonly taggedTextImportPreferences: TaggedTextImportPreference;
  /** Word / RTF import defaults. */
  readonly wordRTFImportPreferences: WordRTFImportPreference;
  /** Excel import defaults. */
  readonly excelImportPreferences: ExcelImportPreference;
  /** EPUB preview-app defaults. */
  readonly epubViewingAppsPreferences: EPubExportPreviewAppPreference;
  /** XML defaults. */
  readonly xmlPreferences: XMLPreference;
  /** XML import defaults. */
  readonly xmlImportPreferences: XMLImportPreference;
  /** XML export defaults. */
  readonly xmlExportPreferences: XMLExportPreference;
  /** Export-for-web defaults. */
  readonly exportForWebPreferences: ExportForWebPreference;
  /** Transparency defaults. */
  readonly transparencyPreferences: TransparencyPreference;
  /** Text-frame defaults. */
  readonly textFramePreferences: TextFramePreference;
  /** Text defaults (composer, etc.). */
  readonly textPreferences: TextPreference;
  /** Default text formatting applied to new text. */
  readonly textDefaults: TextDefault;
  /** Endnote option defaults. */
  readonly endnoteOptions: EndnoteOption;
  /** User-dictionary defaults. */
  readonly dictionaryPreferences: DictionaryPreference;
  /** Font-sync (Adobe Fonts) defaults. */
  readonly fontSyncPreferences: FontSyncPreference;
  /** Story defaults. */
  readonly storyPreferences: StoryPreference;
  /** Anchored-object defaults. */
  readonly anchoredObjectDefaults: AnchoredObjectDefault;
  /** Anchored-object settings. */
  readonly anchoredObjectSettings: AnchoredObjectSetting;
  /** Baseline frame-grid defaults. */
  readonly baselineFrameGridOptions: BaselineFrameGridOption;
  /** Footnote option defaults. */
  readonly footnoteOptions: FootnoteOption;
  /** Text-wrap defaults for wrapping text around objects. */
  readonly textWrapPreferences: TextWrapPreference;
  /** Contextual-UI-for-alternates defaults. */
  readonly typeContextualUiPrefs: TypeContextualUiPreference;
  /** Document defaults (page size/margins) applied to new documents. */
  readonly documentPreferences: DocumentPreference;
  /** Baseline/document grid defaults. */
  readonly gridPreferences: GridPreference;
  /** Guide defaults. */
  readonly guidePreferences: GuidePreference;
  /** Margin/column defaults. */
  readonly marginPreferences: MarginPreference;
  /** Pasteboard defaults. */
  readonly pasteboardPreferences: PasteboardPreference;
  /** View defaults. */
  readonly viewPreferences: ViewPreference;
  /** Smart-guide defaults. */
  readonly smartGuidePreferences: SmartGuidePreference;
  /** Spell-check defaults. */
  readonly spellPreferences: SpellPreference;
  /** Auto-correct defaults. */
  readonly autoCorrectPreferences: AutoCorrectPreference;
  /** Linked-story option defaults. */
  readonly linkedStoryOptions: LinkedStoryOption;
  /** Linked-page-item option defaults. */
  readonly linkedPageItemOptions: LinkedPageItemOption;
  /** Scripting defaults (measurement units, user-interaction level). */
  readonly scriptPreferences: ScriptPreference;
  /** EPS export defaults. */
  readonly epsExportPreferences: EPSExportPreference;
  /** PNG export defaults. */
  readonly pngExportPreferences: PNGExportPreference;
  /** PDF export defaults (used when exporting without an explicit preset). */
  readonly pdfExportPreferences: PDFExportPreference;
  /** Interactive-PDF export defaults. */
  readonly interactivePDFExportPreferences: InteractivePDFExportPreference;
  /** PDF placement defaults. */
  readonly pdfPlacePreferences: PDFPlacePreference;
  /** Tagged-PDF defaults. */
  readonly taggedPDFPreferences: TaggedPDFPreference;
  /** Link-management defaults. */
  readonly linkingPreferences: LinkingPreference;
  /** Grabber (scroll display-quality) defaults. */
  readonly grabberPreferences: GrabberPreference;
  /** Index-formatting defaults. */
  readonly indexGenerationOptions: IndexOptions;
  /** Track-changes defaults. */
  readonly trackChangesPreferences: TrackChangesPreference;
  /** InCopy (INCX) export defaults. */
  readonly incopyExportOptions: InCopyExportOption;
  /** IME (input method) defaults. */
  readonly imePreferences: IMEPreference;
  /** Image import defaults. */
  readonly imageIOPreferences: ImageIOPreference;
  /** Image display defaults. */
  readonly imagePreferences: ImagePreference;
  /** Stroke/fill proxy (swatch-proxy) defaults. */
  readonly strokeFillProxySettings: StrokeFillProxySetting;
  /** Polygon-creation defaults. */
  readonly polygonPreferences: PolygonPreference;
  /** Default page-item formatting. */
  readonly pageItemDefaults: PageItemDefault;
  /** Align/distribute defaults. */
  readonly alignDistributePreferences: AlignDistributePreference;
  /** Frame-fitting defaults applied to placed or pasted content. */
  readonly frameFittingOptions: FrameFittingOption;
  /** Button-form defaults. */
  readonly buttonPreferences: ButtonPreference;
  /** EPS import defaults. */
  readonly epsImportPreferences: EPSImportPreference;
  /** Placed-InDesign-page attribute defaults. */
  readonly importedPageAttributes: ImportedPageAttribute;
  /** Watermark defaults. */
  readonly watermarkPreferences: WatermarkPreference;
  /** Conditional-text defaults. */
  readonly conditionalTextPreferences: ConditionalTextPreference;
  /** Color-management defaults. */
  readonly colorSettings: ColorSetting;
  /** Layout-grid defaults (CJK). */
  readonly layoutGridData: LayoutGridDataInformation;
  /** Frame-grid defaults (CJK). */
  readonly storyGridData: StoryGridDataInformation;
  /** CJK grid defaults. */
  readonly cjkGridPreferences: CjkGridPreference;
  /** Grid printing/export defaults. */
  readonly gridPrintingPreferences: GridPrintingPreference;
  /** Font-locking defaults. */
  readonly fontLockingPreferences: FontLockingPreference;
  /** Mojikumi UI defaults. */
  readonly mojikumiUIPreferences: MojikumiUiPreference;
  // ---- Find / change preference objects ------------------------------------
  // Fill these in before calling the corresponding find*/change* method.

  /** Options for {@link findColor} / {@link changeColor}. */
  get findChangeColorOptions(): FindChangeColorOption;
  set findChangeColorOptions(value: FindChangeColorOption | NothingEnum.NOTHING | null);
  /** The color to search for. */
  get findColorPreferences(): FindColorPreference;
  set findColorPreferences(value: FindColorPreference | NothingEnum.NOTHING | null);
  /** The replacement color. */
  get changeColorPreferences(): ChangeColorPreference;
  set changeColorPreferences(value: ChangeColorPreference | NothingEnum.NOTHING | null);
  /** Options for {@link findText} / {@link changeText}. */
  get findChangeTextOptions(): FindChangeTextOption;
  set findChangeTextOptions(value: FindChangeTextOption | NothingEnum.NOTHING | null);
  /** Options for {@link findGrep} / {@link changeGrep}. */
  get findChangeGrepOptions(): FindChangeGrepOption;
  set findChangeGrepOptions(value: FindChangeGrepOption | NothingEnum.NOTHING | null);
  /** Options for {@link findGlyph} / {@link changeGlyph}. */
  get findChangeGlyphOptions(): FindChangeGlyphOption;
  set findChangeGlyphOptions(value: FindChangeGlyphOption | NothingEnum.NOTHING | null);
  /** Options for {@link findObject} / {@link changeObject}. */
  get findChangeObjectOptions(): FindChangeObjectOption;
  set findChangeObjectOptions(value: FindChangeObjectOption | NothingEnum.NOTHING | null);
  /** Text criteria to search for. */
  get findTextPreferences(): FindTextPreference;
  set findTextPreferences(value: FindTextPreference | NothingEnum.NOTHING | null);
  /** Replacement text and formatting. */
  get changeTextPreferences(): ChangeTextPreference;
  set changeTextPreferences(value: ChangeTextPreference | NothingEnum.NOTHING | null);
  /** GREP pattern to search for. */
  get findGrepPreferences(): FindGrepPreference;
  set findGrepPreferences(value: FindGrepPreference | NothingEnum.NOTHING | null);
  /** GREP replacement. */
  get changeGrepPreferences(): ChangeGrepPreference;
  set changeGrepPreferences(value: ChangeGrepPreference | NothingEnum.NOTHING | null);
  /** Glyph criteria to search for. */
  get findGlyphPreferences(): FindGlyphPreference;
  set findGlyphPreferences(value: FindGlyphPreference | NothingEnum.NOTHING | null);
  /** Glyph replacement. */
  get changeGlyphPreferences(): ChangeGlyphPreference;
  set changeGlyphPreferences(value: ChangeGlyphPreference | NothingEnum.NOTHING | null);
  /** Object criteria to search for. */
  get findObjectPreferences(): FindObjectPreference;
  set findObjectPreferences(value: FindObjectPreference | NothingEnum.NOTHING | null);
  /** Object replacement formatting. */
  get changeObjectPreferences(): ChangeObjectPreference;
  set changeObjectPreferences(value: ChangeObjectPreference | NothingEnum.NOTHING | null);
  /** Options for {@link findTransliterate} / {@link changeTransliterate}. */
  get findChangeTransliterateOptions(): FindChangeTransliterateOption;
  set findChangeTransliterateOptions(value: FindChangeTransliterateOption | NothingEnum.NOTHING | null);
  /** Character-type criteria to search for. */
  get findTransliteratePreferences(): FindTransliteratePreference;
  set findTransliteratePreferences(value: FindTransliteratePreference | NothingEnum.NOTHING | null);
  /** Character-type replacement. */
  get changeTransliteratePreferences(): ChangeTransliteratePreference;
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
  open(from: FilePath, showingWindow?: boolean, openOption?: OpenOptions): Document | Book | Library;
  /**
   * Opens several files at once.
   * @param from The file paths to open.
   * @param showingWindow If `false`, opens without a visible window. Defaults to `true`.
   * @param openOption How to open the files — as originals or as copies. Defaults to `OpenOptions.OPEN_ORIGINAL`.
   */
  open(from: FilePath[], showingWindow?: boolean, openOption?: OpenOptions): Array<Document | Book | Library>;
  /**
   * Opens an Adobe cloud document by its asset reference.
   * @param assetReference The cloud asset reference.
   * @param showingWindow If `false`, opens without a visible window. Defaults to `true`.
   */
  openCloudDocument(assetReference: string, showingWindow?: boolean): Document;
  /** Deletes the cloud document identified by `assetReference`. */
  deleteCloudDocument(assetReference: string): boolean;
  /**
   * Places one or more files following the Place-menu behavior: loads the place
   * gun or replaces the current selection depending on preferences.
   * @param fileName One or more files to place.
   * @param showingOptions If `true`, shows the import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath | FilePath[], showingOptions?: boolean, withProperties?: object): void;
  /**
   * Prints the specified file(s).
   * @param from One or more file paths to print.
   * @param printDialog If `true`, shows the print dialog first. Defaults to `false`.
   * @param using A {@link PrinterPreset} or a built-in {@link PrinterPresetTypes} value.
   */
  print(from: FilePath | FilePath[], printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): void;
  /**
   * Quits the application.
   * @param saving How to handle unsaved changes in open documents. Defaults to `SaveOptions.ASK`.
   */
  quit(saving?: SaveOptions): void;
  /** Count that will be used to name the next untitled document. */
  getUntitledCount(): number;
  /**
   * Sets the count used to name the next untitled document.
   * @param untitledCount A positive integer.
   */
  setUntitledCount(untitledCount: number): void;
  /** Creates a temporary copy of `from` and returns the copy's path. */
  createTemporaryCopy(from: FilePath): string;
  /** Removes `to` from the recently-used-files list. */
  removeFileFromRecentFiles(to: FilePath): boolean;
  // ---- Editing / clipboard / undo -----------------------------------------

  /** Cuts the active document's selection to the clipboard. */
  cut(): void;
  /** Copies the active document's selection to the clipboard. */
  copy(): void;
  /** Pastes the clipboard into the active document. */
  paste(): void;
  /** Pastes the clipboard into the selected object of the active document. */
  pasteInto(): void;
  /** Pastes the clipboard at the same position the data held in its source document. */
  pasteInPlace(): void;
  /** Pastes the clipboard without its source formatting. */
  pasteWithoutFormatting(): void;
  /** Undoes the last action. */
  undo(): void;
  /** Redoes the last undone action. */
  redo(): void;
  /**
   * Selects the specified object(s).
   * @param selectableItems The object(s) to select, {@link SelectAll} for
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void;
  // ---- Find / change -------------------------------------------------------

  /** Finds color matching {@link findColorPreferences}. */
  findColor(): number;
  /** Replaces color matching {@link findColorPreferences} with {@link changeColorPreferences}. */
  changeColor(): number;
  /**
   * Finds text matching {@link findTextPreferences} across all open documents.
   * @param reverseOrder If `true`, returns results in reverse order. Defaults to `false`.
   */
  findText(reverseOrder?: boolean): Text[];
  /** Finds and replaces text ({@link findTextPreferences} → {@link changeTextPreferences}). */
  changeText(reverseOrder?: boolean): Text[];
  /** Finds text matching the GREP pattern in {@link findGrepPreferences}. */
  findGrep(reverseOrder?: boolean): Text[];
  /** Finds and replaces via GREP ({@link findGrepPreferences} → {@link changeGrepPreferences}). */
  changeGrep(reverseOrder?: boolean): Text[];
  /** Finds glyphs matching {@link findGlyphPreferences}. */
  findGlyph(reverseOrder?: boolean): Text[];
  /** Finds and replaces glyphs ({@link findGlyphPreferences} → {@link changeGlyphPreferences}). */
  changeGlyph(reverseOrder?: boolean): Text[];
  /** Finds objects matching {@link findObjectPreferences}. */
  findObject(reverseOrder?: boolean): PageItem[];
  /** Finds and replaces object formatting ({@link findObjectPreferences} → {@link changeObjectPreferences}). */
  changeObject(reverseOrder?: boolean): PageItem[];
  /** Finds text matching the find-character-type criteria. */
  findTransliterate(reverseOrder?: boolean): Text[];
  /** Finds and replaces by character type. */
  changeTransliterate(reverseOrder?: boolean): Text[];
  /**
   * Saves the current find/change query under a name.
   * @param queryName Name to save the query as.
   * @param searchMode Which find/change mode the query belongs to.
   */
  saveFindChangeQuery(queryName: string, searchMode: SearchModes): void;
  /** Loads a previously saved find/change query into the current preferences. */
  loadFindChangeQuery(queryName: string, searchMode: SearchModes): void;
  /** Deletes a saved find/change query. */
  deleteFindChangeQuery(queryName: string, searchMode: SearchModes): void;
  // ---- Styles / swatches / presets I/O -------------------------------------

  /**
   * Imports styles from a file.
   * @param format The style category to import.
   * @param from The file (or InDesign document) to import from.
   * @param globalStrategy How to resolve name clashes with existing styles.
   */
  importStyles(format: ImportFormat, from: FilePath, globalStrategy?: GlobalClashResolutionStrategy): void;
  /**
   * Exports stroke styles to a file.
   * @param to Destination file.
   * @param strokeStyleList Stroke styles to export.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  exportStrokeStyles(to: FilePath, strokeStyleList: StrokeStyle | StrokeStyle[], versionComments?: string, forceSave?: boolean): void;
  /** Loads swatches from a swatch file or InDesign document. */
  loadSwatches(from: FilePath): void;
  /**
   * Saves swatches to a swatchbook file.
   * @param to Destination swatchbook file.
   * @param swatchList Swatches to save.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  saveSwatches(to: FilePath, swatchList: Swatch | Swatch[], versionComments?: string, forceSave?: boolean): void;
  /** Imports a spot color by name from an Adobe color book. */
  importAdobeSwatchbookSpotColor(name: string): Color;
  /** Imports a process color by name from a preloaded Adobe color book. */
  importAdobeSwatchbookProcessColor(name: string): Color;
  /**
   * Loads conditional-text conditions from a file.
   * @param from File containing the conditions.
   * @param loadConditionSets If `true`, also loads condition sets. Defaults to `false`.
   */
  loadConditions(from: FilePath, loadConditionSets?: boolean): void;
  /**
   * Exports presets to a file.
   * @param format The preset category.
   * @param to Destination file.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  exportPresets(format: ExportPresetFormat, to: FilePath, versionComments?: string, forceSave?: boolean): void;
  /**
   * Imports presets of the given category from a file.
   * @param format The preset category.
   * @param from Source file.
   */
  importFile(format: ExportPresetFormat, from: FilePath): void;
  /** Loads a Flash motion preset from a file. */
  loadMotionPreset(from: FilePath): MotionPreset;
  /** Loads a preflight profile from a `.idpp` file or InDesign document. */
  loadPreflightProfile(from: FilePath): PreflightProfile;
  // ---- XML tags ------------------------------------------------------------

  /** Deletes unused XML markup tags. */
  deleteUnusedTags(): void;
  /** Loads XML markup tags from a file. */
  loadXMLTags(from: FilePath): void;
  /**
   * Saves XML markup tags to a file.
   * @param to Destination file.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  saveXMLTags(to: FilePath, versionComments?: string, forceSave?: boolean): void;
  /**
   * Generates the IDML schema.
   * @param to Destination folder for the schema.
   * @param packageFormat If `true`, generates the multi-file package schema. Defaults to `false`.
   */
  generateIDMLSchema(to: FolderPath, packageFormat?: boolean): void;
  /** Unpackages a UCF file into a folder structure. */
  unpackageUCF(ucfFile: FilePath, destinationFolder: FolderPath): void;
  /**
   * Packages a folder into a UCF file (does not validate the IDML structure).
   * @param sourceFolder Folder to package.
   * @param ucfFile Destination UCF file (overwritten if present).
   * @param mimeMediaType MIME media type; defaults to the IDML identifier.
   */
  packageUCF(sourceFolder: FolderPath, ucfFile: FilePath, mimeMediaType?: string): void;
  // ---- Scripting / workspace / windows -------------------------------------

  /**
   * Executes a script as a single transaction (undo step).
   * @param script The script source, a file path, or a function.
   * @param language The script language; defaults to the calling language.
   * @param withArguments Arguments exposed to the script. Reachable from ExtendScript through `app.scriptArgs`, which UXP does not expose.
   * @param undoMode How the script's changes are grouped for undo.
   * @param undoName Undo-step name when `undoMode` is entire-script.
   */
  doScript(script: FilePath | string | Function, language?: ScriptLanguage, withArguments?: unknown[], undoMode?: UndoModes, undoName?: string): unknown;
  /** Brings the application to the front / activates it. */
  activate(): void;
  /** Cascades all open document windows. */
  cascadeWindows(): void;
  /** Tiles all open document windows. */
  tileWindows(): void;
  /** Toggles visibility of the entire panel system. */
  togglePanelSystemVisibility(): void;
  /** Applies a keyboard-shortcut set; omit `name` for the default set. */
  applyShortcutSet(name?: string): void;
  /** Applies a workspace; omit `name` for the default. */
  applyWorkspace(name?: string): void;
  /** Applies a menu-customization set; empty string resets all menus, omit for default. */
  applyMenuCustomization(name?: string): void;
  /**
   * Sets the application's default preferences from an IDML defaults file or a
   * language/region enumeration.
   */
  setApplicationPreferences(applicationPreferences: FilePath | LanguageAndRegion): void;
  /** Imports customised settings from an asset reference. */
  importSettings(fileReference: string): void;
  /** Exports customised settings to an asset reference. */
  exportSettings(fileReference: string): void;
  /** Resets all preferences to their defaults. */
  resetPreference(): void;
  /** Opens the panel associated with the given action ID. */
  openPanel(id: number): void;
  /** Forces a rescan of the font folders for newly added fonts. */
  updateFonts(): void;
  /** Mounts a Version Cue project. */
  mountProject(serverURL: string, projectName: string): void;
  // ---- Background tasks ----------------------------------------------------

  /** Cancels all running background tasks. */
  cancelAllTasks(): void;
  /** Blocks until all background tasks finish, returning their final states. */
  waitForAllTasks(): TaskState[];
  // ---- Color / performance / misc ------------------------------------------

  /**
   * Invokes InDesign's color picker.
   * @param space The color space to edit in.
   * @param colorValue Initial color values.
   * @returns The chosen color as a string, or empty if cancelled.
   */
  invokeColorPicker(space: ColorSpace, colorValue: number[]): string;
  /**
   * Converts a color value between color spaces.
   * @param colorValue Source color values.
   * @param sourceColorSpace Source space.
   * @param destinationColorSpace Destination space.
   */
  colorTransform(colorValue: number[], sourceColorSpace: ColorSpace, destinationColorSpace: ColorSpace): number[];
  /** Current value of the given performance metric. */
  performanceMetric(forStatus: number | PerformanceMetricOptions): number | string;
  /** Short name of the given performance metric. */
  performanceMetricShortName(forStatus: number | PerformanceMetricOptions): string;
  /** Long name of the given performance metric. */
  performanceMetricLongName(forStatus: number | PerformanceMetricOptions): string;
  /** Server memory statistics. */
  memoryStatistics(): unknown[];
  /** Dumps memory allocations from the given mark. */
  dumpFromMemoryMark(from: number[]): void;
  /** Dumps memory allocations between two marks. */
  dumpBetweenMemoryMarks(from: number[], to: number[]): void;
  /** Whether the user has opted in to sharing app-usage data. */
  isUserSharingAppUsageData(): boolean;
  /** Whether the application is in touch mode. */
  isAppInTouchMode(): boolean;
  /**
   * Locale-independent string(s) matching a localized string, from the internal
   * string-localization database.
   * @param forStatus The (localized) string to look up.
   */
  findKeyStrings(forStatus: string): string[];
  /**
   * Translates a key string into localized form for the current locale.
   * @param forStatus The key string to translate.
   */
  translateKeyString(forStatus: string): string;
  /** Style-conflict resolution strategy for the given style type, or `false` if cancelled. */
  getStyleConflictResolutionStrategy(charOrParaStyle?: StyleType): GlobalClashResolutionStrategy | false;
  /** Exports the current selection as cloud-library assets. */
  exportSelectionForCloudLibrary(to: FilePath): boolean;
  /** Opens a cloud-library asset for editing. */
  openCloudAssetForEdit(jsondata: string): boolean;
  /** Sets the thumbnail export options for cloud-asset generation. */
  setCloudLibraryOptions(maxwidth: number, maxheight: number): void;
  /** Sets the cloud-libraries collection info. */
  setCloudLibraryCollection(librariesCollectionInfo: string): void;
  /** JSON data for the CCX welcome dialog. */
  getCCXUserJSONData(jsondata?: string): string;
  /** User's choice for adding text-frame vs. whole-story content to the cloud. */
  getUserChoiceForCloudTextAddition(): unknown;
  // ---- Internal use only -----------------------------------------------------

  /** Internal use only. */
  internalMethod(internalParameter1: string, internalParameter2: string): string;
  /** Internal use only. */
  getContextMathMLDescription(): string;
  /** Internal use only. */
  getPathToExportMml2svg(): string;
  /** Internal use only. */
  handleMathMLMessage(resyncData: string): void;
  /** Removes the frame-fitting options, resetting to the initial state. */
  clearFrameFittingOptions(): void;
  // ---- Legacy Digital Publishing (DPS) folio internals ---------------------

  /** Exports documents to an article folio, returning an XML structure. */
  exportArticleFolio(destination: FilePath, portraitDocument: Document, landscapeDocument: Document, folioMetadata?: object[], miniFolioParams?: object[]): string;
  /** Exports a document to a DPS article. */
  exportDpsArticle(destination: FilePath, document: Document, dpsArticleParams: object[]): string[];
  /** Digital-publishing article version number(s). */
  getDigpubArticleVersion(digpubArticleVersion: DigpubArticleVersion): string[];
  /** Article-viewer versions supported by the digital-publishing plugin. */
  getSupportedArticleViewerVersions(): string[];
  /** Digital-publishing version number(s). */
  getDigpubVersion(digpubVersion: DigpubVersion): string[];
  /** Viewer versions supported by the digital-publishing plugin. */
  getSupportedViewerVersions(): string[];
  /** Exports documents to a mini-folio. */
  exportMiniFolio(destination: FilePath, portraitDocument: Document, landscapeDocument: Document, folioMetadata?: object[], miniFolioParams?: object[]): string[];
  /** Exports selected documents to a compressed folio package. */
  exportFolioToPackage(destination: FilePath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): void;
  /** Exports selected documents to a folio directory. */
  exportFolioToDirectory(destination: FolderPath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): void;
  /** Exports selected documents to a directory package (uncompressed mini-folios). */
  exportFolioToDirectoryPackage(destination: FilePath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): void;
  /** Gets all overlays for the given portrait/landscape documents. */
  getAllOverlays(portraitDocumentForCheckingOverlays: Document, landscapeDocumentForCheckingOverlays: Document, miniFolioParams?: object[]): unknown[];
  /** Creates a custom mini-folio from asset and overlay descriptions. */
  createCustomMiniFolio(miniFolioDescription: object[], destination: FilePath): void;
}


/**
 * The broadcast proxy for {@link Application} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Application} there.
 */
export interface ApplicationPlural {
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
  get properties(): (PropertiesGetter<ApplicationPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ApplicationPlural, 'plural'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'Application';
  /** Resolves the proxy into the individual {@link Application} objects it stands for. */
  getElements(): Application[];
  /** The application's name. Unlike most named objects, it cannot be renamed. */
  readonly name: (string)[];
  /** The application version, e.g. `"21.0"`. */
  readonly version: (string)[];
  /** The UI/formatting locale the application is running under. */
  readonly locale: (Locale)[];
  /** The application's own executable file, as a {@link File} entry — reach the path with `.nativePath`. */
  readonly fullName: (Promise<File>)[];
  /** The folder containing the application executable, as a {@link Folder} entry — reach the path with `.nativePath`. Not the executable itself; see {@link fullName}. */
  readonly filePath: (Promise<Folder>)[];
  /** Whether the application is visible on screen. */
  readonly visible: (boolean)[];
  /** The user's serial number. */
  readonly serialNumber: (string)[];
  /** The current user's Adobe ID. */
  readonly userAdobeId: (string)[];
  /** The current user's GUID. */
  readonly userGuid: (string)[];
  /** Whether a modal dialog or alert is currently active — script operations that touch the UI may block while this is `true`. */
  readonly modalState: (boolean)[];
  /** The licensed feature set. */
  readonly featureSet: (FeatureSetOptions)[];
  /** Path to the script currently running from the Scripts panel, if any. */
  readonly activeScript: (Promise<File>)[];
  /** Undo mode in effect for the current script execution. */
  readonly activeScriptUndoMode: (UndoModes)[];
  /** Name of the action at the top of the undo stack — what {@link undo} will reverse. */
  readonly undoName: (string)[];
  /** Name of the action at the top of the redo stack — what {@link redo} will reapply. */
  readonly redoName: (string)[];
  /** Names of the queued undo steps, most-recent first. */
  readonly undoHistory: (string[])[];
  /** Names of the queued redo steps. */
  readonly redoHistory: (string[])[];
  /** Whether the Home screen is currently shown. */
  readonly homeScreenVisible: (boolean)[];
  /** Extensions of the file types that {@link place} can import. */
  readonly placeableFileExtensions: (string[])[];
  /** The file types that {@link place} can import. */
  readonly placeableFileTypes: (string[])[];
  /** Live sampled performance metrics — see {@link performanceMetric}. */
  readonly performanceMetrics: (number[])[];
  /** Object types a preflight rule can operate on. */
  readonly allPreflightObjectTypes: (string[])[];
  /** Preflight rule categories declared by loaded rules. */
  readonly allPreflightRuleCategories: (string[])[];
  /** IDs of all declared preflight rules. */
  readonly allPreflightRuleIDs: (string[])[];
  // ---- Snapshot arrays (all styles across groups) --------------------------

  /** Every {@link ParagraphStyle}, flattening all style groups. A snapshot array. */
  readonly allParagraphStyles: (ParagraphStyle[])[];
  /** Every {@link CharacterStyle}, flattening all style groups. A snapshot array. */
  readonly allCharacterStyles: (CharacterStyle[])[];
  /** Every {@link ObjectStyle}, flattening all style groups. A snapshot array. */
  readonly allObjectStyles: (ObjectStyle[])[];
  /** Every {@link TableStyle}, flattening all style groups. A snapshot array. */
  readonly allTableStyles: (TableStyle[])[];
  /** Every {@link CellStyle}, flattening all style groups. A snapshot array. */
  readonly allCellStyles: (CellStyle[])[];
  /** {@link Swatch}es not currently applied to any object. A snapshot array. */
  readonly unusedSwatches: (Swatch[])[];
  // ---- Read/write application state ----------------------------------------

  /** The front-most {@link Document}. Assign a document to bring it forward. */
  get activeDocument(): (Document)[];
  set activeDocument(value: Document);
  /** The front-most window. Assign a window to bring it forward. */
  get activeWindow(): (Window | LayoutWindow | StoryWindow)[];
  set activeWindow(value: Window | LayoutWindow | StoryWindow);
  /** The active {@link Book}. */
  get activeBook(): (Book)[];
  set activeBook(value: Book);
  /**
   * The current selection. Assign a single object, an array of objects, or
   * {@link NothingEnum.NOTHING} to clear it.
   */
  get selection(): (SelectionItem[])[];
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);
  /** Key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): (PageItem | null)[];
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);
  /** Whether page items redraw live during mouse operations — never, immediately, or after a brief pause. See {@link LiveDrawingOptions}. */
  get liveScreenDrawing(): (LiveDrawingOptions)[];
  set liveScreenDrawing(value: LiveDrawingOptions);
  /** The tracked-changes / notes author name used for edits made through scripting. */
  get userName(): (string)[];
  set userName(value: string);
  /**
   * The tracked-changes / notes author color. Assign an `[R, G, B]` triple
   * (each `0`–`255`) or a named {@link InCopyUIColors} value.
   */
  get userColor(): (number[] | InCopyUIColors)[];
  set userColor(value: [number, number, number] | InCopyUIColors);
  /** Whether flex-layout attributes are auto-detected when adding elements to a flex container from the canvas. */
  get autoDetectionEnabled(): (boolean)[];
  set autoDetectionEnabled(value: boolean);
  /** Whether applying an object style first clears any local overrides on the target. */
  get clearOverridesWhenApplyingStyle(): (boolean)[];
  set clearOverridesWhenApplyingStyle(value: boolean);
  /** The HTTP link connection manager — experimental. */
  get httpLinkConnectionManager(): (HttpLinkConnectionManagerObject)[];
  set httpLinkConnectionManager(value: HttpLinkConnectionManagerObject);
  // ---- Toolbox / display ---------------------------------------------------

  /** Current tool-box state — see {@link ToolBox}. */
  readonly toolBoxTools: (ToolBox)[];
  /** Live display-quality settings — see {@link DisplaySettings}. */
  readonly displaySettings: DisplaySettings;
  /** The content placer used to load and place linked/unlinked page-item content. */
  readonly contentPlacer: (ContentPlacerObject)[];
  // ---- Default preference & settings objects -------------------------------
  // These seed new documents; per-document overrides live on Document.

  /** General preference defaults. */
  readonly generalPreferences: (GeneralPreference)[];
  /** Clipboard interaction defaults. */
  readonly clipboardPreferences: (ClipboardPreference)[];
  /** Default transform (rotate/scale/flip/shear) behaviors. */
  readonly transformPreferences: (TransformPreference)[];
  /** XML view preference defaults. */
  readonly xmlViewPreferences: (XMLViewPreference)[];
  /** Display-performance defaults. */
  readonly displayPerformancePreferences: (DisplayPerformancePreference)[];
  /** GPU-performance defaults. */
  readonly gpuPerformancePreferences: (GpuPerformancePreference)[];
  /** Galley/story-editor view defaults. */
  readonly galleyPreferences: (GalleyPreference)[];
  /** Text-editing defaults. */
  readonly textEditingPreferences: (TextEditingPreference)[];
  /** Preflight option defaults. */
  readonly preflightOptions: (PreflightOption)[];
  /** Preflight book option defaults. */
  readonly preflightBookOptions: (PreflightBookOption)[];
  /** Data-merge option defaults. */
  readonly dataMergeOptions: (DataMergeOption)[];
  /** Note preference defaults. */
  readonly notePreferences: (NotePreference)[];
  /** JPEG export defaults. */
  readonly jpegExportPreferences: (JPEGExportPreference)[];
  /** Text import defaults. */
  readonly textImportPreferences: (TextImportPreference)[];
  /** Text export defaults. */
  readonly textExportPreferences: (TextExportPreference)[];
  /** Tagged-text export defaults. */
  readonly taggedTextExportPreferences: (TaggedTextExportPreference)[];
  /** Tagged-text import defaults. */
  readonly taggedTextImportPreferences: (TaggedTextImportPreference)[];
  /** Word / RTF import defaults. */
  readonly wordRTFImportPreferences: (WordRTFImportPreference)[];
  /** Excel import defaults. */
  readonly excelImportPreferences: (ExcelImportPreference)[];
  /** EPUB preview-app defaults. */
  readonly epubViewingAppsPreferences: (EPubExportPreviewAppPreference)[];
  /** XML defaults. */
  readonly xmlPreferences: (XMLPreference)[];
  /** XML import defaults. */
  readonly xmlImportPreferences: (XMLImportPreference)[];
  /** XML export defaults. */
  readonly xmlExportPreferences: (XMLExportPreference)[];
  /** Export-for-web defaults. */
  readonly exportForWebPreferences: (ExportForWebPreference)[];
  /** Transparency defaults. */
  readonly transparencyPreferences: (TransparencyPreference)[];
  /** Text-frame defaults. */
  readonly textFramePreferences: (TextFramePreference)[];
  /** Text defaults (composer, etc.). */
  readonly textPreferences: (TextPreference)[];
  /** Default text formatting applied to new text. */
  readonly textDefaults: (TextDefault)[];
  /** Endnote option defaults. */
  readonly endnoteOptions: (EndnoteOption)[];
  /** User-dictionary defaults. */
  readonly dictionaryPreferences: (DictionaryPreference)[];
  /** Font-sync (Adobe Fonts) defaults. */
  readonly fontSyncPreferences: (FontSyncPreference)[];
  /** Story defaults. */
  readonly storyPreferences: (StoryPreference)[];
  /** Anchored-object defaults. */
  readonly anchoredObjectDefaults: (AnchoredObjectDefault)[];
  /** Anchored-object settings. */
  readonly anchoredObjectSettings: (AnchoredObjectSetting)[];
  /** Baseline frame-grid defaults. */
  readonly baselineFrameGridOptions: (BaselineFrameGridOption)[];
  /** Footnote option defaults. */
  readonly footnoteOptions: (FootnoteOption)[];
  /** Text-wrap defaults for wrapping text around objects. */
  readonly textWrapPreferences: (TextWrapPreference)[];
  /** Contextual-UI-for-alternates defaults. */
  readonly typeContextualUiPrefs: (TypeContextualUiPreference)[];
  /** Document defaults (page size/margins) applied to new documents. */
  readonly documentPreferences: (DocumentPreference)[];
  /** Baseline/document grid defaults. */
  readonly gridPreferences: (GridPreference)[];
  /** Guide defaults. */
  readonly guidePreferences: (GuidePreference)[];
  /** Margin/column defaults. */
  readonly marginPreferences: (MarginPreference)[];
  /** Pasteboard defaults. */
  readonly pasteboardPreferences: (PasteboardPreference)[];
  /** View defaults. */
  readonly viewPreferences: (ViewPreference)[];
  /** Smart-guide defaults. */
  readonly smartGuidePreferences: (SmartGuidePreference)[];
  /** Spell-check defaults. */
  readonly spellPreferences: (SpellPreference)[];
  /** Auto-correct defaults. */
  readonly autoCorrectPreferences: (AutoCorrectPreference)[];
  /** Linked-story option defaults. */
  readonly linkedStoryOptions: (LinkedStoryOption)[];
  /** Linked-page-item option defaults. */
  readonly linkedPageItemOptions: (LinkedPageItemOption)[];
  /** Scripting defaults (measurement units, user-interaction level). */
  readonly scriptPreferences: (ScriptPreference)[];
  /** EPS export defaults. */
  readonly epsExportPreferences: (EPSExportPreference)[];
  /** PNG export defaults. */
  readonly pngExportPreferences: (PNGExportPreference)[];
  /** PDF export defaults (used when exporting without an explicit preset). */
  readonly pdfExportPreferences: (PDFExportPreference)[];
  /** Interactive-PDF export defaults. */
  readonly interactivePDFExportPreferences: (InteractivePDFExportPreference)[];
  /** PDF placement defaults. */
  readonly pdfPlacePreferences: (PDFPlacePreference)[];
  /** Tagged-PDF defaults. */
  readonly taggedPDFPreferences: (TaggedPDFPreference)[];
  /** Link-management defaults. */
  readonly linkingPreferences: (LinkingPreference)[];
  /** Grabber (scroll display-quality) defaults. */
  readonly grabberPreferences: (GrabberPreference)[];
  /** Index-formatting defaults. */
  readonly indexGenerationOptions: (IndexOptions)[];
  /** Track-changes defaults. */
  readonly trackChangesPreferences: (TrackChangesPreference)[];
  /** InCopy (INCX) export defaults. */
  readonly incopyExportOptions: (InCopyExportOption)[];
  /** IME (input method) defaults. */
  readonly imePreferences: (IMEPreference)[];
  /** Image import defaults. */
  readonly imageIOPreferences: (ImageIOPreference)[];
  /** Image display defaults. */
  readonly imagePreferences: (ImagePreference)[];
  /** Stroke/fill proxy (swatch-proxy) defaults. */
  readonly strokeFillProxySettings: (StrokeFillProxySetting)[];
  /** Polygon-creation defaults. */
  readonly polygonPreferences: (PolygonPreference)[];
  /** Default page-item formatting. */
  readonly pageItemDefaults: (PageItemDefault)[];
  /** Align/distribute defaults. */
  readonly alignDistributePreferences: (AlignDistributePreference)[];
  /** Frame-fitting defaults applied to placed or pasted content. */
  readonly frameFittingOptions: (FrameFittingOption)[];
  /** Button-form defaults. */
  readonly buttonPreferences: (ButtonPreference)[];
  /** EPS import defaults. */
  readonly epsImportPreferences: (EPSImportPreference)[];
  /** Placed-InDesign-page attribute defaults. */
  readonly importedPageAttributes: (ImportedPageAttribute)[];
  /** Watermark defaults. */
  readonly watermarkPreferences: (WatermarkPreference)[];
  /** Conditional-text defaults. */
  readonly conditionalTextPreferences: (ConditionalTextPreference)[];
  /** Color-management defaults. */
  readonly colorSettings: (ColorSetting)[];
  /** Layout-grid defaults (CJK). */
  readonly layoutGridData: (LayoutGridDataInformation)[];
  /** Frame-grid defaults (CJK). */
  readonly storyGridData: (StoryGridDataInformation)[];
  /** CJK grid defaults. */
  readonly cjkGridPreferences: (CjkGridPreference)[];
  /** Grid printing/export defaults. */
  readonly gridPrintingPreferences: (GridPrintingPreference)[];
  /** Font-locking defaults. */
  readonly fontLockingPreferences: (FontLockingPreference)[];
  /** Mojikumi UI defaults. */
  readonly mojikumiUIPreferences: (MojikumiUiPreference)[];
  // ---- Find / change preference objects ------------------------------------
  // Fill these in before calling the corresponding find*/change* method.

  /** Options for {@link findColor} / {@link changeColor}. */
  get findChangeColorOptions(): (FindChangeColorOption)[];
  set findChangeColorOptions(value: FindChangeColorOption | NothingEnum.NOTHING | null);
  /** The color to search for. */
  get findColorPreferences(): (FindColorPreference)[];
  set findColorPreferences(value: FindColorPreference | NothingEnum.NOTHING | null);
  /** The replacement color. */
  get changeColorPreferences(): (ChangeColorPreference)[];
  set changeColorPreferences(value: ChangeColorPreference | NothingEnum.NOTHING | null);
  /** Options for {@link findText} / {@link changeText}. */
  get findChangeTextOptions(): (FindChangeTextOption)[];
  set findChangeTextOptions(value: FindChangeTextOption | NothingEnum.NOTHING | null);
  /** Options for {@link findGrep} / {@link changeGrep}. */
  get findChangeGrepOptions(): (FindChangeGrepOption)[];
  set findChangeGrepOptions(value: FindChangeGrepOption | NothingEnum.NOTHING | null);
  /** Options for {@link findGlyph} / {@link changeGlyph}. */
  get findChangeGlyphOptions(): (FindChangeGlyphOption)[];
  set findChangeGlyphOptions(value: FindChangeGlyphOption | NothingEnum.NOTHING | null);
  /** Options for {@link findObject} / {@link changeObject}. */
  get findChangeObjectOptions(): (FindChangeObjectOption)[];
  set findChangeObjectOptions(value: FindChangeObjectOption | NothingEnum.NOTHING | null);
  /** Text criteria to search for. */
  get findTextPreferences(): (FindTextPreference)[];
  set findTextPreferences(value: FindTextPreference | NothingEnum.NOTHING | null);
  /** Replacement text and formatting. */
  get changeTextPreferences(): (ChangeTextPreference)[];
  set changeTextPreferences(value: ChangeTextPreference | NothingEnum.NOTHING | null);
  /** GREP pattern to search for. */
  get findGrepPreferences(): (FindGrepPreference)[];
  set findGrepPreferences(value: FindGrepPreference | NothingEnum.NOTHING | null);
  /** GREP replacement. */
  get changeGrepPreferences(): (ChangeGrepPreference)[];
  set changeGrepPreferences(value: ChangeGrepPreference | NothingEnum.NOTHING | null);
  /** Glyph criteria to search for. */
  get findGlyphPreferences(): (FindGlyphPreference)[];
  set findGlyphPreferences(value: FindGlyphPreference | NothingEnum.NOTHING | null);
  /** Glyph replacement. */
  get changeGlyphPreferences(): (ChangeGlyphPreference)[];
  set changeGlyphPreferences(value: ChangeGlyphPreference | NothingEnum.NOTHING | null);
  /** Object criteria to search for. */
  get findObjectPreferences(): (FindObjectPreference)[];
  set findObjectPreferences(value: FindObjectPreference | NothingEnum.NOTHING | null);
  /** Object replacement formatting. */
  get changeObjectPreferences(): (ChangeObjectPreference)[];
  set changeObjectPreferences(value: ChangeObjectPreference | NothingEnum.NOTHING | null);
  /** Options for {@link findTransliterate} / {@link changeTransliterate}. */
  get findChangeTransliterateOptions(): (FindChangeTransliterateOption)[];
  set findChangeTransliterateOptions(value: FindChangeTransliterateOption | NothingEnum.NOTHING | null);
  /** Character-type criteria to search for. */
  get findTransliteratePreferences(): (FindTransliteratePreference)[];
  set findTransliteratePreferences(value: FindTransliteratePreference | NothingEnum.NOTHING | null);
  /** Character-type replacement. */
  get changeTransliteratePreferences(): (ChangeTransliteratePreference)[];
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
  open(from: FilePath, showingWindow?: boolean, openOption?: OpenOptions): (Document | Book | Library)[];
  /**
   * Opens several files at once.
   * @param from The file paths to open.
   * @param showingWindow If `false`, opens without a visible window. Defaults to `true`.
   * @param openOption How to open the files — as originals or as copies. Defaults to `OpenOptions.OPEN_ORIGINAL`.
   */
  open(from: FilePath[], showingWindow?: boolean, openOption?: OpenOptions): (Array<Document | Book | Library>)[];
  /**
   * Opens an Adobe cloud document by its asset reference.
   * @param assetReference The cloud asset reference.
   * @param showingWindow If `false`, opens without a visible window. Defaults to `true`.
   */
  openCloudDocument(assetReference: string, showingWindow?: boolean): (Document)[];
  /** Deletes the cloud document identified by `assetReference`. */
  deleteCloudDocument(assetReference: string): (boolean)[];
  /**
   * Places one or more files following the Place-menu behavior: loads the place
   * gun or replaces the current selection depending on preferences.
   * @param fileName One or more files to place.
   * @param showingOptions If `true`, shows the import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath | FilePath[], showingOptions?: boolean, withProperties?: object): (void)[];
  /**
   * Prints the specified file(s).
   * @param from One or more file paths to print.
   * @param printDialog If `true`, shows the print dialog first. Defaults to `false`.
   * @param using A {@link PrinterPreset} or a built-in {@link PrinterPresetTypes} value.
   */
  print(from: FilePath | FilePath[], printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): (void)[];
  /**
   * Quits the application.
   * @param saving How to handle unsaved changes in open documents. Defaults to `SaveOptions.ASK`.
   */
  quit(saving?: SaveOptions): (void)[];
  /** Count that will be used to name the next untitled document. */
  getUntitledCount(): (number)[];
  /**
   * Sets the count used to name the next untitled document.
   * @param untitledCount A positive integer.
   */
  setUntitledCount(untitledCount: number): (void)[];
  /** Creates a temporary copy of `from` and returns the copy's path. */
  createTemporaryCopy(from: FilePath): (string)[];
  /** Removes `to` from the recently-used-files list. */
  removeFileFromRecentFiles(to: FilePath): (boolean)[];
  // ---- Editing / clipboard / undo -----------------------------------------

  /** Cuts the active document's selection to the clipboard. */
  cut(): (void)[];
  /** Copies the active document's selection to the clipboard. */
  copy(): (void)[];
  /** Pastes the clipboard into the active document. */
  paste(): (void)[];
  /** Pastes the clipboard into the selected object of the active document. */
  pasteInto(): (void)[];
  /** Pastes the clipboard at the same position the data held in its source document. */
  pasteInPlace(): (void)[];
  /** Pastes the clipboard without its source formatting. */
  pasteWithoutFormatting(): (void)[];
  /** Undoes the last action. */
  undo(): (void)[];
  /** Redoes the last undone action. */
  redo(): (void)[];
  /**
   * Selects the specified object(s).
   * @param selectableItems The object(s) to select, {@link SelectAll} for
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): (void)[];
  // ---- Find / change -------------------------------------------------------

  /** Finds color matching {@link findColorPreferences}. */
  findColor(): (number)[];
  /** Replaces color matching {@link findColorPreferences} with {@link changeColorPreferences}. */
  changeColor(): (number)[];
  /**
   * Finds text matching {@link findTextPreferences} across all open documents.
   * @param reverseOrder If `true`, returns results in reverse order. Defaults to `false`.
   */
  findText(reverseOrder?: boolean): (Text[])[];
  /** Finds and replaces text ({@link findTextPreferences} → {@link changeTextPreferences}). */
  changeText(reverseOrder?: boolean): (Text[])[];
  /** Finds text matching the GREP pattern in {@link findGrepPreferences}. */
  findGrep(reverseOrder?: boolean): (Text[])[];
  /** Finds and replaces via GREP ({@link findGrepPreferences} → {@link changeGrepPreferences}). */
  changeGrep(reverseOrder?: boolean): (Text[])[];
  /** Finds glyphs matching {@link findGlyphPreferences}. */
  findGlyph(reverseOrder?: boolean): (Text[])[];
  /** Finds and replaces glyphs ({@link findGlyphPreferences} → {@link changeGlyphPreferences}). */
  changeGlyph(reverseOrder?: boolean): (Text[])[];
  /** Finds objects matching {@link findObjectPreferences}. */
  findObject(reverseOrder?: boolean): (PageItem[])[];
  /** Finds and replaces object formatting ({@link findObjectPreferences} → {@link changeObjectPreferences}). */
  changeObject(reverseOrder?: boolean): (PageItem[])[];
  /** Finds text matching the find-character-type criteria. */
  findTransliterate(reverseOrder?: boolean): (Text[])[];
  /** Finds and replaces by character type. */
  changeTransliterate(reverseOrder?: boolean): (Text[])[];
  /**
   * Saves the current find/change query under a name.
   * @param queryName Name to save the query as.
   * @param searchMode Which find/change mode the query belongs to.
   */
  saveFindChangeQuery(queryName: string, searchMode: SearchModes): (void)[];
  /** Loads a previously saved find/change query into the current preferences. */
  loadFindChangeQuery(queryName: string, searchMode: SearchModes): (void)[];
  /** Deletes a saved find/change query. */
  deleteFindChangeQuery(queryName: string, searchMode: SearchModes): (void)[];
  // ---- Styles / swatches / presets I/O -------------------------------------

  /**
   * Imports styles from a file.
   * @param format The style category to import.
   * @param from The file (or InDesign document) to import from.
   * @param globalStrategy How to resolve name clashes with existing styles.
   */
  importStyles(format: ImportFormat, from: FilePath, globalStrategy?: GlobalClashResolutionStrategy): (void)[];
  /**
   * Exports stroke styles to a file.
   * @param to Destination file.
   * @param strokeStyleList Stroke styles to export.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  exportStrokeStyles(to: FilePath, strokeStyleList: StrokeStyle | StrokeStyle[], versionComments?: string, forceSave?: boolean): (void)[];
  /** Loads swatches from a swatch file or InDesign document. */
  loadSwatches(from: FilePath): (void)[];
  /**
   * Saves swatches to a swatchbook file.
   * @param to Destination swatchbook file.
   * @param swatchList Swatches to save.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  saveSwatches(to: FilePath, swatchList: Swatch | Swatch[], versionComments?: string, forceSave?: boolean): (void)[];
  /** Imports a spot color by name from an Adobe color book. */
  importAdobeSwatchbookSpotColor(name: string): (Color)[];
  /** Imports a process color by name from a preloaded Adobe color book. */
  importAdobeSwatchbookProcessColor(name: string): (Color)[];
  /**
   * Loads conditional-text conditions from a file.
   * @param from File containing the conditions.
   * @param loadConditionSets If `true`, also loads condition sets. Defaults to `false`.
   */
  loadConditions(from: FilePath, loadConditionSets?: boolean): (void)[];
  /**
   * Exports presets to a file.
   * @param format The preset category.
   * @param to Destination file.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  exportPresets(format: ExportPresetFormat, to: FilePath, versionComments?: string, forceSave?: boolean): (void)[];
  /**
   * Imports presets of the given category from a file.
   * @param format The preset category.
   * @param from Source file.
   */
  importFile(format: ExportPresetFormat, from: FilePath): (void)[];
  /** Loads a Flash motion preset from a file. */
  loadMotionPreset(from: FilePath): (MotionPreset)[];
  /** Loads a preflight profile from a `.idpp` file or InDesign document. */
  loadPreflightProfile(from: FilePath): (PreflightProfile)[];
  // ---- XML tags ------------------------------------------------------------

  /** Deletes unused XML markup tags. */
  deleteUnusedTags(): (void)[];
  /** Loads XML markup tags from a file. */
  loadXMLTags(from: FilePath): (void)[];
  /**
   * Saves XML markup tags to a file.
   * @param to Destination file.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forcibly saves a new version. Defaults to `false`.
   */
  saveXMLTags(to: FilePath, versionComments?: string, forceSave?: boolean): (void)[];
  /**
   * Generates the IDML schema.
   * @param to Destination folder for the schema.
   * @param packageFormat If `true`, generates the multi-file package schema. Defaults to `false`.
   */
  generateIDMLSchema(to: FolderPath, packageFormat?: boolean): (void)[];
  /** Unpackages a UCF file into a folder structure. */
  unpackageUCF(ucfFile: FilePath, destinationFolder: FolderPath): (void)[];
  /**
   * Packages a folder into a UCF file (does not validate the IDML structure).
   * @param sourceFolder Folder to package.
   * @param ucfFile Destination UCF file (overwritten if present).
   * @param mimeMediaType MIME media type; defaults to the IDML identifier.
   */
  packageUCF(sourceFolder: FolderPath, ucfFile: FilePath, mimeMediaType?: string): (void)[];
  // ---- Scripting / workspace / windows -------------------------------------

  /**
   * Executes a script as a single transaction (undo step).
   * @param script The script source, a file path, or a function.
   * @param language The script language; defaults to the calling language.
   * @param withArguments Arguments exposed to the script. Reachable from ExtendScript through `app.scriptArgs`, which UXP does not expose.
   * @param undoMode How the script's changes are grouped for undo.
   * @param undoName Undo-step name when `undoMode` is entire-script.
   */
  doScript(script: FilePath | string | Function, language?: ScriptLanguage, withArguments?: unknown[], undoMode?: UndoModes, undoName?: string): (unknown)[];
  /** Brings the application to the front / activates it. */
  activate(): (void)[];
  /** Cascades all open document windows. */
  cascadeWindows(): (void)[];
  /** Tiles all open document windows. */
  tileWindows(): (void)[];
  /** Toggles visibility of the entire panel system. */
  togglePanelSystemVisibility(): (void)[];
  /** Applies a keyboard-shortcut set; omit `name` for the default set. */
  applyShortcutSet(name?: string): (void)[];
  /** Applies a workspace; omit `name` for the default. */
  applyWorkspace(name?: string): (void)[];
  /** Applies a menu-customization set; empty string resets all menus, omit for default. */
  applyMenuCustomization(name?: string): (void)[];
  /**
   * Sets the application's default preferences from an IDML defaults file or a
   * language/region enumeration.
   */
  setApplicationPreferences(applicationPreferences: FilePath | LanguageAndRegion): (void)[];
  /** Imports customised settings from an asset reference. */
  importSettings(fileReference: string): (void)[];
  /** Exports customised settings to an asset reference. */
  exportSettings(fileReference: string): (void)[];
  /** Resets all preferences to their defaults. */
  resetPreference(): (void)[];
  /** Opens the panel associated with the given action ID. */
  openPanel(id: number): (void)[];
  /** Forces a rescan of the font folders for newly added fonts. */
  updateFonts(): (void)[];
  /** Mounts a Version Cue project. */
  mountProject(serverURL: string, projectName: string): (void)[];
  // ---- Background tasks ----------------------------------------------------

  /** Cancels all running background tasks. */
  cancelAllTasks(): (void)[];
  /** Blocks until all background tasks finish, returning their final states. */
  waitForAllTasks(): (TaskState[])[];
  // ---- Color / performance / misc ------------------------------------------

  /**
   * Invokes InDesign's color picker.
   * @param space The color space to edit in.
   * @param colorValue Initial color values.
   * @returns The chosen color as a string, or empty if cancelled.
   */
  invokeColorPicker(space: ColorSpace, colorValue: number[]): (string)[];
  /**
   * Converts a color value between color spaces.
   * @param colorValue Source color values.
   * @param sourceColorSpace Source space.
   * @param destinationColorSpace Destination space.
   */
  colorTransform(colorValue: number[], sourceColorSpace: ColorSpace, destinationColorSpace: ColorSpace): (number[])[];
  /** Current value of the given performance metric. */
  performanceMetric(forStatus: number | PerformanceMetricOptions): (number | string)[];
  /** Short name of the given performance metric. */
  performanceMetricShortName(forStatus: number | PerformanceMetricOptions): (string)[];
  /** Long name of the given performance metric. */
  performanceMetricLongName(forStatus: number | PerformanceMetricOptions): (string)[];
  /** Server memory statistics. */
  memoryStatistics(): (unknown[])[];
  /** Dumps memory allocations from the given mark. */
  dumpFromMemoryMark(from: number[]): (void)[];
  /** Dumps memory allocations between two marks. */
  dumpBetweenMemoryMarks(from: number[], to: number[]): (void)[];
  /** Whether the user has opted in to sharing app-usage data. */
  isUserSharingAppUsageData(): (boolean)[];
  /** Whether the application is in touch mode. */
  isAppInTouchMode(): (boolean)[];
  /**
   * Locale-independent string(s) matching a localized string, from the internal
   * string-localization database.
   * @param forStatus The (localized) string to look up.
   */
  findKeyStrings(forStatus: string): (string[])[];
  /**
   * Translates a key string into localized form for the current locale.
   * @param forStatus The key string to translate.
   */
  translateKeyString(forStatus: string): (string)[];
  /** Style-conflict resolution strategy for the given style type, or `false` if cancelled. */
  getStyleConflictResolutionStrategy(charOrParaStyle?: StyleType): (GlobalClashResolutionStrategy | false)[];
  /** Exports the current selection as cloud-library assets. */
  exportSelectionForCloudLibrary(to: FilePath): (boolean)[];
  /** Opens a cloud-library asset for editing. */
  openCloudAssetForEdit(jsondata: string): (boolean)[];
  /** Sets the thumbnail export options for cloud-asset generation. */
  setCloudLibraryOptions(maxwidth: number, maxheight: number): (void)[];
  /** Sets the cloud-libraries collection info. */
  setCloudLibraryCollection(librariesCollectionInfo: string): (void)[];
  /** JSON data for the CCX welcome dialog. */
  getCCXUserJSONData(jsondata?: string): (string)[];
  /** User's choice for adding text-frame vs. whole-story content to the cloud. */
  getUserChoiceForCloudTextAddition(): (unknown)[];
  // ---- Internal use only -----------------------------------------------------

  /** Internal use only. */
  internalMethod(internalParameter1: string, internalParameter2: string): (string)[];
  /** Internal use only. */
  getContextMathMLDescription(): (string)[];
  /** Internal use only. */
  getPathToExportMml2svg(): (string)[];
  /** Internal use only. */
  handleMathMLMessage(resyncData: string): (void)[];
  /** Removes the frame-fitting options, resetting to the initial state. */
  clearFrameFittingOptions(): (void)[];
  // ---- Legacy Digital Publishing (DPS) folio internals ---------------------

  /** Exports documents to an article folio, returning an XML structure. */
  exportArticleFolio(destination: FilePath, portraitDocument: Document, landscapeDocument: Document, folioMetadata?: object[], miniFolioParams?: object[]): (string)[];
  /** Exports a document to a DPS article. */
  exportDpsArticle(destination: FilePath, document: Document, dpsArticleParams: object[]): (string[])[];
  /** Digital-publishing article version number(s). */
  getDigpubArticleVersion(digpubArticleVersion: DigpubArticleVersion): (string[])[];
  /** Article-viewer versions supported by the digital-publishing plugin. */
  getSupportedArticleViewerVersions(): (string[])[];
  /** Digital-publishing version number(s). */
  getDigpubVersion(digpubVersion: DigpubVersion): (string[])[];
  /** Viewer versions supported by the digital-publishing plugin. */
  getSupportedViewerVersions(): (string[])[];
  /** Exports documents to a mini-folio. */
  exportMiniFolio(destination: FilePath, portraitDocument: Document, landscapeDocument: Document, folioMetadata?: object[], miniFolioParams?: object[]): (string[])[];
  /** Exports selected documents to a compressed folio package. */
  exportFolioToPackage(destination: FilePath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): (void)[];
  /** Exports selected documents to a folio directory. */
  exportFolioToDirectory(destination: FolderPath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): (void)[];
  /** Exports selected documents to a directory package (uncompressed mini-folios). */
  exportFolioToDirectoryPackage(destination: FilePath, miniFolioList: FilePath | FilePath[], folioMetadata: object[], exportFolioParams?: object[]): (void)[];
  /** Gets all overlays for the given portrait/landscape documents. */
  getAllOverlays(portraitDocumentForCheckingOverlays: Document, landscapeDocumentForCheckingOverlays: Document, miniFolioParams?: object[]): (unknown[])[];
  /** Creates a custom mini-folio from asset and overlay descriptions. */
  createCustomMiniFolio(miniFolioDescription: object[], destination: FilePath): (void)[];
}
