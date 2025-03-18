import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EquipmentPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Equipment</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our state-of-the-art recycling equipment and facilities that enable us to process e-waste efficiently
          and responsibly.
        </p>
      </div>

      <Tabs defaultValue="recycling" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="recycling">Recycling Equipment</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>
        <TabsContent value="recycling">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Acid Bath Area</CardTitle>
                <CardDescription>
                  Used for extracting precious metals from circuit boards and other electronic components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acid_bath.jpg-HvmcjrgraQSlChwDPxVed8yHdr3OKY.jpeg"
                    alt="Acid Bath Area"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Our acid bath area is designed with safety and efficiency in mind. It allows us to extract valuable
                  metals like gold, silver, and copper from circuit boards and other electronic components through a
                  controlled chemical process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Copper Furnace</CardTitle>
                <CardDescription>Specialized equipment for melting and refining copper components.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copper_furnace.jpg-hxDbrA5gCdPBjEeYkh3Pb0HaZu9exN.jpeg"
                    alt="Copper Furnace"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Our copper furnace, manufactured by Tecnovia Engineering, is used to melt and refine copper extracted
                  from various electronic components. This allows us to recover high-quality copper that can be reused
                  in manufacturing new products.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Furnace</CardTitle>
                <CardDescription>General purpose furnace for processing various metal components.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/furnace.jpg-jRUxGGRxf6gY9eC7lSZFCyARD9GaVP.jpeg"
                    alt="Furnace"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Our general purpose furnace is used for processing various metal components recovered from e-waste. It
                  operates at high temperatures to melt down metals, allowing for separation and recovery of different
                  metal types.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scrubber</CardTitle>
                <CardDescription>
                  Air pollution control device that filters emissions from our recycling processes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scrubber.jpg-419s1J2Cr9KfHdiCL77S0XKSAsbm3Y.jpeg"
                    alt="Scrubber"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Our scrubber system is an essential part of our commitment to environmental protection. It filters and
                  neutralizes potentially harmful emissions from our recycling processes, ensuring that we meet or
                  exceed all environmental regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="inventory">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Computer Inventory</CardTitle>
                <CardDescription>Collection of computer systems awaiting processing.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inventory1.jpg-cyxAgV50hbsJd7WgzEdLZDKE5oIxgE.jpeg"
                    alt="Computer Inventory"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Our facility houses a large inventory of computer systems awaiting processing. These systems are
                  carefully organized and stored to ensure efficient handling and processing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>E-Waste Collection</CardTitle>
                <CardDescription>Various electronic components collected for recycling.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inventory2.jpg-kVgDVUBJdMnXGbkBR6gL1ULJKiibGd.jpeg"
                    alt="E-Waste Collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Our e-waste collection area contains a diverse range of electronic components awaiting processing.
                  From computer parts to various electronic devices, we handle a wide variety of e-waste materials.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dismantling Station</CardTitle>
                <CardDescription>Where electronic devices are manually dismantled.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inventory3.jpg-nCahRmLFVKKAYlW9gZgFkNhjjWVDKr.jpeg"
                    alt="Dismantling Station"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  At our dismantling station, skilled technicians manually disassemble electronic devices to separate
                  reusable components and prepare materials for further processing. This careful dismantling ensures
                  maximum resource recovery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Storage Area</CardTitle>
                <CardDescription>Secure storage for processed materials.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/storage_area.jpg-YbfKgDxCx1g2CgBSoIIXlk2F3CnVfz.jpeg"
                    alt="Storage Area"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  Our secure storage area houses processed materials and recycling equipment. This large facility
                  provides ample space for our operations and ensures that all materials are properly stored before and
                  after processing.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Safety and Quality Management</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          At EarthCare E-Waste, we prioritize safety and quality in all our operations. Our equipment and processes are
          designed to meet the highest standards of safety and environmental protection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Safety Protocols</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We implement strict safety protocols throughout our facility to protect our workers and the environment.
                This includes regular safety training, proper protective equipment, and adherence to all relevant safety
                regulations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quality Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our quality control processes ensure that all recovered materials meet high standards. We regularly test
                and inspect materials to verify their purity and suitability for reuse in manufacturing.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Environmental Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We are committed to environmental compliance and regularly monitor our operations to ensure they meet or
                exceed all relevant environmental regulations and standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <Button asChild>
          <Link href="/contact">Schedule a Facility Tour</Link>
        </Button>
      </div>
    </div>
  )
}

