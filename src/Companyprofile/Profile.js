import React, { useState } from "react";
import "./Profile.css";
import EditSharpIcon from "@mui/icons-material/EditSharp";
const Profile = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      {error && <p className="errorMsg">File not supported</p>}
      <div
        className="imgPreview"
        style={{
          background: imgPreview
            ? `url("${imgPreview}") no-repeat center/cover`
            : null,
        }}
      >
        {!imgPreview && (
          <>
            <label htmlFor="fileUpload" className="customFileUpload">
              Choose file
            </label>
            <input
              htmlFor="fileUpload"
              type="file"
              id="fileUpload"
              onChange={handleImageChange}
            />
          </>
        )}
      </div>
      {imgPreview && (
        <EditSharpIcon
          onClick={() => setImgPreview(null)}
          sx={{ alignSelf: "flex-end", color: "#4fa9ff", mt: "5px" }}
        />
      )}
    </div>
  );
};

export default Profile;
