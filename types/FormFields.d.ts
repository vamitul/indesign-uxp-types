/**
 * FormFields.d.ts — indesign-uxp-types
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
import type { FormField } from './FormField';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of interactive {@link FormField} objects—including buttons,
 * checkboxes, text fields, and list boxes—used to create interactive PDF forms.
 *
 * @collection FormField
 */
export interface FormFields<TParent = PageItemParent>
  extends
    BaseCollection<FormField<TParent>, FormField, FormField<TParent, PageItemParent, 'plural'>>,
    IdCollection<FormField<TParent>>,
    NamedCollection<FormField<TParent>>,
    AddablePageItemCollection<FormField<TParent>, FormField> {
  /** The object's DOM class name. */
  readonly constructorName: 'FormFields';
}
