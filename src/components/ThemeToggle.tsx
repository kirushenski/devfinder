import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import IconSun from '~icons/icon-sun.svg'
// import IconMoon from '~icons/icon-moon.svg'

export type ThemeToggleProps = ComponentPropsWithoutRef<'button'>

export const ThemeToggle = (props: ThemeToggleProps) => {
  return (
    <Wrapper {...props}>
      Light
      <IconSun />
      {/* Dark */}
      {/* <IconMoon /> */}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  font: var(--font-h4);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: color var(--duration);

  &:hover {
    // TODO
    color: #90a4d4;

    @media (--prefers-color-scheme: light) {
      color: var(--color-main);
    }
  }
`
