import { useEffect, useState } from "react";
import { fetchUserStatusAPI } from "../api/userStatusApi";

const UserStatus = () => {
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStatus = async () => {
      const data = await fetchUserStatusAPI();
      console.log("User status response:", data); // ✅ See if requests come
      setDonations(data.donations || []);
      setRequests(data.requests || []);
      setLoading(false);
    };

    loadStatus();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="pt-[100px] p-6 max-w-4xl mx-auto space-y-8">

      <h2 className="text-2xl font-semibold text-center text-red-700">Your Blood Requests</h2>
      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No blood requests found.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((r) => (
            <li key={r._id} className="border p-4 rounded shadow">
              <p><strong>Blood Group:</strong> {r.bloodGroup}</p>
              <p><strong>Reason:</strong> {r.reason}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`font-bold ${r.status === "Approved" ? "text-green-600" : r.status === "Rejected" ? "text-red-500" : "text-yellow-500"}`}>
                  {r.status}
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}

      <h2 className="text-2xl font-semibold text-center text-red-700 mt-8">Your Donations</h2>
      {donations.length === 0 ? (
        <p className="text-center text-gray-500">No donations found.</p>
      ) : (
        <ul className="space-y-4">
          {donations.map((d) => (
            <li key={d._id} className="border p-4 rounded shadow">
              <p><strong>Blood Group:</strong> {d.bloodGroup}</p>
              <p><strong>Hospital:</strong> {d.hospital}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`font-bold ${d.status === "Approved" ? "text-green-600" : d.status === "Rejected" ? "text-red-500" : "text-yellow-500"}`}>
                  {d.status}
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserStatus;
