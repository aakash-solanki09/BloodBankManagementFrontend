export const submitBloodRequest = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();

    // Append all fields to FormData
    for (const key in data) {
      if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    }

    const response = await fetch("http://localhost:8000/api/admin/request", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // ✅ include token if backend needs it
      },
      body: formData,
    });

    // Safely parse response
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const resData = await response.json();
      if (!response.ok) throw new Error(resData.message || "Submission failed");
      return resData;
    } else {
      const text = await response.text();
      console.error("Server returned non-JSON:", text);
      throw new Error("Server error (not JSON): " + text);
    }
  } catch (error) {
    console.error("submitBloodRequest error:", error.message);
    throw error;
  }
};
