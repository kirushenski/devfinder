import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type DevStatsProps = ComponentPropsWithoutRef<'section'>

export const DevStats = (props: DevStatsProps) => {
  return (
    <Wrapper {...props}>
      <List>
        <div>
          <Name>Repos</Name>
          <Value>8</Value>
        </div>
        <div>
          <Name>Followers</Name>
          <Value>3938</Value>
        </div>
        <div>
          <Name>Following</Name>
          <Value>9</Value>
        </div>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--color-bg);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: 10px;
  margin-left: calc(117px + var(--spacing-9)); // TODO
`

const List = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-10);
`

const Name = styled.dt`
  font: var(--font-h4);
`

const Value = styled.dd`
  font: var(--font-h2);
  color: var(--color-main);
`
