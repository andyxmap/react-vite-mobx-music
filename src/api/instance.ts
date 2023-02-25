import axios from 'axios';
import {useEnv} from "@/hooks/useEnv"

const env = useEnv()

const instance = axios.create({
    baseURL: env.backend_url,
    timeout: 120000,
});

const superInstance = axios.create()

export {superInstance};
export default instance;

