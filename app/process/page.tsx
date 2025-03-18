import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ArrowRight, Recycle } from "lucide-react"

export default function ProcessPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Recycling Process</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn about our comprehensive e-waste recycling process that ensures maximum resource recovery and minimal
          environmental impact.
        </p>
      </div>

      {/* Process Overview */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">E-Waste Recycling Process</h2>
          <p className="mb-4">
            At EarthCare E-Waste, we follow a systematic approach to recycling electronic waste. Our process is designed
            to maximize resource recovery while ensuring that hazardous materials are handled safely and responsibly.
          </p>
          <p className="mb-4">
            From collection to final processing, every step is carefully managed to comply with environmental
            regulations and minimize the impact on our planet.
          </p>
          <Button asChild>
            <Link href="/contact">Schedule a Pickup</Link>
          </Button>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e-waste-wFmdHZPYlplPW9IUmc0MzX74sSoN7b.webp"
            alt="E-Waste Collection"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Process Steps */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Recycling Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <CardTitle>Collection & Transportation</CardTitle>
              <CardDescription>We collect e-waste from your location and transport it to our facility.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our team arranges pickup of electronic waste from schools, businesses, and organizations. All items are
                carefully inventoried and transported to our recycling facility in compliance with safety regulations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <CardTitle>Sorting & Dismantling</CardTitle>
              <CardDescription>E-waste is sorted by type and manually dismantled.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Items are categorized by type and components. Our skilled technicians manually dismantle devices to
                separate reusable parts, recyclable materials, and components containing hazardous substances.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <CardTitle>Shredding & Processing</CardTitle>
              <CardDescription>Materials are shredded and processed for resource recovery.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Non-reusable components are shredded and processed through our specialized equipment. This includes our
                acid bath area, furnaces, and scrubbers to extract valuable metals and properly handle hazardous
                materials.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Equipment Showcase */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Recycling Equipment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acid_bath.jpg-HvmcjrgraQSlChwDPxVed8yHdr3OKY.jpeg"
                alt="Acid Bath Area"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-secondary">
              <h3 className="font-semibold">Acid Bath Area</h3>
              <p className="text-sm text-muted-foreground">Used for extracting precious metals from circuit boards</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copper_furnace.jpg-hxDbrA5gCdPBjEeYkh3Pb0HaZu9exN.jpeg"
                alt="Copper Furnace"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-secondary">
              <h3 className="font-semibold">Copper Furnace</h3>
              <p className="text-sm text-muted-foreground">Specialized for melting and refining copper components</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnace.jpg-jRUxGGRxf6gY9eC7lSZFCyARD9GaVP.jpeg"
                alt="Furnace"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-secondary">
              <h3 className="font-semibold">Furnace</h3>
              <p className="text-sm text-muted-foreground">For processing various metal components</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scrubber.jpg-419s1J2Cr9KfHdiCL77S0XKSAsbm3Y.jpeg"
                alt="Scrubber"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-secondary">
              <h3 className="font-semibold">Scrubber</h3>
              <p className="text-sm text-muted-foreground">Filters emissions to ensure environmental compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* E-Waste Dangers */}
      <div className="bg-destructive/10 rounded-lg p-8 mb-16">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-destructive/20 p-4 rounded-full">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Dangers of Improper E-Waste Disposal</h2>
            <p className="mb-4">
              E-waste can be dangerous to human health and the environment. Electronic waste contains a variety of
              hazardous materials, such as lead, mercury, and cadmium. These materials can leach into the soil and
              water, contaminating the environment.
            </p>
            <p className="mb-4">
              When e-waste is burned, it can release toxic fumes that are harmful to human health. Proper recycling of
              e-waste is essential to prevent these dangers and protect our environment.
            </p>
            <Button variant="destructive">
              <Link href="/contact">Recycle Responsibly</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Battery Recycling */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-4">Battery Recycling</h2>
          <p className="mb-4">
            Batteries are recycled by a variety of methods at our facility. Some batteries are heated to high
            temperatures to melt down the metals. Other batteries are treated with chemicals to dissolve the metals.
          </p>
          <p className="mb-4">
            The metals are then recovered and used to make new products. This process ensures that hazardous materials
            in batteries don't end up in landfills where they can cause environmental damage.
          </p>
          <div className="flex items-center">
            <Button variant="outline" className="flex items-center gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/battery_pic-Z13EG8DX2uvzHqlQwbh0RHAAHAQtCb.webp"
            alt="Battery Recycling Process"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <Recycle className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Ready to Recycle Your E-Waste?</h2>
          <p className="mb-6">
            Contact us today to schedule a pickup or learn more about our recycling services. Together, we can make a
            difference for our environment.
          </p>
          <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <Link href="/contact">Schedule a Pickup</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

