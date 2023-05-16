import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../auth/UserContext";
import JoblyApi from "../api";

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    applications: currentUser.applications,
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (e) {
      alert(e);
      return;
    }

    setFormData((f) => ({ ...f, password: "" }));

    // update user object in context.
    setCurrentUser(updatedUser);
    navigate("/");
  }

  return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h1>Update Your Profile</h1>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            disabled
            className="form-control"
            value={currentUser.username}
          />
          <label>First Name</label>
          <input
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <label>Last Name</label>
          <input
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Confirm Your Password:</label>
          <input
            type="password"
            name="password"
            placeholder="**************"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            className="btn btn-primary btn-block mt-4"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
