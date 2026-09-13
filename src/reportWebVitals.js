// @flow strict

type PerformanceEntryHandler = (entry: unknown) => void;

const reportWebVitals = (onPerfEntry?: PerformanceEntryHandler): void => {
    if (typeof onPerfEntry !== "function") {
        return;
    }

    import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry);
        onINP(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
    });
};

export default reportWebVitals;
