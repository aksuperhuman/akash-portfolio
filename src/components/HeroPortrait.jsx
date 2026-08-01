import { motion } from "framer-motion";
import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

import profile from "../assets/images/profile.jpeg";

const HeroPortrait = () => {
    return (
        <div className="relative w-full max-w-md mx-auto aspect-square">
            {/* Glow */}
            <div className="absolute inset-0 bg-gold-radial blur-2xl scale-110" />

            {/* Rotating Ring */}
            <motion.div
                className="absolute inset-4 rounded-full border border-dashed border-gold/25"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Profile Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gold shadow-gold">
                <img
                    src={profile}
                    alt="Akash R."
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Floating Java */}
            <motion.div
                className="absolute -left-2 top-10 w-14 h-14 rounded-2xl glass-strong flex items-center justify-center text-gold text-2xl animate-float"
            >
                <FaJava />
            </motion.div>

            {/* Floating Spring */}
            <motion.div
                className="absolute -right-3 top-24 w-14 h-14 rounded-2xl glass-strong flex items-center justify-center text-gold text-2xl animate-float-delay"
            >
                <SiSpringboot />
            </motion.div>

            {/* Floating React */}
            <motion.div
                className="absolute left-4 -bottom-2 w-14 h-14 rounded-2xl glass-strong flex items-center justify-center text-gold text-2xl animate-float"
            >
                <FaReact />
            </motion.div>
        </div>
    );
};

export default HeroPortrait;