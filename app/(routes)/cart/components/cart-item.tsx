"use client"

import Image from "next/image"
import { Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartItemProps {
  item: {
    id: number
    name: string
    price: number
    image: string
    quantity: number
    color: string
    storage: string
  }
  updateQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
}

export function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
      <div className="flex-shrink-0">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={100}
          height={100}
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <span className="font-medium">${item.price.toFixed(2)}</span>
        </div>

        <div className="text-sm text-muted-foreground mt-1">
          <p>Color: {item.color}</p>
          <p>Almacenamiento: {item.storage}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Reducir cantidad</span>
            </Button>

            <span className="w-10 text-center">{item.quantity}</span>

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Aumentar cantidad</span>
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => removeItem(item.id)}>
            <Trash2 className="h-4 w-4 mr-1" />
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  )
}

