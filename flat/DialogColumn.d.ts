/**
 * DialogColumn.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { DialogContainerParent } from './_base/Parents';
import type { WidgetContainer } from './_base/WidgetMixins';
import type { DialogRows } from './DialogRows';
import type { Dialog } from './Dialog';
import type { DialogRow } from './DialogRow';
import type { AngleComboboxes } from './AngleComboboxes';
import type { AngleEditboxes } from './AngleEditboxes';
import type { BorderPanels } from './BorderPanels';
import type { CheckboxControls } from './CheckboxControls';
import type { Dropdowns } from './Dropdowns';
import type { EnablingGroups } from './EnablingGroups';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { IntegerComboboxes } from './IntegerComboboxes';
import type { IntegerEditboxes } from './IntegerEditboxes';
import type { MeasurementComboboxes } from './MeasurementComboboxes';
import type { MeasurementEditboxes } from './MeasurementEditboxes';
import type { PercentComboboxes } from './PercentComboboxes';
import type { PercentEditboxes } from './PercentEditboxes';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { RadiobuttonGroups } from './RadiobuttonGroups';
import type { RealComboboxes } from './RealComboboxes';
import type { RealEditboxes } from './RealEditboxes';
import type { StaticTexts } from './StaticTexts';
import type { TextEditboxes } from './TextEditboxes';
import type { Widgets } from './Widgets';
/**
 * A borderless column laid out inside a {@link Dialog} (or another dialog
 * container) that holds controls and nested {@link DialogRow}s.
 */
export interface DialogColumn {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: DialogContainerParent;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<DialogColumn, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DialogColumn, 'single'>);
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
  /** All widgets directly inside the container, regardless of type. */
  readonly widgets: Widgets;
  /** The text editboxes inside the container. */
  readonly textEditboxes: TextEditboxes;
  /** The integer editboxes inside the container. */
  readonly integerEditboxes: IntegerEditboxes;
  /** The measurement editboxes inside the container. */
  readonly measurementEditboxes: MeasurementEditboxes;
  /** The real-number editboxes inside the container. */
  readonly realEditboxes: RealEditboxes;
  /** The angle editboxes inside the container. */
  readonly angleEditboxes: AngleEditboxes;
  /** The percent editboxes inside the container. */
  readonly percentEditboxes: PercentEditboxes;
  /** The integer comboboxes inside the container. */
  readonly integerComboboxes: IntegerComboboxes;
  /** The measurement comboboxes inside the container. */
  readonly measurementComboboxes: MeasurementComboboxes;
  /** The real-number comboboxes inside the container. */
  readonly realComboboxes: RealComboboxes;
  /** The angle comboboxes inside the container. */
  readonly angleComboboxes: AngleComboboxes;
  /** The percent comboboxes inside the container. */
  readonly percentComboboxes: PercentComboboxes;
  /** The checkbox controls inside the container. */
  readonly checkboxControls: CheckboxControls;
  /** The static text objects inside the container. */
  readonly staticTexts: StaticTexts;
  /** The dropdowns inside the container. */
  readonly dropdowns: Dropdowns;
  /** The border panels inside the container. */
  readonly borderPanels: BorderPanels;
  /** The enabling groups inside the container. */
  readonly enablingGroups: EnablingGroups;
  /** The radiobutton groups inside the container. */
  readonly radiobuttonGroups: RadiobuttonGroups;
  /** The object's DOM class name. */
  readonly constructorName: 'DialogColumn';
  /** Resolves the proxy into the individual {@link DialogColumn} objects it stands for. */
  getElements(): DialogColumn[];
  /** The unique ID of the DialogColumn. */
  readonly id: number;
  /** The rows nested directly inside the column. */
  readonly dialogRows: DialogRows;
}


/**
 * The broadcast proxy for {@link DialogColumn} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link DialogColumn} there.
 */
export interface DialogColumnPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (DialogContainerParent)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<DialogColumnPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DialogColumnPlural, 'plural'>);
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
  /** All widgets directly inside the container, regardless of type. */
  readonly widgets: Widgets;
  /** The text editboxes inside the container. */
  readonly textEditboxes: TextEditboxes;
  /** The integer editboxes inside the container. */
  readonly integerEditboxes: IntegerEditboxes;
  /** The measurement editboxes inside the container. */
  readonly measurementEditboxes: MeasurementEditboxes;
  /** The real-number editboxes inside the container. */
  readonly realEditboxes: RealEditboxes;
  /** The angle editboxes inside the container. */
  readonly angleEditboxes: AngleEditboxes;
  /** The percent editboxes inside the container. */
  readonly percentEditboxes: PercentEditboxes;
  /** The integer comboboxes inside the container. */
  readonly integerComboboxes: IntegerComboboxes;
  /** The measurement comboboxes inside the container. */
  readonly measurementComboboxes: MeasurementComboboxes;
  /** The real-number comboboxes inside the container. */
  readonly realComboboxes: RealComboboxes;
  /** The angle comboboxes inside the container. */
  readonly angleComboboxes: AngleComboboxes;
  /** The percent comboboxes inside the container. */
  readonly percentComboboxes: PercentComboboxes;
  /** The checkbox controls inside the container. */
  readonly checkboxControls: CheckboxControls;
  /** The static text objects inside the container. */
  readonly staticTexts: StaticTexts;
  /** The dropdowns inside the container. */
  readonly dropdowns: Dropdowns;
  /** The border panels inside the container. */
  readonly borderPanels: BorderPanels;
  /** The enabling groups inside the container. */
  readonly enablingGroups: EnablingGroups;
  /** The radiobutton groups inside the container. */
  readonly radiobuttonGroups: RadiobuttonGroups;
  /** The object's DOM class name. */
  readonly constructorName: 'DialogColumn';
  /** Resolves the proxy into the individual {@link DialogColumn} objects it stands for. */
  getElements(): DialogColumn[];
  /** The unique ID of the DialogColumn. */
  readonly id: (number)[];
  /** The rows nested directly inside the column. */
  readonly dialogRows: DialogRows;
}
