/**
 * CrossReferenceSources.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { CrossReferenceFormat } from './CrossReferenceFormat';
import type { Text } from './Text';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { CrossReferenceSource } from './CrossReferenceSource';

/**
 * A collection of {@link CrossReferenceSource} objects. A cross-reference source
 * is a text range or insertion point that displays information about a destination
 * elsewhere in the document.
 *
 * @collection CrossReferenceSource
 */
export interface CrossReferenceSources
  extends
    BaseCollection<CrossReferenceSource, CrossReferenceSource, CrossReferenceSource<'plural'>>,
    IdCollection<CrossReferenceSource>,
    NamedCollection<CrossReferenceSource> {
  /** The object's DOM class name. */
  readonly constructorName: 'CrossReferenceSources';

  /**
   * Creates a new cross-reference text source.
   *
   * @param source The text range to act as the source.
   * @param appliedFormat The {@link CrossReferenceFormat} to apply to the source text.
   * @param withProperties Initial values for properties of the new CrossReferenceSource.
   */
  add(
    source: Text,
    appliedFormat: CrossReferenceFormat,
    withProperties?: PropertiesSetter<CrossReferenceSource>,
  ): CrossReferenceSource;
}
