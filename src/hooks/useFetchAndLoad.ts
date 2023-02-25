import { AxiosCall } from '@/models/axios-call.model';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export const useFetchAndLoad = <T>(axiosCall: AxiosCall<T>) => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callEndpoint = async () => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<T>;
    try {
      result = await axiosCall.call;
    } catch (err: any) {
      throw err;
    }finally{
      setLoading(false);
    }
    
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
};

export default useFetchAndLoad