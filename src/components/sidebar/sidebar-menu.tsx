import { LayoutDashboard, WalletMinimal, ShoppingCart, Users, Settings, Power } from 'lucide-react'

export const SidebarMenu = () => {
    return (
        <nav className='hidden h-screen p-10 lg:block w-[304px]'>
            <div className="p-4 font-semibold text-[32px]">
                <span className="text-brand">e</span>Front
            </div>
            <ul className="list-none">
                <li className='nav--item text-brand'><LayoutDashboard /> Dashboard</li>
                <li className='nav--item'><WalletMinimal /> Carteira</li>
                <li className='nav--item'><ShoppingCart /> Transações</li>
                <li className='nav--item'><Users /> Suporte</li>
                <li className='nav--item'><Settings /> Ajustes</li>
                <li className='text-red-600 nav--item'><Power /> Desconectar</li>
            </ul>
        </nav>
    );

}
