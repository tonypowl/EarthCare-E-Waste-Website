import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Truck, ShieldCheck } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          EarthCare E-Waste provides comprehensive e-waste recycling services for schools, organizations, and
          businesses.
        </p>
      </div>

      {/* Main Services */}
      <div className="grid gap-12 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Educational Institutions</h2>
            <p className="mb-4">
              We provide specialized e-waste recycling services for schools, colleges, and universities. Our team works
              with educational institutions to develop sustainable recycling programs that not only help the environment
              but also educate students about the importance of proper e-waste disposal.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Bulk collection of outdated computers and lab equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Educational resources about e-waste management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Certificates of recycling for compliance purposes</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Request School Pickup</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/educational_institutions.jpg-qM897Dnoq4x1SgD6uQwlfxaROMSwlR.jpeg"
              alt="School E-Waste Collection"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporate_organizations.jpg-j8m1YbeSxPxFmfNo7FHuB916lcM7HH.jpeg"
              alt="Corporate E-Waste Collection"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Corporate Organizations</h2>
            <p className="mb-4">
              Our corporate services include secure data destruction, asset recovery, and environmentally compliant
              disposal of IT equipment. We help businesses of all sizes meet their sustainability goals while ensuring
              data security.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Secure data destruction with certificates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Asset recovery and value reclamation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Compliance with environmental regulations</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Request Corporate Service</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Manufacturing Facilities</h2>
            <p className="mb-4">
              We handle complex industrial electronic waste, including manufacturing equipment, control systems, and
              specialized electronic components. Our team is trained to handle hazardous materials safely and in
              compliance with regulations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Processing of industrial control systems</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Handling of specialized electronic components</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Proper disposal of hazardous materials</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contact">Request Industrial Service</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manufacturing_facility-iY0xYLRJUYV6tEZpeuEM0fRNJ2blcr.jpeg"
              alt="Industrial E-Waste Collection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Additional Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Home className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Residential Pickup</CardTitle>
              <CardDescription>E-waste collection services for households</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We offer convenient pickup services for residential e-waste. Whether you're upgrading your home
                electronics or clearing out old devices, we make it easy to recycle responsibly.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Schedule Pickup</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Truck className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Bulk Collection</CardTitle>
              <CardDescription>Large-scale e-waste collection services</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our bulk collection service is perfect for large quantities of e-waste. We provide containers and
                transportation for efficient collection and processing.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <ShieldCheck className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Data Destruction</CardTitle>
              <CardDescription>Secure data wiping and destruction services</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our secure data destruction services ensure that sensitive information is completely removed from
                electronic devices before recycling, protecting your privacy and security.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Service Process */}
      <div className="bg-secondary/50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Service Process</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-muted-foreground">
              Reach out to us through our contact form, email, or phone to discuss your e-waste recycling needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Schedule Pickup</h3>
            <p className="text-muted-foreground">
              We'll arrange a convenient time to collect your e-waste from your location.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Processing</h3>
            <p className="text-muted-foreground">
              Your e-waste is transported to our facility where it's processed using our state-of-the-art equipment.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-muted-foreground">
              We provide you with documentation certifying that your e-waste has been recycled responsibly.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Recycle Your E-Waste?</h2>
          <p className="mb-6">Contact us today to learn more about our services and schedule a pickup.</p>
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

