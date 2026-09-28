/**
 * ViewPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { MeasurementUnits } from './Enums/MeasurementUnits';
import type { RulerOrigin } from './Enums/RulerOrigin';

/**
 * Application- or document-wide view defaults (rulers, guides, screen mode, measurement units).
 */
export interface ViewPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ViewPreference';

  /** Resolves the proxy into the individual {@link ViewPreference} objects it stands for. */
  getElements(): ViewPreference<'single'>[];

  /** If true, displays text threads. */
  get showTextThreads(): Read<M, boolean>;
  set showTextThreads(value: boolean);

  /** The number of points per inch, typically 72. (Range: 60 to 80) */
  get pointsPerInch(): Read<M, number>;
  set pointsPerInch(value: number);

  /** The distance (in points) between major tick marks on the horizontal ruler. (Range: 4 to 256) Applies only when {@link horizontalMeasurementUnits} is {@link MeasurementUnits.CUSTOM}. */
  get horizontalCustomPoints(): Read<M, number>;
  set horizontalCustomPoints(value: number);

  /** The distance (in points) between major tick marks on the vertical ruler. (Range: 4 to 256) Applies only when {@link verticalMeasurementUnits} is {@link MeasurementUnits.CUSTOM}. */
  get verticalCustomPoints(): Read<M, number>;
  set verticalCustomPoints(value: number);

  /** The measurement unit for stroke measurements. */
  get strokeMeasurementUnits(): Read<M, MeasurementUnits>;
  set strokeMeasurementUnits(value: MeasurementUnits);

  /** The range (in pixels) within which an object snaps to guides. (Range: 1 to 36) Note: Snapping occurs only when guides are shown. */
  get guideSnaptoZone(): Read<M, number>;
  set guideSnaptoZone(value: number);

  /**
   * The distance to move a specified object when an arrow key is pressed.
   *
   * (Range depends on the measurement unit. For points: 0.001 to 100; picas: 0p0.001 to 8p4;
   * mm: 0 to 35.278; cm: 0 to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
   */
  get cursorKeyIncrement(): Read<M, number>;
  set cursorKeyIncrement(value: MeasurementValue);

  /** The measurement unit for the horizontal ruler and other horizontally-measured spaces such as grid columns, horizontal offsets, column gutters, or others. */
  get horizontalMeasurementUnits(): Read<M, MeasurementUnits>;
  set horizontalMeasurementUnits(value: MeasurementUnits);

  /** The measurement unit for the vertical ruler and other vertically-measured spaces such as grid rows, vertical offsets, row heights, or others. */
  get verticalMeasurementUnits(): Read<M, MeasurementUnits>;
  set verticalMeasurementUnits(value: MeasurementUnits);

  /** The default zero point at the intersection of the vertical and horizontal rulers and the scope of the horizontal ruler. */
  get rulerOrigin(): Read<M, RulerOrigin>;
  set rulerOrigin(value: RulerOrigin);

  /** If true, displays the horizontal and vertical rulers. */
  get showRulers(): Read<M, boolean>;
  set showRulers(value: boolean);

  /** If true, displays borders of unselected frames and the diagonal lines in empty unselected frames. */
  get showFrameEdges(): Read<M, boolean>;
  set showFrameEdges(value: boolean);

  /** The measurement units for typography. */
  get typographicMeasurementUnits(): Read<M, MeasurementUnits>;
  set typographicMeasurementUnits(value: MeasurementUnits);

  /** The measurement unit for text size measurements. */
  get textSizeMeasurementUnits(): Read<M, MeasurementUnits>;
  set textSizeMeasurementUnits(value: MeasurementUnits);

  /** The measurement unit for the print dialog. */
  get printDialogMeasurementUnits(): Read<M, MeasurementUnits>;
  set printDialogMeasurementUnits(value: MeasurementUnits);

  /** If true, notes are displayed. */
  get showNotes(): Read<M, boolean>;
  set showNotes(value: boolean);
}
