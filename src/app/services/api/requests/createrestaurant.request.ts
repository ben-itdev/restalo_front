import { Hours } from "../objects/hours";
import { Reservations } from "../objects/reservations";

export interface CreateRestaurantRequest {
    name: string,
    capacity: number,
    hours: Hours,
    reservations?: Reservations
}
