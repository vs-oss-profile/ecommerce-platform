import { createRoot } from "react-dom/client";

let toastContainer;

export function initToast() {
  toastContainer = document.createElement("div");
  toastContainer.className = "toast toast-bottom toast-end z-50";
  document.body.appendChild(toastContainer);
}

export function showToast(message, type = "info") {
  if (!toastContainer) return;

  const toast = document.createElement("div");

  const typeClass = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info",
  }[type];

  toast.className = `alert ${typeClass} shadow-lg mb-2`;
  toast.innerHTML = `<span>${message}</span>`;

  toastContainer.appendChild(toast);

  // Auto remove after 3s
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
