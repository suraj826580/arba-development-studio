export const request = async (url, method, data) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
