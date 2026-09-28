/**
 * GridDataInformation.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { GridDataInformationParent } from './_base/Parents';
import type { Font } from './Font';
import type { MeasurementValue } from './_base/Types';
import type { LineAlignment } from './Enums/LineAlignment';
import type { GridAlignment } from './Enums/GridAlignment';
import type { CharacterAlignment } from './Enums/CharacterAlignment';
import type { GridViewSettings } from './Enums/GridViewSettings';
import type { CharacterCountLocation } from './Enums/CharacterCountLocation';
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
 * Default character-grid formatting properties, shared by named, layout, and
 * frame (story) grids.
 */
export interface GridDataInformation {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: GridDataInformationParent;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<GridDataInformation, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GridDataInformation, 'single'>);
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
  readonly constructorName: 'GridDataInformation';
  /** Resolves the proxy into the individual {@link GridDataInformation} objects it stands for. */
  getElements(): GridDataInformation[];
  /** The font applied to grid characters. */
  get appliedFont(): Font | string;
  set appliedFont(value: Font | string);
  /** The font style applied to grid characters. */
  get fontStyle(): string;
  set fontStyle(value: string);
  /** The grid's text size. */
  get pointSize(): number;
  set pointSize(value: MeasurementValue);
  /** The spacing between characters on the grid, as a percentage. */
  get characterAki(): number;
  set characterAki(value: number);
  /** The spacing between lines on the grid, as a percentage. */
  get lineAki(): number;
  set lineAki(value: number);
  /** The horizontal scale of grid characters, as a percentage. */
  get horizontalScale(): number;
  set horizontalScale(value: number);
  /** The vertical scale of grid characters, as a percentage. */
  get verticalScale(): number;
  set verticalScale(value: number);
  /** How lines align to the grid. */
  get lineAlignment(): LineAlignment;
  set lineAlignment(value: LineAlignment);
  /** How the grid aligns within its frame. */
  get gridAlignment(): GridAlignment;
  set gridAlignment(value: GridAlignment);
  /** How characters align within grid cells. */
  get characterAlignment(): CharacterAlignment;
  set characterAlignment(value: CharacterAlignment);
  /** Whether, and how, the grid is drawn on screen. */
  get gridView(): GridViewSettings;
  set gridView(value: GridViewSettings);
  /** Where the character count is displayed on the grid. */
  get characterCountLocation(): CharacterCountLocation;
  set characterCountLocation(value: CharacterCountLocation);
  /** The point size of the displayed character count. */
  get characterCountSize(): number;
  set characterCountSize(value: number);
}


/**
 * The broadcast proxy for {@link GridDataInformation} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link GridDataInformation} there.
 */
export interface GridDataInformationPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (GridDataInformationParent)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<GridDataInformationPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GridDataInformationPlural, 'plural'>);
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
  readonly constructorName: 'GridDataInformation';
  /** Resolves the proxy into the individual {@link GridDataInformation} objects it stands for. */
  getElements(): GridDataInformation[];
  /** The font applied to grid characters. */
  get appliedFont(): (Font | string)[];
  set appliedFont(value: Font | string);
  /** The font style applied to grid characters. */
  get fontStyle(): (string)[];
  set fontStyle(value: string);
  /** The grid's text size. */
  get pointSize(): (number)[];
  set pointSize(value: MeasurementValue);
  /** The spacing between characters on the grid, as a percentage. */
  get characterAki(): (number)[];
  set characterAki(value: number);
  /** The spacing between lines on the grid, as a percentage. */
  get lineAki(): (number)[];
  set lineAki(value: number);
  /** The horizontal scale of grid characters, as a percentage. */
  get horizontalScale(): (number)[];
  set horizontalScale(value: number);
  /** The vertical scale of grid characters, as a percentage. */
  get verticalScale(): (number)[];
  set verticalScale(value: number);
  /** How lines align to the grid. */
  get lineAlignment(): (LineAlignment)[];
  set lineAlignment(value: LineAlignment);
  /** How the grid aligns within its frame. */
  get gridAlignment(): (GridAlignment)[];
  set gridAlignment(value: GridAlignment);
  /** How characters align within grid cells. */
  get characterAlignment(): (CharacterAlignment)[];
  set characterAlignment(value: CharacterAlignment);
  /** Whether, and how, the grid is drawn on screen. */
  get gridView(): (GridViewSettings)[];
  set gridView(value: GridViewSettings);
  /** Where the character count is displayed on the grid. */
  get characterCountLocation(): (CharacterCountLocation)[];
  set characterCountLocation(value: CharacterCountLocation);
  /** The point size of the displayed character count. */
  get characterCountSize(): (number)[];
  set characterCountSize(value: number);
}
