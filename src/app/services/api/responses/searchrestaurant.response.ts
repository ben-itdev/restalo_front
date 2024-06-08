import { Hours } from "../objects/hours";

export interface SearchRestaurantResponse {
    capacity: number,
    hours: Hours,
    id: string,
    name: string
}
