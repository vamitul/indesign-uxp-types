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

/**
 * Read-only metadata read from a {@link Link}'s source file — author, keywords,
 * copyright, and creation/modification dates, drawn from the file's XMP data.
 */
export interface LinkMetadata<M extends Mode = 'single'> extends EventTargetDOMObject<Link, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'LinkMetadata';

  /** Resolves the proxy into the individual {@link LinkMetadata} objects it stands for. */
  getElements(): LinkMetadata<'single'>[];

  /** The author of the document. */
  readonly author: Read<M, string>;

  /** The description of the LinkMetadata. */
  readonly description: Read<M, string>;

  /** The production job identifier recorded in the linked file's own XMP metadata. */
  readonly jobName: Read<M, string>;

  /** The copyright status of the document. */
  readonly copyrightStatus: Read<M, CopyrightStatus>;

  /** The text to use as a copyright notice. */
  readonly copyrightNotice: Read<M, string>;

  /** The URL of the file that contains the linked copyright statement. */
  readonly copyrightInfoURL: Read<M, string>;

  /** The list of keywords associated with the document. */
  readonly keywords: Read<M, string[]>;

  /** The location of the document on the asset management server. */
  readonly serverURL: Read<M, string>;

  /** The most recent modification date of the document. */
  readonly modificationDate: Read<M, Date>;

  /** The creation date of the document. */
  readonly creationDate: Read<M, Date>;

  /** The title of the document. */
  readonly documentTitle: Read<M, string>;

  /** The name of the application used to create the document. */
  readonly creator: Read<M, string>;

  /** The format of the document. */
  readonly format: Read<M, string>;

  /**
   * Gets the XMP property value associated with the specified path.
   * @param namespace The namespace of the property.
   * @param path The specified path.
   */
  getProperty(namespace: string, path: string): Read<M, string>;

  /**
   * Counts the number of items in the container.
   * @param namespace The namespace of the container.
   * @param path The path to the container.
   */
  countContainer(namespace: string, path: string): Read<M, number>;
}
