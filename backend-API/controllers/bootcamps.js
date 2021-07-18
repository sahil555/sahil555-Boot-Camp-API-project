const bootcamp = require('../models/bootcamp');



exports.getbootcamps = async (req, res, next) => {
    const getcamp = await bootcamp.find();
    res.status(200).json({sucess: true , data: getcamp });
}


exports.getbootcamp = async (req, res, next) => {
    const getonecamp = await bootcamp.findById(req.params.id);
    res.status(200).json({sucess: true , data: getonecamp });
}

exports.createbootcamp = async(req, res, next) => {
   try {
    const createcamp = await bootcamp.create(req.body);

    res.status(201).json({
        sucess: true,
        data: createcamp
    });
   } catch (error) {
       console.log(error);
       res.status(400).json({
        sucess: false,
        error: error
        });
   }
 
}

exports.putbootcamp = async (req, res, next) => {
    const updatecamp = await bootcamp.findByIdAndUpdate(req.params.id,req.body, {
        new:false,
        runValidators: true
    });

    if(!updatecamp) {
        return res.status(400).json({ sucess: false, error: bootcamp })
    }

    res.status(200).json({sucess: true , data: updatecamp });
}

exports.deletebootcamp = (req, res, next) => {

    res.status(200).json({sucess: true , msg: `delete camps ${req.params.id}` });
}

 