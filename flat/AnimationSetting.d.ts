/**
 * AnimationSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { PageItemUnion } from './_base/Unions';
import type { FilePath } from './_base/Types';
import type { FormField } from './FormField';
import type { MotionPreset } from './MotionPreset';
import type { AnimationEaseOptions } from './Enums/AnimationEaseOptions';
import type { DesignOptions } from './Enums/DesignOptions';
import type { NothingEnum } from './Enums/NothingEnum';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';

/** A single point on an {@link AnimationSetting} motion path: a 2D anchor with its Bezier direction handles. */
export interface AnimationPathPoint<M extends Mode = 'single'> {
  /** Resolves the proxy into the individual {@link AnimationPathPoint} objects it stands for. */
  getElements(): AnimationPathPoint<'single'>[];

  /** The point itself, as `[x, y]` in the page coordinate space. */
  get anchor(): Read<M, [number, number]>;
  set anchor(value: [number, number]);

  /** The incoming Bezier control handle, as `[x, y]`. Equal to {@link anchor} for a corner point. */
  get leftDirection(): Read<M, [number, number]>;
  set leftDirection(value: [number, number]);

  /** The outgoing Bezier control handle, as `[x, y]`. Equal to {@link anchor} for a corner point. */
  get rightDirection(): Read<M, [number, number]>;
  set rightDirection(value: [number, number]);
}

/** A single keyframe pairing a numeric time index with the value it holds ({@link AnimationSetting.opacityArray}, `rotationArray`, `scaleXArray`, `scaleYArray`). */
export interface AnimationKeyFrame<M extends Mode = 'single'> {
  /** Position along the animation, `0` at the start and `100` at the end. */
  get keyFrame(): Read<M, number>;
  set keyFrame(value: number);

  /** The animated value at this point — the unit depends on which array the frame belongs to. */
  get value(): Read<M, number>;
  set value(value: number);
}
/**
 * The motion-path and property animation applied to a page item or form field for
 * SWF/interactive export: timing, easing, and per-property keyframes for opacity,
 * rotation, and scale.
 */
export interface AnimationSetting {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: PageItemUnion | FormField;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<AnimationSetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<AnimationSetting, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'AnimationSetting';
  /** Resolves the proxy into the individual {@link AnimationSetting}s it stands for. */
  getElements(): AnimationSetting[];
  /** Determines if this animated object has custom settings. */
  readonly hasCustomSettings: boolean;
  /** The base animation preset applied. */
  get preset(): MotionPreset | string | NothingEnum.NOTHING;
  set preset(value: MotionPreset | string | NothingEnum.NOTHING);
  /** The transform offset percentage from the target object bounding box's left-top corner. */
  get transformOffsets(): number[];
  set transformOffsets(value: number[]);
  /** The duration in second for this animation. */
  get duration(): number;
  set duration(value: number);
  /** The list of motion path points for this animation. */
  get motionPathPoints(): { pathPointArray: AnimationPathPoint[]; pathOpen: boolean };
  set motionPathPoints(value: { pathPointArray: AnimationPathPoint[]; pathOpen: boolean });
  /** The list of motion path points and key frames for this animation. */
  get motionPath(): { keyFrame: number; pathPoint: AnimationPathPoint }[];
  set motionPath(value: { keyFrame: number; pathPoint: AnimationPathPoint }[]);
  /** The list of opacity key frames for this animation. */
  get opacityArray(): AnimationKeyFrame[];
  set opacityArray(value: AnimationKeyFrame[]);
  /** The list of rotation key frames for this animation. */
  get rotationArray(): AnimationKeyFrame[];
  set rotationArray(value: AnimationKeyFrame[]);
  /** The list of scale x key frames for this animation. */
  get scaleXArray(): AnimationKeyFrame[];
  set scaleXArray(value: AnimationKeyFrame[]);
  /** The list of scale y key frames for this animation. */
  get scaleYArray(): AnimationKeyFrame[];
  set scaleYArray(value: AnimationKeyFrame[]);
  /** Whether the object's current appearance is the animation's starting point or its end point; see {@link DesignOptions}. */
  get designOption(): DesignOptions;
  set designOption(value: DesignOptions);
  /** How the animation's speed changes over its duration; see {@link AnimationEaseOptions}. */
  get easeType(): AnimationEaseOptions;
  set easeType(value: AnimationEaseOptions);
  /** The number of times this animation plays. */
  get plays(): number;
  set plays(value: number);
  /** If true, the animation plays in a continuous loop. */
  get playsLoop(): boolean;
  set playsLoop(value: boolean);
  /** Determines if this object is initially hidden when displayed in an exported SWF file. */
  get initiallyHidden(): boolean;
  set initiallyHidden(value: boolean);
  /** Determines if this object is hidden after its animation is played in an exported SWF file. */
  get hiddenAfter(): boolean;
  set hiddenAfter(value: boolean);
  /**
   * Save a copy of this motion preset to an InDesign motion preset file.
   * @param to The Flash motion preset file to export to.
   */
  saveACopy(to: FilePath): void;
  /**
   * Save this motion preset as a custom preset.
   * @param name The name for the new motion preset.
   */
  save(name: string): MotionPreset;
}


