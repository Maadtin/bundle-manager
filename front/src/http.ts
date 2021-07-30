const API_URL = 'http://tappx-prueba-tecnica.local'

type RequestParams = { [key: string]: string }

const http = {
  get: (url: string, params?: RequestParams): Promise<{ app: string }> => {
    const urlSearchParams = new URLSearchParams()
    if (params) {
      Object.keys(params).forEach((key) => {
        urlSearchParams.set(key, params[key])
      })
    }
    return fetch(API_URL + url).then((res) => res.json())
  },
}

export default http
