/**
 * HtmlItems.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  AddablePageItemCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { HtmlItem } from './HtmlItem';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link HtmlItem} page items. HTML items allow the embedding
 * of raw HTML code or web URLs directly onto an InDesign page, enabling rich
 * interactive content in digital exports.
 *
 * @collection HtmlItem
 */
export interface HtmlItems<TParent = PageItemParent>
  extends
    BaseCollection<HtmlItem<TParent>, HtmlItem, HtmlItem<TParent, 'plural'>>,
    IdCollection<HtmlItem<TParent>>,
    NamedCollection<HtmlItem<TParent>>,
    AddablePageItemCollection<HtmlItem<TParent>, HtmlItem> {
  /** The object's DOM class name. */
  readonly constructorName: 'HtmlItems';
}
