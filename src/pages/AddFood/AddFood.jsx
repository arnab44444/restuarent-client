import React, { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";


const AddFood = () => {
   const { user } = useContext(AuthContext); // uncomment if you have auth
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());


    console.log(newFood);

    const updateFood = {
      ...newFood ,
      quantity: parseInt(newFood.quantity)
    }

    axios.post('http://localhost:3000/foods', updateFood)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Food item added successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="p-4 bg-gray-300">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-3xl font-bold text-blue-600">Add Food Item</h1>
        <p>
          Share delicious food from around the world! Add new food items with details like origin, ingredients, and more.
        </p>
      </div>

      <form onSubmit={handleAddFood}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Image */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Food Image URL</label>
            <input
              type="text"
              name="image"
              required
              className="input w-full"
              placeholder="Enter food image URL"
            />
          </fieldset>

          {/* Food Name */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Food Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full"
              placeholder="Name of the food"
            />
          </fieldset>

          {/* Category */}
          {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              required
              className="input w-full"
              placeholder="category"
            />
          </fieldset> */}

           {/* Category */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <select name="category" required className="select w-full">
              <option disabled selected>Select category</option>
              <option>Starter</option>
              <option>Main Course</option>
              <option>Dessert</option>
              <option>Drink</option>
              <option>Snacks</option>
            </select>
          </fieldset>

          {/* Quantity */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="number"
              name="quantity"
              required
              className="input w-full"
              placeholder="Available quantity"
            />
          </fieldset>

          {/* Price */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price (in $)</label>
            <input
              type="number"
              name="price"
              required
              className="input w-full"
              placeholder="Price of the food item"
            />
          </fieldset>

          {/* Food Origin */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Origin (Country)</label>
            <input
              type="text"
              name="origin"
              required
              className="input w-full"
              placeholder="Country of origin"
            />
          </fieldset>
        </div>

        {/* Short Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label">Short Description</label>
          <textarea
            name="description"
            required
            className="textarea w-full"
            placeholder="Include ingredients, making process, etc."
          />
        </fieldset>

        {/* Add By (User Info) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Added By (Name)</label>
            <input
              type="text"
              name="addedByName"
              required
              className="input w-full"
              placeholder="Your name"
              value={user?.displayName}
              // readOnly
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Added By (Email)</label>
            <input
              type="email"
              name="addedByEmail"
              required
              className="input w-full"
              placeholder="Your email"
               value={user?.email}
              // readOnly
            />
          </fieldset>
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          className="btn w-full bg-blue-500 hover:bg-blue-800 hover:text-white mt-6"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddFood;
