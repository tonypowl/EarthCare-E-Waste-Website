import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, School, Building2, Factory, Award, FileCheck } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage_pic.jpg-jA0iebDNgfwe1e9TvOiPGbJajGRfbi.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container relative z-20 h-full flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Responsible E-Waste <br />
              Recycling Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              EarthCare E-Waste provides environmentally responsible recycling services for electronic waste from
              schools, organizations, and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Request Pickup</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/process">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About EarthCare E-Waste</h2>
              <p className="mb-4">
                Earth Care E-Waste Pvt Ltd is a Bangalore-based company started in 2022, specializing in recycling
                materials in all forms and grades, from metals to electronic scraps and hazardous waste.
              </p>
              <p className="mb-4">
                Owned and operated by Jagadish M K (Managing Director) and Kirthana R (Director), we are committed to
                environmentally responsible recycling practices.
              </p>
              <p className="mb-6">
                We are authorized by KSPCB with valid company documents and licenses, ensuring all our recycling
                processes meet regulatory standards.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/company.jpg-EJRxCVOUHfPUGz7jaA89eXFQtuzqF7.jpeg"
                alt="EarthCare E-Waste Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive e-waste recycling services for various organizations and institutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <School className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Educational Institutions</CardTitle>
                <CardDescription>
                  Specialized recycling programs for schools, colleges, and universities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We help educational institutions responsibly dispose of outdated computers, lab equipment, and
                  electronic devices while providing educational resources about e-waste management.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Corporate Organizations</CardTitle>
                <CardDescription>Tailored solutions for businesses of all sizes.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our corporate services include secure data destruction, asset recovery, and environmentally compliant
                  disposal of IT equipment, ensuring your business meets its sustainability goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Factory className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Manufacturing Facilities</CardTitle>
                <CardDescription>Industrial e-waste management solutions.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We handle complex industrial electronic waste, including manufacturing equipment, control systems, and
                  specialized electronic components with proper hazardous material handling.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose EarthCare E-Waste</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to environmental sustainability and responsible recycling practices.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">KSPCB Authorized</h3>
              <p className="text-muted-foreground">
                We operate with full authorization from the Karnataka State Pollution Control Board, ensuring compliance
                with all environmental regulations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Recycle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-muted-foreground">
                Our recycling processes are designed to maximize resource recovery while minimizing environmental
                impact.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proper Documentation</h3>
              <p className="text-muted-foreground">
                We provide comprehensive documentation for all recycled materials, helping you meet compliance
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Recycle Your E-Waste?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a pickup or learn more about our recycling services.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

