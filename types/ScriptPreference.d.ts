/**
 * ScriptPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FilePath, File, Folder } from './_base/Types';
import type { Application } from './Application';
import type { AutoEnum } from './Enums/AutoEnum';
import type { MeasurementUnits } from './Enums/MeasurementUnits';
import type { UserInteractionLevels } from './Enums/UserInteractionLevels';

/**
 * Settings controlling how scripts run — dialog/alert interaction level,
 * measurement units, and whether the screen redraws during execution.
 */
export interface ScriptPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ScriptPreference';

  /** Resolves the proxy into the individual {@link ScriptPreference} objects it stands for. */
  getElements(): ScriptPreference<'single'>[];

  /** The path to the Scripts folder for the application. */
  readonly scriptsFolder: Read<M, Promise<Folder>>;

  /**
   * Every script in the Scripts folder, as `[id, file]` pairs.
   *
   * The id is colon-delimited, e.g. `Application:Community:Scripts Panel:BreakTextThread.jsx`.
   * `await` the second element to reach the {@link File}.
   */
  readonly scriptsList: Read<M, [string, Promise<File>][]>;

  /** The version of the scripting environment. */
  get version(): Read<M, string>;
  set version(value: string);

  /** Controls the display of dialogs and alerts during script processing. */
  get userInteractionLevel(): Read<M, UserInteractionLevels>;
  set userInteractionLevel(value: UserInteractionLevels);

  /** The measurement unit used during script processing. */
  get measurementUnit(): Read<M, AutoEnum | MeasurementUnits>;
  set measurementUnit(value: AutoEnum | MeasurementUnits);

  /** If true, enables redraw during script execution. */
  get enableRedraw(): Read<M, boolean>;
  set enableRedraw(value: boolean);
}
