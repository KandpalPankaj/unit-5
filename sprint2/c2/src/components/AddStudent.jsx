import { useState } from "react";

export const AddStudent = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch:"",
  });
  const [err, setErr] = useState("");
  const handleForm = (el) => {
    setFormData({
      ...formData,
      [el.target.name]: el.target.value,
    });
  };
  var missing = "";
  function saveData(e) {
    e.preventDefault();
    if (formData.first_name === "") {
      setErr("First Name missing");
    } else if (formData.last_name === "") {
      setErr("Last Name missing");
    }
    else if (formData.email === "") {
      setErr("Email missing");
    }
    else if (formData.gender === "") {
        setErr("Gender missing");
      }
    else if (formData.age === "") {
      setErr("Age missing");
    }
    else if (formData.tenth_score === "") {
      setErr("tenth score missing");
    }
    else if (formData.twelth_score === "") {
      setErr("12th Score missing");
    } 
    else if (formData.preferred_branch === "") {
        setErr("Preferred branch missing");
      }
    else if (formData.age > 50) {
      setErr("age should not be greater than 50");
    } else if (formData.tenth_score > 100 || formData.twelth_score > 100) {
      setErr("10th and 12th score should not be greater than 100");
    } else {
      fetch("http://localhost:8080/students", {
        method: "Post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Student added succesfully");
      setErr("")
    }
  }
  return (
    <form className="addstudent">
      <div className="flex">
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={handleForm}
        />
      </div>

      <div className="flex">
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={handleForm}
        />
      </div>
      <div className="flex">
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={handleForm}
        />
      </div>

      <div className="flex">
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handleForm}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handleForm}
          />
        </div>
      </div>
      <div className="flex">
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={handleForm}
        />
      </div>
      <div className="flex">
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={handleForm}
        />{" "}
      </div>
      <div className="flex">
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={handleForm}
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handleForm}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input
        className="submit"
        type="submit"
        value="Submit"
        onClick={saveData}
      />
      <br />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
        err
      }
    </form>
  );
};
