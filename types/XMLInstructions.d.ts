/**
 * XMLInstructions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { XMLInstruction } from './XMLInstruction';
import type { InsertionPoint } from './InsertionPoint';

/**
 * A collection of {@link XMLInstruction} objects.
 * These processing instructions (PIs) provide metadata or specific directions
 * to external XML processors or applications that consume the exported XML.
 *
 * @collection XMLInstruction
 */
export interface XMLInstructions
  extends BaseCollection<XMLInstruction, XMLInstruction, XMLInstruction<'plural'>>, IdCollection<XMLInstruction> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLInstructions';

  /**
   * Creates a new XML processing instruction (PI) and adds it to the collection.
   *
   * @param target The name of the processing instruction (e.g., "xml-stylesheet").
   * @param data The instruction data (e.g., 'type="text/xsl" href="mystyle.xsl"').
   * @param storyOffset The location within a {@link Story} where the PI should be inserted. Can be an {@link InsertionPoint} object or a character index (number).
   * @param withProperties Initial values for properties of the new {@link XMLInstruction}.
   */
  add(
    target: string,
    data?: string,
    storyOffset?: InsertionPoint | number,
    withProperties?: PropertiesSetter<XMLInstruction>,
  ): XMLInstruction;
}
