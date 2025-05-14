import React, { useState } from "react";
import "./App.css"; // You can style your .selected, .image-preview etc.

function App() {
  const [formData, setFormData] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    listedBy: "",
    superBuiltupArea: "",
    carpetArea: "",
    bachelorsAllowed: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    projectName: "",
    adTitle: "",
    description: "",
    price: "",
    state: "",
    name: "",
    mobile: ""
  });

  const [images, setImages] = useState([]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 20) {
      alert("You can upload a maximum of 20 photos.");
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    console.log("Uploaded Images:", images);
    // You can integrate with an API here
  };

  const options = {
    type: ["Flats / Apartments", "Independent / Builder Floors", "Individual House / Villa"],
    bhk: ["1", "2", "3", "4", "4+"],
    bathrooms: ["1", "2", "3", "4", "4+"],
    furnishing: ["Furnished", "Semi-Furnished", "Unfurnished"],
    listedBy: ["Builder", "Dealer", "Owner"],
    bachelorsAllowed: ["Yes", "No"]
  };

  return (

   <div className="page-container">
     <h3>POST YOUR AD</h3>
    
    <form onSubmit={handleSubmit} className="form-container">
     <div className="subpage-container">
    <h3>  SELECTED COMPANY</h3>
    <p >Properties / For Rent: Houses & Apartments  &nbsp;&nbsp;&nbsp;
      <a href="#" >Change</a></p>
    </div>
   
      <div>
        <h4>Type *</h4>
        {options.type.map((opt) => (
          <button
            key={opt}
            type="button"
            className={formData.type === opt ? "selected" : ""}
            onClick={() => handleChange("type", opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div>
        <h4>BHK</h4>
        {options.bhk.map((num) => (
          <button
            key={num}
            type="button"
            className={formData.bhk === num ? "selected" : ""}
            onClick={() => handleChange("bhk", num)}
          >
            {num}
          </button>
        ))}
      </div>

      <div>
        <h4>Bathrooms</h4>
        {options.bathrooms.map((num) => (
          <button
            key={num}
            type="button"
            className={formData.bathrooms === num ? "selected" : ""}
            onClick={() => handleChange("bathrooms", num)}
          >
            {num}
          </button>
        ))}
      </div>

      <div>
        <h4>Furnishing</h4>
        {options.furnishing.map((furn) => (
          <button
            key={furn}
            type="button"
            className={formData.furnishing === furn ? "selected" : ""}
            onClick={() => handleChange("furnishing", furn)}
          >
            {furn}
          </button>
        ))}
      </div>

      <div>
        <h4>Listed By</h4>
        {options.listedBy.map((person) => (
          <button
            key={person}
            type="button"
            className={formData.listedBy === person ? "selected" : ""}
            onClick={() => handleChange("listedBy", person)}
          >
            {person}
          </button>
        ))}
      </div>
        <br />
      <div>
        <label>
          Super Builtup area (sqft) *
          <input
            type="number"
            name="superBuiltupArea"
            value={formData.superBuiltupArea}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label>
          Carpet Area (sqft) *
          <input
            type="number"
            name="carpetArea"
            value={formData.carpetArea}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <h4>Bachelors Allowed</h4>
        {options.bachelorsAllowed.map((val) => (
          <button
            key={val}
            type="button"
            className={formData.bachelorsAllowed === val ? "selected" : ""}
            onClick={() => handleChange("bachelorsAllowed", val)}>
            {val}
          </button>
        ))}
      </div>
        <br />
      <div>
        <label>
          Maintenance (Monthly)
          <input
            type="number"
            name="maintenance"
            value={formData.maintenance}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label>
          Total Floors
          <input
            type="number"
            name="totalFloors"
            value={formData.totalFloors}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label>
          Floor No
          <input
            type="number"
            name="floorNo"
            value={formData.floorNo}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <h4>Car Parking</h4>
        {["0", "1", "2", "3", "3+"].map((opt) => (
          <button
            key={opt}
            type="button"
            className={formData.carParking === opt ? "selected" : ""}
            onClick={() => handleChange("carParking", opt)}
          >
            {opt}
          </button>
        ))}
      </div>
<br />
 <div>
  <label htmlFor="facing">Facing</label>
  <input
    list="facing-options"
    name="facing"
    id="facing"
    value={formData.facing}
    onChange={handleInputChange}
  />
  <datalist id="facing-options">
    <option value="North" />
    <option value="East" />
    <option value="South" />
    <option value="West" />
    <option value="North-East" />
    <option value="North-West" />
    <option value="South-East" />
    <option value="South-West" />
  </datalist>
</div>

<br />
      <div>
        <label>
          Project Name
          <input
            type="text"
            name="projectName"
            maxLength={70}
            value={formData.projectName}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label>
          Ad Title *
          <input
            type="text"
            name="adTitle"
            maxLength={70}
            placeholder="Mention the key features of your item"
            value={formData.adTitle}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
  <label>
    Description *
    <br />
    <textarea
      name="description"
      rows={3}
      maxLength={4096}
      placeholder="Include condition, features and reason for selling"
      value={formData.description}
      onChange={handleInputChange}
    />
  </label>
</div>

<br />


      <div >
        <label>
          Price *
          <input
            type="number"
            name="price"
            placeholder="₹"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      
<div className="location-container">

      <div>
        <label>
          Upload up to 20 Photos *
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          {images.length > 0 && (
            <div className="image-grid">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt={`preview-${index}`}
                  className="image-preview"
                />
              ))}
            </div>
          )}
        </label>
      </div>
          </div>
          <div className="location-container">
      <div>
        <h3>Confirm Your Location</h3>
        <label>
          State *
          <select name="state" value={formData.state} onChange={handleInputChange} required>
            <option value="">Select your state</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
        </label>
      </div>
          </div>
      <div>
        <h3>Review Your Details</h3>
        <label>
          Name *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Mobile Number *
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            required
          />
        </label>
      </div>
      

      <button type="submit">Submit Ad</button>
    </form>
    </div>
    
  );
}

export default App;
