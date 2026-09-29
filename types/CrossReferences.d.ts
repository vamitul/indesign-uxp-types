/**
 * CrossReferences.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { CrossReferenceType } from './Enums/CrossReferenceType';
import type { Topic } from './Topic';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { CrossReference } from './CrossReference';
import type { CrossReferenceSource } from './CrossReferenceSource';
import type { Hyperlink } from './Hyperlink';
import type { Index } from './Index';

/**
 * A collection of index cross-references associated with an {@link Index} {@link Topic}.
 * Index cross-references (e.g., "See" or "See also") provide navigation between related
 * terms within a generated index.
 *
 * For document-wide text cross-references (e.g., "See page 12"), use {@link CrossReferenceSource}
 * and {@link Hyperlink} objects instead.
 *
 * @collection CrossReference
 */
export interface CrossReferences
  extends
    BaseCollection<CrossReference, CrossReference, CrossReference<'plural'>>,
    IdCollection<CrossReference>,
    NamedCollection<CrossReference> {
  /** The object's DOM class name. */
  readonly constructorName: 'CrossReferences';

  /**
   * Adds a new index cross-reference to the {@link Topic}.
   *
   * @param referencedTopic The {@link Topic} that the cross-reference points to.
   * @param crossReferenceType The prefix type for the reference (e.g., "See", "See also").
   * @param customTypeString The custom prefix string to use. Required only when `crossReferenceType` is {@link CrossReferenceType.CUSTOM_CROSS_REFERENCE}.
   * @param withProperties Initial values for properties of the new {@link CrossReference}.
   */
  add(
    referencedTopic: Topic,
    crossReferenceType: CrossReferenceType.CUSTOM_CROSS_REFERENCE,
    customTypeString: string,
    withProperties?: PropertiesSetter<CrossReference>,
  ): CrossReference;

  /**
   * Adds a new index cross-reference to the {@link Topic}.
   *
   * @param referencedTopic The {@link Topic} that the cross-reference points to.
   * @param crossReferenceType The prefix type for the reference (e.g., "See", "See also").
   * @param customTypeString Ignored for standard reference types.
   * @param withProperties Initial values for properties of the new {@link CrossReference}.
   */
  add(
    referencedTopic: Topic,
    crossReferenceType: Exclude<
      CrossReferenceType,
      CrossReferenceType.CUSTOM_CROSS_REFERENCE
    >,
    customTypeString?: string,
    withProperties?: PropertiesSetter<CrossReference>,
  ): CrossReference;
}
