/**
 * XMLInstruction.d.ts — indesign-uxp-types
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
 * An XML processing instruction (`<?target data?>`) in a document's underlying
 * XML structure.
 */
export interface XMLInstruction<M extends Mode = 'single'> extends XMLItem<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'XMLInstruction';

  /** Resolves the proxy into the individual {@link XMLInstruction} objects it stands for. */
  getElements(): XMLInstruction<'single'>[];

  /** The insertion point immediately before this instruction in its containing story. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** A name that identifies the processing instruction to an application reading the exported XML file. */
  get target(): Read<M, string>;
  set target(value: string);

  /** A value that tells the application reading the exported XML file what to do with the processing instruction. */
  get data(): Read<M, string>;
  set data(value: string);

  /**
   * Moves the instruction to the specified location.
   * @param to The location relative to `reference`, or within the containing object.
   * @param reference The reference object. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: XMLItem | Text): Read<M, XMLInstruction>;

  /** Duplicates the instruction. */
  duplicate(): Read<M, XMLInstruction>;
}
