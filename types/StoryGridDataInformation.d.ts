/**
 * StoryGridDataInformation.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { Font } from './Font';
import type { MeasurementValue } from './_base/Types';
import type { LineAlignment } from './Enums/LineAlignment';
import type { GridAlignment } from './Enums/GridAlignment';
import type { CharacterAlignment } from './Enums/CharacterAlignment';
import type { GridViewSettings } from './Enums/GridViewSettings';
import type { CharacterCountLocation } from './Enums/CharacterCountLocation';

/**
 * Default character-grid formatting properties for the document or
 * application-wide story (frame) grid.
 */
export interface StoryGridDataInformation<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'StoryGridDataInformation';

  /** Resolves the proxy into the individual {@link StoryGridDataInformation} objects it stands for. */
  getElements(): StoryGridDataInformation<'single'>[];

  /** The font applied to grid characters. */
  get appliedFont(): Read<M, Font | string>;
  set appliedFont(value: Font | string);

  /** The font style applied to grid characters. */
  get fontStyle(): Read<M, string>;
  set fontStyle(value: string);

  /** The grid's text size. */
  get pointSize(): Read<M, number>;
  set pointSize(value: MeasurementValue);

  /** The spacing between characters on the grid, as a percentage. */
  get characterAki(): Read<M, number>;
  set characterAki(value: number);

  /** The spacing between lines on the grid, as a percentage. */
  get lineAki(): Read<M, number>;
  set lineAki(value: number);

  /** The horizontal scale of grid characters, as a percentage. */
  get horizontalScale(): Read<M, number>;
  set horizontalScale(value: number);

  /** The vertical scale of grid characters, as a percentage. */
  get verticalScale(): Read<M, number>;
  set verticalScale(value: number);

  /** How lines align to the grid. */
  get lineAlignment(): Read<M, LineAlignment>;
  set lineAlignment(value: LineAlignment);

  /** How the grid aligns within its frame. */
  get gridAlignment(): Read<M, GridAlignment>;
  set gridAlignment(value: GridAlignment);

  /** How characters align within grid cells. */
  get characterAlignment(): Read<M, CharacterAlignment>;
  set characterAlignment(value: CharacterAlignment);

  /** Whether, and how, the grid is drawn on screen. */
  get gridView(): Read<M, GridViewSettings>;
  set gridView(value: GridViewSettings);

  /** Where the character count is displayed on the grid. */
  get characterCountLocation(): Read<M, CharacterCountLocation>;
  set characterCountLocation(value: CharacterCountLocation);

  /** The point size of the displayed character count. */
  get characterCountSize(): Read<M, number>;
  set characterCountSize(value: number);
}
