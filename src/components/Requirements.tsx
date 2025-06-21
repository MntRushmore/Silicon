import { CheckCircle, Cpu } from 'lucide-react';

export const Requirements = () => {
  const requirements = [
    {
      title: "Original Design",
      description: "Your devboard must be an original design, not a copy of existing boards"
    },
    {
      title: "Open Source",
      description: "Design files and schematics must be open soruce"
    },

    {
      title: "Detailed Documentation",
      description: "Include comprehensive documentation, assembly guide, and example code"
    },

  ];

  const partsAllowed = [
    {
      component: "Microcontrollers",
      examples: "Any Microcontroller available on LCSC!",
      limit: "Unlimited!"
    },
    {
      component: "LEDs or Neopixels",
      examples: "Standard LEDs, RGB LEDs, WS2812B strips",
      limit: "Unlimited!"
    },
    {
      component: "Storage",
      examples: "SD card slots, EEPROM, Flash memory",
      limit: "Unlimited!"
    },
    {
      component: "Sensors",
      examples: "Temperature, humidity, accelerometer, gyro",
      limit: "Unlimited!"
    },
    {
      component: "Communication",
      examples: "WiFi, Bluetooth, USB, UART, I2C, SPI",
      limit: "Unlimited!"
    },
    {
      component: "Power Management",
      examples: "Voltage regulators, battery connectors, charging circuits",
      limit: "Unlimited!"
    },
    {
      component: "I/O Connectors",
      examples: "GPIO headers, terminal blocks, JST connectors, USB-C, USB-A, USB-B, etc.",
      limit: "Unlimited!"
    },
    {
      component: "Display Interfaces",
      examples: "OLED connectors, LCD headers, e-ink interfaces",
      limit: "Unlimited!"
    }
  ];

  const process = [
    {
      step: "00",
      title: "Buidling Your Devboard",
      description: "Build your devboard and get it working - Make sure to upload it to OSHWA! - Please not it MUST be built using EasyEDA due to a sponsorship from EasyEDA"
    },
    {
      step: "01",
      title: "Submit Application",
      description: "Fill out the application form with your design details and documentation - Make sure to include a link to your project on GitHub!"
    },
    {
      step: "02", 
      title: "Review Process",
      description: "We will review your submission and if you are approved, we will send the grant to you via HCB! - Please not this grant ONLY covers shipping - You will get a JLC coupon code to cover the rest of the cost"
    },
    {
      step: "03",
      title: "Grant Approval",
      description: "Approved projects get funded to manufacture their devboards. You’ll receive a $25 HCB grant for shipping, and can request more if you’ve put in extra work or hours."
    },
    {
      step: "04",
      title: "Ship & Share",
      description: "Share your completed boards with hackclubers and get features on our gallery!"
    }
  ];

  return (
    <section id="requirements" className="py-16 border-t border-green-800/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Requirements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-400 font-mono mb-4">REQUIREMENTS</h2>
            <p className="text-gray-300 text-lg">What you need to qualify for Silicon</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-black/50 border border-green-800/30 rounded-lg hover:border-green-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-green-400 font-mono mb-2">{req.title}</h3>
                  <p className="text-gray-300">{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parts Allowed */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-400 font-mono mb-4">PARTS ALLOWED</h2>
            <p className="text-gray-300 text-lg">Components and limits for your devboard design</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partsAllowed.map((part, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-black/50 border border-green-800/30 rounded-lg hover:border-green-400/50 transition-all duration-300"
              >
                <Cpu className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-green-400 font-mono mb-2">{part.component}</h3>
                  <p className="text-gray-300 mb-2">{part.examples}</p>
                  <p className="text-sm text-blue-400 font-mono">{part.limit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-400 font-mono mb-4">APPLICATION PROCESS</h2>
            <p className="text-gray-300 text-lg">How to get your devboard funded</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold font-mono text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 font-mono mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
