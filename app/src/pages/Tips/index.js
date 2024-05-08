import React from 'react'
import { useNavigate } from 'react-router-dom'
import { tipItems } from '../../contants/tips'
import { Container, Title, List } from '../../components'

const Tips = () => {
  let navigate = useNavigate()

  const handleClick = (urlTitle) => {
    navigate(`/tip/${urlTitle}`)
  }

  return (
    <div className="tips">
      <Container>
        <Title classes="page_title" title="Поради по будівництву" />
        <List items={tipItems} onClick={handleClick} />
      </Container>
    </div>
  )
}

export default Tips
