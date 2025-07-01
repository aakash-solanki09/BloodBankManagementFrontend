const API_BASE = "http://localhost:8000/api/admin";

export const submitDonation = async (formData) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("User not authenticated. Please login again.");
  }

  try {
    const response = await fetch(`${API_BASE}/donate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit donation");
    }

    return data;
  } catch (error) {
    // Log for debug (optional)
    console.error("submitDonation error:", error);
    throw error;
  }
};
