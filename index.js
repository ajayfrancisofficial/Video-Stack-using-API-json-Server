const jsonServer=require('json-server') //import json server libraray
const cors=require('cors')


//create server
const videosServer=jsonServer.create()

//create a router to connect the json file
const router=jsonServer.router('data.json')

//create a middleware(json to js)
const middleware=jsonServer.defaults()


videosServer.use(cors())      //connect with server
videosServer.use(middleware)
videosServer.use(router)

const PORT=4000
videosServer.listen(PORT,()=>{console.log(`Video Server started at port ${PORT}`);}) //arrow fn not necessary