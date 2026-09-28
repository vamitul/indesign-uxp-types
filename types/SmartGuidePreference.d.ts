/**
 * SmartGuidePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { UIColors } from './Enums/UIColors';

/**
 * Settings for Smart Guides — the alignment guides InDesign shows automatically
 * while dragging or resizing objects near other objects.
 */
export interface SmartGuidePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'SmartGuidePreference';

  /** Resolves the proxy into the individual {@link SmartGuidePreference} objects it stands for. */
  getElements(): SmartGuidePreference<'single'>[];

  /** If true, smart guides are enabled. */
  get enabled(): Read<M, boolean>;
  set enabled(value: boolean);

  /** If true, smart alignment to object edges is enabled. */
  get alignToObjectEdges(): Read<M, boolean>;
  set alignToObjectEdges(value: boolean);

  /** If true, smart alignment to object centers is enabled. */
  get alignToObjectCenter(): Read<M, boolean>;
  set alignToObjectCenter(value: boolean);

  /** If true, smart dimensions guides are enabled. */
  get smartDimensions(): Read<M, boolean>;
  set smartDimensions(value: boolean);

  /** If true, smart spacing guides are enabled. */
  get smartSpacing(): Read<M, boolean>;
  set smartSpacing(value: boolean);

  /**
   * The guide color shown in the UI. Assign either an `[R, G, B]` triple
   * (each `0`–`255`) or a named {@link UIColors} value.
   */
  get guideColor(): Read<M, number[] | UIColors>;
  set guideColor(value: number[] | UIColors);
}
