import { format } from 'date-fns';
import { Buyer } from '@/types/Buyer';
import { Table, TableHeader, TableCaption, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const buyers: Buyer[] = [
    {
        id: 12345,
        data: new Date(2023, 8, 2),
        name: "Roberto Santos",
        local: "Rio Grande do Sul",
        value: 15.00,
        situation: "Aprovado"
    },
    {
        id: 67890,
        data: new Date(2023, 8, 3),
        name: "Beatriz Rodriguez",
        local: "Salvador",
        value: 15.00,
        situation: "Em análise"
    }
]



export const BuyerHistoryTableArea = () => {

    return (
        <>
            <h1 className='text-xl font-bold'>Histórico de compradores</h1>
            <Table className='w-full '>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-primary font-bold">ID</TableHead>
                        <TableHead className="text-primary font-bold">Data</TableHead>
                        <TableHead className="text-primary font-bold">Nome</TableHead>
                        <TableHead className="text-primary font-bold">Localização</TableHead>
                        <TableHead className="text-primary font-bold">Valor</TableHead>
                        <TableHead className="text-primary font-bold">Situação</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {buyers.map(buyer => (
                        <TableRow key={buyer.id}>
                            <TableCell className='text-muted-foreground'>#{buyer.id}</TableCell>
                            <TableCell className='text-muted-foreground'>{format(buyer.data, "MM/dd/yyyy")}</TableCell>
                            <TableCell className='text-muted-foreground'>{buyer.name}</TableCell>
                            <TableCell className='text-muted-foreground'>{buyer.local}</TableCell>
                            <TableCell className='text-muted-foreground'>R$ {buyer.value.toFixed(2)}</TableCell>
                            <TableCell className='text-muted-foreground flex items-center gap-2'>
                                <div className={`${buyer.situation === "Aprovado" ? "bg-emerald-400" : "bg-yellow-500"} size-3 rounded-full`}></div>
                                {buyer.situation}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></>
    );

}
