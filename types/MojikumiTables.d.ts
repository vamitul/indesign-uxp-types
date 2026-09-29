/**
 * MojikumiTables.d.ts — indesign-uxp-types
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
import type { MojikumiTable } from './MojikumiTable';

/**
 * A collection of {@link MojikumiTable} objects in an InDesign document or
 * the application. Mojikumi tables define the spacing rules for Japanese characters,
 * controlling how punctuation and different character types interact within a line.
 *
 * @collection MojikumiTable
 */
export interface MojikumiTables
  extends
    BaseCollection<MojikumiTable, MojikumiTable, MojikumiTable<'plural'>>,
    IdCollection<MojikumiTable>,
    NamedCollection<MojikumiTable> {
  /**
   * Creates a new mojikumi table from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link MojikumiTable}. Must include `name`.
   */
  add(withProperties: PropertiesSetter<MojikumiTable>): MojikumiTable;

  /** The object's DOM class name. */
  readonly constructorName: 'MojikumiTables';

  /**
   * Creates a new mojikumi table.
   *
   * * **Duplicate Names:** If a mojikumi table with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param name The name of the new mojikumi table.
   * @param withProperties Initial values for properties of the new MojikumiTable.
   */
  add(
    name: string,
    withProperties?: PropertiesSetter<MojikumiTable>,
  ): MojikumiTable;
}
