import request from '@/utils/request'

export function getSY(){
    return request(`/api/siyi`)
}