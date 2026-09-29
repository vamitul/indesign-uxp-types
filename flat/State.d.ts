/**
 * State.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { StateOwner } from './_base/Parents';

import type { StateTypes } from './Enums/StateTypes';

import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { EPSs } from './EPSs';
import type { EPSTexts } from './EPSTexts';
import type { Graphics } from './Graphics';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { Images } from './Images';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { PDFs } from './PDFs';
import type { PICTs } from './PICTs';
import type { Polygons } from './Polygons';
import type { Rectangles } from './Rectangles';
import type { SplineItems } from './SplineItems';
import type { SVGs } from './SVGs';
import type { TextFrames } from './TextFrames';
import type { WMFs } from './WMFs';
import type { Button } from './Button';
import type { MultiStateObject } from './MultiStateObject';
import type { RadioButton } from './RadioButton';
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
 * One appearance state of a {@link MultiStateObject}, {@link Button}, or
 * {@link RadioButton} — for example, a button's Up/Rollover/Down artwork, or
 * one panel of a slideshow-style multi-state object.
 *
 * Its child collections hold this state's own artwork — shapes, placed graphics, and
 * text frames — but not the interactive object types (buttons, form fields,
 * multi-state objects) that a full page or layer can hold.
 */
export interface State {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: StateOwner;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<State, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<State, 'single'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): string;
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'State';
  /** Resolves the proxy into the individual {@link State} objects it stands for. */
  getElements(): State[];
  /** The unique numeric ID of the state within its multi-state object. */
  readonly id: number;
  /** {@link Ovals} (ellipses) directly in this state. */
  readonly ovals: Ovals<State>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this state. */
  readonly splineItems: SplineItems<State>;
  /** All {@link PageItem}s in this state regardless of type. */
  readonly pageItems: PageItems<State>;
  /** {@link Rectangles} directly in this state. */
  readonly rectangles: Rectangles<State>;
  /** {@link GraphicLines} directly in this state. */
  readonly graphicLines: GraphicLines<State>;
  /** {@link TextFrames} directly in this state. */
  readonly textFrames: TextFrames<State>;
  /** {@link Polygons} directly in this state. */
  readonly polygons: Polygons<State>;
  /** {@link EndnoteTextFrames} directly in this state. */
  readonly endnoteTextFrames: EndnoteTextFrames<State>;
  /** {@link Groups} directly in this state. */
  readonly groups: Groups<State>;
  /** {@link EPSTexts} directly in this state. */
  readonly epstexts: EPSTexts<State>;
  /** Bitmap {@link Images} (TIFF, JPEG, PNG, GIF…) directly in this state. */
  readonly images: Images<State>;
  /** Placed {@link Graphics} of any file format directly in this state. */
  readonly graphics: Graphics<State>;
  /** {@link EPSs} directly in this state. */
  readonly epss: EPSs<State>;
  /** {@link WMFs} directly in this state. */
  readonly wmfs: WMFs<State>;
  /** {@link PICTs} directly in this state. */
  readonly picts: PICTs<State>;
  /** {@link PDFs} directly in this state. */
  readonly pdfs: PDFs<State>;
  /** {@link SVGs} directly in this state. */
  readonly svgs: SVGs<State>;
  /** Whether this is the currently active/displayed state of its parent object. */
  get active(): boolean;
  set active(value: boolean);
  /** Whether this state is enabled in exported PDFs. */
  get enabled(): boolean;
  set enabled(value: boolean);
  /**
   * For a button state, the user action that triggers it. For a
   * {@link MultiStateObject} state (which has no user actions), a plain
   * numeric identifier instead.
   */
  get statetype(): StateTypes | number;
  set statetype(value: StateTypes | number);
  /** Releases this state's appearance as an independent page item and removes the state from its parent object. */
  releaseAsObject(): void;
  /** Moves the state to a new position within its parent object's states collection. */
  move(newPosition: number): void;
  /** Adds page items to this state's artwork. */
  addItemsToState(pageitems: PageItem | PageItem[]): void;
  /** Deletes the state. */
  remove(): void;
}


/**
 * The broadcast proxy for {@link State} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link State} there.
 */
export interface StatePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (StateOwner)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<StatePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<StatePlural, 'plural'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): (string)[];
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'State';
  /** Resolves the proxy into the individual {@link State} objects it stands for. */
  getElements(): State[];
  /** The unique numeric ID of the state within its multi-state object. */
  readonly id: (number)[];
  /** {@link Ovals} (ellipses) directly in this state. */
  readonly ovals: Ovals<State>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this state. */
  readonly splineItems: SplineItems<State>;
  /** All {@link PageItem}s in this state regardless of type. */
  readonly pageItems: PageItems<State>;
  /** {@link Rectangles} directly in this state. */
  readonly rectangles: Rectangles<State>;
  /** {@link GraphicLines} directly in this state. */
  readonly graphicLines: GraphicLines<State>;
  /** {@link TextFrames} directly in this state. */
  readonly textFrames: TextFrames<State>;
  /** {@link Polygons} directly in this state. */
  readonly polygons: Polygons<State>;
  /** {@link EndnoteTextFrames} directly in this state. */
  readonly endnoteTextFrames: EndnoteTextFrames<State>;
  /** {@link Groups} directly in this state. */
  readonly groups: Groups<State>;
  /** {@link EPSTexts} directly in this state. */
  readonly epstexts: EPSTexts<State>;
  /** Bitmap {@link Images} (TIFF, JPEG, PNG, GIF…) directly in this state. */
  readonly images: Images<State>;
  /** Placed {@link Graphics} of any file format directly in this state. */
  readonly graphics: Graphics<State>;
  /** {@link EPSs} directly in this state. */
  readonly epss: EPSs<State>;
  /** {@link WMFs} directly in this state. */
  readonly wmfs: WMFs<State>;
  /** {@link PICTs} directly in this state. */
  readonly picts: PICTs<State>;
  /** {@link PDFs} directly in this state. */
  readonly pdfs: PDFs<State>;
  /** {@link SVGs} directly in this state. */
  readonly svgs: SVGs<State>;
  /** Whether this is the currently active/displayed state of its parent object. */
  get active(): (boolean)[];
  set active(value: boolean);
  /** Whether this state is enabled in exported PDFs. */
  get enabled(): (boolean)[];
  set enabled(value: boolean);
  /**
   * For a button state, the user action that triggers it. For a
   * {@link MultiStateObject} state (which has no user actions), a plain
   * numeric identifier instead.
   */
  get statetype(): (StateTypes | number)[];
  set statetype(value: StateTypes | number);
  /** Releases this state's appearance as an independent page item and removes the state from its parent object. */
  releaseAsObject(): (void)[];
  /** Moves the state to a new position within its parent object's states collection. */
  move(newPosition: number): (void)[];
  /** Adds page items to this state's artwork. */
  addItemsToState(pageitems: PageItem | PageItem[]): (void)[];
  /** Deletes the state. */
  remove(): (void)[];
}
