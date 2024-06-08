import { OpenedRequest } from "../objects/opened";

export interface SearchRestaurantsRequest {
    name?: string,
    opened?: OpenedRequest
}
