import { loginUser, registerUser } from "../services/authServices.js";


// register
export const register = async (req, res) => {
    try {
        const newUser = await registerUser(req.body)
        // retira senha do lado do cliente
        const {password, ...data} = newUser._doc;
        res.status(200).json({
            data,
            message: "User has been registered"
        });

    } catch (error) {
        res.status(500).json({
            error: error,
            message: "error ocurred registering user",
        })
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const loggedInUser = await loginUser(req.body);

        const {password, ...data} = loggedInUser._doc;

        res.status(200).json({
            message: "user logged in sucessfully",
            data,
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "error ocurred in login",
        })
        console.log(error);
    }
};