/**
 * AngleEditboxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { AngleEditbox } from './AngleEditbox';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link AngleEditbox} objects within an InDesign {@link Dialog}.
 * These UI controls allow users to input or edit angular values in degrees.
 *
 * @collection AngleEditbox
 */
export interface AngleEditboxes
  extends BaseCollection<AngleEditbox, AngleEditbox, AngleEditbox<'plural'>>, IdCollection<AngleEditbox> {
  /** The object's DOM class name. */
  readonly constructorName: 'AngleEditboxes';

  /**
   * Creates and adds a new angle editbox control to the dialog.
   * @param withProperties Initial values for properties of the new control.
   */
  add(withProperties?: PropertiesSetter<AngleEditbox>): AngleEditbox;
}
