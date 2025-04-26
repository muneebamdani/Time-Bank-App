const User = require("../Schema/AuthSchema")
const bcrypt = require("bcryptjs");


const Singup = async (req, res) => {
    let { name, email, password } = req.body;
    if (!name || !email || !password) {
       return res.status(401).json({ error: "all fields are requried" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return  res.status(409).json({ error: "User already registered with this email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });
        await user.save()

        res.status(201).json({ message: "User Created successfuly" });
    } catch (error) {
        return res.status(500).json({ error: "Error Creating User", message: error });
    }
}

const Login = async (req,res) => {
    let { email, password } = req.body;

    if (!email || !password) {
        return  res.status(401).json({ error: "all fields are requried" });
    }

    try {
        const user = await User.findOne({ email });

        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        return res.status(500).json({ error: "Login failed", message: error });
    }

    
}

module.exports = {
     Singup,
     Login
    };
