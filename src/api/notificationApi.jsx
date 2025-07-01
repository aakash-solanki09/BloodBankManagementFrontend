// notificationApi.jsx

const API_BASE = "http://localhost:8000/api/admin/notification"; // ✅ Fixed typo: notifiaction → notification

export const fetchNotifications = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/getNotification`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // not required for GET, but safe
      Authorization: `Bearer ${token}`, // ✅ will trigger preflight, so backend must allow it
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return await res.json();
};
