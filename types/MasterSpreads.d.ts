/**
 * MasterSpreads.d.ts — indesign-uxp-types
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
import type { MasterSpread } from './MasterSpread';

/**
 * A collection of {@link MasterSpread} objects (Parent Pages) in an InDesign document.
 * Master spreads provide a template for regular pages, containing background elements
 * and formatting that are shared across multiple layout pages.
 *
 * @collection MasterSpread
 */
export interface MasterSpreads
  extends
    BaseCollection<MasterSpread, MasterSpread, MasterSpread<'plural'>>,
    IdCollection<MasterSpread>,
    NamedCollection<MasterSpread> {
  /** The object's DOM class name. */
  readonly constructorName: 'MasterSpreads';

  /**
   * Creates a new master spread from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link MasterSpread}.
   */
  add(withProperties: PropertiesSetter<MasterSpread>): MasterSpread;

  /**
   * Creates a new master spread.
   * @param pagesPerSpread The number of pages to include in the master spread. Valid range: `1` to `10`. Defaults to `2` for a Facing Pages document, `1` for a Single Page document.
   * @param withProperties Initial values for properties of the new MasterSpread.
   */
  add(
    pagesPerSpread?: number,
    withProperties?: PropertiesSetter<MasterSpread>,
  ): MasterSpread;
}
