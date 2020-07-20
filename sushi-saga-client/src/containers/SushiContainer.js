import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

let props = {renderSushi, handleMore, handleEat}

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi.map((sushiPOJO) => {
              <Sushi
              key=sushiPOJO.id
              sushiPOJO={sushiPOJO}
            />
          })
        }

        <MoreButton
            handleMore={handleMore}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer
