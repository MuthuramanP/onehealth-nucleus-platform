
// Patient data
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodType?: string;
  contactNumber: string;
  email: string;
  address: string;
  medicalHistory: string[];
  upcomingAppointment?: string;
  status: "stable" | "critical" | "recovering" | "scheduled";
  avatar?: string;
  insuranceProvider?: string;
  admissionDate?: string;
  lastVisit?: string;
}

export const patients: Patient[] = [
  {
    id: "PT-001",
    name: "James Wilson",
    age: 42,
    gender: "Male",
    bloodType: "O+",
    contactNumber: "(555) 123-4567",
    email: "james.wilson@example.com",
    address: "123 Main St, Anytown, USA",
    medicalHistory: ["Hypertension", "Type 2 Diabetes"],
    upcomingAppointment: "2025-04-22T10:30:00",
    status: "stable",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    insuranceProvider: "BlueCross",
    lastVisit: "2025-03-15"
  },
  {
    id: "PT-002",
    name: "Emma Thompson",
    age: 35,
    gender: "Female",
    bloodType: "A-",
    contactNumber: "(555) 987-6543",
    email: "emma.thompson@example.com",
    address: "456 Oak Ave, Somewhere, USA",
    medicalHistory: ["Asthma", "Seasonal allergies"],
    upcomingAppointment: "2025-04-23T14:00:00",
    status: "stable",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    insuranceProvider: "Aetna",
    lastVisit: "2025-04-01"
  },
  {
    id: "PT-003",
    name: "Robert Davis",
    age: 68,
    gender: "Male",
    bloodType: "B+",
    contactNumber: "(555) 567-8901",
    email: "robert.davis@example.com",
    address: "789 Pine Rd, Elsewhere, USA",
    medicalHistory: ["Coronary artery disease", "Arthritis", "COPD"],
    upcomingAppointment: "2025-04-25T11:15:00",
    status: "critical",
    avatar: "https://randomuser.me/api/portraits/men/87.jpg",
    insuranceProvider: "Medicare",
    admissionDate: "2025-04-12",
    lastVisit: "2025-04-12"
  },
  {
    id: "PT-004",
    name: "Sophia Martinez",
    age: 29,
    gender: "Female",
    bloodType: "AB+",
    contactNumber: "(555) 234-5678",
    email: "sophia.martinez@example.com",
    address: "101 Cedar Ln, Nowhere, USA",
    medicalHistory: ["Migraine", "Anxiety"],
    upcomingAppointment: "2025-04-24T16:30:00",
    status: "stable",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    insuranceProvider: "UnitedHealth",
    lastVisit: "2025-03-22"
  },
  {
    id: "PT-005",
    name: "David Kim",
    age: 52,
    gender: "Male",
    bloodType: "A+",
    contactNumber: "(555) 876-5432",
    email: "david.kim@example.com",
    address: "222 Maple Dr, Anyplace, USA",
    medicalHistory: ["Hypercholesterolemia", "Sleep apnea"],
    upcomingAppointment: "2025-04-26T09:00:00",
    status: "recovering",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    insuranceProvider: "Cigna",
    admissionDate: "2025-04-05",
    lastVisit: "2025-04-05"
  },
  {
    id: "PT-006",
    name: "Olivia Johnson",
    age: 45,
    gender: "Female",
    bloodType: "O-",
    contactNumber: "(555) 345-6789",
    email: "olivia.johnson@example.com",
    address: "333 Birch Blvd, Somewhere, USA",
    medicalHistory: ["Hypothyroidism", "Depression"],
    upcomingAppointment: "2025-04-27T13:45:00",
    status: "stable",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    insuranceProvider: "Humana",
    lastVisit: "2025-03-30"
  }
];

// Appointment data
export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId?: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  status: "scheduled" | "completed" | "cancelled" | "in-progress" | "no-show";
  type: "check-up" | "follow-up" | "emergency" | "surgery" | "consultation";
  notes?: string;
}

