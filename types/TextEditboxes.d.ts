/**
 * TextEditboxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { TextEditbox } from './TextEditbox';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link TextEditbox} objects within an InDesign {@link Dialog}.
 * These UI controls allow users to input or edit single-line text values.
 *
 * @collection TextEditbox
 */
export interface TextEditboxes
  extends BaseCollection<TextEditbox, TextEditbox, TextEditbox<'plural'>>, IdCollection<TextEditbox> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextEditboxes';

  /**
   * Creates and adds a new text editbox control to the dialog.
   * @param withProperties Initial values for properties of the new control.
   */
  add(withProperties?: PropertiesSetter<TextEditbox>): TextEditbox;
}
