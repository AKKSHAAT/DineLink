import express, {Request, Response} from 'express';
import Restaurant from '../models/Restaurant';
import bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken'

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


router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Find the restaurant by email
    const restaurant = await Restaurant.findOne({
      where: { email },
    });

    if (!restaurant) {
      res.status(404).json({ msg: 'Restaurant not found' });
      return;
    }

    // Compare the provided password with the hashed password in the DB
    const isMatch = await bcrypt.compare(password, restaurant.password);
    if (!isMatch) {
      res.status(400).json({ msg: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: restaurant.id, email: restaurant.email }, 'your_jwt_secret', { expiresIn: '23h' });

    res.status(200).json({
      msg: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Error during login', error });
  }
});


router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, address } = req.body;

  const emailExists = await Restaurant.findOne({
    where: { email },
  });

  if (emailExists) {
    res.status(409).json({ msg: 'Email already exists' });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newRestaurant = await Restaurant.create({
      name,
      email,
      password: hashedPassword,
      address,
    });

    res.status(201).json({
      msg: 'New restaurant created',
      restaurant: newRestaurant,
    }); 
  } catch (error) {
    res.status(500).json({ msg: 'Error creating restaurant', error });
  }
});


export default router;