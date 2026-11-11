/**
 * Cells.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Cell } from './Cell';

/**
 * A collection of table {@link Cell} objects. Cells are the fundamental units
 * of a table, containing text or graphics and organized into rows and columns.
 *
 * @collection Cell
 */
export interface Cells
  extends BaseCollection<Cell, Cell, Cell<'plural'>>, IdCollection<Cell>, NamedCollection<Cell> {
  /** The object's DOM class name. */
  readonly constructorName: 'Cells';
}
