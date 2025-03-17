import { ComponentProps } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { SpinnerContainer } from './styles'

type SpinnerProps = ComponentProps<typeof SpinnerContainer> & {
  marginTop?: 'default'
}

export const Spinner = ({ ...props }: SpinnerProps) => {
  return (
    <SpinnerContainer {...props}>
      <FontAwesomeIcon
        icon={faSpinner}
        style={{ width: '50px', height: '50px' }}
      />
    </SpinnerContainer>
  )
}
