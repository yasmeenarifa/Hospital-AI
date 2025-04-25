import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"

interface BillItem {
  description: string
  quantity: number
  unitPrice: number
  amount: number
}

interface BillData {
  billId: string
  patientId: string
  patientName: string
  englishName: string
  date: string
  items: BillItem[]
  subtotal: number
  tax: number
  discount: number
  total: number
  paymentMethod: string
  doctorName: string
}

export const generateBillPDF = (billData: BillData): string => {
  const doc = new jsPDF()

  // Add hospital logo and header
  doc.setFillColor(102, 51, 153) // Purple color
  doc.rect(0, 0, 210, 30, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.text("ArogyaSeva AI Hospital", 105, 15, { align: "center" })

  doc.setFontSize(12)
  doc.text("Advanced Healthcare with AI Technology", 105, 22, { align: "center" })

  // Bill information
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(18)
  doc.text("INVOICE", 105, 40, { align: "center" })

  doc.setFontSize(10)
  doc.text(`Invoice #: ${billData.billId}`, 15, 50)
  doc.text(`Date: ${billData.date}`, 15, 55)
  doc.text(`Patient ID: ${billData.patientId}`, 15, 60)

  // Patient information
  doc.text("Bill To:", 130, 50)
  doc.text(`${billData.englishName}`, 130, 55)
  doc.text(`(${billData.patientName})`, 130, 60)

  // Bill items table
  autoTable(doc, {
    startY: 70,
    head: [["Description", "Quantity", "Unit Price (₹)", "Amount (₹)"]],
    body: billData.items.map((item) => [
      item.description,
      item.quantity,
      item.unitPrice.toFixed(2),
      item.amount.toFixed(2),
    ]),
    foot: [
      ["Subtotal", "", "", billData.subtotal.toFixed(2)],
      ["Tax (18% GST)", "", "", billData.tax.toFixed(2)],
      ["Discount", "", "", billData.discount.toFixed(2)],
      ["Total Amount", "", "", billData.total.toFixed(2)],
    ],
    theme: "grid",
    headStyles: { fillColor: [102, 51, 153], textColor: [255, 255, 255] },
    footStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0], fontStyle: "bold" },
    alternateRowStyles: { fillColor: [248, 248, 255] },
  })

  const finalY = (doc as any).lastAutoTable.finalY || 120

  // Payment information
  doc.text(`Payment Method: ${billData.paymentMethod}`, 15, finalY + 10)
  doc.text(`Attending Doctor: ${billData.doctorName}`, 15, finalY + 15)

  // Footer
  doc.setFontSize(8)
  doc.text("This is a computer-generated invoice and does not require a signature.", 105, finalY + 25, {
    align: "center",
  })
  doc.text(
    "For any billing inquiries, please contact our billing department at billing@arogyaseva.ai",
    105,
    finalY + 30,
    { align: "center" },
  )

  // Hospital address
  doc.text("ArogyaSeva AI Hospital, 123 Health Avenue, Chennai, Tamil Nadu, India - 600001", 105, finalY + 35, {
    align: "center",
  })
  doc.text("Phone: +91-44-2345-6789 | Email: info@arogyaseva.ai | www.arogyaseva.ai", 105, finalY + 40, {
    align: "center",
  })

  // Return the PDF as a data URL
  return doc.output("dataurlstring")
}

export const generateAIReportPDF = (reportData: any): string => {
  const doc = new jsPDF()

  // Add hospital logo and header
  doc.setFillColor(102, 51, 153) // Purple color
  doc.rect(0, 0, 210, 30, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.text("ArogyaSeva AI Hospital", 105, 15, { align: "center" })

  doc.setFontSize(12)
  doc.text("AI-Powered Diagnostic Report", 105, 22, { align: "center" })

  // Report information
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(18)
  doc.text(`${reportData.type} ANALYSIS REPORT`, 105, 40, { align: "center" })

  doc.setFontSize(10)
  doc.text(`Report ID: ${reportData.id}`, 15, 50)
  doc.text(`Date: ${reportData.date}`, 15, 55)
  doc.text(`Patient ID: ${reportData.patientId}`, 15, 60)

  // Patient information
  doc.text("Patient:", 130, 50)
  doc.text(`${reportData.englishName}`, 130, 55)
  doc.text(`(${reportData.patientName})`, 130, 60)

  // Report details
  doc.setFontSize(12)
  doc.text("SCAN DETAILS", 15, 75)

  doc.setFontSize(10)
  doc.text(`Scan Area: ${reportData.scanArea}`, 15, 85)
  doc.text(`Referring Doctor: ${reportData.doctor}`, 15, 90)
  doc.text(`AI Confidence: ${reportData.confidence}%`, 15, 95)

  // Findings
  doc.setFontSize(12)
  doc.text("AI ANALYSIS FINDINGS", 15, 110)

  doc.setFontSize(10)
  doc.text(reportData.findings, 15, 120)

  // Detailed observations
  doc.setFontSize(12)
  doc.text("DETAILED OBSERVATIONS", 15, 140)

  doc.setFontSize(10)
  let yPos = 150
  reportData.observations.forEach((observation: string) => {
    doc.text(`• ${observation}`, 20, yPos)
    yPos += 7
  })

  // Impression
  doc.setFontSize(12)
  doc.text("IMPRESSION", 15, yPos + 10)

  doc.setFontSize(10)
  doc.text(reportData.impression, 15, yPos + 20)

  // Disclaimer
  yPos += 40
  doc.setFontSize(8)
  doc.text("DISCLAIMER", 15, yPos)
  doc.text(
    "This report was generated with the assistance of artificial intelligence and has been reviewed by a qualified healthcare professional.",
    15,
    yPos + 5,
  )
  doc.text(
    "AI analysis is meant to assist medical professionals and should not replace clinical judgment.",
    15,
    yPos + 10,
  )

  // Footer
  doc.text("ArogyaSeva AI Hospital, 123 Health Avenue, Chennai, Tamil Nadu, India - 600001", 105, 280, {
    align: "center",
  })
  doc.text("Phone: +91-44-2345-6789 | Email: info@arogyaseva.ai | www.arogyaseva.ai", 105, 285, { align: "center" })

  // Return the PDF as a data URL
  return doc.output("dataurlstring")
}
