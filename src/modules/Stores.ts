import { ObservableStore } from "./ObservableStore"
import * as Types from "./Types"
import * as API from "./API"

export const Tenants = new ObservableStore<Types.Tenant[]>([], API.route("tenants")) 

export const Customers = new ObservableStore<Types.Customer[]>([], API.route("customers")) 

export const Tenant = new ObservableStore<Types.Tenant>(new Types.Tenant(), API.route("tenant")) 

export const Agents = new ObservableStore<Types.Agent[]>([], API.route("agents")) 


