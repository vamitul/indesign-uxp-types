/**
 * GalleyPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { AntiAliasType } from './Enums/AntiAliasType';
import type { CursorTypes } from './Enums/CursorTypes';
import type { InCopyUIColors } from './Enums/InCopyUIColors';
import type { LineSpacingType } from './Enums/LineSpacingType';
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
 * Galley preferences.
 */
export interface GalleyPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: DocumentOrApplication;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<GalleyPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GalleyPreference, 'single'>);
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
  readonly constructorName: 'GalleyPreference';
  /** Resolves the proxy into the individual {@link GalleyPreference} objects it stands for. */
  getElements(): GalleyPreference[];
  /** The background color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. */
  get backgroundColor(): number[] | InCopyUIColors;
  set backgroundColor(value: number[] | InCopyUIColors);
  /** If true, the cursor blinks. */
  get blinkCursor(): boolean;
  set blinkCursor(value: boolean);
  /** The cursor type for galley and story views. */
  get cursorType(): CursorTypes;
  set cursorType(value: CursorTypes);
  /** If true, galley text is anti-aliased. */
  get smoothText(): boolean;
  set smoothText(value: boolean);
  /** The text color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. */
  get textColor(): number[] | InCopyUIColors;
  set textColor(value: number[] | InCopyUIColors);
  /** If true, displays the depth ruler. */
  get showDepthRuler(): boolean;
  set showDepthRuler(value: boolean);
  /** The type of text anti-aliasing to use in story and galley views. */
  get antiAliasType(): AntiAliasType;
  set antiAliasType(value: AntiAliasType);
  /** If true, show paragraph style names. */
  get showParagraphStyleNames(): boolean;
  set showParagraphStyleNames(value: boolean);
  /** How much space separates lines in galley and story view — see {@link LineSpacingType}. */
  get lineSpacingValue(): LineSpacingType;
  set lineSpacingValue(value: LineSpacingType);
  /** Font family name to use for text display. */
  get displayFont(): string;
  set displayFont(value: string);
  /** Size to use for text display. */
  get displayFontSize(): number;
  set displayFontSize(value: MeasurementValue);
  /** Width of the galley's info column, in points. */
  get infoColumnWidth(): number;
  set infoColumnWidth(value: MeasurementValue);
  /** If true, display the Info column. */
  get showInfoColumn(): boolean;
  set showInfoColumn(value: boolean);
  /** If true, show paragraph break marks. */
  get showParagraphBreakMarks(): boolean;
  set showParagraphBreakMarks(value: boolean);
}


/**
 * The broadcast proxy for {@link GalleyPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link GalleyPreference} there.
 */
export interface GalleyPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (DocumentOrApplication)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<GalleyPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GalleyPreferencePlural, 'plural'>);
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
  readonly constructorName: 'GalleyPreference';
  /** Resolves the proxy into the individual {@link GalleyPreference} objects it stands for. */
  getElements(): GalleyPreference[];
  /** The background color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. */
  get backgroundColor(): (number[] | InCopyUIColors)[];
  set backgroundColor(value: number[] | InCopyUIColors);
  /** If true, the cursor blinks. */
  get blinkCursor(): (boolean)[];
  set blinkCursor(value: boolean);
  /** The cursor type for galley and story views. */
  get cursorType(): (CursorTypes)[];
  set cursorType(value: CursorTypes);
  /** If true, galley text is anti-aliased. */
  get smoothText(): (boolean)[];
  set smoothText(value: boolean);
  /** The text color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. */
  get textColor(): (number[] | InCopyUIColors)[];
  set textColor(value: number[] | InCopyUIColors);
  /** If true, displays the depth ruler. */
  get showDepthRuler(): (boolean)[];
  set showDepthRuler(value: boolean);
  /** The type of text anti-aliasing to use in story and galley views. */
  get antiAliasType(): (AntiAliasType)[];
  set antiAliasType(value: AntiAliasType);
  /** If true, show paragraph style names. */
  get showParagraphStyleNames(): (boolean)[];
  set showParagraphStyleNames(value: boolean);
  /** How much space separates lines in galley and story view — see {@link LineSpacingType}. */
  get lineSpacingValue(): (LineSpacingType)[];
  set lineSpacingValue(value: LineSpacingType);
  /** Font family name to use for text display. */
  get displayFont(): (string)[];
  set displayFont(value: string);
  /** Size to use for text display. */
  get displayFontSize(): (number)[];
  set displayFontSize(value: MeasurementValue);
  /** Width of the galley's info column, in points. */
  get infoColumnWidth(): (number)[];
  set infoColumnWidth(value: MeasurementValue);
  /** If true, display the Info column. */
  get showInfoColumn(): (boolean)[];
  set showInfoColumn(value: boolean);
  /** If true, show paragraph break marks. */
  get showParagraphBreakMarks(): (boolean)[];
  set showParagraphBreakMarks(value: boolean);
}
