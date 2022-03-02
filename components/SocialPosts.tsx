import styled from 'styled-components'
import { posts } from 'utils/posts'
import SocialButtons from './SocialButtons'
import LazyLoad from 'react-lazyload'

export const SocialPosts = () => (
  <>
    {posts
      .filter((p) => !p.hidden)
      .map((post) => (
        <PostWrapper key={post.segment}>
          <LazyLoad once offset={500}>
            <PostImage width={1200} height={630} src={post.image} alt={post.imageAlt} />
          </LazyLoad>
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
  height: auto;
`
