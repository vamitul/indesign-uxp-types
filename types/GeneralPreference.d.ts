/**
 * GeneralPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FolderPath, File, Folder } from './_base/Types';
import type { Application } from './Application';
import type { PageNumberingOptions } from './Enums/PageNumberingOptions';
import type { PreviewPagesOptions } from './Enums/PreviewPagesOptions';
import type { PreviewSizeOptions } from './Enums/PreviewSizeOptions';
import type { ToolTipOptions } from './Enums/ToolTipOptions';
import type { ToolsPanelOptions } from './Enums/ToolsPanelOptions';

/**
 * Application-wide general UI and behavior preferences.
 */
export interface GeneralPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GeneralPreference';

  /** Resolves the proxy into the individual {@link GeneralPreference} objects it stands for. */
  getElements(): GeneralPreference<'single'>[];

  /** The value of the system reported main monitor resolution */
  readonly mainMonitorPpi: Read<M, number>;

  /** If true, application bar is shown. */
  readonly applicationBarShown: Read<M, boolean>;

  /** Whether the contextual control bar is shown above the document window. */
  get contextBarVisible(): Read<M, boolean>;
  set contextBarVisible(value: boolean);

  /** If true, application lives in a frame. */
  readonly useApplicationFrame: Read<M, boolean>;

  /** Whether and how quickly tool tips appear: normal, off, or fast — see {@link ToolTipOptions}. */
  get toolTips(): Read<M, ToolTipOptions>;
  set toolTips(value: ToolTipOptions);

  /** Controls whether or not to greek vector graphics when dragging at high quality. */
  get greekVectorGraphicsOnDrag(): Read<M, boolean>;
  set greekVectorGraphicsOnDrag(value: boolean);

  /** Show the conveyor on content collector or content placer tool activation */
  get showConveyor(): Read<M, boolean>;
  set showConveyor(value: boolean);

  /** Enable the creation of links on content place */
  get createLinksOnContentPlace(): Read<M, boolean>;
  set createLinksOnContentPlace(value: boolean);

  /** Enable the mapping of styles on content place */
  get mapStylesOnContentPlace(): Read<M, boolean>;
  set mapStylesOnContentPlace(value: boolean);

  /** Enable the use of a custom monitor resolution in pixels per inch as opposed to querying the system settings */
  get useCustomMonitorResolution(): Read<M, boolean>;
  set useCustomMonitorResolution(value: boolean);

  /** When using a custom monitor resolution, what is the value of that resolution in pixels per inch */
  get customMonitorPpi(): Read<M, number>;
  set customMonitorPpi(value: number);

  /**
   * Specify the Application User Interface brightness preference (from 0.0 to 1.0).
   *
   * To use color theme brightness preset values, specify 0.0 for Dark, 0.50 for Medium Dark,
   * 0.51 for Medium Bright, and 1.0 for Bright. Any value between 0.0 and 1.0 will
   * automatically be mapped to closest preset.
   */
  get uiBrightnessPreference(): Read<M, number>;
  set uiBrightnessPreference(value: number);

  /** Specify the Pasteboard color preference (0 or 1). Specify 0 to set preference to Default White, and 1 to set preference to Match with Theme Color. */
  get pasteboardColorPreference(): Read<M, number>;
  set pasteboardColorPreference(value: number);

  /** If true, show What's New dialog on startup. */
  get showWhatsNewOnStartup(): Read<M, boolean>;
  set showWhatsNewOnStartup(value: boolean);

  /** If true, on creating new swatch through the new swatch dialog, it will be exported to CC Libraries as well */
  get autoAddSwatchToCCLibraries(): Read<M, boolean>;
  set autoAddSwatchToCCLibraries(value: boolean);

  /** If true, on creating new char style through the new char style dialog, it will be exported to CC Libraries as well */
  get autoAddCharStyleToCCLibraries(): Read<M, boolean>;
  set autoAddCharStyleToCCLibraries(value: boolean);

  /** If true, on creating new para style through the new para style dialog, it will be exported to CC Libraries as well */
  get autoAddParaStyleToCCLibraries(): Read<M, boolean>;
  set autoAddParaStyleToCCLibraries(value: boolean);

  /** If true, show start workspace when no documents are open */
  get showStartWorkspace(): Read<M, boolean>;
  set showStartWorkspace(value: boolean);

  /** If true, show stock cart adornment on unlicensed stock images */
  get showStockPurchaseAdornment(): Read<M, boolean>;
  set showStockPurchaseAdornment(value: boolean);

  /** Controls whether or not the content grabber adornment is shown. */
  get showContentGrabber(): Read<M, boolean>;
  set showContentGrabber(value: boolean);

  /** Controls whether or not the live corners grabber adornment is shown. */
  get showLiveCorners(): Read<M, boolean>;
  set showLiveCorners(value: boolean);

  /** Controls whether or not to show the master page overlay when a page is selected using the Page Tool. */
  get showMasterPageOverlay(): Read<M, boolean>;
  set showMasterPageOverlay(value: boolean);

  /** Controls whether page items move when a page is repositioned from the UI. The option/alt key temporarily reverses this property */
  get objectsMoveWithPage(): Read<M, boolean>;
  set objectsMoveWithPage(value: boolean);

  /** Controls whether or not you can select and interact with a locked item. When this is off, only position is locked. */
  get preventSelectingLockedItems(): Read<M, boolean>;
  set preventSelectingLockedItems(value: boolean);

  /** Controls whether or not multi-touch gestures are enabled. */
  get enableMultiTouchGestures(): Read<M, boolean>;
  set enableMultiTouchGestures(value: boolean);

  /** Controls the appearance of the Tools panel. */
  get toolsPanel(): Read<M, ToolsPanelOptions>;
  set toolsPanel(value: ToolsPanelOptions);

  /** If true, panel drawers close automatically. */
  get autoCollapseIconPanels(): Read<M, boolean>;
  set autoCollapseIconPanels(value: boolean);

  /** Controls whether or not to show thumbnails of imported files in the Place icon. */
  get placeCursorUsesThumbnails(): Read<M, boolean>;
  set placeCursorUsesThumbnails(value: boolean);

  /** If true, Large Tabs are shown for panels else Smaller tabs are shown */
  get panelTabHeightPreference(): Read<M, boolean>;
  set panelTabHeightPreference(value: boolean);

  /** If true, legacy new document dialog will be shown when Ctrl/Cmd + N are pressed. */
  get showLegacyNewDocumentDialog(): Read<M, boolean>;
  set showLegacyNewDocumentDialog(value: boolean);

  /** If true, vertical reveal strips appear when palette UI is hidden. */
  get autoShowHiddenPanels(): Read<M, boolean>;
  set autoShowHiddenPanels(value: boolean);

  /** If true, documents open as tabs. */
  get openDocumentsAsTabs(): Read<M, boolean>;
  set openDocumentsAsTabs(value: boolean);

  /** If true, floating windows can be docked by user as tabs. */
  get enableFloatingWindowDocking(): Read<M, boolean>;
  set enableFloatingWindowDocking(value: boolean);

  /** Number of items to show in the Open Recent menu list. Range: 0 to 30 */
  get openRecentLength(): Read<M, number>;
  set openRecentLength(value: number);

  /** Controls whether or not to dynamically display transformation information as part of the cursor while manipulating page items. */
  get showTransformationValues(): Read<M, boolean>;
  set showTransformationValues(value: boolean);

  /** The name of the active workspace. */
  get setActiveWorkspace(): Read<M, string>;
  set setActiveWorkspace(value: string);

  /** The name of the active keyboard shortcut set. */
  get keyboardShortcutSet(): Read<M, string>;
  set keyboardShortcutSet(value: string);

  /** Controls whether or not the anchor object adornment is shown. */
  get showAnchorObjectAdornment(): Read<M, boolean>;
  set showAnchorObjectAdornment(value: boolean);

  /** Controls whether or not to highlight object under selection tool. */
  get highlightObjectUnderSelectionTool(): Read<M, boolean>;
  set highlightObjectUnderSelectionTool(value: boolean);

  /** If true, enable content-aware fit as default while placing items */
  get enableContentAwareFit(): Read<M, boolean>;
  set enableContentAwareFit(value: boolean);

  /** The pages to create preview images for. Note: Valid when include preview is true. */
  get previewPages(): Read<M, PreviewPagesOptions>;
  set previewPages(value: PreviewPagesOptions);

  /** The location in which to store temporary files. */
  get temporaryFolder(): Read<M, Promise<Folder>>;
  set temporaryFolder(value: FolderPath);

  /** Whether page numbers follow the section's numbering or count every page sequentially through the document — see {@link PageNumberingOptions}. */
  get pageNumbering(): Read<M, PageNumberingOptions>;
  set pageNumbering(value: PageNumberingOptions);

  /** The threshold at which to trigger font subsetting based on the number of glyphs the font contains. */
  get completeFontDownloadGlyphLimit(): Read<M, number>;
  set completeFontDownloadGlyphLimit(value: number);

  /** If true, includes a preview in saved documents. */
  get includePreview(): Read<M, boolean>;
  set includePreview(value: boolean);

  /** If true, alt text for images are auto generated when imported. */
  get autoGenerateAltText(): Read<M, boolean>;
  set autoGenerateAltText(value: boolean);

  /** If true, alt text for images are appended with generated by AI tag. */
  get addAITagToAltText(): Read<M, boolean>;
  set addAITagToAltText(value: boolean);

  /** If true, use incoming spot color definition in case of conflict, when placing or pasting content */
  get useIncomingSpotUponConflict(): Read<M, boolean>;
  set useIncomingSpotUponConflict(value: boolean);

  /** If true, objects after ungrouping go back to their original layers. */
  get ungroupRemembersLayers(): Read<M, boolean>;
  set ungroupRemembersLayers(value: boolean);

  /** The preview size. Note: Valid when include preview is true. */
  get previewSize(): Read<M, PreviewSizeOptions>;
  set previewSize(value: PreviewSizeOptions);
}
