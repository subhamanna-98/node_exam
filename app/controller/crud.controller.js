

const Student = require('../models/student')


class CrudController {
    async show(req,res){
        const data = await Student.find({isDeleted:false})

        res.render('list',{
            title: "list student",
            data:data
        })
    }
    async create(req,res){
        res.render('add',{
            title: "add student"
        })
    }
    async store(req,res){
        try {
            const {name,email} = req.body
            const Stu = await Student({
                name,email
            })
            const result = await Stu.save() 
            if(result)  {
                return res.redirect('/show')
            }else{
                return res.redirect('/add')
            }
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    async Edit(req,res){
        const id = req.params.id
        const data = await Student.findById(id)
        return res.render('edit',{
            title: "updated student",
            data:data
        })
    }

    async update(req,res){
        try {
            const id = req.params.id
            const data = await Student.findByIdAndUpdate(id,req.body,{new:true})
            return res.redirect('/show')
        } catch (error) {
            console.log(error.message);
            
        }
    }
    async delet(req,res){
        try {
            const id = req.params.id
             await Student.findByIdAndDelete(id,req.body,{new:true})
            return res.redirect('/show')
        } catch (error) {
            console.log(error.message);
            
        }
    }
   
   async softDelet(req,res){
    try {
        const id = req.params.id
        await Student.findByIdAndUpdate(id,{isDeleted:true},{new:true})
        return res.redirect('/show')
    } catch (error) {
        console.log(error.message);
        
    }
   }
   async trash(req,res){
    try {
        const data = await Student.find({isDeleted:true})
        res.render('trash',{
            title:" trash feild",
            data
        })
    } catch (error) {
        console.log(error.message);
        
    }
   }

   async recover(req,res){
    try {
         const id=req.params.id
        await Student.findByIdAndUpdate(id,{isDeleted:false},{new:true})
         return res.redirect('/show')
    } catch (error) {
        console.log(error.message);
        
    }
   }
}

module.exports = new CrudController()