
const Student = require('../models/student')

class StudentController {
    async createStudent(req,res){
        try {
            const {name,description,price,variants} = req.body
            if(!name|| !description || !price || !variants){
                 return res.status(400).json({
                    success:false,
                    message:"All fields are required"
                })
            }

            const Stu = await Student({
               name,description,price,variants
            })
            const result = await Stu.save()
             if(result){
                return res.status(201).json({
                    success:true,
                    message:"product created successfully",
                    data:result
                })
            }
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:error.message
            })
        }
    }

      async getStudent(req,res){
        try{
            const data=await Student.find()
             return res.status(200).json({
                    success:true,
                    message:"product get successfully",
                    total:data.length,
                    data:data
                })   
            
        }catch(error){
            return res.status(500).json({
                success:false,
                message:error.message
            })
        }
    }

        async getStudentById(req,res){
        try{
            const id=req.params.id

            const data = await Student.findById(id)
             return res.status(200).json({
                    success:true,
                    message:"product get successfully",
                    data:data
                })

        }catch(error){
            return res.status(500).json({
                success:false,
                message:error.message
            })
        }
    }

    async updateStudentById(req,res){
        try{
            const id=req.params.id
            const data=await Student.findByIdAndUpdate(id,req.body,{new:true})
            return res.status(200).json({
                success:true,
                message:"product updated successfully",
            })

        }catch(error){
             return res.status(500).json({
                success:false,
                message:error.message
            })
        }
    }

     async deleteStudentBy(req,res){
        try{
            const id=req.params.id
            const data=await Student.findByIdAndUpdate(id,{isDeleted:true},{new:true})
            return res.status(200).json({
                success:true,
                message:"product soft deleted successfully",
            })

        }catch(error){
             return res.status(500).json({
                success:false,
                message:error.message
            })
        }
    }


}

module.exports = new StudentController()