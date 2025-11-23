import { RightOutlined } from "@ant-design/icons";
import { Link } from "@tanstack/react-router";
import UserDetails from "./UserDetails";
import { useEffect, useState } from "react";
import { fetchLastActiveUsers } from "@/services";
import { Spin } from "antd";

export default function LastActiveUsersSection() {
  const [loading, setLoading] = useState<boolean>(true);
  const [lastActiveUsers, setLastActiveUsers] = useState<any[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      // delay 2 seconds to simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const users = await fetchLastActiveUsers();
      setLastActiveUsers(users || []);
      setLoading(false);
    };

    loadUsers();
  }, []);

  return (
    <div className="tw:w-full tw:h-[495px] tw:rounded-xl tw:py-3 tw:bg-white tw:border tw:border-gray-200 tw:text-black">
      <div className="tw:px-3 tw:flex tw:justify-between tw:items-center tw:pb-3">
        <h6 className="tw:font-semibold">Last active users</h6>
        <Link
          to="/users/list"
          className="tw:text-gray-500 tw:text-[12px] tw:flex tw:space-x-1 tw:items-center"
        >
          <span>All users</span> <RightOutlined />
        </Link>
      </div>

      <hr className="tw:text-gray-200" />

      <div className="tw:h-[448px] tw:overflow-y-auto">
        {loading ? (
          <center className="tw:h-full tw:flex tw:items-center tw:justify-center">
            <Spin size="large" />
          </center>
        ) : lastActiveUsers && lastActiveUsers.length > 0 ? (
          lastActiveUsers.map((user) => (
            <UserDetails key={user.id} data={user} />
          ))
        ) : (
          <center className="tw:h-full tw:flex tw:items-center tw:justify-center">
            <span className="tw:text-gray-500 tw:italic">No users found.</span>
          </center>
        )}
      </div>
    </div>
  );
}
