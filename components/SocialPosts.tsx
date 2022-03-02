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
          <LazyLoad
            once
            offset={500}
            placeholder={
              <Placeholder
                data-src={post.image}
                alt={post.imageAlt}
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            }
          >
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
  width: 100%;
  display: inline-block;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const PostImage = styled.img`
  width: 100%;
  height: auto;
`

const Placeholder = styled.img`
  width: 100%;
  height: 0;
  padding-bottom: ${(600 / 1200) * 100}%;
`
