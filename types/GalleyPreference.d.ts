/**
 * GalleyPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { AntiAliasType } from './Enums/AntiAliasType';
import type { CursorTypes } from './Enums/CursorTypes';
import type { InCopyUIColors } from './Enums/InCopyUIColors';
import type { LineSpacingType } from './Enums/LineSpacingType';

/**
 * Galley preferences.
 */
export interface GalleyPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GalleyPreference';

  /** Resolves the proxy into the individual {@link GalleyPreference} objects it stands for. */
  getElements(): GalleyPreference<'single'>[];

  /** The background color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. */
  get backgroundColor(): Read<M, number[] | InCopyUIColors>;
  set backgroundColor(value: number[] | InCopyUIColors);

  /** If true, the cursor blinks. */
  get blinkCursor(): Read<M, boolean>;
  set blinkCursor(value: boolean);

  /** The cursor type for galley and story views. */
  get cursorType(): Read<M, CursorTypes>;
  set cursorType(value: CursorTypes);

  /** If true, galley text is anti-aliased. */
  get smoothText(): Read<M, boolean>;
  set smoothText(value: boolean);

  /** The text color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. */
  get textColor(): Read<M, number[] | InCopyUIColors>;
  set textColor(value: number[] | InCopyUIColors);

  /** If true, displays the depth ruler. */
  get showDepthRuler(): Read<M, boolean>;
  set showDepthRuler(value: boolean);

  /** The type of text anti-aliasing to use in story and galley views. */
  get antiAliasType(): Read<M, AntiAliasType>;
  set antiAliasType(value: AntiAliasType);

  /** If true, show paragraph style names. */
  get showParagraphStyleNames(): Read<M, boolean>;
  set showParagraphStyleNames(value: boolean);

  /** How much space separates lines in galley and story view — see {@link LineSpacingType}. */
  get lineSpacingValue(): Read<M, LineSpacingType>;
  set lineSpacingValue(value: LineSpacingType);

  /** Font family name to use for text display. */
  get displayFont(): Read<M, string>;
  set displayFont(value: string);

  /** Size to use for text display. */
  get displayFontSize(): Read<M, number>;
  set displayFontSize(value: MeasurementValue);

  /** Width of the galley's info column, in points. */
  get infoColumnWidth(): Read<M, number>;
  set infoColumnWidth(value: MeasurementValue);

  /** If true, display the Info column. */
  get showInfoColumn(): Read<M, boolean>;
  set showInfoColumn(value: boolean);

  /** If true, show paragraph break marks. */
  get showParagraphBreakMarks(): Read<M, boolean>;
  set showParagraphBreakMarks(value: boolean);
}
