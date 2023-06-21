const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();



//Create a new user//
const createUser = async(req, res) => {
    try {
        const { first_name, last_name, email, phone_number, password } = req.body;
        if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.phone_number || !req.body.password) {
            return res
              .status(400)
              .send("Please fill in all fields");
            }
        const encryptedPassword =  await bcrypt.hash(password, 10)
    
        const newUser = {
            first_name,
            last_name,
            email,
            phone_number,
            password: encryptedPassword,
        }
        
        knex("users")
            .insert(newUser)
            .then(() => {
            res.status(201).json({ message: "Successful"});
            })
    } catch {
        (error) => {
        res.status(500).json({ message: "Unable to create new user", error });
        }}
           
};

//Log in user - post//

const logUser = (req, res) => {
    knex("users")
            .where({email: req.body.email})
            .then((userFound) => {
            if (userFound.length === 0) {
                return res.status(404).json({ message: `User with e-mail: ${req.body.email} not found` });
            }
           return user = userFound[0]; 
            })
            .then(user => {
                if(bcrypt.compareSync( req.body.password, user.password)) {
                    let username = req.body.email;
                    let id = user.user_id;
                    let token = jwt.sign({username: username, id: id}, process.env.SECRET_KEY);

                    res.json({token: token});
                } else {
                    res.status(403).send("Not allowed")
                }    
            }) 
            .catch((error) => {
                res.status(500).json({ message: "Unable to log in user", error });
            })
}

//Log in user - post//

const authUser = (req, res) => {
 
    if(!req.headers.authorization) {
        return res.status(401).json("PLEASE LOGIN")
    } 
    const token = req.headers.authorization.split(" ")[1];
        if (token == null) return res.status(401)

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        res.status(200).json(decoded)
    } catch(error) {
        return res.status(401).json("invalid auth token");
    }
}

const getUser = (req, res) => {
    knex("users")
    .where({ user_id: req.params.id })
    .then((activeUser) => {
      if (activeUser.length === 0) {
        return res.status(404).json({ message: `User not found` });
      }

      const userData = activeUser[0];

      res.status(200).json(userData);
    })
    .catch((error) => {
      res.status(500).json({ message: `Unable to retrieve user details`, error});
    });
};




module.exports = {
    createUser,
    logUser,
    authUser,
    getUser,
};

