/**
 * HttpLinkConnectionManagerObject.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';

/**
 * The HTTP link connection manager: tracks authenticated connections used by
 * web-hosted (HTTP) linked content.
 *
 * @remarks Experimental — members may change in a future InDesign release.
 */
export interface HttpLinkConnectionManagerObject<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application, M>,
    IndexedDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HttpLinkConnectionManagerObject';

  /** Resolves the proxy into the individual {@link HttpLinkConnectionManagerObject} objects it stands for. */
  getElements(): HttpLinkConnectionManagerObject<'single'>[];

  /** Creates a URL connection for the given server address. */
  httpConnect(serverurl: string, jsonData: string): Read<M, void>;

  /** Checks whether the given server URL is currently connected. */
  isConnected(serverurl: string): Read<M, boolean>;

  /** Logs out from the given server URL. */
  logout(serverurl: string): Read<M, void>;
}
