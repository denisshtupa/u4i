const UseScript = (url, dataId, container) => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.type = `text/javascript`;

    script.onload = () => {
        new window.js3q({
            dataid: dataId,
            container: container,
            layout: "default",
            width: "80%",
            height: "50%",
            controlBarAutoHide: false
        });
    }
    console.log("🚀 ~ file: UseScript.js ~ line 8 ~ //useEffect ~ script", script)

    return script;
}

export default UseScript
