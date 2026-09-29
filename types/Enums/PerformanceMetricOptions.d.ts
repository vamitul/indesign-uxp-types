/**
 * PerformanceMetricOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PerformanceMetricOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PerformanceMetricOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PerformanceMetricOptions>): boolean;

  /**
   * @internal **WARNING:** `__PerformanceMetricOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PerformanceMetricOptions]: never;
}


/**
 * The CPU time.
 */
interface PerformanceMetricOptions_CPU_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668314484;
}

/**
 * The number of threads.
 */
interface PerformanceMetricOptions_NUMBER_OF_THREADS extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1853122674;
}

/**
 * The overall system CPU.
 */
interface PerformanceMetricOptions_OVERALL_SYSTEM_CPU extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399025781;
}

/**
 * The overall user CPU.
 */
interface PerformanceMetricOptions_OVERALL_USER_CPU extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1432580213;
}

/**
 * The core allocation count.
 */
interface PerformanceMetricOptions_CORE_ALLOCATION_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1128361059;
}

/**
 * The core memory size.
 */
interface PerformanceMetricOptions_CORE_MEMORY_SIZE extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129539962;
}

/**
 * The resident memory size.
 */
interface PerformanceMetricOptions_RESIDENT_MEMORY_SIZE extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1381198202;
}

/**
 * The virtual memory size.
 */
interface PerformanceMetricOptions_VIRTUAL_MEMORY_SIZE extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1448307066;
}

/**
 * The current memory mark.
 */
interface PerformanceMetricOptions_CURRENT_MEMORY_MARK extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296921195;
}

/**
 * The handle count.
 */
interface PerformanceMetricOptions_HANDLE_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212378740;
}

/**
 * The GDI object count.
 */
interface PerformanceMetricOptions_GDI_OBJECT_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1195657582;
}

/**
 * Heap allocations.
 */
interface PerformanceMetricOptions_HEAP_ALLOCATIONS extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212247148;
}

/**
 * Heap allocations peak.
 */
interface PerformanceMetricOptions_HEAP_ALLOCATIONS_PEAK extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1212239979;
}

/**
 * Memory purge count.
 */
interface PerformanceMetricOptions_MEMORY_PURGE_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297105780;
}

/**
 * Memory purge time.
 */
interface PerformanceMetricOptions_MEMORY_PURGE_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297110125;
}

/**
 * BIB allocations.
 */
interface PerformanceMetricOptions_BIB_ALLOCATIONS extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112097345;
}

/**
 * BIB allocations peak.
 */
interface PerformanceMetricOptions_BIB_ALLOCATIONS_PEAK extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1111576683;
}

/**
 * BIB cache.
 */
interface PerformanceMetricOptions_BIB_CACHE extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1112097379;
}

/**
 * BIB cache peak.
 */
interface PerformanceMetricOptions_BIB_CACHE_PEAK extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1111707755;
}

/**
 * PDF allocations.
 */
interface PerformanceMetricOptions_PDF_ALLOCACTIONS extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346651713;
}

/**
 * PDF allocations peak.
 */
interface PerformanceMetricOptions_PDF_ALLOCACTIONS_PEAK extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346650475;
}

/**
 * Image cache allocations.
 */
interface PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1231897409;
}

/**
 * Image cache allocations peak.
 */
interface PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS_PEAK extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229144427;
}

/**
 * Image cache file bytes read.
 */
interface PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_READ extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1231901284;
}

/**
 * Image cache file bytes written.
 */
interface PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_WRITTEN extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1231902578;
}

/**
 * Image cache file read time.
 */
interface PerformanceMetricOptions_IMAGE_CACHE_FILE_READ_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229148772;
}

/**
 * Image cache file write time.
 */
interface PerformanceMetricOptions_IMAGE_CACHE_FILE_WRITE_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229150066;
}

/**
 * VXferAlloc
 */
interface PerformanceMetricOptions_VXFERALLOC extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1448633921;
}

/**
 * VXferAllocPeak
 */
interface PerformanceMetricOptions_VXFERALLOCPEAK extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1448624491;
}

/**
 * VXferBytesRead
 */
interface PerformanceMetricOptions_VXFERBYTESREAD extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1448633938;
}

/**
 * VXferBytesWritten
 */
interface PerformanceMetricOptions_VXFERBYTESWRITTEN extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1448633943;
}

/**
 * VXferReadTime
 */
interface PerformanceMetricOptions_VXFERREADTIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1448628852;
}

/**
 * VXferWriteTime
 */
interface PerformanceMetricOptions_VXFERWRITETIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1448630132;
}

/**
 * VXferFileBytesRead
 */
interface PerformanceMetricOptions_VXFERFILEBYTESREAD extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1447445106;
}

/**
 * VXFerFileBytesWritten
 */
interface PerformanceMetricOptions_VXFERFILEBYTESWRITTEN extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1447445111;
}

/**
 * Process IO bytes read.
 */
interface PerformanceMetricOptions_PROCESS_IO_BYTES_READ extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229935204;
}

/**
 * Process IO bytes written.
 */
interface PerformanceMetricOptions_PROCESS_IO_BYTES_WRITTEN extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229936498;
}

/**
 * AGMXShowTime
 */
interface PerformanceMetricOptions_AGMXSHOWTIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095191924;
}

/**
 * Database file bytes read.
 */
interface PerformanceMetricOptions_DATABASE_FILE_BYTES_READ extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145197156;
}

/**
 * Database file bytes written.
 */
interface PerformanceMetricOptions_DATABASE_FILE_BYTES_WRITTEN extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145198450;
}

/**
 * Database file read time.
 */
interface PerformanceMetricOptions_DATABASE_FILE_READ_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145197172;
}

/**
 * Database file write time.
 */
interface PerformanceMetricOptions_DATABASE_FILE_WRITE_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145198452;
}

/**
 * Drop shadow memory read time.
 */
interface PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1146311284;
}

/**
 * Drop shadow memory read bytes.
 */
interface PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_BYTES extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1146311266;
}

/**
 * Drop shadow memory write time.
 */
interface PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1146312564;
}

/**
 * Drop shadow memory write bytes.
 */
interface PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_BYTES extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1146312546;
}

/**
 * Drop shadow file read time.
 */
interface PerformanceMetricOptions_DROP_SHADOW_FILE_READ_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145459316;
}

/**
 * Drop shadow file read bytes.
 */
interface PerformanceMetricOptions_DROP_SHADOW_FILE_READ_BYTES extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145459298;
}

/**
 * Drop shadow file write time.
 */
