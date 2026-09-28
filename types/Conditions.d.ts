/**
 * Conditions.d.ts — indesign-uxp-types
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
import type { Condition } from './Condition';

/**
 * A collection of {@link Condition} objects defined in the document or application.
 *
 * Conditions are used to categorize and control the visibility of text ranges within a
 * document, enabling features like multi-language versions or optional content blocks
 * within a single layout.
 * @collection Condition
 */
export interface Conditions
  extends
    BaseCollection<Condition, Condition, Condition<'plural'>>,
    IdCollection<Condition>,
    NamedCollection<Condition> {
  /** The object's DOM class name. */
  readonly constructorName: 'Conditions';

  /**
   * Creates a new {@link Condition}.
   * @param withProperties Initial values for properties of the new {@link Condition}.
   */
  add(withProperties?: PropertiesSetter<Condition>): Condition;
}
