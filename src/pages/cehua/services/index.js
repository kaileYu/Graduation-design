import request from '@/utils/request'

export function getCH(){
    return request(`/api/cehua`)
}