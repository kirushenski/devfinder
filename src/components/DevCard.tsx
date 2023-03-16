import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { DevInfo } from './DevInfo'
import { DevLinks } from './DevLinks'
import { DevStats } from './DevStats'

export type DevCardProps = ComponentPropsWithoutRef<'article'> & {
  data: DevData
}

export const DevCard = ({ data, ...props }: DevCardProps) => {
  return (
    <Wrapper {...props}>
      <DevInfo
        avatarUrl={data.avatarUrl}
        name={data.name}
        login={data.login}
        createdAt={data.createdAt}
        bio={data.bio}
      />
      <DevStats publicRepos={data.publicRepos} followers={data.followers} following={data.following} />
      <DevLinks
        location={data.location}
        twitterUsername={data.twitterUsername}
        blog={data.blog}
        company={data.company}
      />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  background-color: var(--color-alt-bg);
  border-radius: 15px;
  padding: var(--spacing-12);
  box-shadow: var(--shadow);
`
