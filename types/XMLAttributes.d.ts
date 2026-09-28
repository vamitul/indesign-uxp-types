/**
 * XMLAttributes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { XMLAttribute } from './XMLAttribute';
import type { XMLElement } from './XMLElement';

/**
 * A collection of {@link XMLAttribute} objects belonging to an {@link XMLElement}.
 * Attributes store metadata such as IDs, URLs, or formatting overrides
 * as name-value pairs on individual elements.
 *
 * @collection XMLAttribute
 */
export interface XMLAttributes
  extends BaseCollection<XMLAttribute, XMLAttribute, XMLAttribute<'plural'>>, NamedCollection<XMLAttribute> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLAttributes';

  /**
   * Adds a new name-value pair attribute to the {@link XMLElement}.
   *
   * @param name The name of the attribute.
   * @param value The value of the attribute.
   * @param withProperties Initial values for properties of the new {@link XMLAttribute}.
   */
  add(
    name: string,
    value: string,
    withProperties?: PropertiesSetter<XMLAttribute>,
  ): XMLAttribute;
}
