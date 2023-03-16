import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import IconCompany from '~icons/icon-company.svg'
import IconLocation from '~icons/icon-location.svg'
import IconTwitter from '~icons/icon-twitter.svg'
import IconWebsite from '~icons/icon-website.svg'

export type DevLinksProps = ComponentPropsWithoutRef<'section'> &
  Pick<DevData, 'location' | 'twitterUsername' | 'blog' | 'company'>

// TODO Check if company starts with @

export const DevLinks = ({ location, twitterUsername, blog, company, ...props }: DevLinksProps) => {
  return (
    <Wrapper {...props}>
      <List>
        <Item isEmpty={!location}>
          <IconLocation />
          {location ?? 'Not Available'}
        </Item>
        <Item isEmpty={!twitterUsername}>
          <IconTwitter />
          {twitterUsername ? (
            <Link href={`https://twitter.com/${twitterUsername}`} target="_blank" rel="nofollow noopener noreferrer">
              @{twitterUsername}
            </Link>
          ) : (
            'Not Available'
          )}
        </Item>
        <Item isEmpty={!blog}>
          <IconWebsite />
          {blog ? (
            <Link href={blog} target="_blank" rel="nofollow noopener noreferrer">
              {blog}
            </Link>
          ) : (
            'Not Available'
          )}
        </Item>
        <Item isEmpty={!company}>
          <IconCompany />
          {company ? (
            <Link href={`https://github.com/${company}`} target="_blank" rel="nofollow noopener noreferrer">
              {company}
            </Link>
          ) : (
            'Not Available'
          )}
        </Item>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-left: calc(117px + var(--spacing-9)); // TODO
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-5);
`

const Item = styled.li<{ isEmpty?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  opacity: ${({ isEmpty }) => isEmpty && 0.5};
`

const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`
