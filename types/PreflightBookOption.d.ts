/**
 * PreflightBookOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Book } from './Book';
import type { PreflightProfile } from './PreflightProfile';
import type { PreflightLayerOptions } from './Enums/PreflightLayerOptions';
import type { PreflightProfileOptions } from './Enums/PreflightProfileOptions';
import type { PreflightScopeOptions } from './Enums/PreflightScopeOptions';

/**
 * The active preflight configuration for a book — which profile and layers
 * are checked across its documents.
 */
export interface PreflightBookOption<M extends Mode = 'single'> extends EventTargetDOMObject<Application | Book, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PreflightBookOption';

  /** Resolves the proxy into the individual {@link PreflightBookOption} objects it stands for. */
  getElements(): PreflightBookOption<'single'>[];

  /** The pages or documents to preflight, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). */
  get preflightScope(): Read<M, PreflightScopeOptions | string>;
  set preflightScope(value: PreflightScopeOptions | string);

  /** Which layers preflight inspects — all layers, only visible ones, or only visible and printable ones. */
  get preflightWhichLayers(): Read<M, PreflightLayerOptions>;
  set preflightWhichLayers(value: PreflightLayerOptions);

  /** If true, include objects on pasteboard when preflighting. */
  get preflightIncludeObjectsOnPasteboard(): Read<M, boolean>;
  set preflightIncludeObjectsOnPasteboard(value: boolean);

  /** If true, include objects that do not print when preflighting. */
  get preflightIncludeNonprintingObjects(): Read<M, boolean>;
  set preflightIncludeNonprintingObjects(value: boolean);

  /** Whether preflight uses each document's embedded profile or the {@link preflightWorkingProfile}. */
  get preflightProfilePolicy(): Read<M, PreflightProfileOptions>;
  set preflightProfilePolicy(value: PreflightProfileOptions);

  /** The profile preflight uses in place of a document's embedded profile, when {@link preflightProfilePolicy} is {@link PreflightProfileOptions.USE_WORKING_PROFILE}. */
  get preflightWorkingProfile(): Read<M, PreflightProfile | string>;
  set preflightWorkingProfile(value: PreflightProfile | string);
}
