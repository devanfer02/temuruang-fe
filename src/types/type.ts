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

export type Booking = {
    id: number;
    workspaceId: number 
    userId: string 
    status: string 
    bookedAt: string
    durationOfUse: string 
    paymentMethod: string
    createdAt: string 
    updatedAt: string 
    workspace: Workspace
}

export type User = {
    fullname: string 
    email: string
    createdAt: string 
    bookings: Booking[]
}