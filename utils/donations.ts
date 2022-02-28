import { Tag } from './tags'
import yaml from 'yaml'
import glob from 'glob'
import path from 'path'
import fs from 'fs'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export interface DonationItemBase {
  id: number
  logo: string
  logoAlt?: string
  title: string
  description: string
  tags: Tag[]
  donateLink: string
  link: string
}

export interface DonationItem extends DonationItemBase {
  id: number
  logo: string
  byLang: {
    [key: string]: DonationItemBase
  }
}

export const loadDonations = () => {
  const files = glob.sync(path.join(serverRuntimeConfig.PROJECT_ROOT, 'donations/**/en.yml'))
  const data = files
    .map((file) => {
      const id = parseInt(path.basename(path.dirname(file)), 10)
      const byLang: any = glob
        .sync(path.join(path.dirname(file), '*.yml'))
        .reduce((obj, langFile) => {
          const lang = path.basename(langFile).replace('.yml', '')
          return { ...obj, [lang]: yaml.parse(fs.readFileSync(langFile, 'utf-8')) }
        }, {})

      return {
        ...byLang.en,
        logo: `/logos/${id}.png`,
        id,
        byLang,
      }
    })
    .sort((a, b) => a.id - b.id)
  return data as DonationItem[]
}