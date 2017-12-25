//http://visionmedia.github.io/superagent/
import request from 'superagent'

<<<<<<< HEAD
const LOCAL_SERVER = 'http://localhost:666/api/';
=======

// const LOCAL_SERVER = ' http://localhost:8080/';

// const LOCAL_SERVER = 'http://localhost:1155/';

 const LOCAL_SERVER = ' http://10.3.135.223:888/';


>>>>>>> f6bb10d5cd2315a901f9c07b01947d3973a1e2d0

const DEV_SERVER = '';
const PRO_SERVER = '';

function getUrl(path) {
    if (path.startsWith('http')) {
        return path;
    }
    return `${LOCAL_SERVER}${path}`;
}

const HttpClient = {
    get: (path, query) => new Promise((resolve, reject) => {
        var req = request
            .get(getUrl(path))
            .query(query)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body || JSON.parse(res.text));
                }
            });
    }),

    post: (path, formdata, query) => new Promise((resolve, reject) => {
        request
            .post(getUrl(path))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .query(query)
            .send(formdata)
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body || JSON.parse(res.text));
                }
            });
    })
};

export default HttpClient;
