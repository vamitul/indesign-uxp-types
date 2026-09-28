/**
 * BookContents.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { FilePath } from './_base/Types';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { BookContent } from './BookContent';
import type { PropertiesSetter } from './_base/Properties';
import type { Book } from './Book';

/**
 * A collection of {@link BookContent} objects within a {@link Book}. Each
 * content object represents an individual InDesign document (.indd) that is
 * part of the book's sequence.
 *
 * @collection BookContent
 */
export interface BookContents
  extends
    BaseCollection<BookContent, BookContent, BookContent<'plural'>>,
    IdCollection<BookContent>,
    NamedCollection<BookContent> {
  /** The object's DOM class name. */
  readonly constructorName: 'BookContents';

  /**
   * Adds an InDesign document to the book.
   *
   * @param fullName The full file system path to the InDesign (.indd) file.
   * @param at The index at which to insert the document into the book's sequence. Defaults to `-1`, which appends it to the end.
   * @param withProperties Initial values for properties of the new BookContent.
   */
  add(
    fullName: FilePath,
    at?: number,
    withProperties?: PropertiesSetter<BookContent>,
  ): BookContent;
}
