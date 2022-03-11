import crypto from 'crypto'

export abstract class Entity<T> {
  protected _id: string
  props: T

  constructor(props: T, id?: string) {
    this._id = id ?? crypto.randomUUID()
    this.props = props
  }

  get id(): string {
    return this.id
  }
}
