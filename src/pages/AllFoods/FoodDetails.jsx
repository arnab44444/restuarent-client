import React, {useState } from "react";
import { Link, useLoaderData } from "react-router";

import { AuthContext } from "../../Provider/AuthProvider";

const FoodDetails = () => {
  const data = useLoaderData();
  

   const [food, setFood] = useState(data);
//   const [hasOrderd, setHasOrdered] = useState(false);
 // const [loading, setLoading] = useState(true);
  //const [showModal, setShowModal] = useState(false);

  const {
    _id,
    image,
    name,
    quantity,
    origin,
    category,
    description,
    price
  } = food;

 

//   useEffect(() => {
//     if (user?.email) {
//       axios
//         .get(`https://library-server-self-theta.vercel.app/check-borrowed/${_id}?email=${user.email}`)
//         .then((res) => {
//           setHasBorrowed(res.data.hasBorrowed);
//         })
//         .catch((err) => console.error(err))
//         .finally(() => setLoading(false));
//     }
//   }, [user, _id]);

//   const handleOrder = () => {
//     setShowModal(true);
//   };

//   const confirmOrder = () => {
    
//     const orderInfo = {
//       foodId: _id,
//       ordererEmail: user.email,
//     };

//     axios
//       .post(`http://localhost:3000/place-order/${_id}`, 
//         orderInfo

//       )
//       .then(() => {
//         toast.success("Purchase successfully");
//         setFood((prev) => ({
//           ...prev,
//           quantity: prev.quantity - 1,
//         }));
//         setHasOrdered(true);
        
//       })
//       .catch((err) => {
//         toast.error(err.response?.data?.message || "Something went wrong");
//       });
//   };
  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
        🍴 Food Details
      </h2>

      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={image}
            alt="Masala Dosa"
            className="h-60 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{origin}</div>
          </h2>
          <p>{description}</p>

          <div className="mt-4 space-y-2">
            <p className="bg-red-300 text-center py-1 rounded font-semibold">
              Quantity: {quantity}
            </p>
            <p className="bg-yellow-300 text-center py-1 rounded font-semibold">
              Category: {category}
            </p>
            <p className="bg-green-300 text-center py-1 rounded font-semibold">
              Price: ৳{price}
            </p>
            <p className="bg-purple-300 text-center py-1 rounded font-semibold">
              Purchased: 0 times
            </p>
          </div>

          {/* <Link to={`/foodPurchase/${food._id}`}>
            <button  className="mt-4 btn bg-green-500 hover:bg-green-600 text-white">
            {
               quantity <= 0
              ? "Out of Stock"
             : "Purchase Now"}
          </button>
          </Link> */}

          <div className="mt-4">
                <a href={`/foodPurchase/${food._id}`}>
                  <button className="btn btn-primary btn-sm w-full">
                    Purchase
                  </button>
                </a>
              </div>
        </div>
      </div>
    </div>
  );

//   return (
//     <div className="min-h-screen bg-base-200 py-10 px-4">
//       <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
//         <div className="w-full">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-100 rounded-xl shadow-lg"
//           />
//         </div>

//         <div className="space-y-4">
//           <h1 className="text-3xl font-bold text-primary">{name}</h1>
//           <div className="badge badge-secondary">{category}</div>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             by <span className="font-semibold">{author}</span>
//           </p>

//           <p className="text-base text-justify">{description}</p>

//           <div className="flex items-center gap-4">
//             <p className="font-medium">
//               Available:{" "}
//               <span className="text-success font-semibold">{quantity}</span>
//             </p>
//             <p className="font-medium">
//               Rating: <span className="text-warning">{"⭐".repeat(rating)}</span>
//             </p>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold mt-6 mb-2 text-neutral">
//               About This Book
//             </h2>
//             <p className="text-sm text-justify">{content}</p>
//           </div>

//           <button
//             onClick={handleOrder}
//             className="btn btn-primary mt-4 w-full md:w-auto"
//             disabled={hasBorrowed || quantity <= 0 || loading}
//           >
//             {hasBorrowed
//               ? "Already Borrowed"
//               : quantity <= 0
//               ? "Out of Stock"
//               : "Borrow Now"}
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-base-100 p-6 rounded-lg shadow-xl w-96 space-y-4">
//             <h2 className="text-xl font-bold mb-4">Confirm Borrow</h2>
//             <p><strong>Name:</strong> {user?.displayName || "N/A"}</p>
//             <p><strong>Email:</strong> {user?.email}</p>
//             <p><strong>Return Date:</strong> {returnDateStr}</p>

//             <div className="flex justify-end gap-2 mt-4">
//               <button onClick={() => setShowModal(false)} className="btn btn-ghost">
//                 Cancel
//               </button>
//               <button onClick={confirmOrder} className="btn btn-primary">
//                 Confirm Borrow
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
};

export default FoodDetails;
