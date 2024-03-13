import { Bell, Menu, Search } from 'lucide-react'
import { AvatarMenu } from '@/components/header/avatar';
import { ThemeSelector } from '../theming/theme-switch';

export const Header = () => {

    return (
        <header className='flex justify-between w-full h-[72px]'>
            <div className="flex flex-col justify-center flex-1">
                <Menu className='block lg:hidden' />
                <div className="hidden lg:block">
                    <h1 className="text-3xl font-semibold">Olá, Kellton</h1>
                    <p className="text-muted-foreground">Aqui estão as informações sobre suas vendas</p>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <Search className='cursor-pointer' />
                <div className="relative before:size-2 before:absolute before:rounded-full before:bg-indigo-600 before:top-0 before:right-1">
                    <Bell className='cursor-pointer' />
                </div>
                <AvatarMenu />
                <ThemeSelector />
            </div>
        </header>
    );

}
