
async function getme() {
    const res = await axios.get(
      `https://nt-devconnector.onrender.com/api/auth${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": storedToken,
        },
      }
    );
    console.log(res?.data?._id);
  }
  getme();
