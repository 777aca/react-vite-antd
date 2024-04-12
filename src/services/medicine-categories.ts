import { get } from '../utils/request';

/**
 * 获取列表
 * @param query
 * @returns
 */
export const loadDataAPI = (query: any = {}) =>
  get('/admin/medicine_categories', query);

