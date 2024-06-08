import { Hours } from "./hours";
import { Reservations } from "./reservations";

export interface CreateRestaurant {
    name: string,
    owner: string,
    capacity: number,
    hours: Hours,
    reservations?: Reservations
}

