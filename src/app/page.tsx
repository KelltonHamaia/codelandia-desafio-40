"use client"

import { ChartArea } from "@/components/chart/chartArea";
import { Header } from "@/components/header/header";
import { SidebarMenu } from "@/components/sidebar/sidebar-menu";

const Page = () => {

    return (
        <div className='flex'>
            <SidebarMenu />

            <main className="flex flex-col flex-1 w-full max-w-screen-xl p-10">
                <Header />
                <ChartArea />
            </main>
        </div>
    );

}

export default Page;