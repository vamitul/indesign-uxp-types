/**
 * MotionPreset.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { FilePath } from './_base/Types';

/**
 * A reusable animation preset (as authored in the Animation panel), storing
 * motion, opacity, and timing settings that can be applied to page items.
 */
export interface MotionPreset<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M>,
    NamableDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MotionPreset';

  /** Resolves the proxy into the individual {@link MotionPreset} objects it stands for. */
  getElements(): MotionPreset<'single'>[];

  /** The unique ID of the motion preset. */
  readonly id: Read<M, number>;

  /** The motion preset's raw underlying data. */
  get contents(): Read<M, string>;
  set contents(value: string);

  /** Deletes the motion preset. */
  remove(): Read<M, void>;

  /** Saves a copy of this motion preset to a standalone InDesign motion preset file. */
  saveACopy(to: FilePath): Read<M, void>;

  /**
   * Duplicates the motion preset.
   * @param name The name for the duplicate.
   */
  duplicate(name?: string): Read<M, MotionPreset>;
}
