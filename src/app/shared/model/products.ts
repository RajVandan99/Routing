
export interface Iproducts{
    pName: string;
    pId: number;
    pStatus: IpStatus;
    canReturn: number;
}

export type IpStatus =  "In-progress" | "Dispatched" | "Delivered";