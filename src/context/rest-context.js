import {createContext} from 'react';
import config from '../.app-config.json';

export const RestContext = createContext({
    baseUrl: config.rest.baseUrl
});
