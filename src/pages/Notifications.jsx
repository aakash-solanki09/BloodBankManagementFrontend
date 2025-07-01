import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notificationApi";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="pt-[100px] px-6 min-h-screen bg-gradient-to-br from-pink-50 via-red-100 to-rose-100">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Notifications</h2>
          {notifications.length === 0 ? (
            <p className="text-center text-gray-500">No new notifications.</p>
          ) : (
            <ul className="space-y-4">
              {notifications.map((n, index) => (
                <li key={index} className="border-b pb-3">
                  <h3 className="font-semibold text-lg text-red-600">{n.title}</h3>
                  <p className="text-gray-700">{n.message}</p>
                  <p className="text-sm text-gray-400">{new Date(n.date).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
 
    </>
  );
};

export default Notifications;
