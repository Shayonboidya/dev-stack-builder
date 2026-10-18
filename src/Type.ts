export interface Itechnology {
    id: string,
    name: string,
    category: string,
    description: string,
    icon: string,
    rating: number,
    difficulty: string,
    badge: string
}


export interface ItechnologiesPromiceType {
    technologiesPromice:Promise<Itechnology[]>
}
export interface ItechnologiesDataType{
    technologiesData:Itechnology[];
}
