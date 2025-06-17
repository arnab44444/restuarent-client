// import axios from 'axios'
// import { useContext } from 'react'
import { Suspense, useContext } from "react";
//import { AuthContext } from '../../Provider/AuthProvider'
import { AuthContext } from "../../Provider/AuthProvider";
import { myFoodPromise } from "../../api/MyFoodApi";
import FoodList from "./FoodList";
// import { myBorrowPromise } from "../../api/borrowApi";

const MyFood = () => {
  

  const { user } = useContext(AuthContext);

  

  return (
    <div
      style={{
        backgroundImage: `url("/src/assets/bg.jpg")`,
        backgroundSize: "cover",
        height: "800px"
      }}
    >
    <h1 className="font-bold text-2xl text-center  text-blue-700">My Orders</h1>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <FoodList myFoodPromise={myFoodPromise(user.email)}></FoodList>
        
      </Suspense>
    </div>
  );
};

export default MyFood;

//{
/* <div>
      {orders.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-error mb-4">
            No books borrowed yet.
          </h2>
          <p className="text-base-content mb-4">
            Go back to the Home section and borrow your books.
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go to Home</button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          {/* Coffee Cards */
//}
//       {orders.map((book) => (
//         <BorrowCard
//           key={book._id}
//           book={book}
//           orders={orders}
//           // (user.accessToken)
//           setOrders={setOrders}
//         />
//       ))}
//     </div>
//   )}
// </div>
