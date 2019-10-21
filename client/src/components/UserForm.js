import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";

const UserForm = ({ values, touched, errors, status }) => {
const [users, setUsers] = useState([])
useEffect(() => {
    status && setUsers(users => users)
}, [status])

    return <div className="UserForm">
        <Form>

        </Form>
    </div>
};

export default UserForm;