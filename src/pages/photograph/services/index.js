import request from '@/utils/request';

export function PhotoList() {
    return request(`/api/photograph`);
}