import { api } from "src/boot/axios"

export const getAllPeople = async ({commit}, page = 1) => {
  try {
    const {data} = await api.get(`people?page=${page}`)
    commit('setPeople', data.results)
  } catch (err) {
    throw new Error(err)
  }
}