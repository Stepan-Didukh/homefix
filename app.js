const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true}));

app.engine('hbs', expHbs({ defaultLayout: null }));

app.set('view engine','.hbs');
app.set('views',path.join(__dirname,'static'));

const {user, house} = require('./constrollers');
const { user: UserMiddleware, houseMiddleware} = require('./middleware');

app.get('/', (req,res) => { res.render('register') });
app.get('/join', (req,res) => { res.render('login') });
app.get('/sign_in_house', (req,res)=>{ res.render('loginHouse') });
app.get('/join_house',(req,res)=>{ res.render('createHouse') });
app.get('/edit_user', (req,res)=>{ res.render('editUser') });
app.get('/edit_house', (req,res)=>{ res.render('editHouse') });


app.get('/house/:house_id',houseMiddleware.checkHouseIdMiddleware, user.getById);
app.post('/join_house',houseMiddleware.CheckHouseValidityMiddleware, house.createHouse);
app.post('/sign_in_house',houseMiddleware.checkHouseLoginMiddleware,house.loginHouse);
app.post('/edit_house',houseMiddleware.checkEditHouseMiddleware,house.editHouse );


app.post('/',UserMiddleware.checkUserValidity, user.createUser);
app.post('/join',UserMiddleware.checkUserMiddleware, user.login);
app.get('/users/:user_id',UserMiddleware.isUserPresendMiddleware, user.getById);
app.post('/edit_user',UserMiddleware.checkUserEditMiddleware,user.editUser);

app.all('*',async (req,res)=>{
        res.json('error')
});

app.listen(3000,()=>{
    console.log('3000');
});