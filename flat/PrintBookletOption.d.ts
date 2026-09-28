/**
 * PrintBookletOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Document } from './Document';
import type { BookletTypeOptions } from './Enums/BookletTypeOptions';
import type { PageRange } from './Enums/PageRange';
import type { SignatureSizeOptions } from './Enums/SignatureSizeOptions';
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
 * Settings for printing pages as an imposed booklet — how they're grouped into
 * signatures for binding, plus the spacing, margins, and bleed the imposition needs.
 */
export interface PrintBookletOption {
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
  get properties(): PropertiesGetter<PrintBookletOption, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PrintBookletOption, 'single'>);
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
  readonly constructorName: 'PrintBookletOption';
  /** Resolves the proxy into the individual {@link PrintBookletOption} objects it stands for. */
  getElements(): PrintBookletOption[];
  /** The pages to print, specified either as a {@link PageRange} value or a string. To specify a range, separate page numbers in the string with a hyphen (-); to specify separate pages, separate page numbers with a comma (,). */
  get pageRange(): PageRange | string;
  set pageRange(value: PageRange | string);
  /** How pages are imposed for the booklet — saddle-stitched, perfect-bound, or laid out consecutively. See {@link BookletTypeOptions}. */
  get bookletType(): BookletTypeOptions;
  set bookletType(value: BookletTypeOptions);
  /** The amount of space between pages. */
  get spaceBetweenPages(): number;
  set spaceBetweenPages(value: MeasurementValue);
  /** The amount of bleed between pages. */
  get bleedBetweenPages(): number;
  set bleedBetweenPages(value: MeasurementValue);
  /** The amount of creep (binding adjustment based on paper thickness) to add. */
  get creep(): number;
  set creep(value: MeasurementValue);
  /** The number of pages per signature, for perfect binding. See {@link SignatureSizeOptions}. */
  get signatureSize(): SignatureSizeOptions;
  set signatureSize(value: SignatureSizeOptions);
  /** Top margin of the printed booklet. */
  get topMargin(): number;
  set topMargin(value: MeasurementValue);
  /** Bottom margin of the printed booklet. */
  get bottomMargin(): number;
  set bottomMargin(value: MeasurementValue);
  /** Left margin of the printed booklet. */
  get leftMargin(): number;
  set leftMargin(value: MeasurementValue);
  /** Right margin of the printed booklet. */
  get rightMargin(): number;
  set rightMargin(value: MeasurementValue);
  /** If true, automatically adjust margins to fit the specified printer's marks and bleed area. */
  get autoAdjustMargins(): boolean;
  set autoAdjustMargins(value: boolean);
  /** If true, make all margins equal to the top margin. */
  get marginsUniformSize(): boolean;
  set marginsUniformSize(value: boolean);
  /** If true, print blank spreads. */
  get printBlankPrinterSpreads(): boolean;
  set printBlankPrinterSpreads(value: boolean);
}


/**
 * The broadcast proxy for {@link PrintBookletOption} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PrintBookletOption} there.
 */
export interface PrintBookletOptionPlural {
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
  get properties(): (PropertiesGetter<PrintBookletOptionPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PrintBookletOptionPlural, 'plural'>);
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
  readonly constructorName: 'PrintBookletOption';
  /** Resolves the proxy into the individual {@link PrintBookletOption} objects it stands for. */
  getElements(): PrintBookletOption[];
  /** The pages to print, specified either as a {@link PageRange} value or a string. To specify a range, separate page numbers in the string with a hyphen (-); to specify separate pages, separate page numbers with a comma (,). */
  get pageRange(): (PageRange | string)[];
  set pageRange(value: PageRange | string);
  /** How pages are imposed for the booklet — saddle-stitched, perfect-bound, or laid out consecutively. See {@link BookletTypeOptions}. */
  get bookletType(): (BookletTypeOptions)[];
  set bookletType(value: BookletTypeOptions);
  /** The amount of space between pages. */
  get spaceBetweenPages(): (number)[];
  set spaceBetweenPages(value: MeasurementValue);
  /** The amount of bleed between pages. */
  get bleedBetweenPages(): (number)[];
  set bleedBetweenPages(value: MeasurementValue);
  /** The amount of creep (binding adjustment based on paper thickness) to add. */
  get creep(): (number)[];
  set creep(value: MeasurementValue);
  /** The number of pages per signature, for perfect binding. See {@link SignatureSizeOptions}. */
  get signatureSize(): (SignatureSizeOptions)[];
  set signatureSize(value: SignatureSizeOptions);
  /** Top margin of the printed booklet. */
  get topMargin(): (number)[];
  set topMargin(value: MeasurementValue);
  /** Bottom margin of the printed booklet. */
  get bottomMargin(): (number)[];
  set bottomMargin(value: MeasurementValue);
  /** Left margin of the printed booklet. */
  get leftMargin(): (number)[];
  set leftMargin(value: MeasurementValue);
  /** Right margin of the printed booklet. */
  get rightMargin(): (number)[];
  set rightMargin(value: MeasurementValue);
  /** If true, automatically adjust margins to fit the specified printer's marks and bleed area. */
  get autoAdjustMargins(): (boolean)[];
  set autoAdjustMargins(value: boolean);
  /** If true, make all margins equal to the top margin. */
  get marginsUniformSize(): (boolean)[];
  set marginsUniformSize(value: boolean);
  /** If true, print blank spreads. */
  get printBlankPrinterSpreads(): (boolean)[];
  set printBlankPrinterSpreads(value: boolean);
}
