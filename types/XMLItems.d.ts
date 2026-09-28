/**
 * XMLItems.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { XMLItem } from './XMLItem';

/**
 * A collection of generic {@link XMLItem} objects. This is the base collection
 * for all XML-related nodes in the document's logical structure, including
 * elements, comments, and processing instructions.
 *
 * @collection XMLItem
 */
export interface XMLItems
  extends BaseCollection<XMLItem, XMLItem, XMLItem<'plural'>>, IdCollection<XMLItem> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLItems';
}
