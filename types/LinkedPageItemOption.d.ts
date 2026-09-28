/**
 * LinkedPageItemOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { PageItemUnion } from './_base/Unions';
import type { Application } from './Application';
import type { Document } from './Document';
import type { FormField } from './FormField';

/**
 * Update behavior for a linked page item — whether InDesign warns before
 * overwriting local edits, and which kinds of edits survive an update.
 */
export interface LinkedPageItemOption<M extends Mode = 'single'> extends EventTargetDOMObject<PageItemUnion | Application | Document | FormField, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'LinkedPageItemOption';

  /** Resolves the proxy into the individual {@link LinkedPageItemOption} objects it stands for. */
  getElements(): LinkedPageItemOption<'single'>[];

  /** If true, the linked Page Item will be updated while saving. */
  get updateLinkWhileSaving(): Read<M, boolean>;
  set updateLinkWhileSaving(value: boolean);

  /** If true, a warning will be shown if the update link operation will override local edits. */
  get warnOnUpdateOfEditedPageItem(): Read<M, boolean>;
  set warnOnUpdateOfEditedPageItem(value: boolean);

  /** If true, size and shape edits will be preserved during update. */
  get preserveSizeAndShape(): Read<M, boolean>;
  set preserveSizeAndShape(value: boolean);

  /** If true, appearance edits will be preserved during update. */
  get preserveAppearance(): Read<M, boolean>;
  set preserveAppearance(value: boolean);

  /** If true, interactivity edits will be preserved during update. */
  get preserveInteractivity(): Read<M, boolean>;
  set preserveInteractivity(value: boolean);

  /** If true, frame content edits will be preserved during update. */
  get preserveFrameContent(): Read<M, boolean>;
  set preserveFrameContent(value: boolean);

  /** If true, text wrap, hyperlinks, text frame options, and object export settings will be preserved during update. */
  get preserveOthers(): Read<M, boolean>;
  set preserveOthers(value: boolean);
}
