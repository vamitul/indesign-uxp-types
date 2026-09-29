/**
 * LayoutWindow.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Window } from './Window';

import type { AnchorPoint } from './Enums/AnchorPoint';
import type { ProofingType } from './Enums/ProofingType';
import type { ScreenModeOptions } from './Enums/ScreenModeOptions';
import type { ViewDisplaySettings } from './Enums/ViewDisplaySettings';
import type { ZoomOptions } from './Enums/ZoomOptions';

import type { MeasurementValue } from './_base/Types';

import type { Layer } from './Layer';
import type { MasterSpread } from './MasterSpread';
import type { Page } from './Page';
import type { Spread } from './Spread';
import type { StoryWindow } from './StoryWindow';
import type { Document } from './Document';
import type { NothingEnum } from './Enums/NothingEnum';

/**
 * A layout-view {@link Window} onto a {@link Document}'s page geometry -- the
 * ordinary document window showing pages and spreads, as opposed to a
 * {@link StoryWindow}'s text-only story-editor view.
 */
export interface LayoutWindow<M extends Mode = 'single'> extends Window<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'LayoutWindow';

  /** Resolves the proxy into the individual {@link LayoutWindow} objects it stands for. */
  getElements(): LayoutWindow<'single'>[];

  /** Whether the view simulates overprinting. */
  get overprintPreview(): Read<M, boolean>;
  set overprintPreview(value: boolean);

  /** Name of the color profile used to proof colors. */
  get proofingProfile(): Read<M, string>;
  set proofingProfile(value: string);

  /** The color-proofing method in effect. */
  get proofingType(): Read<M, ProofingType>;
  set proofingType(value: ProofingType);

  /**
   * Whether the dark gray many printers produce in place of solid black is
   * simulated, per the proofing profile. Only takes effect when
   * {@link proofingType} is {@link ProofingType.CUSTOM}.
   */
  get simulateInkBlack(): Read<M, boolean>;
  set simulateInkBlack(value: boolean);

  /**
   * Whether the dingy white of real paper is simulated, per the proofing
   * profile. Only takes effect when {@link proofingType} is
   * {@link ProofingType.CUSTOM}.
   */
  get simulatePaperWhite(): Read<M, boolean>;
  set simulatePaperWhite(value: boolean);

  /**
   * Whether color values are left unchanged for CMYK objects without an embedded profile and
   * for native art such as line art or type -- converting only images whose profile differs
   * from the simulated device's.
   *
   * Only takes effect when {@link proofingType} is {@link ProofingType.CUSTOM}.
   */
  get preserveColorNumbers(): Read<M, boolean>;
  set preserveColorNumbers(value: boolean);

  /** Display-performance override in effect for this window's view. */
  get viewDisplaySetting(): Read<M, ViewDisplaySettings>;
  set viewDisplaySetting(value: ViewDisplaySettings);

  /** The anchor point around which objects are transformed by default in this window. */
  get transformReferencePoint(): Read<M, AnchorPoint | [MeasurementValue, MeasurementValue]>;
  set transformReferencePoint(value: AnchorPoint | [MeasurementValue, MeasurementValue]);

  /**
   * The active layer shown and edited in this window.
   */
  get activeLayer(): Read<M, Layer>;
  set activeLayer(value: Layer | string);

  /**
   * The size, as a percentage, at which the document view is displayed.
   * @param value Range `5`-`4000`.
   */
  get zoomPercentage(): Read<M, number>;
  set zoomPercentage(value: number);

  /** The front-most spread or master spread in this window. */
  get activeSpread(): Read<M, Spread | MasterSpread>;
  set activeSpread(value: Spread | MasterSpread);

  /** The front-most page in this window. */
  get activePage(): Read<M, Page>;
  set activePage(value: Page);

  /** The screen mode in effect for this window's layout view. */
  get screenMode(): Read<M, ScreenModeOptions>;
  set screenMode(value: ScreenModeOptions);

  /**
   * Magnifies or reduces the window to the specified display size.
   * @param given The target display size.
   */
  zoom(given: ZoomOptions): Read<M, void>;

}
