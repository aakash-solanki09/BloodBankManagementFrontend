// src/api/LoginApi.jsx
export const loginUser = async ({ email, userPass }) => {
  try {
    const res = await fetch("http://localhost:8000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, userPass }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data; // { message, token }
  } catch (error) {
    throw error;
  }
};
