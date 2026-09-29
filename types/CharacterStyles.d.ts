/**
 * CharacterStyles.d.ts — indesign-uxp-types
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
import type { CharacterStyle } from './CharacterStyle';

/**
 * A collection of {@link CharacterStyle} objects in an InDesign document or the
 * application.
 *
 * Character styles allow you to apply complex text formatting to a range of characters
 * while maintaining a consistent visual hierarchy across the document.
 * @collection CharacterStyle
 */
export interface CharacterStyles
  extends
    BaseCollection<CharacterStyle, CharacterStyle, CharacterStyle<'plural'>>,
    IdCollection<CharacterStyle>,
    NamedCollection<CharacterStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'CharacterStyles';

  /**
   * Creates a new character style.
   *
   * * **Duplicate Names:** If a character style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link CharacterStyle}.
   */
  add(withProperties?: PropertiesSetter<CharacterStyle>): CharacterStyle;
}
