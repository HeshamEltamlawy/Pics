import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{Authorization: 'Client-ID Z_5BOkBjjkmfD8T8zsO4-0lcGx-eoW3cUUCPoka0pr8'}
});