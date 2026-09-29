/**
 * GuidePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { UIColors } from './Enums/UIColors';

/**
 * Ruler-guide and margin/column-guide color, snap, and lock defaults.
 */
export interface GuidePreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GuidePreference';

  /** Resolves the proxy into the individual {@link GuidePreference} objects it stands for. */
  getElements(): GuidePreference<'single'>[];

  /** If true, places guides behind all other objects on the spread. */
  get guidesInBack(): Read<M, boolean>;
  set guidesInBack(value: boolean);

  /** If true, displays the guides. */
  get guidesShown(): Read<M, boolean>;
  set guidesShown(value: boolean);

  /** If true, guides cannot be moved, added, or deleted. */
  get guidesLocked(): Read<M, boolean>;
  set guidesLocked(value: boolean);

  /** If true, an object within the specified range snaps to the nearest guide when the object is created, moved, or resized. For range information, see guide snapto zone. */
  get guidesSnapto(): Read<M, boolean>;
  set guidesSnapto(value: boolean);

  /** The magnification (as a percentage) less than which ruler guides do not appear. (Range: 5 to 4000) */
  get rulerGuidesViewThreshold(): Read<M, number>;
  set rulerGuidesViewThreshold(value: number);

  /** The color of the guide, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. */
  get rulerGuidesColor(): Read<M, number[] | UIColors>;
  set rulerGuidesColor(value: number[] | UIColors);
}
