/**
 * FindChangeGrepOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Options controlling a GREP find/change operation.
 */
export interface FindChangeGrepOption<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeGrepOption';

  /** Resolves the proxy into the individual {@link FindChangeGrepOption} objects it stands for. */
  getElements(): FindChangeGrepOption<'single'>[];

  /** If true, search in the backward direction. */
  get searchBackwards(): Read<M, boolean>;
  set searchBackwards(value: boolean);

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

  /** If true, finds only text that matches the specified kana type. */
  get kanaSensitive(): Read<M, boolean>;
  set kanaSensitive(value: boolean);

  /** If true, finds only text that matches the specified character width. */
  get widthSensitive(): Read<M, boolean>;
  set widthSensitive(value: boolean);
}
