import { environment } from 'src/environments/environment';

export const SERVER = (function () {
    const URL = {
        BASE: environment.server_url + 'api'
    };
    return {
        URL_BASE: URL.BASE,
    };
})();