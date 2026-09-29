/**
 * ComboBoxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  AddablePageItemCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { ComboBox } from './ComboBox';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link ComboBox} page items. ComboBoxes are interactive form
 * elements that provide a dropdown list of options along with an editable text field.
 *
 * @collection ComboBox
 */
export interface ComboBoxes<TParent = PageItemParent>
  extends
    BaseCollection<ComboBox<TParent>, ComboBox, ComboBox<TParent, 'plural'>>,
    IdCollection<ComboBox<TParent>>,
    NamedCollection<ComboBox<TParent>>,
    AddablePageItemCollection<ComboBox<TParent>, ComboBox> {
  /** The object's DOM class name. */
  readonly constructorName: 'ComboBoxes';
}
