import request from '@/utils/request';
export function getInfoList() {
    return request(`/api/weddingdress/weddingdressInfoList`)
}