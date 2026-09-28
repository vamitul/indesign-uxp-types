/**
 * Fonts.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { Font } from './Font';

/**
 * A collection of {@link Font} objects available to the InDesign application
 * or used within a specific document.
 *
 * @collection Font
 */
export interface Fonts extends BaseCollection<Font, Font, Font<'plural'>>, NamedCollection<Font> {
  /** The object's DOM class name. */
  readonly constructorName: 'Fonts';
}
