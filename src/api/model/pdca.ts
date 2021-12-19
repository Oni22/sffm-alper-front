import { mdiTshirtCrew } from "@mdi/js"



export default class PDCA {

    title?: string
    titleTags?: string[] 
    newCauses?:  string[] 
    category?: string
    downtime?: string
    shortTimeActions?: string[] 
    longTimeActions?: string[] 
    ressources?: string[] 
    goals?: string[] 
    results?: string[] 
    specifications?: string[] 
    standards?: string[] 
    userName?: string
    processDuration?: string
    currentPhase?: string
    timestamp?: string
    id?: string

    fromJson(data: any) : PDCA {
        this.title = data.title
        this.id = data.id
        this.titleTags = data.title_tags
        this.newCauses = data.new_causes
        this.category = data.category
        this.downtime = data.downtime
        this.shortTimeActions =  data.short_time_action
        this.longTimeActions =  data.long_time_action
        this.ressources = data.ressources
        this.goals = data.goals
        this.results = data.results
        this.specifications = data.specifications
        this.standards = data.standards
        this.userName = data.username
        this.processDuration = data.duration
        this.currentPhase = data.current_phase
        this.timestamp = data.timestamp
        return this;

    }

    toJson() {
        return {
            "title": this.title,
            "title_tags" : this.titleTags,
            "new_causes": this.newCauses,
            "category": this.category,
            "downtime": this.downtime,
            "short_time_actions": this.shortTimeActions,
            "long_time_actions": this.longTimeActions,
            "resources": this.ressources,
            "goals": this.goals,
            "results": this.results,
            "specifications": this.specifications,
            "standards": this.standards,
            "username": this.userName,
            "current_phase": this.currentPhase,
            "duration": this.processDuration,
       }
    }

}