import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react'
import styled from 'styled-components'
import IconSearch from '~icons/icon-search.svg'

export type SearchProps = ComponentPropsWithoutRef<'form'> & {
  setData: Dispatch<SetStateAction<DevData | undefined>>
}

// TODO Broken autofocus
// TODO Extend interactive zone

export const Search = ({ setData, ...props }: SearchProps) => {
  const [value, setValue] = useState('')
  const [isNoResults, setIsNoResults] = useState(false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (value === 'octocat') {
      setData({
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
      })
      setIsNoResults(false)
    } else {
      setIsNoResults(true)
    }
  }

  return (
    <Wrapper {...props} onSubmit={handleSubmit}>
      <Icon />
      <Input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search GitHub username…"
        autoFocus
        spellCheck={false}
      />
      {isNoResults && <NoResults>No results</NoResults>}
      <Button type="submit" disabled={!value}>
        Search
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  padding-inline: var(--spacing-8) var(--spacing-3);
  background-color: var(--color-alt-bg);
  border-radius: 15px;
  block-size: var(--spacing-18);
  box-shadow: var(--shadow);
`

const Icon = styled(IconSearch)`
  color: var(--color-primary);
`

const Input = styled.input`
  flex: 1;
  font: 400 18px/25px var(--font-base);
  background-color: transparent;
  color: var(--color-main);
  caret-color: var(--color-primary);

  &::placeholder {
    color: var(--color-text);
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
