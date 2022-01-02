import axios from "axios"
import Fault from "./model/fault";
import Prediction from "./model/predition";
import Solution from "./model/pdca";
import PDCA from "./model/pdca";

export default class API {

    api = axios.create({
        baseURL: "http://aion-sffm.de"
    })

    async getAllFaults() : Promise<Array<Fault>> {
        
        try {
            const faults = await this.api.get("/fault")
            return faults.data.map((fault : any) => {
                return new Fault().fromJson(fault)
            });
        } catch(err) {
            console.log(err)
            return Promise.reject(err)
        }

    }

    async sendPDCA(pdca: PDCA) : Promise<PDCA | undefined> {
        
        try {
            const res = await this.api.post("/pdca",pdca.toJson())
            console.log(res.data);
            return new PDCA().fromJson(res.data)
        } catch(err) {
            console.log(err)
            return Promise.reject(err)
        }

    }

    async updatePDCA(pdca: PDCA,id: string) : Promise<PDCA | undefined> {
        
        try {
            const res = await this.api.post("/pdca/" + id,pdca.toJson())
            console.log(res.data);
            return new PDCA().fromJson(res.data)
        } catch(err) {
            console.log(err)
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

    async predict(fault: Fault) : Promise<Prediction | undefined> {
        
        try {
            const res = await this.api.post("/fault/analyze",fault.toJson())
            return new Prediction().fromJson(res.data)
        } catch(err) {
            console.log(err)
            return Promise.reject(err)
        }

    }

    async getAllPDCA() : Promise<Array<PDCA>> {
        
        try {
            const faults = await this.api.get("/fault")
            return faults.data.map((fault : any) => {
                return new PDCA().fromJson(fault)
            });
        } catch(err) {
            return Promise.reject(err)
        }

    }


}