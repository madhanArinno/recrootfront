import { Box } from "@mui/material";
import React, { useState } from "react";
import { styles } from "./Companyprofilestyle";
import { useEffect } from "react";

export function Photoscard() {
  const url =
    "https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg";
  const fileName = "myFile.jpg";

  const [compph, setCompph] = useState();

  useEffect(() => {
    fetch(url).then(async (response) => {
      const contentType = response.headers.get("content-type");
      const blob = await response.blob();
      const file = new File([blob], fileName, { contentType });
      setCompph(file);
    });
  }, []);

  return (
    <Box>
      <img style={styles.photosrend} alt="" src={URL.createObjectURL(compph)} />
    </Box>
  );
}
