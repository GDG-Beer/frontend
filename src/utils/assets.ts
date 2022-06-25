import back from '@/images/back.svg'
import emptyMug from '@/images/emptyMug.svg'
import house from '@/images/house.svg'
import star from '@/images/star.svg'
import user from '@/images/user.svg'

const _SVG: Record<string, string> = {
  back,
  emptyMug,
  house,
  star,
  user,
}

export const SVG = (key: string) => (_SVG[key] ? _SVG[key] : undefined)
