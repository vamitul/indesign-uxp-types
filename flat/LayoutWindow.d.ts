/**
 * LayoutWindow.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Window } from './Window';

import type { AnchorPoint } from './Enums/AnchorPoint';
import type { ProofingType } from './Enums/ProofingType';
import type { ScreenModeOptions } from './Enums/ScreenModeOptions';
import type { ViewDisplaySettings } from './Enums/ViewDisplaySettings';
import type { ZoomOptions } from './Enums/ZoomOptions';

import type { MeasurementValue } from './_base/Types';

import type { Layer } from './Layer';
import type { MasterSpread } from './MasterSpread';
import type { Page } from './Page';
import type { Spread } from './Spread';
import type { StoryWindow } from './StoryWindow';
import type { Document } from './Document';
import type { NothingEnum } from './Enums/NothingEnum';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PageItem } from './PageItem';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { SelectAll } from './Enums/SelectAll';
import type { SelectionItem } from './_base/Unions';
import type { SelectionOptions } from './Enums/SelectionOptions';
/**
 * A layout-view {@link Window} onto a {@link Document}'s page geometry -- the
 * ordinary document window showing pages and spreads, as opposed to a
 * {@link StoryWindow}'s text-only story-editor view.
 */
export interface LayoutWindow {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<LayoutWindow, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<LayoutWindow, 'single'>);
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
  /** The name of the window. Readonly, unlike a normal named DOM object. */
  readonly name: string;
  /**
   * The current selection, shared with the document's other windows. Assign a
   * single object, an array of objects, or {@link NothingEnum.NOTHING} to clear it.
   */
  get selection(): SelectionItem[];
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);
  /** The bounds of the window in screen pixels, as `[top, left, bottom, right]`. */
  get bounds(): number[];
  set bounds(value: number[]);
  /** Key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): PageItem | null;
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);
  /**
   * Selects the specified object(s) in this window.
   * @param selectableItems The object(s) to select, {@link SelectAll} for
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to {@link SelectionOptions.REPLACE_WITH}.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void;
  /** Closes the window. */
  close(): void;
  /** Maximizes the window. */
  maximize(): void;
  /** Minimizes the window. */
  minimize(): void;
  /** Restores the window from its minimized or maximized state. */
  restore(): void;
  /** Brings the window to the front. */
  bringToFront(): void;
  /** The object's DOM class name. */
  readonly constructorName: 'LayoutWindow';
  /** Resolves the proxy into the individual {@link LayoutWindow} objects it stands for. */
  getElements(): LayoutWindow[];
  /** Whether the view simulates overprinting. */
  get overprintPreview(): boolean;
  set overprintPreview(value: boolean);
  /** Name of the color profile used to proof colors. */
  get proofingProfile(): string;
  set proofingProfile(value: string);
  /** The color-proofing method in effect. */
  get proofingType(): ProofingType;
  set proofingType(value: ProofingType);
  /**
   * Whether the dark gray many printers produce in place of solid black is
   * simulated, per the proofing profile. Only takes effect when
   * {@link proofingType} is {@link ProofingType.CUSTOM}.
   */
  get simulateInkBlack(): boolean;
  set simulateInkBlack(value: boolean);
  /**
   * Whether the dingy white of real paper is simulated, per the proofing
   * profile. Only takes effect when {@link proofingType} is
   * {@link ProofingType.CUSTOM}.
   */
  get simulatePaperWhite(): boolean;
  set simulatePaperWhite(value: boolean);
  /**
   * Whether color values are left unchanged for CMYK objects without an embedded profile and
   * for native art such as line art or type -- converting only images whose profile differs
   * from the simulated device's.
   *
   * Only takes effect when {@link proofingType} is {@link ProofingType.CUSTOM}.
   */
  get preserveColorNumbers(): boolean;
  set preserveColorNumbers(value: boolean);
  /** Display-performance override in effect for this window's view. */
  get viewDisplaySetting(): ViewDisplaySettings;
  set viewDisplaySetting(value: ViewDisplaySettings);
  /** The anchor point around which objects are transformed by default in this window. */
  get transformReferencePoint(): AnchorPoint | [MeasurementValue, MeasurementValue];
  set transformReferencePoint(value: AnchorPoint | [MeasurementValue, MeasurementValue]);
  /**
   * The active layer shown and edited in this window.
   */
  get activeLayer(): Layer;
  set activeLayer(value: Layer | string);
  /**
   * The size, as a percentage, at which the document view is displayed.
   * @param value Range `5`-`4000`.
   */
  get zoomPercentage(): number;
  set zoomPercentage(value: number);
  /** The front-most spread or master spread in this window. */
  get activeSpread(): Spread | MasterSpread;
  set activeSpread(value: Spread | MasterSpread);
  /** The front-most page in this window. */
  get activePage(): Page;
  set activePage(value: Page);
  /** The screen mode in effect for this window's layout view. */
  get screenMode(): ScreenModeOptions;
  set screenMode(value: ScreenModeOptions);
  /**
   * Magnifies or reduces the window to the specified display size.
   * @param given The target display size.
   */
  zoom(given: ZoomOptions): void;
}


