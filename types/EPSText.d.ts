/**
 * EPSText.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { TextPaths } from './TextPaths';
import type { PageItemParent } from './_base/Parents';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { Graphic } from './Graphic';
import type { Graphics } from './Graphics';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ObjectStyle } from './ObjectStyle';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Preferences } from './Preferences';
import type { SVGs } from './SVGs';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * A legacy page item that holds text exported as EPS artwork rather than live
 * text. See {@link PageItem} for the shared page-item surface.
 */
export interface EPSText<TParent = PageItemParent, M extends Mode = 'single'> extends PageItem<TParent, PageItemParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EPSText';

  /** Resolves the proxy into the individual {@link EPSText} objects it stands for. */
  getElements(): EPSText<TParent, 'single'>[];

  /** Anchored/inline-object placement settings for this item. */
  readonly anchoredObjectSettings: Read<M, AnchoredObjectSetting>;

  /** A collection of the text paths on this item. */
  readonly textPaths: TextPaths;

  /**
   * Brings the item to the front of its layer, or in front of a specific item.
   * @param reference The item to bring this one in front of. Must share the same parent.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the item to the back of its layer, or behind a specific item.
   * @param reference The item to send this one behind. Must share the same parent.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the item forward one level within its layer. */
  bringForward(): Read<M, void>;

  /** Sends the item back one level within its layer. */
  sendBackward(): Read<M, void>;
}
