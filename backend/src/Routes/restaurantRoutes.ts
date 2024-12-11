import express, {Request, Response} from 'express';
import Restaurant from '../models/Restaurant';
const router = express.Router();


router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
      const allUsers = await Restaurant.findAll({});  
      res.status(201).json({ msg: "restaurants found", allUsers });
    } catch (error) {
      res.status(201).json({ msg: "cannot find restaurants", error });
    }
  });

router.post('/',async (req:Request, res:Response): Promise <void> =>{
    const {name, email, password, address} = req.body;
    //check if email alredy exists?
    const emailExists = await Restaurant.findOne({
        where:{email},
    })
    //idk what status to put here help
    if(emailExists) {
        res.status(409).json({msg: "email alredy exists"});
        return;
    }
    //create restraunt
    try {
        const restauraunt = await Restaurant.create({name, email, address, password})
        res.status(200).json({msg: "new restaurant created", restauraunt});
        return;
    } catch (error) {
        res.status(500).json({err: "error creating restauraunt", error});
        return;
    }
})

export default router;