import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
     args:{
        email:v.string(),
        userName:v.string(),
        imageUrl:v.string()
     },
     // handler function for sign-in/up
     handler:async(ctx,args)=>{
        // if user-already exists then no action
        const user = await ctx.db.query('users')
        .filter((q)=>q.eq(q.field('email'),args.email))
        .collect();

        // if user-dont exist then insert the user
        if(user?.length === 0){
            await ctx.db.insert('users',{
                email:args.email,
                userName:args.userName,
                imageUrl:args.imageUrl
            });
            return 'user created';
     }
     return 'user already exist';
    }
})