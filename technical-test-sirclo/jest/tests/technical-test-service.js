const superagent = require('superagent');
const transport = 'http://qa-interview.srcli.xyz';
// var uuid = require('uuid');
var resp;


// GET: Menampilkan halaman utama yang berisi pesan selamat datang dan penjelasan singkat website
var homepage =  async() => {
    resp = await superagent.get(transport)
        .set('accept', '*/*')
        .set('Content-Type', 'Apllication/XML')
        .then(res => {
            console.log('Status Request: \n', res.request.url, '\n Header : \n', res.request.header);
            console.log('Status Response: \n', res.statusCode, ' \n ',(res.body, null, 4));
            return res;
        })
        .catch(err => {
            console.log('Status Request: \n', err.response.request.url, '\n Header : \n', err.response.request.header);
            console.log('Status Response: \n', err.response.statusCode, ' \n ', JSON.stringify(err.response, null, 4));
            return err;
        })
}

// 1. TEST ZONE untuk GET Form Login
// (async () => {
//     var hit = await homepage();
// })();


//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// GET Field untuk Form Login
var formLogin =  async() => {
    resp = await superagent.get(transport + '/login')
        .set('accept', '*/*')
        .then(res => {
            console.log('Status Request: \n', res.request.url, '\n Header : \n', res.request.header);
            console.log('Status Response: \n', res.statusCode, ' \n ', JSON.stringify(res.response, null, 4));
            return res;
        })
        .catch(err => {
            console.log('Status Request: \n', err.response.request.url, '\n Header : \n', err.response.request.header);
            console.log('Status Response: \n', err.response.statusCode, ' \n ', JSON.stringify(err.response, null, 4));
            return err;
        })
}

// 2. TEST ZONE untuk GET Form Login
// (async () => {
//     var hit = await formLogin();
// })();

// Service untuk cek fungsionalitas LOGIN
// Username: root
// Password: root123
var login =  async(username, password) => {
    resp = await superagent.post(transport + '/login?username='+username+'&password='+password)
        .set('accept', '*/*')
        .then(res => {
            console.log('Status Request: \n', res.request.url, '\n Header : \n', res.request.header);
            console.log('Status Response: \n', res.statusCode, ' \n ', JSON.stringify(res.response, null, 4));
            return res;
        })
        .catch(err => {
            console.log('Status Request: \n', err.response.request.url, '\n Header : \n', err.response.request.header);
            console.log('Status Response: \n', err.response.statusCode, ' \n ', JSON.stringify(err.response, null, 4));
            return err;
        })
}

// 3. TEST ZONE with Correct Condition
// (async () => {
//     var hit = await login('root','root123');
// })();

// 4. TEST ZONE with Incorrect Condition
(async () => {
    var hit = await login('root','passwordsalah');
})();


//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Service untuk cek fungsionalitas LOGOUT
var logout =  async() => {
    resp = await superagent.post(transport + '/logout')
        .set('accept', '*/*')
        .then(res => {
            console.log('Status Request: \n', res.request.url, '\n Header : \n', res.request.header);
            console.log('Status Response: \n', res.statusCode, ' \n ',JSON.stringify(res.body, null, 4));
            return res;
        })
        .catch(err => {
            console.log('Status Request: \n', err.response.request.url, '\n Header : \n', err.response.request.header);
            console.log('Status Response: \n', err.response.statusCode, ' \n ', JSON.stringify(err.response, null, 4));
            return err;
        })
}

// 5. TEST ZONE untuk logout
// (async () => {
//     var hit = await logout();
// })();


//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Service GET untuk cek fungsionalitas DATA
var getData =  async() => {
    resp = await superagent.get(transport + '/data')
        .set('accept', '*/*')
        .then(res => {
            console.log('Convergence Status Request: \n', res.request.url, '\n Header : \n', res.request.header);
            console.log('Convergence Status Response: \n', res.statusCode, ' \n ', JSON.stringify(res.body, null, 4));
            return res;
        })
        .catch(err => {
            console.log('Convergence Status Request: \n', err.response.request.url, '\n Header : \n', err.response.request.header);
            console.log('Convergence Status Response: \n', err.response.statusCode, ' \n ', JSON.stringify(err.response.body, null, 4));
            return err;
        })
}

// 6. TEST ZONE untuk GET Data Tabel Pengeluaran dan Pemasukan
// (async () => {
//     var hit = await getData();
// })();

// 7. TEST ZONE untuk GET Data Detail with valid parameter and get Success
// (async () => {
//     var hit = await getData('2018-07-01','2018-07-21');
// })();

// 8. TEST ZONE untuk GET Data Detail with wrong parameter and get Error
// (async () => {
//     var hit = await getData('2018-07-10','2018-05-11');
// })();


// Service POST untuk cek fungsionalitas DATA
var data =  async(start, end) => {
    resp = await superagent.post(transport + '/filter?start='+start+'&end='+end)
        .set('accept', '*/*')
        .then(res => {
            console.log('Convergence Status Request: \n', res.request.url, '\n Header : \n', res.request.header);
            console.log('Convergence Status Response: \n', res.statusCode, ' \n ', JSON.stringify(res.body, null, 4));
            return res;
        })
        .catch(err => {
            console.log('Convergence Status Request: \n', err.response.request.url, '\n Header : \n', err.response.request.header);
            console.log('Convergence Status Response: \n', err.response.statusCode, ' \n ', JSON.stringify(err.response.body, null, 4));
            return err;
        })
}

// 9. TEST ZONE untuk input data



module.exports = {
    homepage,
    formLogin,
    login,
    logout,
    getData,
    data
}