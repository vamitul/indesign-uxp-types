/**
 * PDFs.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { PDF } from './PDF';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of placed {@link PDF} graphics within an InDesign document.
 * PDF items support specific settings for page selection and cropping during placement.
 *
 * @collection PDF
 */
export interface PDFs<TParent = PageItemParent>
  extends BaseCollection<PDF<TParent>, PDF, PDF<TParent, 'plural'>>, IdCollection<PDF<TParent>>, NamedCollection<PDF<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'PDFs';
}
