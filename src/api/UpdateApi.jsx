const BASE_URL = "http://localhost:8000/api/user";

export const updateUserProfile = async (data) => {
  const token = localStorage.getItem("token");
  const formData = new FormData();

  for (let key in data) {
    if (data[key]) formData.append(key, data[key]);
  }

  const res = await fetch(`${BASE_URL}/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) throw new Error("Update failed");
  return res.json();
};
