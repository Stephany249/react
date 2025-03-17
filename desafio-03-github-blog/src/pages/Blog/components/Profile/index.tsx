import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useCallback, useEffect, useState } from 'react'

import { Link } from '../../../../components/Link'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/Spinner'

import {
  Avatar,
  Icon,
  IconsContainer,
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
  ProfileText,
} from './styles'

interface IProfileInfo {
  name: string
  followers: number
  bio: string
  company: string
  login: string
  avatar_url: string
  html_url: string
}

const username = import.meta.env.VITE_GITHUB_USER

export function Profile() {
  const [isLoading, setIsLoading] = useState(true)
  const [profileInfo, setProfileInfo] = useState<IProfileInfo>(
    {} as IProfileInfo,
  )

  const fetchProfile = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileInfo(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner marginTop={'default'} />
      ) : (
        <>
          {' '}
          <Avatar src={profileInfo?.avatar_url} />
          <ProfileInfo>
            <ProfileHeader>
              <strong>{profileInfo?.name}</strong>
              <Link text="github" href={profileInfo?.html_url} />
            </ProfileHeader>
            <ProfileText>{profileInfo?.bio}</ProfileText>

            <IconsContainer>
              <Icon>
                <FontAwesomeIcon icon={faGithub} />
                <span>{profileInfo?.login}</span>
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{profileInfo?.company || 'Sem informação'} </span>
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{profileInfo?.followers || 0} seguidores</span>
              </Icon>
            </IconsContainer>
          </ProfileInfo>{' '}
        </>
      )}
    </ProfileContainer>
  )
}
