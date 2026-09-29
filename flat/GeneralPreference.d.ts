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
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * Application-wide general UI and behavior preferences.
 */
export interface GeneralPreference {
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
  get properties(): PropertiesGetter<GeneralPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GeneralPreference, 'single'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'GeneralPreference';
  /** Resolves the proxy into the individual {@link GeneralPreference} objects it stands for. */
  getElements(): GeneralPreference[];
  /** The value of the system reported main monitor resolution */
  readonly mainMonitorPpi: number;
  /** If true, application bar is shown. */
  readonly applicationBarShown: boolean;
  /** Whether the contextual control bar is shown above the document window. */
  get contextBarVisible(): boolean;
  set contextBarVisible(value: boolean);
  /** If true, application lives in a frame. */
  readonly useApplicationFrame: boolean;
  /** Whether and how quickly tool tips appear: normal, off, or fast — see {@link ToolTipOptions}. */
  get toolTips(): ToolTipOptions;
  set toolTips(value: ToolTipOptions);
  /** Controls whether or not to greek vector graphics when dragging at high quality. */
  get greekVectorGraphicsOnDrag(): boolean;
  set greekVectorGraphicsOnDrag(value: boolean);
  /** Show the conveyor on content collector or content placer tool activation */
  get showConveyor(): boolean;
  set showConveyor(value: boolean);
  /** Enable the creation of links on content place */
  get createLinksOnContentPlace(): boolean;
  set createLinksOnContentPlace(value: boolean);
  /** Enable the mapping of styles on content place */
  get mapStylesOnContentPlace(): boolean;
  set mapStylesOnContentPlace(value: boolean);
  /** Enable the use of a custom monitor resolution in pixels per inch as opposed to querying the system settings */
  get useCustomMonitorResolution(): boolean;
  set useCustomMonitorResolution(value: boolean);
  /** When using a custom monitor resolution, what is the value of that resolution in pixels per inch */
  get customMonitorPpi(): number;
  set customMonitorPpi(value: number);
  /**
   * Specify the Application User Interface brightness preference (from 0.0 to 1.0).
   *
   * To use color theme brightness preset values, specify 0.0 for Dark, 0.50 for Medium Dark,
   * 0.51 for Medium Bright, and 1.0 for Bright. Any value between 0.0 and 1.0 will
   * automatically be mapped to closest preset.
   */
  get uiBrightnessPreference(): number;
  set uiBrightnessPreference(value: number);
  /** Specify the Pasteboard color preference (0 or 1). Specify 0 to set preference to Default White, and 1 to set preference to Match with Theme Color. */
  get pasteboardColorPreference(): number;
  set pasteboardColorPreference(value: number);
  /** If true, show What's New dialog on startup. */
  get showWhatsNewOnStartup(): boolean;
  set showWhatsNewOnStartup(value: boolean);
  /** If true, on creating new swatch through the new swatch dialog, it will be exported to CC Libraries as well */
  get autoAddSwatchToCCLibraries(): boolean;
  set autoAddSwatchToCCLibraries(value: boolean);
  /** If true, on creating new char style through the new char style dialog, it will be exported to CC Libraries as well */
  get autoAddCharStyleToCCLibraries(): boolean;
  set autoAddCharStyleToCCLibraries(value: boolean);
  /** If true, on creating new para style through the new para style dialog, it will be exported to CC Libraries as well */
  get autoAddParaStyleToCCLibraries(): boolean;
  set autoAddParaStyleToCCLibraries(value: boolean);
  /** If true, show start workspace when no documents are open */
  get showStartWorkspace(): boolean;
  set showStartWorkspace(value: boolean);
  /** If true, show stock cart adornment on unlicensed stock images */
  get showStockPurchaseAdornment(): boolean;
  set showStockPurchaseAdornment(value: boolean);
  /** Controls whether or not the content grabber adornment is shown. */
  get showContentGrabber(): boolean;
  set showContentGrabber(value: boolean);
  /** Controls whether or not the live corners grabber adornment is shown. */
  get showLiveCorners(): boolean;
  set showLiveCorners(value: boolean);
  /** Controls whether or not to show the master page overlay when a page is selected using the Page Tool. */
  get showMasterPageOverlay(): boolean;
  set showMasterPageOverlay(value: boolean);
  /** Controls whether page items move when a page is repositioned from the UI. The option/alt key temporarily reverses this property */
  get objectsMoveWithPage(): boolean;
  set objectsMoveWithPage(value: boolean);
  /** Controls whether or not you can select and interact with a locked item. When this is off, only position is locked. */
  get preventSelectingLockedItems(): boolean;
  set preventSelectingLockedItems(value: boolean);
  /** Controls whether or not multi-touch gestures are enabled. */
  get enableMultiTouchGestures(): boolean;
  set enableMultiTouchGestures(value: boolean);
  /** Controls the appearance of the Tools panel. */
  get toolsPanel(): ToolsPanelOptions;
  set toolsPanel(value: ToolsPanelOptions);
  /** If true, panel drawers close automatically. */
  get autoCollapseIconPanels(): boolean;
  set autoCollapseIconPanels(value: boolean);
  /** Controls whether or not to show thumbnails of imported files in the Place icon. */
  get placeCursorUsesThumbnails(): boolean;
  set placeCursorUsesThumbnails(value: boolean);
  /** If true, Large Tabs are shown for panels else Smaller tabs are shown */
  get panelTabHeightPreference(): boolean;
  set panelTabHeightPreference(value: boolean);
  /** If true, legacy new document dialog will be shown when Ctrl/Cmd + N are pressed. */
  get showLegacyNewDocumentDialog(): boolean;
  set showLegacyNewDocumentDialog(value: boolean);
  /** If true, vertical reveal strips appear when palette UI is hidden. */
  get autoShowHiddenPanels(): boolean;
  set autoShowHiddenPanels(value: boolean);
  /** If true, documents open as tabs. */
  get openDocumentsAsTabs(): boolean;
  set openDocumentsAsTabs(value: boolean);
  /** If true, floating windows can be docked by user as tabs. */
  get enableFloatingWindowDocking(): boolean;
  set enableFloatingWindowDocking(value: boolean);
  /** Number of items to show in the Open Recent menu list. Range: 0 to 30 */
  get openRecentLength(): number;
  set openRecentLength(value: number);
  /** Controls whether or not to dynamically display transformation information as part of the cursor while manipulating page items. */
  get showTransformationValues(): boolean;
  set showTransformationValues(value: boolean);
  /** The name of the active workspace. */
  get setActiveWorkspace(): string;
  set setActiveWorkspace(value: string);
  /** The name of the active keyboard shortcut set. */
  get keyboardShortcutSet(): string;
  set keyboardShortcutSet(value: string);
  /** Controls whether or not the anchor object adornment is shown. */
  get showAnchorObjectAdornment(): boolean;
  set showAnchorObjectAdornment(value: boolean);
  /** Controls whether or not to highlight object under selection tool. */
  get highlightObjectUnderSelectionTool(): boolean;
  set highlightObjectUnderSelectionTool(value: boolean);
  /** If true, enable content-aware fit as default while placing items */
  get enableContentAwareFit(): boolean;
  set enableContentAwareFit(value: boolean);
  /** The pages to create preview images for. Note: Valid when include preview is true. */
  get previewPages(): PreviewPagesOptions;
  set previewPages(value: PreviewPagesOptions);
  /** The location in which to store temporary files. */
  get temporaryFolder(): Promise<Folder>;
  set temporaryFolder(value: FolderPath);
  /** Whether page numbers follow the section's numbering or count every page sequentially through the document — see {@link PageNumberingOptions}. */
  get pageNumbering(): PageNumberingOptions;
  set pageNumbering(value: PageNumberingOptions);
  /** The threshold at which to trigger font subsetting based on the number of glyphs the font contains. */
  get completeFontDownloadGlyphLimit(): number;
  set completeFontDownloadGlyphLimit(value: number);
  /** If true, includes a preview in saved documents. */
  get includePreview(): boolean;
  set includePreview(value: boolean);
  /** If true, alt text for images are auto generated when imported. */
  get autoGenerateAltText(): boolean;
  set autoGenerateAltText(value: boolean);
  /** If true, alt text for images are appended with generated by AI tag. */
  get addAITagToAltText(): boolean;
  set addAITagToAltText(value: boolean);
  /** If true, use incoming spot color definition in case of conflict, when placing or pasting content */
  get useIncomingSpotUponConflict(): boolean;
  set useIncomingSpotUponConflict(value: boolean);
  /** If true, objects after ungrouping go back to their original layers. */
  get ungroupRemembersLayers(): boolean;
  set ungroupRemembersLayers(value: boolean);
  /** The preview size. Note: Valid when include preview is true. */
  get previewSize(): PreviewSizeOptions;
  set previewSize(value: PreviewSizeOptions);
}


