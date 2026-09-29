/**
 * LinkedStoryOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { Story } from './Story';
import type { XmlStory } from './XmlStory';

/**
 * The link options for a linked story.
 */
export interface LinkedStoryOption<M extends Mode = 'single'> extends EventTargetDOMObject<Application | Document | Story | XmlStory, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'LinkedStoryOption';

  /** Resolves the proxy into the individual {@link LinkedStoryOption} objects it stands for. */
  getElements(): LinkedStoryOption<'single'>[];

  /** If true, the linked story will be updated while saving. */
  get updateWhileSaving(): Read<M, boolean>;
  set updateWhileSaving(value: boolean);

  /** If true, a warning will be shown if the update link operation will override local edits. */
  get warnOnUpdateOfEditedStory(): Read<M, boolean>;
  set warnOnUpdateOfEditedStory(value: boolean);

  /** If true, forced line breaks will be removed during story creation or update. */
  get removeForcedLineBreaks(): Read<M, boolean>;
  set removeForcedLineBreaks(value: boolean);

  /** If true, style mappings will be applied during linked story creation or update. */
  get applyStyleMappings(): Read<M, boolean>;
  set applyStyleMappings(value: boolean);
}
