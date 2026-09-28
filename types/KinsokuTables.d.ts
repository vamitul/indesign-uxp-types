/**
 * KinsokuTables.d.ts — indesign-uxp-types
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
import type { KinsokuTable } from './KinsokuTable';

/**
 * A collection of {@link KinsokuTable} objects in an InDesign document or the application.
 *
 * Kinsoku tables define the line-breaking rules for Japanese text, specifying which
 * characters (like punctuation) are prohibited from appearing at the beginning or end of a
 * line.
 * @collection KinsokuTable
 */
export interface KinsokuTables
  extends
    BaseCollection<KinsokuTable, KinsokuTable, KinsokuTable<'plural'>>,
    IdCollection<KinsokuTable>,
    NamedCollection<KinsokuTable> {
  /**
   * Creates a new kinsoku table from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link KinsokuTable}. Must include `name`.
   */
  add(withProperties: PropertiesSetter<KinsokuTable>): KinsokuTable;

  /** The object's DOM class name. */
  readonly constructorName: 'KinsokuTables';

  /**
   * Creates a new kinsoku table.
   *
   * * **Duplicate Names:** If a kinsoku table with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param name The name of the new kinsoku table.
   * @param withProperties Initial values for properties of the new KinsokuTable.
   */
  add(
    name: string,
    withProperties?: PropertiesSetter<KinsokuTable>,
  ): KinsokuTable;
}
