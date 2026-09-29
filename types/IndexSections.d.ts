/**
 * IndexSections.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { IndexSection } from './IndexSection';
import type { Index } from './Index';

/**
 * A collection of {@link IndexSection} objects within an {@link Index}.
 * Index sections organize index topics alphabetically (e.g., "A", "B", "C")
 * based on the sorting rules of the document's language.
 *
 * @collection IndexSection
 */
export interface IndexSections
  extends
    BaseCollection<IndexSection, IndexSection, IndexSection<'plural'>>,
    IdCollection<IndexSection>,
    NamedCollection<IndexSection> {
  /** The object's DOM class name. */
  readonly constructorName: 'IndexSections';
}
