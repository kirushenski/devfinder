/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type DevInfoProps = ComponentPropsWithoutRef<'section'> &
  Pick<DevData, 'avatarUrl' | 'name' | 'login' | 'createdAt' | 'bio'>

// TODO Image optimization (70x70 mobile)
// TODO text-decoration transition
// TODO Convert createdAt

export const DevInfo = ({ avatarUrl, name, login, createdAt, bio, ...props }: DevInfoProps) => {
  return (
    <Wrapper {...props}>
      <Avatar src={avatarUrl} width={117} height={117} alt={`Avatar of ${name}`} />
      <Main>
        <div>
          <Name>{name}</Name>
          <Username href={`https://github.com/${login}`} target="_blank" rel="nofollow noopener noreferrer">
            @{login}
          </Username>
        </div>
        <div>
          Joined <time dateTime={createdAt}>{createdAt}</time>
        </div>
      </Main>
      <Bio isEmpty={!bio}>{bio ?? 'This profile has no bio'}</Bio>
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
