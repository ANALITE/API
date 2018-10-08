import React from 'react'
import PropTypes from 'prop-types'
import createCustomChart1 from '../builds/createCustomChart1'

const CustomChart1 = ({ width, height, data }) => {
  createCustomChart1(this.node, width, height, data)
  return (
    <div>
      <h4 className='pt-3'>Events on Tweeter</h4>
      <svg
        viewBox="0 0 1000 500"
        ref={node => this.node = node}
        style={{paddingBottom: '1em'}}
        width={width}
        height={height}>
      </svg>
    </div>
  )
}

CustomChart1.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.shape({
    nodes: PropTypes.array.isRequired,
    links: PropTypes.array.isRequired,
  }).isRequired
}

CustomChart1.defaultProps = {
  width: 1000,
  height: 500
}

export default CustomChart1
