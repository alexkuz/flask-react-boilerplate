import superagent from 'superagent-promise';

function request(agent) {
  return agent
    .end()
    .then(res => JSON.parse(res.text));
}

export function get(url) {
  return request(superagent.get(url));
}

export function post(url, data) {
  return request(superagent.post(url, data));
}

export function del(url) {
  return request(superagent.del(url));
}
