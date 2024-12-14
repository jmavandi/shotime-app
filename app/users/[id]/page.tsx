import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ id: number }>;
}

const UserDetailPage = async (props: Props) => {
  const params = await props.params;

  const {
    id
  } = params;

  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
