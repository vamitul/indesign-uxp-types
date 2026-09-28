/**
 * PrintFormBehaviors.d.ts — indesign-uxp-types
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
import type { PrintFormBehavior } from './PrintFormBehavior';

/**
 * A collection of {@link PrintFormBehavior} objects. This behavior is applied
 * to interactive elements (like buttons) to trigger the printing of the current
 * document or form.
 *
 * @collection PrintFormBehavior
 */
export interface PrintFormBehaviors
  extends
    BaseCollection<PrintFormBehavior, PrintFormBehavior, PrintFormBehavior<'plural'>>,
    IdCollection<PrintFormBehavior>,
    NamedCollection<PrintFormBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'PrintFormBehaviors';

  /**
   * Creates a new print form behavior.
   * @param withProperties Initial values for properties of the new {@link PrintFormBehavior}.
   */
  add(withProperties?: PropertiesSetter<PrintFormBehavior>): PrintFormBehavior;
}
