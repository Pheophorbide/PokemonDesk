import config from '../config';

function getUrlWIthParamsConfig(endpointConfig: string, query: any) {
  const url = {
    ...config.client.server,
    // @ts-ignore
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };

  url.pathname = Object.keys(query).reduce((acc, current) => {
    if (acc.indexOf(`{${current}}`) !== -1) {
      const result = acc.replace(`{${current}}`, query[current]);
      delete query[current];
      return result;
    }
    return acc;
  }, url.pathname);
  url.query = {
    ...query,
  };
  return url;
}

export default getUrlWIthParamsConfig;
