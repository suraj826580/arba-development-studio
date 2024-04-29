export const request = async (url, method, data) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
