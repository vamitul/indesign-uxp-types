/**
 * DashedStrokeStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { StrokeStyle } from './StrokeStyle';
import type { MeasurementValue } from './_base/Types';
import type { StrokeCornerAdjustment } from './Enums/StrokeCornerAdjustment';
import type { EndCap } from './Enums/EndCap';

/**
 * A stroke style of alternating dashes and gaps.
 */
export interface DashedStrokeStyle<M extends Mode = 'single'> extends StrokeStyle<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'DashedStrokeStyle';

  /** Resolves the proxy into the individual {@link DashedStrokeStyle} objects it stands for. */
  getElements(): DashedStrokeStyle<'single'>[];

  /**
   * The dash/gap pattern, as `[dash1, gap1, dash2, gap2, …]`. Up to 10 values.
   */
  get dashArray(): Read<M, number[]>;
  set dashArray(value: MeasurementValue[]);

  /** How dashes are adjusted at corners to avoid clipping. */
  get strokeCornerAdjustment(): Read<M, StrokeCornerAdjustment>;
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);

  /** The shape of the ends of each dash segment. */
  get endCap(): Read<M, EndCap>;
  set endCap(value: EndCap);

  /** Duplicates the dashed stroke style. */
  duplicate(): Read<M, DashedStrokeStyle>;
}
