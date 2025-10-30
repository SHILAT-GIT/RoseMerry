const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const User = require('../models/User');

router.get('/users', async (_, res) => {
    try {
        const users = await User.find();
        res.send({ users });
    } catch (err) {
        res.status(500).send({ message: 'שגיאה בשרת' });
    }
});

// הרשמה
router.post('/signup', async(req, res)=>{
const {name, email, password}=req.body;

try{
    if (!name || !email || !password) {
      return res.status(400).json({ error: "נא למלא את כל השדות" });
    }

const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "כתובת האימייל כבר קיימת במערכת"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
             name, 
             email, 
             password: hashedPassword
             });
        await newUser.save();

        res.status(201).json({ message: `נרשמת בהצלחה, ${name}!` , name });
    }catch(err){
       res.status(500).send({ message: 'שגיאה בשרת' });
     }
});

//התחברות
router.post('/login', async(req, res)=>{
const {email, password}= req.body;
try{
    const existingUser= await User.findOne({email});
    if(!existingUser) return res.status(400).json({error: "משתמש לא קיים!"})

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) return res.status(400).json({ error: "סיסמה לא נכונה" });

    res.json({ message: `ברוך שובך, ${existingUser.name}!` , name: existingUser.name});

   }catch(err){
    res.status(500).send({message: 'שגיאה בשרת'});
   }
});

module.exports = router;