/**
 * CrossReference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Topic } from './Topic';
import type { CrossReferenceType } from './Enums/CrossReferenceType';
import type { CrossReferenceSource } from './CrossReferenceSource';
import type { Hyperlink } from './Hyperlink';
import type { Index } from './Index';

/**
 * A cross reference from one {@link Index} topic to another. For cross
 * references embedded in document text, use {@link CrossReferenceSource}
 * and {@link Hyperlink} instead.
 */
export interface CrossReference<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Topic, M>,
    IndexedDOMObject<Topic, M>,
    NamableDOMObject<Topic, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CrossReference';

  /** Resolves the proxy into the individual {@link CrossReference} objects it stands for. */
  getElements(): CrossReference<'single'>[];

  /** The unique ID of the cross reference. */
  readonly id: Read<M, number>;

  /** The topic this cross reference points to. */
  get referencedTopic(): Read<M, Topic>;
  set referencedTopic(value: Topic);

  /** The text that precedes or follows the referenced topic (e.g. "See" or "See also"). */
  get crossReferenceType(): Read<M, CrossReferenceType>;
  set crossReferenceType(value: CrossReferenceType);

  /** The text used for a custom cross reference type. Valid only when {@link crossReferenceType} is a custom type. */
  get customTypeString(): Read<M, string>;
  set customTypeString(value: string);

  /** Deletes the cross reference. */
  remove(): Read<M, void>;
}
