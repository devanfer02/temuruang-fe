export type Workspace = {
    id: number 
    name: string 
    description: string 
    location: string 
    capacity: number 
    imageLink: string
    type: string 
    price: number 
    createdAt: string 
    updatedAt: string 
}

export type Article = {
    id: number
    userId: string 
    title: string 
    description: string 
    photoLink: string 
    createdAt: string 
    updatedAt: string 
    user: User
}

export type User = {
    fullname: string 
    email: string
    createdAt: string 
}