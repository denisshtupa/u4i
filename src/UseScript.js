import { useEffect } from "react";

const UseScript = (url, dataId, container) => {
    let js3qInstance;

    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;
        script.type = `text/javascript`;

        script.onload = () => {
            new window.js3q({
                dataid: dataId,
                container: container,
                layout: "default",
                width:"80%",
                height:"50%",
                controlBarAutoHide: false
            });
        }

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url])

}

export default UseScript
