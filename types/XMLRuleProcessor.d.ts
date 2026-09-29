/**
 * XMLRuleProcessor.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { XMLElement } from './XMLElement';
import type { XMLRuleMatchData } from './XMLRuleMatchData';

/**
 * Runs a set of XPath-driven rules over an XML tree, invoking a matching
 * script handler for each element a rule matches — the engine behind
 * Script Label-based and rule-based XML import processing.
 */
export interface XMLRuleProcessor<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application, M>,
    IndexedDOMObject<Application, M>,
    NamableDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLRuleProcessor';

  /** Resolves the proxy into the individual {@link XMLRuleProcessor} objects it stands for. */
  getElements(): XMLRuleProcessor<'single'>[];

  /** The unique ID of the processor. */
  readonly id: Read<M, number>;

  /** Whether the rule processor has halted, via {@link halt} or after the rule set completed. */
  readonly halted: Read<M, boolean>;

  /** The XPath condition of each rule in the rule set, in rule order. */
  readonly rulePaths: Read<M, string[]>;

  /** Deletes the rule processor. */
  remove(): Read<M, void>;

  /**
   * Begins processing the rule set, starting at `initialElement`. Call
   * {@link findNextMatch} repeatedly afterward to advance through matches.
   */
  startProcessingRuleSet(initialElement: XMLElement): Read<M, XMLRuleMatchData>;

  /** Advances to and returns the next XML element that matches a rule in the set. */
  findNextMatch(): Read<M, XMLRuleMatchData>;

  /** Processes the XML elements (children) of the current XML element against the rule set. */
  startProcessingSubtree(): Read<M, XMLRuleMatchData>;

  /** Skips processing the XML elements (children) of the current XML element. */
  skipChildren(): Read<M, void>;

  /** Stops processing the current XML rule set. */
  endProcessingRuleSet(): Read<M, void>;

  /** Halts the rule processor entirely. */
  halt(): Read<M, void>;
}
