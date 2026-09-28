/**
 * RadioButtons.d.ts — indesign-uxp-types
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
import type { RadioButton } from './RadioButton';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link RadioButton} page items. Radio buttons are interactive
 * form elements typically organized into groups, where the user can select only
 * one option from the set.
 *
 * @collection RadioButton
 */
export interface RadioButtons<TParent = PageItemParent>
  extends
    BaseCollection<RadioButton<TParent>, RadioButton, RadioButton<TParent, 'plural'>>,
    IdCollection<RadioButton<TParent>>,
    NamedCollection<RadioButton<TParent>>,
    AddablePageItemCollection<RadioButton<TParent>, RadioButton> {
  /** The object's DOM class name. */
  readonly constructorName: 'RadioButtons';
}
