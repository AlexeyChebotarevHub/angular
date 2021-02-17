import { Routes } from "@angular/router"

import {
    List1Component,
    List2Component,
} from "./lists/index"

import {
    Dz1Component,
} from "./dz/index"

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dz1",
        pathMatch: "full"
    },
    {
        path: "list1",
        component: List1Component
    },
    {
        path: "list2",
        component: List2Component
    },

    {
        path: "dz1",
        component: Dz1Component
    },
]