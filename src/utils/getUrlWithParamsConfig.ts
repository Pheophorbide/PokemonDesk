import config from '../config';

function getUrlWIthParamsConfig(endpointConfig: string, query: object) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
}

export default getUrlWIthParamsConfig;
