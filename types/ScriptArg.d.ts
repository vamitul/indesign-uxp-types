/**
 * ScriptArg.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * The command-line/host-script argument store — named string values passed
 * into InDesign at launch and readable from within a script.
 */
export interface ScriptArg<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ScriptArg';

  /** Resolves the proxy into the individual {@link ScriptArg} objects it stands for. */
  getElements(): ScriptArg<'single'>[];

  /** Gets the value of a script argument. */
  get(name: string): Read<M, string>;

  /** Gets the value of a script argument. */
  getValue(name: string): Read<M, string>;

  /** Sets the value of a script argument. */
  set(name: string, value: string): Read<M, void>;

  /** Sets the value of a script argument. */
  setValue(name: string, value: string): Read<M, void>;

  /** Returns `true` if the named script argument is defined. */
  isDefined(name: string): Read<M, boolean>;

  /** Clears all script arguments. */
  clear(): Read<M, void>;

  /** Saves the current script arguments. */
  save(): Read<M, void>;

  /** Restores all script arguments from the last {@link save}. */
  restore(): Read<M, void>;
}