export const appointments: Appointment[] = [
  {
    id: "APT-001",
    patientId: "PT-001",
    patientName: "James Wilson",
    doctorId: "doctor-1",
    doctorName: "Dr. Michael Chen",
    department: "Cardiology",
    date: "2025-04-22",
    time: "10:30",
    status: "scheduled",
    type: "follow-up",
    notes: "Follow-up for blood pressure medication adjustment"
  },
  {
    id: "APT-002",
    patientId: "PT-002",
    patientName: "Emma Thompson",
    doctorId: "doctor-2",
    doctorName: "Dr. Jessica Patel",
    department: "Pulmonology",
    date: "2025-04-23",
    time: "14:00",
    status: "scheduled",
    type: "follow-up",
    notes: "Review asthma management plan"
  },
  {
    id: "APT-003",
    patientId: "PT-003",
    patientName: "Robert Davis",
    doctorId: "doctor-3",
    doctorName: "Dr. William Johnson",
    department: "Cardiology",
    date: "2025-04-25",
    time: "11:15",
    status: "scheduled",
    type: "check-up",
    notes: "Post-hospitalization follow-up"
  },
  {
    id: "APT-004",
    patientId: "PT-004",
    patientName: "Sophia Martinez",
    doctorId: "doctor-4",
    doctorName: "Dr. Sarah Wilson",
    department: "Neurology",
    date: "2025-04-24",
    time: "16:30",
    status: "scheduled",
    type: "consultation",
    notes: "Migraine frequency has increased"
  },
  {
    id: "APT-005",
    patientId: "PT-005",
    patientName: "David Kim",
    doctorId: "doctor-1",
    doctorName: "Dr. Michael Chen",
    department: "Cardiology",
    date: "2025-04-26",
    time: "09:00",
    status: "scheduled",
    type: "follow-up",
    notes: "Follow-up from hospital discharge"
  },
  {
    id: "APT-006",
    patientId: "PT-006",
    patientName: "Olivia Johnson",
    doctorId: "doctor-5",
    doctorName: "Dr. Emily Brooks",
    department: "Endocrinology",
    date: "2025-04-27",
    time: "13:45",
    status: "scheduled",
    type: "check-up",
    notes: "Annual thyroid function assessment"
  },
  {
    id: "APT-007",
    patientId: "PT-001",
    patientName: "James Wilson",
    doctorId: "doctor-6",
    doctorName: "Dr. Thomas Brown",
    department: "Endocrinology",
    date: "2025-04-15",
    time: "09:15",
    status: "completed",
    type: "check-up",
    notes: "Diabetes management is improving"
  }
];

// Dashboard metrics
export const dashboardMetrics = {
  patientMetrics: {
    totalPatients: 1254,
    newPatients: 28,
    inPatients: 182,
    outPatients: 76,
    criticalPatients: 14,
    surgeryScheduled: 8
  },
  appointmentMetrics: {
    totalAppointments: 98,
    completed: 57,
    scheduled: 32,
    cancelled: 6,
    noShow: 3
  },
  revenueMetrics: {
    totalRevenue: 284576,
    pendingPayments: 42155,
    insuranceClaims: 31,
    averageTreatmentCost: 1876
  },
  staffMetrics: {
    totalStaff: 378,
    doctors: 87,
    nurses: 156,
    administrative: 95,
    other: 40
  },
  bedOccupancy: {
    total: 500,
    occupied: 371,
    available: 129,
    icuTotal: 50,
    icuOccupied: 38
  }
};

// Sample activity logs
export interface ActivityLog {
  id: string;
  timestamp: string;
  action: string;
  userId: string;
  userName: string;
  userRole: string;
  details: string;
}

export const activityLogs: ActivityLog[] = [
  {
    id: "LOG-001",
    timestamp: "2025-04-18T09:15:32",
    action: "Patient Admitted",
    userId: "doctor-1",
    userName: "Dr. Michael Chen",
    userRole: "doctor",
    details: "Admitted patient Robert Davis (PT-003) to Cardiology ward"
  },
  {
    id: "LOG-002",
    timestamp: "2025-04-18T10:23:45",
    action: "Medication Administered",
    userId: "nurse-1",
    userName: "Rebecca Martinez",
    userRole: "nurse",
    details: "Administered 10mg Lisinopril to Robert Davis (PT-003)"
  },
  {
    id: "LOG-003",
    timestamp: "2025-04-18T11:05:12",
    action: "Appointment Scheduled",
    userId: "receptionist-1",
    userName: "Alice Thompson",
    userRole: "receptionist",
    details: "Scheduled follow-up appointment for Emma Thompson (PT-002) on April 23"
  },
  {
    id: "LOG-004",
    timestamp: "2025-04-18T13:47:28",
    action: "Lab Results Updated",
    userId: "admin-1", 
    userName: "Sarah Johnson",
    userRole: "admin",
    details: "Blood test results uploaded for David Kim (PT-005)"
  },
  {
    id: "LOG-005",
    timestamp: "2025-04-18T14:30:15",
    action: "Patient Discharged",
    userId: "doctor-1",
    userName: "Dr. Michael Chen",
    userRole: "doctor",
    details: "Discharged patient Olivia Johnson (PT-006) with follow-up instructions"
  }
];

