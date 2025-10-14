import { Button } from '@/components/ui/button';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';



const SearchBar = ({ className }) => {
    return (
        <div>
            <InputGroup className={
                cn(
                    'w-[500px] bg-white rounded-full py-6',
                    className
                )
            }>
                <InputGroupInput placeholder="Search for product" />
                <InputGroupAddon align="inline-end">
                    <Button variant={'icon'} className={'text-black absolute right-6'}>
                        <Search />
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default SearchBar;