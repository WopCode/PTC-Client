import axios from "axios";

export const createUserApi = async (user) =>
    await axios.post("http://localhost:9000/api/user", user);

export const allUserApi = async () =>
    await axios.get("http://localhost:9000/api/user");
