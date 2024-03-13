import { Chartitem } from "@/components/chart/chart-item";
import { IncomeChart } from "@/components/chart/income-chart";
import { TransactionHistory } from "./transaction-history";

export const ChartArea = () => {

    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Chartitem title="Gráfico de receitas">
                <IncomeChart />
            </Chartitem>
            <Chartitem title="Histórico de transações">
                <TransactionHistory />
            </Chartitem>
        </div>
    );

}
