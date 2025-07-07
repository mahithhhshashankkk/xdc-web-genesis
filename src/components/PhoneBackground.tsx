import { useEffect, useState } from "react";

const PhoneBackground = () => {
  const [phones, setPhones] = useState([]);
  const [signals, setSignals] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Generate floating phones (mix of landline and mobile)
    const phoneData = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 18,
      delay: Math.random() * 4,
      duration: Math.random() * 12 + 15,
      rotation: Math.random() * 40 - 20,
      type: Math.random() > 0.5 ? "📱" : "☎️",
    }));

    // Generate signal waves
    const signalData = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 8,
      delay: Math.random() * 3,
      duration: Math.random() * 8 + 10,
    }));

    // Generate message bubbles
    const messageData = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 12,
      rotation: Math.random() * 30 - 15,
    }));

    setPhones(phoneData);
    setSignals(signalData);
    setMessages(messageData);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-35 pointer-events-none">
      {/* Floating Phones */}
      {phones.map((phone) => (
        <div
          key={`phone-${phone.id}`}
          className="absolute animate-float"
          style={{
            left: `${phone.x}%`,
            top: `${phone.y}%`,
            animationDelay: `${phone.delay}s`,
            animationDuration: `${phone.duration}s`,
            transform: `rotate(${phone.rotation}deg)`,
          }}
        >
          <div
            className="relative text-primary/40"
            style={{
              fontSize: `${phone.size}px`,
            }}
          >
            {phone.type}
          </div>
        </div>
      ))}

      {/* Signal Waves */}
      {signals.map((signal) => (
        <div
          key={`signal-${signal.id}`}
          className="absolute animate-pulse"
          style={{
            left: `${signal.x}%`,
            top: `${signal.y}%`,
            animationDelay: `${signal.delay}s`,
            animationDuration: `${signal.duration}s`,
          }}
        >
          <div
            className="relative"
            style={{
              width: `${signal.size}px`,
              height: `${signal.size}px`,
            }}
          >
            {/* Signal bars */}
            <div className="absolute bottom-0 left-0 w-1 h-2 bg-primary/30"></div>
            <div className="absolute bottom-0 left-1.5 w-1 h-3 bg-primary/25"></div>
            <div className="absolute bottom-0 left-3 w-1 h-4 bg-primary/20"></div>
            <div className="absolute bottom-0 left-4.5 w-1 h-5 bg-primary/15"></div>
          </div>
        </div>
      ))}

      {/* Message Bubbles */}
      {messages.map((message) => (
        <div
          key={`message-${message.id}`}
          className="absolute animate-float-reverse"
          style={{
            left: `${message.x}%`,
            top: `${message.y}%`,
            animationDelay: `${message.delay}s`,
            animationDuration: `${message.duration}s`,
            transform: `rotate(${message.rotation}deg)`,
          }}
        >
          <div
            className="relative text-muted-foreground/40"
            style={{
              fontSize: `${message.size}px`,
            }}
          >
            💬
          </div>
        </div>
      ))}

      {/* Phone Network Pattern */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <div className="relative w-32 h-32">
          {/* Network tower */}
          <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-primary/20 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Signal circles */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-primary/15 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 border border-primary/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-24 h-24 border border-primary/8 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Contact Icons Pattern */}
      <div className="absolute bottom-1/3 left-1/4 opacity-15">
        <div className="relative w-48 h-24">
          {["📧", "📞", "📠", "💻", "📮", "📬"].map((icon, i) => (
            <div
              key={i}
              className="absolute text-muted-foreground/30 animate-pulse"
              style={{
                left: `${(i % 3) * 33}%`,
                top: `${Math.floor(i / 3) * 50}%`,
                fontSize: "20px",
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Phone Keypad Pattern */}
      <div className="absolute top-1/3 left-1/3 opacity-10">
        <div className="relative w-24 h-32">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border border-primary/20 rounded animate-pulse"
              style={{
                left: `${(i % 3) * 33}%`,
                top: `${Math.floor(i / 3) * 25}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${1.5 + Math.random() * 1}s`,
              }}
            >
              <span className="text-xs text-primary/15 flex items-center justify-center h-full">
                {i === 9 ? "*" : i === 10 ? "0" : i === 11 ? "#" : i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneBackground;
