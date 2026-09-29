/**
 * Rows.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Table } from './Table';
import type { Cell } from './Cell';
import type { Column } from './Column';
import type {
  AddableTableElementCollection,
  NamedCollection,
  BaseCollection,
} from './_base/Collections';
import type { Row } from './Row';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A collection of table {@link Row} objects. Rows are managed by the table model
 * and provide structural organization for table cells.
 *
 * @collection Row
 */
export interface Rows
  extends
    BaseCollection<Row, Row, Row<'plural'>>,
    NamedCollection<Row>,
    AddableTableElementCollection<Row, Row | Column | Cell | Table> {
  /** The object's DOM class name. */
  readonly constructorName: 'Rows';
}
