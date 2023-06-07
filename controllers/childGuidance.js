import childModel from '../models/childModel.js';

const createGuidance = async (req, res) => {
  try {
    const data = req.body;

    const guideInstance = new childModel({
      name: data.name,
      age: data.age,
      guides: [
        {
          question: guides.question,
          answer:guides.answer,
          category: guides.category,
        },
      ],
    });

    const result = await guideInstance.save();

    res.status(200).json({
      message: "Child Guidance created successfully",
      error: null,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in the createGuidance controller",
      error: error,
      data: null,
    });
  }
}




const getGuidance = async (req, res) => {
  try {
    const guideId = req.params.guideId;
    const check = await childModel.findOne({ guideId: guideId });
    if (!check) {
      return res.status(409).json({
        message: "The child Guide you are trying to read is not available",
        error: "Error fetching the Child Guide",
        data: null,
      });
    }
    res.status(200).json({
      message: "The child Guide fetched successfully",
      error: null,
      data: check,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in the getGuidance controller",
      error: error,
      data: null,
    });
  }
};




const getAllGuidances= async(req,res)=>{
 try{
  const page= req.query.page
  const range= req.query.limit

  const end= limit * page
  const start= end - limit
  const result= await childModel.find({}).skip(start).limit(range)
  res.status(200).json({
    message: "Data fetched successfully",
    error: null,
    data: response
 });
}

catch(error){
  console.log("Error in the getAllGuidance")
  res.status(500).json({
      message: "Failed to get childGuidances",
      error: error,
      data:null
  })
}

}



const updateGuidance = async (req, res) => {
    try {
      const data = req.body;
      const guideId = req.params.guideId;
  
      const check = await childModel.find({guideId : guideId});
      if (!check) {
        return res.status(409).json({
          message: "Child Guide trying to update not available",
        });
      }
  
      const updatedGuide = await childModel.findOneAndUpdate({guideId:guideId}, data);
  
      res.status(200).json({
        message: "Child Guide updated successfully",
        error: null,
        data: updatedGuide,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error in the updateGuide controller",
        error: error,
        data: null,
      });
    }
  }




  const deleteGuidance= async(req,res)=>{
      try{
    const childId= req.params.childId     
    const check = await childModel.findOne({childId : childId});
    if(!check){
      res.status(409).json({
        message: "Guide trying to delete not found"
      })
    }else{
      const result= await childModel.deleteOne({childId: childId})
      res.status(200).json({
        message:"Child Guide deleted successfully",
        error:null,
        data:result
    })
    
      }  
    
    }
    catch(error){
      res.status(500).json({
        message: "Error in the deleteGuide controller",
        error: error,
        data: null,
      }); 
    }
  }


export {updateGuidance,createGuidance,deleteGuidance, getGuidance}
