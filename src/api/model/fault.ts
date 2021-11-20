


export default class Fault {

    reason?: string
    category?: string
    workplace?: string
    department?: string
    product?: string
    dispolevel?: string
    timestamp?: string

    fromJson(data: any) : Fault {
        this.reason = data.reason
        this.category = data.category
        this.workplace = data.workplace
        this.department =  data.department
        this.product = data.product,
        this.dispolevel = data.dispolevel,
        this.timestamp = data.timestamp
        return this;

    }

}