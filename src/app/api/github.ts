import store from "app/redux/store"

export async function getGithubUser(user: string) {
  const request = await fetch("https://api.github.com/users/" + user)

  return await request.json()
}

export async function dispatchGithubUser() {
  const payload = await getGithubUser("framemuse")

  store.dispatch({
    type: "LOAD_USER",
    payload
  })
}