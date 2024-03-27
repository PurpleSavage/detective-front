export type objAssociatedData={
    language:string,
    title:string
}
export type objResponse={
    associated_data:objAssociatedData,
    content:string,
    h1:string
}

export interface MianProps{
    response:objResponse
}