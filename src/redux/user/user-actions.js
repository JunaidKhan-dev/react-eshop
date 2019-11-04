import { SETCURRENTUSER } from './user.contants'

const setCurrentUser = payload => {
  return {
    type: SETCURRENTUSER,
    payload: payload
  }
}

export {
  setCurrentUser
}
