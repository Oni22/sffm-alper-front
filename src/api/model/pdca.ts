


export default class PDCA {

    title?: string
    description?: string
    downtime?: string
    shortTimeAction?: string
    newcauses?: string
    longTimeAction?: string
    ressources?: string
    goals?: string
    timestamp?: string


    fromJson(data: any) : PDCA {
        this.title = data.title
        this.description = data.description
        this.downtime = data.downtime
        this.shortTimeAction =  data.shortTimeAction
        this.newcauses = data.newcauses
        this.longTimeAction =  data.longTimeAction
        this.ressources = data.ressources,
        this.goals = data.goals,
        this.timestamp = data.timestamp
        return this;

    }

    toJson() {
        return {
            "title": this.title,
            "description": this.description,
            "downtime": this.downtime,
            "shortTimeAction": this.shortTimeAction,
            "newcauses": this.newcauses,
            "longTimeAction": this.longTimeAction,
            "ressources": this.ressources,
            "goals": this.goals
        }
    }

}