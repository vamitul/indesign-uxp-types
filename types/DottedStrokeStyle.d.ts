/**
 * DottedStrokeStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { StrokeStyle } from './StrokeStyle';
import type { MeasurementValue } from './_base/Types';
import type { StrokeCornerAdjustment } from './Enums/StrokeCornerAdjustment';

/**
 * A stroke style of evenly spaced dots.
 */
export interface DottedStrokeStyle<M extends Mode = 'single'> extends StrokeStyle<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'DottedStrokeStyle';

  /** Resolves the proxy into the individual {@link DottedStrokeStyle} objects it stands for. */
  getElements(): DottedStrokeStyle<'single'>[];

  /** The length of the gaps between dots. Up to 5 values. */
  get dotArray(): Read<M, number[]>;
  set dotArray(value: MeasurementValue[]);

  /** How dots are adjusted at corners to avoid clipping. */
  get strokeCornerAdjustment(): Read<M, StrokeCornerAdjustment>;
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);

  /** Duplicates the dotted stroke style. */
  duplicate(): Read<M, DottedStrokeStyle>;
}
