import 'whatwg-fetch';
import {baseUrl} from '../baseurl';

class HttpService {
    getProducts = ()=> {
        //1
        var promise =new Promise((resolve,reject) =>{
        //2
        fetch(baseUrl+'')
        .then(response=> {
            //4
            resolve(response.json());
        })
    });
    //3
    return promise;
}
}
export default HttpService;