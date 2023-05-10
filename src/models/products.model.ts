export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: Array<String>
}

export interface IServerResponse {
  products: Array<IProduct>
  total: number
  skip: number
  limit: number
}
