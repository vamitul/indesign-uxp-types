/**
 * StaticTexts.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { StaticText } from './StaticText';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link StaticText} objects within an InDesign {@link Dialog}.
 * Static text represents labels, instructions, or descriptive prose that provides
 * context within the dialog UI and cannot be edited by the user.
 *
 * @collection StaticText
 */
export interface StaticTexts
  extends BaseCollection<StaticText, StaticText, StaticText<'plural'>>, IdCollection<StaticText> {
  /** The object's DOM class name. */
  readonly constructorName: 'StaticTexts';

  /**
   * Creates and adds a new static text control to the dialog.
   * @param withProperties Initial values for properties of the new control.
   */
  add(withProperties?: PropertiesSetter<StaticText>): StaticText;
}
