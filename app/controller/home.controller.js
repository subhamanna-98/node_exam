





class HomeController {
    
    async home(req,res){
        const user = {
            name : "subha"
        }
        res.render('home',{
            title: "home page",
            data : user
        })
    }

   
}

module.exports = new HomeController()