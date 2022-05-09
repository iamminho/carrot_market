import { NextApiRequest, NextApiResponse } from 'next';
// import client from '../../libs/client';

export default async function handler ( req:NextApiRequest, res:NextApiResponse) {
    if(req.method !== "POST"){
        res.status(401).end();
    }
    console.log(req.body.email); //req.body.email은 작동x => req.body가 req의 인코딩을 기준으로 인코딩 되기 때문
    //이를 해결하기 위해 fetch에 Content-Type을 넣어준다.
    res.status(200).end(); 
}

