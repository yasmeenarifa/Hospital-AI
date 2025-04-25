// Mock AI analysis function that generates random findings based on scan type
export const analyzeImage = (
  scanType: string,
  scanArea: string,
): {
  findings: string
  confidence: number
  observations: string[]
  impression: string
} => {
  // Random confidence between 85 and 99
  const confidence = Math.floor(Math.random() * 15) + 85

  // Default values
  let findings = ""
  let observations: string[] = []
  let impression = ""

  // Generate random findings based on scan type and area
  if (scanType === "MRI Scan") {
    if (scanArea === "Brain") {
      const brainFindings = [
        "No abnormalities detected in the brain parenchyma.",
        "Minor non-specific white matter changes, likely age-related.",
        "Small area of altered signal intensity in the left frontal lobe, possibly representing a small ischemic lesion.",
        "Normal ventricular system without evidence of hydrocephalus.",
        "No evidence of intracranial hemorrhage or mass effect.",
      ]

      // Randomly select 3-5 observations
      observations = shuffleArray(brainFindings).slice(0, Math.floor(Math.random() * 3) + 3)

      // Generate overall findings
      if (confidence > 95) {
        findings = "Normal brain MRI with no significant abnormalities."
        impression = "Normal brain MRI study. No evidence of acute intracranial pathology."
      } else if (confidence > 90) {
        findings = "Minor non-specific changes, likely age-appropriate."
        impression =
          "Minor non-specific white matter changes, likely representing small vessel ischemic disease. Clinical correlation recommended."
      } else {
        findings = "Small area of altered signal intensity noted, requiring clinical correlation."
        impression =
          "Small focal area of altered signal intensity in the left frontal lobe, possibly representing a small ischemic lesion. Clinical correlation and follow-up recommended."
      }
    } else if (scanArea === "Spine") {
      const spineFindings = [
        "Normal alignment of the vertebral bodies.",
        "Mild disc bulge at L4-L5 without significant neural compression.",
        "Moderate disc herniation at L5-S1 with mild compression of the left S1 nerve root.",
        "Mild facet arthropathy at multiple levels.",
        "No evidence of spinal stenosis.",
      ]

      observations = shuffleArray(spineFindings).slice(0, Math.floor(Math.random() * 3) + 3)

      if (confidence > 95) {
        findings = "Normal spine alignment with minor degenerative changes."
        impression = "Mild degenerative changes of the lumbar spine without significant neural compression."
      } else if (confidence > 90) {
        findings = "Disc bulge at L4-L5 without significant neural compression."
        impression =
          "Mild disc bulge at L4-L5 without significant neural compression. Conservative management recommended."
      } else {
        findings = "Moderate disc herniation at L5-S1 with mild nerve root compression."
        impression =
          "Moderate disc herniation at L5-S1 with mild compression of the left S1 nerve root. Clinical correlation and possible neurosurgical consultation recommended."
      }
    } else {
      const generalFindings = [
        "Normal signal intensity of the visualized structures.",
        "No evidence of mass lesion or abnormal enhancement.",
        "Mild degenerative changes appropriate for patient's age.",
        "No evidence of acute pathology.",
        "Normal appearance of the surrounding soft tissues.",
      ]

      observations = shuffleArray(generalFindings).slice(0, Math.floor(Math.random() * 3) + 3)

      findings = "No significant abnormalities detected."
      impression = "Normal MRI study without evidence of acute pathology."
    }
  } else if (scanType === "CT Scan") {
    if (scanArea === "Chest") {
      const chestFindings = [
        "Clear lung fields bilaterally without evidence of consolidation or effusion.",
        "No evidence of pneumothorax or pleural effusion.",
        "Normal cardiac silhouette.",
        "No mediastinal or hilar lymphadenopathy.",
        "Normal appearance of the visualized bony structures.",
      ]

      observations = shuffleArray(chestFindings).slice(0, Math.floor(Math.random() * 3) + 3)

      if (confidence > 95) {
        findings = "Normal chest CT without acute abnormalities."
        impression = "Normal chest CT without evidence of acute cardiopulmonary disease."
      } else if (confidence > 90) {
        findings = "Minor atelectatic changes in the lung bases, likely subsegmental."
        impression =
          "Minor subsegmental atelectasis in the lung bases, likely representing hypoventilation. No evidence of acute cardiopulmonary disease."
      } else {
        findings = "Small nodular opacity in the right upper lobe, requiring follow-up."
        impression =
          "Small (4mm) nodular opacity in the right upper lobe. Given the patient's history, this likely represents a benign granuloma, but follow-up in 6 months is recommended to ensure stability."
      }
    } else if (scanArea === "Abdomen") {
      const abdomenFindings = [
        "Normal appearance of the liver, spleen, and pancreas.",
        "No evidence of free fluid or free air.",
        "Normal appearance of the kidneys and adrenal glands.",
        "No evidence of bowel obstruction or ileus.",
        "No evidence of abdominal aortic aneurysm.",
      ]

      observations = shuffleArray(abdomenFindings).slice(0, Math.floor(Math.random() * 3) + 3)

      if (confidence > 95) {
        findings = "Normal abdominal CT without acute abnormalities."
        impression = "Normal abdominal CT without evidence of acute intra-abdominal pathology."
      } else if (confidence > 90) {
        findings = "Mild hepatic steatosis, otherwise normal study."
        impression =
          "Mild hepatic steatosis, likely representing non-alcoholic fatty liver disease. Otherwise normal abdominal CT."
      } else {
        findings = "Small renal cyst in the right kidney, likely benign."
        impression =
          "Small (1.5cm) simple renal cyst in the right kidney, with features consistent with a Bosniak I cyst. No further evaluation necessary."
      }
    } else {
      const generalFindings = [
        "Normal appearance of the visualized structures.",
        "No evidence of acute fracture or dislocation.",
        "No evidence of mass lesion or abnormal enhancement.",
        "Normal soft tissue structures.",
        "No evidence of acute pathology.",
      ]

      observations = shuffleArray(generalFindings).slice(0, Math.floor(Math.random() * 3) + 3)

      findings = "No significant abnormalities detected."
      impression = "Normal CT study without evidence of acute pathology."
    }
  } else {
    // Blood Report or other type
    const labFindings = [
      "All parameters within normal reference ranges.",
      "Mild elevation in liver enzymes (ALT, AST).",
      "Slightly elevated blood glucose level.",
      "Mild anemia with reduced hemoglobin and hematocrit.",
      "Normal white blood cell count and differential.",
    ]

    observations = shuffleArray(labFindings).slice(0, Math.floor(Math.random() * 3) + 3)

    if (confidence > 95) {
      findings = "All laboratory parameters within normal limits."
      impression = "Normal laboratory findings without evidence of significant abnormalities."
    } else if (confidence > 90) {
      findings = "Minor deviations in some parameters, likely not clinically significant."
      impression =
        "Minor deviations in some laboratory parameters, likely not clinically significant. Recommend routine follow-up."
    } else {
      findings = "Some abnormal values detected, requiring clinical correlation."
      impression =
        "Abnormal values detected in several parameters. Clinical correlation and possible follow-up testing recommended."
    }
  }

  return {
    findings,
    confidence,
    observations,
    impression,
  }
}

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}
