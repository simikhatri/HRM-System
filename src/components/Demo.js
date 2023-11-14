import React, { useState } from 'react'

const Demo = () => {
  //Set up state to capture form data
  const [formDataList, setFormDataList] = useState([]);
  const [currentFormData, setCurrentFormData] = useState({
    name: '',
    email: '',
  });

  // Step 3: Event handler to update current form data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentFormData({
      ...currentFormData,
      [name]: value,
    });
  };

  // Step 4: Event handler for submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDataList([...formDataList, currentFormData]);
    setCurrentFormData({
      name: '',
      email: '',
    });
  };

  return (
    <>
      <div>
        <h2>User Input Table Form</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formDataList.map((formData, index) => (
                <tr key={index}>
                  <td>{formData.name}</td>
                  <td>{formData.email}</td>
                  <td>Submitted</td>
                </tr>
              ))}
              <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={currentFormData.name}
                    onChange={handleInputChange}
                    required
                  />
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={currentFormData.email}
                    onChange={handleInputChange}
                    required
                  />
                </td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default Demo
