/**
 * MarginPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Document } from './Document';
import type { Page } from './Page';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';

/**
 * A page's or spread's margin and column layout.
 */
export interface MarginPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application | Document | Page, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MarginPreference';

  /** Resolves the proxy into the individual {@link MarginPreference} objects it stands for. */
  getElements(): MarginPreference<'single'>[];

  /** If false, columns are evenly spaced. If true, columns can have custom widths. */
  readonly customColumns: Read<M, boolean>;

  /** The number of columns to place on the page. */
  get columnCount(): Read<M, number>;
  set columnCount(value: number);

  /** The distance between columns. */
  get columnGutter(): Read<M, number>;
  set columnGutter(value: MeasurementValue);

  /** The top edge of the MarginPreference. */
  get top(): Read<M, number>;
  set top(value: MeasurementValue);

  /** The bottom edge of the MarginPreference. */
  get bottom(): Read<M, number>;
  set bottom(value: MeasurementValue);

  /** The left edge of the MarginPreference. */
  get left(): Read<M, number>;
  set left(value: MeasurementValue);

  /** The right edge of the MarginPreference. */
  get right(): Read<M, number>;
  set right(value: MeasurementValue);

  /** The direction of text in the column. */
  get columnDirection(): Read<M, HorizontalOrVertical>;
  set columnDirection(value: HorizontalOrVertical);

  /** The distance that each column guide is placed from the left margin, formatted as an array in the format [guide1, guide2, guide3]. */
  get columnsPositions(): Read<M, number[]>;
  set columnsPositions(value: MeasurementValue[]);
}
