/**
 * Panels.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { Panel } from './Panel';

/**
 * A collection of {@link Panel} objects representing the various palettes and
 * UI panels in the InDesign application workspace.
 *
 * @collection Panel
 */
export interface Panels extends BaseCollection<Panel, Panel, Panel<'plural'>>, NamedCollection<Panel> {
  /** The object's DOM class name. */
  readonly constructorName: 'Panels';
}
