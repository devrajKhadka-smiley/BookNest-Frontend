function OffCanvas({ show, onClose, title, children }) {
  return (
    <div
      className={`fixed inset-0 z-50 backdrop-blur-sm transition-opacity ${
        show
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
      }}
    >
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            className="text-gray-500 hover:text-gray-700 hover:cursor-pointer text-2xl"
            onClick={onClose} // Close only when this button is clicked
          >
            &times;
          </button>
        </div>
        <h5 className="text-lg font-semibold text-center">{title}</h5>
        <div className="p-4 flex flex-col justify-center">{children}</div>
      </div>
    </div>
  );
}

export default OffCanvas;
