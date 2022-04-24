"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useDebouncedState(v, delay) {
    const [value, setValue] = (0, react_1.useState)(v);
    const [debouncedValue, setDebouncedValue] = (0, react_1.useState)(value);
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return [debouncedValue, setValue];
}
exports.default = useDebouncedState;
//# sourceMappingURL=index.js.map