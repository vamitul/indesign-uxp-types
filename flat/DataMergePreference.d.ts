/**
 * DataMergePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FilePath, MeasurementValue } from './_base/Types';
import type { DataMerge } from './DataMerge';
import type { ArrangeBy } from './Enums/ArrangeBy';
import type { RecordSelection } from './Enums/RecordSelection';
import type { RecordsPerPage } from './Enums/RecordsPerPage';
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
 * Settings controlling how merged records are placed on pages during a
 * {@link DataMerge} — which records to include, their arrangement and spacing,
 * and the page margins.
 */
export interface DataMergePreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: DataMerge;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<DataMergePreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DataMergePreference, 'single'>);
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
  readonly constructorName: 'DataMergePreference';
  /** Resolves the proxy into the individual {@link DataMergePreference} objects it stands for. */
  getElements(): DataMergePreference[];
  /** Which records to include in the merge — all of them, one specific record, or a range. See {@link RecordSelection}. */
  get recordSelection(): RecordSelection;
  set recordSelection(value: RecordSelection);
  /** The offset value of the left margin in the target document. */
  get leftMargin(): number;
  set leftMargin(value: MeasurementValue);
  /** The offset value of the top margin in the target document. */
  get topMargin(): number;
  set topMargin(value: MeasurementValue);
  /** The offset value of the right margin in the target document. */
  get rightMargin(): number;
  set rightMargin(value: MeasurementValue);
  /** The offset value of the bottom margin in the target document. */
  get bottomMargin(): number;
  set bottomMargin(value: MeasurementValue);
  /** Whether to arrange multiple records by row or by column. See {@link ArrangeBy}. */
  get arrangeBy(): ArrangeBy;
  set arrangeBy(value: ArrangeBy);
  /** The amount of space between rows of records in the target document. */
  get rowSpacing(): number;
  set rowSpacing(value: MeasurementValue);
  /** The amount of space between columns of records in the target document. */
  get columnSpacing(): number;
  set columnSpacing(value: MeasurementValue);
  /** The number of the record to merge. Valid only when {@link recordSelection} is {@link RecordSelection.ONE_RECORD}. */
  get recordNumber(): number;
  set recordNumber(value: number);
  /** The range of records to merge. Valid only when {@link recordSelection} is {@link RecordSelection.RANGE}. */
  get recordRange(): string;
  set recordRange(value: string);
  /** Whether to place one record per page or as many as fit. See {@link RecordsPerPage}. */
  get recordsPerPage(): RecordsPerPage;
  set recordsPerPage(value: RecordsPerPage);
  /**
   * If true, lists missing images in the specified output file.
   * @param outputMissingImagesReportFile The path to the output file.
   */
  alertMissingImages(outputMissingImagesReportFile: FilePath): boolean;
}


/**
 * The broadcast proxy for {@link DataMergePreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link DataMergePreference} there.
 */
export interface DataMergePreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (DataMerge)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<DataMergePreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DataMergePreferencePlural, 'plural'>);
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
  readonly constructorName: 'DataMergePreference';
  /** Resolves the proxy into the individual {@link DataMergePreference} objects it stands for. */
  getElements(): DataMergePreference[];
  /** Which records to include in the merge — all of them, one specific record, or a range. See {@link RecordSelection}. */
  get recordSelection(): (RecordSelection)[];
  set recordSelection(value: RecordSelection);
  /** The offset value of the left margin in the target document. */
  get leftMargin(): (number)[];
  set leftMargin(value: MeasurementValue);
  /** The offset value of the top margin in the target document. */
  get topMargin(): (number)[];
  set topMargin(value: MeasurementValue);
  /** The offset value of the right margin in the target document. */
  get rightMargin(): (number)[];
  set rightMargin(value: MeasurementValue);
  /** The offset value of the bottom margin in the target document. */
  get bottomMargin(): (number)[];
  set bottomMargin(value: MeasurementValue);
  /** Whether to arrange multiple records by row or by column. See {@link ArrangeBy}. */
  get arrangeBy(): (ArrangeBy)[];
  set arrangeBy(value: ArrangeBy);
  /** The amount of space between rows of records in the target document. */
  get rowSpacing(): (number)[];
  set rowSpacing(value: MeasurementValue);
  /** The amount of space between columns of records in the target document. */
  get columnSpacing(): (number)[];
  set columnSpacing(value: MeasurementValue);
  /** The number of the record to merge. Valid only when {@link recordSelection} is {@link RecordSelection.ONE_RECORD}. */
  get recordNumber(): (number)[];
  set recordNumber(value: number);
  /** The range of records to merge. Valid only when {@link recordSelection} is {@link RecordSelection.RANGE}. */
  get recordRange(): (string)[];
  set recordRange(value: string);
  /** Whether to place one record per page or as many as fit. See {@link RecordsPerPage}. */
  get recordsPerPage(): (RecordsPerPage)[];
  set recordsPerPage(value: RecordsPerPage);
  /**
   * If true, lists missing images in the specified output file.
   * @param outputMissingImagesReportFile The path to the output file.
   */
  alertMissingImages(outputMissingImagesReportFile: FilePath): (boolean)[];
}
