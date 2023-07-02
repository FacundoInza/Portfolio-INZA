import axios from 'axios'

const apiUrl = 'http://localhost:3000/api/'

function getSuspender(promise) {
  let status = 'pending'
  let response

  const suspender = promise.then(
    (res) => {
      status = 'success'
      response = res
    },
    (err) => {
      status = 'error'
      response = err
    }
  )

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

export function fetchData() {
  const promise = axios
    .get(`${apiUrl}allProjects`)
    .then((res) => res)
    .then((data) => data)

  return getSuspender(promise)
}