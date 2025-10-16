import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { X, Minus, Plus } from 'lucide-react'
import { cart } from '@/data/cartData'
import CartPromoCode from './CartPromoCode'


const CartTable = () => {
    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    <TableRow className={'text-primary'}>
                        <TableHead className="text-left">My Cart</TableHead>
                        <TableHead className="text-center">Price</TableHead>
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-center">Subtotal</TableHead>
                        <TableHead className="text-center"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cart.map((item, index) => (
                        <TableRow key={index} className="border-y border-gray-200 ">
                            {/* Product */}
                            <TableCell className={'py-12'}>
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-[40px] md:w-[60px] xl:w-[150px] xl:h-[150px] rounded-md object-cover" />
                                    <span className="font-medium text-xs lg:text-base">{item.name}</span>
                                </div>
                            </TableCell>

                            {/* Price */}
                            <TableCell className="text-center">${item.price}</TableCell>

                            {/* Quantity */}
                            <TableCell className="text-center">
                                <div className="flex items-center justify-center gap-3">
                                    <Button variant="outline" size="icon" className=" bg-primary text-white rounded-full w-4 h-4 md:w-8 md:h-8">
                                        <Minus className="w-4 h-4" />
                                    </Button>
                                    <div className="w-4 h-4 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-primary text-sm font-medium">
                                        1
                                    </div>
                                    <Button variant="outline" size="icon" className="bg-primary text-white rounded-full w-4 h-4 md:w-8 md:h-8">
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                            </TableCell>

                            {/* Subtotal */}
                            <TableCell className="text-center font-semibold">
                                ${(item.price * 1).toFixed(2)}
                            </TableCell>

                            {/* Action */}
                            <TableCell className="text-center">
                                <Button variant="outline" className={'hover:bg-primary w-5 h-5 md:w-8 md:h-8'} size="icon">
                                    <X className="w-4 h-4 text-gray-500 hover:text-red-500" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


            {/* promo code option  */}
            <CartPromoCode />
        </div>
    )
}

export default CartTable
