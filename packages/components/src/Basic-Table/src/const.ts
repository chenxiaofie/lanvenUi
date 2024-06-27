import { SorterResult } from './types/table';
const table = {
  // Form interface request general configuration
  // support xxx.xxx.xxx
  fetchSetting: {
    // The field name of the current page passed to the background
    pageField: 'page',
    // The number field name of each page displayed in the background
    sizeField: 'pageSize',
    // Field name of the form data returned by the interface
    listField: 'items',
    // Total number of tables returned by the interface field name
    totalField: 'total',
  },
  // Number of pages that can be selected
  pageSizeOptions: ['5', '10', '20', '50'],
  // Default display quantity on one page
  defaultPageSize: 10,
  // Default Size
  defaultSize: 'small',
  // Custom general sort function
  defaultSortFn: (sortInfo: SorterResult) => {
    const { field, order } = sortInfo;
    if (field && order) {
      return {
        // The sort field passed to the backend you
        field,
        // Sorting method passed to the background asc/desc
        order,
      };
    } else {
      return {};
    }
  },
  // Custom general filter function
  defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
    return data;
  },
};

export const ROW_KEY = 'key';

// Optional display number per page;
export const PAGE_SIZE_OPTIONS = table.pageSizeOptions;

// Number of items displayed per page
export const PAGE_SIZE = table.defaultPageSize;

// Common interface field settings
export const FETCH_SETTING = table.fetchSetting;

// Default Size
export const DEFAULT_SIZE = table.defaultSize;

// Configure general sort function
export const DEFAULT_SORT_FN = table.defaultSortFn;

export const DEFAULT_FILTER_FN = table.defaultFilterFn;

//  Default layout of table cells
export const DEFAULT_ALIGN = 'center';

export const INDEX_COLUMN_FLAG = 'INDEX';

export const ACTION_COLUMN_FLAG = 'ACTION';
