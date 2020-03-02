import request from '@/utils/request';
export function getInfoList({ id }) {
    return request(`/api/weddingdressInfoList?id=${id}`)
}