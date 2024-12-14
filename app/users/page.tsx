import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async (props: Props) => {
  const searchParams = await props.searchParams;

  const {
    sortOrder
  } = searchParams;

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
