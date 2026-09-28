/**
 * XMLRuleMatchData.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { XMLItem } from './XMLItem';
import type { XMLRuleProcessor } from './XMLRuleProcessor';

/**
 * A single XML element matched by one or more rules while an
 * {@link XMLRuleProcessor} walks an XML rule set.
 */
export interface XMLRuleMatchData<M extends Mode = 'single'>
  extends EventTargetDOMObject<XMLRuleProcessor, M>,
    IndexedDOMObject<XMLRuleProcessor, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLRuleMatchData';

  /** Resolves the proxy into the individual {@link XMLRuleMatchData} objects it stands for. */
  getElements(): XMLRuleMatchData<'single'>[];

  /** The XML element that matched. */
  readonly element: Read<M, XMLItem>;

  /** The indices, within the rule set, of the rules that matched this element. */
  readonly matchRules: Read<M, number[]>;
}
