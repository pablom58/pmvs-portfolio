"use client";

import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from "next/navigation";
import Link from "next/link"
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    // {
    //     name: "work",
    //     path: "/work"
    // },
    {
        name: "contact",
        path: "/contact"
    }
]


export const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle/>
                    <SheetDescription/>
                </SheetHeader>
                {/*logo*/}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Pablo<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/*nav*/}
                <div className="flex flex-col justify-center items-center gap-8">
                    {
                        links.map((link, index) => (
                            <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}