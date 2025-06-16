import React, { use, useState } from 'react';
import { Link } from 'react-router';
import MyFoodCard from '../MyFood/MyFoodCard';

const PostList = ({myPostPromise}) => {

    const initialPost = use(myPostPromise);

    console.log(initialPost);


    const [post, setPost] = useState(initialPost);

     return (
    <div>
      {/* Table Layout for Medium and Large Screens */}
      <div className="hidden sm:block px-4 mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Food Name</th>
              <th>Category</th>
              <th>Origin</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {post.map((food) => (
            <MyFoodCard
              key={food._id}
              food={food}
             //  orders={orders}
               // (user.accessToken)
            //   setOrders={setOrders}
            />
          ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Small Screens */}
      <div className="sm:hidden px-4 mt-10 space-y-5">
        {post.map((food) => (
          <div
            key={food._id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-base-100"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={food.image}
                alt={food.name}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{food.name}</h2>
                <p className="text-sm text-gray-500">{food.category}</p>
                
              </div>
            </div>
            <p className="font-semibold">{food.origin}</p>

            <div className="mt-3">
              <a href={`/updateBook/${food._id}`}>
                <button className="btn w-full bg-blue-500 hover:bg-blue-700">
                  Update
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


  
};


export default PostList;


{/* Table Layout for Medium and Large Screens */}
    //   <div className="hidden sm:block px-4 mt-10">
    //     <table className="table">
    //       <thead>
    //         <tr>
    //           <th>Picture</th>
    //           <th>Book Name</th>
    //           <th>Category</th>
    //           <th>Author</th>
    //           <th></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {books.map((book) => (
    //           <BookCard key={book._id} book={book} />
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>

    //   {/* Card Layout for Small Screens */}
    //   <div className="sm:hidden px-4 mt-10 space-y-5">
    //     {books.map((book) => (
    //       <div
    //         key={book._id}
    //         className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-base-100"
    //       >
    //         <div className="flex items-center gap-4 mb-2">
    //           <img
    //             src={book.image}
    //             alt={book.name}
    //             className="h-14 w-14 rounded-xl object-cover"
    //           />
    //           <div>
    //             <h2 className="text-lg font-semibold">{book.name}</h2>
    //             <p className="text-sm text-gray-500">{book.category}</p>
    //           </div>
    //         </div>
    //         <p className="font-semibold">{book.author}</p>

    //         <div className="mt-3">
    //           <a href={`/updateBook/${book._id}`}>
    //             <button className="btn w-full bg-blue-500 hover:bg-blue-700">
    //               Update
    //             </button>
    //           </a>
    //         </div>
    //       </div>
    //     ))}
    //   </div>