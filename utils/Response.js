
export const responseData = (res,status,message,data) =>{
    return res.status(status).json({
        status,
        message,
        data,
    })
}