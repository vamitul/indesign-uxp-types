/**
 * MediaItem.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type { Paths } from './Paths';
import type { PageItemParent } from './_base/Parents';
import type { Movie } from './Movie';
import type { Sound } from './Sound';
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
 * A media object (movie or sound clip) placed on a page. The abstract base of
 * {@link Movie} and {@link Sound}.
 */
export interface MediaItem<TParent = PageItemParent, M extends Mode = 'single'> extends PageItem<TParent, PageItemParent, M> {
  /** The object's DOM class name — reports the specific kind, such as `'Movie'` when the object is a {@link Movie}. */
  readonly constructorName: 'MediaItem' | 'Movie' | 'Sound';

  /** Resolves the proxy into the individual {@link MediaItem} objects it stands for. */
  getElements(): MediaItem<TParent, 'single'>[];

  /** A collection of the paths making up the media item's poster-frame outline. */
  readonly paths: Paths;
}

/**
 * A media object InDesign reports as a plain {@link MediaItem} rather than as a movie or a
 * sound.
 *
 * Handle it in the `'MediaItem'` case of a `constructorName` check. Only the members every
 * media object has — its poster frame and its paths — are available on it.
 */
export interface PlainMediaItem<
  TParent = PageItemParent,
  M extends Mode = 'single',
> extends MediaItem<TParent, M> {
  /** Always `'MediaItem'` — this is the generic case, by construction. */
  readonly constructorName: 'MediaItem';
}

// The event names MediaItem carries as constants (G-F248). No block JSDoc: it would merge
// into the hover of the MediaItem type.
export declare const MediaItem: {
  /** Dispatched when the value of a property changes on this MediaItem. This event bubbles. This event is not cancelable. */
  readonly AFTER_ATTRIBUTE_CHANGED: 'afterAttributeChanged';
  /** Dispatched before a MediaItem is placed. This event bubbles. This event is cancelable. */
  readonly BEFORE_PLACE: 'beforePlace';
  /** Dispatched after a MediaItem is placed. This event bubbles. This event is not cancelable. */
  readonly AFTER_PLACE: 'afterPlace';
};