interface PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145460596;
}

/**
 * Drop shadow file write bytes.
 */
interface PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_BYTES extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145460578;
}

/**
 * Change manager update call count.
 */
interface PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129137012;
}

/**
 * Change manager update call time.
 */
interface PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129141357;
}

/**
 * Snapshot count.
 */
interface PerformanceMetricOptions_SNAPSHOT_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397965684;
}

/**
 * Galley composition time.
 */
interface PerformanceMetricOptions_GALLEY_COMPOSITION_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1195594861;
}

/**
 * Layout composition time.
 */
interface PerformanceMetricOptions_LAYOUT_COMPOSITION_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279480941;
}

/**
 * Galley composition count.
 */
interface PerformanceMetricOptions_GALLEY_COMPOSITION_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1195590516;
}

/**
 * Layout composition count.
 */
interface PerformanceMetricOptions_LAYOUT_COMPOSITION_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1279476596;
}

/**
 * Draw manager draw time.
 */
interface PerformanceMetricOptions_DRAW_MANAGER_DRAW_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145918573;
}

/**
 * Draw manager number of interrupts.
 */
interface PerformanceMetricOptions_DRAW_MANAGER_NUMBER_OF_INTERRUPTS extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145915758;
}

/**
 * Snapshot read/write time.
 */
interface PerformanceMetricOptions_SNAPSHOT_READ_WRITE_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397905268;
}

/**
 * New snapshot time.
 */
interface PerformanceMetricOptions_NEW_SNAPSHOT_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397651284;
}

/**
 * Database new UID count.
 */
interface PerformanceMetricOptions_DATABASE_NEW_UID_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145197929;
}

/**
 * Database instantiate count.
 */
interface PerformanceMetricOptions_DATABASE_INSTANTIATE_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145194862;
}

/**
 * Instance cache purge count.
 */
interface PerformanceMetricOptions_INSTANCE_CACHE_PURGE_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1229148259;
}

/**
 * Minisave count.
 */
interface PerformanceMetricOptions_MINISAVE_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297302388;
}

/**
 * XMP filter time.
 */
interface PerformanceMetricOptions_XMP_FILTER_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1481461876;
}

/**
 * Snapshot read/write byte count.
 */
interface PerformanceMetricOptions_SNAPSHOT_READ_WRITE_BYTE_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397905251;
}

/**
 * Database file page reads.
 */
interface PerformanceMetricOptions_DATABASE_FILE_PAGE_READS extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145194098;
}

/**
 * Number of attachable events that have been dispatched.
 */
interface PerformanceMetricOptions_ATTACHABLE_EVENT_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095058292;
}

/**
 * Number of attached scripts that have been executed.
 */
interface PerformanceMetricOptions_ATTACHED_SCRIPTS_COUNT extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095975796;
}

/**
 * Total amount of time spent dispatching attachable events.
 */
interface PerformanceMetricOptions_DISPATCH_EVENT_TIME extends PerformanceMetricOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145394285;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which performance counter to read.
 */
