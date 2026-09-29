/**
 * Changes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { BaseCollection } from './_base/Collections';
import type { Change } from './Change';

/**
 * A collection of {@link Change} objects representing tracked changes—including
 * additions, deletions, and moved text—within a story or text range.
 *
 * @collection Change
 */
export interface Changes extends BaseCollection<Change, Change, Change<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'Changes';
}
