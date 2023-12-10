
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useReports } from "../../hooks";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
};
const Spinner = () => {
    const { loadingSpinner } = useReports()
    return (
        <div className={`w-full h-full flex items-center `}>
            <ClipLoader
                color={"#4a4b52"}
                loading={loadingSpinner}
                cssOverride={override}
                size={125}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Spinner



