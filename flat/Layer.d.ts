/**
 * Layer.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { UIColors } from './Enums/UIColors';
import type { LocationOptions } from './Enums/LocationOptions';

import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { Document } from './Document';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { Guides } from './Guides';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';
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
 * A layer of the document: everything drawn on it is shown, hidden, locked and
 * printed together, and sits in front of or behind everything on another layer.
 *
 * Layers span the whole document rather than a single page, so an item added to
 * a layer on page 1 obeys the same visibility and locking as one on page 40.
 * Their order in {@link Document.layers} is the stacking order, front to back.
 */
export interface Layer {
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
  get properties(): PropertiesGetter<Layer, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Layer, 'single'>);
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
  readonly constructorName: 'Layer';
  /** Resolves the proxy into the individual {@link Layer} objects it stands for. */
  getElements(): Layer[];
  /** The unique numeric ID of the layer within its document. Stable across reordering, unlike {@link index}. */
  readonly id: number;
  /** Every {@link PageItem} on this layer, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: AnyPageItem[];
  /** Every {@link Graphic} on this layer, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: AnyGraphic[];
  /** {@link Ovals} (ellipses) on this layer. */
  readonly ovals: Ovals;
  /** {@link SplineItems} on this layer. */
  readonly splineItems: SplineItems;
  /** All {@link PageItems} on this layer regardless of type. */
  readonly pageItems: PageItems;
  /** {@link Rectangles} on this layer. */
  readonly rectangles: Rectangles;
  /** {@link GraphicLines} on this layer. */
  readonly graphicLines: GraphicLines;
  /** {@link TextFrames} on this layer. */
  readonly textFrames: TextFrames;
  /** {@link Polygons} on this layer. */
  readonly polygons: Polygons;
  /** {@link EndnoteTextFrames} on this layer. */
  readonly endnoteTextFrames: EndnoteTextFrames;
  /** {@link Guides} assigned to this layer. */
  readonly guides: Guides;
  /** {@link Groups} on this layer. */
  readonly groups: Groups;
  /** {@link EPSTexts} on this layer. */
  readonly epstexts: EPSTexts;
  /** {@link FormFields} of every kind on this layer. */
  readonly formFields: FormFields;
  /** {@link Buttons} on this layer. */
  readonly buttons: Buttons;
  /** {@link MultiStateObjects} on this layer. */
  readonly multiStateObjects: MultiStateObjects;
  /** {@link CheckBoxes} on this layer. */
  readonly checkBoxes: CheckBoxes;
  /** {@link ComboBoxes} on this layer. */
  readonly comboBoxes: ComboBoxes;
  /** {@link ListBoxes} on this layer. */
  readonly listBoxes: ListBoxes;
  /** {@link RadioButtons} on this layer. */
  readonly radioButtons: RadioButtons;
  /** {@link TextBoxes} on this layer. */
  readonly textBoxes: TextBoxes;
  /** {@link SignatureFields} on this layer. */
  readonly signatureFields: SignatureFields;
  /** Whether the layer (and everything on it) is shown. */
  get visible(): boolean;
  set visible(value: boolean);
  /** Whether the layer is locked, preventing selection and editing of its items. */
  get locked(): boolean;
  set locked(value: boolean);
  /**
   * The layer's identifying color in the UI. Assign either an `[R, G, B]` triple
   * (each `0`–`255`) or a named {@link UIColors} value.
   */
  get layerColor(): [number, number, number] | UIColors;
  set layerColor(value: [number, number, number] | UIColors);
  /** Whether text-wrap on this layer's objects is ignored by other layers while this layer is hidden. */
  get ignoreWrap(): boolean;
  set ignoreWrap(value: boolean);
  /** Whether guides on the layer are shown. */
  get showGuides(): boolean;
  set showGuides(value: boolean);
  /** Whether guides on the layer are locked in place. */
  get lockGuides(): boolean;
  set lockGuides(value: boolean);
  /** Whether the layer prints. */
  get printable(): boolean;
  set printable(value: boolean);
  /**
   * Moves the layer within the layer stack.
   * @param reference The layer to move relative to. Required when `to` is
   * {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}; ignored otherwise.
   */
  move(to: LocationOptions, reference?: Layer): Layer;
  /** Deletes the layer and every item on it. */
  remove(): void;
  /** Duplicates the layer, including its items, directly above it. */
  duplicate(): Layer;
  /**
   * Merges other layers into this one; the merged items move onto this layer and
   * the source layers are removed.
   * @param withLayers The layer(s) to merge into this one.
   */
  merge(withLayers: Layer | Layer[]): Layer;
}


