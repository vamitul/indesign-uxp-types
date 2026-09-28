/**
 * CrossReferenceSource.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { HyperlinkTextSource } from './HyperlinkTextSource';
import type { CrossReferenceFormat } from './CrossReferenceFormat';
import type { CharacterStyle } from './CharacterStyle';

/**
 * A {@link HyperlinkTextSource} that displays generated reference text (e.g.
 * "See page 12") describing another location, formatted by its
 * {@link appliedFormat}.
 */
export interface CrossReferenceSource<M extends Mode = 'single'> extends HyperlinkTextSource<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'CrossReferenceSource';

  /** Resolves the proxy into the individual {@link CrossReferenceSource} objects it stands for. */
  getElements(): CrossReferenceSource<'single'>[];

  /** The {@link CrossReferenceFormat} used to generate this source's displayed text. */
  get appliedFormat(): Read<M, CrossReferenceFormat>;
  set appliedFormat(value: CrossReferenceFormat);

  /** Regenerates the cross-reference's displayed text from its current {@link appliedFormat} and destination. */
  update(): Read<M, void>;
}
