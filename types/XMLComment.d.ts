/**
 * XMLComment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { XMLItem } from './XMLItem';
import type { InsertionPoint } from './InsertionPoint';
import type { Text } from './Text';
import type { LocationOptions } from './Enums/LocationOptions';

/**
 * A comment (`<!-- ... -->`) in a document's underlying XML structure.
 */
export interface XMLComment<M extends Mode = 'single'> extends XMLItem<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'XMLComment';

  /** Resolves the proxy into the individual {@link XMLComment} objects it stands for. */
  getElements(): XMLComment<'single'>[];

  /** The insertion point immediately before this comment in its containing story. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** The text of the XML comment. */
  get value(): Read<M, string>;
  set value(value: string);

  /**
   * Moves the comment to the specified location.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference object. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: XMLItem | Text): Read<M, XMLComment>;

  /** Duplicates the comment. */
  duplicate(): Read<M, XMLComment>;
}
