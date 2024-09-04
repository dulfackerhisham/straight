// HANDLER FUNCTIONS -> we use this functions in route to tell routes what to do with that URL

exports.getProducts = (res, req, next) => {
    res.status(200).json({
        success:true,
        message:"this route will show all the products in Datbase"
    })
}