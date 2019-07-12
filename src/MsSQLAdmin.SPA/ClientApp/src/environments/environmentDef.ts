export interface EnvSetting {
  backend: string;
}
export interface Environnement {
  production: boolean;
  name: string;
  version?: string;
  settings?: EnvSetting;
}

export function envNormalizeUrl(url: string): string {
  if (url && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
}
