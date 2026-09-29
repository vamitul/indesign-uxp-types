/**
 * MetadataPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FilePath } from './_base/Types';
import type { Document } from './Document';
import type { ContainerType } from './Enums/ContainerType';
import type { CopyrightStatus } from './Enums/CopyrightStatus';
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
 * The document's XMP metadata — author, copyright, keywords, title — plus generic
 * access to any XMP property by namespace and path, and sync with an external
 * metadata file.
 */
export interface MetadataPreference {
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
  get properties(): PropertiesGetter<MetadataPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<MetadataPreference, 'single'>);
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
  readonly constructorName: 'MetadataPreference';
  /** Resolves the proxy into the individual {@link MetadataPreference} objects it stands for. */
  getElements(): MetadataPreference[];
  /** The location of the document on the asset management server. */
  readonly serverURL: string;
  /** The most recent modification date of the document. */
  readonly modificationDate: Date;
  /** The creation date of the document. */
  readonly creationDate: Date;
  /** The name of the application used to create the document. */
  readonly creator: string;
  /** The format of the document. */
  readonly format: string;
  /** The author of the document. */
  get author(): string;
  set author(value: string);
  /** The document's description, as stored in its XMP metadata. */
  get description(): string;
  set description(value: string);
  /** A production job identifier carried in the document's XMP metadata, shown in File Info.
   * Free text that InDesign stores and never acts on. */
  get jobName(): string;
  set jobName(value: string);
  /** The copyright status of the document. */
  get copyrightStatus(): CopyrightStatus;
  set copyrightStatus(value: CopyrightStatus);
  /** The text to use as a copyright notice. */
  get copyrightNotice(): string;
  set copyrightNotice(value: string);
  /** The URL of the file that contains the linked copyright statement. */
  get copyrightInfoURL(): string;
  set copyrightInfoURL(value: string);
  /** The list of keywords associated with the document. */
  get keywords(): string[];
  set keywords(value: string[]);
  /** The title of the document. */
  get documentTitle(): string;
  set documentTitle(value: string);
  /**
   * Saves the metadata in the document to an external file.
   * @param to The path to the external file.
   */
  save(to: FilePath): void;
  /**
   * Replaces the current metadata in the document with metadata from the specified file.
   * @param using The full path to the file that contains the replacement metadata.
   * @param affectAll If true, treats all properties as external. Note: Defaults to false.
   */
  replace(using: FilePath, affectAll?: boolean): void;
  /**
   * Uses metadata from the specified external file to define any undefined metadata properties in the document.
   * @param from The path to the external file that contains the metadata.
   * @param affectAll If true, also replaces existing metadata with data from the external file. If false, does not replace existing metadata. Note: Defaults to false.
   */
  append(from: FilePath, affectAll?: boolean): void;
  /**
   * Gets the XMP property value associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path.
   */
  getProperty(namespace: string, path: string): string;
  /**
   * Sets the XMP property associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path(s).
   * @param value The value to assign to the property. Note: To remove the property, pass an empty string.
   */
  setProperty(namespace: string, path: string, value: string): void;
  /**
   * Creates an empty container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   * @param index The index of the item within the container. Specified values must be 1 or greater. To append the item to the end of the index and allow the next available value to be assigned, use 0.
   * @param container The container type. Note: Required when the new item is the first item added to the container.
   */
  createContainerItem(namespace: string, path: string, index?: number, container?: ContainerType): void;
  /**
   * Counts the number of items in the container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   */
  countContainer(namespace: string, path: string): number;
}


/**
 * The broadcast proxy for {@link MetadataPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link MetadataPreference} there.
 */
export interface MetadataPreferencePlural {
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
  get properties(): (PropertiesGetter<MetadataPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<MetadataPreferencePlural, 'plural'>);
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
  readonly constructorName: 'MetadataPreference';
  /** Resolves the proxy into the individual {@link MetadataPreference} objects it stands for. */
  getElements(): MetadataPreference[];
  /** The location of the document on the asset management server. */
  readonly serverURL: (string)[];
  /** The most recent modification date of the document. */
  readonly modificationDate: (Date)[];
  /** The creation date of the document. */
  readonly creationDate: (Date)[];
  /** The name of the application used to create the document. */
  readonly creator: (string)[];
  /** The format of the document. */
  readonly format: (string)[];
  /** The author of the document. */
  get author(): (string)[];
  set author(value: string);
  /** The document's description, as stored in its XMP metadata. */
  get description(): (string)[];
  set description(value: string);
  /** A production job identifier carried in the document's XMP metadata, shown in File Info.
   * Free text that InDesign stores and never acts on. */
  get jobName(): (string)[];
  set jobName(value: string);
  /** The copyright status of the document. */
  get copyrightStatus(): (CopyrightStatus)[];
  set copyrightStatus(value: CopyrightStatus);
  /** The text to use as a copyright notice. */
  get copyrightNotice(): (string)[];
  set copyrightNotice(value: string);
  /** The URL of the file that contains the linked copyright statement. */
  get copyrightInfoURL(): (string)[];
  set copyrightInfoURL(value: string);
  /** The list of keywords associated with the document. */
  get keywords(): (string[])[];
  set keywords(value: string[]);
  /** The title of the document. */
  get documentTitle(): (string)[];
  set documentTitle(value: string);
  /**
   * Saves the metadata in the document to an external file.
   * @param to The path to the external file.
   */
  save(to: FilePath): (void)[];
  /**
   * Replaces the current metadata in the document with metadata from the specified file.
   * @param using The full path to the file that contains the replacement metadata.
   * @param affectAll If true, treats all properties as external. Note: Defaults to false.
   */
  replace(using: FilePath, affectAll?: boolean): (void)[];
  /**
   * Uses metadata from the specified external file to define any undefined metadata properties in the document.
   * @param from The path to the external file that contains the metadata.
   * @param affectAll If true, also replaces existing metadata with data from the external file. If false, does not replace existing metadata. Note: Defaults to false.
   */
  append(from: FilePath, affectAll?: boolean): (void)[];
  /**
   * Gets the XMP property value associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path.
   */
  getProperty(namespace: string, path: string): (string)[];
  /**
   * Sets the XMP property associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path(s).
   * @param value The value to assign to the property. Note: To remove the property, pass an empty string.
   */
  setProperty(namespace: string, path: string, value: string): (void)[];
  /**
   * Creates an empty container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   * @param index The index of the item within the container. Specified values must be 1 or greater. To append the item to the end of the index and allow the next available value to be assigned, use 0.
   * @param container The container type. Note: Required when the new item is the first item added to the container.
   */
  createContainerItem(namespace: string, path: string, index?: number, container?: ContainerType): (void)[];
  /**
   * Counts the number of items in the container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   */
  countContainer(namespace: string, path: string): (number)[];
}
