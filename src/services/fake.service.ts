import {superInstance} from "@/api/instance";
import { FakeImage } from "@/models/fake";

export const getFakeContent = () => {
    return superInstance.get<Array<FakeImage>>("https://jsonplaceholder.typicode.com/albums/")
  };
export const getFakeContentById = (id:string) => {
  return superInstance.get<Array<FakeImage>>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
}

 