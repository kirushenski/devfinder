import { ComponentPropsWithoutRef, useState } from 'react'
import styled from 'styled-components'
import { DevCard } from './DevCard'
import { Header } from './Header'
import { Search } from './Search'

export type HomePageProps = ComponentPropsWithoutRef<'div'>

// TODO Integrate Github API
// TODO Build dark theme switch
// TODO Add responsive rules

// TODO Don't jump on card dissapear

export const HomePage = (props: HomePageProps) => {
  const [data, setData] = useState<DevData>()

  return (
    <Wrapper {...props}>
      <Header />
      <Main>
        <Search setData={setData} />
        {data && <DevCard data={data} />}
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
