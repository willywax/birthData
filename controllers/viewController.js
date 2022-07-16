

export const getIndexPage = (req,res,next) =>{
    const title = 'Life Expectancy Data';
    return res.render('index', { title })
}