import {ReactElement} from "react";

export type SideBarType = {
    open: boolean
}

type LinksType = {
    id: number
    name: string
    icon: ReactElement
    route: string
}

export type SideBarIconsType = LinksType[]