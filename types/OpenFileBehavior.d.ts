/**
 * OpenFileBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that opens an external file.
 */
export interface OpenFileBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'OpenFileBehavior';

  /** Resolves the proxy into the individual {@link OpenFileBehavior} objects it stands for. */
  getElements(): OpenFileBehavior<'single'>[];

  /** The file path (colon-delimited on macOS) of the file to open. */
  get filePath(): Read<M, string>;
  set filePath(value: string);

}
