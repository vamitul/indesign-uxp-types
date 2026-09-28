/**
 * StripedStrokeStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { StrokeStyle } from './StrokeStyle';

/**
 * A stroke style of parallel stripes running along the stroke.
 */
export interface StripedStrokeStyle<M extends Mode = 'single'> extends StrokeStyle<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'StripedStrokeStyle';

  /** Resolves the proxy into the individual {@link StripedStrokeStyle} objects it stands for. */
  getElements(): StripedStrokeStyle<'single'>[];

  /**
   * The width and position of each stripe, as `[start1, end1, start2, end2, …]`
   * percentages of the stroke weight. Each value must exceed the previous one.
   */
  get stripeArray(): Read<M, number[]>;
  set stripeArray(value: number[]);

  /** Duplicates the striped stroke style. */
  duplicate(): Read<M, StripedStrokeStyle>;
}
