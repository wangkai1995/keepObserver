



export interface middlesFn {
    (interrupt:Function,next:Function):(...any)=>any
}



export interface middles {
    [T:string]:Array<middlesFn>
}

