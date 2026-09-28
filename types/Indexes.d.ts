/**
 * Indexes.d.ts — indesign-uxp-types
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
import type { Index } from './Index';

/**
 * A collection of {@link Index} objects in an InDesign document.
 * An index contains the hierarchical topics and page references used to
 * generate an automated Table of Index.
 *
 * The collection name is misleading: InDesign only supports one index per document.
 *
 * @collection Index
 */
export interface Indexes
  extends BaseCollection<Index, Index, Index<'plural'>>, IdCollection<Index>, NamedCollection<Index> {
  /** The object's DOM class name. */
  readonly constructorName: 'Indexes';

  /**
   * Creates a new index.
   * @param withProperties Initial values for properties of the new {@link Index}.
   */
  add(withProperties?: PropertiesSetter<Index>): Index;
}
