
export interface IOConnector<DataType> {

    read: () => Promise<DataType>
    write: (data: DataType) => Promise<DataType>

}

export function route(endpoint: string): IOConnector<any> {
    return {

        read: () => {
            return new Promise((resolve, reject) => {
                const request = import(`./queries/${endpoint}.json`)
                request
                    .then(mod => resolve(mod.default))
                    .catch(err => reject(err))
            })
        },
        write: (data) => Promise.reject("Not yet implemented")

    }
}

import { createClient, Provider } from 'urql';

export const client = createClient({
  url: import.meta.env.VITE_BACKEND_API_ROUTE,
});

export const ApiProvider = Provider;
