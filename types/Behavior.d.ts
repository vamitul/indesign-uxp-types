/**
 * Behavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { BehaviorParent } from './_base/Parents';
import type { BehaviorEvents } from './Enums/BehaviorEvents';
import type { GotoURLBehavior } from './GotoURLBehavior';

/**
 * An interactive-PDF behavior — a discrete action (page navigation, media
 * playback, form submission, animation, …) attached to a form field.
 *
 * A {@link BehaviorParent form field} performs the behavior in response to a
 * triggering {@link BehaviorEvents event} such as a click or rollover.
 */
export interface Behavior<M extends Mode = 'single'>
  extends LabelableEventDOMObject<BehaviorParent, M>,
    IndexedDOMObject<BehaviorParent, M> {
  /** The object's DOM class name — reports the specific kind, such as `'GotoURLBehavior'` when the object is a {@link GotoURLBehavior}. */
  readonly constructorName: 'Behavior' | 'AnimationBehavior' | 'ClearFormBehavior' | 'GotoAnchorBehavior' | 'GotoFirstPageBehavior' | 'GotoLastPageBehavior' | 'GotoNextPageBehavior' | 'GotoNextStateBehavior' | 'GotoNextViewBehavior' | 'GotoPageBehavior' | 'GotoPreviousPageBehavior' | 'GotoPreviousStateBehavior' | 'GotoPreviousViewBehavior' | 'GotoStateBehavior' | 'GotoURLBehavior' | 'MovieBehavior' | 'OpenFileBehavior' | 'PrintFormBehavior' | 'ShowHideFieldsBehavior' | 'SoundBehavior' | 'SubmitFormBehavior' | 'ViewZoomBehavior';

  /** Resolves the proxy into the individual {@link Behavior} objects it stands for. */
  getElements(): Behavior<'single'>[];

  /** The name of the behavior. */
  readonly name: Read<M, string>;

  /** The unique ID of the behavior. */
  readonly id: Read<M, number>;

  /** Whether the behavior is enabled. */
  get enableBehavior(): Read<M, boolean>;
  set enableBehavior(value: boolean);

  /** The {@link BehaviorEvents event} that triggers the behavior. */
  get behaviorEvent(): Read<M, BehaviorEvents>;
  set behaviorEvent(value: BehaviorEvents);

  /** Deletes the behavior. */
  remove(): Read<M, void>;
}

/**
 * A behavior InDesign reports as a plain {@link Behavior} rather than as one of the specific
 * actions — go to a page, open a URL, play a sound, submit a form.
 *
 * Handle it in the `'Behavior'` case of a `constructorName` check. Only the members every
 * behavior has — its name, whether it is enabled, and the event that triggers it — are
 * available on it; what the behavior actually *does* lives on the specific kinds.
 */
export interface PlainBehavior<M extends Mode = 'single'> extends Behavior<M> {
  /** Always `'Behavior'` — this is the generic case, by construction. */
  readonly constructorName: 'Behavior';
}

