/**
 * PageReferences.d.ts — indesign-uxp-types
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
import type { PageReference } from './PageReference';
import type { Text } from './Text';
import type { PageReferenceType } from './Enums/PageReferenceType';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { Index } from './Index';

/**
 * A collection of {@link PageReference} objects within an {@link Index}.
 * Page references create the actual link between an index topic and the specific
 * text ranges or pages where that topic is discussed in the document.
 *
 * @collection PageReference
 */
export interface PageReferences
  extends
    BaseCollection<PageReference, PageReference, PageReference<'plural'>>,
    IdCollection<PageReference>,
    NamedCollection<PageReference> {
  /** The object's DOM class name. */
  readonly constructorName: 'PageReferences';


  /**
   * Creates a new page reference for an Index.
   *
   * @param source The text to which the page reference points.
   * @param pageReferenceType The type of page reference (e.g., current page or a range). Defaults to {@link PageReferenceType.CURRENT_PAGE}.
   * @param pageReferenceLimit Defines the end of a page range. Required only when the type specifies a range based on a paragraph style or a count.
   * @param pageNumberStyleOverride The character style override to apply to the page number in the index.
   * @param withProperties Initial values for properties of the new PageReference.
   */
  add(
    source: Text ,
    pageReferenceType?: PageReferenceType,
    pageReferenceLimit?: ParagraphStyle | number,
    pageNumberStyleOverride?: CharacterStyle,
    withProperties?: PropertiesSetter<PageReference>,
  ): PageReference;
}
