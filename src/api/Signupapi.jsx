const signupUser = async (formData) => {
  try {
    const res = await fetch("http://localhost:8000/api/user", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Signup failed");
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signupUser;
