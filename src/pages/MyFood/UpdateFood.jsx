import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const data = useLoaderData();


  console.log(data)

  const [name, setName] = useState(data?.name);
  const [category, setCategory] = useState(data?.category);
  const [price, setPrice] = useState(data?.price);
  const [origin, setOrigin] = useState(data?.origin);
  const [description, setDescription] = useState(data?.description);
  const [quantity, setQuantity] = useState(data?.quantity);
  const [image, setImage] = useState(data?.image);
//   const [email, setEmail] = useState(data?.email);
//   const [displayName, setDisplayName] = useState(data?.displayName);

  const handleUpdateFood = (e) => {
    e.preventDefault();

    const updatedFood = {
      name,
      category,
      price,
      origin,
      description,
      quantity,
      image,
      email,
      displayName,
    };

    fetch(`http://localhost:3000/foods/${data?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData?.modifiedCount > 0) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Food updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-4 bg-gray-300">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-3xl font-bold text-green-500">Update Food</h1>
      </div>

      <form onSubmit={handleUpdateFood}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Food Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full"
              placeholder="Food Name"
            />
          </fieldset>

          <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input w-full"
              placeholder="Category"
            />
          </fieldset>

          <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input w-full"
              placeholder="Price"
            />
          </fieldset>

          <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Origin</label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="input w-full"
              placeholder="Origin"
            />
          </fieldset>

          <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="input w-full"
              placeholder="Quantity"
            />
          </fieldset>

          <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="input w-full"
              placeholder="Image URL"
            />
          </fieldset>

          {/* <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
              placeholder="Email"
            />
          </fieldset>

          <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input w-full"
              placeholder="Your Name"
            />
          </fieldset> */}
        </div>

        <fieldset className="bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea w-full"
            placeholder="Description"
          />
        </fieldset>

        <input
          type="submit"
          className="btn w-full bg-green-500 hover:bg-green-800 hover:text-white"
          value="Update Food"
        />
      </form>
    </div>
  );
};

export default UpdateFood;