/**
 * The broadcast proxy for {@link LayoutWindow} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link LayoutWindow} there.
 */
export interface LayoutWindowPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<LayoutWindowPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<LayoutWindowPlural, 'plural'>);
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
  /** The name of the window. Readonly, unlike a normal named DOM object. */
  readonly name: (string)[];
  /**
   * The current selection, shared with the document's other windows. Assign a
   * single object, an array of objects, or {@link NothingEnum.NOTHING} to clear it.
   */
  get selection(): (SelectionItem[])[];
  set selection(value: SelectionItem | SelectionItem[] | NothingEnum.NOTHING);
  /** The bounds of the window in screen pixels, as `[top, left, bottom, right]`. */
  get bounds(): (number[])[];
  set bounds(value: number[]);
  /** Key object of a multi-object selection (the alignment anchor), or {@link NothingEnum.NOTHING}. */
  get selectionKeyObject(): (PageItem | null)[];
  set selectionKeyObject(value: PageItem | NothingEnum.NOTHING);
  /**
   * Selects the specified object(s) in this window.
   * @param selectableItems The object(s) to select, {@link SelectAll} for
   * everything, or {@link NothingEnum.NOTHING} to clear the selection.
   * @param existingSelection How this selection combines with the current one. Defaults to {@link SelectionOptions.REPLACE_WITH}.
   */
  select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): (void)[];
  /** Closes the window. */
  close(): (void)[];
  /** Maximizes the window. */
  maximize(): (void)[];
  /** Minimizes the window. */
  minimize(): (void)[];
  /** Restores the window from its minimized or maximized state. */
  restore(): (void)[];
  /** Brings the window to the front. */
  bringToFront(): (void)[];
  /** The object's DOM class name. */
  readonly constructorName: 'LayoutWindow';
  /** Resolves the proxy into the individual {@link LayoutWindow} objects it stands for. */
  getElements(): LayoutWindow[];
  /** Whether the view simulates overprinting. */
  get overprintPreview(): (boolean)[];
  set overprintPreview(value: boolean);
  /** Name of the color profile used to proof colors. */
  get proofingProfile(): (string)[];
  set proofingProfile(value: string);
  /** The color-proofing method in effect. */
  get proofingType(): (ProofingType)[];
  set proofingType(value: ProofingType);
  /**
   * Whether the dark gray many printers produce in place of solid black is
   * simulated, per the proofing profile. Only takes effect when
   * {@link proofingType} is {@link ProofingType.CUSTOM}.
   */
  get simulateInkBlack(): (boolean)[];
  set simulateInkBlack(value: boolean);
  /**
   * Whether the dingy white of real paper is simulated, per the proofing
   * profile. Only takes effect when {@link proofingType} is
   * {@link ProofingType.CUSTOM}.
   */
  get simulatePaperWhite(): (boolean)[];
  set simulatePaperWhite(value: boolean);
  /**
   * Whether color values are left unchanged for CMYK objects without an embedded profile and
   * for native art such as line art or type -- converting only images whose profile differs
   * from the simulated device's.
   *
   * Only takes effect when {@link proofingType} is {@link ProofingType.CUSTOM}.
   */
  get preserveColorNumbers(): (boolean)[];
  set preserveColorNumbers(value: boolean);
  /** Display-performance override in effect for this window's view. */
  get viewDisplaySetting(): (ViewDisplaySettings)[];
  set viewDisplaySetting(value: ViewDisplaySettings);
  /** The anchor point around which objects are transformed by default in this window. */
  get transformReferencePoint(): (AnchorPoint | [MeasurementValue, MeasurementValue])[];
  set transformReferencePoint(value: AnchorPoint | [MeasurementValue, MeasurementValue]);
  /**
   * The active layer shown and edited in this window.
   */
  get activeLayer(): (Layer)[];
  set activeLayer(value: Layer | string);
  /**
   * The size, as a percentage, at which the document view is displayed.
   * @param value Range `5`-`4000`.
   */
  get zoomPercentage(): (number)[];
  set zoomPercentage(value: number);
  /** The front-most spread or master spread in this window. */
  get activeSpread(): (Spread | MasterSpread)[];
  set activeSpread(value: Spread | MasterSpread);
  /** The front-most page in this window. */
  get activePage(): (Page)[];
  set activePage(value: Page);
  /** The screen mode in effect for this window's layout view. */
  get screenMode(): (ScreenModeOptions)[];
  set screenMode(value: ScreenModeOptions);
  /**
   * Magnifies or reduces the window to the specified display size.
   * @param given The target display size.
   */
  zoom(given: ZoomOptions): (void)[];
}
