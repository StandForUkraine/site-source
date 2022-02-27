import styled from 'styled-components'
import { posts } from 'utils/posts'
import SocialButtons from './SocialButtons'

export const SocialPosts = () => (
  <>
    {posts.map((post) => (
      <PostWrapper key={post.segment}>
        <PostImage src={post.image} alt={post.imageAlt} />
        <SocialButtons link={`https://standforukraine.com/p/${post.segment}`} text={post.text} />
      </PostWrapper>
    ))}
  </>
)

export default SocialPosts

const PostWrapper = styled.div`
  padding: 20px;
  max-width: 556px;
  display: inline-block;
`

const PostImage = styled.img`
  max-width: 100%;
  width: 100%;
`
