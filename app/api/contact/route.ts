import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Define the data directory
const DATA_DIR = path.join(process.cwd(), "data")
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json")

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

// Ensure the contacts file exists
if (!fs.existsSync(CONTACTS_FILE)) {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify([]))
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate required fields
    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create a contact entry with timestamp
    const contactEntry = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    }

    // Read existing contacts
    const contactsData = fs.readFileSync(CONTACTS_FILE, "utf8")
    const contacts = JSON.parse(contactsData)

    // Add the new contact
    contacts.push(contactEntry)

    // Write back to the file
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2))

    // Return success response
    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // This endpoint would be protected in a real application
    // Read contacts from file
    const contactsData = fs.readFileSync(CONTACTS_FILE, "utf8")
    const contacts = JSON.parse(contactsData)

    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Error retrieving contacts:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

