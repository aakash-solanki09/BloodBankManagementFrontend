import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notificationApi"; // adjust path as needed

const NotificationBadge = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (err) {
        console.error("Failed to fetch:", err);
        setError("Failed to load notifications.");
      }
    };

    getData();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      Notifications: {notifications.length}
      {/* Optionally map notifications here */}
    </div>
  );
};

export default NotificationBadge;
