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

export type Article = {}

export type User = {
    fullname: string 
    email: string
    createdAt: string 
}