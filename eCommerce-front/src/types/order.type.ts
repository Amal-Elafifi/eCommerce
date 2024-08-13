import { TProduct } from "./product.types"

export type TOrderItems = {
  userId: number,
  id: number,
  items: TProduct[],
  subtotal: number,
}