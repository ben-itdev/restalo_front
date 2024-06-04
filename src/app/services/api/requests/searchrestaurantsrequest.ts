import { OpenedRequest } from "./openedrequest";

export interface SearchRestaurantsRequest {
    name?: string,
    opened?: OpenedRequest
}
