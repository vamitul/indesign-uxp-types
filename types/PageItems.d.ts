/**
 * PageItems.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { PageItem } from './PageItem';
import type { PageItemParent } from './_base/Parents';
import type { AnyPageItemOf } from './_base/Unions';
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
import type { Preferences } from './Preferences';
import type { Rectangle } from './Rectangle';
import type { SVGs } from './SVGs';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * The plural proxy {@link PageItems.everyItem} hands back.
 *
 * Reading or writing a property on the proxy applies it to every page item at once, using only
 * the members every page item has. `getElements()` resolves it into the individual items, each
 * reported as its own specific kind — so check `constructorName` on them, not on the proxy.
 */
export interface PageItemsPlural<TParent = PageItemParent>
  extends PageItem<TParent, PageItemParent, 'plural'> {
  /** Resolves the proxy into the individual page items, each at its concrete class. */
  getElements(): AnyPageItemOf<TParent>[];
}

/**
 * A collection of generic {@link PageItem} objects. This collection provides
 * unified access to all placed items on a page, spread, or document, regardless
 * of their specific subtype (e.g., rectangle, text frame, group).
 *
 * Items reached through {@link item} and {@link everyItem}`.getElements()` are each reported
 * as their own specific kind, so a `constructorName` check tells you what you have before
 * reaching for a member only that kind carries.
 *
 * @collection PageItem
 */
export interface PageItems<TParent = PageItemParent>
  extends
    BaseCollection<AnyPageItemOf<TParent>, PageItem, PageItemsPlural<TParent>>,
    IdCollection<AnyPageItemOf<TParent>>,
    NamedCollection<AnyPageItemOf<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'PageItems';
}
