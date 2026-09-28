/**
 * Books.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { FilePath } from './_base/Types';
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { Book } from './Book';

/**
 * A collection of {@link Book} objects. Books (.indb files) allow you to group
 * multiple InDesign documents together to synchronize styles, manage sequential
 * page numbering, and unified output.
 *
 * @collection Book
 */
export interface Books extends BaseCollection<Book, Book, Book<'plural'>>, NamedCollection<Book> {
  /** The object's DOM class name. */
  readonly constructorName: 'Books';

  /**
   * Creates or opens a book.
   *
   * @param fullName The full file system path to the book (.indb) file.
   * @param withProperties Initial values for properties of the new Book.
   */
  add(fullName: FilePath, withProperties?: PropertiesSetter<Book>): Book;
}
