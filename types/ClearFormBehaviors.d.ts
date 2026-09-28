/**
 * ClearFormBehaviors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { ClearFormBehavior } from './ClearFormBehavior';

/**
 * A collection of {@link ClearFormBehavior} objects. This behavior is applied
 * to interactive elements (like buttons) to trigger the clearing of all user
 * data from the fields in a PDF form.
 *
 * @collection ClearFormBehavior
 */
export interface ClearFormBehaviors
  extends
    BaseCollection<ClearFormBehavior, ClearFormBehavior, ClearFormBehavior<'plural'>>,
    IdCollection<ClearFormBehavior>,
    NamedCollection<ClearFormBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'ClearFormBehaviors';

  /**
   * Creates a new clear form behavior.
   * @param withProperties Initial values for properties of the new {@link ClearFormBehavior}.
   */
  add(withProperties?: PropertiesSetter<ClearFormBehavior>): ClearFormBehavior;
}
