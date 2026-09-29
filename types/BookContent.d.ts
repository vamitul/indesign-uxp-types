/**
 * BookContent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Book } from './Book';
import type { BookContentStatus } from './Enums/BookContentStatus';
import type { LocationOptions } from './Enums/LocationOptions';
import type { File, Folder, FilePath } from './_base/Types';

/**
 * A single document entry inside a {@link Book}.
 */
export interface BookContent<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Book, M>,
    IndexedDOMObject<Book, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'BookContent';

  /** Resolves the proxy into the individual {@link BookContent} objects it stands for. */
  getElements(): BookContent<'single'>[];

  /** The name of the BookContent. */
  readonly name: Read<M, string>;

  /** The unique ID of the BookContent. */
  readonly id: Read<M, number>;

  /** The full path to the BookContent, including its name. */
  readonly fullName: Read<M, Promise<File>>;

  /** The status of the book content file (up to date, modified, missing, and so on). */
  readonly status: Read<M, BookContentStatus>;

  /** The size of the BookContent file, in bytes. */
  readonly size: Read<M, number>;

  /** The date and time the BookContent was created. */
  readonly date: Read<M, Date>;

  /** The page range of the book content within the book. */
  readonly documentPageRange: Read<M, string>;

  /** The folder that contains the book content's file. */
  readonly filePath: Read<M, Promise<Folder>>;

  /**
   * Preflights this book content and optionally saves the resulting report.
   * @param autoOpen If `true`, automatically opens the report after creation. Defaults to `false`.
   */
  preflight(to?: FilePath, autoOpen?: boolean): Read<M, void>;

  /**
   * Moves this book content relative to another reference object within the book.
   * @param reference The reference object. Required when `to` specifies `BEFORE` or `AFTER`.
   */
  move(to?: LocationOptions, reference?: BookContent): Read<M, BookContent>;

  /** Removes this book content from the book. */
  remove(): Read<M, void>;

  /**
   * Replaces this book content with a new file. If the new file replaces the
   * current {@link Book.styleSourceDocument}, it becomes the new style source.
   */
  replace(using: FilePath): Read<M, BookContent>;

  /** Matches the formatting of this book content to {@link Book.styleSourceDocument}. */
  synchronize(): Read<M, void>;
}
