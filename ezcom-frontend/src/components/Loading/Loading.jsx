import React from "react";

export const Loading = () => {
    return (
        <div>
            <div class="my-[120px] flex space-x-2 justify-center items-center dark:invert">
                <span class="sr-only">Loading...</span>
                <div class="h-8 w-8 bg-100 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div class="h-8 w-8 bg-100 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div class="h-8 w-8 bg-100 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};
