import Dots from "components/ui/Dots";
import { useState } from "react";

export default function Stats() {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const handleOnLoad = () => setIframeLoaded(true);

    return (
        <>
            {!iframeLoaded && (
                <div className="flex justify-center items-center mt-[40vh]">
                    <Dots dotsColor="--blue-france-113" />
                </div>
            )}
            <div className={iframeLoaded ? "opacity-100" : "opacity-0"}>
                <iframe
                    src="https://metabase-temp.osc-fr1.scalingo.io/public/dashboard/8e3483fc-d819-4253-8474-751cb4007b8f"
                    width="100%"
                    height="800"
                    onLoad={handleOnLoad}
                />
            </div>
        </>
    );
}
