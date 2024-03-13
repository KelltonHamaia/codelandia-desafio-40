export const TransactionHistory = () => {

    return (
        <div className='w-full flex flex-col gap-4'>
            <div className="flex justify-between text-sm lg:text-lg p-2 text-brand font-semibold mt-4 bg-white/50 rounded">
                <h2>Ontem</h2>
                <p>R$ -540, 32</p>
            </div>
            <div className="flex justify-between text-sm lg:text-lg p-2 text-brand font-semibold bg-white/50 rounded">
                <h2>Quinta-Feira</h2>
                <p>R$ -273, 90</p>
            </div>
            <div className="flex justify-between text-sm lg:text-lg p-2 text-brand font-semibold bg-white/50 rounded">
                <h2>Segunda-Feira</h2>
                <p>R$ -1456,20</p>
            </div>
        </div>
    );

}
