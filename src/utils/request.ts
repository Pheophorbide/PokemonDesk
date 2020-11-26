import Uri from 'url';
import getUrlWIthParamsConfig from './getUrlWithParamsConfig';

async function request<T>(endpointConfig: string, query: object): Promise<T> {
  const uri = Uri.format(getUrlWIthParamsConfig(endpointConfig, query));

  const result = await fetch(uri).then((res) => res.json());
  return result;
}

export default request;
