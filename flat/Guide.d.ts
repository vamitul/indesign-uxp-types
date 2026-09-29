/**
 * Guide.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { GuideTypeOptions } from './Enums/GuideTypeOptions';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { UIColors } from './Enums/UIColors';

import type { CoordinateSpaces } from './Enums/CoordinateSpaces';
import type { Graphic } from './Graphic';
import type { Layer } from './Layer';
import type { MasterSpread } from './MasterSpread';
import type { Movie } from './Movie';
import type { Page } from './Page';
import type { PageItem } from './PageItem';
import type { Sound } from './Sound';
import type { Spread } from './Spread';
import type { TransformationMatrix } from './TransformationMatrix';
import type { TransformOrigin } from './_base/PageItemMixins';
import type { MeasurementValue } from './_base/Types';
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
 * A non-printing ruler guide used to align page items and establish layout grids.
 *
 * A plain named DOM object parented to a {@link Spread}, {@link Page}, or
 * {@link MasterSpread} — not a page item, so it carries no fill/stroke and only
 * a minimal transform surface ({@link move}, {@link duplicate}, {@link resolve}).
 * Like any master-page object, a guide placed on a {@link MasterSpread} can be
 * overridden on document pages.
 */
export interface Guide {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Spread | Page | MasterSpread;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Guide, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Guide, 'single'>);
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
  readonly constructorName: 'Guide';
  /** Resolves the proxy into the individual {@link Guide} objects it stands for. */
  getElements(): Guide[];
  /** The unique numeric ID of the guide within its document. Stable for the guide's lifetime, unlike {@link index}. */
  readonly id: number;
  /**
   * Whether this is an overridden master-page guide. `false` covers both
   * un-overridden master guides and guides that never came from a master.
   */
  readonly overridden: boolean;
  /** The master-page object this overridden guide derives from, if any. */
  readonly overriddenMasterPageItem: PageItem | Guide | Graphic | Movie | Sound;
  /** The {@link Page} this guide appears on, or an unresolved proxy if it is on a spread with no page context. */
  readonly parentPage: Page;
  /** Whether this master-page guide may be overridden on document pages. */
  get allowOverrides(): boolean;
  set allowOverrides(value: boolean);
  /**
   * The guide's identifying color. Assign either an `[R, G, B]` triple (each
   * `0`–`255`) or a named {@link UIColors} value.
   */
  get guideColor(): [number, number, number] | UIColors;
  set guideColor(value: [number, number, number] | UIColors);
  /** Whether the guide runs horizontally or vertically. */
  get orientation(): HorizontalOrVertical;
  set orientation(value: HorizontalOrVertical);
  /** The guide's position relative to the current ruler zero point. */
  get location(): number;
  set location(value: MeasurementValue);
  /**
   * Whether a horizontal guide stops at the page edges. When `false`, it
   * extends across the full width of the spread and into the pasteboard.
   */
  get fitToPage(): boolean;
  set fitToPage(value: boolean);
  /** View magnification percentage below which the guide is no longer displayed. Range `5`–`4000`. */
  get viewThreshold(): number;
  set viewThreshold(value: number);
  /** Whether the guide is locked against selection and editing. */
  get locked(): boolean;
  set locked(value: boolean);
  /** The {@link Layer} the guide is on. */
  get itemLayer(): Layer;
  set itemLayer(value: Layer);
  /** Whether this is a ruler guide or a Liquid Layout guide. */
  get guideType(): GuideTypeOptions;
  set guideType(value: GuideTypeOptions);
  /** The Liquid Layout zone the guide belongs to. */
  get guideZone(): number;
  set guideZone(value: MeasurementValue);
  /**
   * Overrides this master-page guide onto a document page as an editable copy.
   * @param destinationPage The document page to place the override on.
   */
  override(destinationPage: Page): Guide;
  /** Removes a previous master-item override, reverting to the master's version. */
  removeOverride(): void;
  /** Detaches an overridden master guide from its master, keeping it as an independent object. */
  detach(): void;
  /** Deletes the guide. */
  remove(): void;
  /**
   * Moves the guide to an absolute location or by a relative offset. Supply
   * exactly one of `to` / `by`; if both are given, `by` is ignored.
   * @param to Absolute position `[x, y]`.
   * @param by Relative offset `[x, y]` in measurement units.
   */
  move(to?: MeasurementValue[], by?: MeasurementValue[]): void;
  /** Duplicates the guide. */
  duplicate(): Guide;
  /** Returns the guide's transform, decomposed per coordinate space. */
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): TransformationMatrix[];
  /**
   * Resolves a location to concrete coordinates in the given space.
   * @param location The point or anchor to resolve — see {@link TransformOrigin}.
   * @param inCoordinateSpace The space to report the result in.
   * @param consideringRulerUnits When `true`, interprets a ruler-relative location
   * in ruler units rather than points. Defaults to `false`.
   * @returns An array of resolved `[x, y]` point arrays.
   */
  resolve(
    location: TransformOrigin,
    inCoordinateSpace: CoordinateSpaces,
    consideringRulerUnits?: boolean,
  ): Array<[number, number]>;
  /**
   * Selects the guide in the active document window.
   * @param existingSelection How this selection combines with the current one.
   * Defaults to {@link SelectionOptions.REPLACE_WITH}.
   */
  select(existingSelection?: SelectionOptions): void;
}


