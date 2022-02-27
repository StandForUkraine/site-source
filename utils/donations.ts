import { Tag } from './tags'
import yaml from 'yaml'
import glob from 'glob'
import path from 'path'
import fs from 'fs'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export interface DonationItem {
  id: number
  logo: string
  logoAlt?: string
  title: string
  description: string
  tags: Tag[]
  donateLink: string
  link: string
}

export const loadDonations = () => {
  const files = glob.sync(path.join(serverRuntimeConfig.PROJECT_ROOT, 'donations/**/*.yml'))
  const data = files
    .map((file) => {
      const id = parseInt(path.basename(path.dirname(file)), 10)
      const text = fs.readFileSync(file, 'utf-8')
      return {
        ...yaml.parse(text),
        logo: `/logos/${id}.png`,
        id,
      }
    })
    .sort((a, b) => a.id - b.id)
  return data as DonationItem[]
}
