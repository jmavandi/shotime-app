import React from "react";

interface Props {
  params: Promise<{ id: number; photoId: number }>;
}

const PhotoPage = async (props: Props) => {
  const params = await props.params;

  const {
    id,
    photoId
  } = params;

  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;
