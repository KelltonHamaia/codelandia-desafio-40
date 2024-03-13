"use client"
const report_data: ReportData[] = [
    {
        id: 1,
        title: "Total de vendas",
        value: 3265.21,
        percentage_rate: 11
    },
    {
        id: 2,
        title: "Total líquido",
        value: 2825.58,
        percentage_rate: 15
    },
    {
        id: 3,
        title: "Compras canceladas",
        value: 130.00,
        percentage_rate: -80
    },
    {
        id: 4,
        title: "Reembolsos",
        value: 345.00,
        percentage_rate: -75
    },
]


import { ReportCard } from "@/components/reports/report-card";
import { ReportData } from "@/types/ReportData";

export const ReportArea = () => {

    return (
        <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8'>
            {report_data.map(data => (
                <ReportCard key={data.id} data={data} />
            ))}
        </div>
    );

}

