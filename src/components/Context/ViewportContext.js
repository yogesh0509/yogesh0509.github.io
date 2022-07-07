import { createContext, useState, useEffect } from "react";

const ViewportContext = createContext('');

export function ViewportcontextProvider(props) {
    const [Viewport, setViewport] = useState('');

    function getSize(width){
        if(width < 769){
            return "sm";
        }
        else{
            return "lg";
        }
    }

    useEffect(()=> {
        if(!Viewport){
            let size = getSize(window.innerWidth);
            setViewport(size);
        }
        function handleResize() {
            let size = getSize(window.innerWidth);
            setViewport(size);
        }
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    })


    const context = {
        viewportState: Viewport
    };

    return (
        <ViewportContext.Provider value={context}>
            {props.children}
        </ViewportContext.Provider>
    )

}

export default ViewportContext;