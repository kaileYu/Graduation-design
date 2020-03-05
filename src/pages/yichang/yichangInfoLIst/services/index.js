import request from '@/utils/request'
export function getycList(){
    return request(`/api/yichangInfoList`)
}