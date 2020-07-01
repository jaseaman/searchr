import axios from "axios";

export const fetchPhotosApi = ({query, count, page}) => axios.request({
    url: `https://api.unsplash.com/search/photos?query=${query}&page=${page}`,
    method: "GET",
    //    TODO : Note : This would obviously not be in source control, requests would be proxied through a backend service
    headers: {
        Authorization: "Client-ID j0bbiUNMJtpGCgzyWkrNbheq_Q-RGpRo8srqYiHULHI"
    }
}).then(response => response.data).catch(e => e)