/**
 * The broadcast proxy for {@link GeneralPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link GeneralPreference} there.
 */
export interface GeneralPreferencePlural {
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
  get properties(): (PropertiesGetter<GeneralPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GeneralPreferencePlural, 'plural'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'GeneralPreference';
  /** Resolves the proxy into the individual {@link GeneralPreference} objects it stands for. */
  getElements(): GeneralPreference[];
  /** The value of the system reported main monitor resolution */
  readonly mainMonitorPpi: (number)[];
  /** If true, application bar is shown. */
  readonly applicationBarShown: (boolean)[];
  /** Whether the contextual control bar is shown above the document window. */
  get contextBarVisible(): (boolean)[];
  set contextBarVisible(value: boolean);
  /** If true, application lives in a frame. */
  readonly useApplicationFrame: (boolean)[];
  /** Whether and how quickly tool tips appear: normal, off, or fast — see {@link ToolTipOptions}. */
  get toolTips(): (ToolTipOptions)[];
  set toolTips(value: ToolTipOptions);
  /** Controls whether or not to greek vector graphics when dragging at high quality. */
  get greekVectorGraphicsOnDrag(): (boolean)[];
  set greekVectorGraphicsOnDrag(value: boolean);
  /** Show the conveyor on content collector or content placer tool activation */
  get showConveyor(): (boolean)[];
  set showConveyor(value: boolean);
  /** Enable the creation of links on content place */
  get createLinksOnContentPlace(): (boolean)[];
  set createLinksOnContentPlace(value: boolean);
  /** Enable the mapping of styles on content place */
  get mapStylesOnContentPlace(): (boolean)[];
  set mapStylesOnContentPlace(value: boolean);
  /** Enable the use of a custom monitor resolution in pixels per inch as opposed to querying the system settings */
  get useCustomMonitorResolution(): (boolean)[];
  set useCustomMonitorResolution(value: boolean);
  /** When using a custom monitor resolution, what is the value of that resolution in pixels per inch */
  get customMonitorPpi(): (number)[];
  set customMonitorPpi(value: number);
  /**
   * Specify the Application User Interface brightness preference (from 0.0 to 1.0).
   *
   * To use color theme brightness preset values, specify 0.0 for Dark, 0.50 for Medium Dark,
   * 0.51 for Medium Bright, and 1.0 for Bright. Any value between 0.0 and 1.0 will
   * automatically be mapped to closest preset.
   */
  get uiBrightnessPreference(): (number)[];
  set uiBrightnessPreference(value: number);
  /** Specify the Pasteboard color preference (0 or 1). Specify 0 to set preference to Default White, and 1 to set preference to Match with Theme Color. */
  get pasteboardColorPreference(): (number)[];
  set pasteboardColorPreference(value: number);
  /** If true, show What's New dialog on startup. */
  get showWhatsNewOnStartup(): (boolean)[];
  set showWhatsNewOnStartup(value: boolean);
  /** If true, on creating new swatch through the new swatch dialog, it will be exported to CC Libraries as well */
  get autoAddSwatchToCCLibraries(): (boolean)[];
  set autoAddSwatchToCCLibraries(value: boolean);
  /** If true, on creating new char style through the new char style dialog, it will be exported to CC Libraries as well */
  get autoAddCharStyleToCCLibraries(): (boolean)[];
  set autoAddCharStyleToCCLibraries(value: boolean);
  /** If true, on creating new para style through the new para style dialog, it will be exported to CC Libraries as well */
  get autoAddParaStyleToCCLibraries(): (boolean)[];
  set autoAddParaStyleToCCLibraries(value: boolean);
  /** If true, show start workspace when no documents are open */
  get showStartWorkspace(): (boolean)[];
  set showStartWorkspace(value: boolean);
  /** If true, show stock cart adornment on unlicensed stock images */
  get showStockPurchaseAdornment(): (boolean)[];
  set showStockPurchaseAdornment(value: boolean);
  /** Controls whether or not the content grabber adornment is shown. */
  get showContentGrabber(): (boolean)[];
  set showContentGrabber(value: boolean);
  /** Controls whether or not the live corners grabber adornment is shown. */
  get showLiveCorners(): (boolean)[];
  set showLiveCorners(value: boolean);
  /** Controls whether or not to show the master page overlay when a page is selected using the Page Tool. */
  get showMasterPageOverlay(): (boolean)[];
  set showMasterPageOverlay(value: boolean);
  /** Controls whether page items move when a page is repositioned from the UI. The option/alt key temporarily reverses this property */
  get objectsMoveWithPage(): (boolean)[];
  set objectsMoveWithPage(value: boolean);
  /** Controls whether or not you can select and interact with a locked item. When this is off, only position is locked. */
  get preventSelectingLockedItems(): (boolean)[];
  set preventSelectingLockedItems(value: boolean);
  /** Controls whether or not multi-touch gestures are enabled. */
  get enableMultiTouchGestures(): (boolean)[];
  set enableMultiTouchGestures(value: boolean);
  /** Controls the appearance of the Tools panel. */
  get toolsPanel(): (ToolsPanelOptions)[];
  set toolsPanel(value: ToolsPanelOptions);
  /** If true, panel drawers close automatically. */
  get autoCollapseIconPanels(): (boolean)[];
  set autoCollapseIconPanels(value: boolean);
  /** Controls whether or not to show thumbnails of imported files in the Place icon. */
  get placeCursorUsesThumbnails(): (boolean)[];
  set placeCursorUsesThumbnails(value: boolean);
  /** If true, Large Tabs are shown for panels else Smaller tabs are shown */
  get panelTabHeightPreference(): (boolean)[];
  set panelTabHeightPreference(value: boolean);
  /** If true, legacy new document dialog will be shown when Ctrl/Cmd + N are pressed. */
  get showLegacyNewDocumentDialog(): (boolean)[];
  set showLegacyNewDocumentDialog(value: boolean);
  /** If true, vertical reveal strips appear when palette UI is hidden. */
  get autoShowHiddenPanels(): (boolean)[];
  set autoShowHiddenPanels(value: boolean);
  /** If true, documents open as tabs. */
  get openDocumentsAsTabs(): (boolean)[];
  set openDocumentsAsTabs(value: boolean);
  /** If true, floating windows can be docked by user as tabs. */
  get enableFloatingWindowDocking(): (boolean)[];
  set enableFloatingWindowDocking(value: boolean);
  /** Number of items to show in the Open Recent menu list. Range: 0 to 30 */
  get openRecentLength(): (number)[];
  set openRecentLength(value: number);
  /** Controls whether or not to dynamically display transformation information as part of the cursor while manipulating page items. */
  get showTransformationValues(): (boolean)[];
  set showTransformationValues(value: boolean);
  /** The name of the active workspace. */
  get setActiveWorkspace(): (string)[];
  set setActiveWorkspace(value: string);
  /** The name of the active keyboard shortcut set. */
  get keyboardShortcutSet(): (string)[];
  set keyboardShortcutSet(value: string);
  /** Controls whether or not the anchor object adornment is shown. */
  get showAnchorObjectAdornment(): (boolean)[];
  set showAnchorObjectAdornment(value: boolean);
  /** Controls whether or not to highlight object under selection tool. */
  get highlightObjectUnderSelectionTool(): (boolean)[];
  set highlightObjectUnderSelectionTool(value: boolean);
  /** If true, enable content-aware fit as default while placing items */
  get enableContentAwareFit(): (boolean)[];
  set enableContentAwareFit(value: boolean);
  /** The pages to create preview images for. Note: Valid when include preview is true. */
  get previewPages(): (PreviewPagesOptions)[];
  set previewPages(value: PreviewPagesOptions);
  /** The location in which to store temporary files. */
  get temporaryFolder(): (Promise<Folder>)[];
  set temporaryFolder(value: FolderPath);
  /** Whether page numbers follow the section's numbering or count every page sequentially through the document — see {@link PageNumberingOptions}. */
  get pageNumbering(): (PageNumberingOptions)[];
  set pageNumbering(value: PageNumberingOptions);
  /** The threshold at which to trigger font subsetting based on the number of glyphs the font contains. */
  get completeFontDownloadGlyphLimit(): (number)[];
  set completeFontDownloadGlyphLimit(value: number);
  /** If true, includes a preview in saved documents. */
  get includePreview(): (boolean)[];
  set includePreview(value: boolean);
  /** If true, alt text for images are auto generated when imported. */
  get autoGenerateAltText(): (boolean)[];
  set autoGenerateAltText(value: boolean);
  /** If true, alt text for images are appended with generated by AI tag. */
  get addAITagToAltText(): (boolean)[];
  set addAITagToAltText(value: boolean);
  /** If true, use incoming spot color definition in case of conflict, when placing or pasting content */
  get useIncomingSpotUponConflict(): (boolean)[];
  set useIncomingSpotUponConflict(value: boolean);
  /** If true, objects after ungrouping go back to their original layers. */
  get ungroupRemembersLayers(): (boolean)[];
  set ungroupRemembersLayers(value: boolean);
  /** The preview size. Note: Valid when include preview is true. */
  get previewSize(): (PreviewSizeOptions)[];
  set previewSize(value: PreviewSizeOptions);
}
