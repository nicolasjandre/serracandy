import { useCallback, useEffect } from "react";

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";

export function handleEscKey(handleCloseModal) {
    const handleEscKey = useCallback(
        (event) => {
            if (event.key === KEY_NAME_ESC) {
                handleCloseModal();
            }
        },
        [handleCloseModal]
    );

    useEffect(() => {
        document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

        return () => {
            document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
        };
    }, [handleEscKey]);
}