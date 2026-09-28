/**
 * Document.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { FilePath, FolderPath, File, Folder, MeasurementValue } from './_base/Types';

import type { ColorSettingsPolicy } from './Enums/ColorSettingsPolicy';
import type { ColorSpace } from './Enums/ColorSpace';
import type { ExportFormat } from './Enums/ExportFormat';
import type { GlobalClashResolutionStrategy } from './Enums/GlobalClashResolutionStrategy';
import type { GlobalClashResolutionStrategyForMasterPage } from './Enums/GlobalClashResolutionStrategyForMasterPage';
import type { ImportFormat } from './Enums/ImportFormat';
import type { LayoutRuleOptions } from './Enums/LayoutRuleOptions';
import type { AlignOptions } from './Enums/AlignOptions';
import type { AlignDistributeBounds } from './Enums/AlignDistributeBounds';
import type { DistributeOptions } from './Enums/DistributeOptions';
import type { NothingEnum } from './Enums/NothingEnum';
import type { PrinterPresetTypes } from './Enums/PrinterPresetTypes';
import type { RenderingIntent } from './Enums/RenderingIntent';
import type { SaveOptions } from './Enums/SaveOptions';
import type { SelectAll } from './Enums/SelectAll';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { StyleType } from './Enums/StyleType';
import type { SyncConflictResolution } from './Enums/SyncConflictResolution';
import type { TextDirection } from './Enums/TextDirection';
import type { VersionCueSyncStatus } from './Enums/VersionCueSyncStatus';
import type { VersionState } from './Enums/VersionState';
import type { EditingState } from './Enums/EditingState';

import type { Application } from './Application';
import type { Book } from './Book';
import type { BackgroundTask } from './BackgroundTask';
import type { Color } from './Color';
import type { Font } from './Font';
import type { Graphic } from './Graphic';
import type { Layer } from './Layer';
import type { Page } from './Page';
import type { PageItem } from './PageItem';
import type { PDFExportPreset } from './PDFExportPreset';
import type { PreflightProfile } from './PreflightProfile';
import type { PrinterPreset } from './PrinterPreset';
import type { SVG } from './SVG';
import type { Spread } from './Spread';
import type { Story } from './Story';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { Text } from './Text';
import type { TOCStyle } from './TOCStyle';
import type { XMLItem } from './XMLItem';

// Style / list snapshot element types
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { ObjectStyle } from './ObjectStyle';
import type { TableStyle } from './TableStyle';
import type { CellStyle } from './CellStyle';

// Preference / settings objects (readonly)
import type { AdjustLayoutPreference } from './AdjustLayoutPreference';
import type { AnchoredObjectDefault } from './AnchoredObjectDefault';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { BaselineFrameGridOption } from './BaselineFrameGridOption';
import type { ButtonPreference } from './ButtonPreference';
import type { ChapterNumberPreference } from './ChapterNumberPreference';
import type { CjkGridPreference } from './CjkGridPreference';
import type { ConditionalTextPreference } from './ConditionalTextPreference';
import type { DataMerge } from './DataMerge';
import type { DataMergeOption } from './DataMergeOption';
import type { DictionaryPreference } from './DictionaryPreference';
import type { DocumentPreference } from './DocumentPreference';
import type { EPubExportPreference } from './EPubExportPreference';
import type { EPubFixedLayoutExportPreference } from './EPubFixedLayoutExportPreference';
import type { EndnoteOption } from './EndnoteOption';
import type { ExportForWebPreference } from './ExportForWebPreference';
import type { FootnoteOption } from './FootnoteOption';
import type { FrameFittingOption } from './FrameFittingOption';
import type { GalleyPreference } from './GalleyPreference';
import type { GridPreference } from './GridPreference';
import type { GuidePreference } from './GuidePreference';
import type { HTMLExportPreference } from './HTMLExportPreference';
import type { HTMLFXLExportPreference } from './HTMLFXLExportPreference';
import type { Html5ExportPreference } from './Html5ExportPreference';
import type { IndexOptions } from './IndexOptions';
import type { LayoutGridDataInformation } from './LayoutGridDataInformation';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { LinkedStoryOption } from './LinkedStoryOption';
import type { MarginPreference } from './MarginPreference';
import type { MetadataPreference } from './MetadataPreference';
import type { MojikumiUiPreference } from './MojikumiUiPreference';
import type { PageItemDefault } from './PageItemDefault';
import type { PasteboardPreference } from './PasteboardPreference';
import type { PlaceGun } from './PlaceGun';
import type { PreflightOption } from './PreflightOption';
import type { PreflightProcess } from './PreflightProcess';
import type { PrintBookletOption } from './PrintBookletOption';
import type { PrintBookletPrintPreference } from './PrintBookletPrintPreference';
import type { PrintPreference } from './PrintPreference';
import type { PublishExportPreference } from './PublishExportPreference';
import type { StoryGridDataInformation } from './StoryGridDataInformation';
import type { StoryPreference } from './StoryPreference';
import type { TaggedPDFPreference } from './TaggedPDFPreference';
import type { TextDefault } from './TextDefault';
import type { TextFramePreference } from './TextFramePreference';
import type { TextPreference } from './TextPreference';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TransparencyPreference } from './TransparencyPreference';
import type { ViewPreference } from './ViewPreference';
import type { WatermarkPreference } from './WatermarkPreference';
import type { XMLExportPreference } from './XMLExportPreference';
import type { XMLImportPreference } from './XMLImportPreference';
import type { XMLPreference } from './XMLPreference';
import type { XMLViewPreference } from './XMLViewPreference';

// Collections
import type { Preferences } from './Preferences';
import type { PreflightProfiles } from './PreflightProfiles';
import type { DataMergeTextPlaceholders } from './DataMergeTextPlaceholders';
import type { DataMergeImagePlaceholders } from './DataMergeImagePlaceholders';
import type { DataMergeQrcodePlaceholders } from './DataMergeQrcodePlaceholders';
import type { XMLElements } from './XMLElements';
import type { XMLItems } from './XMLItems';
import type { XMLComments } from './XMLComments';
import type { XMLInstructions } from './XMLInstructions';
import type { DTDs } from './DTDs';
import type { XMLExportMaps } from './XMLExportMaps';
import type { XMLImportMaps } from './XMLImportMaps';
import type { XmlStories } from './XmlStories';
import type { Stories } from './Stories';
import type { XMLTags } from './XMLTags';
import type { ValidationErrors } from './ValidationErrors';
import type { TOCStyles } from './TOCStyles';
import type { HyphenationExceptions } from './HyphenationExceptions';
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
import type { Pages } from './Pages';
import type { Spreads } from './Spreads';
import type { Ovals } from './Ovals';
import type { SplineItems } from './SplineItems';
import type { PageItems } from './PageItems';
import type { Rectangles } from './Rectangles';
import type { GraphicLines } from './GraphicLines';
import type { TextFrames } from './TextFrames';
import type { Polygons } from './Polygons';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { ParaStyleMappings } from './ParaStyleMappings';
import type { CharStyleMappings } from './CharStyleMappings';
import type { TableStyleMappings } from './TableStyleMappings';
import type { CellStyleMappings } from './CellStyleMappings';
import type { Sections } from './Sections';
import type { Inks } from './Inks';
import type { TrapPresets } from './TrapPresets';
import type { PDFComments } from './PDFComments';
import type { MasterSpreads } from './MasterSpreads';
import type { Links } from './Links';
import type { Languages } from './Languages';
import type { Layers } from './Layers';
import type { Indexes } from './Indexes';
import type { IndexingSortOptions } from './IndexingSortOptions';
import type { Hyperlinks } from './Hyperlinks';
import type { Bookmarks } from './Bookmarks';
import type { HyperlinkPageItemSources } from './HyperlinkPageItemSources';
import type { HyperlinkTextSources } from './HyperlinkTextSources';
import type { HyperlinkTextDestinations } from './HyperlinkTextDestinations';
import type { HyperlinkPageDestinations } from './HyperlinkPageDestinations';
import type { CrossReferenceFormats } from './CrossReferenceFormats';
import type { CrossReferenceSources } from './CrossReferenceSources';
import type { ParagraphDestinations } from './ParagraphDestinations';
import type { HyperlinkExternalPageDestinations } from './HyperlinkExternalPageDestinations';
import type { HyperlinkURLDestinations } from './HyperlinkURLDestinations';
import type { Guides } from './Guides';
import type { FlexObjects } from './FlexObjects';
import type { ObjectStyleGroups } from './ObjectStyleGroups';
import type { ObjectStyles } from './ObjectStyles';
import type { Groups } from './Groups';
import type { EPSTexts } from './EPSTexts';
import type { FormFields } from './FormFields';
import type { Buttons } from './Buttons';
import type { MultiStateObjects } from './MultiStateObjects';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ListBoxes } from './ListBoxes';
import type { RadioButtons } from './RadioButtons';
import type { TextBoxes } from './TextBoxes';
import type { SignatureFields } from './SignatureFields';
import type { Fonts } from './Fonts';
import type { MathObjects } from './MathObjects';
import type { MotionPresets } from './MotionPresets';
import type { Swatches } from './Swatches';
import type { Colors } from './Colors';
import type { Tints } from './Tints';
import type { Gradients } from './Gradients';
import type { MixedInks } from './MixedInks';
import type { MixedInkGroups } from './MixedInkGroups';
import type { ColorGroups } from './ColorGroups';
import type { Conditions } from './Conditions';
import type { ConditionSets } from './ConditionSets';
import type { CompositeFonts } from './CompositeFonts';
import type { NamedGrids } from './NamedGrids';
import type { KinsokuTables } from './KinsokuTables';
import type { MojikumiTables } from './MojikumiTables';
import type { NumberingLists } from './NumberingLists';
import type { Assignments } from './Assignments';
import type { Articles } from './Articles';
import type { Windows } from './Windows';
import type { LayoutWindows } from './LayoutWindows';
import type { StoryWindows } from './StoryWindows';
import type { AnyGraphic, AnyPageItem, SelectionItem } from './_base/Unions';
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
 * An open InDesign document — the root container for a publication's pages,
 * spreads, stories, styles, swatches, and every page item.
 *
 * Reach one through {@link Application.documents} or
 * {@link Application.activeDocument}. Alongside its child collections a document
 * carries the preference objects that scope layout, text, export and print
 * behaviour to this file, and the file-level operations — save, close, export,
 * package and place.
 */
