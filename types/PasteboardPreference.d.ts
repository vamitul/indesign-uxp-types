/**
 * PasteboardPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { UIColors } from './Enums/UIColors';

/**
 * Pasteboard preferences.
 */
export interface PasteboardPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PasteboardPreference';

  /** Resolves the proxy into the individual {@link PasteboardPreference} objects it stands for. */
  getElements(): PasteboardPreference<'single'>[];

  /** The minimum horizontal and vertical pasteboard margins. A horizontal margin of -1 means one document page width. */
  get pasteboardMargins(): Read<M, number[]>;
  set pasteboardMargins(value: MeasurementValue[]);

  /** The color of the preview background, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. */
  get previewBackgroundColor(): Read<M, number[] | UIColors>;
  set previewBackgroundColor(value: number[] | UIColors);

  /** The color of bleed guides, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. */
  get bleedGuideColor(): Read<M, number[] | UIColors>;
  set bleedGuideColor(value: number[] | UIColors);

  /** The color of slug guides, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. */
  get slugGuideColor(): Read<M, number[] | UIColors>;
  set slugGuideColor(value: number[] | UIColors);

  /** If true, match the Preview Background color to Theme Color, else use the color-value specified in Preview Background color drop down. */
  get matchPreviewBackgroundToThemeColor(): Read<M, boolean>;
  set matchPreviewBackgroundToThemeColor(value: boolean);
}
