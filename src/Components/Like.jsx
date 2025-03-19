import React from "react";

const Like = () => {
  async function onSubmitLike() {
    const res = await axios.get(
      `https://nt-devconnector.onrender.com/api/posts/${postId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
      }
    );
    console.log(res);
    
  }
  onSubmitLike()

  return <div></div>;
};

export default Like;
