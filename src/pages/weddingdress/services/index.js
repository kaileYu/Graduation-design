import request from '@/utils/request';

export function WeddingdressList() {
    return request(`/api/weddingdress`);
}