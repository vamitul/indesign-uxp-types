/**
 * XMLComments.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { XMLComment } from './XMLComment';
import type { InsertionPoint } from './InsertionPoint';

/**
 * A collection of {@link XMLComment} objects.
 * XML comments provide non-rendered notes within the logical XML structure,
 * useful for documentation or preserving information during XML round-trips.
 *
 * @collection XMLComment
 */
export interface XMLComments
  extends BaseCollection<XMLComment, XMLComment, XMLComment<'plural'>>, IdCollection<XMLComment> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLComments';

  /**
   * Creates a new {@link XMLComment} node from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link XMLComment}.
   */
  add(withProperties: PropertiesSetter<XMLComment>): XMLComment;

  /**
   * Creates a new {@link XMLComment} node.
   *
   * @param value The text content of the comment (placed between `<!--` and `-->`).
   * @param storyOffset The location within a {@link Story} where the comment should be inserted. Can be an {@link InsertionPoint} object or a character index (number).
   * @param withProperties Initial values for properties of the new {@link XMLComment}.
   */
  add(
    value?: string,
    storyOffset?: InsertionPoint | number,
    withProperties?: PropertiesSetter<XMLComment>,
  ): XMLComment;
}
