/**
 * GridPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { BaselineGridRelativeOption } from './Enums/BaselineGridRelativeOption';
import type { UIColors } from './Enums/UIColors';

/**
 * Document/application baseline and document-grid display defaults.
 */
export interface GridPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GridPreference';

  /** Resolves the proxy into the individual {@link GridPreference} objects it stands for. */
  getElements(): GridPreference<'single'>[];

  /** If true, displays the document grid. */
  get documentGridShown(): Read<M, boolean>;
  set documentGridShown(value: boolean);

  /** If true, an object snaps to the nearest grid line when the object is created, moved, or resized. */
  get documentGridSnapto(): Read<M, boolean>;
  set documentGridSnapto(value: boolean);

  /** The amount of space between major horizontal lines in the document grid. */
  get horizontalGridlineDivision(): Read<M, number>;
  set horizontalGridlineDivision(value: MeasurementValue);

  /** The amount of space between major vertical lines in the document grid. */
  get verticalGridlineDivision(): Read<M, number>;
  set verticalGridlineDivision(value: MeasurementValue);

  /** The number of rows into which to subdivide the space between horizontal document grid lines. */
  get horizontalGridSubdivision(): Read<M, number>;
  set horizontalGridSubdivision(value: number);

  /** The number of columns into which to subdivide the space between vertical document grid lines. */
  get verticalGridSubdivision(): Read<M, number>;
  set verticalGridSubdivision(value: number);

  /** The color of the document grid, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. */
  get gridColor(): Read<M, number[] | UIColors>;
  set gridColor(value: number[] | UIColors);

  /** If true, places grids behind all other objects on the spread. */
  get gridsInBack(): Read<M, boolean>;
  set gridsInBack(value: boolean);

  /** If true, displays the baseline grid. */
  get baselineGridShown(): Read<M, boolean>;
  set baselineGridShown(value: boolean);

  /** The amount to offset the baseline grid from the zero point. */
  get baselineStart(): Read<M, number>;
  set baselineStart(value: MeasurementValue);

  /** The amount of space between baseline grid lines. */
  get baselineDivision(): Read<M, number>;
  set baselineDivision(value: MeasurementValue);

  /** The magnification (as a percentage) less than which ruler guides do not appear. (Range: 5 to 4000) */
  get baselineViewThreshold(): Read<M, number>;
  set baselineViewThreshold(value: number);

  /** The color of the baseline grid, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. */
  get baselineColor(): Read<M, number[] | UIColors>;
  set baselineColor(value: number[] | UIColors);

  /** The zero point for the baseline grid offset. */
  get baselineGridRelativeOption(): Read<M, BaselineGridRelativeOption>;
  set baselineGridRelativeOption(value: BaselineGridRelativeOption);
}