/**
 * The broadcast proxy for {@link Guide} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Guide} there.
 */
export interface GuidePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Spread | Page | MasterSpread)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<GuidePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GuidePlural, 'plural'>);
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
  readonly constructorName: 'Guide';
  /** Resolves the proxy into the individual {@link Guide} objects it stands for. */
  getElements(): Guide[];
  /** The unique numeric ID of the guide within its document. Stable for the guide's lifetime, unlike {@link index}. */
  readonly id: (number)[];
  /**
   * Whether this is an overridden master-page guide. `false` covers both
   * un-overridden master guides and guides that never came from a master.
   */
  readonly overridden: (boolean)[];
  /** The master-page object this overridden guide derives from, if any. */
  readonly overriddenMasterPageItem: (PageItem | Guide | Graphic | Movie | Sound)[];
  /** The {@link Page} this guide appears on, or an unresolved proxy if it is on a spread with no page context. */
  readonly parentPage: (Page)[];
  /** Whether this master-page guide may be overridden on document pages. */
  get allowOverrides(): (boolean)[];
  set allowOverrides(value: boolean);
  /**
   * The guide's identifying color. Assign either an `[R, G, B]` triple (each
   * `0`–`255`) or a named {@link UIColors} value.
   */
  get guideColor(): ([number, number, number] | UIColors)[];
  set guideColor(value: [number, number, number] | UIColors);
  /** Whether the guide runs horizontally or vertically. */
  get orientation(): (HorizontalOrVertical)[];
  set orientation(value: HorizontalOrVertical);
  /** The guide's position relative to the current ruler zero point. */
  get location(): (number)[];
  set location(value: MeasurementValue);
  /**
   * Whether a horizontal guide stops at the page edges. When `false`, it
   * extends across the full width of the spread and into the pasteboard.
   */
  get fitToPage(): (boolean)[];
  set fitToPage(value: boolean);
  /** View magnification percentage below which the guide is no longer displayed. Range `5`–`4000`. */
  get viewThreshold(): (number)[];
  set viewThreshold(value: number);
  /** Whether the guide is locked against selection and editing. */
  get locked(): (boolean)[];
  set locked(value: boolean);
  /** The {@link Layer} the guide is on. */
  get itemLayer(): (Layer)[];
  set itemLayer(value: Layer);
  /** Whether this is a ruler guide or a Liquid Layout guide. */
  get guideType(): (GuideTypeOptions)[];
  set guideType(value: GuideTypeOptions);
  /** The Liquid Layout zone the guide belongs to. */
  get guideZone(): (number)[];
  set guideZone(value: MeasurementValue);
  /**
   * Overrides this master-page guide onto a document page as an editable copy.
   * @param destinationPage The document page to place the override on.
   */
  override(destinationPage: Page): (Guide)[];
  /** Removes a previous master-item override, reverting to the master's version. */
  removeOverride(): (void)[];
  /** Detaches an overridden master guide from its master, keeping it as an independent object. */
  detach(): (void)[];
  /** Deletes the guide. */
  remove(): (void)[];
  /**
   * Moves the guide to an absolute location or by a relative offset. Supply
   * exactly one of `to` / `by`; if both are given, `by` is ignored.
   * @param to Absolute position `[x, y]`.
   * @param by Relative offset `[x, y]` in measurement units.
   */
  move(to?: MeasurementValue[], by?: MeasurementValue[]): (void)[];
  /** Duplicates the guide. */
  duplicate(): (Guide)[];
  /** Returns the guide's transform, decomposed per coordinate space. */
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): (TransformationMatrix[])[];
  /**
   * Resolves a location to concrete coordinates in the given space.
   * @param location The point or anchor to resolve — see {@link TransformOrigin}.
   * @param inCoordinateSpace The space to report the result in.
   * @param consideringRulerUnits When `true`, interprets a ruler-relative location
   * in ruler units rather than points. Defaults to `false`.
   * @returns An array of resolved `[x, y]` point arrays.
   */
  resolve(
    location: TransformOrigin,
    inCoordinateSpace: CoordinateSpaces,
    consideringRulerUnits?: boolean,
  ): Array<[number, number]>;
  /**
   * Selects the guide in the active document window.
   * @param existingSelection How this selection combines with the current one.
   * Defaults to {@link SelectionOptions.REPLACE_WITH}.
   */
  select(existingSelection?: SelectionOptions): (void)[];
}
