export type UserLoginDTO = {
    email: string;
    password: string;
}

export type UserRegisterDTO = {
    fullname: string
    email: string;
    password: string;
}

export type WorkspaceParams = {
    id: number
}