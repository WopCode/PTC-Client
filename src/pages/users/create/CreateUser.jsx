import { Form, Formik } from "formik";
import { createUserApi } from "../../../api/user.api";

function CreateUser() {
    return (
        <div>
            <Formik
                initialValues={{
                    first_name: "",
                    last_name: "",
                    state: 1,
                }}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    try {
                        const response = await createUserApi(values);
                        actions.resetForm();
                        console.log(response);
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>first_name</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="first titt"
                            onChange={handleChange}
                            value={values.first_name}
                        />
                        <label>last_name</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="last titt"
                            onChange={handleChange}
                            value={values.last_name}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Savinnnnn" : "save"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default CreateUser;
