/** @format */
export const getData = async (url) => {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
getData();