export interface Document {
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
  get properties(): PropertiesGetter<Document, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Document, 'single'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): string;
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'Document';
  /** Resolves the proxy into the individual {@link Document} objects it stands for. */
  getElements(): Document[];
  /** The unique numeric ID of the document within the session. Stable for the document's lifetime, unlike {@link index}. */
  readonly id: number;
  // ---- File identity -------------------------------------------------------

  /** The document's own file, as a {@link File} entry — reach the path with `.nativePath`. Throws if the document has never been saved; check {@link saved} first. */
  readonly fullName: Promise<File>;
  /** The folder containing the document, as a {@link Folder} entry — reach the path with `.nativePath`. Not the document file itself; see {@link fullName}. */
  readonly filePath: Promise<Folder>;
  /** The cloud path for a cloud document; accessing it on a non-cloud document throws. */
  readonly cloudPath: string;
  /** Whether this is an Adobe cloud document rather than a local file. */
  readonly isCloudDocument: boolean;
  /** Whether the document window is visible. */
  readonly visible: boolean;
  /** Whether the document has unsaved changes since the last save. */
  readonly modified: boolean;
  /** Whether the document has been saved to disk at least once. */
  readonly saved: boolean;
  /** Whether the document was converted from an earlier InDesign format on open. */
  readonly converted: boolean;
  /** Whether the document was recovered from an auto-recovery file. */
  readonly recovered: boolean;
  /** Whether the document is open read-only. */
  readonly readOnly: boolean;
  // ---- Undo / redo introspection ------------------------------------------

  /** Name of the action currently on top of the undo stack. */
  readonly undoName: string;
  /** Name of the action currently on top of the redo stack. */
  readonly redoName: string;
  /** Names of every action in the undo stack, most recent first. */
  readonly undoHistory: string[];
  /** Names of every action in the redo stack. */
  readonly redoHistory: string[];
  // ---- Color management ----------------------------------------------------

  /** The document's working CMYK profile, by name. */
  get cmykProfile(): string;
  set cmykProfile(value: string);
  /** The document's working RGB profile, by name. */
  get rgbProfile(): string;
  set rgbProfile(value: string);
  /** Valid CMYK profile names available to the document. */
  readonly cmykProfileList: string[];
  /** Valid RGB profile names available to the document. */
  readonly rgbProfileList: string[];
  /** Rendering intent for solid vector color in native objects. */
  get solidColorIntent(): RenderingIntent;
  set solidColorIntent(value: RenderingIntent);
  /** Rendering intent applied to colors resulting from on-page transparency blending. */
  get afterBlendingIntent(): RenderingIntent;
  set afterBlendingIntent(value: RenderingIntent);
  /** Default rendering intent for placed bitmap images. */
  get defaultImageIntent(): RenderingIntent;
  set defaultImageIntent(value: RenderingIntent);
  /** Color-management policy for RGB content (profile reading/embedding and mismatch handling). */
  get rgbPolicy(): ColorSettingsPolicy;
  set rgbPolicy(value: ColorSettingsPolicy);
  /** Color-management policy for CMYK content. */
  get cmykPolicy(): ColorSettingsPolicy;
  set cmykPolicy(value: ColorSettingsPolicy);
  /** Whether to use LAB alternates for spot colors when available. */
  get accurateLABSpots(): boolean;
  set accurateLABSpots(value: boolean);
  // ---- Ruler / active layer ------------------------------------------------

  /** The ruler zero point in page coordinates, `[x, y]`. */
  get zeroPoint(): number[];
  set zeroPoint(value: MeasurementValue[]);
  /** The active layer new items are added to. Assign a {@link Layer} or its name. */
  get activeLayer(): Layer;
  set activeLayer(value: Layer | string);
  // ---- Selection -----------------------------------------------------------

  /**
   * The document's current selection. Assign a single object, an array of
   * objects, or {@link NothingEnum.NOTHING} to clear it; the element types
   * depend on what is selectable in the current context (page items, text
   * ranges, table cells…).
   */
  get selection(): SelectionItem[];
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);
  /** The key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): PageItem | null;
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);
  /** Page items currently selected in the document. A snapshot array. */
  readonly selectedPageItems: AnyPageItem[];
  // ---- Math object defaults ------------------------------------------------

  /** Default font size, in points, for math objects. */
  get appliedMathMLFontSize(): number;
  set appliedMathMLFontSize(value: number);
  /** Swatch used for math-object color. Assign a {@link Swatch}, its name, or {@link NothingEnum.NOTHING}; RGB, CMYK, LAB and HSB swatches are supported. */
  get appliedMathMLSwatch(): Swatch | NothingEnum;
  set appliedMathMLSwatch(value: Swatch | string | NothingEnum);
  /** Math-object color as an `[R, G, B]` triple in the `0`–`255` range. */
  get appliedMathMLRgbColor(): number[];
  set appliedMathMLRgbColor(value: number[]);
  /** Tint percentage of the base math color. Range `0`–`100`. */
  get tintValue(): number;
  set tintValue(value: number);
  /** Whether to export math objects as MathML (`true`) or SVG (`false`) during EPUB export. */
  get preferMathMLInEpubExport(): boolean;
  set preferMathMLInEpubExport(value: boolean);
  // ---- Snapshot style/item lists ------------------------------------------

  /** Every {@link ParagraphStyle} in the document, flattened across all style groups. */
  readonly allParagraphStyles: ParagraphStyle[];
  /** Every {@link CharacterStyle} in the document, flattened across all style groups. */
  readonly allCharacterStyles: CharacterStyle[];
  /** Every {@link ObjectStyle} in the document, flattened across all style groups. */
  readonly allObjectStyles: ObjectStyle[];
  /** Every {@link TableStyle} in the document, flattened across all style groups. */
  readonly allTableStyles: TableStyle[];
  /** Every {@link CellStyle} in the document, flattened across all style groups. */
  readonly allCellStyles: CellStyle[];
  /** Every {@link PageItem} in the document, recursing into groups. A snapshot array. */
  readonly allPageItems: AnyPageItem[];
  /** Every {@link Graphic} in the document, recursing into groups. A snapshot array. */
  readonly allGraphics: AnyGraphic[];
  /** Swatches defined in the document that are not applied to any object. */
  readonly unusedSwatches: Swatch[];
  /** The {@link XMLItem} root associated with the document's XML structure. */
  readonly associatedXMLElement: XMLItem;
  // ---- Preference / settings objects (readonly) ---------------------------

  /** XML view preference settings — see {@link XMLViewPreference}. */
  readonly xmlViewPreferences: XMLViewPreference;
  /** Galley view preference settings — see {@link GalleyPreference}. */
  readonly galleyPreferences: GalleyPreference;
  /** Preflight option settings — see {@link PreflightOption}. */
  readonly preflightOptions: PreflightOption;
  /** The active {@link PreflightProcess} for this document, if any. */
  readonly activeProcess: PreflightProcess;
  /** Data-merge field and preference settings — see {@link DataMerge}. */
  readonly dataMergeProperties: DataMerge;
  /** Data-merge output options — see {@link DataMergeOption}. */
  readonly dataMergeOptions: DataMergeOption;
  /** Adjust-layout preference settings — see {@link AdjustLayoutPreference}. */
  readonly adjustLayoutPreferences: AdjustLayoutPreference;
  /** EPUB fixed-layout export preference settings. */
  readonly epubFixedLayoutExportPreferences: EPubFixedLayoutExportPreference;
  /** HTML fixed-layout export preference settings. */
  readonly htmlFXLExportPreferences: HTMLFXLExportPreference;
  /** Publish Online export preference settings. */
  readonly publishExportPreferences: PublishExportPreference;
  /** HTML5 export preference settings. */
  readonly html5ExportPreferences: Html5ExportPreference;
  /** Reflowable EPUB export preference settings. */
  readonly epubExportPreferences: EPubExportPreference;
  /** HTML export preference settings. */
  readonly htmlExportPreferences: HTMLExportPreference;
  /** General XML preference settings. */
  readonly xmlPreferences: XMLPreference;
  /** XML import preference settings. */
  readonly xmlImportPreferences: XMLImportPreference;
  /** XML export preference settings. */
  readonly xmlExportPreferences: XMLExportPreference;
  /** Export-for-web preference settings. */
  readonly exportForWebPreferences: ExportForWebPreference;
  /** Transparency preference settings. */
  readonly transparencyPreferences: TransparencyPreference;
  /** Text-frame preference settings. */
  readonly textFramePreferences: TextFramePreference;
  /** Text preference settings. */
  readonly textPreferences: TextPreference;
  /** Document-scope text default formatting — see {@link TextDefault}. */
  readonly textDefaults: TextDefault;
  /** Endnote option settings. */
  readonly endnoteOptions: EndnoteOption;
  /** User-dictionary preference settings. */
  readonly dictionaryPreferences: DictionaryPreference;
  /** Story preference settings. */
  readonly storyPreferences: StoryPreference;
  /** Default settings for newly created anchored objects. */
  readonly anchoredObjectDefaults: AnchoredObjectDefault;
  /** Anchored-object settings for the document. */
  readonly anchoredObjectSettings: AnchoredObjectSetting;
  /** Baseline frame-grid option settings. */
  readonly baselineFrameGridOptions: BaselineFrameGridOption;
  /** Footnote option settings. */
  readonly footnoteOptions: FootnoteOption;
  /** Default text-wrap formatting applied when wrapping text around objects. */
  readonly textWrapPreferences: TextWrapPreference;
  /** Document preference settings (page size, facing pages, bleed/slug…). */
  readonly documentPreferences: DocumentPreference;
  /** Document grid preference settings. */
  readonly gridPreferences: GridPreference;
  /** Guide preference settings. */
  readonly guidePreferences: GuidePreference;
  /** Margin and column preference settings. */
  readonly marginPreferences: MarginPreference;
  /** Pasteboard preference settings. */
  readonly pasteboardPreferences: PasteboardPreference;
  /** View preference settings (measurement units, ruler origin…). */
  readonly viewPreferences: ViewPreference;
  /** Linked-story options — see {@link LinkedStoryOption}. */
  readonly linkedStoryOptions: LinkedStoryOption;
  /** Linked-page-item options — see {@link LinkedPageItemOption}. */
  readonly linkedPageItemOptions: LinkedPageItemOption;
  /** Print preference settings. */
  readonly printPreferences: PrintPreference;
  /** Print-booklet options. */
  readonly printBookletOptions: PrintBookletOption;
  /** Print-booklet print preference settings. */
  readonly printBookletPrintPreferences: PrintBookletPrintPreference;
  /** Tagged-PDF export preference settings. */
  readonly taggedPDFPreferences: TaggedPDFPreference;
  /** The document's place gun (loaded, not-yet-placed content) — see {@link PlaceGun}. */
  readonly placeGuns: PlaceGun;
  /** File metadata (XMP) preference settings. */
  readonly metadataPreferences: MetadataPreference;
  /** Index formatting/generation options. */
  readonly indexGenerationOptions: IndexOptions;
  /** Default page-item formatting for the document. */
  readonly pageItemDefaults: PageItemDefault;
  /** Frame-fitting options applied to placed or pasted content. */
  readonly frameFittingOptions: FrameFittingOption;
  /** Button (interactive form) preference settings. */
  readonly buttonPreferences: ButtonPreference;
  /** Watermark preference settings. */
  readonly watermarkPreferences: WatermarkPreference;
  /** Conditional-text preference settings. */
  readonly conditionalTextPreferences: ConditionalTextPreference;
  /** Default layout-grid properties (CJK). */
  readonly layoutGridData: LayoutGridDataInformation;
  /** Default frame-grid properties (CJK). */
  readonly storyGridData: StoryGridDataInformation;
  /** CJK grid preference settings. */
  readonly cjkGridPreferences: CjkGridPreference;
  /** Mojikumi UI preference settings. */
  readonly mojikumiUIPreferences: MojikumiUiPreference;
  /** Chapter-numbering preference settings. */
  readonly chapterNumberPreferences: ChapterNumberPreference;
  /** Version Cue version state of the file. */
  readonly versionState: VersionState;
  /** Version Cue editing state of the file. */
  readonly editingState: EditingState;
  // ---- Child collections ---------------------------------------------------

  /** A collection of scoped {@link Preferences} objects. */
  readonly preferences: Preferences;
  /** {@link PreflightProfiles} available in the document. */
  readonly preflightProfiles: PreflightProfiles;
  /** {@link DataMergeTextPlaceholders} in the document. */
  readonly dataMergeTextPlaceholders: DataMergeTextPlaceholders;
  /** {@link DataMergeImagePlaceholders} in the document. */
  readonly dataMergeImagePlaceholders: DataMergeImagePlaceholders;
  /** {@link DataMergeQrcodePlaceholders} in the document. */
  readonly dataMergeQrcodePlaceholders: DataMergeQrcodePlaceholders;
  /** {@link XMLElements} in the document's XML structure. */
  readonly xmlElements: XMLElements;
  /** {@link XMLItems} in the document. */
  readonly xmlItems: XMLItems;
  /** {@link XMLComments} in the document. */
  readonly xmlComments: XMLComments;
  /** {@link XMLInstructions} in the document. */
  readonly xmlInstructions: XMLInstructions;
  /** {@link DTDs} loaded in the document. */
  readonly dtds: DTDs;
  /** {@link XMLExportMaps} in the document. */
  readonly xmlExportMaps: XMLExportMaps;
  /** {@link XMLImportMaps} in the document. */
  readonly xmlImportMaps: XMLImportMaps;
  /** {@link XmlStories} in the document. */
  readonly xmlStories: XmlStories;
  /** {@link Stories} — every text story in the document. */
  readonly stories: Stories;
  /** {@link XMLTags} defined in the document. */
  readonly xmlTags: XMLTags;
  /** {@link ValidationErrors} from the last XML validation. */
  readonly validationErrors: ValidationErrors;
  /** {@link TOCStyles} defined in the document. */
  readonly tocStyles: TOCStyles;
  /** {@link HyphenationExceptions} lists in the document. */
  readonly hyphenationExceptions: HyphenationExceptions;
  /** {@link ParagraphStyleGroups} in the document. */
  readonly paragraphStyleGroups: ParagraphStyleGroups;
  /** {@link CharacterStyleGroups} in the document. */
  readonly characterStyleGroups: CharacterStyleGroups;
  /** {@link CharacterStyles} at the document's top level. */
  readonly characterStyles: CharacterStyles;
  /** {@link ParagraphStyles} at the document's top level. */
  readonly paragraphStyles: ParagraphStyles;
  /** {@link TextVariables} defined in the document. */
  readonly textVariables: TextVariables;
  /** {@link TableStyles} at the document's top level. */
  readonly tableStyles: TableStyles;
  /** {@link TableStyleGroups} in the document. */
  readonly tableStyleGroups: TableStyleGroups;
  /** {@link CellStyles} at the document's top level. */
  readonly cellStyles: CellStyles;
  /** {@link CellStyleGroups} in the document. */
  readonly cellStyleGroups: CellStyleGroups;
  /** {@link StrokeStyles} defined in the document. */
  readonly strokeStyles: StrokeStyles;
  /** {@link DashedStrokeStyles} in the document. */
  readonly dashedStrokeStyles: DashedStrokeStyles;
  /** {@link DottedStrokeStyles} in the document. */
  readonly dottedStrokeStyles: DottedStrokeStyles;
  /** {@link StripedStrokeStyles} in the document. */
  readonly stripedStrokeStyles: StripedStrokeStyles;
  /** {@link Pages} in the document. */
  readonly pages: Pages<Spread>;
  /** {@link Spreads} in the document. */
  readonly spreads: Spreads;
  /** {@link MasterSpreads} in the document. */
  readonly masterSpreads: MasterSpreads;
  /** {@link Sections} in the document. */
  readonly sections: Sections;
  /** {@link Layers} in the document. */
  readonly layers: Layers;
  /** {@link Guides} across the document. */
  readonly guides: Guides;
  /** {@link Links} — every placed file link in the document. */
  readonly links: Links;
  /** {@link Languages} available in the document. */
  readonly languages: Languages;
  /** {@link Fonts} used or available in the document. */
  readonly fonts: Fonts;
  /** {@link Inks} in the document. */
  readonly inks: Inks;
  /** {@link TrapPresets} in the document. */
  readonly trapPresets: TrapPresets;
  /** {@link PDFComments} imported into the document. */
  readonly pdfComments: PDFComments;
  /** {@link Indexes} in the document. */
  readonly indexes: Indexes;
  /** {@link IndexingSortOptions} for the document. */
  readonly indexingSortOptions: IndexingSortOptions;
  /** {@link Hyperlinks} in the document. */
  readonly hyperlinks: Hyperlinks;
  /** {@link Bookmarks} in the document. */
  readonly bookmarks: Bookmarks;
  /** {@link HyperlinkPageItemSources} in the document. */
  readonly hyperlinkPageItemSources: HyperlinkPageItemSources;
  /** {@link HyperlinkTextSources} in the document. */
  readonly hyperlinkTextSources: HyperlinkTextSources;
  /** {@link HyperlinkTextDestinations} in the document. */
  readonly hyperlinkTextDestinations: HyperlinkTextDestinations;
  /** {@link HyperlinkPageDestinations} in the document. */
  readonly hyperlinkPageDestinations: HyperlinkPageDestinations;
  /** {@link CrossReferenceFormats} in the document. */
  readonly crossReferenceFormats: CrossReferenceFormats;
  /** {@link CrossReferenceSources} in the document. */
  readonly crossReferenceSources: CrossReferenceSources;
  /** {@link ParagraphDestinations} in the document. */
  readonly paragraphDestinations: ParagraphDestinations;
  /** {@link HyperlinkExternalPageDestinations} in the document. */
  readonly hyperlinkExternalPageDestinations: HyperlinkExternalPageDestinations;
  /** {@link HyperlinkURLDestinations} in the document. */
  readonly hyperlinkURLDestinations: HyperlinkURLDestinations;
  /** {@link ParaStyleMappings} for style import/export. */
  readonly paraStyleMappings: ParaStyleMappings;
  /** {@link CharStyleMappings} for style import/export. */
  readonly charStyleMappings: CharStyleMappings;
  /** {@link TableStyleMappings} for style import/export. */
  readonly tableStyleMappings: TableStyleMappings;
  /** {@link CellStyleMappings} for style import/export. */
  readonly cellStyleMappings: CellStyleMappings;
  /** {@link ObjectStyleGroups} in the document. */
  readonly objectStyleGroups: ObjectStyleGroups;
  /** {@link ObjectStyles} at the document's top level. */
  readonly objectStyles: ObjectStyles;
  /** {@link MotionPresets} available in the document. */
  readonly motionPresets: MotionPresets;
  /** {@link Swatches} in the document. */
  readonly swatches: Swatches;
  /** {@link Colors} in the document. */
  readonly colors: Colors;
  /** {@link Tints} in the document. */
  readonly tints: Tints;
  /** {@link Gradients} in the document. */
  readonly gradients: Gradients;
  /** {@link MixedInks} in the document. */
  readonly mixedInks: MixedInks;
  /** {@link MixedInkGroups} in the document. */
  readonly mixedInkGroups: MixedInkGroups;
  /** {@link ColorGroups} in the document. */
  readonly colorGroups: ColorGroups;
  /** {@link Conditions} for conditional text. */
  readonly conditions: Conditions;
  /** {@link ConditionSets} for conditional text. */
  readonly conditionSets: ConditionSets;
  /** {@link CompositeFonts} defined in the document. */
  readonly compositeFonts: CompositeFonts;
  /** {@link NamedGrids} in the document. */
  readonly namedGrids: NamedGrids;
  /** {@link KinsokuTables} (CJK line-break tables) in the document. */
  readonly kinsokuTables: KinsokuTables;
  /** {@link MojikumiTables} (CJK spacing tables) in the document. */
  readonly mojikumiTables: MojikumiTables;
  /** {@link NumberingLists} in the document. */
  readonly numberingLists: NumberingLists;
  /** {@link Assignments} for InCopy workflows. */
  readonly assignments: Assignments;
  /** {@link Articles} in the document. */
  readonly articles: Articles;
  /** {@link Windows} showing this document. */
  readonly windows: Windows;
  /** {@link LayoutWindows} showing this document. */
  readonly layoutWindows: LayoutWindows;
  /** {@link StoryWindows} (galley/story editor) for this document. */
  readonly storyWindows: StoryWindows;
  // ---- Page-item container accessors ---------------------------------------

  /** {@link Ovals} (ellipses) at the document's top level. */
  readonly ovals: Ovals;
  /** {@link SplineItems} at the document's top level. */
  readonly splineItems: SplineItems;
  /** All {@link PageItems} at the document's top level, regardless of type. */
  readonly pageItems: PageItems;
  /** {@link Rectangles} at the document's top level. */
  readonly rectangles: Rectangles;
  /** {@link GraphicLines} at the document's top level. */
  readonly graphicLines: GraphicLines;
  /** {@link TextFrames} at the document's top level. */
  readonly textFrames: TextFrames;
  /** {@link Polygons} at the document's top level. */
  readonly polygons: Polygons;
  /** {@link EndnoteTextFrames} at the document's top level. */
  readonly endnoteTextFrames: EndnoteTextFrames;
  /** {@link FlexObjects} at the document's top level. */
  readonly flexObjects: FlexObjects;
  /** {@link Groups} at the document's top level. */
  readonly groups: Groups;
  /** {@link EPSTexts} at the document's top level. */
  readonly epstexts: EPSTexts;
  /** {@link FormFields} at the document's top level. */
  readonly formFields: FormFields;
  /** {@link Buttons} at the document's top level. */
  readonly buttons: Buttons;
  /** {@link MultiStateObjects} at the document's top level. */
  readonly multiStateObjects: MultiStateObjects;
  /** {@link CheckBoxes} at the document's top level. */
  readonly checkBoxes: CheckBoxes;
  /** {@link ComboBoxes} at the document's top level. */
  readonly comboBoxes: ComboBoxes;
  /** {@link ListBoxes} at the document's top level. */
  readonly listBoxes: ListBoxes;
  /** {@link RadioButtons} at the document's top level. */
  readonly radioButtons: RadioButtons;
  /** {@link TextBoxes} at the document's top level. */
  readonly textBoxes: TextBoxes;
  /** {@link SignatureFields} at the document's top level. */
  readonly signatureFields: SignatureFields;
  /** {@link MathObjects} at the document's top level. */
  readonly mathObjects: MathObjects;
  // ---- Methods -------------------------------------------------------------

  /**
   * Saves the document. If already saved, saves a copy at `to`, closes the
   * original, and opens the new copy.
   * @param to Destination path; omit to save in place.
   * @param stationery If `true`, saves as a template. Defaults to `false`.
   * @param versionComments Version Cue comment for Document save.
   * @param forceSave If `true`, forces a new version even with no changes. Defaults to `false`.
   */
  save(to?: FilePath, stationery?: boolean, versionComments?: string, forceSave?: boolean): Document;
  /**
   * Saves a copy of the document to `to`, leaving the original open and the copy
   * unopened.
   * @param to Destination path for the copy.
   * @param stationery If `true`, saves the copy as a template. Defaults to `false`.
   */
  saveACopy(to?: FilePath, stationery?: boolean): void;
  /** Saves the document as an Adobe cloud document at `cloudPath`. */
  saveAsCloud(cloudPath: string): Document;
  /** Saves a copy of the document as an Adobe cloud document at `cloudPath`. */
  saveACopyCloud(cloudPath: string): Document;
  /**
   * Closes the document.
   * @param saving Whether to save changes before closing; when
   * {@link SaveOptions.ASK} InDesign prompts the user. Defaults to `SaveOptions.ASK`.
   * @param savingIn Destination path used when `saving` is {@link SaveOptions.YES}
   * and the document has never been saved. Required for an unsaved document.
   * @param versionComments Version Cue comment for the implied save.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  close(saving?: SaveOptions, savingIn?: FilePath, versionComments?: string, forceSave?: boolean): void;
  /** Reverts the document to its state at the last save. Returns `true` on success. */
  revert(): boolean;
  /**
   * Exports the document (or a selection) to a file.
   * @param format Export format — an {@link ExportFormat} value or a
   * format/extension string as shown in the Export dialog.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the format's export-options dialog. Defaults to `false`.
   * @param using Export preset to use (e.g. a {@link PDFExportPreset}).
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void;
  /**
   * Exports the document to a file on a background thread, returning the
   * {@link BackgroundTask} that tracks progress.
   * @param format Export format — see {@link exportFile}.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using Export preset to use.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask;
  /**
   * Places one or more files, following the Place menu behavior — may load the
   * place gun or replace the current selection depending on preferences.
   *
   * Placing an image returns the **graphic** (`Image`, `PDF`, `EPS`…),
   * not the frame InDesign creates around it. Sizing and moving belong to the frame,
   * which is the graphic's `parent` — narrow it before use, since a graphic can also
   * sit in a cell or a snippet:
   *
   * ```ts
   * const img = doc.place(file)[0];
   * if (img && img.parent.constructorName === 'Rectangle') {
   *   img.parent.fit(FitOptions.PROPORTIONALLY);
   * }
   * ```
   * @param fileName One file path, or an array of paths.
   * @param showingOptions If `true`, shows the import-options dialog. Defaults to `false`.
   * @param withProperties Initial properties for the placed object(s).
   */
  place(fileName: FilePath | FilePath[], showingOptions?: boolean, withProperties?: object): void;
  /**
   * Packages the document for output — collecting fonts, links, and a report.
   * @param to Destination folder for the package.
   * @param copyingFonts Copy used fonts into the package.
   * @param copyingLinkedGraphics Copy linked graphics into the package.
   * @param copyingProfiles Copy color profiles into the package.
   * @param updatingGraphics Update graphics links to the packaged copies.
   * @param includingHiddenLayers Include fonts/links from hidden layers.
   * @param ignorePreflightErrors If `false`, cancels packaging when preflight errors exist.
   * @param creatingReport Generate a package report.
   * @param includeIdml Also generate IDML in the package.
   * @param includePdf Also generate PDF in the package.
   * @param pdfStyle PDF preset name to use when `includePdf` is `true`; falls back to the last-used preset if invalid.
   * @param useDocumentHyphenationExceptionsOnly Flag the document to avoid reflow on machines with different dictionaries.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  packageForPrint(to: FolderPath, copyingFonts: boolean, copyingLinkedGraphics: boolean, copyingProfiles: boolean, updatingGraphics: boolean, includingHiddenLayers: boolean, ignorePreflightErrors: boolean, creatingReport: boolean, includeIdml?: boolean, includePdf?: boolean, pdfStyle?: string, useDocumentHyphenationExceptionsOnly?: boolean, versionComments?: string, forceSave?: boolean): boolean;
  /**
   * Prints the document.
   * @param printDialog If `true`, shows the Print dialog. Defaults to `false`.
   * @param using A {@link PrinterPreset} or built-in {@link PrinterPresetTypes} to print with.
   */
  print(printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): void;
  /**
   * Prints the document as a booklet, using the document's booklet and print settings.
   * @param printBookletDialog If `true`, shows the Print Booklet dialog. Defaults to `false`.
   * @param using A {@link PrinterPreset} or built-in {@link PrinterPresetTypes} to print with.
   */
  printBooklet(printBookletDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): void;
  /**
   * Creates a table of contents and places its story.
   * @param using The {@link TOCStyle} defining content, title, and format.
   * @param replacing If `true`, replaces the existing TOC. Defaults to `false`.
   * @param fromBook A {@link Book} whose documents to include.
   * @param placePoint Point to place the TOC story at, `[x, y]`.
   * @param includeOverset If `true`, includes overset text entries. Defaults to `false`.
   * @param destinationLayer The layer to place the TOC on.
   */
  createTOC(using: TOCStyle, replacing?: boolean, fromBook?: Book, placePoint?: MeasurementValue[], includeOverset?: boolean, destinationLayer?: Layer): Story[];
  /**
   * Imports the specified XML file into the document.
   * @param from Path to the XML file.
   */
  importXML(from: FilePath): void;
  /**
   * Imports a DTD for XML validation.
   * @param from Path to the DTD file.
   */
  importDtd(from: FilePath): void;
  /** Deletes XML markup tags not used anywhere in the document. */
  deleteUnusedTags(): void;
  /**
   * Loads XML markup tags from a file.
   * @param from Path to the tag file.
   */
  loadXMLTags(from: FilePath): void;
  /**
   * Saves the document's XML markup tags to a file.
   * @param to Destination path.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  saveXMLTags(to: FilePath, versionComments?: string, forceSave?: boolean): void;
  /** Auto-tags document content based on the style-to-tag mappings. */
  mapStylesToXMLTags(): void;
  /** Auto-styles document content based on the tag-to-style mappings. */
  mapXMLTagsToStyles(): void;
  /**
   * Imports styles from a file.
   * @param format Which style types to import.
   * @param from File containing the styles.
   * @param globalStrategy How to resolve name clashes with existing styles.
   */
  importStyles(format: ImportFormat, from: FilePath, globalStrategy?: GlobalClashResolutionStrategy): void;
  /**
   * Loads master spreads from another InDesign file.
   * @param from The InDesign file to load masters from.
   * @param globalStrategyForMasterPage Clash-resolution strategy for the loaded masters.
   */
  loadMasters(from: FilePath, globalStrategyForMasterPage?: GlobalClashResolutionStrategyForMasterPage): void;
  /**
   * Loads swatches from a swatch file or InDesign document.
   * @param from The source file.
   */
  loadSwatches(from: FilePath): void;
  /**
   * Saves selected swatches to a swatchbook file.
   * @param to Destination file.
   * @param swatchList Swatches to save.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  saveSwatches(to: FilePath, swatchList: Swatch | Swatch[], versionComments?: string, forceSave?: boolean): void;
  /** Imports a spot color from an Adobe swatchbook by name. */
  importAdobeSwatchbookSpotColor(name: string): Color;
  /** Imports a process color from an Adobe swatchbook by name. */
  importAdobeSwatchbookProcessColor(name: string): Color;
  /**
   * Exports stroke-style presets to a file.
   * @param to Destination file.
   * @param strokeStyleList Stroke styles to save.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  exportStrokeStyles(to: FilePath, strokeStyleList: StrokeStyle | StrokeStyle[], versionComments?: string, forceSave?: boolean): void;
  /**
   * Loads conditions (and optionally condition sets) from a file.
   * @param from Path to the conditions file.
   * @param loadConditionSets If `true`, also loads condition sets. Defaults to `false`.
   */
  loadConditions(from: FilePath, loadConditionSets?: boolean): void;
  /**
   * Imports cross-reference formats from a file.
   * @param from The file whose formats to import.
   */
  importFormats(from: FilePath): void;
  /** Updates the text-source content of every cross reference in the document. */
  updateCrossReferences(): void;
  /** Recomposes all text in the document. */
  recompose(): void;
  /**
   * Selects the given object(s) in the document.
   * @param selectableItems The object(s) to select, {@link SelectAll} to select
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void;
  /** Undoes the last action. */
  undo(): void;
  /** Redoes the last undone action. */
  redo(): void;
  /**
   * Aligns page items.
   * @param alignDistributeItems Items to align.
   * @param alignOption Alignment to apply.
   * @param alignDistributeBounds Bounds to align within.
   * @param reference Key object to align relative to. Required when
   * `alignDistributeBounds` is {@link AlignDistributeBounds.KEY_OBJECT}.
   */
  align(alignDistributeItems: PageItem | PageItem[], alignOption: AlignOptions, alignDistributeBounds?: AlignDistributeBounds, reference?: PageItem): void;
  /**
   * Distributes page items.
   * @param alignDistributeItems Items to distribute.
   * @param distributeOption Distribution to apply.
   * @param alignDistributeBounds Bounds to distribute within.
   * @param useDistributeMeasurement If `true`, distributes a fixed space between items and ignores `alignDistributeBounds`.
   * @param absoluteDistributeMeasurement Spacing to use; required when
   * `alignDistributeBounds` is {@link AlignDistributeBounds.KEY_OBJECT}.
   * @param reference Key object to distribute relative to.
   */
  distribute(alignDistributeItems: PageItem | PageItem[], distributeOption: DistributeOptions, alignDistributeBounds?: AlignDistributeBounds, useDistributeMeasurement?: boolean, absoluteDistributeMeasurement?: MeasurementValue, reference?: PageItem): void;
  /**
   * Adjusts the layout for new page-size, bleed, and margin values.
   * @param adoptTo Object of changed properties. Valid keys: `width`, `height`,
   * `bleedInside`, `bleedTop`, `bleedOutside`, `bleedBottom`, `leftMargin`,
   * `topMargin`, `rightMargin`, `bottomMargin`. Values are points as numbers or
   * measurement strings such as `'1 in'`; only the keys to change need be given.
   * Bleed keys have no effect when `affectedPages` targets individual pages.
   * @param affectedPages Pages to affect; omit to affect the whole document.
   */
  adjustLayout(adoptTo: object, affectedPages?: Page | Page[]): void;
  /**
   * Creates an alternate layout for a list of spreads.
   * @param spreadItems Spreads to base the alternate layout on.
   * @param name Name of the alternate layout (also names the new section).
   * @param width Page width of the created pages.
   * @param height Page height of the created pages.
   * @param createTextStyles Whether to create new text styles.
   * @param linkTextStories Whether to link duplicated text stories to their source.
   * @param layoutRule Layout rule applied to the created pages.
   */
  createAlternateLayout(spreadItems: Spread | Spread[], name: string, width: MeasurementValue, height: MeasurementValue, createTextStyles: boolean, linkTextStories: boolean, layoutRule: LayoutRuleOptions): void;
  /** Deletes the alternate layout with the given name. */
  deleteAlternateLayout(name: string): void;
  /** Resets every multi-state object in the document to its first state. */
  resetAllMultiStateObjects(): void;
  /** Resets every button in the document to its Normal state. */
  resetAllButtons(): void;
  /** Removes frame-fitting options, resetting them to the initial state. */
  clearFrameFittingOptions(): void;
  /**
   * Creates a page item from a MathML description.
   * @param mathmlDescription The MathML source.
   * @param mathmlDestinationPage Page to create the object on.
   * @param destinationLayer Layer to create the object on.
   * @param placePoint Point to place at, `[x, y]`.
   */
  createFromMathML(mathmlDescription: string, mathmlDestinationPage: Page, destinationLayer: Layer, placePoint: MeasurementValue[]): SVG;
  /**
   * Creates a missing-font placeholder object.
   * @param fontFamily Font family name.
   * @param fontStyleName Font style name.
   * @param postscriptName PostScript name.
   */
  createMissingFontObject(fontFamily: string, fontStyleName: string, postscriptName: string): Font;
  /** Direction of the currently selected text. */
  getSelectedTextDirection(): TextDirection;
  /**
   * Returns the style-conflict resolution strategy, or `false` if the user cancels.
   * @param charOrParaStyle Which style type to inspect.
   */
  getStyleConflictResolutionStrategy(charOrParaStyle?: StyleType): GlobalClashResolutionStrategy | false;
  /**
   * Transforms a color value between color spaces.
   * @param colorValue Source color component values.
   * @param sourceColorSpace Source color space.
   * @param destinationColorSpace Destination color space.
   */
  colorTransform(colorValue: number[], sourceColorSpace: ColorSpace, destinationColorSpace: ColorSpace): number[];
  /**
   * Embeds a preflight profile into the document.
   * @param using The {@link PreflightProfile} or its name to embed.
   */
  embed(using: string | PreflightProfile): PreflightProfile;
  /** Exports the current page-item selection to a snippet file at `to`. */
  exportPageItemsSelectionToSnippet(to: FilePath): void;
  /**
   * Exports the given page items (by id) to a snippet file.
   * @param to Destination snippet path.
   * @param pageItemIds IDs of the page items to export.
   */
  exportPageItemsToSnippet(to: FilePath, pageItemIds: number[]): void;
  /**
   * Exports assets required for a Creative Cloud library.
   * @param jsondata JSON-encoded export information.
   */
  exportForCloudLibrary(jsondata: string): boolean;
  /**
   * Imports PDF comments into the document.
   * @param from The PDF file to import comments from.
   * @param withProperties Initial property values.
   */
  importPdfComments(from: FilePath, withProperties?: object): void;
  /**
   * Places a cloud asset onto the document.
   * @param jsondata JSON metadata describing the cloud asset.
   */
  placeCloudAsset(jsondata: string): void;
  /** Finds color matching the current find-color query. Returns the match count. */
  findColor(): number;
  /** Replaces color matching the find-color query with the change-color value. Returns the change count. */
  changeColor(): number;
  /** Finds text matching the current find-text query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findText(reverseOrder?: boolean): Text[];
  /** Replaces text matching the find-text query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeText(reverseOrder?: boolean): Text[];
  /** Finds text matching the current GREP query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findGrep(reverseOrder?: boolean): Text[];
  /** Replaces text matching the GREP query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeGrep(reverseOrder?: boolean): Text[];
  /** Finds glyphs matching the current find-glyph query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findGlyph(reverseOrder?: boolean): Text[];
  /** Replaces glyphs matching the find-glyph query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeGlyph(reverseOrder?: boolean): Text[];
  /** Finds objects matching the current find-object query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findObject(reverseOrder?: boolean): PageItem[];
  /** Replaces objects matching the find-object query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeObject(reverseOrder?: boolean): PageItem[];
  /** Finds text matching the current find-transliterate query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findTransliterate(reverseOrder?: boolean): Text[];
  /** Replaces text matching the find-transliterate query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeTransliterate(reverseOrder?: boolean): Text[];
  /**
   * Synchronizes the document with its Version Cue project.
   * @param syncConflictResolution Conflict-resolution method.
   * @param versionComments Comment describing the version.
   */
  synchronizeWithVersionCue(syncConflictResolution?: SyncConflictResolution, versionComments?: string): VersionCueSyncStatus;
  /**
   * Reverts to the Version Cue project copy.
   * @param forceRevert If `true`, forcibly reverts. Defaults to `false`.
   */
  revertToProject(forceRevert?: boolean): void;
  /**
   * Checks the document in to Version Cue.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  checkIn(versionComments?: string, forceSave?: boolean): void;
  /** Switches the document's composer to Optyca (Adobe World-Ready). */
  changeComposer(): void;
  /**
   * Loads the place gun with a linked copy of `parentStory`, the scripted form
   * of File ▸ Place and Link.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   * @deprecated Use {@link ContentPlacerObject} (`app.contentPlacer.load`) instead.
   */
  placeAndLink(parentStory: Story, showingOptions?: boolean): void;
  /**
   * Describes the document's alternate layouts.
   * @param resolveMaster Resolve the layout policy when it is set to *use master*. Defaults to `true`.
   */
  getAlternateLayoutsForFolio(resolveMaster?: boolean): unknown[];
  /** Creates a QR code from plain text and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code linking to a URL and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code that composes an SMS and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code that composes an email and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /**
   * Creates a business-card (vCard) QR code and loads it into the place gun.
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
   * Updates the table of contents in this document, using the TOC style currently applied.
   * @param using The TOC style to update with, instead of the one currently applied.
   */
  updateTOC(using?: TOCStyle): void;
  /** Internal use only — reserved for the InDesign engineering team. */
  handleMathMLMessage(resyncData: string): void;
  /** Internal use only — reserved for the InDesign engineering team. */
  internalMethod(internalParameter1: string, internalParameter2: string): string;
}


