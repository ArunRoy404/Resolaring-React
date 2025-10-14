import { Button } from '@/components/ui/button';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from 'lucide-react';



const SearchBar = () => {
    return (
        <div>
            <InputGroup className={'w-[500px] bg-white rounded-full py-6'}>
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