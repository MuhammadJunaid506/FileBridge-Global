"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
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
} from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    savings: 0,
    experience: 0,
    satisfaction: 0,
  })

  // Animation for stats when in view
  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section")
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Animate stats
          const interval = setInterval(() => {
            setAnimatedStats((prev) => ({
              clients: prev.clients >= 1200 ? 1200 : prev.clients + 24,
              savings: prev.savings >= 25 ? 25 : prev.savings + 0.5,
              experience: prev.experience >= 15 ? 15 : prev.experience + 0.3,
              satisfaction: prev.satisfaction >= 98 ? 98 : prev.satisfaction + 1.96,
            }))
          }, 30)

          return () => clearInterval(interval)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      quote:
        "File Bridge Global saved me time and money. Their expertise in tax planning helped my business save over $50,000 in taxes last year. Truly professional service that I can rely on year after year.",
      author: "Michael J.",
      role: "Small Business Owner",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Their expertise in international tax law has been invaluable for our expanding business. The team at File Bridge Global provided us with strategic tax planning that supported our global growth. Highly recommended!",
      author: "Sarah L.",
      role: "CEO, Tech Startup",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I was facing a complex tax situation after relocating for work. File Bridge made it simple and stress-free. Their personalized approach and attention to detail saved me thousands in potential penalties.",
      author: "David R.",
      role: "Financial Consultant",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const caseStudies = [
    {
      title: "Startup Tax Strategy",
      client: "TechNova Inc.",
      challenge: "Complex international tax obligations with operations in 3 countries",
      solution: "Customized tax strategy with entity structuring and transfer pricing optimization",
      result: "$1.2M in tax savings over 3 years",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "IRS Audit Defense",
      client: "Retail Chain",
      challenge: "Facing comprehensive IRS audit with potential penalties",
      solution: "Expert representation and documentation preparation",
      result: "Zero penalties assessed, $350K in proposed adjustments eliminated",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Estate Tax Planning",
      client: "High Net Worth Family",
      challenge: "Significant estate tax exposure threatening family business succession",
      solution: "Comprehensive estate planning with trust structures",
      result: "Preserved family legacy and reduced tax burden by 65%",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className={`flex min-h-[100dvh] flex-col bg-[#dce8e6]/30 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="File Bridge Global Logo" width={50} height={50} className="h-10 w-auto" />
            <span className="text-xl font-bold text-[#2b3842]">File Bridge Global</span>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            <Link href="#contact" className="text-sm font-medium text-[#404f58] hover:text-[#2b3842] transition-colors">
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
                  <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">World-Class Tax Expertise</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Bridge Global Tax Consultation
                  </h1>
                  <p className="max-w-[600px] text-[#dce8e6] md:text-xl">
                    World-Class Tax Expertise for Individuals, Startups & Enterprises.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-[#2b3842] hover:bg-[#dce8e6] shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Your Free Consultation
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
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
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Tax Consultation Services"
                    fill
                    className="object-contain drop-shadow-2xl"
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
                  value: animatedStats.savings,
                  label: "Million in Tax Savings",
                  format: (val: number) => `$${val.toFixed(1)}M+`,
                },
                {
                  value: animatedStats.experience,
                  label: "Years Experience",
                  format: (val: number) => `${val.toFixed(0)}+`,
                },
                {
                  value: animatedStats.satisfaction,
                  label: "Client Satisfaction",
                  format: (val: number) => `${val.toFixed(0)}%`,
                },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-2xl md:text-4xl font-bold text-[#2b3842]">{stat.format(stat.value)}</div>
                  <div className="text-sm md:text-base text-[#58686f]">{stat.label}</div>
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
                <Badge className="bg-[#2b3842] text-white hover:bg-[#404f58]">Why Choose Us</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2b3842]">
                  Tax Expertise You Can Trust
                </h2>
                <p className="max-w-[900px] text-[#58686f] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At File Bridge Global, we provide comprehensive tax solutions tailored to your unique needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Award className="h-10 w-10 text-[#2b3842]" />,
                  title: "Experienced Professionals",
                  description:
                    "Our team of certified tax experts brings decades of experience to every client engagement.",
                },
                {
                  icon: <User className="h-10 w-10 text-[#2b3842]" />,
                  title: "Personalized Tax Strategies",
                  description:
                    "We develop customized tax strategies aligned with your specific financial goals and circumstances.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-[#2b3842]" />,
                  title: "Fast & Compliant Filing",
                  description:
                    "Timely and accurate tax filing that ensures full compliance with all applicable regulations.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-[#2b3842]" />,
                  title: "Transparent, Flat Pricing",
                  description:
                    "No hidden fees or surprises. Our transparent pricing model ensures you know exactly what to expect.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 rounded-lg border border-[#dce8e6] bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dce8e6] group-hover:bg-[#2b3842] transition-colors duration-300">
                    <div className="text-[#2b3842] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3842]">{feature.title}</h3>
                  <p className="text-[#58686f]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[#f8fafa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-[#2b3842] text-white hover:bg-[#404f58]">Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2b3842]">
                  Comprehensive Tax Solutions
                </h2>
                <p className="max-w-[900px] text-[#58686f] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of tax services to meet all your financial needs.
                </p>
              </div>
            </div>

            <Tabs defaultValue="individual" className="w-full max-w-5xl mx-auto mt-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="individual">Individual</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="international">International</TabsTrigger>
                <TabsTrigger value="planning">Planning</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="advisory">Advisory</TabsTrigger>
              </TabsList>

              <TabsContent value="individual" className="animate-in fade-in-50 duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Individual Tax Services"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">Individual Tax Services</h3>
                    <p className="text-[#58686f]">
                      Our individual tax services are designed to minimize your tax burden while ensuring full
                      compliance with all tax laws and regulations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Personal income tax preparation and filing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Tax planning and optimization strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Retirement and estate tax planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Investment and capital gains tax strategies</span>
                      </li>
                    </ul>
                    <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="business" className="animate-in fade-in-50 duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Business Tax Services"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">Business Tax Services</h3>
                    <p className="text-[#58686f]">
                      Comprehensive tax solutions for businesses of all sizes, from startups to established enterprises.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Corporate and partnership tax preparation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Business structure optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Tax credits and incentives identification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Mergers and acquisitions tax planning</span>
                      </li>
                    </ul>
                    <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="international" className="animate-in fade-in-50 duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="International Tax Services"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">International Tax Services</h3>
                    <p className="text-[#58686f]">
                      Navigate the complexities of international taxation with our expert guidance and strategies.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Cross-border tax planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Transfer pricing strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Foreign tax credit optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Expatriate tax services</span>
                      </li>
                    </ul>
                    <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="planning" className="animate-in fade-in-50 duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Tax Planning Services"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">Tax Planning Services</h3>
                    <p className="text-[#58686f]">
                      Strategic tax planning to minimize liabilities and maximize financial efficiency.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Proactive tax planning strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Year-end tax optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Tax-efficient investment strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Retirement and succession planning</span>
                      </li>
                    </ul>
                    <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="compliance" className="animate-in fade-in-50 duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Tax Compliance Services"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">Tax Compliance Services</h3>
                    <p className="text-[#58686f]">
                      Ensure full compliance with all applicable tax laws and regulations to avoid penalties and audits.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Tax return preparation and filing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Sales tax compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Payroll tax compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Regulatory reporting requirements</span>
                      </li>
                    </ul>
                    <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advisory" className="animate-in fade-in-50 duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Tax Advisory Services"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#2b3842]">Tax Advisory Services</h3>
                    <p className="text-[#58686f]">
                      Expert guidance on complex tax matters to help you make informed financial decisions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Tax controversy resolution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>IRS audit representation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Tax opinion letters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#2b3842] mt-0.5 flex-shrink-0" />
                        <span>Strategic tax consulting</span>
                      </li>
                    </ul>
                    <Button className="bg-[#2b3842] hover:bg-[#404f58] text-white w-fit">Learn More</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#f8fafa] to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-[#2b3842] text-white hover:bg-[#404f58]">Success Stories</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2b3842]">
                  Case Studies
                </h2>
                <p className="max-w-[900px] text-[#58686f] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real results for real clients. See how we've helped businesses and individuals optimize their tax
                  strategies.
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
                    <Badge className="absolute bottom-4 left-4 bg-white text-[#2b3842]">{study.title}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#2b3842] mb-2">{study.client}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-[#404f58]">Challenge:</p>
                        <p className="text-[#58686f]">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#404f58]">Solution:</p>
                        <p className="text-[#58686f]">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#404f58]">Result:</p>
                        <p className="font-bold text-[#2b3842]">{study.result}</p>
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
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-[#2b3842] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-white/20 text-white hover:bg-white/30">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-[#dce8e6] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl py-12 relative">
              <div className="relative bg-[#404f58] rounded-lg p-8 md:p-12 shadow-xl">
                <div className="absolute -top-6 left-8 text-6xl text-[#dce8e6]/30 font-serif">"</div>
                <div className="animate-in fade-in duration-700">
                  <p className="text-lg md:text-xl text-[#dce8e6] mb-6 relative z-10">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-16 w-16 border-2 border-[#dce8e6]">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].author}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonials[currentTestimonial].author}</p>
                      <p className="text-[#dce8e6]/80">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#dce8e6]/30 text-[#dce8e6] hover:bg-[#dce8e6]/10 hover:text-white"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === currentTestimonial ? "w-8 bg-white" : "w-2 bg-white/30"
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
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Booking Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#f8fafa]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-[#2b3842] text-white hover:bg-[#404f58]">Book Your Consultation</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2b3842]">
                    Ready to Optimize Your Tax Strategy?
                  </h2>
                  <p className="max-w-[600px] text-[#58686f] md:text-xl">
                    Schedule your free consultation today and discover how File Bridge Global can help you navigate the
                    complex world of taxation.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-[#2b3842]" />
                    <span className="text-[#404f58]">hello@bridgeglobaltax.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#2b3842]" />
                    <span className="text-[#404f58]">(123) 456-7890</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-[#dce8e6] shadow-md">
                  <h3 className="text-xl font-bold text-[#2b3842] mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dce8e6] text-[#2b3842] mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-[#2b3842]">Initial Consultation</p>
                        <p className="text-sm text-[#58686f]">A 30-minute call to understand your tax needs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dce8e6] text-[#2b3842] mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-[#2b3842]">Custom Strategy</p>
                        <p className="text-sm text-[#58686f]">We'll develop a personalized tax plan</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dce8e6] text-[#2b3842] mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-[#2b3842]">Implementation</p>
                        <p className="text-sm text-[#58686f]">Our team handles the execution of your strategy</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-[#dce8e6] bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#2b3842] mb-4">Schedule Your Free Consultation</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[#404f58]">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" className="border-[#dce8e6]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-[#404f58]">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" className="border-[#dce8e6]" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-[#404f58]">
                        Phone
                      </label>
                      <Input id="phone" placeholder="(123) 456-7890" className="border-[#dce8e6]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="business-type" className="text-sm font-medium text-[#404f58]">
                        Business Type
                      </label>
                      <Select>
                        <SelectTrigger className="border-[#dce8e6]">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="sole-proprietor">Sole Proprietor</SelectItem>
                          <SelectItem value="small-business">Small Business</SelectItem>
                          <SelectItem value="corporation">Corporation</SelectItem>
                          <SelectItem value="non-profit">Non-Profit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="preferred-date" className="text-sm font-medium text-[#404f58]">
                      Preferred Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border-[#dce8e6]"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#404f58]">
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
                    <Link href="#" className="text-[#2b3842] underline underline-offset-2">
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
                  Our team of experts is ready to help you navigate the complexities of tax planning and compliance.
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
                <Image src="/logo.png" alt="File Bridge Global Logo" width={40} height={40} className="h-8 w-auto" />
                <span className="text-xl font-bold">File Bridge Global</span>
              </div>
              <p className="mt-2 text-[#dce8e6]/80">
                World-Class Tax Expertise for Individuals, Startups & Enterprises.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-[#dce8e6]/80 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-[#dce8e6]/80 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-[#dce8e6]/80 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-[#dce8e6]/80 hover:text-white transition-colors">
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
                  <span className="text-[#dce8e6]/80">hello@bridgeglobaltax.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#dce8e6]/80" />
                  <span className="text-[#dce8e6]/80">(123) 456-7890</span>
                </li>
              </ul>
              <p className="mt-4 text-[#dce8e6]/80">Based in New York, Serving Clients Nationwide</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 grid gap-2">
                <li>
                  <Link href="#services" className="text-[#dce8e6]/80 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#why-choose-us" className="text-[#dce8e6]/80 hover:text-white transition-colors">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="text-[#dce8e6]/80 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-[#dce8e6]/80 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-[#dce8e6]/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-[#58686f]/30 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-[#dce8e6]/60">
              © {new Date().getFullYear()} File Bridge Global. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-[#dce8e6]/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-[#dce8e6]/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