/**
 * The broadcast proxy for {@link Document} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Document} there.
 */
export interface DocumentPlural {
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
  get properties(): (PropertiesGetter<DocumentPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DocumentPlural, 'plural'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): (string)[];
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'Document';
  /** Resolves the proxy into the individual {@link Document} objects it stands for. */
  getElements(): Document[];
  /** The unique numeric ID of the document within the session. Stable for the document's lifetime, unlike {@link index}. */
  readonly id: (number)[];
  // ---- File identity -------------------------------------------------------

  /** The document's own file, as a {@link File} entry — reach the path with `.nativePath`. Throws if the document has never been saved; check {@link saved} first. */
  readonly fullName: (Promise<File>)[];
  /** The folder containing the document, as a {@link Folder} entry — reach the path with `.nativePath`. Not the document file itself; see {@link fullName}. */
  readonly filePath: (Promise<Folder>)[];
  /** The cloud path for a cloud document; accessing it on a non-cloud document throws. */
  readonly cloudPath: (string)[];
  /** Whether this is an Adobe cloud document rather than a local file. */
  readonly isCloudDocument: (boolean)[];
  /** Whether the document window is visible. */
  readonly visible: (boolean)[];
  /** Whether the document has unsaved changes since the last save. */
  readonly modified: (boolean)[];
  /** Whether the document has been saved to disk at least once. */
  readonly saved: (boolean)[];
  /** Whether the document was converted from an earlier InDesign format on open. */
  readonly converted: (boolean)[];
  /** Whether the document was recovered from an auto-recovery file. */
  readonly recovered: (boolean)[];
  /** Whether the document is open read-only. */
  readonly readOnly: (boolean)[];
  // ---- Undo / redo introspection ------------------------------------------

