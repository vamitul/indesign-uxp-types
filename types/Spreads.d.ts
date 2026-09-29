/**
 * Spreads.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Document } from './Document';
import type {
  AddableStructureCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Spread } from './Spread';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A collection of {@link Spread} objects in an InDesign document.
 * A spread consists of one or more pages that are viewed together.
 *
 * @collection Spread
 */
export interface Spreads
  extends
    BaseCollection<Spread, Spread, Spread<'plural'>>,
    IdCollection<Spread>,
    NamedCollection<Spread>,
    AddableStructureCollection<Spread, Spread | Document> {
  /** The object's DOM class name. */
  readonly constructorName: 'Spreads';
}
