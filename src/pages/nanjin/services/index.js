import request from '@/utils/request';

export function getNanjingList() {
    return request(`/api/nanjing`);
}