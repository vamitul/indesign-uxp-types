/**
 * Inks.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Ink } from './Ink';

/**
 * A collection of {@link Ink} objects in an InDesign document. Inks define the
 * physical colorant (process or spot) used during the printing or export process,
 * including trapping and sequence settings.
 *
 * @collection Ink
 */
export interface Inks
  extends BaseCollection<Ink, Ink, Ink<'plural'>>, IdCollection<Ink>, NamedCollection<Ink> {
  /** The object's DOM class name. */
  readonly constructorName: 'Inks';
}
