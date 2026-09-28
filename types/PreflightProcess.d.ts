/**
 * PreflightProcess.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { PreflightProfile } from './PreflightProfile';
import type { FilePath } from './_base/Types';

/** A single labeled sub-detail of a {@link PreflightAggregatedResult} error entry. */
export type PreflightErrorDetail = [label: string, description: string];

/** A single flagged error found while running a {@link PreflightProcess}. */
export type PreflightAggregatedError = [
  parentNodeID: number,
  errorName: string,
  pageNumber: string,
  errorInfo: string,
  errorDetail: PreflightErrorDetail[],
];

/** The aggregated results reported by a completed {@link PreflightProcess}. */
export type PreflightAggregatedResult = [
  documentName: string,
  profileName: string,
  results: PreflightAggregatedError[],
];

/**
 * A preflight check running (or completed) against a {@link Document}, created
 * by {@link Application.preflightProcesses}.
 */
export interface PreflightProcess<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightProcess';

  /** Resolves the proxy into the individual {@link PreflightProcess} objects it stands for. */
  getElements(): PreflightProcess<'single'>[];

  /** The document the process is inspecting. */
  readonly targetObject: Read<M, Document>;

  /** The preflight profile the process is checking against. */
  readonly appliedProfile: Read<M, PreflightProfile>;

  /** The description of the preflight process. */
  readonly description: Read<M, string>;

  /** The results found by the process, as a large formatted string. */
  readonly processResults: Read<M, string>;

  /** A description of every element visited by the process. */
  readonly processInventory: Read<M, string>;

  /** The results found by the process, in a structured, machine-readable form. */
  readonly aggregatedResults: Read<M, PreflightAggregatedResult>;

  /** Deletes the preflight process, aborting it if still running. */
  remove(): Read<M, void>;

  /**
   * Blocks script execution until the process finishes. No other processes
   * get CPU time while waiting.
   * @param waitTime The maximum time to wait, in seconds. If omitted, waits
   * until completion no matter how long it takes.
   * @returns `true` if the process finished within the wait time.
   */
  waitForProcess(waitTime?: number): Read<M, boolean>;

  /**
   * Saves a report of the completed preflight process.
   * @param autoOpen If `true`, opens the report after it is created. Defaults to `false`.
   */
  saveReport(to: FilePath, autoOpen?: boolean): Read<M, void>;
}
