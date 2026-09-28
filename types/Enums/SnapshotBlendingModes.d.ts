/**
 * SnapshotBlendingModes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SnapshotBlendingModes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SnapshotBlendingModes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SnapshotBlendingModes>): boolean;

  /**
   * @internal **WARNING:** `__SnapshotBlendingModes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SnapshotBlendingModes]: never;
}


/**
 * Turns off the influence of layout snapshots completely.
 */
interface SnapshotBlendingModes_IGNORE_LAYOUT_SNAPSHOTS extends SnapshotBlendingModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399736679;
}

/**
 * Use the layout snapshot nearest in size and shape to the new layout.
 */
interface SnapshotBlendingModes_USE_NEAREST_SNAPSHOT extends SnapshotBlendingModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399737957;
}

/**
 * Use only layout snapshots within the same class as the new layout.
 */
interface SnapshotBlendingModes_LIMITED_SNAPSHOT_BLENDING extends SnapshotBlendingModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399737449;
}

/**
 * Use up to three nearest snapshots even if a snapshot is in a different class that the new layout.
 */
interface SnapshotBlendingModes_FULL_SNAPSHOT_BLENDING extends SnapshotBlendingModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399735925;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Modes that control which nearby snapshots, by size and shape, are blended into the new layout.
 */
export declare namespace SnapshotBlendingModes {
/**
 * Turns off the influence of layout snapshots completely.
 */
type IGNORE_LAYOUT_SNAPSHOTS = SnapshotBlendingModes_IGNORE_LAYOUT_SNAPSHOTS;

/**
 * Use the layout snapshot nearest in size and shape to the new layout.
 */
type USE_NEAREST_SNAPSHOT = SnapshotBlendingModes_USE_NEAREST_SNAPSHOT;

/**
 * Use only layout snapshots within the same class as the new layout.
 */
type LIMITED_SNAPSHOT_BLENDING = SnapshotBlendingModes_LIMITED_SNAPSHOT_BLENDING;

/**
 * Use up to three nearest snapshots even if a snapshot is in a different class that the new layout.
 */
type FULL_SNAPSHOT_BLENDING = SnapshotBlendingModes_FULL_SNAPSHOT_BLENDING;

}
/**
 * Modes that control which nearby snapshots, by size and shape, are blended into the new layout.
 */
export declare const SnapshotBlendingModes: typeof Enumeration & {

  /**
   * Turns off the influence of layout snapshots completely.
   */
  readonly IGNORE_LAYOUT_SNAPSHOTS: SnapshotBlendingModes_IGNORE_LAYOUT_SNAPSHOTS;
  /**
   * Turns off the influence of layout snapshots completely.
   */
  readonly ignoreLayoutSnapshots: SnapshotBlendingModes_IGNORE_LAYOUT_SNAPSHOTS;
  /**
   * Turns off the influence of layout snapshots completely.
   */
  readonly ignorelayoutsnapshots: SnapshotBlendingModes_IGNORE_LAYOUT_SNAPSHOTS;

  /**
   * Use the layout snapshot nearest in size and shape to the new layout.
   */
  readonly USE_NEAREST_SNAPSHOT: SnapshotBlendingModes_USE_NEAREST_SNAPSHOT;
  /**
   * Use the layout snapshot nearest in size and shape to the new layout.
   */
  readonly useNearestSnapshot: SnapshotBlendingModes_USE_NEAREST_SNAPSHOT;
  /**
   * Use the layout snapshot nearest in size and shape to the new layout.
   */
  readonly usenearestsnapshot: SnapshotBlendingModes_USE_NEAREST_SNAPSHOT;

  /**
   * Use only layout snapshots within the same class as the new layout.
   */
  readonly LIMITED_SNAPSHOT_BLENDING: SnapshotBlendingModes_LIMITED_SNAPSHOT_BLENDING;
  /**
   * Use only layout snapshots within the same class as the new layout.
   */
  readonly limitedSnapshotBlending: SnapshotBlendingModes_LIMITED_SNAPSHOT_BLENDING;
  /**
   * Use only layout snapshots within the same class as the new layout.
   */
  readonly limitedsnapshotblending: SnapshotBlendingModes_LIMITED_SNAPSHOT_BLENDING;

  /**
   * Use up to three nearest snapshots even if a snapshot is in a different class that the new layout.
   */
  readonly FULL_SNAPSHOT_BLENDING: SnapshotBlendingModes_FULL_SNAPSHOT_BLENDING;
  /**
   * Use up to three nearest snapshots even if a snapshot is in a different class that the new layout.
   */
  readonly fullSnapshotBlending: SnapshotBlendingModes_FULL_SNAPSHOT_BLENDING;
  /**
   * Use up to three nearest snapshots even if a snapshot is in a different class that the new layout.
   */
  readonly fullsnapshotblending: SnapshotBlendingModes_FULL_SNAPSHOT_BLENDING;

}
