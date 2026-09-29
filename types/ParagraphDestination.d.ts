/**
 * ParagraphDestination.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { HyperlinkTextDestination } from './HyperlinkTextDestination';
import type { Text } from './Text';

/**
 * A {@link HyperlinkTextDestination} normalized to the start of a paragraph —
 * the destination type InDesign creates automatically for paragraph-based
 * cross-references (e.g. "See [paragraph text] on page 12").
 */
export interface ParagraphDestination<M extends Mode = 'single'> extends HyperlinkTextDestination<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'ParagraphDestination';

  /** Resolves the proxy into the individual {@link ParagraphDestination} objects it stands for. */
  getElements(): ParagraphDestination<'single'>[];
}
