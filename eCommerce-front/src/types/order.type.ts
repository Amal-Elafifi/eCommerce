import { TProduct } from "./product.types"

export type TOrderItems = {
  id: number,
  items: TProduct[],
  subtotal: number,
}