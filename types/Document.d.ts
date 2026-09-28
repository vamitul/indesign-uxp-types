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
export interface Document<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application, M>,
    IndexedDOMObject<Application, M>,
    NamableDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Document';

  /** Resolves the proxy into the individual {@link Document} objects it stands for. */
  getElements(): Document<'single'>[];

  /** The unique numeric ID of the document within the session. Stable for the document's lifetime, unlike {@link index}. */
  readonly id: Read<M, number>;

  // ---- File identity -------------------------------------------------------

  /** The document's own file, as a {@link File} entry — reach the path with `.nativePath`. Throws if the document has never been saved; check {@link saved} first. */
  readonly fullName: Read<M, Promise<File>>;

  /** The folder containing the document, as a {@link Folder} entry — reach the path with `.nativePath`. Not the document file itself; see {@link fullName}. */
  readonly filePath: Read<M, Promise<Folder>>;

  /** The cloud path for a cloud document; accessing it on a non-cloud document throws. */
  readonly cloudPath: Read<M, string>;

  /** Whether this is an Adobe cloud document rather than a local file. */
  readonly isCloudDocument: Read<M, boolean>;

  /** Whether the document window is visible. */
  readonly visible: Read<M, boolean>;

  /** Whether the document has unsaved changes since the last save. */
  readonly modified: Read<M, boolean>;

  /** Whether the document has been saved to disk at least once. */
  readonly saved: Read<M, boolean>;

  /** Whether the document was converted from an earlier InDesign format on open. */
  readonly converted: Read<M, boolean>;

  /** Whether the document was recovered from an auto-recovery file. */
  readonly recovered: Read<M, boolean>;

  /** Whether the document is open read-only. */
  readonly readOnly: Read<M, boolean>;

  // ---- Undo / redo introspection ------------------------------------------

  /** Name of the action currently on top of the undo stack. */
  readonly undoName: Read<M, string>;

  /** Name of the action currently on top of the redo stack. */
  readonly redoName: Read<M, string>;

  /** Names of every action in the undo stack, most recent first. */
  readonly undoHistory: Read<M, string[]>;

  /** Names of every action in the redo stack. */
  readonly redoHistory: Read<M, string[]>;

  // ---- Color management ----------------------------------------------------

  /** The document's working CMYK profile, by name. */
  get cmykProfile(): Read<M, string>;
  set cmykProfile(value: string);

  /** The document's working RGB profile, by name. */
  get rgbProfile(): Read<M, string>;
  set rgbProfile(value: string);

  /** Valid CMYK profile names available to the document. */
  readonly cmykProfileList: Read<M, string[]>;

  /** Valid RGB profile names available to the document. */
  readonly rgbProfileList: Read<M, string[]>;

  /** Rendering intent for solid vector color in native objects. */
  get solidColorIntent(): Read<M, RenderingIntent>;
  set solidColorIntent(value: RenderingIntent);

  /** Rendering intent applied to colors resulting from on-page transparency blending. */
  get afterBlendingIntent(): Read<M, RenderingIntent>;
  set afterBlendingIntent(value: RenderingIntent);

  /** Default rendering intent for placed bitmap images. */
  get defaultImageIntent(): Read<M, RenderingIntent>;
  set defaultImageIntent(value: RenderingIntent);

  /** Color-management policy for RGB content (profile reading/embedding and mismatch handling). */
  get rgbPolicy(): Read<M, ColorSettingsPolicy>;
  set rgbPolicy(value: ColorSettingsPolicy);

  /** Color-management policy for CMYK content. */
  get cmykPolicy(): Read<M, ColorSettingsPolicy>;
  set cmykPolicy(value: ColorSettingsPolicy);

  /** Whether to use LAB alternates for spot colors when available. */
  get accurateLABSpots(): Read<M, boolean>;
  set accurateLABSpots(value: boolean);

  // ---- Ruler / active layer ------------------------------------------------

  /** The ruler zero point in page coordinates, `[x, y]`. */
  get zeroPoint(): Read<M, number[]>;
  set zeroPoint(value: MeasurementValue[]);

  /** The active layer new items are added to. Assign a {@link Layer} or its name. */
  get activeLayer(): Read<M, Layer>;
  set activeLayer(value: Layer | string);

  // ---- Selection -----------------------------------------------------------

  /**
   * The document's current selection. Assign a single object, an array of
   * objects, or {@link NothingEnum.NOTHING} to clear it; the element types
   * depend on what is selectable in the current context (page items, text
   * ranges, table cells…).
   */
  get selection(): Read<M, SelectionItem[]>;
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);

  /** The key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): Read<M, PageItem | null>;
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);

  /** Page items currently selected in the document. A snapshot array. */
  readonly selectedPageItems: Read<M, AnyPageItem[]>;

  // ---- Math object defaults ------------------------------------------------

  /** Default font size, in points, for math objects. */
  get appliedMathMLFontSize(): Read<M, number>;
  set appliedMathMLFontSize(value: number);

  /** Swatch used for math-object color. Assign a {@link Swatch}, its name, or {@link NothingEnum.NOTHING}; RGB, CMYK, LAB and HSB swatches are supported. */
  get appliedMathMLSwatch(): Read<M, Swatch | NothingEnum>;
  set appliedMathMLSwatch(value: Swatch | string | NothingEnum);

  /** Math-object color as an `[R, G, B]` triple in the `0`–`255` range. */
  get appliedMathMLRgbColor(): Read<M, number[]>;
  set appliedMathMLRgbColor(value: number[]);

  /** Tint percentage of the base math color. Range `0`–`100`. */
  get tintValue(): Read<M, number>;
  set tintValue(value: number);

  /** Whether to export math objects as MathML (`true`) or SVG (`false`) during EPUB export. */
  get preferMathMLInEpubExport(): Read<M, boolean>;
  set preferMathMLInEpubExport(value: boolean);

  // ---- Snapshot style/item lists ------------------------------------------

  /** Every {@link ParagraphStyle} in the document, flattened across all style groups. */
  readonly allParagraphStyles: Read<M, ParagraphStyle[]>;

  /** Every {@link CharacterStyle} in the document, flattened across all style groups. */
  readonly allCharacterStyles: Read<M, CharacterStyle[]>;

  /** Every {@link ObjectStyle} in the document, flattened across all style groups. */
  readonly allObjectStyles: Read<M, ObjectStyle[]>;

  /** Every {@link TableStyle} in the document, flattened across all style groups. */
  readonly allTableStyles: Read<M, TableStyle[]>;

  /** Every {@link CellStyle} in the document, flattened across all style groups. */
  readonly allCellStyles: Read<M, CellStyle[]>;

  /** Every {@link PageItem} in the document, recursing into groups. A snapshot array. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /** Every {@link Graphic} in the document, recursing into groups. A snapshot array. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** Swatches defined in the document that are not applied to any object. */
  readonly unusedSwatches: Read<M, Swatch[]>;

  /** The {@link XMLItem} root associated with the document's XML structure. */
  readonly associatedXMLElement: Read<M, XMLItem>;

  // ---- Preference / settings objects (readonly) ---------------------------

  /** XML view preference settings — see {@link XMLViewPreference}. */
  readonly xmlViewPreferences: Read<M, XMLViewPreference>;

  /** Galley view preference settings — see {@link GalleyPreference}. */
  readonly galleyPreferences: Read<M, GalleyPreference>;

  /** Preflight option settings — see {@link PreflightOption}. */
  readonly preflightOptions: Read<M, PreflightOption>;

  /** The active {@link PreflightProcess} for this document, if any. */
  readonly activeProcess: Read<M, PreflightProcess>;

  /** Data-merge field and preference settings — see {@link DataMerge}. */
  readonly dataMergeProperties: Read<M, DataMerge>;

  /** Data-merge output options — see {@link DataMergeOption}. */
  readonly dataMergeOptions: Read<M, DataMergeOption>;

  /** Adjust-layout preference settings — see {@link AdjustLayoutPreference}. */
  readonly adjustLayoutPreferences: Read<M, AdjustLayoutPreference>;

  /** EPUB fixed-layout export preference settings. */
  readonly epubFixedLayoutExportPreferences: Read<M, EPubFixedLayoutExportPreference>;

  /** HTML fixed-layout export preference settings. */
  readonly htmlFXLExportPreferences: Read<M, HTMLFXLExportPreference>;

  /** Publish Online export preference settings. */
  readonly publishExportPreferences: Read<M, PublishExportPreference>;

  /** HTML5 export preference settings. */
  readonly html5ExportPreferences: Read<M, Html5ExportPreference>;

  /** Reflowable EPUB export preference settings. */
  readonly epubExportPreferences: Read<M, EPubExportPreference>;

  /** HTML export preference settings. */
  readonly htmlExportPreferences: Read<M, HTMLExportPreference>;

  /** General XML preference settings. */
  readonly xmlPreferences: Read<M, XMLPreference>;

  /** XML import preference settings. */
  readonly xmlImportPreferences: Read<M, XMLImportPreference>;

  /** XML export preference settings. */
  readonly xmlExportPreferences: Read<M, XMLExportPreference>;

  /** Export-for-web preference settings. */
  readonly exportForWebPreferences: Read<M, ExportForWebPreference>;

  /** Transparency preference settings. */
  readonly transparencyPreferences: Read<M, TransparencyPreference>;

  /** Text-frame preference settings. */
  readonly textFramePreferences: Read<M, TextFramePreference>;

  /** Text preference settings. */
  readonly textPreferences: Read<M, TextPreference>;

  /** Document-scope text default formatting — see {@link TextDefault}. */
  readonly textDefaults: Read<M, TextDefault>;

  /** Endnote option settings. */
  readonly endnoteOptions: Read<M, EndnoteOption>;

  /** User-dictionary preference settings. */
  readonly dictionaryPreferences: Read<M, DictionaryPreference>;

  /** Story preference settings. */
  readonly storyPreferences: Read<M, StoryPreference>;

  /** Default settings for newly created anchored objects. */
  readonly anchoredObjectDefaults: Read<M, AnchoredObjectDefault>;

  /** Anchored-object settings for the document. */
  readonly anchoredObjectSettings: Read<M, AnchoredObjectSetting>;

  /** Baseline frame-grid option settings. */
  readonly baselineFrameGridOptions: Read<M, BaselineFrameGridOption>;

  /** Footnote option settings. */
  readonly footnoteOptions: Read<M, FootnoteOption>;

  /** Default text-wrap formatting applied when wrapping text around objects. */
  readonly textWrapPreferences: Read<M, TextWrapPreference>;

  /** Document preference settings (page size, facing pages, bleed/slug…). */
  readonly documentPreferences: Read<M, DocumentPreference>;

  /** Document grid preference settings. */
  readonly gridPreferences: Read<M, GridPreference>;

  /** Guide preference settings. */
  readonly guidePreferences: Read<M, GuidePreference>;

  /** Margin and column preference settings. */
  readonly marginPreferences: Read<M, MarginPreference>;

  /** Pasteboard preference settings. */
  readonly pasteboardPreferences: Read<M, PasteboardPreference>;

  /** View preference settings (measurement units, ruler origin…). */
  readonly viewPreferences: Read<M, ViewPreference>;

  /** Linked-story options — see {@link LinkedStoryOption}. */
  readonly linkedStoryOptions: Read<M, LinkedStoryOption>;

  /** Linked-page-item options — see {@link LinkedPageItemOption}. */
  readonly linkedPageItemOptions: Read<M, LinkedPageItemOption>;

  /** Print preference settings. */
  readonly printPreferences: Read<M, PrintPreference>;

  /** Print-booklet options. */
  readonly printBookletOptions: Read<M, PrintBookletOption>;

  /** Print-booklet print preference settings. */
  readonly printBookletPrintPreferences: Read<M, PrintBookletPrintPreference>;

  /** Tagged-PDF export preference settings. */
  readonly taggedPDFPreferences: Read<M, TaggedPDFPreference>;

  /** The document's place gun (loaded, not-yet-placed content) — see {@link PlaceGun}. */
  readonly placeGuns: Read<M, PlaceGun>;

  /** File metadata (XMP) preference settings. */
  readonly metadataPreferences: Read<M, MetadataPreference>;

  /** Index formatting/generation options. */
  readonly indexGenerationOptions: Read<M, IndexOptions>;

  /** Default page-item formatting for the document. */
  readonly pageItemDefaults: Read<M, PageItemDefault>;

  /** Frame-fitting options applied to placed or pasted content. */
  readonly frameFittingOptions: Read<M, FrameFittingOption>;

  /** Button (interactive form) preference settings. */
  readonly buttonPreferences: Read<M, ButtonPreference>;

  /** Watermark preference settings. */
  readonly watermarkPreferences: Read<M, WatermarkPreference>;

  /** Conditional-text preference settings. */
  readonly conditionalTextPreferences: Read<M, ConditionalTextPreference>;

  /** Default layout-grid properties (CJK). */
  readonly layoutGridData: Read<M, LayoutGridDataInformation>;

  /** Default frame-grid properties (CJK). */
  readonly storyGridData: Read<M, StoryGridDataInformation>;

  /** CJK grid preference settings. */
  readonly cjkGridPreferences: Read<M, CjkGridPreference>;

  /** Mojikumi UI preference settings. */
  readonly mojikumiUIPreferences: Read<M, MojikumiUiPreference>;

  /** Chapter-numbering preference settings. */
  readonly chapterNumberPreferences: Read<M, ChapterNumberPreference>;

  /** Version Cue version state of the file. */
  readonly versionState: Read<M, VersionState>;

  /** Version Cue editing state of the file. */
  readonly editingState: Read<M, EditingState>;

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
   * @param versionComments Version Cue comment for this save.
   * @param forceSave If `true`, forces a new version even with no changes. Defaults to `false`.
   */
  save(to?: FilePath, stationery?: boolean, versionComments?: string, forceSave?: boolean): Read<M, Document>;

  /**
   * Saves a copy of the document to `to`, leaving the original open and the copy
   * unopened.
   * @param to Destination path for the copy.
   * @param stationery If `true`, saves the copy as a template. Defaults to `false`.
   */
  saveACopy(to?: FilePath, stationery?: boolean): Read<M, void>;

  /** Saves the document as an Adobe cloud document at `cloudPath`. */
  saveAsCloud(cloudPath: string): Read<M, Document>;

  /** Saves a copy of the document as an Adobe cloud document at `cloudPath`. */
  saveACopyCloud(cloudPath: string): Read<M, Document>;

  /**
   * Closes the document.
   * @param saving Whether to save changes before closing; when
   * {@link SaveOptions.ASK} InDesign prompts the user. Defaults to `SaveOptions.ASK`.
   * @param savingIn Destination path used when `saving` is {@link SaveOptions.YES}
   * and the document has never been saved. Required for an unsaved document.
   * @param versionComments Version Cue comment for the implied save.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  close(saving?: SaveOptions, savingIn?: FilePath, versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Reverts the document to its state at the last save. Returns `true` on success. */
  revert(): Read<M, boolean>;

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
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): Read<M, void>;

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
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): Read<M, BackgroundTask>;

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
  place(fileName: FilePath | FilePath[], showingOptions?: boolean, withProperties?: object): Read<M, void>;

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
  packageForPrint(to: FolderPath, copyingFonts: boolean, copyingLinkedGraphics: boolean, copyingProfiles: boolean, updatingGraphics: boolean, includingHiddenLayers: boolean, ignorePreflightErrors: boolean, creatingReport: boolean, includeIdml?: boolean, includePdf?: boolean, pdfStyle?: string, useDocumentHyphenationExceptionsOnly?: boolean, versionComments?: string, forceSave?: boolean): Read<M, boolean>;

  /**
   * Prints the document.
   * @param printDialog If `true`, shows the Print dialog. Defaults to `false`.
   * @param using A {@link PrinterPreset} or built-in {@link PrinterPresetTypes} to print with.
   */
  print(printDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): Read<M, void>;

  /**
   * Prints the document as a booklet, using the document's booklet and print settings.
   * @param printBookletDialog If `true`, shows the Print Booklet dialog. Defaults to `false`.
   * @param using A {@link PrinterPreset} or built-in {@link PrinterPresetTypes} to print with.
   */
  printBooklet(printBookletDialog?: boolean, using?: PrinterPresetTypes | PrinterPreset): Read<M, void>;

  /**
   * Creates a table of contents and places its story.
   * @param using The {@link TOCStyle} defining content, title, and format.
   * @param replacing If `true`, replaces the existing TOC. Defaults to `false`.
   * @param fromBook A {@link Book} whose documents to include.
   * @param placePoint Point to place the TOC story at, `[x, y]`.
   * @param includeOverset If `true`, includes overset text entries. Defaults to `false`.
   * @param destinationLayer The layer to place the TOC on.
   */
  createTOC(using: TOCStyle, replacing?: boolean, fromBook?: Book, placePoint?: MeasurementValue[], includeOverset?: boolean, destinationLayer?: Layer): Read<M, Story[]>;

  /**
   * Imports the specified XML file into the document.
   * @param from Path to the XML file.
   */
  importXML(from: FilePath): Read<M, void>;

  /**
   * Imports a DTD for XML validation.
   * @param from Path to the DTD file.
   */
  importDtd(from: FilePath): Read<M, void>;

  /** Deletes XML markup tags not used anywhere in the document. */
  deleteUnusedTags(): Read<M, void>;

  /**
   * Loads XML markup tags from a file.
   * @param from Path to the tag file.
   */
  loadXMLTags(from: FilePath): Read<M, void>;

  /**
   * Saves the document's XML markup tags to a file.
   * @param to Destination path.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  saveXMLTags(to: FilePath, versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Auto-tags document content based on the style-to-tag mappings. */
  mapStylesToXMLTags(): Read<M, void>;

  /** Auto-styles document content based on the tag-to-style mappings. */
  mapXMLTagsToStyles(): Read<M, void>;

  /**
   * Imports styles from a file.
   * @param format Which style types to import.
   * @param from File containing the styles.
   * @param globalStrategy How to resolve name clashes with existing styles.
   */
  importStyles(format: ImportFormat, from: FilePath, globalStrategy?: GlobalClashResolutionStrategy): Read<M, void>;

  /**
   * Loads master spreads from another InDesign file.
   * @param from The InDesign file to load masters from.
   * @param globalStrategyForMasterPage Clash-resolution strategy for the loaded masters.
   */
  loadMasters(from: FilePath, globalStrategyForMasterPage?: GlobalClashResolutionStrategyForMasterPage): Read<M, void>;

  /**
   * Loads swatches from a swatch file or InDesign document.
   * @param from The source file.
   */
  loadSwatches(from: FilePath): Read<M, void>;

  /**
   * Saves selected swatches to a swatchbook file.
   * @param to Destination file.
   * @param swatchList Swatches to save.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  saveSwatches(to: FilePath, swatchList: Swatch | Swatch[], versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Imports a spot color from an Adobe swatchbook by name. */
  importAdobeSwatchbookSpotColor(name: string): Read<M, Color>;

  /** Imports a process color from an Adobe swatchbook by name. */
  importAdobeSwatchbookProcessColor(name: string): Read<M, Color>;

  /**
   * Exports stroke-style presets to a file.
   * @param to Destination file.
   * @param strokeStyleList Stroke styles to save.
   * @param versionComments Version Cue comment.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  exportStrokeStyles(to: FilePath, strokeStyleList: StrokeStyle | StrokeStyle[], versionComments?: string, forceSave?: boolean): Read<M, void>;

  /**
   * Loads conditions (and optionally condition sets) from a file.
   * @param from Path to the conditions file.
   * @param loadConditionSets If `true`, also loads condition sets. Defaults to `false`.
   */
  loadConditions(from: FilePath, loadConditionSets?: boolean): Read<M, void>;

  /**
   * Imports cross-reference formats from a file.
   * @param from The file whose formats to import.
   */
  importFormats(from: FilePath): Read<M, void>;

  /** Updates the text-source content of every cross reference in the document. */
  updateCrossReferences(): Read<M, void>;

  /** Recomposes all text in the document. */
  recompose(): Read<M, void>;

  /**
   * Selects the given object(s) in the document.
   * @param selectableItems The object(s) to select, {@link SelectAll} to select
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): Read<M, void>;

  /** Undoes the last action. */
  undo(): Read<M, void>;

  /** Redoes the last undone action. */
  redo(): Read<M, void>;

  /**
   * Aligns page items.
   * @param alignDistributeItems Items to align.
   * @param alignOption Alignment to apply.
   * @param alignDistributeBounds Bounds to align within.
   * @param reference Key object to align relative to. Required when
   * `alignDistributeBounds` is {@link AlignDistributeBounds.KEY_OBJECT}.
   */
  align(alignDistributeItems: PageItem | PageItem[], alignOption: AlignOptions, alignDistributeBounds?: AlignDistributeBounds, reference?: PageItem): Read<M, void>;

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
  distribute(alignDistributeItems: PageItem | PageItem[], distributeOption: DistributeOptions, alignDistributeBounds?: AlignDistributeBounds, useDistributeMeasurement?: boolean, absoluteDistributeMeasurement?: MeasurementValue, reference?: PageItem): Read<M, void>;

  /**
   * Adjusts the layout for new page-size, bleed, and margin values.
   * @param adoptTo Object of changed properties. Valid keys: `width`, `height`,
   * `bleedInside`, `bleedTop`, `bleedOutside`, `bleedBottom`, `leftMargin`,
   * `topMargin`, `rightMargin`, `bottomMargin`. Values are points as numbers or
   * measurement strings such as `'1 in'`; only the keys to change need be given.
   * Bleed keys have no effect when `affectedPages` targets individual pages.
   * @param affectedPages Pages to affect; omit to affect the whole document.
   */
  adjustLayout(adoptTo: object, affectedPages?: Page | Page[]): Read<M, void>;

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
  createAlternateLayout(spreadItems: Spread | Spread[], name: string, width: MeasurementValue, height: MeasurementValue, createTextStyles: boolean, linkTextStories: boolean, layoutRule: LayoutRuleOptions): Read<M, void>;

  /** Deletes the alternate layout with the given name. */
  deleteAlternateLayout(name: string): Read<M, void>;

  /** Resets every multi-state object in the document to its first state. */
  resetAllMultiStateObjects(): Read<M, void>;

  /** Resets every button in the document to its Normal state. */
  resetAllButtons(): Read<M, void>;

  /** Removes frame-fitting options, resetting them to the initial state. */
  clearFrameFittingOptions(): Read<M, void>;

  /**
   * Creates a page item from a MathML description.
   * @param mathmlDescription The MathML source.
   * @param mathmlDestinationPage Page to create the object on.
   * @param destinationLayer Layer to create the object on.
   * @param placePoint Point to place at, `[x, y]`.
   */
  createFromMathML(mathmlDescription: string, mathmlDestinationPage: Page, destinationLayer: Layer, placePoint: MeasurementValue[]): Read<M, SVG>;

  /**
   * Creates a missing-font placeholder object.
   * @param fontFamily Font family name.
   * @param fontStyleName Font style name.
   * @param postscriptName PostScript name.
   */
  createMissingFontObject(fontFamily: string, fontStyleName: string, postscriptName: string): Read<M, Font>;

  /** Direction of the currently selected text. */
  getSelectedTextDirection(): Read<M, TextDirection>;

  /**
   * Returns the style-conflict resolution strategy, or `false` if the user cancels.
   * @param charOrParaStyle Which style type to inspect.
   */
  getStyleConflictResolutionStrategy(charOrParaStyle?: StyleType): Read<M, GlobalClashResolutionStrategy | false>;

  /**
   * Transforms a color value between color spaces.
   * @param colorValue Source color component values.
   * @param sourceColorSpace Source color space.
   * @param destinationColorSpace Destination color space.
   */
  colorTransform(colorValue: number[], sourceColorSpace: ColorSpace, destinationColorSpace: ColorSpace): Read<M, number[]>;

  /**
   * Embeds a preflight profile into the document.
   * @param using The {@link PreflightProfile} or its name to embed.
   */
  embed(using: string | PreflightProfile): Read<M, PreflightProfile>;

  /** Exports the current page-item selection to a snippet file at `to`. */
  exportPageItemsSelectionToSnippet(to: FilePath): Read<M, void>;

  /**
   * Exports the given page items (by id) to a snippet file.
   * @param to Destination snippet path.
   * @param pageItemIds IDs of the page items to export.
   */
  exportPageItemsToSnippet(to: FilePath, pageItemIds: number[]): Read<M, void>;

  /**
   * Exports assets required for a Creative Cloud library.
   * @param jsondata JSON-encoded export information.
   */
  exportForCloudLibrary(jsondata: string): Read<M, boolean>;

  /**
   * Imports PDF comments into the document.
   * @param from The PDF file to import comments from.
   * @param withProperties Initial property values.
   */
  importPdfComments(from: FilePath, withProperties?: object): Read<M, void>;

  /**
   * Places a cloud asset onto the document.
   * @param jsondata JSON metadata describing the cloud asset.
   */
  placeCloudAsset(jsondata: string): Read<M, void>;

  /** Finds color matching the current find-color query. Returns the match count. */
  findColor(): Read<M, number>;

  /** Replaces color matching the find-color query with the change-color value. Returns the change count. */
  changeColor(): Read<M, number>;

  /** Finds text matching the current find-text query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findText(reverseOrder?: boolean): Read<M, Text[]>;

  /** Replaces text matching the find-text query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeText(reverseOrder?: boolean): Read<M, Text[]>;

  /** Finds text matching the current GREP query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /** Replaces text matching the GREP query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /** Finds glyphs matching the current find-glyph query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /** Replaces glyphs matching the find-glyph query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /** Finds objects matching the current find-object query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findObject(reverseOrder?: boolean): Read<M, PageItem[]>;

  /** Replaces objects matching the find-object query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeObject(reverseOrder?: boolean): Read<M, PageItem[]>;

  /** Finds text matching the current find-transliterate query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  findTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /** Replaces text matching the find-transliterate query. @param reverseOrder If `true`, returns results in reverse order; defaults to `false`. */
  changeTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Synchronizes the document with its Version Cue project.
   * @param syncConflictResolution Conflict-resolution method.
   * @param versionComments Comment describing the version.
   */
  synchronizeWithVersionCue(syncConflictResolution?: SyncConflictResolution, versionComments?: string): Read<M, VersionCueSyncStatus>;

  /**
   * Reverts to the Version Cue project copy.
   * @param forceRevert If `true`, forcibly reverts. Defaults to `false`.
   */
  revertToProject(forceRevert?: boolean): Read<M, void>;

  /**
   * Checks the document in to Version Cue.
   * @param versionComments Comment for this version.
   * @param forceSave If `true`, forces a new version. Defaults to `false`.
   */
  checkIn(versionComments?: string, forceSave?: boolean): Read<M, void>;

  /** Switches the document's composer to Optyca (Adobe World-Ready). */
  changeComposer(): Read<M, void>;

  /**
   * Loads the place gun with a linked copy of `parentStory`, the scripted form
   * of File ▸ Place and Link.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   * @deprecated Use {@link ContentPlacerObject} (`app.contentPlacer.load`) instead.
   */
  placeAndLink(parentStory: Story, showingOptions?: boolean): Read<M, void>;

  /**
   * Describes the document's alternate layouts.
   * @param resolveMaster Resolve the layout policy when it is set to *use master*. Defaults to `true`.
   */
  getAlternateLayoutsForFolio(resolveMaster?: boolean): Read<M, unknown[]>;

  /** Creates a QR code from plain text and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code linking to a URL and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code that composes an SMS and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code that composes an email and loads it into the place gun. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

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
  updateTOC(using?: TOCStyle): Read<M, void>;

  /** Internal use only — reserved for the InDesign engineering team. */
  handleMathMLMessage(resyncData: string): Read<M, void>;

  /** Internal use only — reserved for the InDesign engineering team. */
  internalMethod(internalParameter1: string, internalParameter2: string): Read<M, string>;
}