export declare namespace PerformanceMetricOptions {
/**
 * The CPU time.
 */
type CPU_TIME = PerformanceMetricOptions_CPU_TIME;

/**
 * The number of threads.
 */
type NUMBER_OF_THREADS = PerformanceMetricOptions_NUMBER_OF_THREADS;

/**
 * The overall system CPU.
 */
type OVERALL_SYSTEM_CPU = PerformanceMetricOptions_OVERALL_SYSTEM_CPU;

/**
 * The overall user CPU.
 */
type OVERALL_USER_CPU = PerformanceMetricOptions_OVERALL_USER_CPU;

/**
 * The core allocation count.
 */
type CORE_ALLOCATION_COUNT = PerformanceMetricOptions_CORE_ALLOCATION_COUNT;

/**
 * The core memory size.
 */
type CORE_MEMORY_SIZE = PerformanceMetricOptions_CORE_MEMORY_SIZE;

/**
 * The resident memory size.
 */
type RESIDENT_MEMORY_SIZE = PerformanceMetricOptions_RESIDENT_MEMORY_SIZE;

/**
 * The virtual memory size.
 */
type VIRTUAL_MEMORY_SIZE = PerformanceMetricOptions_VIRTUAL_MEMORY_SIZE;

/**
 * The current memory mark.
 */
type CURRENT_MEMORY_MARK = PerformanceMetricOptions_CURRENT_MEMORY_MARK;

/**
 * The handle count.
 */
type HANDLE_COUNT = PerformanceMetricOptions_HANDLE_COUNT;

/**
 * The GDI object count.
 */
type GDI_OBJECT_COUNT = PerformanceMetricOptions_GDI_OBJECT_COUNT;

/**
 * Heap allocations.
 */
type HEAP_ALLOCATIONS = PerformanceMetricOptions_HEAP_ALLOCATIONS;

/**
 * Heap allocations peak.
 */
type HEAP_ALLOCATIONS_PEAK = PerformanceMetricOptions_HEAP_ALLOCATIONS_PEAK;

/**
 * Memory purge count.
 */
type MEMORY_PURGE_COUNT = PerformanceMetricOptions_MEMORY_PURGE_COUNT;

/**
 * Memory purge time.
 */
type MEMORY_PURGE_TIME = PerformanceMetricOptions_MEMORY_PURGE_TIME;

/**
 * BIB allocations.
 */
type BIB_ALLOCATIONS = PerformanceMetricOptions_BIB_ALLOCATIONS;

/**
 * BIB allocations peak.
 */
type BIB_ALLOCATIONS_PEAK = PerformanceMetricOptions_BIB_ALLOCATIONS_PEAK;

/**
 * BIB cache.
 */
type BIB_CACHE = PerformanceMetricOptions_BIB_CACHE;

/**
 * BIB cache peak.
 */
type BIB_CACHE_PEAK = PerformanceMetricOptions_BIB_CACHE_PEAK;

/**
 * PDF allocations.
 */
type PDF_ALLOCACTIONS = PerformanceMetricOptions_PDF_ALLOCACTIONS;

/**
 * PDF allocations peak.
 */
type PDF_ALLOCACTIONS_PEAK = PerformanceMetricOptions_PDF_ALLOCACTIONS_PEAK;

/**
 * Image cache allocations.
 */
type IMAGE_CACHE_ALLOCATIONS = PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS;

/**
 * Image cache allocations peak.
 */
type IMAGE_CACHE_ALLOCATIONS_PEAK = PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS_PEAK;

/**
 * Image cache file bytes read.
 */
type IMAGE_CACHE_FILE_BYTES_READ = PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_READ;

/**
 * Image cache file bytes written.
 */
type IMAGE_CACHE_FILE_BYTES_WRITTEN = PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_WRITTEN;

/**
 * Image cache file read time.
 */
type IMAGE_CACHE_FILE_READ_TIME = PerformanceMetricOptions_IMAGE_CACHE_FILE_READ_TIME;

/**
 * Image cache file write time.
 */
type IMAGE_CACHE_FILE_WRITE_TIME = PerformanceMetricOptions_IMAGE_CACHE_FILE_WRITE_TIME;

/**
 * VXferAlloc
 */
type VXFERALLOC = PerformanceMetricOptions_VXFERALLOC;

/**
 * VXferAllocPeak
 */
type VXFERALLOCPEAK = PerformanceMetricOptions_VXFERALLOCPEAK;

/**
 * VXferBytesRead
 */
type VXFERBYTESREAD = PerformanceMetricOptions_VXFERBYTESREAD;

/**
 * VXferBytesWritten
 */
type VXFERBYTESWRITTEN = PerformanceMetricOptions_VXFERBYTESWRITTEN;

/**
 * VXferReadTime
 */
type VXFERREADTIME = PerformanceMetricOptions_VXFERREADTIME;

/**
 * VXferWriteTime
 */
type VXFERWRITETIME = PerformanceMetricOptions_VXFERWRITETIME;

/**
 * VXferFileBytesRead
 */
type VXFERFILEBYTESREAD = PerformanceMetricOptions_VXFERFILEBYTESREAD;

/**
 * VXFerFileBytesWritten
 */
type VXFERFILEBYTESWRITTEN = PerformanceMetricOptions_VXFERFILEBYTESWRITTEN;

/**
 * Process IO bytes read.
 */
type PROCESS_IO_BYTES_READ = PerformanceMetricOptions_PROCESS_IO_BYTES_READ;

/**
 * Process IO bytes written.
 */
type PROCESS_IO_BYTES_WRITTEN = PerformanceMetricOptions_PROCESS_IO_BYTES_WRITTEN;

/**
 * AGMXShowTime
 */
type AGMXSHOWTIME = PerformanceMetricOptions_AGMXSHOWTIME;

/**
 * Database file bytes read.
 */
type DATABASE_FILE_BYTES_READ = PerformanceMetricOptions_DATABASE_FILE_BYTES_READ;

/**
 * Database file bytes written.
 */
type DATABASE_FILE_BYTES_WRITTEN = PerformanceMetricOptions_DATABASE_FILE_BYTES_WRITTEN;

/**
 * Database file read time.
 */
type DATABASE_FILE_READ_TIME = PerformanceMetricOptions_DATABASE_FILE_READ_TIME;

/**
 * Database file write time.
 */
type DATABASE_FILE_WRITE_TIME = PerformanceMetricOptions_DATABASE_FILE_WRITE_TIME;

/**
 * Drop shadow memory read time.
 */
type DROP_SHADOW_MEMORY_READ_TIME = PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_TIME;

/**
 * Drop shadow memory read bytes.
 */
type DROP_SHADOW_MEMORY_READ_BYTES = PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_BYTES;

/**
 * Drop shadow memory write time.
 */
type DROP_SHADOW_MEMORY_WRITE_TIME = PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_TIME;

/**
 * Drop shadow memory write bytes.
 */
type DROP_SHADOW_MEMORY_WRITE_BYTES = PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_BYTES;

/**
 * Drop shadow file read time.
 */
type DROP_SHADOW_FILE_READ_TIME = PerformanceMetricOptions_DROP_SHADOW_FILE_READ_TIME;

/**
 * Drop shadow file read bytes.
 */
type DROP_SHADOW_FILE_READ_BYTES = PerformanceMetricOptions_DROP_SHADOW_FILE_READ_BYTES;

/**
 * Drop shadow file write time.
 */
type DROP_SHADOW_FILE_WRITE_TIME = PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_TIME;

/**
 * Drop shadow file write bytes.
 */
type DROP_SHADOW_FILE_WRITE_BYTES = PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_BYTES;

/**
 * Change manager update call count.
 */
type CHANGE_MANAGER_UPDATE_CALL_COUNT = PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_COUNT;

/**
 * Change manager update call time.
 */
type CHANGE_MANAGER_UPDATE_CALL_TIME = PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_TIME;

/**
 * Snapshot count.
 */
type SNAPSHOT_COUNT = PerformanceMetricOptions_SNAPSHOT_COUNT;

/**
 * Galley composition time.
 */
type GALLEY_COMPOSITION_TIME = PerformanceMetricOptions_GALLEY_COMPOSITION_TIME;

/**
 * Layout composition time.
 */
type LAYOUT_COMPOSITION_TIME = PerformanceMetricOptions_LAYOUT_COMPOSITION_TIME;

/**
 * Galley composition count.
 */
type GALLEY_COMPOSITION_COUNT = PerformanceMetricOptions_GALLEY_COMPOSITION_COUNT;

/**
 * Layout composition count.
 */
type LAYOUT_COMPOSITION_COUNT = PerformanceMetricOptions_LAYOUT_COMPOSITION_COUNT;

/**
 * Draw manager draw time.
 */
type DRAW_MANAGER_DRAW_TIME = PerformanceMetricOptions_DRAW_MANAGER_DRAW_TIME;

/**
 * Draw manager number of interrupts.
 */
type DRAW_MANAGER_NUMBER_OF_INTERRUPTS = PerformanceMetricOptions_DRAW_MANAGER_NUMBER_OF_INTERRUPTS;

/**
 * Snapshot read/write time.
 */
type SNAPSHOT_READ_WRITE_TIME = PerformanceMetricOptions_SNAPSHOT_READ_WRITE_TIME;

/**
 * New snapshot time.
 */
type NEW_SNAPSHOT_TIME = PerformanceMetricOptions_NEW_SNAPSHOT_TIME;

/**
 * Database new UID count.
 */
type DATABASE_NEW_UID_COUNT = PerformanceMetricOptions_DATABASE_NEW_UID_COUNT;

/**
 * Database instantiate count.
 */
type DATABASE_INSTANTIATE_COUNT = PerformanceMetricOptions_DATABASE_INSTANTIATE_COUNT;

/**
 * Instance cache purge count.
 */
type INSTANCE_CACHE_PURGE_COUNT = PerformanceMetricOptions_INSTANCE_CACHE_PURGE_COUNT;

/**
 * Minisave count.
 */
type MINISAVE_COUNT = PerformanceMetricOptions_MINISAVE_COUNT;

/**
 * XMP filter time.
 */
type XMP_FILTER_TIME = PerformanceMetricOptions_XMP_FILTER_TIME;

/**
 * Snapshot read/write byte count.
 */
type SNAPSHOT_READ_WRITE_BYTE_COUNT = PerformanceMetricOptions_SNAPSHOT_READ_WRITE_BYTE_COUNT;

/**
 * Database file page reads.
 */
type DATABASE_FILE_PAGE_READS = PerformanceMetricOptions_DATABASE_FILE_PAGE_READS;

/**
 * Number of attachable events that have been dispatched.
 */
type ATTACHABLE_EVENT_COUNT = PerformanceMetricOptions_ATTACHABLE_EVENT_COUNT;

/**
 * Number of attached scripts that have been executed.
 */
type ATTACHED_SCRIPTS_COUNT = PerformanceMetricOptions_ATTACHED_SCRIPTS_COUNT;

/**
 * Total amount of time spent dispatching attachable events.
 */
type DISPATCH_EVENT_TIME = PerformanceMetricOptions_DISPATCH_EVENT_TIME;

}
/**
 * Which performance counter to read.
 */
