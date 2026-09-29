/**
 * FindChangeColorOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { ObjectTypes } from './Enums/ObjectTypes';

/**
 * Find/change color options.
 */
export interface FindChangeColorOption<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeColorOption';

  /** Resolves the proxy into the individual {@link FindChangeColorOption} objects it stands for. */
  getElements(): FindChangeColorOption<'single'>[];

  /** If true, includes locked stories in the find query. */
  get includeLockedStoriesForFind(): Read<M, boolean>;
  set includeLockedStoriesForFind(value: boolean);

  /** If true, includes locked layers in the find query. */
  get includeLockedLayersForFind(): Read<M, boolean>;
  set includeLockedLayersForFind(value: boolean);

  /** If true, includes hidden layers in the find/change query. */
  get includeHiddenLayers(): Read<M, boolean>;
  set includeHiddenLayers(value: boolean);

  /** If true, includes master pages in the find/change query. */
  get includeMasterPages(): Read<M, boolean>;
  set includeMasterPages(value: boolean);

  /** If true, includes footnotes in the find/change query. */
  get includeFootnotes(): Read<M, boolean>;
  set includeFootnotes(value: boolean);

  /** The frame type to restrict the find/change query to. See {@link ObjectTypes}. */
  get objectType(): Read<M, ObjectTypes>;
  set objectType(value: ObjectTypes);
}
