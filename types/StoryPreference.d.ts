/**
 * StoryPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Document } from './Document';
import type { ObjectStyle } from './ObjectStyle';
import type { Story } from './Story';
import type { XmlStory } from './XmlStory';
import type { StoryDirectionOptions } from './Enums/StoryDirectionOptions';

/**
 * Story preferences.
 */
export interface StoryPreference<M extends Mode = 'single'> extends EventTargetDOMObject<XmlStory | Application | Document | Story | ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'StoryPreference';

  /** Resolves the proxy into the individual {@link StoryPreference} objects it stands for. */
  getElements(): StoryPreference<'single'>[];

  /** If true, adjust the position of characters at the edges of the frame to provide a better appearance. */
  get opticalMarginAlignment(): Read<M, boolean>;
  set opticalMarginAlignment(value: boolean);

  /** The point size used as the basis for calculating optical margin alignment. (Range: 0.1 to 1296). */
  get opticalMarginSize(): Read<M, number>;
  set opticalMarginSize(value: MeasurementValue);

  /** The direction of the story. */
  get storyDirection(): Read<M, StoryDirectionOptions>;
  set storyDirection(value: StoryDirectionOptions);
}
