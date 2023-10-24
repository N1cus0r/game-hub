import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "26603b68e94344bf8d2dda3f956e6400"
    }
})