/**
 * Bookmarks.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Bookmark } from './Bookmark';
import type { HyperlinkTextDestination } from './HyperlinkTextDestination';
import type { HyperlinkPageDestination } from './HyperlinkPageDestination';
import type { HyperlinkExternalPageDestination } from './HyperlinkExternalPageDestination';
import type { Page } from './Page';

/**
 * A collection of {@link Bookmark} objects. Bookmarks provide a hierarchical
 * navigational structure for PDF exports, linking to specific pages or text
 * destinations within the document.
 *
 * @collection Bookmark
 */
export interface Bookmarks
  extends
    BaseCollection<Bookmark, Bookmark, Bookmark<'plural'>>,
    IdCollection<Bookmark>,
    NamedCollection<Bookmark> {
  /** The object's DOM class name. */
  readonly constructorName: 'Bookmarks';

  /**
   * Creates a new bookmark pointing to a specific destination.
   *
   * @param destination The target location for the bookmark.
   * @param withProperties Initial values for properties of the new Bookmark.
   */
  add(
    destination:
      | HyperlinkTextDestination
      | HyperlinkPageDestination
      | HyperlinkExternalPageDestination
      | Page,
    withProperties?: PropertiesSetter<Bookmark>,
  ): Bookmark;
}
