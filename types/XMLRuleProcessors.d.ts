/**
 * XMLRuleProcessors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { XMLRuleProcessor } from './XMLRuleProcessor';

/**
 * A collection of {@link XMLRuleProcessor} objects.
 * Rule processors are the engine of InDesign's XML Rules (Glue Code) architecture,
 * evaluating the XML structure against XPaths and executing actions when matches are found.
 *
 * @collection XMLRuleProcessor
 */
export interface XMLRuleProcessors
  extends
    BaseCollection<XMLRuleProcessor, XMLRuleProcessor, XMLRuleProcessor<'plural'>>,
    IdCollection<XMLRuleProcessor>,
    NamedCollection<XMLRuleProcessor> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLRuleProcessors';

  /**
   * Creates a new {@link XMLRuleProcessor} to evaluate the document's XML structure.
   *
   * @param rulePaths The XPath condition paths used by the rules in the rule set.
   * @param prefixMappingTable The namespace mapping table for resolving XPath prefixes, formatted as an array of `[prefix, namespaceURI]` pairs.
   * @param withProperties Initial values for properties of the new {@link XMLRuleProcessor}.
   */
  add(
    rulePaths: string[],
    prefixMappingTable?: [prefix: string, namespaceURI: string][],
    withProperties?: PropertiesSetter<XMLRuleProcessor>,
  ): XMLRuleProcessor;
}
