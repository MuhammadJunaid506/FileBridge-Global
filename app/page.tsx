"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import {
  Award,
  CalendarIcon,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  MessageSquare,
  Phone,
  Shield,
  Twitter,
  User,
  X,
} from "lucide-react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,            // Realistic client count
    taxReturnsFiled: 0,    // Number of tax returns filed
    industriesServed: 0,     // Number of industries served
    satisfaction: 0,        // Client satisfaction percentage
  });

  // Animation for stats when in view
  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Animate stats
          const interval = setInterval(() => {
            setAnimatedStats((prev) => ({
              clients: prev.clients >= 120 ? 120 : prev.clients + 24,   // Increment clients or cap at 1200
              taxReturnsFiled: prev.taxReturnsFiled >= 500 ? 500 : prev.taxReturnsFiled + 25, // Increment tax returns filed or cap at 500
              industriesServed: prev.industriesServed >= 10 ? 10 : prev.industriesServed + 1, // Increment industries served or cap at 15
              satisfaction: prev.satisfaction >= 98 ? 98 : prev.satisfaction + 1.96, // Increment satisfaction or cap at 98%
            }));      
          }, 30);

          return () => clearInterval(interval);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      quote:
        "As a growing e-commerce startup, we were struggling with compliance and tax filings. File Bridge Global came in with a structured approach and handled everything smoothly. We saved over PKR 1.3 million in tax liabilities last year — and now we have a long-term partner we trust.",
      author: "Ahsan Raza",
      role: "Co-founder, Shopfinity.pk",
      image: "/images/user-placeholder.jpeg",
    },
    {
      quote:
        "I had years of unresolved tax matters due to overseas income and multiple local investments. The team at File Bridge Global handled it with care and precision. Their audit handling was flawless. Highly recommended for anyone with complex tax issues.",
      author: "Rabia Imran",
      role: "Senior Finance Manager, Lahore",
      image: "/images/user-placeholder.jpeg",
    },
    {
      quote:
        "When we expanded to the UAE and UK markets, we needed help with international tax structuring. File Bridge Global offered us sound legal and financial guidance that helped us stay compliant while maximizing tax efficiency. We now consider them part of our strategic team.",
      author: "Usman Sheikh",
      role: "CEO, CodeNation Technologies",
      image: "/images/user-placeholder.jpeg",
    },
    {
      quote:
        "As a freelancer dealing with multiple local and foreign clients, I used to dread tax season. File Bridge Global helped me register correctly, track my income, and file confidently. They respond quickly and explain things clearly — no jargon!",
      author: "Sarah Yousuf",
      role: "Freelance UX Designer, Karachi",
      image: "/images/user-placeholder.jpeg",
    },
    {
      quote:
        "File Bridge Global has been instrumental in keeping our books and compliance spotless. Their payroll and sales tax support has reduced our internal workload and helped us focus on growth. They’re more than service providers — they’re advisors we rely on.",
      author: "Bilal Hassan",
      role: "CFO, Eastern Threads",
      image: "/images/user-placeholder.jpeg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const caseStudies = [
    {
      title: "Startup Tax Strategy",
      client: "TechNova Inc.",
      challenge:
        "Complex international tax obligations with operations in 3 countries",
      solution:
        "Customized tax strategy with entity structuring and transfer pricing optimization",
      result: "$1.2M in tax savings over 3 years",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "IRS Audit Defense",
      client: "Retail Chain",
      challenge: "Facing comprehensive IRS audit with potential penalties",
      solution: "Expert representation and documentation preparation",
      result:
        "Zero penalties assessed, $350K in proposed adjustments eliminated",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Estate Tax Planning",
      client: "High Net Worth Family",
      challenge:
        "Significant estate tax exposure threatening family business succession",
      solution: "Comprehensive estate planning with trust structures",
      result: "Preserved family legacy and reduced tax burden by 65%",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <div
      className={`flex min-h-[100dvh] flex-col bg-[#dce8e6]/30 ${
        isLoaded ? "animate-fade-in" : "opacity-0"
      }`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="File Bridge Global Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-[#2b3842]">
              File Bridge Global
            </span>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden z-50 animate-in slide-in-from-top">
              <nav className="container flex flex-col py-4">
                <Link
                  href="#services"
                  className="px-4 py-2 text-sm font-medium text-[#404f58] hover:text-[#2b3842] hover:bg-[#dce8e6]/30 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#why-choose-us"
                  className="px-4 py-2 text-sm font-medium text-[#404f58] hover:text-[#2b3842] hover:bg-[#dce8e6]/30 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Choose Us
                </Link>
                <Link
                  href="#case-studies"
                  className="px-4 py-2 text-sm font-medium text-[#404f58] hover:text-[#2b3842] hover:bg-[#dce8e6]/30 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  href="#testimonials"
                  className="px-4 py-2 text-sm font-medium text-[#404f58] hover:text-[#2b3842] hover:bg-[#dce8e6]/30 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-2 text-sm font-medium text-[#404f58] hover:text-[#2b3842] hover:bg-[#dce8e6]/30 transition-colors rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="mt-2 px-4">
                  <Button className="w-full bg-[#2b3842] hover:bg-[#404f58] text-white">
                    Book Your Free Consultation
                  </Button>
                </div>
              </nav>
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm font-medium text-[#404f58] hover:text-[#2b3842] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#why-choose-us"
              className="text-sm font-medium text-[#404f58] hover:text-[#2b3842] transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="#case-studies"
              className="text-sm font-medium text-[#404f58] hover:text-[#2b3842] transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-[#404f58] hover:text-[#2b3842] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-[#404f58] hover:text-[#2b3842] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-gradient-to-r from-[#2b3842] to-[#404f58] hover:from-[#404f58] hover:to-[#58686f] text-white shadow-md transition-all duration-300 hover:shadow-lg">
              Book Your Free Consultation
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#2b3842] via-[#101b26] to-[#2b3842] relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#dce8e6] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dce8e6] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 animate-in slide-in-from-left duration-700">
                <div className="space-y-2">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">
                    Welcome to File Bridge Global – Your Trusted Tax & Business
                    Advisory Partner in Pakistan
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Empowering Individuals, Startups, and Enterprises with
                    Expert Tax Solutions
                  </h1>
                  <p className="max-w-[600px] text-[#dce8e6] md:text-xl">
                    At File Bridge Global, we understand that navigating the
                    complexities of taxation and business regulations can be
                    daunting. Whether you're an individual, a startup, or an
                    established enterprise, we're here to simplify the process
                    and guide you every step of the way.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-[#2b3842] hover:bg-[#dce8e6] shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Your Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:text-white border-white hover:bg-white/10 text-[#2b3842]"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#dce8e6]">
                  <CheckCircle className="h-4 w-4 text-[#dce8e6]" />
                  <span>Expert Tax Professionals</span>
                  <span className="mx-2">•</span>
                  <CheckCircle className="h-4 w-4 text-[#dce8e6]" />
                  <span>Personalized Solutions</span>
                  <span className="mx-2">•</span>
                  <CheckCircle className="h-4 w-4 text-[#dce8e6]" />
                  <span>Guaranteed Compliance</span>
                </div>
              </div>
              <div className="flex items-center justify-center animate-in slide-in-from-right duration-700">
                <div className="relative w-full h-[300px] lg:h-[500px]">
                  <Image
                    src="/images/taxconsultant.png"
                    alt="Tax Consultation Services"
                    fill
                    className="drop-shadow-2xl w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats-section" className="w-full py-8 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  value: animatedStats.clients,
                  label: "Satisfied Clients",
                  format: (val: number) => `${Math.floor(val)}+`,
                },
                {
                  value: animatedStats.taxReturnsFiled,
                  label: "Tax Returns Filed",
                  format: (val: number) => `${Math.floor(val)}+`,
                },
                {
                  value: animatedStats.industriesServed,
                  label: "Industries Served",
                  format: (val: number) => `${Math.floor(val)}+`,
                },
                {
                  value: animatedStats.satisfaction,
                  label: "Client Satisfaction",
                  format: (val: number) => `${val.toFixed(0)}%`,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 text-center"
                >
                  <div className="text-2xl md:text-4xl font-bold text-[#2b3842]">
                    {stat.format(stat.value)}
                  </div>
                  <div className="text-sm md:text-base text-[#58686f]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          id="why-choose-us"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#dce8e6]/30"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-[#2b3842] text-white hover:bg-[#404f58]">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2b3842]">
                  Tax Expertise You Can Trust
                </h2>
                <p className="max-w-[900px] text-[#58686f] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  we know that tax isn't just about numbers — it’s about people,
                  decisions, and the future of your business or personal
                  finances. Our team is here to make taxes less stressful, more
                  strategic, and completely transparent.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Award className="h-10 w-10 text-[#2b3842]" />,
                  title: "Experienced People, Not Just Credentials",
                  description:
                    "You're not just getting experts — you're getting professionals who’ve worked with businesses and individuals across Pakistan, the UAE, the USA, the UK and beyond. We've handled everything from basic filings to high-stakes tax disputes. We know the system, and we know how to make it work for you",
                },
                {
                  icon: <User className="h-10 w-10 text-[#2b3842]" />,
                  title: "Strategies That Actually Fit Your Life",
                  description:
                    "We don’t push templates or one-size-fits-all solutions. Whether you're a freelancer, a startup founder, or running a family business, we’ll sit down, understand your goals, and build a tax approach that reflects your real-life circumstances — not just theory",
                },
                {
                  icon: <Clock className="h-10 w-10 text-[#2b3842]" />,
                  title: "Quick, Clean, and Fully Compliant Filing",
                  description:
                    "No more last-minute panic or wondering if your taxes were done right. We handle everything — accurately, on time, and in full compliance with local and international tax regulations. You’ll stay on the right side of the law, and ahead of deadlines.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-[#2b3842]" />,
                  title: "Upfront Pricing, No Hidden Fees",
                  description:
                    "With us, what you see is what you pay. No surprise charges. No vague service terms. Just clear, flat-rate pricing and honest conversations about what’s included — because trust starts with transparency.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 rounded-lg border border-[#dce8e6] bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 group min-w-[280px]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dce8e6] transition-colors duration-300">
                    <div className="text-[#2b3842] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3842]">
                    {feature.title}
                  </h3>
                  <p className="text-[#58686f]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f8fafa]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-[#2b3842] text-white hover:bg-[#404f58]">
                  Our Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2b3842]">
                  Comprehensive Tax Solutions
                </h2>
                <p className="max-w-[900px] text-[#58686f] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  we provide a full spectrum of tax services tailored to meet
                  the diverse needs of individuals and businesses in Pakistan.
                  Our expert team ensures compliance with local regulations
                  while optimizing your tax position.
                </p>
              </div>
            </div>

            <Tabs
              defaultValue="individual"
              className="w-full max-w-5xl mx-auto mt-8"
            >
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="individual">Income Tax</TabsTrigger>
                <TabsTrigger value="business">Sales Tax</TabsTrigger>
                <TabsTrigger value="international">
                  Company Reistration
                </TabsTrigger>
                <TabsTrigger value="planning">
                  Intellectual Property
                </TabsTrigger>
                <TabsTrigger value="compliance">
                  USA LLC & Tax Filling
                </TabsTrigger>
                <TabsTrigger value="advisory">UK PVT LTD</TabsTrigger>
              </TabsList>

              <TabsContent
                value="individual"
                className="animate-in fade-in-50 duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/incometax.png"
                      alt="Individual Tax Services"
                      width={600}
                      height={500}
                      className="w-full max-h-[500px] object-cover bg-[#58686f]"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">
                      Income Tax
                    </h3>
                    <p className="text-[#58686f]">
                      Our income tax services are designed to ensure full
                      compliance with Pakistan’s tax laws while simplifying the
                      filing process for individuals, businesses, and
                      organizations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          NTN Registration – Salaried{" "}
                          {/* <p className="font-semibold">
                            Personal income tax preparation and filing:{" "}
                          </p>
                          Accurate and timely filing of individual income tax
                          returns with the Federal Board of Revenue (FBR) */}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          NTN Registration – Business
                          {/* <p className="font-semibold">
                            NTN Registration – Business:{" "}
                          </p>
                          Developing personalized strategies to minimize tax
                          liabilities and maximize eligible deductions and
                          credits */}
                        </span>
                      </li>
                      {/* <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          <p className="font-semibold">
                            Retirement and estate tax planning:{" "}
                          </p>
                          Guidance on structuring retirement plans and estate
                          transfers to minimize tax implications
                        </span>
                      </li> */}
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>NTN Registration – Partnership or AOP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>NTN Registration – Company</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>NTN Registration – NPO</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Quarterly Withholding Statements Tax Filing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Annual Income Tax Filing- Salaried</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Annual Income Tax Filing- Sole Proprietor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Annual Income Tax Filing- Partnership/PVT Company
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Annual Income Tax Filing- NPO/Charitable Trusts
                        </span>
                      </li>
                    </ul>
                    {/* <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button> */}
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="business"
                className="animate-in fade-in-50 duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/saletax.png"
                      alt="Business Tax Services"
                      width={600}
                      height={500}
                      className="w-full max-h-[500px] object-contain bg-[#58686f]"
                    />
                  </div>
                  <div className="flex flex-col justify-start space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">
                      Sales Tax
                    </h3>
                    <p className="text-[#58686f]">
                      Our sales tax services are designed to help businesses
                      comply with federal and provincial tax regulations while
                      avoiding penalties and ensuring smooth operations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Sales Tax Registration – Sole Proprietorship
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Sales Tax Registration – Partnership (AOP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Sales Tax Registration – Private Limited Company
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Sales Tax Return Filing – Monthly & Quarterly
                          Submissions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Sales Tax Registration – Partnership (AOP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Provincial Sales Tax Compliance (SRB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Maintenance of Sales Tax Invoices & Records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Filing of Annexures and Sales Summaries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Advisory on Input/Output Tax Adjustments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Compliance with FBR & Provincial Authorities
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Support During Sales Tax Audits & Notices</span>
                      </li>
                    </ul>
                    {/* <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button> */}
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="international"
                className="animate-in fade-in-50 duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/companyregister.png"
                      alt="International Tax Services"
                      width={600}
                      height={500}
                      className="w-full max-h-[500px] object-contain bg-[#58686f]"
                    />
                  </div>
                  <div className="flex flex-col justify-start space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">
                      Company Registration
                    </h3>
                    <p className="text-[#58686f]">
                      Our company registration services are designed to guide
                      you through the process of setting up a business in
                      Pakistan, ensuring compliance with the Securities and
                      Exchange Commission of Pakistan (SECP) regulations, and
                      helping you establish a solid legal foundation.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Registration of Sole Proprietorship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Registration of Partnership (AOP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Registration of Private Limited Company (Pvt Ltd)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Registration of Public Limited Company</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Company Name Reservation with SECP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Preparation of Memorandum & Articles of Association
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Filing with SECP for Incorporation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Obtaining Certificate of Incorporation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>NTN Registration for New Company</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>
                          Preparation of Company’s Annual Filing Documents
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Corporate Governance Advisory</span>
                      </li>
                    </ul>
                    {/* <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button> */}
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="planning"
                className="animate-in fade-in-50 duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/intellectual.png"
                      alt="Tax Planning Services"
                      width={600}
                      height={500}
                      className="w-full max-h-[500px] object-contain bg-[#58686f]"
                    />
                  </div>
                  <div className="flex flex-col justify-start space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">
                      Intellectual Property
                    </h3>
                    <p className="text-[#58686f]">
                      We help protect your trademarks, inventions, and creative
                      works—ensuring legal rights in Pakistan and worldwide.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Trademark Registration{" "}
                          <span className="font-normal">
                            – Protection for logos, names, and brand identities
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Patent Registration{" "}
                          <span className="font-normal">
                            – Safeguarding inventions and technological
                            advancements
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Copyright Registration{" "}
                          <span className="font-normal">
                            – Protection for literary, artistic, and musical
                            works
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Design Patent Registration{" "}
                          <span className="font-normal">
                            – Protection for industrial designs and aesthetics
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          IP Portfolio Management{" "}
                          <span className="font-normal">
                            – Managing and renewing your intellectual property
                            rights
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Trademark Search & Monitoring{" "}
                          <span className="font-normal">
                            – To avoid infringement and ensure brand protection
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Legal Advisory{" "}
                          <span className="font-normal">
                            – Guidance on IP laws and best practices
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Litigation Support{" "}
                          <span className="font-normal">
                            – Assistance with disputes over intellectual
                            property rights
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          International IP Registration{" "}
                          <span className="font-normal">
                            – Helping you secure your IP rights globally
                          </span>
                        </p>
                      </li>
                    </ul>

                    {/* <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button> */}
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="compliance"
                className="animate-in fade-in-50 duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/USA.png"
                      alt="Tax Compliance Services"
                      width={600}
                      height={500}
                      className="w-full max-h-[500px] object-contain bg-[#58686f]"
                    />
                  </div>
                  <div className="flex flex-col justify-start space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">
                      USA LLC & Tax Filing
                    </h3>
                    <p className="text-[#58686f]">
                      We help Pakistani entrepreneurs, freelancers, and
                      e-commerce businesses set up and manage a U.S.-based LLC —
                      giving you global access, credibility, and seamless tax
                      compliance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          USA LLC Formation{" "}
                          <span className="font-normal">
                            – Register your LLC in any U.S. state (commonly
                            Wyoming, Delaware, Texas and Florida)
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          EIN (Employer Identification Number){" "}
                          <span className="font-normal">
                            – Required for opening U.S. business bank accounts
                            and tax filing
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          U.S. Tax Filing (Form 5472 / 1120){" "}
                          <span className="font-normal">
                            – Mandatory IRS tax compliance for foreign-owned
                            single-member LLCs
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Annual Report Filing & Renewals{" "}
                          <span className="font-normal">
                            – Ongoing support to maintain active legal status of
                            your LLC
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Consultation on U.S. Business Compliance{" "}
                          <span className="font-normal">
                            – Guidance on sales tax, state filings, and banking
                            requirements
                          </span>
                        </p>
                      </li>
                    </ul>

                    {/* <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button> */}
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="advisory"
                className="animate-in fade-in-50 duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/images/UK.png"
                      alt="Tax Advisory Services"
                      width={600}
                      height={500}
                      className="w-full max-h-[500px] object-contain bg-[#58686f]"
                    />
                  </div>
                  <div className="flex flex-col justify-start space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842] bg-center">
                      UK PVT LTD
                    </h3>
                    <p className="text-[#58686f]">
                      We help Pakistani entrepreneurs, freelancers, and
                      e-commerce businesses set up and manage a UK-based Private
                      Limited Company — giving you international credibility,
                      access to the UK market, and full legal compliance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          UK Private Limited Company Formation{" "}
                          <span className="font-normal">
                            – Register a Limited Company with Companies House
                            (LTD)
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Company Name Reservation{" "}
                          <span className="font-normal">
                            – Secure your business name with UK company
                            registrar
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Director & Shareholder Setup{" "}
                          <span className="font-normal">
                            – Guidance for appointing directors and defining
                            share structures
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          UTR & Corporation Tax Registration{" "}
                          <span className="font-normal">
                            – Set up for UK tax compliance with HMRC
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Annual Accounts & Confirmation Statement Filing{" "}
                          <span className="font-normal">
                            – Ensure timely submissions to Companies House and
                            HMRC
                          </span>
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <p className="font-semibold">
                          Ongoing UK Compliance Support{" "}
                          <span className="font-normal">
                            – Keep your LTD active, compliant, and penalty-free
                          </span>
                        </p>
                      </li>
                    </ul>

                    {/* <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button> */}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Case Studies Section */}
        {/* <section
          id="case-studies"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#f8fafa] to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-[#2b3842] text-white hover:bg-[#404f58]">
                  Success Stories
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2b3842]">
                  Case Studies
                </h2>
                <p className="max-w-[900px] text-[#58686f] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real results for real clients. See how we've helped businesses
                  and individuals optimize their tax strategies.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-[#dce8e6] group hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b3842]/80 to-transparent opacity-70"></div>
                    <Badge className="absolute bottom-4 left-4 bg-white text-[#2b3842]">
                      {study.title}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#2b3842] mb-2">
                      {study.client}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-[#404f58]">
                          Challenge:
                        </p>
                        <p className="text-[#58686f]">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#404f58]">
                          Solution:
                        </p>
                        <p className="text-[#58686f]">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#404f58]">
                          Result:
                        </p>
                        <p className="font-bold text-[#2b3842]">
                          {study.result}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-[#2b3842] text-[#2b3842] hover:bg-[#2b3842] hover:text-white"
                    >
                      Read Full Case Study
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#2b3842] text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-[#dce8e6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  we take pride in building trust through consistent,
                  high-quality tax and advisory services. Here’s how we’ve made
                  a difference for our clients across Pakistan and beyond:
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl py-12 relative">
              <div className="relative bg-[#404f58] rounded-lg p-8 md:p-12 shadow-xl h-[300px]">
                <div className="absolute -top-6 left-8 text-6xl text-[#dce8e6]/30 font-serif">
                  "
                </div>
                <div className="animate-in fade-in duration-700">
                  <p className="text-lg md:text-xl text-[#dce8e6] mb-6 relative z-10">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-16 w-16 border-2 border-[#dce8e6]">
                      <Image
                        src={
                          testimonials[currentTestimonial].image ||
                          "/images/user-placeholder.jpeg"
                        }
                        alt={testimonials[currentTestimonial].author}
                        width={68}
                        height={68}
                        className="object-cover h-fit"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-[#dce8e6]/80">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="group rounded-full border-[#dce8e6]/30 text-[#dce8e6] hover:bg-[#dce8e6]/10 hover:text-white"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-5 w-5 text-[#2b3842] group-hover:text-white transition-colors duration-200" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>

                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === currentTestimonial
                          ? "w-8 bg-white"
                          : "w-2 bg-white/30"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#dce8e6]/30 text-[#dce8e6] hover:bg-[#dce8e6]/10 hover:text-white"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-5 w-5 text-[#2b3842] group-hover:text-white transition-colors duration-200" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Booking Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f8fafa]"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-[#2b3842] text-white hover:bg-[#404f58]">
                    Book Your Consultation
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2b3842]">
                  Reliable Tax Filing and Business Registration
                  </h2>
                  <p className="max-w-[600px] text-[#58686f] md:text-xl">
                  We help individuals and businesses with tax filing, FBR compliance, company registration, U.S. LLCs, UK Ltd setups, and IP protection — so you can stay focused on growth.
                    {/* At File Bridge Global, we make tax planning simple,
                    practical, and tailored to your situation. */}
                  </p>
                  <p className="mt-3 mb-3 md:text-xl text-[#58686f] font-semibold">
                  Book your free consultation{" "}
                          <span className="font-normal">
                          — no pressure, just expert guidance.
                          </span>
                        </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-[#2b3842]" />
                    <span className="text-[#404f58]">
                      info@filebridgeglobal.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#2b3842]" />
                    <span className="text-[#404f58]">92 313 760 5933</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-[#dce8e6] shadow-md">
                  <h3 className="text-xl font-bold text-[#2b3842] mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-8 items-center justify-center rounded-full bg-[#dce8e6] text-[#2b3842] mt-0.5 text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-[#2b3842]">
                          Initial Consultation
                        </p>
                        <p className="text-sm text-[#58686f] w-10/12">
                          A quick, 30-minute call to
                          understand your needs, your challenges, and what
                          you’re hoping to achieve — no complicated forms or
                          jargon.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-8 items-center justify-center rounded-full bg-[#dce8e6] text-[#2b3842] mt-0.5 text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-[#2b3842]">
                          Custom Strategy
                        </p>
                        <p className="text-sm text-[#58686f] w-10/12">
                          Based on your goals and financial situation, we’ll
                          create a personalized tax plan that makes sense for
                          you — whether it’s for your business, income, or
                          cross-border concerns.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-8 items-center justify-center rounded-full bg-[#dce8e6] text-[#2b3842] mt-0.5 text-sm">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-[#2b3842]">
                          Implementation
                        </p>
                        <p className="text-sm text-[#58686f] w-10/12">
                          Once you’re happy with the plan, our team takes care
                          of everything — from filings and registrations to
                          handling compliance. You’ll always know what’s
                          happening, and why
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-[#dce8e6] bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#2b3842] mb-4">
                  Schedule Your Free Consultation
                </h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-[#404f58]"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="border-[#dce8e6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-[#404f58]"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-[#dce8e6]"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-[#404f58]"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        placeholder="(123) 456-7890"
                        className="border-[#dce8e6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="business-type"
                        className="text-sm font-medium text-[#404f58]"
                      >
                        Business Type
                      </label>
                      <Select>
                        <SelectTrigger className="border-[#dce8e6]">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="sole-proprietor">
                            Sole Proprietor
                          </SelectItem>
                          <SelectItem value="small-business">
                            Small Business
                          </SelectItem>
                          <SelectItem value="corporation">
                            Corporation
                          </SelectItem>
                          <SelectItem value="non-profit">Non-Profit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="preferred-date"
                      className="text-sm font-medium text-[#404f58]"
                    >
                      Preferred Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border-[#dce8e6]"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Select a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-[#404f58]"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your tax needs..."
                      className="min-h-[120px] border-[#dce8e6]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#2b3842] to-[#404f58] hover:from-[#404f58] hover:to-[#58686f] text-white shadow-md transition-all duration-300 hover:shadow-lg">
                    Schedule My Free Consultation
                  </Button>
                  <p className="text-xs text-[#58686f] text-center">
                    By submitting this form, you agree to our{" "}
                    <Link
                      href="#"
                      className="text-[#2b3842] underline underline-offset-2"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-[#2b3842] to-[#101b26] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Ready to take control of your tax situation?
                </h2>
                <p className="mx-auto max-w-[700px] text-[#dce8e6]">
                  We’re here to make tax planning clear, practical, and
                  stress-free — with expert guidance every step of the way.
                </p>
              </div>
              <Button className="bg-white text-[#2b3842] hover:bg-[#dce8e6] shadow-lg hover:shadow-xl transition-all duration-300">
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-12 md:py-16 bg-[#101b26] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="File Bridge Global Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">File Bridge Global</span>
              </div>
              <p className="mt-2 text-[#dce8e6]/80">
                Expert tax solutions tailored for individuals, startups, and
                enterprises. We simplify complex tax issues so you can focus on
                what matters most.
              </p>
              <div className="mt-4 flex gap-4">
                <Link
                  href="#"
                  className="text-[#dce8e6]/80 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#dce8e6]/80 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#dce8e6]/80 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#dce8e6]/80 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <ul className="mt-4 grid gap-2">
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-[#dce8e6]/80" />
                  <span className="text-[#dce8e6]/80">
                    info@filebridgeglobal.com
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#dce8e6]/80" />
                  <span className="text-[#dce8e6]/80">92 313 760 5933</span>
                </li>
              </ul>
              {/* <p className="mt-4 text-[#dce8e6]/80">
                Based in New York, Serving Clients Nationwide
              </p> */}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 grid gap-2">
                <li>
                  <Link
                    href="#services"
                    className="text-[#dce8e6]/80 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#why-choose-us"
                    className="text-[#dce8e6]/80 hover:text-white transition-colors"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#case-studies"
                    className="text-[#dce8e6]/80 hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-[#dce8e6]/80 hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-[#dce8e6]/80 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-[#58686f]/30 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-[#dce8e6]/60">
              © {new Date().getFullYear()} File Bridge Global. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-[#dce8e6]/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-[#dce8e6]/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// export default function LandingPage() {
//   let arr = ["d", "f", "t", "g"];
//   const [state, setState] = useState('d')
//   // let state = "d";
//   return (
//     <div className=" py-12 md:py-24 lg:py-32 bg-[#f8fafa] flex justify-evenly w-full">
//       {arr.map((item) => {
//         return (
//         <div className={state === item ? "bg-slate-400 cursor-pointer p-3" : "bg_color cursor-pointer"} onClick={() => setState(item)}>
//             <p>{item}</p>
//         </div>)
//       })}
//     </div>
//   );
// };
