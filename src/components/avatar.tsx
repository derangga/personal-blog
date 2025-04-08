import React from "react";
import Image from "next/image";
import { assetLocalPath } from "@/constants/image-path";

const Avatar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-full border-2 dark:border-white dark:bg-white">
        <Image
          src={`${assetLocalPath}/assets/avatar-rz.png`}
          alt="Avatar"
          height={220}
          width={220}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Avatar;