  /** Name of the action currently on top of the undo stack. */
  readonly undoName: (string)[];
  /** Name of the action currently on top of the redo stack. */
  readonly redoName: (string)[];
  /** Names of every action in the undo stack, most recent first. */
  readonly undoHistory: (string[])[];
  /** Names of every action in the redo stack. */
  readonly redoHistory: (string[])[];
  // ---- Color management ----------------------------------------------------

  /** The document's working CMYK profile, by name. */
  get cmykProfile(): (string)[];
  set cmykProfile(value: string);
  /** The document's working RGB profile, by name. */
  get rgbProfile(): (string)[];
  set rgbProfile(value: string);
  /** Valid CMYK profile names available to the document. */
  readonly cmykProfileList: (string[])[];
  /** Valid RGB profile names available to the document. */
  readonly rgbProfileList: (string[])[];
  /** Rendering intent for solid vector color in native objects. */
  get solidColorIntent(): (RenderingIntent)[];
  set solidColorIntent(value: RenderingIntent);
  /** Rendering intent applied to colors resulting from on-page transparency blending. */
  get afterBlendingIntent(): (RenderingIntent)[];
  set afterBlendingIntent(value: RenderingIntent);
  /** Default rendering intent for placed bitmap images. */
  get defaultImageIntent(): (RenderingIntent)[];
  set defaultImageIntent(value: RenderingIntent);
  /** Color-management policy for RGB content (profile reading/embedding and mismatch handling). */
  get rgbPolicy(): (ColorSettingsPolicy)[];
  set rgbPolicy(value: ColorSettingsPolicy);
  /** Color-management policy for CMYK content. */
  get cmykPolicy(): (ColorSettingsPolicy)[];
  set cmykPolicy(value: ColorSettingsPolicy);
  /** Whether to use LAB alternates for spot colors when available. */
  get accurateLABSpots(): (boolean)[];
  set accurateLABSpots(value: boolean);
  // ---- Ruler / active layer ------------------------------------------------

