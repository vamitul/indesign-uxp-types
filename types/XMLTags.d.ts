/**
 * XMLTags.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { XMLTag } from './XMLTag';
import type { UIColors } from './Enums/UIColors';
import type { Document } from './Document';

/**
 * A collection of {@link XMLTag} objects defining the available tags in a {@link Document}.
 *
 * XML tags serve as the "vocabulary" for the document's logical structure, allowing page
 * items and text to be categorized for XML export or manipulation.
 * @collection XMLTag
 */
export interface XMLTags
  extends
    BaseCollection<XMLTag, XMLTag, XMLTag<'plural'>>,
    IdCollection<XMLTag>,
    NamedCollection<XMLTag> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLTags';

  /**
   * Creates a new XML tag from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link XMLTag}.
   */
  add(withProperties: PropertiesSetter<XMLTag>): XMLTag;

  /**
   * Creates a new {@link XMLTag} definition in the document's tag list.
   *
   * @param name The name of the tag (e.g., "BodyCopy").
   * @param tagColor The color associated with the tag. Can be an RGB array `[red, green, blue]` where each value is 0-255, or a pre-defined {@link UIColors} value.
   * @param withProperties Initial values for properties of the new {@link XMLTag}.
   */
  add(
    name?: string,
    tagColor?: [red: number, green: number, blue: number] | UIColors,
    withProperties?: PropertiesSetter<XMLTag>,
  ): XMLTag;
}
