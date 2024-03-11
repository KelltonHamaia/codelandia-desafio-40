"use client"

import { Header } from "@/components/header/header";
import { SidebarMenu } from "@/components/sidebar/sidebar-menu";

const Page = () => {

    return (
        <div className='flex'>
            <SidebarMenu />

            <main className="flex flex-1 w-full p-10">
                <Header />
            </main>
        </div>
    );

}

export default Page;