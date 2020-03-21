export interface IMobAction {
    type:string
    info:string
}
export interface IMobState{
numberOfMob:number;
 notify:string
}

export interface IStore {
    mobReducer: IMobState
}