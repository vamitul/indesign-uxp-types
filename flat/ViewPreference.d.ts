/**
 * ViewPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { MeasurementUnits } from './Enums/MeasurementUnits';
import type { RulerOrigin } from './Enums/RulerOrigin';
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
 * Application- or document-wide view defaults (rulers, guides, screen mode, measurement units).
 */
export interface ViewPreference {
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
  get properties(): PropertiesGetter<ViewPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ViewPreference, 'single'>);
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
  readonly constructorName: 'ViewPreference';
  /** Resolves the proxy into the individual {@link ViewPreference} objects it stands for. */
  getElements(): ViewPreference[];
  /** If true, displays text threads. */
  get showTextThreads(): boolean;
  set showTextThreads(value: boolean);
  /** The number of points per inch, typically 72. (Range: 60 to 80) */
  get pointsPerInch(): number;
  set pointsPerInch(value: number);
  /** The distance (in points) between major tick marks on the horizontal ruler. (Range: 4 to 256) Applies only when {@link horizontalMeasurementUnits} is {@link MeasurementUnits.CUSTOM}. */
  get horizontalCustomPoints(): number;
  set horizontalCustomPoints(value: number);
  /** The distance (in points) between major tick marks on the vertical ruler. (Range: 4 to 256) Applies only when {@link verticalMeasurementUnits} is {@link MeasurementUnits.CUSTOM}. */
  get verticalCustomPoints(): number;
  set verticalCustomPoints(value: number);
  /** The measurement unit for stroke measurements. */
  get strokeMeasurementUnits(): MeasurementUnits;
  set strokeMeasurementUnits(value: MeasurementUnits);
  /** The range (in pixels) within which an object snaps to guides. (Range: 1 to 36) Note: Snapping occurs only when guides are shown. */
  get guideSnaptoZone(): number;
  set guideSnaptoZone(value: number);
  /**
   * The distance to move a specified object when an arrow key is pressed.
   *
   * (Range depends on the measurement unit. For points: 0.001 to 100; picas: 0p0.001 to 8p4;
   * mm: 0 to 35.278; cm: 0 to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
   */
  get cursorKeyIncrement(): number;
  set cursorKeyIncrement(value: MeasurementValue);
  /** The measurement unit for the horizontal ruler and other horizontally-measured spaces such as grid columns, horizontal offsets, column gutters, or others. */
  get horizontalMeasurementUnits(): MeasurementUnits;
  set horizontalMeasurementUnits(value: MeasurementUnits);
  /** The measurement unit for the vertical ruler and other vertically-measured spaces such as grid rows, vertical offsets, row heights, or others. */
  get verticalMeasurementUnits(): MeasurementUnits;
  set verticalMeasurementUnits(value: MeasurementUnits);
  /** The default zero point at the intersection of the vertical and horizontal rulers and the scope of the horizontal ruler. */
  get rulerOrigin(): RulerOrigin;
  set rulerOrigin(value: RulerOrigin);
  /** If true, displays the horizontal and vertical rulers. */
  get showRulers(): boolean;
  set showRulers(value: boolean);
  /** If true, displays borders of unselected frames and the diagonal lines in empty unselected frames. */
  get showFrameEdges(): boolean;
  set showFrameEdges(value: boolean);
  /** The measurement units for typography. */
  get typographicMeasurementUnits(): MeasurementUnits;
  set typographicMeasurementUnits(value: MeasurementUnits);
  /** The measurement unit for text size measurements. */
  get textSizeMeasurementUnits(): MeasurementUnits;
  set textSizeMeasurementUnits(value: MeasurementUnits);
  /** The measurement unit for the print dialog. */
  get printDialogMeasurementUnits(): MeasurementUnits;
  set printDialogMeasurementUnits(value: MeasurementUnits);
  /** If true, notes are displayed. */
  get showNotes(): boolean;
  set showNotes(value: boolean);
}


/**
 * The broadcast proxy for {@link ViewPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link ViewPreference} there.
 */
export interface ViewPreferencePlural {
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
  get properties(): (PropertiesGetter<ViewPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ViewPreferencePlural, 'plural'>);
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
  readonly constructorName: 'ViewPreference';
  /** Resolves the proxy into the individual {@link ViewPreference} objects it stands for. */
  getElements(): ViewPreference[];
  /** If true, displays text threads. */
  get showTextThreads(): (boolean)[];
  set showTextThreads(value: boolean);
  /** The number of points per inch, typically 72. (Range: 60 to 80) */
  get pointsPerInch(): (number)[];
  set pointsPerInch(value: number);
  /** The distance (in points) between major tick marks on the horizontal ruler. (Range: 4 to 256) Applies only when {@link horizontalMeasurementUnits} is {@link MeasurementUnits.CUSTOM}. */
  get horizontalCustomPoints(): (number)[];
  set horizontalCustomPoints(value: number);
  /** The distance (in points) between major tick marks on the vertical ruler. (Range: 4 to 256) Applies only when {@link verticalMeasurementUnits} is {@link MeasurementUnits.CUSTOM}. */
  get verticalCustomPoints(): (number)[];
  set verticalCustomPoints(value: number);
  /** The measurement unit for stroke measurements. */
  get strokeMeasurementUnits(): (MeasurementUnits)[];
  set strokeMeasurementUnits(value: MeasurementUnits);
  /** The range (in pixels) within which an object snaps to guides. (Range: 1 to 36) Note: Snapping occurs only when guides are shown. */
  get guideSnaptoZone(): (number)[];
  set guideSnaptoZone(value: number);
  /**
   * The distance to move a specified object when an arrow key is pressed.
   *
   * (Range depends on the measurement unit. For points: 0.001 to 100; picas: 0p0.001 to 8p4;
   * mm: 0 to 35.278; cm: 0 to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
   */
  get cursorKeyIncrement(): (number)[];
  set cursorKeyIncrement(value: MeasurementValue);
  /** The measurement unit for the horizontal ruler and other horizontally-measured spaces such as grid columns, horizontal offsets, column gutters, or others. */
  get horizontalMeasurementUnits(): (MeasurementUnits)[];
  set horizontalMeasurementUnits(value: MeasurementUnits);
  /** The measurement unit for the vertical ruler and other vertically-measured spaces such as grid rows, vertical offsets, row heights, or others. */
  get verticalMeasurementUnits(): (MeasurementUnits)[];
  set verticalMeasurementUnits(value: MeasurementUnits);
  /** The default zero point at the intersection of the vertical and horizontal rulers and the scope of the horizontal ruler. */
  get rulerOrigin(): (RulerOrigin)[];
  set rulerOrigin(value: RulerOrigin);
  /** If true, displays the horizontal and vertical rulers. */
  get showRulers(): (boolean)[];
  set showRulers(value: boolean);
  /** If true, displays borders of unselected frames and the diagonal lines in empty unselected frames. */
  get showFrameEdges(): (boolean)[];
  set showFrameEdges(value: boolean);
  /** The measurement units for typography. */
  get typographicMeasurementUnits(): (MeasurementUnits)[];
  set typographicMeasurementUnits(value: MeasurementUnits);
  /** The measurement unit for text size measurements. */
  get textSizeMeasurementUnits(): (MeasurementUnits)[];
  set textSizeMeasurementUnits(value: MeasurementUnits);
  /** The measurement unit for the print dialog. */
  get printDialogMeasurementUnits(): (MeasurementUnits)[];
  set printDialogMeasurementUnits(value: MeasurementUnits);
  /** If true, notes are displayed. */
  get showNotes(): (boolean)[];
  set showNotes(value: boolean);
}
