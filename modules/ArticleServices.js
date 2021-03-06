import axios from 'axios'
import store from '../state/store/store'

const API_URL = 'https://kitty-news.herokuapp.com/api'
const ArticleServices = {
  async index() {
    let response = await axios.get(API_URL + '/articles')
    store.dispatch({
      type: 'FETCH_ARTICLE_INDEX',
      payload: response.data.articles,
    })
  },
  async show(id, credentials) {
    let response = await axios.get(API_URL + `/articles/${id}`, {
      headers: credentials,
    })
    store.dispatch({
      type: 'SET_CURRENT_ARTICLE',
      payload: response.data.article,
    })
  },
}

export default ArticleServices
