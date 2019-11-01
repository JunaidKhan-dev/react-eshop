import { SETCURRENTUSER } from '../constants/contants'

const setCurrentUser = payload => {
  return {
    type: SETCURRENTUSER,
    payload: payload
  }
}

export {
  setCurrentUser
}
