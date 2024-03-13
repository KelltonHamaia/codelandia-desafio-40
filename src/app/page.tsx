"use client"

import { BuyerHistoryTableArea } from "@/components/buyers-history/buyers-history-area";
import { ChartArea } from "@/components/chart/chartArea";
import { Header } from "@/components/header/header";
import { ReportArea } from "@/components/reports/report-area";
import { SidebarMenu } from "@/components/sidebar/sidebar-menu";

const Page = () => {

    return (
        <div className='flex'>
            <SidebarMenu />

            <main className="flex flex-col gap-5 flex-1 w-full max-w-screen-xl p-10">
                <Header />
                <ChartArea />
                <ReportArea />
                <BuyerHistoryTableArea />
            </main>

        </div>
    );

}

export default Page;