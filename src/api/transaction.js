import fetch from '@/utils/fetch'

export function getList() {
  return fetch({
    url: '/table/list',
    method: 'get'
  })
}
