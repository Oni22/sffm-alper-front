import axios from "axios"
import Fault from "./model/fault";


export default class API {

    api = axios.create({
        baseURL: "http://localhost:8000"
    })

    async getAllFaults() : Promise<Array<Fault>> {
        
        try {
            const faults = await this.api.get("/fault")
            return faults.data.map((fault : any) => {
                return new Fault().fromJson(fault)
            });
        } catch(err) {
            return Promise.reject(err)
        }

    }

}