import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoginReminderModal({ user }) {
  const [show, setShow] = useState(false);

  // show modal only if user is not logged in
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => setShow(true), 2000); // show after 2s
      return () => clearTimeout(timer);
    }
  }, [user]);

  if (!show || user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-sm text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🍕 Hungry Already?
        </h2>
        <p className="text-gray-600 mb-6">
          For enjoying mouth-watering food, please log in and start ordering your favorites!
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShow(false)}
            className="px-5 py-2 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Maybe Later
          </button>
          <button
            onClick={() => window.location.href = "/auth/login"}
            className="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500"
          >
            Login Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
