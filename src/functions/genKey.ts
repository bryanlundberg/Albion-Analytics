import { v4 as uuidv4 } from 'uuid'
declare module 'uuid'

export default function genKey() {
  const key = uuidv4()
  return key
}
