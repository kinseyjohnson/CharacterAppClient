let APIURL = 'https://fab-character-app-server.herokuapp.com';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
        case 'https://fab-character-app-client.herokuapp.com':
            APIURL = 'https://fab-character-app-server.herokuapp.com'
}

export default APIURL;