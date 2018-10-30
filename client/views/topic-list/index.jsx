import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app-state'

@inject('appState')
@observer
class TopicList extends Component {
  componentDidMount() {
    // do something here
  }

  render() {
    const { appState } = this.props
    return (
      <div>
        This is topic list
        <p>{appState.msg}</p>
      </div>
    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}

export default TopicList
