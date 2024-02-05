var fs=require('fs')
var os=require('os')


var user=os.userInfo()

console.log(user.username)


fs.appendFile("prabhat.txt","hello "+user.username+"you are doing well",()=>{
    console.log('file ks created')
})