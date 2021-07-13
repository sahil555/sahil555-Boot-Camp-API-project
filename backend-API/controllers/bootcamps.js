
exports.getbootcamps = (req, res, next) => {

    res.status(200).json({sucess: true , msg: 'all camps'});
}


exports.getbootcamp = (req, res, next) => {

    res.status(200).json({sucess: true , msg: `one camps ${req.params.id}` });
}

exports.createbootcamp = (req, res, next) => {

    res.status(201).json({sucess: true , msg: 'create camps'});
 
}

exports.putbootcamp = (req, res, next) => {

    res.status(200).json({sucess: true , msg: `update camps ${req.params.id}`});
}

exports.deletebootcamp = (req, res, next) => {

    res.status(200).json({sucess: true , msg: `delete camps ${req.params.id}` });
}

 