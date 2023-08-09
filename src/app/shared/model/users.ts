
export interface Iusers {
    userName: string;
    id: number;
    userRole : IuserRole
}

export type IuserRole = "admin" | "user"