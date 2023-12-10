import {  CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "../../hooks";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};
const Loading = () => {
    const { loading } = useAuth()
  return (
    <div className={`w-screen h-screen flex items-center `}>
    <ClipLoader
      color={"#4a4b52"}
      loading={loading || true}
      cssOverride={override}
      size={130}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  )
}

export default Loading