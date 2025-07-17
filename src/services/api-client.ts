import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e3626f763a1f4227a7413b154bc034ab'
    }
})