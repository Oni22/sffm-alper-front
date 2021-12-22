


export default class Fault {

    reason?: string
    category?: string
    workplace?: string
    department?: string
    product?: string
    dispolevel?: string
    timestamp?: string
    id?: string
    estimatedDownTime?: number
    //primaryCause?: string
    //secundaryCause?: string

    fromJson(data: any) : Fault {
        this.reason = data.reason
        this.category = data.category
        this.workplace = data.workplace
        this.department =  data.department
        this.product = data.product,
        this.dispolevel = data.dispolevel,
        this.timestamp = data.timestamp
        this.estimatedDownTime = data.estimated_down_time
        this.id = data.id
        return this;

    }

    toJson() {
        return {
            "id": this.id,
            "reason": this.reason,
            "category": this.category,
            "workplace": this.workplace,
            "department": this.department,
            "product": this.product,
            "dispolevel": this.dispolevel
        }
    }

}