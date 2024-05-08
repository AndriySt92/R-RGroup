import React, { useEffect, useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import { Container, Loader } from '../../components'
import { Tip1 } from './Tip1'
import { Tip2 } from './Tip2'
import { Tip3 } from './Tip3'
import { Tip4 } from './Tip4'
import { Tip5 } from './Tip5'

const Tip = () => {
  const [title, setTitle] = useState('')
  const { urlTitle } = useParams()

  useEffect(() => {
    setTitle(urlTitle)
  }, [urlTitle])

  if (!title) {
    return <Loader />
  }

  return (
    <div className="tip">
      <Container>
        <div className="row">
          {title === 'stini-z-pinoblokiv-vibir-optimalnoyi-tovshini' && <Tip1 />}
          {title === 'chomu-monolitnij-fundament-najbilsh-vigidnij' && <Tip2 />}
          {title === 'cegla-chi-pinoblok' && <Tip3 />}
          {title === 'planuvannya-zamiskih-budinkiv' && <Tip4 />}
          {title === 'budivnictvo-zamiskogo-budinku-z-chogo-pochati' && <Tip5 />}
        </div>
      </Container>
    </div>
  )
}

export default Tip
