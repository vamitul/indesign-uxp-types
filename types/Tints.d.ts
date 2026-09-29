/**
 * Tints.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Color } from './Color';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Tint } from './Tint';

/**
 * A collection of {@link Tint} swatches. Tints are swatches based on a {@link Color}
 * but with a specific intensity or density percentage.
 *
 * @collection Tint
 */
export interface Tints
  extends BaseCollection<Tint, Tint, Tint<'plural'>>, IdCollection<Tint>, NamedCollection<Tint> {
  /**
   * Creates a new tint from a properties bag alone. The bag must include `baseColor`.
   * @param withProperties Initial values for properties of the new {@link Tint}.
   */
  add(withProperties: PropertiesSetter<Tint>): Tint;

  /** The object's DOM class name. */
  readonly constructorName: 'Tints';

  /**
   * Creates a new tint swatch based on an existing color.
   *
   * @param baseColor The {@link Color} that the tint is based upon.
   * @param withProperties Initial values for properties of the new Tint.
   */
  add(baseColor: Color, withProperties?: PropertiesSetter<Tint>): Tint;
}
