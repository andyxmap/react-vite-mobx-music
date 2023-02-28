import instance from '@/api/instance';
import { useEnv } from '@/hooks/useEnv';
import { FeatureCollection } from 'geojson';

export const useApi = (url:string) => {

  return instance.get<FeatureCollection>(url, {
    params:{
        "apiKey":useEnv().apiKey,
    },
    headers:{
        "Access-Control-Allow-Origin": "*"
    }
})
};