export declare const PerformanceMetricOptions: typeof Enumeration & {

  /**
   * The CPU time.
   */
  readonly CPU_TIME: PerformanceMetricOptions_CPU_TIME;
  /**
   * The CPU time.
   */
  readonly cpuTime: PerformanceMetricOptions_CPU_TIME;
  /**
   * The CPU time.
   */
  readonly cputime: PerformanceMetricOptions_CPU_TIME;

  /**
   * The number of threads.
   */
  readonly NUMBER_OF_THREADS: PerformanceMetricOptions_NUMBER_OF_THREADS;
  /**
   * The number of threads.
   */
  readonly numberOfThreads: PerformanceMetricOptions_NUMBER_OF_THREADS;
  /**
   * The number of threads.
   */
  readonly numberofthreads: PerformanceMetricOptions_NUMBER_OF_THREADS;

  /**
   * The overall system CPU.
   */
  readonly OVERALL_SYSTEM_CPU: PerformanceMetricOptions_OVERALL_SYSTEM_CPU;
  /**
   * The overall system CPU.
   */
  readonly overallSystemCpu: PerformanceMetricOptions_OVERALL_SYSTEM_CPU;
  /**
   * The overall system CPU.
   */
  readonly overallsystemcpu: PerformanceMetricOptions_OVERALL_SYSTEM_CPU;

  /**
   * The overall user CPU.
   */
  readonly OVERALL_USER_CPU: PerformanceMetricOptions_OVERALL_USER_CPU;
  /**
   * The overall user CPU.
   */
  readonly overallUserCpu: PerformanceMetricOptions_OVERALL_USER_CPU;
  /**
   * The overall user CPU.
   */
  readonly overallusercpu: PerformanceMetricOptions_OVERALL_USER_CPU;

  /**
   * The core allocation count.
   */
  readonly CORE_ALLOCATION_COUNT: PerformanceMetricOptions_CORE_ALLOCATION_COUNT;
  /**
   * The core allocation count.
   */
  readonly coreAllocationCount: PerformanceMetricOptions_CORE_ALLOCATION_COUNT;
  /**
   * The core allocation count.
   */
  readonly coreallocationcount: PerformanceMetricOptions_CORE_ALLOCATION_COUNT;

  /**
   * The core memory size.
   */
  readonly CORE_MEMORY_SIZE: PerformanceMetricOptions_CORE_MEMORY_SIZE;
  /**
   * The core memory size.
   */
  readonly coreMemorySize: PerformanceMetricOptions_CORE_MEMORY_SIZE;
  /**
   * The core memory size.
   */
  readonly corememorysize: PerformanceMetricOptions_CORE_MEMORY_SIZE;

  /**
   * The resident memory size.
   */
  readonly RESIDENT_MEMORY_SIZE: PerformanceMetricOptions_RESIDENT_MEMORY_SIZE;
  /**
   * The resident memory size.
   */
  readonly residentMemorySize: PerformanceMetricOptions_RESIDENT_MEMORY_SIZE;
  /**
   * The resident memory size.
   */
  readonly residentmemorysize: PerformanceMetricOptions_RESIDENT_MEMORY_SIZE;

  /**
   * The virtual memory size.
   */
  readonly VIRTUAL_MEMORY_SIZE: PerformanceMetricOptions_VIRTUAL_MEMORY_SIZE;
  /**
   * The virtual memory size.
   */
  readonly virtualMemorySize: PerformanceMetricOptions_VIRTUAL_MEMORY_SIZE;
  /**
   * The virtual memory size.
   */
  readonly virtualmemorysize: PerformanceMetricOptions_VIRTUAL_MEMORY_SIZE;

  /**
   * The current memory mark.
   */
  readonly CURRENT_MEMORY_MARK: PerformanceMetricOptions_CURRENT_MEMORY_MARK;
  /**
   * The current memory mark.
   */
  readonly currentMemoryMark: PerformanceMetricOptions_CURRENT_MEMORY_MARK;
  /**
   * The current memory mark.
   */
  readonly currentmemorymark: PerformanceMetricOptions_CURRENT_MEMORY_MARK;

  /**
   * The handle count.
   */
  readonly HANDLE_COUNT: PerformanceMetricOptions_HANDLE_COUNT;
  /**
   * The handle count.
   */
  readonly handleCount: PerformanceMetricOptions_HANDLE_COUNT;
  /**
   * The handle count.
   */
  readonly handlecount: PerformanceMetricOptions_HANDLE_COUNT;

  /**
   * The GDI object count.
   */
  readonly GDI_OBJECT_COUNT: PerformanceMetricOptions_GDI_OBJECT_COUNT;
  /**
   * The GDI object count.
   */
  readonly gdiObjectCount: PerformanceMetricOptions_GDI_OBJECT_COUNT;
  /**
   * The GDI object count.
   */
  readonly gdiobjectcount: PerformanceMetricOptions_GDI_OBJECT_COUNT;

  /**
   * Heap allocations.
   */
  readonly HEAP_ALLOCATIONS: PerformanceMetricOptions_HEAP_ALLOCATIONS;
  /**
   * Heap allocations.
   */
  readonly heapAllocations: PerformanceMetricOptions_HEAP_ALLOCATIONS;
  /**
   * Heap allocations.
   */
  readonly heapallocations: PerformanceMetricOptions_HEAP_ALLOCATIONS;

  /**
   * Heap allocations peak.
   */
  readonly HEAP_ALLOCATIONS_PEAK: PerformanceMetricOptions_HEAP_ALLOCATIONS_PEAK;
  /**
   * Heap allocations peak.
   */
  readonly heapAllocationsPeak: PerformanceMetricOptions_HEAP_ALLOCATIONS_PEAK;
  /**
   * Heap allocations peak.
   */
  readonly heapallocationspeak: PerformanceMetricOptions_HEAP_ALLOCATIONS_PEAK;

  /**
   * Memory purge count.
   */
  readonly MEMORY_PURGE_COUNT: PerformanceMetricOptions_MEMORY_PURGE_COUNT;
  /**
   * Memory purge count.
   */
  readonly memoryPurgeCount: PerformanceMetricOptions_MEMORY_PURGE_COUNT;
  /**
   * Memory purge count.
   */
  readonly memorypurgecount: PerformanceMetricOptions_MEMORY_PURGE_COUNT;

  /**
   * Memory purge time.
   */
  readonly MEMORY_PURGE_TIME: PerformanceMetricOptions_MEMORY_PURGE_TIME;
  /**
   * Memory purge time.
   */
  readonly memoryPurgeTime: PerformanceMetricOptions_MEMORY_PURGE_TIME;
  /**
   * Memory purge time.
   */
  readonly memorypurgetime: PerformanceMetricOptions_MEMORY_PURGE_TIME;

  /**
   * BIB allocations.
   */
  readonly BIB_ALLOCATIONS: PerformanceMetricOptions_BIB_ALLOCATIONS;
  /**
   * BIB allocations.
   */
  readonly bibAllocations: PerformanceMetricOptions_BIB_ALLOCATIONS;
  /**
   * BIB allocations.
   */
  readonly biballocations: PerformanceMetricOptions_BIB_ALLOCATIONS;

  /**
   * BIB allocations peak.
   */
  readonly BIB_ALLOCATIONS_PEAK: PerformanceMetricOptions_BIB_ALLOCATIONS_PEAK;
  /**
   * BIB allocations peak.
   */
  readonly bibAllocationsPeak: PerformanceMetricOptions_BIB_ALLOCATIONS_PEAK;
  /**
   * BIB allocations peak.
   */
  readonly biballocationspeak: PerformanceMetricOptions_BIB_ALLOCATIONS_PEAK;

  /**
   * BIB cache.
   */
  readonly BIB_CACHE: PerformanceMetricOptions_BIB_CACHE;
  /**
   * BIB cache.
   */
  readonly bibCache: PerformanceMetricOptions_BIB_CACHE;
  /**
   * BIB cache.
   */
  readonly bibcache: PerformanceMetricOptions_BIB_CACHE;

  /**
   * BIB cache peak.
   */
  readonly BIB_CACHE_PEAK: PerformanceMetricOptions_BIB_CACHE_PEAK;
  /**
   * BIB cache peak.
   */
  readonly bibCachePeak: PerformanceMetricOptions_BIB_CACHE_PEAK;
  /**
   * BIB cache peak.
   */
  readonly bibcachepeak: PerformanceMetricOptions_BIB_CACHE_PEAK;

  /**
   * PDF allocations.
   */
  readonly PDF_ALLOCACTIONS: PerformanceMetricOptions_PDF_ALLOCACTIONS;
  /**
   * PDF allocations.
   */
  readonly pdfAllocactions: PerformanceMetricOptions_PDF_ALLOCACTIONS;
  /**
   * PDF allocations.
   */
  readonly pdfallocactions: PerformanceMetricOptions_PDF_ALLOCACTIONS;

  /**
   * PDF allocations peak.
   */
  readonly PDF_ALLOCACTIONS_PEAK: PerformanceMetricOptions_PDF_ALLOCACTIONS_PEAK;
  /**
   * PDF allocations peak.
   */
  readonly pdfAllocactionsPeak: PerformanceMetricOptions_PDF_ALLOCACTIONS_PEAK;
  /**
   * PDF allocations peak.
   */
  readonly pdfallocactionspeak: PerformanceMetricOptions_PDF_ALLOCACTIONS_PEAK;

  /**
   * Image cache allocations.
   */
  readonly IMAGE_CACHE_ALLOCATIONS: PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS;
  /**
   * Image cache allocations.
   */
  readonly imageCacheAllocations: PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS;
  /**
   * Image cache allocations.
   */
  readonly imagecacheallocations: PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS;

  /**
   * Image cache allocations peak.
   */
  readonly IMAGE_CACHE_ALLOCATIONS_PEAK: PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS_PEAK;
  /**
   * Image cache allocations peak.
   */
  readonly imageCacheAllocationsPeak: PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS_PEAK;
  /**
   * Image cache allocations peak.
   */
  readonly imagecacheallocationspeak: PerformanceMetricOptions_IMAGE_CACHE_ALLOCATIONS_PEAK;

  /**
   * Image cache file bytes read.
   */
  readonly IMAGE_CACHE_FILE_BYTES_READ: PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_READ;
  /**
   * Image cache file bytes read.
   */
  readonly imageCacheFileBytesRead: PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_READ;
  /**
   * Image cache file bytes read.
   */
  readonly imagecachefilebytesread: PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_READ;

  /**
   * Image cache file bytes written.
   */
  readonly IMAGE_CACHE_FILE_BYTES_WRITTEN: PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_WRITTEN;
  /**
   * Image cache file bytes written.
   */
  readonly imageCacheFileBytesWritten: PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_WRITTEN;
  /**
   * Image cache file bytes written.
   */
  readonly imagecachefilebyteswritten: PerformanceMetricOptions_IMAGE_CACHE_FILE_BYTES_WRITTEN;

  /**
   * Image cache file read time.
   */
  readonly IMAGE_CACHE_FILE_READ_TIME: PerformanceMetricOptions_IMAGE_CACHE_FILE_READ_TIME;
  /**
   * Image cache file read time.
   */
  readonly imageCacheFileReadTime: PerformanceMetricOptions_IMAGE_CACHE_FILE_READ_TIME;
  /**
   * Image cache file read time.
   */
  readonly imagecachefilereadtime: PerformanceMetricOptions_IMAGE_CACHE_FILE_READ_TIME;

  /**
   * Image cache file write time.
   */
  readonly IMAGE_CACHE_FILE_WRITE_TIME: PerformanceMetricOptions_IMAGE_CACHE_FILE_WRITE_TIME;
  /**
   * Image cache file write time.
   */
  readonly imageCacheFileWriteTime: PerformanceMetricOptions_IMAGE_CACHE_FILE_WRITE_TIME;
  /**
   * Image cache file write time.
   */
  readonly imagecachefilewritetime: PerformanceMetricOptions_IMAGE_CACHE_FILE_WRITE_TIME;

  /**
   * VXferAlloc
   */
  readonly VXFERALLOC: PerformanceMetricOptions_VXFERALLOC;
  /**
   * VXferAlloc
   */
  readonly vxferalloc: PerformanceMetricOptions_VXFERALLOC;

  /**
   * VXferAllocPeak
   */
  readonly VXFERALLOCPEAK: PerformanceMetricOptions_VXFERALLOCPEAK;
  /**
   * VXferAllocPeak
   */
  readonly vxferallocpeak: PerformanceMetricOptions_VXFERALLOCPEAK;

  /**
   * VXferBytesRead
   */
  readonly VXFERBYTESREAD: PerformanceMetricOptions_VXFERBYTESREAD;
  /**
   * VXferBytesRead
   */
  readonly vxferbytesread: PerformanceMetricOptions_VXFERBYTESREAD;

  /**
   * VXferBytesWritten
   */
  readonly VXFERBYTESWRITTEN: PerformanceMetricOptions_VXFERBYTESWRITTEN;
  /**
   * VXferBytesWritten
   */
  readonly vxferbyteswritten: PerformanceMetricOptions_VXFERBYTESWRITTEN;

  /**
   * VXferReadTime
   */
  readonly VXFERREADTIME: PerformanceMetricOptions_VXFERREADTIME;
  /**
   * VXferReadTime
   */
  readonly vxferreadtime: PerformanceMetricOptions_VXFERREADTIME;

  /**
   * VXferWriteTime
   */
  readonly VXFERWRITETIME: PerformanceMetricOptions_VXFERWRITETIME;
  /**
   * VXferWriteTime
   */
  readonly vxferwritetime: PerformanceMetricOptions_VXFERWRITETIME;

  /**
   * VXferFileBytesRead
   */
  readonly VXFERFILEBYTESREAD: PerformanceMetricOptions_VXFERFILEBYTESREAD;
  /**
   * VXferFileBytesRead
   */
  readonly vxferfilebytesread: PerformanceMetricOptions_VXFERFILEBYTESREAD;

  /**
   * VXFerFileBytesWritten
   */
  readonly VXFERFILEBYTESWRITTEN: PerformanceMetricOptions_VXFERFILEBYTESWRITTEN;
  /**
   * VXFerFileBytesWritten
   */
  readonly vxferfilebyteswritten: PerformanceMetricOptions_VXFERFILEBYTESWRITTEN;

  /**
   * Process IO bytes read.
   */
  readonly PROCESS_IO_BYTES_READ: PerformanceMetricOptions_PROCESS_IO_BYTES_READ;
  /**
   * Process IO bytes read.
   */
  readonly processIoBytesRead: PerformanceMetricOptions_PROCESS_IO_BYTES_READ;
  /**
   * Process IO bytes read.
   */
  readonly processiobytesread: PerformanceMetricOptions_PROCESS_IO_BYTES_READ;

  /**
   * Process IO bytes written.
   */
  readonly PROCESS_IO_BYTES_WRITTEN: PerformanceMetricOptions_PROCESS_IO_BYTES_WRITTEN;
  /**
   * Process IO bytes written.
   */
  readonly processIoBytesWritten: PerformanceMetricOptions_PROCESS_IO_BYTES_WRITTEN;
  /**
   * Process IO bytes written.
   */
  readonly processiobyteswritten: PerformanceMetricOptions_PROCESS_IO_BYTES_WRITTEN;

  /**
   * AGMXShowTime
   */
  readonly AGMXSHOWTIME: PerformanceMetricOptions_AGMXSHOWTIME;
  /**
   * AGMXShowTime
   */
  readonly agmxshowtime: PerformanceMetricOptions_AGMXSHOWTIME;

  /**
   * Database file bytes read.
   */
  readonly DATABASE_FILE_BYTES_READ: PerformanceMetricOptions_DATABASE_FILE_BYTES_READ;
  /**
   * Database file bytes read.
   */
  readonly databaseFileBytesRead: PerformanceMetricOptions_DATABASE_FILE_BYTES_READ;
  /**
   * Database file bytes read.
   */
  readonly databasefilebytesread: PerformanceMetricOptions_DATABASE_FILE_BYTES_READ;

  /**
   * Database file bytes written.
   */
  readonly DATABASE_FILE_BYTES_WRITTEN: PerformanceMetricOptions_DATABASE_FILE_BYTES_WRITTEN;
  /**
   * Database file bytes written.
   */
  readonly databaseFileBytesWritten: PerformanceMetricOptions_DATABASE_FILE_BYTES_WRITTEN;
  /**
   * Database file bytes written.
   */
  readonly databasefilebyteswritten: PerformanceMetricOptions_DATABASE_FILE_BYTES_WRITTEN;

  /**
   * Database file read time.
   */
  readonly DATABASE_FILE_READ_TIME: PerformanceMetricOptions_DATABASE_FILE_READ_TIME;
  /**
   * Database file read time.
   */
  readonly databaseFileReadTime: PerformanceMetricOptions_DATABASE_FILE_READ_TIME;
  /**
   * Database file read time.
   */
  readonly databasefilereadtime: PerformanceMetricOptions_DATABASE_FILE_READ_TIME;

  /**
   * Database file write time.
   */
  readonly DATABASE_FILE_WRITE_TIME: PerformanceMetricOptions_DATABASE_FILE_WRITE_TIME;
  /**
   * Database file write time.
   */
  readonly databaseFileWriteTime: PerformanceMetricOptions_DATABASE_FILE_WRITE_TIME;
  /**
   * Database file write time.
   */
  readonly databasefilewritetime: PerformanceMetricOptions_DATABASE_FILE_WRITE_TIME;

  /**
   * Drop shadow memory read time.
   */
  readonly DROP_SHADOW_MEMORY_READ_TIME: PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_TIME;
  /**
   * Drop shadow memory read time.
   */
  readonly dropShadowMemoryReadTime: PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_TIME;
  /**
   * Drop shadow memory read time.
   */
  readonly dropshadowmemoryreadtime: PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_TIME;

  /**
   * Drop shadow memory read bytes.
   */
  readonly DROP_SHADOW_MEMORY_READ_BYTES: PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_BYTES;
  /**
   * Drop shadow memory read bytes.
   */
  readonly dropShadowMemoryReadBytes: PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_BYTES;
  /**
   * Drop shadow memory read bytes.
   */
  readonly dropshadowmemoryreadbytes: PerformanceMetricOptions_DROP_SHADOW_MEMORY_READ_BYTES;

  /**
   * Drop shadow memory write time.
   */
  readonly DROP_SHADOW_MEMORY_WRITE_TIME: PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_TIME;
  /**
   * Drop shadow memory write time.
   */
  readonly dropShadowMemoryWriteTime: PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_TIME;
  /**
   * Drop shadow memory write time.
   */
  readonly dropshadowmemorywritetime: PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_TIME;

  /**
   * Drop shadow memory write bytes.
   */
  readonly DROP_SHADOW_MEMORY_WRITE_BYTES: PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_BYTES;
  /**
   * Drop shadow memory write bytes.
   */
  readonly dropShadowMemoryWriteBytes: PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_BYTES;
  /**
   * Drop shadow memory write bytes.
   */
  readonly dropshadowmemorywritebytes: PerformanceMetricOptions_DROP_SHADOW_MEMORY_WRITE_BYTES;

  /**
   * Drop shadow file read time.
   */
  readonly DROP_SHADOW_FILE_READ_TIME: PerformanceMetricOptions_DROP_SHADOW_FILE_READ_TIME;
  /**
   * Drop shadow file read time.
   */
  readonly dropShadowFileReadTime: PerformanceMetricOptions_DROP_SHADOW_FILE_READ_TIME;
  /**
   * Drop shadow file read time.
   */
  readonly dropshadowfilereadtime: PerformanceMetricOptions_DROP_SHADOW_FILE_READ_TIME;

  /**
   * Drop shadow file read bytes.
   */
  readonly DROP_SHADOW_FILE_READ_BYTES: PerformanceMetricOptions_DROP_SHADOW_FILE_READ_BYTES;
  /**
   * Drop shadow file read bytes.
   */
  readonly dropShadowFileReadBytes: PerformanceMetricOptions_DROP_SHADOW_FILE_READ_BYTES;
  /**
   * Drop shadow file read bytes.
   */
  readonly dropshadowfilereadbytes: PerformanceMetricOptions_DROP_SHADOW_FILE_READ_BYTES;

  /**
   * Drop shadow file write time.
   */
  readonly DROP_SHADOW_FILE_WRITE_TIME: PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_TIME;
  /**
   * Drop shadow file write time.
   */
  readonly dropShadowFileWriteTime: PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_TIME;
  /**
   * Drop shadow file write time.
   */
  readonly dropshadowfilewritetime: PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_TIME;

  /**
   * Drop shadow file write bytes.
   */
  readonly DROP_SHADOW_FILE_WRITE_BYTES: PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_BYTES;
  /**
   * Drop shadow file write bytes.
   */
  readonly dropShadowFileWriteBytes: PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_BYTES;
  /**
   * Drop shadow file write bytes.
   */
  readonly dropshadowfilewritebytes: PerformanceMetricOptions_DROP_SHADOW_FILE_WRITE_BYTES;

  /**
   * Change manager update call count.
   */
  readonly CHANGE_MANAGER_UPDATE_CALL_COUNT: PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_COUNT;
  /**
   * Change manager update call count.
   */
  readonly changeManagerUpdateCallCount: PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_COUNT;
  /**
   * Change manager update call count.
   */
  readonly changemanagerupdatecallcount: PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_COUNT;

  /**
   * Change manager update call time.
   */
  readonly CHANGE_MANAGER_UPDATE_CALL_TIME: PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_TIME;
  /**
   * Change manager update call time.
   */
  readonly changeManagerUpdateCallTime: PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_TIME;
  /**
   * Change manager update call time.
   */
  readonly changemanagerupdatecalltime: PerformanceMetricOptions_CHANGE_MANAGER_UPDATE_CALL_TIME;

  /**
   * Snapshot count.
   */
  readonly SNAPSHOT_COUNT: PerformanceMetricOptions_SNAPSHOT_COUNT;
  /**
   * Snapshot count.
   */
  readonly snapshotCount: PerformanceMetricOptions_SNAPSHOT_COUNT;
  /**
   * Snapshot count.
   */
  readonly snapshotcount: PerformanceMetricOptions_SNAPSHOT_COUNT;

  /**
   * Galley composition time.
   */
  readonly GALLEY_COMPOSITION_TIME: PerformanceMetricOptions_GALLEY_COMPOSITION_TIME;
  /**
   * Galley composition time.
   */
  readonly galleyCompositionTime: PerformanceMetricOptions_GALLEY_COMPOSITION_TIME;
  /**
   * Galley composition time.
   */
  readonly galleycompositiontime: PerformanceMetricOptions_GALLEY_COMPOSITION_TIME;

  /**
   * Layout composition time.
   */
  readonly LAYOUT_COMPOSITION_TIME: PerformanceMetricOptions_LAYOUT_COMPOSITION_TIME;
  /**
   * Layout composition time.
   */
  readonly layoutCompositionTime: PerformanceMetricOptions_LAYOUT_COMPOSITION_TIME;
  /**
   * Layout composition time.
   */
  readonly layoutcompositiontime: PerformanceMetricOptions_LAYOUT_COMPOSITION_TIME;

  /**
   * Galley composition count.
   */
  readonly GALLEY_COMPOSITION_COUNT: PerformanceMetricOptions_GALLEY_COMPOSITION_COUNT;
  /**
   * Galley composition count.
   */
  readonly galleyCompositionCount: PerformanceMetricOptions_GALLEY_COMPOSITION_COUNT;
  /**
   * Galley composition count.
   */
  readonly galleycompositioncount: PerformanceMetricOptions_GALLEY_COMPOSITION_COUNT;

  /**
   * Layout composition count.
   */
  readonly LAYOUT_COMPOSITION_COUNT: PerformanceMetricOptions_LAYOUT_COMPOSITION_COUNT;
  /**
   * Layout composition count.
   */
  readonly layoutCompositionCount: PerformanceMetricOptions_LAYOUT_COMPOSITION_COUNT;
  /**
   * Layout composition count.
   */
  readonly layoutcompositioncount: PerformanceMetricOptions_LAYOUT_COMPOSITION_COUNT;

  /**
   * Draw manager draw time.
   */
  readonly DRAW_MANAGER_DRAW_TIME: PerformanceMetricOptions_DRAW_MANAGER_DRAW_TIME;
  /**
   * Draw manager draw time.
   */
  readonly drawManagerDrawTime: PerformanceMetricOptions_DRAW_MANAGER_DRAW_TIME;
  /**
   * Draw manager draw time.
   */
  readonly drawmanagerdrawtime: PerformanceMetricOptions_DRAW_MANAGER_DRAW_TIME;

  /**
   * Draw manager number of interrupts.
   */
  readonly DRAW_MANAGER_NUMBER_OF_INTERRUPTS: PerformanceMetricOptions_DRAW_MANAGER_NUMBER_OF_INTERRUPTS;
  /**
   * Draw manager number of interrupts.
   */
  readonly drawManagerNumberOfInterrupts: PerformanceMetricOptions_DRAW_MANAGER_NUMBER_OF_INTERRUPTS;
  /**
   * Draw manager number of interrupts.
   */
  readonly drawmanagernumberofinterrupts: PerformanceMetricOptions_DRAW_MANAGER_NUMBER_OF_INTERRUPTS;

  /**
   * Snapshot read/write time.
   */
  readonly SNAPSHOT_READ_WRITE_TIME: PerformanceMetricOptions_SNAPSHOT_READ_WRITE_TIME;
  /**
   * Snapshot read/write time.
   */
  readonly snapshotReadWriteTime: PerformanceMetricOptions_SNAPSHOT_READ_WRITE_TIME;
  /**
   * Snapshot read/write time.
   */
  readonly snapshotreadwritetime: PerformanceMetricOptions_SNAPSHOT_READ_WRITE_TIME;

  /**
   * New snapshot time.
   */
  readonly NEW_SNAPSHOT_TIME: PerformanceMetricOptions_NEW_SNAPSHOT_TIME;
  /**
   * New snapshot time.
   */
  readonly newSnapshotTime: PerformanceMetricOptions_NEW_SNAPSHOT_TIME;
  /**
   * New snapshot time.
   */
  readonly newsnapshottime: PerformanceMetricOptions_NEW_SNAPSHOT_TIME;

  /**
   * Database new UID count.
   */
  readonly DATABASE_NEW_UID_COUNT: PerformanceMetricOptions_DATABASE_NEW_UID_COUNT;
  /**
   * Database new UID count.
   */
  readonly databaseNewUidCount: PerformanceMetricOptions_DATABASE_NEW_UID_COUNT;
  /**
   * Database new UID count.
   */
  readonly databasenewuidcount: PerformanceMetricOptions_DATABASE_NEW_UID_COUNT;

  /**
   * Database instantiate count.
   */
  readonly DATABASE_INSTANTIATE_COUNT: PerformanceMetricOptions_DATABASE_INSTANTIATE_COUNT;
  /**
   * Database instantiate count.
   */
  readonly databaseInstantiateCount: PerformanceMetricOptions_DATABASE_INSTANTIATE_COUNT;
  /**
   * Database instantiate count.
   */
  readonly databaseinstantiatecount: PerformanceMetricOptions_DATABASE_INSTANTIATE_COUNT;

  /**
   * Instance cache purge count.
   */
  readonly INSTANCE_CACHE_PURGE_COUNT: PerformanceMetricOptions_INSTANCE_CACHE_PURGE_COUNT;
  /**
   * Instance cache purge count.
   */
  readonly instanceCachePurgeCount: PerformanceMetricOptions_INSTANCE_CACHE_PURGE_COUNT;
  /**
   * Instance cache purge count.
   */
  readonly instancecachepurgecount: PerformanceMetricOptions_INSTANCE_CACHE_PURGE_COUNT;

  /**
   * Minisave count.
   */
  readonly MINISAVE_COUNT: PerformanceMetricOptions_MINISAVE_COUNT;
  /**
   * Minisave count.
   */
  readonly minisaveCount: PerformanceMetricOptions_MINISAVE_COUNT;
  /**
   * Minisave count.
   */
  readonly minisavecount: PerformanceMetricOptions_MINISAVE_COUNT;

  /**
   * XMP filter time.
   */
  readonly XMP_FILTER_TIME: PerformanceMetricOptions_XMP_FILTER_TIME;
  /**
   * XMP filter time.
   */
  readonly xmpFilterTime: PerformanceMetricOptions_XMP_FILTER_TIME;
  /**
   * XMP filter time.
   */
  readonly xmpfiltertime: PerformanceMetricOptions_XMP_FILTER_TIME;

  /**
   * Snapshot read/write byte count.
   */
  readonly SNAPSHOT_READ_WRITE_BYTE_COUNT: PerformanceMetricOptions_SNAPSHOT_READ_WRITE_BYTE_COUNT;
  /**
   * Snapshot read/write byte count.
   */
  readonly snapshotReadWriteByteCount: PerformanceMetricOptions_SNAPSHOT_READ_WRITE_BYTE_COUNT;
  /**
   * Snapshot read/write byte count.
   */
  readonly snapshotreadwritebytecount: PerformanceMetricOptions_SNAPSHOT_READ_WRITE_BYTE_COUNT;

  /**
   * Database file page reads.
   */
  readonly DATABASE_FILE_PAGE_READS: PerformanceMetricOptions_DATABASE_FILE_PAGE_READS;
  /**
   * Database file page reads.
   */
  readonly databaseFilePageReads: PerformanceMetricOptions_DATABASE_FILE_PAGE_READS;
  /**
   * Database file page reads.
   */
  readonly databasefilepagereads: PerformanceMetricOptions_DATABASE_FILE_PAGE_READS;

  /**
   * Number of attachable events that have been dispatched.
   */
  readonly ATTACHABLE_EVENT_COUNT: PerformanceMetricOptions_ATTACHABLE_EVENT_COUNT;
  /**
   * Number of attachable events that have been dispatched.
   */
  readonly attachableEventCount: PerformanceMetricOptions_ATTACHABLE_EVENT_COUNT;
  /**
   * Number of attachable events that have been dispatched.
   */
  readonly attachableeventcount: PerformanceMetricOptions_ATTACHABLE_EVENT_COUNT;

  /**
   * Number of attached scripts that have been executed.
   */
  readonly ATTACHED_SCRIPTS_COUNT: PerformanceMetricOptions_ATTACHED_SCRIPTS_COUNT;
  /**
   * Number of attached scripts that have been executed.
   */
  readonly attachedScriptsCount: PerformanceMetricOptions_ATTACHED_SCRIPTS_COUNT;
  /**
   * Number of attached scripts that have been executed.
   */
  readonly attachedscriptscount: PerformanceMetricOptions_ATTACHED_SCRIPTS_COUNT;

  /**
   * Total amount of time spent dispatching attachable events.
   */
  readonly DISPATCH_EVENT_TIME: PerformanceMetricOptions_DISPATCH_EVENT_TIME;
  /**
   * Total amount of time spent dispatching attachable events.
   */
  readonly dispatchEventTime: PerformanceMetricOptions_DISPATCH_EVENT_TIME;
  /**
   * Total amount of time spent dispatching attachable events.
   */
  readonly dispatcheventtime: PerformanceMetricOptions_DISPATCH_EVENT_TIME;

}
