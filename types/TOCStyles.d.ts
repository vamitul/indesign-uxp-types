/**
 * TOCStyles.d.ts — indesign-uxp-types
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
import type { TOCStyle } from './TOCStyle';

/**
 * A collection of {@link TOCStyle} objects in an InDesign document.
 * TOC styles define the source paragraph styles, formatting, and structural
 * settings used to automatically generate Tables of Contents.
 *
 * @collection TOCStyle
 */
export interface TOCStyles
  extends
    BaseCollection<TOCStyle, TOCStyle, TOCStyle<'plural'>>,
    IdCollection<TOCStyle>,
    NamedCollection<TOCStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'TOCStyles';

  /**
   * Creates a new TOC style.
   *
   * * **Duplicate Names:** If a TOC style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link TOCStyle}.
   */
  add(withProperties?: PropertiesSetter<TOCStyle>): TOCStyle;
}
