import { motion } from "framer-motion";

export default function Animation() {
  return (
    <div className="h-[90vh] flex justify-center items-center bg-[url('/bg.jpg')] bg-cover bg-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Welcome to <span className="text-yellow-400">Food Heaven</span>
      </motion.h1>
    </div>
  );
}
