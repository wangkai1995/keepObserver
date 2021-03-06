const express = require('express')
const app = express()


const networkServer = function(){
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))


    app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        if (/Safari/gi.test(req.headers['user-agent'])) {
            res.header("Access-Control-Allow-Headers", 'keepObserver-reportAjax,authorization,Origin, X-Requested-With, Content-Type, Accept');
        } else {
            res.header("Access-Control-Allow-Headers", '*');
        }
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
        res.header("X-Powered-By", ' 3.2.1')
        if (req.method === 'OPTIONS') {
            res.status(200).send('');
        } else {
            next();
        }
    });

    app.post('/report', (req, res) => {
        return res.send({
            code:2000,
            data:{test:111}
        })
    })
    
    app.get('/timeout', (req, res) => {
        setTimeout(()=>{
            return res.send('timeout')
        },26000)
    })

    app.get('/404', (req, res) => {
        res.status(404).send('');
    })

    app.get('/500', (req, res) => {
        res.status(500).send('');
    })


    app.get('/error.js', (req, res) => {
        res.status(200).send('console.log(throwError)');
    })



    app.post('/reportReceive', (req, res) => {
        console.log('接收到上传信息',req.body)
        return res.send('success')
    })

    app.put('/putTest', (req, res) => {
        console.log('接收到put信息',req.body)
        return res.send('put-success')
    })

    app.delete('/deleteTest', (req, res) => {
        console.log('接收到delete信息',req.body)
        return res.send('delete-success')
    })
    
    app.listen(9003, () => console.log('network serive is http://localhost:9003'))
}


module.exports = networkServer