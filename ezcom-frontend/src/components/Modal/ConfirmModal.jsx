import React from "react";

export const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-400 px-[24px] py-[32px] rounded-lg border border-300">
                        <p className="mb-4 justify-center flex text-2xl">
                            Delete product ?
                        </p>
                        <div className="flex justify-center gap-5 mt-4">
                            <button
                                className="w-40 p-2 transition bg-green-600 rounded hover:bg-green-700 text-200"
                                onClick={onConfirm}
                            >
                                Confirm
                            </button>
                            <button
                                className="w-40 p-2 transition rounded bg-primary hover:bg-orange-700 text-200"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
