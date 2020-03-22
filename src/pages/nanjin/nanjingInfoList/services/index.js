import request from '@/utils/request'

export function getNJList() {
    return request(`/api/nanjing/nanjingInfoList`)
}