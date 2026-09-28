/**
 * ListBoxes.d.ts — indesign-uxp-types
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
import type { ListBox } from './ListBox';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link ListBox} page items. List boxes are interactive
 * form elements that display a scrollable list of selectable options to the user.
 *
 * @collection ListBox
 */
export interface ListBoxes<TParent = PageItemParent>
  extends
    BaseCollection<ListBox<TParent>, ListBox, ListBox<TParent, 'plural'>>,
    IdCollection<ListBox<TParent>>,
    NamedCollection<ListBox<TParent>>,
    AddablePageItemCollection<ListBox<TParent>, ListBox> {
  /** The object's DOM class name. */
  readonly constructorName: 'ListBoxes';
}
