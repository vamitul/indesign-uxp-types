/**
 * TextEditingPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * Text editing preferences.
 */
export interface TextEditingPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextEditingPreference';

  /** Resolves the proxy into the individual {@link TextEditingPreference} objects it stands for. */
  getElements(): TextEditingPreference<'single'>[];

  /** If true, allows text to be dragged and dropped on a layout page. */
  get dragAndDropTextInLayout(): Read<M, boolean>;
  set dragAndDropTextInLayout(value: boolean);

  /** If true, allows text to be dragged and dropped in the story editor or galley view. */
  get allowDragAndDropTextInStory(): Read<M, boolean>;
  set allowDragAndDropTextInStory(value: boolean);

  /** If true, a triple click selects a line of text. If false, a triple click selects a paragraph. */
  get tripleClickSelectsLine(): Read<M, boolean>;
  set tripleClickSelectsLine(value: boolean);

  /** If true, automatically adjusts spacing among words and between words and punctuation marks when cutting and pasting text. */
  get smartCutAndPaste(): Read<M, boolean>;
  set smartCutAndPaste(value: boolean);

  /** If true, a single click (with the Type tool) converts non-text frames to text frames. */
  get singleClickConvertsFramesToTextFrames(): Read<M, boolean>;
  set singleClickConvertsFramesToTextFrames(value: boolean);
}
