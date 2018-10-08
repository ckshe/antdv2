export default {
    'GET /user/getVerifyCode': (req, res) => {
        res.send({
            status: 'ok',
            message: '200',
            data: {
                url: "http://windows7en.com/uploads/allimg/180807/120411K38-0.png",
                num: 7364
            },
        });
        return;
    },
    'POST /user/login': (req, res) => {
        const { password, username, type, code } = req.body;
        if (password === '888888' && username === 'admin' && code == '7364') {
            res.send({
                status: 200,
                type,
                currentAuthority: 'admin',
            });
            return;
        }
        if (password === '111111' && username === 'user' && code == '7364') {
            res.send({
                status: 200,
                type,
                currentAuthority: 'user',
            });
            return;
        }
        res.send({
            status: 'error',
            type,
            currentAuthority: 'guest',
        });
    },
}