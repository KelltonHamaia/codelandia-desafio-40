import { Chartitem } from "@/components/chart/chart-item";
import { IncomeChart } from "@/components/chart/income-chart";

export const ChartArea = () => {

    return (
        <div className='w-full h-[363px] grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Chartitem title="Gráfico de receitas">
                <IncomeChart />
            </Chartitem>
        </div>
    );

}
