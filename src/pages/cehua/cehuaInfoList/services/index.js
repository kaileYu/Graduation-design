import request from '@/utils/request'

export function getCHList(){
    return request(`/api/cehua/cehuaInfoList`)
}