import { ReportData } from "@/types/ReportData";
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { TrendingDown, TrendingUp } from "lucide-react";



type Props = {
    data: ReportData
}
export const ReportCard = ({ data }: Props) => {

    return (
        <Card className='h-40 rounded-xl'>
            <CardHeader>
                <CardTitle className="text-base">{data.title}</CardTitle>
            </CardHeader>
            <CardContent className="-mt-2">
                <p className="text-2xl font-bold mb-3">R$ {data.value}</p>
                {data.percentage_rate > 0 && <Badge variant={"outline"} className="text-emerald-400 bg-emerald-100"> <TrendingUp className="mr-4" /> {data.percentage_rate}% </Badge>}
                {data.percentage_rate < 0 && <Badge variant={"outline"} className="text-red-600 bg-red-200"> <TrendingDown className="mr-4" /> {data.percentage_rate}% </Badge>}
            </CardContent>
        </Card>
    );

}
