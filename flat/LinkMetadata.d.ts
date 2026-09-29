/**
 * LinkMetadata.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Link } from './Link';
import type { CopyrightStatus } from './Enums/CopyrightStatus';
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
 * Read-only metadata read from a {@link Link}'s source file — author, keywords,
 * copyright, and creation/modification dates, drawn from the file's XMP data.
 */
export interface LinkMetadata {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Link;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<LinkMetadata, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<LinkMetadata, 'single'>);
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
  readonly constructorName: 'LinkMetadata';
  /** Resolves the proxy into the individual {@link LinkMetadata} objects it stands for. */
  getElements(): LinkMetadata[];
  /** The author of the document. */
  readonly author: string;
  /** The description of the LinkMetadata. */
  readonly description: string;
  /** The production job identifier recorded in the linked file's own XMP metadata. */
  readonly jobName: string;
  /** The copyright status of the document. */
  readonly copyrightStatus: CopyrightStatus;
  /** The text to use as a copyright notice. */
  readonly copyrightNotice: string;
  /** The URL of the file that contains the linked copyright statement. */
  readonly copyrightInfoURL: string;
  /** The list of keywords associated with the document. */
  readonly keywords: string[];
  /** The location of the document on the asset management server. */
  readonly serverURL: string;
  /** The most recent modification date of the document. */
  readonly modificationDate: Date;
  /** The creation date of the document. */
  readonly creationDate: Date;
  /** The title of the document. */
  readonly documentTitle: string;
  /** The name of the application used to create the document. */
  readonly creator: string;
  /** The format of the document. */
  readonly format: string;
  /**
   * Gets the XMP property value associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path.
   */
  getProperty(namespace: string, path: string): string;
  /**
   * Counts the number of items in the container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   */
  countContainer(namespace: string, path: string): number;
}


/**
 * The broadcast proxy for {@link LinkMetadata} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link LinkMetadata} there.
 */
export interface LinkMetadataPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Link)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<LinkMetadataPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<LinkMetadataPlural, 'plural'>);
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
  readonly constructorName: 'LinkMetadata';
  /** Resolves the proxy into the individual {@link LinkMetadata} objects it stands for. */
  getElements(): LinkMetadata[];
  /** The author of the document. */
  readonly author: (string)[];
  /** The description of the LinkMetadata. */
  readonly description: (string)[];
  /** The production job identifier recorded in the linked file's own XMP metadata. */
  readonly jobName: (string)[];
  /** The copyright status of the document. */
  readonly copyrightStatus: (CopyrightStatus)[];
  /** The text to use as a copyright notice. */
  readonly copyrightNotice: (string)[];
  /** The URL of the file that contains the linked copyright statement. */
  readonly copyrightInfoURL: (string)[];
  /** The list of keywords associated with the document. */
  readonly keywords: (string[])[];
  /** The location of the document on the asset management server. */
  readonly serverURL: (string)[];
  /** The most recent modification date of the document. */
  readonly modificationDate: (Date)[];
  /** The creation date of the document. */
  readonly creationDate: (Date)[];
  /** The title of the document. */
  readonly documentTitle: (string)[];
  /** The name of the application used to create the document. */
  readonly creator: (string)[];
  /** The format of the document. */
  readonly format: (string)[];
  /**
   * Gets the XMP property value associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path.
   */
  getProperty(namespace: string, path: string): (string)[];
  /**
   * Counts the number of items in the container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   */
  countContainer(namespace: string, path: string): (number)[];
}
