/**
 * BaselineFrameGridOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Document } from './Document';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { ObjectStyle } from './ObjectStyle';
import type { TextFrame } from './TextFrame';
import type { BaselineFrameGridRelativeOption } from './Enums/BaselineFrameGridRelativeOption';
import type { UIColors } from './Enums/UIColors';

/**
 * Settings for a custom baseline grid scoped to a single text frame, endnote
 * frame, or object style, distinct from the document's default grid.
 */
export interface BaselineFrameGridOption<M extends Mode = 'single'> extends EventTargetDOMObject<Application | Document | TextFrame | EndnoteTextFrame | ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'BaselineFrameGridOption';

  /** Resolves the proxy into the individual {@link BaselineFrameGridOption} objects it stands for. */
  getElements(): BaselineFrameGridOption<'single'>[];

  /** If true, uses a custom baseline frame grid. */
  get useCustomBaselineFrameGrid(): Read<M, boolean>;
  set useCustomBaselineFrameGrid(value: boolean);

  /** The amount to offset the baseline grid. */
  get startingOffsetForBaselineFrameGrid(): Read<M, number>;
  set startingOffsetForBaselineFrameGrid(value: MeasurementValue);

  /** The location (top of page, top margin, top of frame, or frame inset) on which to base the custom baseline grid. */
  get baselineFrameGridRelativeOption(): Read<M, BaselineFrameGridRelativeOption>;
  set baselineFrameGridRelativeOption(value: BaselineFrameGridRelativeOption);

  /** The distance between grid lines. */
  get baselineFrameGridIncrement(): Read<M, number>;
  set baselineFrameGridIncrement(value: MeasurementValue);

  /** The grid line color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. */
  get baselineFrameGridColor(): Read<M, number[] | UIColors>;
  set baselineFrameGridColor(value: number[] | UIColors);
}
