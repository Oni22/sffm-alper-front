


export default class Prediction {

    action?: string
    downtime?: string
    //pCause?: string
    //sCause?: string

    fromJson(data: any) {
        this.action = data.action
        this.downtime = data.downtime
        return this
    }

}