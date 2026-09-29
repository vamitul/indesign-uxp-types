/**
 * DTDs.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { DTD } from './DTD';

/**
 * A collection of {@link DTD} (Document Type Definition) objects in an InDesign
 * document. DTDs define the structure and constraints for XML validation.
 *
 * @collection DTD
 */
export interface DTDs extends BaseCollection<DTD, DTD, DTD<'plural'>>, IdCollection<DTD> {
  /** The object's DOM class name. */
  readonly constructorName: 'DTDs';
}
