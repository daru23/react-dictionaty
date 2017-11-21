/**
 * Created by daru on 21/11/2017.
 */

const url = 'http://localhost:8000/words';

let ApiUtils = {
    checkStatus: function(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};
export { ApiUtils as default };