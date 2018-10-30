import { observable, computed } from 'mobx'

export class AppState {
  @observable count = 0

  @observable name = 'xheart'

  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
}

const appState = new AppState()

export default appState
