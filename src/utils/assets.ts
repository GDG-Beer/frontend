import back from '@/images/back.svg'
import emptyMug from '@/images/emptyMug.svg'
import house from '@/images/house.svg'
import star from '@/images/star.svg'
import user from '@/images/user.svg'
import logo from '@/images/logo.svg'
import plus from '@/images/plus.svg'

import profile from '@/images/profile.webp'
import sampleFood from '@/images/sampleFood.webp'
import asahi from '@/images/asahi.png'

const _SVG: Record<string, string> = {
  back,
  emptyMug,
  house,
  star,
  user,
  logo,
  plus,
}

const _IMG: Record<string, string> = {
  profile,
  sampleFood,
  asahi,
}

export const SVG = (key: string) => (_SVG[key] ? _SVG[key] : undefined)
export const IMG = (key: string) => (_IMG[key] ? _IMG[key] : undefined)
