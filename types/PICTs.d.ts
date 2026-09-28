/**
 * PICTs.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { PICT } from './PICT';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of placed {@link PICT} graphics within an InDesign document.
 *
 * @collection PICT
 */
export interface PICTs<TParent = PageItemParent>
  extends BaseCollection<PICT<TParent>, PICT, PICT<TParent, 'plural'>>, IdCollection<PICT<TParent>>, NamedCollection<PICT<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'PICTs';
}
