import React, { Component } from 'react'

export default class Bin2Dec extends Component {
  constructor (props) {
    super(props)

    this.state = {
      binary: ''
    }
  }

  changeState (key, value) {
    this.setState({
      [key]: value
    })
  }

  onChange (e) {
    const data = e.nativeEvent.data
    if (data === '1' || data === '0') {
      const value = this.state.binary + data
      this.changeState('binary', value)
    }
  }

  baseConvert (number, initialBase, changeBase) {
    if (
      (initialBase && changeBase) < 2 ||
      (initialBase && changeBase) > 36
    ) { return 'Base must be between 2 and 36' }

    return parseInt(number + '', initialBase)
      .toString(changeBase)
  }

  showDecimal () {
    const bin = this.state.binary
    return this.baseConvert(bin, 2, 10)
  }

  handleClearBin () {
    return this.changeState('binary', '')
  }

  render () {
    return (
      <div>
        <form>
          <fieldset>
            <legend>
                  Binary
            </legend>
            <input
              type='text'
              value={this.state.binary}
              placeholder='insert binary number'
              onChange={e => this.onChange(e)}
            />
            <button type='button' onClick={() => this.handleClearBin()}>
            Clear
            </button>
          </fieldset>
          <fieldset>
            <legend>
                      Decimal
            </legend>
            <p>{this.showDecimal()}</p>

          </fieldset>
        </form>
      </div>
    )
  }
}
