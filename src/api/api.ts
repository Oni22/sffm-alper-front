import axios from "axios"
import Fault from "./model/fault";
import Prediction from "./model/predition";
import Solution from "./model/pdca";

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

    async sendFault(fault: Fault) : Promise<Fault | undefined> {
        
        try {
            const res = await this.api.post("/fault",fault.toJson())
            console.log(res.data);
            return new Fault().fromJson(res.data)
        } catch(err) {
            console.log(err)
            return Promise.reject(err)
        }

    }

    async predict(product: string,workplace: string,reason: string) : Promise<Prediction | undefined> {
        
        try {
            const res = await this.api.post("/fault/analyze",{
                reason,
                workplace,
                product
            })
            return new Prediction().fromJson(res.data)
        } catch(err) {
            console.log(err)
            return Promise.reject(err)
        }

    }

}