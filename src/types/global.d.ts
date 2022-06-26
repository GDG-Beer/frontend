interface BeerInfo {
  id: number
  name: string
  origin: string
  proof: number
  price: number
  photoUrl: string
}

interface BeerDetailInfo {
  name: string
  origin: string
  photoUrl: string
  score: number
  review: string[]
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
