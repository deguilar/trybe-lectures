import data from "../data"

const getDataFromApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

const postDataApi = (todo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.push(todo)
      resolve(data)
    }, 1000)
  })
}

export {
  getDataFromApi,
  postDataApi
}