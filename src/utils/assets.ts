import back from '@/images/back.svg'
import emptyMug from '@/images/emptyMug.svg'
import house from '@/images/house.svg'
import star from '@/images/star.svg'
import user from '@/images/user.svg'

import profile from '@/images/profile.webp'

const _SVG: Record<string, string> = {
  back,
  emptyMug,
  house,
  star,
  user,
}

const _IMG: Record<string, string> = {
  profile,
}

export const SVG = (key: string) => (_SVG[key] ? _SVG[key] : undefined)
export const IMG = (key: string) => (_IMG[key] ? _IMG[key] : undefined)
