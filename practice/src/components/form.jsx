import { useState } from "react";

export const Form = () => {
    const [formData,setFormData]=useState({
        name:"",
        owner:"",
        Address:"",
        code:"",
        rent:"",
        preferred:"",
    });

    const handleForm=(el)=>{
        setFormData({
            ...formData,
            [el.target.id]:el.target.value
        });
        // console.log(formData)
    }
    function saveData(e) {
        e.preventDefault();
        fetch("http://localhost:8080/houses", {
          method: "Post",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
    }
  return (
    <form>
      <input onChange={handleForm} type="text" placeholder="Name" id="name"/>
      <input onChange={handleForm} type="text" placeholder="Owner Name" id="owner"/>
      <input onChange={handleForm} type="text" placeholder="Address" id="Address"/>
      <input onChange={handleForm} type="number" placeholder="Area code" id="areaCode"/>
      <input onChange={handleForm} type="number" placeholder="rent" id="rent"/>
      <select onChange={handleForm} name="" id="preferred" >
          <option value="">Preferred</option>
          <option value="Bachelors">Bachelors</option>
          <option value="Married">Married</option>
      </select>
      <input onClick={saveData} type="submit"  />
    </form>
  );
};
