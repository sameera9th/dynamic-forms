export interface Fields {
    label?: string,
    type: string,
    isOptional?: boolean,
    isHidden?: boolean,
    value?: string[] | number,
    default?: string
}

export interface InitalState {
    fetching: boolean,
    data: Fields[] | null | string,
    error: string
}