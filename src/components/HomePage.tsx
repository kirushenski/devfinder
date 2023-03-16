import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { DevCard } from './DevCard'
import { Header } from './Header'
import { Search } from './Search'

export type HomePageProps = ComponentPropsWithoutRef<'div'>

// TODO Don't jump on card dissapear

export const HomePage = (props: HomePageProps) => {
  return (
    <Wrapper {...props}>
      <Header />
      <Main>
        <Search />
        <DevCard />
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
