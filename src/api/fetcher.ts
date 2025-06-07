// Keep fetch isolated in one single place. If you would want to replace in the future it is only one place to change
// Also could be helpful if you need to handle token refresh mechanism
const fetcher = async (url: string) => {
  return fetch(url).then((response) => response.json());
};

export default fetcher;
