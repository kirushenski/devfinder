import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { DevCard } from './DevCard'
import { Header } from './Header'
import { Search } from './Search'

export type HomePageProps = ComponentPropsWithoutRef<'div'>

// TODO Don't jump on card dissapear

const data: DevData = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
  name: 'The Octocat',
  login: 'octocat',
  createdAt: '2011-01-25T18:44:36Z',
  bio: null,
  publicRepos: 8,
  followers: 8632,
  following: 9,
  location: 'San Francisco',
  twitterUsername: null,
  blog: 'https://github.blog',
  company: '@github',
}

export const HomePage = (props: HomePageProps) => {
  return (
    <Wrapper {...props}>
      <Header />
      <Main>
        <Search />
        <DevCard data={data} />
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  inline-size: 100%;
  max-inline-size: 730px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-9);
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
`
