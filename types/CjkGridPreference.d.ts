/**
 * CjkGridPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { UIColors } from './Enums/UIColors';

/**
 * Settings controlling how CJK layout and frame (character) grids are
 * displayed — grid color, snap-to-grid, the zoom level below which grids hide,
 * and per-cell coloring.
 */
export interface CjkGridPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CjkGridPreference';

  /** Resolves the proxy into the individual {@link CjkGridPreference} objects it stands for. */
  getElements(): CjkGridPreference<'single'>[];

  /** If true, displays the layout grids. */
  get showAllLayoutGrids(): Read<M, boolean>;
  set showAllLayoutGrids(value: boolean);

  /** If true, displays the frame (story) grids. */
  get showAllFrameGrids(): Read<M, boolean>;
  set showAllFrameGrids(value: boolean);

  /** The view magnification (as a percentage) less than which grids do not appear. (Range: 5 to 4000). */
  get minimumScale(): Read<M, number>;
  set minimumScale(value: number);

  /** If true, objects snap to the layout grid. */
  get snapToLayoutGrid(): Read<M, boolean>;
  set snapToLayoutGrid(value: boolean);

  /** The layout grid color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. */
  get layoutGridColorIndex(): Read<M, number[] | UIColors>;
  set layoutGridColorIndex(value: number[] | UIColors);

  /** Applies the grid color to every nth cell, where n is the value of this property. */
  get colorEveryNthCell(): Read<M, number>;
  set colorEveryNthCell(value: number);

  /** If true, applies the grid color from the the edge of the line. If false, applies the grid color from the corner of the frame. */
  get singleLineColorMode(): Read<M, boolean>;
  set singleLineColorMode(value: boolean);

  /** If true, uses ICF mode for grid cells. If false, uses virtual body mode. */
  get icfMode(): Read<M, boolean>;
  set icfMode(value: boolean);

  /** If true, cell shape is circular. If false, cell shape is rectangular. */
  get useCircularCells(): Read<M, boolean>;
  set useCircularCells(value: boolean);

  /** If true, displays the character count for the frame. */
  get showCharacterCount(): Read<M, boolean>;
  set showCharacterCount(value: boolean);
}
