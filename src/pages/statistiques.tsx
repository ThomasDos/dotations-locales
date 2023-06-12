import Dots from "components/ui/Dots";
import { useState } from "react";

export default function Statistiques() {
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
                    src="http://metabase.dotations.incubateur.anct.gouv.fr/public/dashboard/9de68249-8963-42f7-9a1d-b1493ea652a5"
                    width="100%"
                    height="800"
                    onLoad={handleOnLoad}
                />
            </div>
        </>
    );
}
