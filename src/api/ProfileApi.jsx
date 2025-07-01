
const API_URL = "http://localhost:8000/api/user"; 

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/getUser`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch profile");
  return await res.json();
};

export const deleteUserProfile = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/deleteUser`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to delete account");
  return await res.json();
};
