export const fetchUserStatusAPI = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8000/api/admin/user-status", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // ✅ backticks, not string
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user status");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching user status:", error.message);
    return { donations: [], requests: [], error: error.message };
  }
};

