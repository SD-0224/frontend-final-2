export const fetchPath = async (path) => {
  try {
    const response = await fetch(path);

    // Check response status
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    const data = await response.json();
    console.log("response: ", data);
    return data;
  } catch (error) {
    return error;
  }
};
