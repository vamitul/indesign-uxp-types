/**
 * StyleGroups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './Types';
import type { BaseCollection } from './Collections';

/**
 * Recursive named-style-group nesting: the direct child styles, the nested child
 * groups, and the flattened list of all styles including nested ones.
 *
 * @typeParam S - The style type held (e.g. {@link ParagraphStyle}).
 * @typeParam G - The nested group type (e.g. {@link ParagraphStyleGroup}).
 */
export interface StyleGroupContainer<S, G, M extends Mode = 'single'> {
  /** Direct child styles in this group. */
  readonly styles: Read<M, BaseCollection<S>>;

  /** Nested child style groups. */
  readonly groups: BaseCollection<G>;

  /** Every style in this group, including those in nested groups. */
  readonly allStyles: Read<M, S[]>;
}
