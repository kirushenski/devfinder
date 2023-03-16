import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { ThemeToggle } from './ThemeToggle'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export const Header = (props: HeaderProps) => {
  return (
    <Wrapper {...props}>
      <Heading>devfinder</Heading>
      <ThemeToggle />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-10);
`

const Heading = styled.h1`
  font: var(--font-h1);
`
