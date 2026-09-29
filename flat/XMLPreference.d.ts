/**
 * XMLPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { UIColors } from './Enums/UIColors';
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
 * Default tag names and colors InDesign assigns automatically to new story, table,
 * cell, and image elements, and whether an element is removed along with the
 * content it tags.
 */
export interface XMLPreference {
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
  get properties(): PropertiesGetter<XMLPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<XMLPreference, 'single'>);
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
  readonly constructorName: 'XMLPreference';
  /** Resolves the proxy into the individual {@link XMLPreference} objects it stands for. */
  getElements(): XMLPreference[];
  /** The preference for deleting the element when deleting the associated content like a page item or a text fragment. */
  get deleteElementOnContentDeletion(): boolean;
  set deleteElementOnContentDeletion(value: boolean);
  /** The name of the default tag to use for new story elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultStoryTagName(): string;
  set defaultStoryTagName(value: string);
  /**
   * The color of the default story tag, specified either as an array of three doubles, each
   * in the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Notes: Valid only when default story tag name value creates a new tag. Does not update
   * the color of an existing tag.
   */
  get defaultStoryTagColor(): number[] | UIColors;
  set defaultStoryTagColor(value: number[] | UIColors);
  /** The name of the default tag to use for new table elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultTableTagName(): string;
  set defaultTableTagName(value: string);
  /**
   * The color of the default table tag, specified either as an array of three doubles, each
   * in the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Notes: Valid only when default table tag name value creates a new tag. Does not update
   * the color of an existing tag.
   */
  get defaultTableTagColor(): number[] | UIColors;
  set defaultTableTagColor(value: number[] | UIColors);
  /** The name of the default tag to use for new table cell elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultCellTagName(): string;
  set defaultCellTagName(value: string);
  /**
   * The color of the default cell tag, specified either as an array of three doubles, each in
   * the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Note: Valid only when default cell tag name value creates a new tag. Does not update the
   * color of an existing tag.
   */
  get defaultCellTagColor(): number[] | UIColors;
  set defaultCellTagColor(value: number[] | UIColors);
  /** The default name for new image elements created automatically. */
  get defaultImageTagName(): string;
  set defaultImageTagName(value: string);
  /** The color to give a new image tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Used only when the tag needs to be created. */
  get defaultImageTagColor(): number[] | UIColors;
  set defaultImageTagColor(value: number[] | UIColors);
}


/**
 * The broadcast proxy for {@link XMLPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link XMLPreference} there.
 */
export interface XMLPreferencePlural {
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
  get properties(): (PropertiesGetter<XMLPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<XMLPreferencePlural, 'plural'>);
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
  readonly constructorName: 'XMLPreference';
  /** Resolves the proxy into the individual {@link XMLPreference} objects it stands for. */
  getElements(): XMLPreference[];
  /** The preference for deleting the element when deleting the associated content like a page item or a text fragment. */
  get deleteElementOnContentDeletion(): (boolean)[];
  set deleteElementOnContentDeletion(value: boolean);
  /** The name of the default tag to use for new story elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultStoryTagName(): (string)[];
  set defaultStoryTagName(value: string);
  /**
   * The color of the default story tag, specified either as an array of three doubles, each
   * in the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Notes: Valid only when default story tag name value creates a new tag. Does not update
   * the color of an existing tag.
   */
  get defaultStoryTagColor(): (number[] | UIColors)[];
  set defaultStoryTagColor(value: number[] | UIColors);
  /** The name of the default tag to use for new table elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultTableTagName(): (string)[];
  set defaultTableTagName(value: string);
  /**
   * The color of the default table tag, specified either as an array of three doubles, each
   * in the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Notes: Valid only when default table tag name value creates a new tag. Does not update
   * the color of an existing tag.
   */
  get defaultTableTagColor(): (number[] | UIColors)[];
  set defaultTableTagColor(value: number[] | UIColors);
  /** The name of the default tag to use for new table cell elements. Note: Either specifies an existing tag or creates a new tag. */
  get defaultCellTagName(): (string)[];
  set defaultCellTagName(value: string);
  /**
   * The color of the default cell tag, specified either as an array of three doubles, each in
   * the range 0 to 255 and representing R, G, and B values, or as a UI color.
   *
   * Note: Valid only when default cell tag name value creates a new tag. Does not update the
   * color of an existing tag.
   */
  get defaultCellTagColor(): (number[] | UIColors)[];
  set defaultCellTagColor(value: number[] | UIColors);
  /** The default name for new image elements created automatically. */
  get defaultImageTagName(): (string)[];
  set defaultImageTagName(value: string);
  /** The color to give a new image tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Note: Used only when the tag needs to be created. */
  get defaultImageTagColor(): (number[] | UIColors)[];
  set defaultImageTagColor(value: number[] | UIColors);
}
