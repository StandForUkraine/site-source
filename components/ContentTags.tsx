import styled from 'styled-components'
import { useText } from 'utils/lang'
import { TagOrAll } from 'utils/tags'
import Chip from './Chip'
import ChipsWrapper from './ChipsWrapper'
import FilterLabel from './FilterLabel'

export const ContentTags = ({
  tags,
  currentTag,
  onTagChange,
}: {
  tags: TagOrAll[]
  currentTag: TagOrAll
  onTagChange: (value: TagOrAll) => any
}) => {
  const t = useText()

  return (
    <ChipsWrapper>
      <FilterLabel>{t('filterTo')}</FilterLabel>
      {tags.map((tag) => (
        <Chip key={tag} isActive={tag === currentTag} onClick={() => onTagChange(tag)}>
          {t(tag)}
        </Chip>
      ))}
    </ChipsWrapper>
  )
}

export default ContentTags;
