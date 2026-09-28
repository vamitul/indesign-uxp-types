/**
 * TextVariables.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { TextVariable } from './TextVariable';

/**
 * A collection of {@link TextVariable} objects in an InDesign document.
 *
 * Text variables are dynamic text elements—such as page numbers, dates, or metadata—that
 * update automatically to reflect the current state of the document or its environment.
 * @collection TextVariable
 */
export interface TextVariables
  extends BaseCollection<TextVariable, TextVariable, TextVariable<'plural'>>, NamedCollection<TextVariable> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextVariables';

  /**
   * Creates a new text variable.
   *
   * * **Duplicate Names:** If a variable with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param withProperties Initial values for properties of the new variable.
   */
  add(withProperties?: PropertiesSetter<TextVariable>): TextVariable;
}
