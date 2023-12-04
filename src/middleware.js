import prisma from '../modules/db'

const middleware = async (ctx, next) => {
    let rahasia = ['/dashboard(.*)']
    let session = ctx.cookies.get('session') || ''
    let path = ctx.url.pathname;
    const check = await prisma.user.findUnique({ where: { session }})

    if (rahasia.some(r => new RegExp(r).test(path)) && !check) return ctx.redirect('/'); 

    ctx.locals.user = check;
    
    return next();
};

export const onRequest = middleware;