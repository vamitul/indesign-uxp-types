/**
 * ImportedPages.d.ts — indesign-uxp-types
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
import type { ImportedPage } from './ImportedPage';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of {@link ImportedPage} objects. These represent specific pages
 * from other InDesign documents that have been placed into the current document
 * layout.
 *
 * @collection ImportedPage
 */
export interface ImportedPages<TParent = PageItemParent>
  extends
    BaseCollection<ImportedPage<TParent>, ImportedPage, ImportedPage<TParent, 'plural'>>,
    IdCollection<ImportedPage<TParent>>,
    NamedCollection<ImportedPage<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'ImportedPages';

  /**
   * Creates a new imported page reference.
   * @param withProperties Initial values for properties of the new ImportedPage.
   */
  add(withProperties?: PropertiesSetter<ImportedPage>): ImportedPage<TParent>;
}