/**
 * The broadcast proxy for {@link Layer} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Layer} there.
 */
export interface LayerPlural {
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
  get properties(): (PropertiesGetter<LayerPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<LayerPlural, 'plural'>);
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
  readonly constructorName: 'Layer';
  /** Resolves the proxy into the individual {@link Layer} objects it stands for. */
  getElements(): Layer[];
  /** The unique numeric ID of the layer within its document. Stable across reordering, unlike {@link index}. */
  readonly id: (number)[];
  /** Every {@link PageItem} on this layer, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: (AnyPageItem[])[];
  /** Every {@link Graphic} on this layer, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: (AnyGraphic[])[];
  /** {@link Ovals} (ellipses) on this layer. */
  readonly ovals: Ovals;
  /** {@link SplineItems} on this layer. */
  readonly splineItems: SplineItems;
  /** All {@link PageItems} on this layer regardless of type. */
  readonly pageItems: PageItems;
  /** {@link Rectangles} on this layer. */
  readonly rectangles: Rectangles;
  /** {@link GraphicLines} on this layer. */
  readonly graphicLines: GraphicLines;
  /** {@link TextFrames} on this layer. */
  readonly textFrames: TextFrames;
  /** {@link Polygons} on this layer. */
  readonly polygons: Polygons;
  /** {@link EndnoteTextFrames} on this layer. */
  readonly endnoteTextFrames: EndnoteTextFrames;
  /** {@link Guides} assigned to this layer. */
  readonly guides: Guides;
  /** {@link Groups} on this layer. */
  readonly groups: Groups;
  /** {@link EPSTexts} on this layer. */
  readonly epstexts: EPSTexts;
  /** {@link FormFields} of every kind on this layer. */
  readonly formFields: FormFields;
  /** {@link Buttons} on this layer. */
  readonly buttons: Buttons;
  /** {@link MultiStateObjects} on this layer. */
  readonly multiStateObjects: MultiStateObjects;
  /** {@link CheckBoxes} on this layer. */
  readonly checkBoxes: CheckBoxes;
  /** {@link ComboBoxes} on this layer. */
  readonly comboBoxes: ComboBoxes;
  /** {@link ListBoxes} on this layer. */
  readonly listBoxes: ListBoxes;
  /** {@link RadioButtons} on this layer. */
  readonly radioButtons: RadioButtons;
  /** {@link TextBoxes} on this layer. */
  readonly textBoxes: TextBoxes;
  /** {@link SignatureFields} on this layer. */
  readonly signatureFields: SignatureFields;
  /** Whether the layer (and everything on it) is shown. */
  get visible(): (boolean)[];
  set visible(value: boolean);
  /** Whether the layer is locked, preventing selection and editing of its items. */
  get locked(): (boolean)[];
  set locked(value: boolean);
  /**
   * The layer's identifying color in the UI. Assign either an `[R, G, B]` triple
   * (each `0`–`255`) or a named {@link UIColors} value.
   */
  get layerColor(): ([number, number, number] | UIColors)[];
  set layerColor(value: [number, number, number] | UIColors);
  /** Whether text-wrap on this layer's objects is ignored by other layers while this layer is hidden. */
  get ignoreWrap(): (boolean)[];
  set ignoreWrap(value: boolean);
  /** Whether guides on the layer are shown. */
  get showGuides(): (boolean)[];
  set showGuides(value: boolean);
  /** Whether guides on the layer are locked in place. */
  get lockGuides(): (boolean)[];
  set lockGuides(value: boolean);
  /** Whether the layer prints. */
  get printable(): (boolean)[];
  set printable(value: boolean);
  /**
   * Moves the layer within the layer stack.
   * @param reference The layer to move relative to. Required when `to` is
   * {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}; ignored otherwise.
   */
  move(to: LocationOptions, reference?: Layer): (Layer)[];
  /** Deletes the layer and every item on it. */
  remove(): (void)[];
  /** Duplicates the layer, including its items, directly above it. */
  duplicate(): (Layer)[];
  /**
   * Merges other layers into this one; the merged items move onto this layer and
   * the source layers are removed.
   * @param withLayers The layer(s) to merge into this one.
   */
  merge(withLayers: Layer | Layer[]): (Layer)[];
}