  /** The ruler zero point in page coordinates, `[x, y]`. */
  get zeroPoint(): (number[])[];
  set zeroPoint(value: MeasurementValue[]);
  /** The active layer new items are added to. Assign a {@link Layer} or its name. */
  get activeLayer(): (Layer)[];
  set activeLayer(value: Layer | string);
  // ---- Selection -----------------------------------------------------------

  /**
   * The document's current selection. Assign a single object, an array of
   * objects, or {@link NothingEnum.NOTHING} to clear it; the element types
   * depend on what is selectable in the current context (page items, text
   * ranges, table cells…).
   */
  get selection(): (SelectionItem[])[];
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);
  /** The key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): (PageItem | null)[];
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);
  /** Page items currently selected in the document. A snapshot array. */
  readonly selectedPageItems: (AnyPageItem[])[];
  // ---- Math object defaults ------------------------------------------------

  /** Default font size, in points, for math objects. */
  get appliedMathMLFontSize(): (number)[];
  set appliedMathMLFontSize(value: number);
  /** Swatch used for math-object color. Assign a {@link Swatch}, its name, or {@link NothingEnum.NOTHING}; RGB, CMYK, LAB and HSB swatches are supported. */
  get appliedMathMLSwatch(): (Swatch | NothingEnum)[];
  set appliedMathMLSwatch(value: Swatch | string | NothingEnum);
  /** Math-object color as an `[R, G, B]` triple in the `0`–`255` range. */
  get appliedMathMLRgbColor(): (number[])[];
  set appliedMathMLRgbColor(value: number[]);
  /** Tint percentage of the base math color. Range `0`–`100`. */
  get tintValue(): (number)[];
  set tintValue(value: number);
  /** Whether to export math objects as MathML (`true`) or SVG (`false`) during EPUB export. */
  get preferMathMLInEpubExport(): (boolean)[];
  set preferMathMLInEpubExport(value: boolean);
  // ---- Snapshot style/item lists ------------------------------------------

  /** Every {@link ParagraphStyle} in the document, flattened across all style groups. */
  readonly allParagraphStyles: (ParagraphStyle[])[];
  /** Every {@link CharacterStyle} in the document, flattened across all style groups. */
  readonly allCharacterStyles: (CharacterStyle[])[];
  /** Every {@link ObjectStyle} in the document, flattened across all style groups. */
  readonly allObjectStyles: (ObjectStyle[])[];
  /** Every {@link TableStyle} in the document, flattened across all style groups. */
  readonly allTableStyles: (TableStyle[])[];
  /** Every {@link CellStyle} in the document, flattened across all style groups. */
  readonly allCellStyles: (CellStyle[])[];
  /** Every {@link PageItem} in the document, recursing into groups. A snapshot array. */
  readonly allPageItems: (AnyPageItem[])[];
  /** Every {@link Graphic} in the document, recursing into groups. A snapshot array. */
  readonly allGraphics: (AnyGraphic[])[];
  /** Swatches defined in the document that are not applied to any object. */
  readonly unusedSwatches: (Swatch[])[];
  /** The {@link XMLItem} root associated with the document's XML structure. */
  readonly associatedXMLElement: (XMLItem)[];
  // ---- Preference / settings objects (readonly) ---------------------------

  /** XML view preference settings — see {@link XMLViewPreference}. */
  readonly xmlViewPreferences: (XMLViewPreference)[];
  /** Galley view preference settings — see {@link GalleyPreference}. */
  readonly galleyPreferences: (GalleyPreference)[];
  /** Preflight option settings — see {@link PreflightOption}. */
  readonly preflightOptions: (PreflightOption)[];
  /** The active {@link PreflightProcess} for this document, if any. */
  readonly activeProcess: (PreflightProcess)[];
  /** Data-merge field and preference settings — see {@link DataMerge}. */
  readonly dataMergeProperties: (DataMerge)[];
  /** Data-merge output options — see {@link DataMergeOption}. */
  readonly dataMergeOptions: (DataMergeOption)[];
  /** Adjust-layout preference settings — see {@link AdjustLayoutPreference}. */
  readonly adjustLayoutPreferences: (AdjustLayoutPreference)[];
  /** EPUB fixed-layout export preference settings. */
  readonly epubFixedLayoutExportPreferences: (EPubFixedLayoutExportPreference)[];
  /** HTML fixed-layout export preference settings. */
  readonly htmlFXLExportPreferences: (HTMLFXLExportPreference)[];
  /** Publish Online export preference settings. */
  readonly publishExportPreferences: (PublishExportPreference)[];
  /** HTML5 export preference settings. */
  readonly html5ExportPreferences: (Html5ExportPreference)[];
  /** Reflowable EPUB export preference settings. */
  readonly epubExportPreferences: (EPubExportPreference)[];
  /** HTML export preference settings. */
  readonly htmlExportPreferences: (HTMLExportPreference)[];
  /** General XML preference settings. */
  readonly xmlPreferences: (XMLPreference)[];
  /** XML import preference settings. */
  readonly xmlImportPreferences: (XMLImportPreference)[];
  /** XML export preference settings. */
  readonly xmlExportPreferences: (XMLExportPreference)[];
  /** Export-for-web preference settings. */
  readonly exportForWebPreferences: (ExportForWebPreference)[];
  /** Transparency preference settings. */
  readonly transparencyPreferences: (TransparencyPreference)[];
  /** Text-frame preference settings. */
  readonly textFramePreferences: (TextFramePreference)[];
  /** Text preference settings. */
  readonly textPreferences: (TextPreference)[];
  /** Document-scope text default formatting — see {@link TextDefault}. */
  readonly textDefaults: (TextDefault)[];
  /** Endnote option settings. */
  readonly endnoteOptions: (EndnoteOption)[];
  /** User-dictionary preference settings. */
  readonly dictionaryPreferences: (DictionaryPreference)[];
  /** Story preference settings. */
  readonly storyPreferences: (StoryPreference)[];
  /** Default settings for newly created anchored objects. */
  readonly anchoredObjectDefaults: (AnchoredObjectDefault)[];
  /** Anchored-object settings for the document. */
  readonly anchoredObjectSettings: (AnchoredObjectSetting)[];
  /** Baseline frame-grid option settings. */
  readonly baselineFrameGridOptions: (BaselineFrameGridOption)[];
  /** Footnote option settings. */
  readonly footnoteOptions: (FootnoteOption)[];
  /** Default text-wrap formatting applied when wrapping text around objects. */
  readonly textWrapPreferences: (TextWrapPreference)[];
  /** Document preference settings (page size, facing pages, bleed/slug…). */
  readonly documentPreferences: (DocumentPreference)[];
  /** Document grid preference settings. */
  readonly gridPreferences: (GridPreference)[];
  /** Guide preference settings. */
  readonly guidePreferences: (GuidePreference)[];
  /** Margin and column preference settings. */
  readonly marginPreferences: (MarginPreference)[];
  /** Pasteboard preference settings. */
  readonly pasteboardPreferences: (PasteboardPreference)[];
  /** View preference settings (measurement units, ruler origin…). */
  readonly viewPreferences: (ViewPreference)[];
  /** Linked-story options — see {@link LinkedStoryOption}. */
  readonly linkedStoryOptions: (LinkedStoryOption)[];
  /** Linked-page-item options — see {@link LinkedPageItemOption}. */
  readonly linkedPageItemOptions: (LinkedPageItemOption)[];
  /** Print preference settings. */
  readonly printPreferences: (PrintPreference)[];
  /** Print-booklet options. */
  readonly printBookletOptions: (PrintBookletOption)[];
  /** Print-booklet print preference settings. */
  readonly printBookletPrintPreferences: (PrintBookletPrintPreference)[];
  /** Tagged-PDF export preference settings. */
  readonly taggedPDFPreferences: (TaggedPDFPreference)[];
  /** The document's place gun (loaded, not-yet-placed content) — see {@link PlaceGun}. */
  readonly placeGuns: (PlaceGun)[];
  /** File metadata (XMP) preference settings. */
  readonly metadataPreferences: (MetadataPreference)[];
  /** Index formatting/generation options. */
  readonly indexGenerationOptions: (IndexOptions)[];
  /** Default page-item formatting for the document. */
  readonly pageItemDefaults: (PageItemDefault)[];
  /** Frame-fitting options applied to placed or pasted content. */
  readonly frameFittingOptions: (FrameFittingOption)[];
  /** Button (interactive form) preference settings. */
  readonly buttonPreferences: (ButtonPreference)[];
  /** Watermark preference settings. */
  readonly watermarkPreferences: (WatermarkPreference)[];
  /** Conditional-text preference settings. */
  readonly conditionalTextPreferences: (ConditionalTextPreference)[];
  /** Default layout-grid properties (CJK). */
  readonly layoutGridData: (LayoutGridDataInformation)[];
  /** Default frame-grid properties (CJK). */
  readonly storyGridData: (StoryGridDataInformation)[];
  /** CJK grid preference settings. */
  readonly cjkGridPreferences: (CjkGridPreference)[];
  /** Mojikumi UI preference settings. */
  readonly mojikumiUIPreferences: (MojikumiUiPreference)[];
  /** Chapter-numbering preference settings. */
  readonly chapterNumberPreferences: (ChapterNumberPreference)[];
  /** Version Cue version state of the file. */
  readonly versionState: (VersionState)[];
  /** Version Cue editing state of the file. */
  readonly editingState: (EditingState)[];
  // ---- Child collections ---------------------------------------------------

  /** A collection of scoped {@link Preferences} objects. */
  readonly preferences: Preferences;
  /** {@link PreflightProfiles} available in the document. */
  readonly preflightProfiles: PreflightProfiles;
  /** {@link DataMergeTextPlaceholders} in the document. */
  readonly dataMergeTextPlaceholders: DataMergeTextPlaceholders;
  /** {@link DataMergeImagePlaceholders} in the document. */
  readonly dataMergeImagePlaceholders: DataMergeImagePlaceholders;
  /** {@link DataMergeQrcodePlaceholders} in the document. */
  readonly dataMergeQrcodePlaceholders: DataMergeQrcodePlaceholders;
  /** {@link XMLElements} in the document's XML structure. */
  readonly xmlElements: XMLElements;
  /** {@link XMLItems} in the document. */
  readonly xmlItems: XMLItems;
  /** {@link XMLComments} in the document. */
  readonly xmlComments: XMLComments;
  /** {@link XMLInstructions} in the document. */
  readonly xmlInstructions: XMLInstructions;
  /** {@link DTDs} loaded in the document. */
  readonly dtds: DTDs;
  /** {@link XMLExportMaps} in the document. */
  readonly xmlExportMaps: XMLExportMaps;
  /** {@link XMLImportMaps} in the document. */
  readonly xmlImportMaps: XMLImportMaps;
  /** {@link XmlStories} in the document. */
  readonly xmlStories: XmlStories;
  /** {@link Stories} — every text story in the document. */
  readonly stories: Stories;
  /** {@link XMLTags} defined in the document. */
  readonly xmlTags: XMLTags;
  /** {@link ValidationErrors} from the last XML validation. */
  readonly validationErrors: ValidationErrors;
  /** {@link TOCStyles} defined in the document. */
  readonly tocStyles: TOCStyles;
  /** {@link HyphenationExceptions} lists in the document. */
  readonly hyphenationExceptions: HyphenationExceptions;
  /** {@link ParagraphStyleGroups} in the document. */
  readonly paragraphStyleGroups: ParagraphStyleGroups;
  /** {@link CharacterStyleGroups} in the document. */
  readonly characterStyleGroups: CharacterStyleGroups;
  /** {@link CharacterStyles} at the document's top level. */
  readonly characterStyles: CharacterStyles;
  /** {@link ParagraphStyles} at the document's top level. */
  readonly paragraphStyles: ParagraphStyles;
  /** {@link TextVariables} defined in the document. */
  readonly textVariables: TextVariables;
  /** {@link TableStyles} at the document's top level. */
  readonly tableStyles: TableStyles;
  /** {@link TableStyleGroups} in the document. */
  readonly tableStyleGroups: TableStyleGroups;
  /** {@link CellStyles} at the document's top level. */
  readonly cellStyles: CellStyles;
  /** {@link CellStyleGroups} in the document. */
  readonly cellStyleGroups: CellStyleGroups;
  /** {@link StrokeStyles} defined in the document. */
  readonly strokeStyles: StrokeStyles;
  /** {@link DashedStrokeStyles} in the document. */
  readonly dashedStrokeStyles: DashedStrokeStyles;
  /** {@link DottedStrokeStyles} in the document. */
  readonly dottedStrokeStyles: DottedStrokeStyles;
  /** {@link StripedStrokeStyles} in the document. */
  readonly stripedStrokeStyles: StripedStrokeStyles;
  /** {@link Pages} in the document. */
  readonly pages: Pages<Spread>;
  /** {@link Spreads} in the document. */
  readonly spreads: Spreads;
  /** {@link MasterSpreads} in the document. */
  readonly masterSpreads: MasterSpreads;
  /** {@link Sections} in the document. */
  readonly sections: Sections;
  /** {@link Layers} in the document. */
  readonly layers: Layers;
  /** {@link Guides} across the document. */
  readonly guides: Guides;
  /** {@link Links} — every placed file link in the document. */
  readonly links: Links;
  /** {@link Languages} available in the document. */
  readonly languages: Languages;
  /** {@link Fonts} used or available in the document. */
  readonly fonts: Fonts;
  /** {@link Inks} in the document. */
  readonly inks: Inks;
  /** {@link TrapPresets} in the document. */
  readonly trapPresets: TrapPresets;
  /** {@link PDFComments} imported into the document. */
  readonly pdfComments: PDFComments;
  /** {@link Indexes} in the document. */
  readonly indexes: Indexes;
  /** {@link IndexingSortOptions} for the document. */
  readonly indexingSortOptions: IndexingSortOptions;
  /** {@link Hyperlinks} in the document. */
  readonly hyperlinks: Hyperlinks;
  /** {@link Bookmarks} in the document. */
  readonly bookmarks: Bookmarks;
  /** {@link HyperlinkPageItemSources} in the document. */
  readonly hyperlinkPageItemSources: HyperlinkPageItemSources;
  /** {@link HyperlinkTextSources} in the document. */
  readonly hyperlinkTextSources: HyperlinkTextSources;
  /** {@link HyperlinkTextDestinations} in the document. */
  readonly hyperlinkTextDestinations: HyperlinkTextDestinations;
  /** {@link HyperlinkPageDestinations} in the document. */
  readonly hyperlinkPageDestinations: HyperlinkPageDestinations;
  /** {@link CrossReferenceFormats} in the document. */
  readonly crossReferenceFormats: CrossReferenceFormats;
  /** {@link CrossReferenceSources} in the document. */
  readonly crossReferenceSources: CrossReferenceSources;
  /** {@link ParagraphDestinations} in the document. */
  readonly paragraphDestinations: ParagraphDestinations;
  /** {@link HyperlinkExternalPageDestinations} in the document. */
  readonly hyperlinkExternalPageDestinations: HyperlinkExternalPageDestinations;
  /** {@link HyperlinkURLDestinations} in the document. */
  readonly hyperlinkURLDestinations: HyperlinkURLDestinations;
  /** {@link ParaStyleMappings} for style import/export. */
  readonly paraStyleMappings: ParaStyleMappings;
  /** {@link CharStyleMappings} for style import/export. */
  readonly charStyleMappings: CharStyleMappings;
  /** {@link TableStyleMappings} for style import/export. */
  readonly tableStyleMappings: TableStyleMappings;
  /** {@link CellStyleMappings} for style import/export. */
  readonly cellStyleMappings: CellStyleMappings;
  /** {@link ObjectStyleGroups} in the document. */
  readonly objectStyleGroups: ObjectStyleGroups;
  /** {@link ObjectStyles} at the document's top level. */
  readonly objectStyles: ObjectStyles;
  /** {@link MotionPresets} available in the document. */
  readonly motionPresets: MotionPresets;
  /** {@link Swatches} in the document. */
  readonly swatches: Swatches;
  /** {@link Colors} in the document. */
  readonly colors: Colors;
  /** {@link Tints} in the document. */
  readonly tints: Tints;
  /** {@link Gradients} in the document. */
  readonly gradients: Gradients;
  /** {@link MixedInks} in the document. */
  readonly mixedInks: MixedInks;
  /** {@link MixedInkGroups} in the document. */
  readonly mixedInkGroups: MixedInkGroups;
  /** {@link ColorGroups} in the document. */
  readonly colorGroups: ColorGroups;
  /** {@link Conditions} for conditional text. */
  readonly conditions: Conditions;
  /** {@link ConditionSets} for conditional text. */
  readonly conditionSets: ConditionSets;
  /** {@link CompositeFonts} defined in the document. */
  readonly compositeFonts: CompositeFonts;
  /** {@link NamedGrids} in the document. */
  readonly namedGrids: NamedGrids;
  /** {@link KinsokuTables} (CJK line-break tables) in the document. */
  readonly kinsokuTables: KinsokuTables;
  /** {@link MojikumiTables} (CJK spacing tables) in the document. */
  readonly mojikumiTables: MojikumiTables;
  /** {@link NumberingLists} in the document. */
  readonly numberingLists: NumberingLists;
  /** {@link Assignments} for InCopy workflows. */
  readonly assignments: Assignments;
  /** {@link Articles} in the document. */
  readonly articles: Articles;
  /** {@link Windows} showing this document. */
  readonly windows: Windows;
  /** {@link LayoutWindows} showing this document. */
  readonly layoutWindows: LayoutWindows;
  /** {@link StoryWindows} (galley/story editor) for this document. */
  readonly storyWindows: StoryWindows;
  // ---- Page-item container accessors ---------------------------------------

  /** {@link Ovals} (ellipses) at the document's top level. */
  readonly ovals: Ovals;
  /** {@link SplineItems} at the document's top level. */
  readonly splineItems: SplineItems;
  /** All {@link PageItems} at the document's top level, regardless of type. */
  readonly pageItems: PageItems;
  /** {@link Rectangles} at the document's top level. */
  readonly rectangles: Rectangles;
  /** {@link GraphicLines} at the document's top level. */
  readonly graphicLines: GraphicLines;
  /** {@link TextFrames} at the document's top level. */
  readonly textFrames: TextFrames;
  /** {@link Polygons} at the document's top level. */
  readonly polygons: Polygons;
  /** {@link EndnoteTextFrames} at the document's top level. */
  readonly endnoteTextFrames: EndnoteTextFrames;
  /** {@link FlexObjects} at the document's top level. */
  readonly flexObjects: FlexObjects;
  /** {@link Groups} at the document's top level. */
  readonly groups: Groups;
  /** {@link EPSTexts} at the document's top level. */
  readonly epstexts: EPSTexts;
  /** {@link FormFields} at the document's top level. */
  readonly formFields: FormFields;
  /** {@link Buttons} at the document's top level. */
  readonly buttons: Buttons;
  /** {@link MultiStateObjects} at the document's top level. */
  readonly multiStateObjects: MultiStateObjects;
  /** {@link CheckBoxes} at the document's top level. */
  readonly checkBoxes: CheckBoxes;
  /** {@link ComboBoxes} at the document's top level. */
  readonly comboBoxes: ComboBoxes;
  /** {@link ListBoxes} at the document's top level. */
  readonly listBoxes: ListBoxes;
  /** {@link RadioButtons} at the document's top level. */
  readonly radioButtons: RadioButtons;
  /** {@link TextBoxes} at the document's top level. */
  readonly textBoxes: TextBoxes;
  /** {@link SignatureFields} at the document's top level. */
  readonly signatureFields: SignatureFields;
  /** {@link MathObjects} at the document's top level. */
  readonly mathObjects: MathObjects;
  // ---- Methods -------------------------------------------------------------

  /**
   * Saves the document. If already saved, saves a copy at `to`, closes the
   * original, and opens the new copy.
   * @param to Destination path; omit to save in place.
   * @param stationery If `true`, saves as a template. Defaults to `false`.
   * @param versionComments Version Cue comment for DocumentPlural save.
   * @param forceSave If `true`, forces a new version even with no changes. Defaults to `false`.
   */
  save(to?: FilePath, stationery?: boolean, versionComments?: string, forceSave?: boolean): (Document)[];
  /**
   * Saves a copy of the document to `to`, leaving the original open and the copy
   * unopened.
   * @param to Destination path for the copy.
   * @param stationery If `true`, saves the copy as a template. Defaults to `false`.
   */
  saveACopy(to?: FilePath, stationery?: boolean): (void)[];
  /** Saves the document as an Adobe cloud document at `cloudPath`. */
  saveAsCloud(cloudPath: string): (Document)[];
  /** Saves a copy of the document as an Adobe cloud document at `cloudPath`. */
  saveACopyCloud(cloudPath: string): (Document)[];
  /**
   * Closes the document.
   * @param saving Whether to save changes before closing; when
   * {@link SaveOptions.ASK} InDesign prompts the user. Defaults to `SaveOptions.ASK`.
   * @param savingIn Destination path used when `saving` is {@link SaveOptions.YES}
   * and the document has never been saved. Required for an unsaved document.
   * @param versionComments Version Cue comment for the implied save.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  close(saving?: SaveOptions, savingIn?: FilePath, versionComments?: string, forceSave?: boolean): (void)[];
  /** Reverts the document to its state at the last save. Returns `true` on success. */
  revert(): (boolean)[];
  /**
   * Exports the document (or a selection) to a file.
   * @param format Export format — an {@link ExportFormat} value or a
   * format/extension string as shown in the Export dialog.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the format's export-options dialog. Defaults to `false`.
   * @param using Export preset to use (e.g. a {@link PDFExportPreset}).
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): (void)[];
  /**
   * Exports the document to a file on a background thread, returning the
   * {@link BackgroundTask} that tracks progress.
   * @param format Export format — see {@link exportFile}.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using Export preset to use.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): (BackgroundTask)[];
  /**
   * Places one or more files, following the Place menu behavior — may load the
   * place gun or replace the current selection depending on preferences.
   *
   * Placing an image returns the **graphic** (`Image`, `PDF`, `EPS`…),
   * not the frame InDesign creates around it. Sizing and moving belong to the frame,
   * which is the graphic's `parent` — narrow it before use, since a graphic can also
   * sit in a cell or a snippet:
   *
   * ```ts
   * const img = doc.place(file)[0];
   * if (img && img.parent.constructorName === 'Rectangle') {
   *   img.parent.fit(FitOptions.PROPORTIONALLY);
   * }
   * ```
   * @param fileName One file path, or an array of paths.
   * @param showingOptions If `true`, shows the import-options dialog. Defaults to `false`.
   * @param withProperties Initial properties for the placed object(s).
   */
  place(fileName: FilePath | FilePath[], showingOptions?: boolean, withProperties?: object): (void)[];
  /**
   * Packages the document for output — collecting fonts, links, and a report.
   * @param to Destination folder for the package.
   * @param copyingFonts Copy used fonts into the package.
   * @param copyingLinkedGraphics Copy linked graphics into the package.
   * @param copyingProfiles Copy color profiles into the package.
   * @param updatingGraphics Update graphics links to the packaged copies.
   * @param includingHiddenLayers Include fonts/links from hidden layers.
   * @param ignorePreflightErrors If `false`, cancels packaging when preflight errors exist.
   * @param creatingReport Generate a package report.
   * @param includeIdml Also generate IDML in the package.
   * @param includePdf Also generate PDF in the package.
   * @param pdfStyle PDF preset name to use when `includePdf` is `true`; falls back to the last-used preset if invalid.
   * @param useDocumentHyphenationExceptionsOnly Flag the document to avoid reflow on machines with different dictionaries.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  packageForPrint(to: FolderPath, copyingFonts: boolean, copyingLinkedGraphics: boolean, copyingProfiles: boolean, updatingGraphics: boolean, includingHiddenLayers: boolean, ignorePreflightErrors: boolean, creatingReport: boolean, includeIdml?: boolean, includePdf?: boolean, pdfStyle?: string, useDocumentHyphenationExceptionsOnly?: boolean, versionComments?: string, forceSave?: boolean): (boolean)[];
  /**
   * Prints the document.
   * @param printDialog If `true`, shows the Print dialog. Defaults to `false`.
   * @param using A {@link PrinterPreset} or built-in {@link PrinterPresetTypes} to print with.
   */
  print(printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): (void)[];
  /**
   * Prints the document as a booklet, using the document's booklet and print settings.
   * @param printBookletDialog If `true`, shows the Print Booklet dialog. Defaults to `false`.
   * @param using A {@link PrinterPreset} or built-in {@link PrinterPresetTypes} to print with.
   */
  printBooklet(printBookletDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): (void)[];
  /**
   * Creates a table of contents and places its story.
   * @param using The {@link TOCStyle} defining content, title, and format.
   * @param replacing If `true`, replaces the existing TOC. Defaults to `false`.
   * @param fromBook A {@link Book} whose documents to include.
   * @param placePoint Point to place the TOC story at, `[x, y]`.
   * @param includeOverset If `true`, includes overset text entries. Defaults to `false`.
   * @param destinationLayer The layer to place the TOC on.
   */
  createTOC(using: TOCStyle, replacing?: boolean, fromBook?: Book, placePoint?: MeasurementValue[], includeOverset?: boolean, destinationLayer?: Layer): (Story[])[];
  /**
   * Imports the specified XML file into the document.
   * @param from Path to the XML file.
   */
  importXML(from: FilePath): (void)[];
  /**
   * Imports a DTD for XML validation.
   * @param from Path to the DTD file.
   */
  importDtd(from: FilePath): (void)[];
  /** Deletes XML markup tags not used anywhere in the document. */
  deleteUnusedTags(): (void)[];
  /**
   * Loads XML markup tags from a file.
   * @param from Path to the tag file.
   */
  loadXMLTags(from: FilePath): (void)[];
  /**
   * Saves the document's XML markup tags to a file.
   * @param to Destination path.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  saveXMLTags(to: FilePath, versionComments?: string, forceSave?: boolean): (void)[];
  /** Auto-tags document content based on the style-to-tag mappings. */
  mapStylesToXMLTags(): (void)[];
  /** Auto-styles document content based on the tag-to-style mappings. */
  mapXMLTagsToStyles(): (void)[];
  /**
   * Imports styles from a file.
   * @param format Which style types to import.
   * @param from File containing the styles.
   * @param globalStrategy How to resolve name clashes with existing styles.
   */
  importStyles(format: ImportFormat, from: FilePath, globalStrategy?: GlobalClashResolutionStrategy): (void)[];
  /**
   * Loads master spreads from another InDesign file.
   * @param from The InDesign file to load masters from.
   * @param globalStrategyForMasterPage Clash-resolution strategy for the loaded masters.
   */
  loadMasters(from: FilePath, globalStrategyForMasterPage?: GlobalClashResolutionStrategyForMasterPage): (void)[];
  /**
   * Loads swatches from a swatch file or InDesign document.
   * @param from The source file.
   */
  loadSwatches(from: FilePath): (void)[];
  /**
   * Saves selected swatches to a swatchbook file.
   * @param to Destination file.
   * @param swatchList Swatches to save.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  saveSwatches(to: FilePath, swatchList: Swatch | Swatch[], versionComments?: string, forceSave?: boolean): (void)[];
  /** Imports a spot color from an Adobe swatchbook by name. */
  importAdobeSwatchbookSpotColor(name: string): (Color)[];
  /** Imports a process color from an Adobe swatchbook by name. */
  importAdobeSwatchbookProcessColor(name: string): (Color)[];
  /**
   * Exports stroke-style presets to a file.
   * @param to Destination file.
   * @param strokeStyleList Stroke styles to save.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  exportStrokeStyles(to: FilePath, strokeStyleList: StrokeStyle | StrokeStyle[], versionComments?: string, forceSave?: boolean): (void)[];
  /**
   * Loads conditions (and optionally condition sets) from a file.
   * @param from Path to the conditions file.
   * @param loadConditionSets If `true`, also loads condition sets. Defaults to `false`.
   */
  loadConditions(from: FilePath, loadConditionSets?: boolean): (void)[];
  /**
   * Imports cross-reference formats from a file.
   * @param from The file whose formats to import.
   */
  importFormats(from: FilePath): (void)[];
  /** Updates the text-source content of every cross reference in the document. */
  updateCrossReferences(): (void)[];
  /** Recomposes all text in the document. */
  recompose(): (void)[];
  /**
   * Selects the given object(s) in the document.
   * @param selectableItems The object(s) to select, {@link SelectAll} to select
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): (void)[];
  /** Undoes the last action. */
  undo(): (void)[];
  /** Redoes the last undone action. */
  redo(): (void)[];
  /**
   * Aligns page items.
   * @param alignDistributeItems Items to align.
   * @param alignOption Alignment to apply.
   * @param alignDistributeBounds Bounds to align within.
   * @param reference Key object to align relative to. Required when
   * `alignDistributeBounds` is {@link AlignDistributeBounds.KEY_OBJECT}.
   */
  align(alignDistributeItems: PageItem | PageItem[], alignOption: AlignOptions, alignDistributeBounds?: AlignDistributeBounds, reference?: PageItem): (void)[];
  /**
   * Distributes page items.
   * @param alignDistributeItems Items to distribute.
   * @param distributeOption Distribution to apply.
   * @param alignDistributeBounds Bounds to distribute within.
   * @param useDistributeMeasurement If `true`, distributes a fixed space between items and ignores `alignDistributeBounds`.
   * @param absoluteDistributeMeasurement Spacing to use; required when
   * `alignDistributeBounds` is {@link AlignDistributeBounds.KEY_OBJECT}.
   * @param reference Key object to distribute relative to.
   */
  distribute(alignDistributeItems: PageItem | PageItem[], distributeOption: DistributeOptions, alignDistributeBounds?: AlignDistributeBounds, useDistributeMeasurement?: boolean, absoluteDistributeMeasurement?: MeasurementValue, reference?: PageItem): (void)[];
  /**
   * Adjusts the layout for new page-size, bleed, and margin values.
   * @param adoptTo Object of changed properties. Valid keys: `width`, `height`,
   * `bleedInside`, `bleedTop`, `bleedOutside`, `bleedBottom`, `leftMargin`,
   * `topMargin`, `rightMargin`, `bottomMargin`. Values are points as numbers or
   * measurement strings such as `'1 in'`; only the keys to change need be given.
   * Bleed keys have no effect when `affectedPages` targets individual pages.
   * @param affectedPages Pages to affect; omit to affect the whole document.
   */
  adjustLayout(adoptTo: object, affectedPages?: Page | Page[]): (void)[];
  /**
   * Creates an alternate layout for a list of spreads.
   * @param spreadItems Spreads to base the alternate layout on.
   * @param name Name of the alternate layout (also names the new section).
   * @param width Page width of the created pages.
   * @param height Page height of the created pages.
   * @param createTextStyles Whether to create new text styles.
   * @param linkTextStories Whether to link duplicated text stories to their source.
   * @param layoutRule Layout rule applied to the created pages.
   */
  createAlternateLayout(spreadItems: Spread | Spread[], name: string, width: MeasurementValue, height: MeasurementValue, createTextStyles: boolean, linkTextStories: boolean, layoutRule: LayoutRuleOptions): (void)[];
  /** Deletes the alternate layout with the given name. */
  deleteAlternateLayout(name: string): (void)[];
  /** Resets every multi-state object in the document to its first state. */
  resetAllMultiStateObjects(): (void)[];
  /** Resets every button in the document to its Normal state. */
  resetAllButtons(): (void)[];
  /** Removes frame-fitting options, resetting them to the initial state. */
  clearFrameFittingOptions(): (void)[];
  /**
   * Creates a page item from a MathML description.
   * @param mathmlDescription The MathML source.
   * @param mathmlDestinationPage Page to create the object on.
   * @param destinationLayer Layer to create the object on.
   * @param placePoint Point to place at, `[x, y]`.
   */
  createFromMathML(mathmlDescription: string, mathmlDestinationPage: Page, destinationLayer: Layer, placePoint: MeasurementValue[]): (SVG)[];
  /**
   * Creates a missing-font placeholder object.
   * @param fontFamily Font family name.
   * @param fontStyleName Font style name.
   * @param postscriptName PostScript name.
   */
  createMissingFontObject(fontFamily: string, fontStyleName: string, postscriptName: string): (Font)[];
  /** Direction of the currently selected text. */
  getSelectedTextDirection(): (TextDirection)[];
  /**
   * Returns the style-conflict resolution strategy, or `false` if the user cancels.
   * @param charOrParaStyle Which style type to inspect.
   */
  getStyleConflictResolutionStrategy(charOrParaStyle?: StyleType): (GlobalClashResolutionStrategy | false)[];
  /**
   * Transforms a color value between color spaces.
   * @param colorValue Source color component values.
   * @param sourceColorSpace Source color space.
   * @param destinationColorSpace Destination color space.
   */
  colorTransform(colorValue: number[], sourceColorSpace: ColorSpace, destinationColorSpace: ColorSpace): (number[])[];
  /**
   * Embeds a preflight profile into the document.
   * @param using The {@link PreflightProfile} or its name to embed.
   */
  embed(using: string | PreflightProfile): (PreflightProfile)[];
  /** Exports the current page-item selection to a snippet file at `to`. */
  exportPageItemsSelectionToSnippet(to: FilePath): (void)[];
  /**
   * Exports the given page items (by id) to a snippet file.
   * @param to Destination snippet path.
   * @param pageItemIds IDs of the page items to export.
   */
  exportPageItemsToSnippet(to: FilePath, pageItemIds: number[]): (void)[];
  /**
   * Exports assets required for a Creative Cloud library.
   * @param jsondata JSON-encoded export information.
   */
  exportForCloudLibrary(jsondata: string): (boolean)[];
  /**
   * Imports PDF comments into the document.
   * @param from The PDF file to import comments from.
   * @param withProperties Initial property values.
   */
  importPdfComments(from: FilePath, withProperties?: object): (void)[];
  /**
   * Places a cloud asset onto the document.
   * @param jsondata JSON metadata describing the cloud asset.
   */
  placeCloudAsset(jsondata: string): (void)[];
  /** Finds color matching the current find-color query. Returns the match count. */
  findColor(): (number)[];
  /** Replaces color matching the find-color query with the change-color value. Returns the change count. */
  changeColor(): (number)[];
  /** Finds text matching the current find-text query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findText(reverseOrder?: boolean): (Text[])[];
  /** Replaces text matching the find-text query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeText(reverseOrder?: boolean): (Text[])[];
  /** Finds text matching the current GREP query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findGrep(reverseOrder?: boolean): (Text[])[];
  /** Replaces text matching the GREP query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeGrep(reverseOrder?: boolean): (Text[])[];
  /** Finds glyphs matching the current find-glyph query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findGlyph(reverseOrder?: boolean): (Text[])[];
  /** Replaces glyphs matching the find-glyph query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeGlyph(reverseOrder?: boolean): (Text[])[];
  /** Finds objects matching the current find-object query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findObject(reverseOrder?: boolean): (PageItem[])[];
  /** Replaces objects matching the find-object query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeObject(reverseOrder?: boolean): (PageItem[])[];
  /** Finds text matching the current find-transliterate query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findTransliterate(reverseOrder?: boolean): (Text[])[];
  /** Replaces text matching the find-transliterate query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeTransliterate(reverseOrder?: boolean): (Text[])[];
  /**
   * Synchronizes the document with its Version Cue project.
   * @param syncConflictResolution Conflict-resolution method.
   * @param versionComments Comment describing the version.
   */
  synchronizeWithVersionCue(syncConflictResolution?: SyncConflictResolution, versionComments?: string): (VersionCueSyncStatus)[];
  /**
   * Reverts to the Version Cue project copy.
   * @param forceRevert If `true`, forcibly reverts. Defaults to `false`.
   */
  revertToProject(forceRevert?: boolean): (void)[];
  /**
   * Checks the document in to Version Cue.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  checkIn(versionComments?: string, forceSave?: boolean): (void)[];
  /** Switches the document's composer to Optyca (Adobe World-Ready). */
  changeComposer(): (void)[];
  /**
   * Loads the place gun with a linked copy of `parentStory`, the scripted form
   * of File ▸ Place and Link.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   * @deprecated Use {@link ContentPlacerObject} (`app.contentPlacer.load`) instead.
   */
  placeAndLink(parentStory: Story, showingOptions?: boolean): (void)[];
  /**
   * Describes the document's alternate layouts.
   * @param resolveMaster Resolve the layout policy when it is set to *use master*. Defaults to `true`.
   */
  getAlternateLayoutsForFolio(resolveMaster?: boolean): (unknown[])[];
  /** Creates a QR code from plain text and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code linking to a URL and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code that composes an SMS and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code that composes an email and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /**
   * Creates a business-card (vCard) QR code and loads it into the place gun.
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
   * Updates the table of contents in this document, using the TOC style currently applied.
   * @param using The TOC style to update with, instead of the one currently applied.
   */
  updateTOC(using?: TOCStyle): (void)[];
  /** Internal use only — reserved for the InDesign engineering team. */
  handleMathMLMessage(resyncData: string): (void)[];
  /** Internal use only — reserved for the InDesign engineering team. */
  internalMethod(internalParameter1: string, internalParameter2: string): (string)[];
}
