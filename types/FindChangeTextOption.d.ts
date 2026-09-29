/**
 * FindChangeTextOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Options controlling a text find/change operation (case sensitivity, whole word, search scope).
 */
export interface FindChangeTextOption<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindChangeTextOption';

  /** Resolves the proxy into the individual {@link FindChangeTextOption} objects it stands for. */
  getElements(): FindChangeTextOption<'single'>[];

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

  /** If true, finds only the complete find text string. If false, also finds strings that contain the find text string. */
  get wholeWord(): Read<M, boolean>;
  set wholeWord(value: boolean);

  /** If true, finds strings whose use of case matches the find text string. If false, finds strings that match the find text string regardless of case. */
  get caseSensitive(): Read<M, boolean>;
  set caseSensitive(value: boolean);

  /** If true, finds only text that matches the specified kana type. */
  get kanaSensitive(): Read<M, boolean>;
  set kanaSensitive(value: boolean);

  /** If true, finds only text that matches the specified character width. */
  get widthSensitive(): Read<M, boolean>;
  set widthSensitive(value: boolean);

  /** If true, ignore kashidas in the find/change query. */
  get ignoreKashidas(): Read<M, boolean>;
  set ignoreKashidas(value: boolean);

  /** If true, ignore diacs in the find/change query. */
  get ignoreDiacritics(): Read<M, boolean>;
  set ignoreDiacritics(value: boolean);
}
