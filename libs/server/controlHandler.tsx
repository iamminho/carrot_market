import { NextApiRequest, NextApiResponse } from 'next';

export default function controlHandler(
  method: "GET" | "POST" | "DELETE",
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
    // 아래의 return fn은 nextJs가 실행시키는 거임.
    return async function(req: NextApiRequest, res: NextApiResponse){
        if(req.method !== method){
            return res.status(405).end();
        }
        try{
            await fn(req,res);
        }catch(err){
            console.log(err);
            return res.status(500).json( {err} );
        }
    }
}