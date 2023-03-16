import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import IconSearch from '~icons/icon-search.svg'

export type SearchProps = ComponentPropsWithoutRef<'form'>

// TODO Clear button

export const Search = (props: SearchProps) => {
  return (
    <Wrapper {...props}>
      <Icon />
      <Input type="search" placeholder="Search GitHub username…" autoFocus spellCheck={false} />
      <NoResults>No results</NoResults>
      <Button type="submit">Search</Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  padding-inline: var(--spacing-8) var(--spacing-3);
  background-color: var(--color-dark-blue);
  border-radius: 15px;
  block-size: var(--spacing-18);
`

const Icon = styled(IconSearch)`
  color: var(--color-primary);
`

const Input = styled.input`
  flex: 1;
  font: 400 18px/25px var(--font-base);
  background-color: transparent;
  color: var(--color-white);

  &::placeholder {
    color: var(--color-white);
  }
`

const NoResults = styled.span`
  font: 700 15px/22px var(--font-base);
  color: var(--color-error);
`

const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  font: var(--font-h3);
  font-weight: 700;
  block-size: var(--spacing-13);
  border-radius: 10px;
  padding-inline: var(--spacing-6);
  transition: background-color var(--duration);

  &:hover {
    background-color: #60abff; // TODO
  }
`
