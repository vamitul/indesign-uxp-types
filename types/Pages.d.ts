/**
 * Pages.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Document } from './Document';
import type { MasterSpread } from './MasterSpread';
import type { Spread } from './Spread';
import type {
  AddableStructureCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Page } from './Page';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A collection of {@link Page} objects in a document or spread.
 * Pages are the primary layout boundaries in InDesign, where all page items are placed.
 *
 * @collection Page
 */
export interface Pages<TParent = Spread | MasterSpread>
  extends
    BaseCollection<Page<TParent>, Page, Page<TParent, 'plural'>>,
    IdCollection<Page<TParent>>,
    NamedCollection<Page<TParent>>,
    AddableStructureCollection<Page<TParent>, Page | Spread | MasterSpread | Document, Page> {
  /** The object's DOM class name. */
  readonly constructorName: 'Pages';
}
