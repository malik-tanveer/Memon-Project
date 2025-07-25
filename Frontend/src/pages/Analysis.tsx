import { useEffect } from "react";

const Analysis = () => {
  useEffect(() => {
    window.location.href = "https://datatoolfordae.streamlit.app/";
  }, []);

  return; // kuch bhi render mat karo
};

export default Analysis;