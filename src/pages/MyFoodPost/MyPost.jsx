import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { myPostPromise } from "../../api/MyPostApi";
import PostList from "./PostList";

const MyPost = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <PostList myPostPromise={myPostPromise(user.email)}></PostList>
        {/* <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList> */}
      </Suspense>
    </div>
  );
};

export default MyPost;
