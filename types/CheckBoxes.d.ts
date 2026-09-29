/**
 * CheckBoxes.d.ts — indesign-uxp-types
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
import type { CheckBox } from './CheckBox';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link CheckBox} page items. Checkboxes are interactive form
 * elements that allow users to toggle between two binary states (on/off).
 *
 * @collection CheckBox
 */
export interface CheckBoxes<TParent = PageItemParent>
  extends
    BaseCollection<CheckBox<TParent>, CheckBox, CheckBox<TParent, 'plural'>>,
    IdCollection<CheckBox<TParent>>,
    NamedCollection<CheckBox<TParent>>,
    AddablePageItemCollection<CheckBox<TParent>, CheckBox> {
  /** The object's DOM class name. */
  readonly constructorName: 'CheckBoxes';
}
