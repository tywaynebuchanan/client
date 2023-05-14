import axiosInstance  from "./index";
const host = "https://brynks-api.vercel.app"

export const endpoints = {
    requests: '/api/requests/get-requests',
    send: '/api/requests/send-requests',
    update: '/api/requests/update-status'
}
export const getter = async(endpoints)=>{
    try {
        const {data} = await axiosInstance.post(`${host}${endpoints}`)
        console.log(data)
        return data
    } catch (error) {
        return error.response.data
    }
}


export const setter = async(endpoints,request)=>{
    try {
        const {data} = await axiosInstance.post(`${host}${endpoints}`,request)
        return data
    } catch (error) {
         return error.response.data
    }
}