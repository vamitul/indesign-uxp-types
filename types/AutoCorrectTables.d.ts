/**
 * AutoCorrectTables.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { AutoCorrectTable } from './AutoCorrectTable';

/**
 * A collection of {@link AutoCorrectTable} objects for different languages.
 * These tables define the specific autocorrect word pairs used to automatically
 * fix common typing errors during text entry.
 *
 * @collection AutoCorrectTable
 */
export interface AutoCorrectTables
  extends BaseCollection<AutoCorrectTable, AutoCorrectTable, AutoCorrectTable<'plural'>>, NamedCollection<AutoCorrectTable> {
  /** The object's DOM class name. */
  readonly constructorName: 'AutoCorrectTables';
}
