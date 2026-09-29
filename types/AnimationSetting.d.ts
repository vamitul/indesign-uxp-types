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
export interface AnimationSetting<M extends Mode = 'single'> extends EventTargetDOMObject<PageItemUnion | FormField, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'AnimationSetting';

  /** Resolves the proxy into the individual {@link AnimationSetting}s it stands for. */
  getElements(): AnimationSetting<'single'>[];

  /** Determines if this animated object has custom settings. */
  readonly hasCustomSettings: Read<M, boolean>;

  /** The base animation preset applied. */
  get preset(): Read<M, MotionPreset | string | NothingEnum.NOTHING>;
  set preset(value: MotionPreset | string | NothingEnum.NOTHING);

  /** The transform offset percentage from the target object bounding box's left-top corner. */
  get transformOffsets(): Read<M, number[]>;
  set transformOffsets(value: number[]);

  /** The duration in second for this animation. */
  get duration(): Read<M, number>;
  set duration(value: number);

  /** The list of motion path points for this animation. */
  get motionPathPoints(): Read<M, { pathPointArray: AnimationPathPoint[]; pathOpen: boolean }>;
  set motionPathPoints(value: { pathPointArray: AnimationPathPoint[]; pathOpen: boolean });

  /** The list of motion path points and key frames for this animation. */
  get motionPath(): Read<M, { keyFrame: number; pathPoint: AnimationPathPoint }[]>;
  set motionPath(value: { keyFrame: number; pathPoint: AnimationPathPoint }[]);

  /** The list of opacity key frames for this animation. */
  get opacityArray(): Read<M, AnimationKeyFrame[]>;
  set opacityArray(value: AnimationKeyFrame[]);

  /** The list of rotation key frames for this animation. */
  get rotationArray(): Read<M, AnimationKeyFrame[]>;
  set rotationArray(value: AnimationKeyFrame[]);

  /** The list of scale x key frames for this animation. */
  get scaleXArray(): Read<M, AnimationKeyFrame[]>;
  set scaleXArray(value: AnimationKeyFrame[]);

  /** The list of scale y key frames for this animation. */
  get scaleYArray(): Read<M, AnimationKeyFrame[]>;
  set scaleYArray(value: AnimationKeyFrame[]);

  /** Whether the object's current appearance is the animation's starting point or its end point; see {@link DesignOptions}. */
  get designOption(): Read<M, DesignOptions>;
  set designOption(value: DesignOptions);

  /** How the animation's speed changes over its duration; see {@link AnimationEaseOptions}. */
  get easeType(): Read<M, AnimationEaseOptions>;
  set easeType(value: AnimationEaseOptions);

  /** The number of times this animation plays. */
  get plays(): Read<M, number>;
  set plays(value: number);

  /** If true, the animation plays in a continuous loop. */
  get playsLoop(): Read<M, boolean>;
  set playsLoop(value: boolean);

  /** Determines if this object is initially hidden when displayed in an exported SWF file. */
  get initiallyHidden(): Read<M, boolean>;
  set initiallyHidden(value: boolean);

  /** Determines if this object is hidden after its animation is played in an exported SWF file. */
  get hiddenAfter(): Read<M, boolean>;
  set hiddenAfter(value: boolean);

  /**
   * Save a copy of this motion preset to an InDesign motion preset file.
   * @param to The Flash motion preset file to export to.
   */
  saveACopy(to: FilePath): Read<M, void>;

  /**
   * Save this motion preset as a custom preset.
   * @param name The name for the new motion preset.
   */
  save(name: string): Read<M, MotionPreset>;
}
