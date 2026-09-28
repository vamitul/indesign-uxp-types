/**
 * LinkingPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { LinkResourceRenditionType } from './Enums/LinkResourceRenditionType';

/**
 * Linking preferences.
 */
export interface LinkingPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'LinkingPreference';

  /** Resolves the proxy into the individual {@link LinkingPreference} objects it stands for. */
  getElements(): LinkingPreference<'single'>[];

  /** Experimental: Whether links resolved over HTTP use a low-resolution FPO rendition or the original file — see {@link LinkResourceRenditionType}. */
  get httpLinksRenditionType(): Read<M, LinkResourceRenditionType>;
  set httpLinksRenditionType(value: LinkResourceRenditionType);

  /** Experimental: The preference for enabling auto tagging of items created through http based links. */
  get httpLinksAutoTagAssetsPreference(): Read<M, boolean>;
  set httpLinksAutoTagAssetsPreference(value: boolean);

  /** If true, link states will be checked at document open time. */
  get checkLinksAtOpen(): Read<M, boolean>;
  set checkLinksAtOpen(value: boolean);

  /** If true, missing links will be searched for at document open time. */
  get findMissingLinksAtOpen(): Read<M, boolean>;
  set findMissingLinksAtOpen(value: boolean);
}
