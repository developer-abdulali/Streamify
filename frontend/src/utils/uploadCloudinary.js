const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
const cloud_name = process.env.REACT_APP_CLOUD_NAME;

const uploadImageToCloudinary = async (file) => {
  const uploadData = new FormData();

  uploadData.append("file", file);
  uploadData.append("upload_preset", upload_preset);
  uploadData.append("cloud_name", cloud_name);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "post",
      body: uploadData,
    }
  );
  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;


// const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
// const cloud_name = process.env.REACT_APP_CLOUD_NAME;

// const cloudinary_api_key = 916933874973413;
// const cloudinary_api_secret = "RdYS5FWtv7GJ_anY99wiPC9rnAY";

// const uploadImageToCloudinary = async (file) => {
//   const uploadData = new FormData();

//   uploadData.append("file", file);
//   uploadData.append("upload_preset", upload_preset);
//   uploadData.append("cloud_name", cloud_name);

//   const res = await fetch(
//     `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
//     {
//       method: "post",
//       body: uploadData,
//       headers: {
//         Authorization:
//           "Basic " + btoa(`${cloudinary_api_key}:${cloudinary_api_secret}`),
//       },
//     }
//   );

//   if (!res.ok) {
//     const errorData = await res.json().catch(() => null);
//     const errorMessage = errorData?.error?.message || "Unknown error";
//     throw new Error(
//       `Error uploading image to Cloudinary: ${res.status} - ${errorMessage}`
//     );
//   }

//   const data = await res.json();
//   return data;
// };

// export default uploadImageToCloudinary;
