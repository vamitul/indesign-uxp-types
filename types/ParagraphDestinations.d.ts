/**
 * ParagraphDestinations.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Text } from './Text';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { ParagraphDestination } from './ParagraphDestination';

/**
 * A collection of {@link ParagraphDestination} objects that serve as targets for hyperlinks
 * or cross-references.
 *
 * Each destination anchors to a specific paragraph; if a range of text or an insertion
 * point is provided, the destination is automatically normalized to the start of the
 * paragraph containing that location.
 * @collection ParagraphDestination
 */
export interface ParagraphDestinations
  extends
    BaseCollection<ParagraphDestination, ParagraphDestination, ParagraphDestination<'plural'>>,
    IdCollection<ParagraphDestination>,
    NamedCollection<ParagraphDestination> {
  /** The object's DOM class name. */
  readonly constructorName: 'ParagraphDestinations';

  /**
   * Creates a new {@link ParagraphDestination} anchoring to the specified text location.
   *
   * @param destination The text defining the target paragraph. The anchor is always normalized to the beginning of the paragraph.
   * @param withProperties Initial values for properties of the new {@link ParagraphDestination}.
   */
  add(
    destination: Text,
    withProperties?: PropertiesSetter<ParagraphDestination>,
  ): ParagraphDestination;
}
