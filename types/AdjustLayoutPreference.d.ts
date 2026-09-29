/**
 * AdjustLayoutPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';

/**
 * Settings for Layout Adjustment — how page items, margins, and text resize
 * automatically when the page size, orientation, or margins change.
 */
export interface AdjustLayoutPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'AdjustLayoutPreference';

  /** Resolves the proxy into the individual {@link AdjustLayoutPreference} objects it stands for. */
  getElements(): AdjustLayoutPreference<'single'>[];

  /** If true, adjust layout is enabled. */
  get enableAdjustLayout(): Read<M, boolean>;
  set enableAdjustLayout(value: boolean);

  /** If true, allows locked objects or objects on locked layers to be adjusted. */
  get allowLockedObjectsToAdjust(): Read<M, boolean>;
  set allowLockedObjectsToAdjust(value: boolean);

  /** If true, allows font sizes and leading to adjust. */
  get allowFontSizeAndLeadingAdjustment(): Read<M, boolean>;
  set allowFontSizeAndLeadingAdjustment(value: boolean);

  /** If true, imposes the font size restriction during the adjustment. */
  get imposeFontSizeRestriction(): Read<M, boolean>;
  set imposeFontSizeRestriction(value: boolean);

  /** Minimum font size after adjustment in points. */
  get minimumFontSize(): Read<M, number>;
  set minimumFontSize(value: number);

  /** Maximum font size after adjustment in points. */
  get maximumFontSize(): Read<M, number>;
  set maximumFontSize(value: number);

  /** If true, margins are adjusted automatically if page size is changed. */
  get enableAutoAdjustMargins(): Read<M, boolean>;
  set enableAutoAdjustMargins(value: boolean);
}
