import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { DevInfo } from './DevInfo'
import { DevLinks } from './DevLinks'
import { DevStats } from './DevStats'

export type DevCardProps = ComponentPropsWithoutRef<'article'>

export const DevCard = (props: DevCardProps) => {
  return (
    <Wrapper {...props}>
      <DevInfo />
      <DevStats />
      <DevLinks />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  background-color: var(--color-dark-blue);
  border-radius: 15px;
  padding: var(--spacing-12);
`
