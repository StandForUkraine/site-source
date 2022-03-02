import styled from 'styled-components'
import { useText } from 'utils/lang'
import { TagOrAll } from 'utils/tags'

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
    <TagsWrapper>
      {tags.map((tag) => (
        <Tag key={tag} isActive={tag === currentTag} onClick={() => onTagChange(tag)}>
          {t(tag)}
        </Tag>
      ))}
    </TagsWrapper>
  )
}

export default ContentTags

const TagsWrapper = styled.div`
  overflow-x: auto;
  padding: 10px;
  margin: auto;
  max-width: 100%;
`

const Tag = styled.button<{ isActive?: boolean }>`
  background: #f2f2f2;
  border-radius: 40px;
  padding: 5px 9px;
  border: 3px solid #f2f2f2;
  margin-right: 5px;
  margin-top: 5px;
  outline: none;

  &:hover {
    border-color: rgba(255, 229, 0, 0.5);
  }
  
  &:focus {
    border-color: #FFE500;
  }

  ${({ isActive }) =>
    isActive
      ? `
        background: #000;
        color: #fff;
        border-color: #000;
        `
      : ''}
`
