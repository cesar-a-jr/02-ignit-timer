import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 80rem;
  height: auto;
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    max-width: 90%;
  }
`
