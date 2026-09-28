/**
 * GraphicLayer.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { GraphicLayerParent } from './_base/Parents';
import type { GraphicLayers } from './GraphicLayers';
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
 * A single layer of an imported layered graphic (PSD, AI, PDF).
 */
export interface GraphicLayer {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: GraphicLayerParent;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<GraphicLayer, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GraphicLayer, 'single'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'GraphicLayer';
  /** Resolves the proxy into the individual {@link GraphicLayer} objects it stands for. */
  getElements(): GraphicLayer[];
  /** The unique ID of the GraphicLayer. */
  readonly id: number;
  /** The name of the GraphicLayer. */
  readonly name: string;
  /** The layer's visibility as stored in the original source file. */
  readonly originalVisibility: boolean;
  /** If `true`, this layer is a color-separator layer. */
  readonly separatorLayer: boolean;
  /** If `true`, this layer is an adjustment layer. */
  readonly adjustmentLayer: boolean;
  /** If `true`, this layer is an effects (FX) layer. */
  readonly fxLayer: boolean;
  /** If `true`, this layer is locked in the source file. */
  readonly locked: boolean;
  /** If `true`, this layer is a section-divider layer. */
  readonly sectionDividerLayer: boolean;
  /** If `true`, the source file defines a screen (view) visibility state for this layer. */
  readonly hasViewState: boolean;
  /** The layer's screen (view) visibility, when {@link hasViewState} is `true`. */
  readonly viewState: boolean;
  /** If `true`, the source file defines an export visibility state for this layer. */
  readonly hasExportState: boolean;
  /** The layer's export visibility, when {@link hasExportState} is `true`. */
  readonly exportState: boolean;
  /** If `true`, the source file defines a print visibility state for this layer. */
  readonly hasPrintState: boolean;
  /** The layer's print visibility, when {@link hasPrintState} is `true`. */
  readonly printState: boolean;
  /** Nested sub-layers, for layer groups. */
  readonly graphicLayers: GraphicLayers;
  /** The layer's current, script-controllable visibility in the placed graphic. */
  get currentVisibility(): boolean;
  set currentVisibility(value: boolean);
}


/**
 * The broadcast proxy for {@link GraphicLayer} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link GraphicLayer} there.
 */
export interface GraphicLayerPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (GraphicLayerParent)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<GraphicLayerPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GraphicLayerPlural, 'plural'>);
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
  /** The object's DOM class name. */
  readonly constructorName: 'GraphicLayer';
  /** Resolves the proxy into the individual {@link GraphicLayer} objects it stands for. */
  getElements(): GraphicLayer[];
  /** The unique ID of the GraphicLayer. */
  readonly id: (number)[];
  /** The name of the GraphicLayer. */
  readonly name: (string)[];
  /** The layer's visibility as stored in the original source file. */
  readonly originalVisibility: (boolean)[];
  /** If `true`, this layer is a color-separator layer. */
  readonly separatorLayer: (boolean)[];
  /** If `true`, this layer is an adjustment layer. */
  readonly adjustmentLayer: (boolean)[];
  /** If `true`, this layer is an effects (FX) layer. */
  readonly fxLayer: (boolean)[];
  /** If `true`, this layer is locked in the source file. */
  readonly locked: (boolean)[];
  /** If `true`, this layer is a section-divider layer. */
  readonly sectionDividerLayer: (boolean)[];
  /** If `true`, the source file defines a screen (view) visibility state for this layer. */
  readonly hasViewState: (boolean)[];
  /** The layer's screen (view) visibility, when {@link hasViewState} is `true`. */
  readonly viewState: (boolean)[];
  /** If `true`, the source file defines an export visibility state for this layer. */
  readonly hasExportState: (boolean)[];
  /** The layer's export visibility, when {@link hasExportState} is `true`. */
  readonly exportState: (boolean)[];
  /** If `true`, the source file defines a print visibility state for this layer. */
  readonly hasPrintState: (boolean)[];
  /** The layer's print visibility, when {@link hasPrintState} is `true`. */
  readonly printState: (boolean)[];
  /** Nested sub-layers, for layer groups. */
  readonly graphicLayers: GraphicLayers;
  /** The layer's current, script-controllable visibility in the placed graphic. */
  get currentVisibility(): (boolean)[];
  set currentVisibility(value: boolean);
}
