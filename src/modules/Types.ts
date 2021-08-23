
export class Skill {
    id: string = ""
    name: string = ""
    weight: number = 1
    threshold: number = 1
    selfish: boolean = true
}

export class Mediaflow {
    id: string = ""
    name: string = ""
    phone: string = ""
    SLA: number = 1
    TRA: number = 1
}

export class Manager {
    id: string = ""
    role: string = ""
    firstName: string = ""
    lastName: string = ""
    email: string = ""
}

export class Tenant {
    id: string = ""
    name: string = ""
    count_skills: number = 1
    count_mediaflows: number = 1
    count_managers: number = 0
    skills: Skill[] = [ new Skill() ]
    mediaflows: Mediaflow[] = [ new Mediaflow() ]
    managers: Manager[] = []
    media_bot: boolean = true
    media_chat: boolean = true
    media_voice: boolean = true
    media_video: boolean = false
}

// temporary consistency checking function (will be realized on API queries/responses layer)
export function safeUpdateCountMediafows(tenant: Tenant, count: number, callback?: (count: number) => void) {
    tenant.count_mediaflows = count
    tenant.mediaflows.length = count
    for (let i = 0; i < count; i++) if (!tenant.mediaflows[i]) tenant.mediaflows[i] = new Mediaflow()
    if (callback) callback(count)
}

// temporary consistency checking function (will be realized on API queries/responses layer)
export function safeUpdateCountSkills(tenant: Tenant, count: number, callback?: (count: number) => void) {
    tenant.count_skills = count
    tenant.skills.length = count
    for (let i = 0; i < count; i++) if (!tenant.skills[i]) tenant.skills[i] = new Skill()
    if (callback) callback(count)
}

export class Customer {
    id: string = ""
    firstName: string = ""
    lastName: string = ""
    phone: string = ""
    profile: string = "New customer"
}

export class Agent {
    id: string = ""
    firstName: string = ""
    lastName: string = ""
    email: string = ""
    phone: string = ""
    address: string = ""
    reserved: boolean = false
    status: string = ""
    skills: {
        active: boolean
        name: string
        level: number
    }[] = []
    mediaflows: {
        active: boolean
        name: string
    }[] = []
}
