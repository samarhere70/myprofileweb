import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    // event.target.name;
    // event.target.value;

    const { name, value } = event.target;
    setData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Full name is ${data.fullName} My Number is ${data.phone} Email: ${data.email} Message: ${data.msg}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center btn-service">Contact US</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />

                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter Phone Number"
                />

                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        {
          <>
            <br />
            <br />
          </>
        }
      </div>
    </>
  );
};
export default Contact;
