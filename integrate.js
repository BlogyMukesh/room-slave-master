import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
import {
  getMessaging,
  getToken,
  isSupported,
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-messaging.js";

const API_URL = "https://push.funox.com/api";
const firebaseConfig = {
  apiKey: "AIzaSyCjPbIbxPcWL4dq-qrR6ejtrBPygxlmTqI",
  authDomain: "push-funox.firebaseapp.com",
  projectId: "push-funox",
  storageBucket: "push-funox.firebasestorage.app",
  messagingSenderId: "419349256615",
  appId: "1:419349256615:web:35155d095caa61b20d3e82",
  measurementId: "G-7FZG7EJY2C",
};
const WEB_PUSH_PUBLIC_KEY =
  "BAIZVfTGMFHyqaV5PFBxfHhDq8eNhE7myaO7f3iYcW3jCbDK8ZauW86VKLy-7d2K1BT-WultnV3vVdgumFN9WHw";
const STORAGE_KEY = "lastSentFcmToken";

async function registerServiceWorker() {
  return navigator.serviceWorker.register("/firebase-messaging-sw.js");
}

async function requestNotifPermission() {
  const result = await Notification.requestPermission();
  return result === "granted";
}

async function sendTokenToServer(token) {
  const last = localStorage.getItem(STORAGE_KEY);
  if (!token || token === last) return;

  const body = {
    sitename: location.hostname,
    country: "India",
    token,
  };

  try {
    await fetch(`${API_URL}/user/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then((r) => r.json().catch(() => ({})));
    localStorage.setItem(STORAGE_KEY, token);
  } catch (e) {
    console.error("Subscribe failed:", e);
  }
}

export async function initPush() {
  try {
    const supported = await isSupported();
    if (!supported) {
      console.warn("FCM not supported in this browser/context.");
      return;
    }

    const app = initializeApp(firebaseConfig);
    try {
      getAnalytics(app);
    } catch (_) {}

    const reg = await registerServiceWorker();
    const messaging = getMessaging(app);
    const granted = await requestNotifPermission();
    if (!granted) {
      console.warn("Notification permission not granted.");
      return;
    }
    const token = await getToken(messaging, {
      vapidKey: WEB_PUSH_PUBLIC_KEY,
      serviceWorkerRegistration: reg,
    });
    console.log("[FCM] token:", token);
    await sendTokenToServer(token);
  } catch (err) {
    console.error("initPush error:", err);
  }
}

initPush();
