import { HoursResponse } from "./hoursresponse";

export interface SearchRestaurantResponse {
    capacity: number,
    hours: HoursResponse,
    id: string,
    name: string
}
