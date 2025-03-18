import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EarthCare E-Waste</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Specialized in recycling materials in all forms and grades, from metals to electronic scraps and hazardous
              waste.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <p>
                Sy.No.15, 1st Phase, Kumbalagodu,
                <br />
                Kumbalagodu Industrial Area,
                <br />
                Kengeri Hobli, Bangalore-560074
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-sm text-muted-foreground hover:text-primary">
                  Recycling Process
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="text-sm text-muted-foreground hover:text-primary">
                  Equipment Gallery
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-sm text-muted-foreground hover:text-primary">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <p>+91 9620429523 / 080 29919523</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <p>jagadish.mk@earthcareewaste.com</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <p>info@earthcareewaste.com</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">GSTIN: 29AAGGE7607N1Z2</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EarthCare E-Waste Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

