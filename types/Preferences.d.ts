/**
 * Preferences.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { BaseCollection } from './_base/Collections';
import type { Preference } from './Preference';

/**
 * A collection of {@link Preference} objects. These represent the various
 * global and document-level settings that control application behavior and defaults.
 *
 * @collection Preference
 */
export interface Preferences extends BaseCollection<Preference, Preference, Preference<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'Preferences';
}
