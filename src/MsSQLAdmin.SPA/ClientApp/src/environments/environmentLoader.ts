import { environment as defaultEnvironment } from './environment';

/**
 * Téléchargement du fichier environment.json
 * https://medium.com/voobans-tech-stories/multiple-environments-with-angular-and-docker-2512e342ab5a
 */
export const environmentLoader = new Promise<any>((resolve, reject) => {
  const xmlhttp = new XMLHttpRequest();
  const method = 'GET';
  const url = './assets/environment.json';

  xmlhttp.open(method, url, true);
  xmlhttp.onload = () => {
    if (xmlhttp.status === 200) {
      resolve(JSON.parse(xmlhttp.responseText));
    } else {
      resolve(defaultEnvironment);
    }
  };
  xmlhttp.send();
});
