/**
 * XMLViewPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';

/**
 * XML view preferences.
 */
export interface XMLViewPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLViewPreference';

  /** Resolves the proxy into the individual {@link XMLViewPreference} objects it stands for. */
  getElements(): XMLViewPreference<'single'>[];

  /** If true, displays the tag options dialog when tagging any item whose parent is not tagged. */
  readonly showTagOptions: Read<M, boolean>;

  /** If true, displays the structure view. */
  get showStructure(): Read<M, boolean>;
  set showStructure(value: boolean);

  /** If true, displays XML tags. */
  get showTagMarkers(): Read<M, boolean>;
  set showTagMarkers(value: boolean);

  /** If true, displays XML tags in tagged frames. */
  get showTaggedFrames(): Read<M, boolean>;
  set showTaggedFrames(value: boolean);

  /** If true, displays attributes as well as elements in the structure view. Note: Valid only when show structure is true. */
  get showAttributes(): Read<M, boolean>;
  set showAttributes(value: boolean);

  /** If true, the structure view displays text snippets of element content. Note: Valid only when show structure is true. */
  get showTextSnippets(): Read<M, boolean>;
  set showTextSnippets(value: boolean);
}
