import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { myPostPromise } from "../../api/MyPostApi";
import PostList from "./PostList";

const MyPost = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className="bg-cover bg-center min-h-[calc(100vh-100px)] py-10"
      style={{
        backgroundImage: `url("https://i.ibb.co/JWs9SVLK/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad.jpg")`,
      }}
    >
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[300px]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <PostList myPostPromise={myPostPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPost;
