/**
 * XMLElements.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { XMLElement } from './XMLElement';
import type { XMLTag } from './XMLTag';
import type { Text } from './Text';
import type { Story } from './Story';
import type { PageItem } from './PageItem';
import type { Movie } from './Movie';
import type { Sound } from './Sound';
import type { Graphic } from './Graphic';
import type { Table } from './Table';
import type { Cell } from './Cell';

/**
 * A collection of {@link XMLElement} objects.
 *
 * XMLElements represent the logical structure of an InDesign document's XML hierarchy. They
 * can be associated with layout objects like text frames or stories to provide a bridge
 * between the visual layout and data structure.
 * @collection XMLElement
 */
export interface XMLElements
  extends BaseCollection<XMLElement, XMLElement, XMLElement<'plural'>>, IdCollection<XMLElement> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLElements';

  /**
   * Creates a new XML element as a child of the current element.
   * If `xmlContent` is provided, the layout object or text is associated with the new XML element,
   * effectively "tagging" it in the document structure.
   *
   * @param markupTag The XML tag to apply. If a string is provided, InDesign uses the existing tag with that name or creates a new one if it doesn't exist.
   * @param xmlContent The layout object or text range to associate (markup) with this XML element. Note: This parameter associates the element with layout content; use the `contents` property of the returned element to set its raw text data.
   * @param withProperties Initial values for properties of the new XMLElement.
   */
  add(
    markupTag: string | XMLTag,
    xmlContent?:
      | Text
      | Story
      | PageItem
      | Movie
      | Sound
      | Graphic
      | Table
      | Cell,
    withProperties?: PropertiesSetter<XMLElement>,
  ): XMLElement;
}
