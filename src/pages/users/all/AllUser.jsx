import { useEffect } from "react";
import { allUserApi } from "../../../api/user.api";

function AllUser() {
    useEffect(() => {
        async function loadUser() {
            const response = await allUserApi();
            console.log(response);
        }
        loadUser();
    }, []);

    return <div></div>;
}
export default AllUser;
