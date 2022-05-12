import controlHandler from '@libs/server/controlHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';



async function handler ( req:NextApiRequest, res:NextApiResponse) {
    const { phone, email } = req.body;
    const payload = phone ? { phone: +phone } : { email };
    const user = await client.user.upsert({
      where: {
          ...payload,
        // ...(phone && { phone: +phone }), //phone있다면 phone을 반환
        // ...(email && { email }), //email이 있다면 email을 반환
      },
      create: {          
        name: "Anonymous",
        ...payload,
        // ...(phone && { phone: +phone }), 
        // ...(email && { email }), 
      },
      update: {},
    });
    console.log(user);
    
    // 수동으로 email, phone 확인
    // if(email) {
    //     user = await client.user.findUnique({
    //         where:{
    //             email,
    //         },
    //     });
    //     if(user) console.log("found it");
    //     if(!user){
    //         console.log("didn't found. wil create.")
    //         user = await client.user.create({
    //             data: {
    //                 name:"Anonymous",
    //                 email,
    //             }
    //         });
    //     }
    //     console.log(user);
    // }
    // if(phone) {
    //     user = await client.user.findUnique({
    //         where:{
    //             phone: +phone,
    //         },
    //     });
    //     if(user) console.log("found it");
    //     if(!user){
    //         console.log("didn't found. wil create.")
    //         user = await client.user.create({
    //             data: {
    //                 name:"Anonymous",
    //                 phone: +phone,
    //             }
    //         });
    //     }
    //     console.log(user);
    // }
    //req.body.email은 작동x => req.body가 req의 인코딩을 기준으로 인코딩 되기 때문
    //이를 해결하기 위해 fetch에 Content-Type을 넣어준다.
    res.status(200).end();           
}

export default controlHandler("POST", handler);

 