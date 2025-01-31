import { motion, useAnimation } from 'framer-motion';
import { Camera, Coffee, Heart, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const messages = [
  { id: 1, from: "Vishal", message: "Happy birthday Melvina ❤. College mudiya poguthu. Stay strong and I am here to always support you when needed. Have a great birthday and great future waiting ahead for you.🤗✨" },
  { id: 2, from: "Suzi", message: "Happy Birthday, Melvina! You’re the sweetest, most talented piglet I know—always singing like an angel but acting like a farm animal! Hope your day is as fun and chaotic as you are. May all the pigs throw you a surprise party!" },
  { id: 3, from: "Joshna", message: "Unakkaaga special video iruku keezha paar ;)" },
  { id: 4, from: "Nikki", message: "Happppieeee Birthdaayyy to the laziest person.. 🫂❤!! Wishing you a day filled with love,laughter and sweet memories 💓. Once again Happy Birthday Melzzz🥳🥳🥳" },
  { id: 5, from: "Amala", message: "Happy 21 to the one rare sane person in our band. Now you got a legal pass at bars😭" },
  { id: 6, from: "The Great Romario Kavin", message: "Happy birthday melluveenaa, will get you a kosu bat and odomos for suree🎀" },
  { id: 7, from: "Jeni", message: "Happy bday mellll! Another year of pretending to be the elder while doing all  little shitty behaviors that keeps u still stuck as a littleee one❤" },
  { id: 8, from: "Shalwin", message: "Hey there, doll face! Happy Birthday to the Rory to my Lorelai! Oi, with the poodles already, let's celebrate you big today! May your year be as cozy as a Stars Hollow coffee and as melodious as a Shawn Mendes tune. Love you to the town square and back!" },
  { id: 10, from:"Estelle", message: "Happy Birthday Melsss ! ❤ Hope you stay sweet as always and never lose your spark. You deserve all the love . Muahh 🥰 God bless ya !" },
  { id: 11,from: "Manishaa", message: "Nee lam oru aalu unaku poranthanaal oru keduu"},
  { id: 12,from: "Varsha", message: "To the coolest person I know, happy birthday melll😚❤! May your day be as awesome as you are."},
  { id: 13,from: "Leoo", message: "Happy birthday malllluvinaaaa.Grow up don’t be a pedo anymore"},
  { id: 14,from: "Mithra", message: "Another year older, wiser, and even more amazing — happy birthday"},
  { id: 15,from: "Zehra", message:"A very Happy birthday Melllll❤🫂...lot's of love and hugs  to my GNF."},
  { id: 16,from: "Jerome", message:"Happiest Birthday melsss <3..U gotta forever be grateful for teaching u the chords for perfect.. which u can't play perfectly obviously lmaoo...anywayss have a great one...and behave like your 21 😊❤"}
];

const photos = [
  '/pictures/img1.jpg',
  '/pictures/img2.jpg',
  '/pictures/img3.jpg',
  '/pictures/img4.jpg',
  '/pictures/img5.jpg',
  '/pictures/img6.jpg',
  '/pictures/img7.jpg'
];

interface SparkleProps {
  delay?: number;
  style?: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ delay =1, style }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 1,
      delay,
      repeat: Infinity,
      repeatDelay: 2
    }}
    className="absolute"
    style={style}
  >
    <Sparkles className="text-yellow-400 w-4 h-4" />
  </motion.div>
);

const RoseBouquet = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotateY: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
    >
      <motion.div
        animate={controls}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        className="relative"
      >
        <motion.div
          className="relative"
          animate={{
            y: [-20, 20, -20],
            rotateZ: [-5, 5, -5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0YT9hW2Nm7DSZWhBDIJmx6UMkg-nF-aKgg&s"
            
            className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            style={{ 
              filter: "drop-shadow(0 0 20px rgba(255,105,180,0.5))"
            }}
          />
          {[...Array(12)].map((_, i) => (
            <Sparkle 
              key={i} 
              delay={i * 0.2} 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

function App() {

  const [showConfetti, setShowConfetti] = useState(false);
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const [showBouquet, setShowBouquet] = useState(false);

  useEffect(() => {
    // Initial explosion with more confetti
    setTimeout(() => {
      setShowConfetti(true);
      setNumberOfPieces(500);
      
      // Show bouquet after initial confetti
      setTimeout(() => {
        setShowBouquet(false);
      }, );
      
      // Sustained confetti effect
      const interval = setInterval(() => {
        setNumberOfPieces(prev => Math.max(prev - 50, 200));
      }, 1000);

      // Cleanup
      return () => clearInterval(interval);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50">
      {showConfetti && (
        <Confetti
          numberOfPieces={numberOfPieces}
          gravity={0.2}
          initialVelocityY={30}
          initialVelocityX={{ min: -20, max: 20 }}
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          colors={[
            '#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#ffd700',
            '#ff77aa', '#ff5588', '#ff99cc', '#ffddee'
          ]}
          tweenDuration={100}
        />
      )}
      
      {showBouquet && <RoseBouquet />}
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative"
      >
        <Coffee className="w-16 h-16 text-pink-500 mb-4" />
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl gilmore-font glow-text text-pink-600 mb-4 relative z-10"
        >
          Happy 21st Birthday
        </motion.h1>
        <motion.h2 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl gilmore-font text-pink-500 mb-8 relative z-10"
        >
          Melvina!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-700 max-w-2xl relative z-10"
        >
          May your day be filled with as much coffee as a Gilmore girl needs,
          as many books as Rory's shelves can hold, and as much joy as Stars Hollow during a town festival!
        </motion.p>
      </motion.section>
      <div className="flex justify-center items-center">
        <video
          controls
          className="w-full max-w-lg rounded-lg shadow-lg"
        >
          <source src="/pictures/vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Messages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Heart className="w-8 h-8 text-pink-500 mr-2" />
            <h2 className="text-4xl gilmore-font text-gray-800">Messages from Stars Hollow</h2>
          </div>
          <div className="scroll-container flex overflow-x-auto gap-6 pb-8">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 bg-pink-50 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-pink-600 mb-2">{msg.from}</h3>
                <p className="text-gray-700">{msg.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Album + Video Section */}
<section className="py-20 bg-pink-50">
  <div className="container mx-auto px-4">
    <div className="flex items-center mb-8">
      <Camera className="w-8 h-8 text-pink-500 mr-2" />
      <h2 className="text-4xl gilmore-font text-gray-800">Memories</h2>
    </div>

    {/* Photo Grid & Video Side by Side */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg aspect-square"
          >
            <img
              src={photo}
              alt={`Birthday memory ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Video Section */}
      <div className="flex justify-center items-center">
        <video
          controls
          className="w-full max-w-lg rounded-lg shadow-lg"
        >
          <source src="/pictures/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative"
      >
        <Coffee className="w-16 h-16 text-pink-500 mb-4" />
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl gilmore-font glow-text text-pink-600 mb-4 relative z-10"
        >
          We Love You 🫂❤🎀
        </motion.h1>
        <motion.h2 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl gilmore-font text-pink-500 mb-8 relative z-10"
        >
          Melvinnnnn!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-700 max-w-2xl relative z-10"
        >
          To more crazy & splendid happenings 🥂
        </motion.p>
      </motion.section>
    </div>
  </div>
</section>
      
    </div>
  );
}

export default App;