import instance from "@/api/instance"
import { useEnv } from "@/hooks/useEnv"
import { FeatureCollection } from "geojson"
import { observable, action, makeAutoObservable } from "mobx"
import { ViewState } from "react-map-gl"

export class MapStore {
    @observable viewState:Omit<ViewState,"padding"|"bearing"|"pitch"> = {
             latitude:40,
             longitude:-100,
             zoom:3.5,    
    }
    
    @observable fetching: boolean = false
    @observable response:FeatureCollection|null = null

    constructor() {
        makeAutoObservable(this)
        }

    @action async useGeocode(first:string,second:string,main:string) {
        this.fetching = true
        const url = encodeURI(`/v1/geocode/search?text=${first} ${second} ${main}`)
        try {
            const response = await instance.get<FeatureCollection>(url, {
                params:{
                    "apiKey":useEnv().apiKey,
                },
                headers:{
                    "Access-Control-Allow-Origin": "*"
                }
            })
            
            this.setResponse(response.data)
        } catch (error) {
            throw error
        } finally {
            this.fetching = false
        }
    }

    @action setViewState(viewState: ViewState) {
        this.viewState = viewState
    }

    @action setResponse(response: FeatureCollection) {
        this.response = response
        console.log(this.response)
    }

    get isfetching(){
        return this.fetching
    }

    @action setFetching(f:boolean) {
        this.fetching = f
    }

}