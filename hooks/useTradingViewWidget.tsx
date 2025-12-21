// Client Side hook
'use client';

// Imports
import { useEffect, useRef }     from "react";

// Custom Hook
const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {

    // useRef Hook
    const containerRef = useRef<HTMLDivElement | null>(null);

    // useEffect 
    useEffect(() => {
        if (!containerRef.current) return;
        if (containerRef.current.dataset.loaded) return;
        containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;

        const script = document.createElement("script");
        script.src = scriptUrl; // Script url comes from props
        script.async = true;
        script.innerHTML = JSON.stringify(config);

        // Append script & Changing loaded state 
        containerRef.current.appendChild(script);
        containerRef.current.dataset.loaded = 'true';

        return () => {
            if(containerRef.current) {
                containerRef.current.innerHTML = '';
                delete containerRef.current.dataset.loaded; // Delete loaded property 
            }
        }
    }, [scriptUrl, config, height])

    return containerRef;
}
export default useTradingViewWidget
