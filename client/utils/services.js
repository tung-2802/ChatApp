export const baseUrl = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      let message;

      if (data?.message) {
        message = data.message;
      } else {
        message = data;
      }

      return { error: true, message };
    }

    return data;
  } catch (error) {
    return { error: true, message: error.message };
  }
};

export const getRequest = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      let message = "An error ...";
      if (data?.message) {
        message = data.message;
      }
      return { error: true, message };
    }
    return data;
  } catch (error) {
    return { error: true, message: error.message };
  }
};
