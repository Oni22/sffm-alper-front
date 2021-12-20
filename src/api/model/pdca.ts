import { mdiTshirtCrew } from "@mdi/js"



export default class PDCA {

    title?: string
    titleTags?: string[] 
    newCauses?:  string[] 
    category?: string
    downtime?: string
    ressources?: string[] 
    shortTimeActions?: string[] 
    longTimeActions?: string[] 
    results?: string[] 
    specifications?: string[]
    goals?: string[]  
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
        this.ressources = data.ressources
        this.shortTimeActions =  data.short_time_action
        this.longTimeActions =  data.long_time_action
        this.results = data.results
        this.specifications = data.specifications
        this.goals = data.goals
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
            "resources": this.ressources,
            "short_time_actions": this.shortTimeActions,
            "long_time_actions": this.longTimeActions,
            "results": this.results,
            "specifications": this.specifications,
            "goals": this.goals,
            "standards": this.standards,
            "username": this.userName,
            "current_phase": this.currentPhase,
            "duration": this.processDuration,
       }
    }

}