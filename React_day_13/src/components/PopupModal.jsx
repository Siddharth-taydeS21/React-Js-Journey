import { createPortal } from "react-dom";

export default function PopupModal({ isOpen, setIsOpen, headerText, children, footerBtnText }) {
    return createPortal(
        <div className={`Back-drop absolute top-0 left-0 w-screen h-screen bg-black/40 justify-center items-center  ${isOpen ? 'flex' : 'hidden'}`}>
            <div className="w-full max-w-md rounded-xl bg-white p-6 sm:p-8 shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{headerText}</h2>
                <div className="space-y-5">
                    {
                        children
                    }
                    <div className="flex justify-end gap-3">
                        <button type="button" className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={() => { setIsOpen(false) }}>cancel</button>
                        <button type="submit" className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            onClick={() => { setIsOpen(false) }}>{footerBtnText}</button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal_root')
    )
}
