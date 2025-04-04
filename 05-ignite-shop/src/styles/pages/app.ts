import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    background: '$gray800',
    border: 0,
    borderRadius: 6,
    padding: '0.75rem',
    cursor: 'pointer',
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      color: '$gray700',
    },

    span: {
      position: 'absolute',
      right: '-10px',
      top: '-10px',
      backgroundColor: '$green500',
      color: '$white',
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '50%',
      fontSize: '$sm',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
})
