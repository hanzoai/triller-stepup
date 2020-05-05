import Hanzo from 'hanzo.js'
import { computed, observable } from 'mobx'
import blueprints from './blueprints'

export default class Api {
  @observable key = ''

  @observable endpoint = ''

  constructor(key, endpoint) {
    this.key = key
    this.endpoint = endpoint
  }

  @computed get client() {
    const client = new Hanzo.Api({ key: this.key, endpoint: this.endpoint })

    for (const k in blueprints) {
      const v = blueprints[k]
      client.addBlueprints(k, v)
    }

    return client
  }
}
