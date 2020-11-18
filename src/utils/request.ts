import Uri from 'url';
import getUrlWIthParamsConfig from './getUrlWithParamsConfig';

async function request(endpointConfig: string, query: object) {
  const uri = Uri.format(getUrlWIthParamsConfig(endpointConfig, query));

  const result = await fetch(uri).then((res) => res.json());
  return result;
}

export default request;
