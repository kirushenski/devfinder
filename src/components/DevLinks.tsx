import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import IconCompany from '~icons/icon-company.svg'
import IconLocation from '~icons/icon-location.svg'
import IconTwitter from '~icons/icon-twitter.svg'
import IconWebsite from '~icons/icon-website.svg'

export type DevLinksProps = ComponentPropsWithoutRef<'section'>

export const DevLinks = (props: DevLinksProps) => {
  return (
    <Wrapper {...props}>
      <List>
        <Item>
          <IconLocation />
          San Francisco
        </Item>
        <Item isEmpty>
          <IconTwitter />
          Not Available
        </Item>
        {/* <Item>
          <IconTwitter />
          <Link href="https://twitter.com/octocat" target="_blank" rel="nofollow noopener noreferrer">@octocat</Link>
        </Item> */}
        <Item>
          <IconWebsite />
          <Link href="https://github.blog" target="_blank" rel="nofollow noopener noreferrer">
            https://github.blog
          </Link>
        </Item>
        <Item>
          <IconCompany />
          <Link href="https://github.com/github" target="_blank" rel="nofollow noopener noreferrer">
            @github
          </Link>
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
