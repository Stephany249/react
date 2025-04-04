import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '14rem',
  height: '14rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  padding: '0.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '4rem',
  borderRadius: '50%',
  position: 'relative',

  img: {
    objectFit: 'cover',
  },
})

export const ImagesContainer = styled('div', {
  display: 'flex',
  marginBottom: '4.8rem',
  alignItems: 'center',

  'div + div': {
    marginLeft: 'calc(-140px / 2)',
  },
})
