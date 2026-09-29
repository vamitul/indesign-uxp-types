/**
 * DomObjects.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Event } from '../Event';
import type { PropertiesGetter, PropertiesSetter } from './Properties';

import type { EventListeners } from '../EventListeners';
import type { Events } from '../Events';
import type { EventListener } from '../EventListener';
import type { FilePath, Mode, Read } from './Types';
import type { EventString, EventHandler, InDesignEventMap } from './Events';
import type { Application } from '../Application';
import type { Font } from '../Font';
import type { MasterSpread } from '../MasterSpread';
import type { Page } from '../Page';
import type { BaseCollection } from './Collections';
import type { Document } from '../Document';

/**
 * Every InDesign DOM object provides these members: whether it still exists
 * ({@link isValid}), its parent in the object hierarchy, bulk property
 * read/write via {@link properties}, and identity comparison via {@link equals}.
 */
export interface InDesignDOMObject<Parent, M extends Mode = 'single'> {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;

  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Read<M, Parent>;

  /**
   * The class name or constructor name of the object as a string (e.g., "Document", "Rectangle").
   */
  readonly constructorName: string;

  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): Read<M, PropertiesGetter<this, M>>;

  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<this, M>);

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
}

/* ---- Traits ----------------------------------------------------------------
   Composable slices of the DOM object surface. A class extends exactly the ones
   the runtime gives it, rather than a single fat base.
---------------------------------------------------------------------------- */

/**
 * An object that occupies a numbered slot in its parent's collection.
 *
 * `Preference` and `Application` are the only root objects that are not
 * indexable — everything else reachable from a collection carries an index.
 */
export interface IndexedDOMObject<Parent, M extends Mode = 'single'> extends InDesignDOMObject<Parent, M> {
  /**
   * The index of the object within its containing parent.
   */
  readonly index: Read<M, number>;
}


/**
 * An object whose name you can assign — a swatch, a style, a layer, a page item.
 *
 * Whether a duplicate is allowed depends on the class. Swatches, styles, layers and
 * conditions reject one: assigning a name already in use throws, and so does `add()`.
 * Page items accept duplicates freely, and `itemByName` then resolves to one of them —
 * not necessarily the first. An empty name throws for swatches, styles and conditions;
 * layers and page items accept it.
 */
export interface NamableDOMObject<Parent, M extends Mode = 'single'> extends InDesignDOMObject<Parent, M> {
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): Read<M, string>;
  set name(value: string);
}

/**
 * A named object whose name InDesign owns.
 *
 * The name is derived rather than assigned — a {@link Font}'s comes from the
 * font file, a {@link Page}'s from its section numbering, a {@link MasterSpread}'s
 * from its prefix and base name.
 */
export interface ReadonlyNamedDOMObject<Parent, M extends Mode = 'single'> extends InDesignDOMObject<Parent, M> {
  /** The object's name. Derived by InDesign and not assignable. */
  readonly name: Read<M, string>;
}

/**
 * An object that participates in the DOM event system.
 *
 * Events bubble up the parent chain, so a listener on the {@link Application}
 * or {@link Document} sees events raised on the objects beneath it.
 */
export interface EventTargetDOMObject<Parent, M extends Mode = 'single'> extends InDesignDOMObject<Parent, M> {
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
}




/**
 * An object carrying a script label — arbitrary string data that persists in the
 * document and survives round-tripping through IDML.
 *
 * {@link label} is the single free-form slot; {@link insertLabel} and
 * {@link extractLabel} store several key/value pairs inside it without
 * colliding. Visible to the user in the Script Label panel.
 */
export interface LabelableDOMObject<Parent, M extends Mode = 'single'> extends InDesignDOMObject<Parent, M> {
  /**
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): Read<M, string>;
  set label(value: string);

  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): Read<M, void>;

  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): Read<M, string>;
}

/**
 * Both an event target and script-labelable — the combination almost every
 * document-resident object has.
 *
 * {@link EventListener} is labelable without being an event target itself.
 */
export interface LabelableEventDOMObject<Parent, M extends Mode = 'single'>
  extends EventTargetDOMObject<Parent, M>,
    LabelableDOMObject<Parent, M> {}

export type { EventString, EventHandler, InDesignEventMap } from './Events';
