export interface Generation {
    count: number;
    results: InternalGeneration[];
}

export interface  InternalGeneration {
    name: string;
    url: string;
}