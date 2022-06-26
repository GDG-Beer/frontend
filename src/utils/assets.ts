import back from '@/images/back.svg'
import emptyMug from '@/images/emptyMug.svg'
import house from '@/images/house.svg'
import star from '@/images/star.svg'
import user from '@/images/user.svg'
import logo from '@/images/logo.svg'
import logo_indigo from '@/images/logo_indigo.svg'
import plus from '@/images/plus.svg'

import profile from '@/images/profile.webp'
import sampleFood from '@/images/sampleFood.webp'
import sampleFood2 from '@/images/sampleFood2.webp'
import sampleFood3 from '@/images/sampleFood3.webp'
import asahi from '@/images/asahi.png'
import stella_artois from '@/images/stella_artois.png'

const _SVG: Record<string, string> = {
  back,
  emptyMug,
  house,
  star,
  user,
  logo,
  logo_indigo,
  plus,
}

const _IMG: Record<string, string> = {
  profile,
  sampleFood,
  sampleFood2,
  sampleFood3,
  asahi,
  stella_artois,
}

export const SVG = (key: string) => (_SVG[key] ? _SVG[key] : undefined)
export const IMG = (key: string) => (_IMG[key] ? _IMG[key] : undefined)
