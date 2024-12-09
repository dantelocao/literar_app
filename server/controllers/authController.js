import { loginUser, registerUser } from "../services/authServices.js";


// register
export const register = async (req, res) => {
    try {
        const newUser = await registerUser(req.body)
        // retira senha do lado do cliente
        const {password, ...userData} = newUser._doc;
        res.status(200).json({
            userData,
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

        const {password, ...userData} = loggedInUser._doc;

        res.status(200).json({
            userData,
            message: "user logged in sucessfully",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "error ocurred in login",
        })
        console.log(error);
    }
};