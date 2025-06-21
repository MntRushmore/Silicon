import { useState } from 'react';
import { CircuitPattern } from '@/components/CircuitPattern';
import { GlowingButton } from '@/components/GlowingButton';
import { CheckCircle, Cpu, BookOpen, Code, Download, Users, Award, Clock, AlertTriangle, ExternalLink, ArrowRight } from 'lucide-react';

const Guide = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabs = [
    { id: 'getting-started', label: 'Getting Started', icon: BookOpen },
    { id: 'requirements', label: 'Requirements', icon: CheckCircle },
    { id: 'design-process', label: 'Design Process', icon: Cpu },
    { id: 'submission', label: 'Submission', icon: Download },
    { id: 'resources', label: 'Resources', icon: Code },
    { id: 'faq', label: 'FAQ', icon: Users }
  ];

  const gettingStarted = [
    {
      title: "Understand the Project",
      description: "Silicon is a YSWS that funds custom devboard designs by hackclubers 18 and under. We provide funding for manufacturing and shipping your original designs.",
      icon: Award
    },
    {
      title: "Check Eligibility",
      description: "You must be 18 years old or younger. Your design must be original and built using EasyEDA. Open source licensing is required.",
      icon: CheckCircle
    },
    {
      title: "Plan Your Design",
      description: "Think about what kind of devboard you want to create. Consider the components you'll need, the target audience, and the problem you're solving.",
      icon: Cpu
    },
    {
      title: "Join the Community",
      description: "Connect with other hackers on Slack (#silicon channel). Share ideas, get feedback, and learn from others' experiences.",
      icon: Users
    }
  ];

  const designGuidelines = [
    {
      title: "Original Design",
      description: "Your devboard must be completely original. Don't copy existing designs - create something unique that solves a real problem.",
      important: true
    },
    {
      title: "Open Source",
      description: "All design files, schematics, and code must be open source.",
      important: true
    },
    {
      title: "Quality Design",
      description: "Ensure your PCB design follows best practices - proper trace routing, component placement, and design for manufacturability.",
      important: false
    },
    {
      title: "Innovation",
      description: "Try to include something innovative or unique in your design that sets it apart from existing devboards.",
      important: false
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research & Planning",
      description: "Research existing devboards, identify gaps, and plan your unique design. Sketch out your ideas and create a component list.",
      tips: ["Look at existing devboards for inspiration", "Identify a specific problem to solve or a unique idea for your devboard", "Layout your components on a piece of paper to make the PCB design easier"]
    },
    {
      step: "02", 
      title: "Schematic Design",
      description: "Create your schematic in EasyEDA. Design the electrical connections between components, ensuring proper power and signal routing.",
      tips: ["Use proper component symbols", "Include power and ground connections", "Refer to the design guide of your microcontroller for help and rules for using it"]
    },
    {
      step: "03",
      title: "PCB Layout",
      description: "Convert your schematic to PCB layout. Route traces, place components, and ensure manufacturability.",
      tips: ["Follow design rules for your manufacturer", "Minimize trace lengths"]
    },
    {
      step: "04",
      title: "Design Review",
      description: "Review your design for errors, test connections, and verify component footprints. Get feedback from the community.",
      tips: ["Use DRC (Design Rule Checker)", "Verify all connections", "Share your design for feedback in #silicon and #electronics"]
    },
  ];

  const submissionChecklist = [
    "Original design files (EasyEDA project)",
    "Complete schematic and PCB layout",
    "Bill of Materials (BOM) with LCSC part numbers",
    "GitHub repository link",
    "Project description and unique idea",
  ];

  const resources = [
    {
      title: "EasyEDA Tutorials",
      description: "Learn PCB design with EasyEDA",
      link: "https://docs.easyeda.com/en/",
      external: true
    },
    {
      title: "RP2040 Design Guide",
      description: "Learn how to design devboard using RP2040 - I find this helps a LOT",
      link: "https://datasheets.raspberrypi.com/rp2040/hardware-design-with-rp2040.pdf",
      external: true
    },
    {
      title: "ESP32 Design Guide",
      description: "A Guide to help you design devboard using ESP32",
      link: "https://www.espressif.com/sites/default/files/documentation/esp32_hardware_design_guidelines_en.pdf",
      external: true
    },
    {
      title: "LCSC Component Database",
      description: "Find components for your design",
      link: "https://www.lcsc.com/",
      external: true
    },
    {
      title: "JLC PCB Manufacturing",
      description: "Manufacture your PCBs",
      link: "https://jlcpcb.com/",
      external: true
    },
    {
      title: "Hackclub Slack",
      description: "Join #silicon channel for support",
      link: "https://hackclub.slack.com/archives/C090WQ9JBTM",
      external: true
    }
  ];

  const faq = [
    {
      question: "What is the maximum grant amount?",
      answer: "The base grant is $25 for shipping costs (You will get a JLC coupon code to cover the rest of the cost). Additional funding may be available for exceptional projects or extra work."
    },
    {
      question: "Can I use components from other sources?",
      answer: "You can use any components available on LCSC. For other sources, You need to source them yourself."
    },
    {
      question: "What if my design is rejected?",
      answer: "We'll provide feedback on why it was rejected and suggestions for improvement. You can resubmit after making changes."
    },
    {
      question: "How long does the review process take?",
      answer: "Typically 1-2 days. We'll notify you via email once the review is complete."
    },
    {
      question: "Can I submit multiple designs?",
      answer: "Yes, you can submit multiple designs, but each must be original and meet all requirements."
    },
    {
      question: "What happens if my PCB doesnt work?",
      answer: "Reach out to @Aarav J on slack and you will be able to resubmit your design for a new grant!"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 font-mono mb-4">GETTING STARTED</h2>
              <p className="text-gray-300">Your journey to creating a funded devboard starts here</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gettingStarted.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-black/50 border border-green-800/30 rounded-lg hover:border-green-400/50 transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-green-400 font-mono mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'requirements':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 font-mono mb-4">DESIGN REQUIREMENTS</h2>
              <p className="text-gray-300">Essential criteria your devboard must meet</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {designGuidelines.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-6 border rounded-lg transition-all duration-300 ${
                    item.important 
                      ? 'bg-red-900/20 border-red-800/30 hover:border-red-400/50' 
                      : 'bg-black/50 border-green-800/30 hover:border-green-400/50'
                  }`}
                >
                  {item.important ? (
                    <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className={`text-lg font-bold font-mono mb-2 ${
                      item.important ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {item.title}
                      {item.important && <span className="ml-2 text-xs bg-red-400 text-black px-2 py-1 rounded">REQUIRED</span>}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'design-process':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 font-mono mb-4">DESIGN PROCESS</h2>
              <p className="text-gray-300">Step-by-step guide to creating your devboard</p>
            </div>
            
            <div className="space-y-8">
              {designProcess.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 p-6 bg-black/50 border border-green-800/30 rounded-lg hover:border-green-400/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold font-mono text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-400 font-mono mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <div className="bg-green-900/20 border border-green-800/30 rounded p-4">
                      <h4 className="text-sm font-bold text-green-400 font-mono mb-2">PRO TIPS:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center space-x-2">
                            <ArrowRight className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'submission':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 font-mono mb-4">SUBMISSION GUIDE</h2>
              <p className="text-gray-300">Everything you need to submit your design</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-400 font-mono mb-4">SUBMISSION CHECKLIST</h3>
                <div className="space-y-3">
                  {submissionChecklist.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-black/50 border border-green-800/30 rounded hover:border-green-400/50 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-green-400 font-mono mb-4">SUBMISSION PROCESS</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-800/30 rounded">
                    <h4 className="text-lg font-bold text-blue-400 font-mono mb-2">1. Prepare Your Files</h4>
                    <p className="text-gray-300 text-sm">Organize all your design files, documentation, and code in a GitHub repository.</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 border border-blue-800/30 rounded">
                    <h4 className="text-lg font-bold text-blue-400 font-mono mb-2">2. Fill Application Form</h4>
                    <p className="text-gray-300 text-sm">Complete the application form with all required information and links.</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 border border-blue-800/30 rounded">
                    <h4 className="text-lg font-bold text-blue-400 font-mono mb-2">3. Submit & Wait</h4>
                    <p className="text-gray-300 text-sm">Submit your application and wait for review (1-2 weeks).</p>
                  </div>
                  
                  <div className="p-4 bg-green-900/20 border border-green-800/30 rounded">
                    <h4 className="text-lg font-bold text-green-400 font-mono mb-2">4. Get Funded!</h4>
                    <p className="text-gray-300 text-sm">If approved, receive your grant and start manufacturing!</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <GlowingButton 
                    text="SUBMIT APPLICATION" 
                    primary={true}
                    onClick={() => window.open('https://forms.hackclub.com/silicon', '_blank')}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 font-mono mb-4">RESOURCES</h2>
              <p className="text-gray-300">Tools, tutorials, and community support</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-black/50 border border-green-800/30 rounded-lg hover:border-green-400/50 transition-all duration-300"
                >
                  <ExternalLink className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-400 font-mono mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-3">{resource.description}</p>
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm"
                    >
                      <span>Visit Resource</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-800/30 rounded-lg">
              <h3 className="text-lg font-bold text-yellow-400 font-mono mb-4">NEED HELP?</h3>
              <p className="text-gray-300 mb-4">
                Join the #silicon channel on Hackclub Slack to connect with other hackers, get design feedback, and ask questions.
              </p>
              <a 
                href="https://hackclub.com/slack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors font-mono"
              >
                <span>Join Hackclub Slack</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-400 font-mono mb-4">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="text-gray-300">Common questions about Silicon</p>
            </div>
            
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-black/50 border border-green-800/30 rounded-lg hover:border-green-400/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-green-400 font-mono mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-purple-900/20 border border-purple-800/30 rounded-lg text-center">
              <h3 className="text-lg font-bold text-purple-400 font-mono mb-2">STILL HAVE QUESTIONS?</h3>
              <p className="text-gray-300 mb-4">
                Contact @Aarav J on Slack or reach out in the #silicon channel for personalized help.
              </p>
              <a 
                href="https://hackclub.com/slack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-mono"
              >
                <span>Get Help on Slack</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Circuit Pattern Background */}
      <CircuitPattern />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b border-green-800/30">
          <div className="flex items-center space-x-4">
            <img 
              src="/logos/logo.png" 
              alt="Silicon Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-mono font-bold text-green-300">SILICON</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-green-300 transition-colors font-mono">HOME</a>
            <a href="/#gallery" className="hover:text-green-300 transition-colors font-mono">GALLERY</a>
            <a href="/#requirements" className="hover:text-green-300 transition-colors font-mono">REQUIREMENTS</a>
          </nav>
        </header>

        {/* Page Content */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text mb-4">
              GUIDE
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete guide to designing, building, and submitting your custom devboard for Silicon
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-green-400 text-black'
                    : 'bg-black/50 border border-green-800/30 text-green-400 hover:border-green-400/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {renderContent()}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-green-800/30 py-8 text-center text-gray-400 mt-16">
          <p className="font-mono">Silicon YSWS by Aarav J & Rudy! - #silicon on slack - Website by Aarav J</p>
        </footer>
      </div>
    </div>
  );
};

export default Guide;
