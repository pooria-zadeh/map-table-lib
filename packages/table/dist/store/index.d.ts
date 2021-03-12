import { Action, Computed } from "easy-peasy";
import { OnSetTableDataPayload, SetFilterColPayload, SetFilterOpPayload, SetFilterValPayload } from "./storeTypes";
import { TableFilterType } from "../filter/VirtualTableFilterType";
import { TableColumns, TableRows, SortType, PageDir } from "../types";
export interface VTStoreModel {
    settings: {
        direction: PageDir;
        lang: string;
    };
    visibleRows: TableRows;
    enhancedColumns: TableColumns;
    showFilter: boolean;
    filters: Array<TableFilterType>;
    toggleSingleRow: Action<VTStoreModel, {
        index: number;
    }>;
    toggleAllRows: Action<VTStoreModel, {
        isSelected: boolean;
    }>;
    toggleVisibleColumns: Action<VTStoreModel, {
        index: number;
    }>;
    toggleShowFilter: Action<VTStoreModel, boolean>;
    setTableData: Action<VTStoreModel, OnSetTableDataPayload>;
    setStickyColumn: Action<VTStoreModel, {
        index: number;
    }>;
    filterSetColumn: Action<VTStoreModel, SetFilterColPayload>;
    filterSetOperation: Action<VTStoreModel, SetFilterOpPayload>;
    filterSetValue: Action<VTStoreModel, SetFilterValPayload>;
    filterDelete: Action<VTStoreModel, {
        index: number;
    }>;
    filterAdd: Action<VTStoreModel, {
        columnKey: string;
    }>;
    sortTable: Action<VTStoreModel, {
        index: number;
        sortType: SortType;
        columnKey: string;
    }>;
    numRowsSelected: Computed<VTStoreModel, number>;
    selectedRows: Computed<VTStoreModel, Array<number>>;
    visibleColumns: Computed<VTStoreModel, TableColumns>;
    stickyColumns: Computed<VTStoreModel, TableColumns>;
}
export declare const vtStore: VTStoreModel;
declare const store: import("easy-peasy").Store<VTStoreModel, import("easy-peasy").EasyPeasyConfig<undefined, {}>>;
export default store;