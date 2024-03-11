import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const AvatarMenu = () => {

    return (
        <div className='flex items-center gap-4'>
            <Avatar>
                <AvatarImage src="/images/saitama.png" className="object-cover" />
                <AvatarFallback>
                    Ke
                </AvatarFallback>
            </Avatar>
            <h3>Kellton Hamaia</h3>
        </div>
    );

}
