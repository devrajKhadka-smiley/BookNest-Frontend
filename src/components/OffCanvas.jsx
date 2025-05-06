function OffCanvas({ show, onClose, title, children }) {
    return (
      <div
        className={`fixed inset-0 z-50 backdrop-blur-sm transition-opacity ${
          show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
        }}
        onClick={onClose}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
            show ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h5 className="text-lg font-semibold">{title}</h5>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  }
  
  export default OffCanvas;
  