


export default class Fault {

    reason?: string
    category?: string
    workplace?: string
    department?: string
    product?: string
    dispolevel?: string
    timestamp?: string

    constructor(
        reason?: string,
        category?: string,
        workplace?: string,
        department?: string,
        product?: string,
        dispolevel?: string,
        timestamp?: string,
    ) {
        this.reason = reason
        this.category = category
        this.workplace = workplace
        this.department = department
        this.product = product
        this.dispolevel = dispolevel
        this.timestamp = timestamp
    }

    fromJson(data: any) : Fault {
        console.log(data)
        return new Fault(
            data.reason,
            data.category,
            data.workplace,
            data.department,
            data.product,
            data.dispolevel,
            data.timestamp
        )

    }

}