import { configure, makeObservable, observable, action, computed, autorun, } from "mobx";
import { IOConnector } from "./API";

export class ObservableStore<DataType> {
    @observable 
    public data: DataType

    @observable
    public error: Error | null = null

    // TODO? if make status @observable then it's changing will update component 
    public status: "initial" | "loading" | "ready" | "editing" | "saving" | "error"

    private touched: boolean = false

    private touch() {
        //console.log("touch", this.status, this.touched)
        JSON.stringify(this.data);
        if (!this.touched) this.touched = true
        else this.status = "editing";
    }
    
    public get modified(): boolean {
        return this.status == "editing"
    }

    private storage: IOConnector<DataType>
    
    constructor (initialData: DataType, storage: IOConnector<DataType>) {
        this.data = initialData;
        this.storage = storage;
        this.status = "initial";
        makeObservable(this);
        autorun(() => this.touch())
    }

    @action
    load() {
        //console.log("loading...")
        this.status = "loading";
        this.storage.read()
            .then(data => {
                this.touched = false;
                this.status = "ready";
                this.data = data;
                //console.log("loaded.")
            })
            .catch(error => {
                this.status = "error";
                this.error = new Error(error);
                //console.error(this)
            })
    }

    @action
    save() {
        //console.log("saving...")
        this.status = "saving";
        this.storage.write(this.data)
            .then(data => {
                this.touched = false;
                this.status = "ready";
                this.data = data; // comment if NO refetch after post
                //console.log("saved.")
            })
            .catch(error => {
                this.status = "error";
                this.error = new Error(error);
                //console.error(this)
            })
    }

}

configure({ enforceActions: "never" })
