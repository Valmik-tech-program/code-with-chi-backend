// below code in promises

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res)).catch((err) => next(err));
        }
    }

export {asyncHandler}
// const asyncHanler =() => {}
// const asyncHandler = (fn) => {}
// const asyncHandler = (fn) => async ()=> {
// }





// const asyncHandler = (fn) =>(req, res, next)=>{
//     try{

//     }catch(err){
//        res.status(err.code || 500).json({
//         sucess: false,
//         message: err.message || "Internal Server Error",
//        })
//     }

//   }