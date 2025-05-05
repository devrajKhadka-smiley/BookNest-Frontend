"use client";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose} title="Close">
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0)", // Darker overlay for depth
    backdropFilter: "blur(4px)", // Adds frosted glass effect
    WebkitBackdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    transition: "all 0.3s ease-in-out",
  },
  modal: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "32px 24px",
    borderRadius: "16px",
    textAlign: "left",
    position: "relative",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    maxWidth: "600px",
    width: "90%",
    border: "1px solid #b3dbf5", // Subtle border to match your theme
    fontFamily: "Inter, sans-serif",
  },
  closeButton: {
    position: "absolute",
    top: "12px",
    right: "16px",
    fontSize: "18px",
    border: "none",
    background: "transparent",
    color: "#333",
    cursor: "pointer",
    transition: "color 0.2s",
  },
};

export default Modal;
