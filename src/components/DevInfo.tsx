/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type DevInfoProps = ComponentPropsWithoutRef<'section'>

// TODO Image optimization (70x70 mobile)
// TODO text-decoration transition

export const DevInfo = (props: DevInfoProps) => {
  return (
    <Wrapper {...props}>
      <Avatar src="https://placekitten.com/117/117" width={117} height={117} alt="" />
      <Main>
        <div>
          <Name>The Octocat</Name>
          <Username href="https://github.com/octocat" target="_blank" rel="nofollow noopener noreferrer">
            @octocat
          </Username>
        </div>
        <div>
          Joined <time dateTime="2011-01-25">25 Jan 2011</time>
        </div>
      </Main>
      <Bio>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</Bio>
      {/* <Bio isEmpty>This profile has no bio</Bio> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 117px 1fr;
  gap: var(--spacing-5) var(--spacing-9);
`

const Avatar = styled.img`
  border-radius: 50%;
  grid-row: span 2;
`

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-10);
`

const Name = styled.h2`
  font: var(--font-h1);
  color: var(--color-main);
`

const Username = styled.a`
  font: var(--font-h3);
  color: var(--color-primary);
  transition: color var(--duration);

  &:hover {
    text-decoration: underline;
    color: #60abff; // TODO
  }
`

const Bio = styled.p<{ isEmpty?: boolean }>`
  opacity: ${({ isEmpty }) => isEmpty && 0.75};
`