/**
 * The broadcast proxy for {@link AnimationSetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link AnimationSetting} there.
 */
export interface AnimationSettingPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (PageItemUnion | FormField)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<AnimationSettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<AnimationSettingPlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'AnimationSetting';
  /** Resolves the proxy into the individual {@link AnimationSetting}s it stands for. */
  getElements(): AnimationSetting[];
  /** Determines if this animated object has custom settings. */
  readonly hasCustomSettings: (boolean)[];
  /** The base animation preset applied. */
  get preset(): (MotionPreset | string | NothingEnum.NOTHING)[];
  set preset(value: MotionPreset | string | NothingEnum.NOTHING);
  /** The transform offset percentage from the target object bounding box's left-top corner. */
  get transformOffsets(): (number[])[];
  set transformOffsets(value: number[]);
  /** The duration in second for this animation. */
  get duration(): (number)[];
  set duration(value: number);
  /** The list of motion path points for this animation. */
  get motionPathPoints(): ({ pathPointArray: AnimationPathPoint[]; pathOpen: boolean })[];
  set motionPathPoints(value: { pathPointArray: AnimationPathPoint[]; pathOpen: boolean });
  /** The list of motion path points and key frames for this animation. */
  get motionPath(): ({ keyFrame: number; pathPoint: AnimationPathPoint }[])[];
  set motionPath(value: { keyFrame: number; pathPoint: AnimationPathPoint }[]);
  /** The list of opacity key frames for this animation. */
  get opacityArray(): (AnimationKeyFrame[])[];
  set opacityArray(value: AnimationKeyFrame[]);
  /** The list of rotation key frames for this animation. */
  get rotationArray(): (AnimationKeyFrame[])[];
  set rotationArray(value: AnimationKeyFrame[]);
  /** The list of scale x key frames for this animation. */
  get scaleXArray(): (AnimationKeyFrame[])[];
  set scaleXArray(value: AnimationKeyFrame[]);
  /** The list of scale y key frames for this animation. */
  get scaleYArray(): (AnimationKeyFrame[])[];
  set scaleYArray(value: AnimationKeyFrame[]);
  /** Whether the object's current appearance is the animation's starting point or its end point; see {@link DesignOptions}. */
  get designOption(): (DesignOptions)[];
  set designOption(value: DesignOptions);
  /** How the animation's speed changes over its duration; see {@link AnimationEaseOptions}. */
  get easeType(): (AnimationEaseOptions)[];
  set easeType(value: AnimationEaseOptions);
  /** The number of times this animation plays. */
  get plays(): (number)[];
  set plays(value: number);
  /** If true, the animation plays in a continuous loop. */
  get playsLoop(): (boolean)[];
  set playsLoop(value: boolean);
  /** Determines if this object is initially hidden when displayed in an exported SWF file. */
  get initiallyHidden(): (boolean)[];
  set initiallyHidden(value: boolean);
  /** Determines if this object is hidden after its animation is played in an exported SWF file. */
  get hiddenAfter(): (boolean)[];
  set hiddenAfter(value: boolean);
  /**
   * Save a copy of this motion preset to an InDesign motion preset file.
   * @param to The Flash motion preset file to export to.
   */
  saveACopy(to: FilePath): (void)[];
  /**
   * Save this motion preset as a custom preset.
   * @param name The name for the new motion preset.
   */
  save(name: string): (MotionPreset)[];
}
