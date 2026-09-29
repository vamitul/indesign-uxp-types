/**
 * Libraries.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { FilePath } from './_base/Types';
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { Library } from './Library';

/**
 * A collection of currently open {@link Library} objects. Object libraries
 * (.indl files) provide a persistent and searchable storage for reusable assets
 * such as graphics, text, or groups.
 *
 * @collection Library
 */
export interface Libraries
  extends BaseCollection<Library, Library, Library<'plural'>>, NamedCollection<Library> {
  /** The object's DOM class name. */
  readonly constructorName: 'Libraries';

  /**
   * Creates or opens an object library.
   *
   * @param fullName The full file system path to the library (.indl) file.
   * @param withProperties Initial values for properties of the new Library.
   */
  add(fullName: FilePath, withProperties?: PropertiesSetter<Library>): Library;
}
