import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, CheckCircle } from "lucide-react"

export default function CertificationsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Certifications</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          EarthCare E-Waste operates with all necessary authorizations and certifications to ensure compliance with
          environmental regulations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>KSPCB Authorization</CardTitle>
            <CardDescription>
              Karnataka State Pollution Control Board Authorization for E-Waste Recycling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This certification authorizes EarthCare E-Waste to collect, dismantle, and recycle electronic waste in
              accordance with environmental regulations.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Valid until: December 31, 2025</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Consent for Operation</CardTitle>
            <CardDescription>Official permission to operate e-waste recycling facility</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This document provides official consent for EarthCare E-Waste to operate its recycling facility in
              compliance with environmental standards.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Valid until: March 15, 2026</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Hazardous Waste Authorization</CardTitle>
            <CardDescription>Authorization for handling and recycling hazardous waste</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This certification authorizes EarthCare E-Waste to handle and recycle hazardous waste components found in
              electronic waste.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Valid until: June 30, 2025</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>GST Registration</CardTitle>
            <CardDescription>Goods and Services Tax registration certificate</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Our GST registration certificate with GSTIN: 29AAGGE7607N1Z2, confirming our status as a registered
              business.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Permanent Registration</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Form 6 Certificate</CardTitle>
            <CardDescription>Annual return for e-waste handling</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Form 6 is an annual return that provides details of e-waste handled during the year, as required by
              environmental regulations.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Updated annually</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Form 10 Certificate</CardTitle>
            <CardDescription>Authorization for storage of e-waste</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Form 10 provides authorization for the storage of e-waste at our facility, ensuring compliance with
              storage regulations.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Valid until: September 30, 2025</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          If you need more information about our certifications or have questions about our compliance with
          environmental regulations, please don't hesitate to contact us.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

