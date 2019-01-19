import { Component } from 'react'
import PropTypes from 'prop-types'

class IgnoreRerender extends Component {
  shouldComponentUpdate(np) {
    const { whiteList } = this.props
    let shouldComponentUpdate = false
    Object.keys(whiteList)
      .forEach((includeItem) => {
        if ((whiteList[includeItem] !== np.whiteList[includeItem])) {
          shouldComponentUpdate = true
        }
      })
    return shouldComponentUpdate
  }
  render = () => this.props.children
}

IgnoreRerender.propTypes = {
  whiteList: PropTypes.object,
  children: PropTypes.element.isRequired
}

IgnoreRerender.defaultProps = {
  whiteList: {}
}

export default IgnoreRerender
