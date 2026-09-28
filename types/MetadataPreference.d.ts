/**
 * MetadataPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FilePath } from './_base/Types';
import type { Document } from './Document';
import type { ContainerType } from './Enums/ContainerType';
import type { CopyrightStatus } from './Enums/CopyrightStatus';

/**
 * The document's XMP metadata — author, copyright, keywords, title — plus generic
 * access to any XMP property by namespace and path, and sync with an external
 * metadata file.
 */
export interface MetadataPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MetadataPreference';

  /** Resolves the proxy into the individual {@link MetadataPreference} objects it stands for. */
  getElements(): MetadataPreference<'single'>[];

  /** The location of the document on the asset management server. */
  readonly serverURL: Read<M, string>;

  /** The most recent modification date of the document. */
  readonly modificationDate: Read<M, Date>;

  /** The creation date of the document. */
  readonly creationDate: Read<M, Date>;

  /** The name of the application used to create the document. */
  readonly creator: Read<M, string>;

  /** The format of the document. */
  readonly format: Read<M, string>;

  /** The author of the document. */
  get author(): Read<M, string>;
  set author(value: string);

  /** The document's description, as stored in its XMP metadata. */
  get description(): Read<M, string>;
  set description(value: string);

  /** A production job identifier carried in the document's XMP metadata, shown in File Info.
   * Free text that InDesign stores and never acts on. */
  get jobName(): Read<M, string>;
  set jobName(value: string);

  /** The copyright status of the document. */
  get copyrightStatus(): Read<M, CopyrightStatus>;
  set copyrightStatus(value: CopyrightStatus);

  /** The text to use as a copyright notice. */
  get copyrightNotice(): Read<M, string>;
  set copyrightNotice(value: string);

  /** The URL of the file that contains the linked copyright statement. */
  get copyrightInfoURL(): Read<M, string>;
  set copyrightInfoURL(value: string);

  /** The list of keywords associated with the document. */
  get keywords(): Read<M, string[]>;
  set keywords(value: string[]);

  /** The title of the document. */
  get documentTitle(): Read<M, string>;
  set documentTitle(value: string);

  /**
   * Saves the metadata in the document to an external file.
   * @param to The path to the external file.
   */
  save(to: FilePath): Read<M, void>;

  /**
   * Replaces the current metadata in the document with metadata from the specified file.
   * @param using The full path to the file that contains the replacement metadata.
   * @param affectAll If true, treats all properties as external. Note: Defaults to false.
   */
  replace(using: FilePath, affectAll?: boolean): Read<M, void>;

  /**
   * Uses metadata from the specified external file to define any undefined metadata properties in the document.
   * @param from The path to the external file that contains the metadata.
   * @param affectAll If true, also replaces existing metadata with data from the external file. If false, does not replace existing metadata. Note: Defaults to false.
   */
  append(from: FilePath, affectAll?: boolean): Read<M, void>;

  /**
   * Gets the XMP property value associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path.
   */
  getProperty(namespace: string, path: string): Read<M, string>;

  /**
   * Sets the XMP property associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path(s).
   * @param value The value to assign to the property. Note: To remove the property, pass an empty string.
   */
  setProperty(namespace: string, path: string, value: string): Read<M, void>;

  /**
   * Creates an empty container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   * @param index The index of the item within the container. Specified values must be 1 or greater. To append the item to the end of the index and allow the next available value to be assigned, use 0.
   * @param container The container type. Note: Required when the new item is the first item added to the container.
   */
  createContainerItem(namespace: string, path: string, index?: number, container?: ContainerType): Read<M, void>;

  /**
   * Counts the number of items in the container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   */
  countContainer(namespace: string, path: string): Read<M, number>;
}
