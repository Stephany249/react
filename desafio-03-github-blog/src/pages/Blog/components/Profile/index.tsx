import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import logoImg from '../../../../assets/Logo.svg'
import { Link } from '../../../../components/Link'

import {
  Avatar,
  Icon,
  IconsContainer,
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
  ProfileText,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={logoImg} />

      <ProfileInfo>
        <ProfileHeader>
          <strong>Cameron Williamson</strong>
          <Link text="github" href="" />
        </ProfileHeader>
        <ProfileText>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileText>

        <IconsContainer>
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </Icon>
        </IconsContainer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