// Hospital departments
export interface Department {
  id: string;
  name: string;
  head: string;
  staffCount: number;
  description: string;
}

export const departments: Department[] = [
  {
    id: "DEPT-001",
    name: "Cardiology",
    head: "Dr. Michael Chen",
    staffCount: 42,
    description: "Specializes in diagnosing and treating heart conditions"
  },
  {
    id: "DEPT-002",
    name: "Neurology",
    head: "Dr. Sarah Wilson",
    staffCount: 38,
    description: "Focuses on disorders of the nervous system"
  },
  {
    id: "DEPT-003",
    name: "Orthopedics",
    head: "Dr. James Taylor",
    staffCount: 35,
    description: "Specializes in musculoskeletal health"
  },
  {
    id: "DEPT-004",
    name: "Pediatrics",
    head: "Dr. Emily Brooks",
    staffCount: 47,
    description: "Provides healthcare for infants, children, and adolescents"
  },
  {
    id: "DEPT-005",
    name: "Oncology",
    head: "Dr. Robert Lee",
    staffCount: 40,
    description: "Specializes in cancer diagnosis and treatment"
  },
  {
    id: "DEPT-006",
    name: "Emergency Medicine",
    head: "Dr. Thomas Brown",
    staffCount: 52,
    description: "Provides acute care for patients with urgent conditions"
  }
];

// AI Insights
export interface AIInsight {
  id: string;
  title: string;
  description: string;
  category: "clinical" | "operational" | "financial" | "predictive";
  priority: "low" | "medium" | "high";
  timestamp: string;
  relatedTo?: string;
  action?: string;
}

export const aiInsights: AIInsight[] = [
  {
    id: "AI-001",
    title: "Potential Drug Interaction Detected",
    description: "Patient Robert Davis (PT-003) is currently prescribed medications that may interact with newly prescribed Amiodarone. Consider alternative treatment.",
    category: "clinical",
    priority: "high",
    timestamp: "2025-04-18T08:45:22",
    relatedTo: "PT-003",
    action: "Review Medication"
  },
  {
    id: "AI-002",
    title: "Resource Allocation Opportunity",
    description: "Staffing levels in the Emergency Department are 20% higher than patient volume warrants. Consider staff reassignment to Cardiology Department where there is current shortage.",
    category: "operational",
    priority: "medium",
    timestamp: "2025-04-18T09:30:15",
    action: "Review Staffing"
  },
  {
    id: "AI-003",
    title: "Readmission Risk Alert",
    description: "Patient David Kim (PT-005) has a 78% chance of readmission within 30 days based on clinical history and social determinants. Consider enhanced discharge planning.",
    category: "predictive",
    priority: "high",
    timestamp: "2025-04-18T10:15:33",
    relatedTo: "PT-005",
    action: "Enhance Care Plan"
  },
  {
    id: "AI-004",
    title: "Insurance Claim Optimization",
    description: "17 recent claims were rejected due to incomplete documentation. Pattern analysis suggests improving documentation for post-surgical care procedures.",
    category: "financial",
    priority: "medium",
    timestamp: "2025-04-18T11:20:45",
    action: "Improve Documentation"
  },
  {
    id: "AI-005",
    title: "Preventative Care Opportunity",
    description: "Patient James Wilson (PT-001) is overdue for recommended screening based on age and risk factors. Consider scheduling during next visit.",
    category: "clinical",
    priority: "low",
    timestamp: "2025-04-18T13:10:18",
    relatedTo: "PT-001",
    action: "Schedule Screening"
  }
];
