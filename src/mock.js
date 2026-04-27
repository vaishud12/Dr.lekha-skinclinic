// Mock data for Dr. Lekha Jadhav's Medical Clinic Website
import image2 from './Images/pexels-photo-4586713.jpeg';
import image3 from './Images/pexels-photo-7446680.jpeg';
import pcos from './Images/PCOS-Weight-Loss-Diet-3.png'
import image4 from './Images/photo-1467453678174-768ec283a940.jpg';
import medicalweight from './Images/What-is-Medical-Weight-Loss.jpeg'
import adskin from './Images/Oxyjet-Treatment.jpg.webp'
export const clinicInfo = {
  name: "Dr. Lekha Jadhav",
  tagline: "Weight Management & Skin Care Clinic",
  phone: "+91 76663 20828",
  whatsapp: "917666320828",
  email: "kayakalp.drlekha@gmail.com",
  address: "Shraddha Hospital - A Project by Panchamrut Lifecare LLP, survey No 43, Parashar Society, Pune Nagar Rd, Ashoka Nagar, Kharadi, Pune, Maharashtra 411014",
  workingHours: {
    weekdays: "Monday to Saturday: 10:00 AM – 7:00 PM",
    sunday: "Sunday: By appointment only"
  }
};

export const doctorInfo = {
  name: "Dr. Lekha Jadhav",
  qualifications: "MBBS, MD (Dermatology), Fellowship in Aesthetic Medicine",
  experience: "5+ Years",
  specialization: ["Weight Management", "Obesity Care", "Skin Care", "Aesthetic Medicine"],
  bio: "Dr. Lekha Jadhav is a renowned medical professional specializing in holistic weight management and advanced skin care treatments. With over 12 years of clinical experience, she combines evidence-based medicine with personalized care to help patients achieve their health and wellness goals.",
  philosophy: "I believe in treating the root cause, not just the symptoms. Every patient deserves a customized treatment plan that respects their unique body, lifestyle, and goals. My approach integrates medical expertise with compassionate care to deliver sustainable, life-changing results.",
  image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg"
};

export const services = [
  {
    id: 1,
    category: "weight-management",
    title: "Medical Weight Loss",
    shortDesc: "Doctor-supervised weight loss programs tailored to your body's unique needs",
    icon: "Scale",
    image: medicalweight,
    features: [
      "Personalized diet & nutrition plans",
      "Medical evaluation & monitoring",
      "Lifestyle modification guidance",
      "Sustainable weight loss strategies"
    ]
  },
  {
    id: 2,
    category: "weight-management",
    title: "Obesity & Lifestyle Disorders",
    shortDesc: "Comprehensive management of obesity-related health conditions",
    icon: "Activity",
    image: image4,
    features: [
      "Diabetes & hypertension management",
      "Thyroid disorder treatment",
      "Metabolic syndrome care",
      "Regular health monitoring"
    ]
  },
  {
    id: 3,
    category: "weight-management",
    title: "PCOS Weight Management",
    shortDesc: "Specialized treatment for PCOS-related weight and hormonal issues",
    icon: "Heart",
    image: pcos,
    features: [
      "Hormonal balance restoration",
      "Customized nutrition plans",
      "Lifestyle modifications",
      "Medical supervision & support"
    ]
  },
  {
    id: 4,
    category: "skin-care",
    title: "Acne & Pigmentation Treatment",
    shortDesc: "Advanced medical solutions for clear, radiant skin",
    icon: "Sparkles",
    image: image3,
    features: [
      "Medical-grade acne treatment",
      "Pigmentation & dark spot removal",
      "Scar reduction therapies",
      "Customized skin care regimens"
    ]
  },
  {
    id: 5,
    category: "skin-care",
    title: "Anti-Aging & Skin Rejuvenation",
    shortDesc: "Non-surgical aesthetic procedures for youthful, glowing skin",
    icon: "Sparkle",
    image: image2,
    features: [
      "Chemical peels & facials",
      "Skin tightening treatments",
      "Fine line & wrinkle reduction",
      "Collagen stimulation therapy"
    ]
  },
  {
    id: 6,
    category: "skin-care",
    title: "Advanced Skin Treatments",
    shortDesc: "State-of-the-art dermatological procedures for various skin concerns",
    icon: "Star",
    image: adskin,
    features: [
      "Laser treatments",
      "Skin texture improvement",
      "Melasma & sun damage repair",
      "Customized treatment plans"
    ]
  }
];

export const whyChooseUs = [
  {
    title: "Medicated Expertise",
    description: "5+ years of specialized experience in weight management and dermatology with proven results",
    icon: "Award"
  },
  {
    title: "Personalized Care",
    description: "Every treatment plan is customized to your unique body type, lifestyle, and health goals",
    icon: "User"
  },
  {
    title: "Science-Backed Approach",
    description: "Evidence-based treatments combining modern medicine with holistic wellness principles",
    icon: "FlaskConical"
  },
  {
    title: "Safe & Ethical",
    description: "No shortcuts or false promises - only medically approved, safe procedures with realistic outcomes",
    icon: "Shield"
  },
  {
    title: "Comprehensive Support",
    description: "Continuous monitoring, follow-ups, and lifestyle guidance throughout your wellness journey",
    icon: "HeartHandshake"
  },
  {
    title: "Modern Facility",
    description: "Clean, hygienic, and well-equipped clinic with latest medical technology and comfortable ambience",
    icon: "Building2"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    age: 34,
    treatment: "Weight Management",
    rating: 5,
    text: "Dr. Lekha helped me lose 15 kgs in 6 months through a sustainable, medically-supervised program. Her approach is caring yet scientific. Highly recommend!",
    location: "Pune"
  },
  {
    id: 2,
    name: "Anita Deshmukh",
    age: 29,
    treatment: "PCOS Weight Management",
    rating: 5,
    text: "Struggling with PCOS weight for years, Dr. Lekha's treatment plan finally worked! Lost 12 kgs and my hormonal issues improved significantly.",
    location: "Mumbai"
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    age: 41,
    treatment: "Skin Rejuvenation",
    rating: 5,
    text: "The anti-aging treatment gave me visible results in just 8 weeks. My skin looks brighter and younger. Dr. Lekha's expertise is unmatched!",
    location: "Pune"
  },
  {
    id: 4,
    name: "Meera Patil",
    age: 26,
    treatment: "Acne Treatment",
    rating: 5,
    text: "After trying countless products, Dr. Lekha's medical acne treatment cleared my skin completely. Forever grateful for her guidance!",
    location: "Nagpur"
  },
  {
    id: 5,
    name: "Kavita Rao",
    age: 38,
    treatment: "Pigmentation Treatment",
    rating: 5,
    text: "My pigmentation issue was resolved with Dr. Lekha's customized treatment. Professional, caring, and results-oriented doctor!",
    location: "Pune"
  },
  {
    id: 6,
    name: "Radha Joshi",
    age: 45,
    treatment: "Weight & Skin Care",
    rating: 5,
    text: "Comprehensive care for both my weight and skin concerns. Dr. Lekha's holistic approach transformed my health and confidence!",
    location: "Satara"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Understanding PCOS and Weight Gain: A Medical Perspective",
    excerpt: "Polycystic Ovary Syndrome affects millions of women in India. Learn how medical intervention can help manage PCOS-related weight issues effectively...",
    category: "Weight Management",
    date: "2024-12-10",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556911073-a517e752729c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwzfHxoZWFsdGh5JTIwbGlmZXN0eWxlfGVufDB8fHx8MTc3NDE4ODE3MHww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "5 Science-Backed Ways to Achieve Sustainable Weight Loss",
    excerpt: "Forget crash diets and quick fixes. Discover evidence-based strategies for healthy, long-term weight management under medical supervision...",
    category: "Weight Management",
    date: "2024-12-05",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6975466/pexels-photo-6975466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    title: "Acne Treatment Options: What Really Works?",
    excerpt: "From topical treatments to advanced medical procedures, explore the most effective solutions for acne based on clinical evidence...",
    category: "Skin Care",
    date: "2024-11-28",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/7446690/pexels-photo-7446690.jpeg"
  },
  {
    id: 4,
    title: "Anti-Aging Treatments: Separating Facts from Myths",
    excerpt: "What actually works for youthful skin? A dermatologist's guide to safe, effective anti-aging treatments and realistic expectations...",
    category: "Skin Care",
    date: "2024-11-22",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/4586713/pexels-photo-4586713.jpeg"
  },
  {
    id: 5,
    title: "Pigmentation Problems: Causes and Medical Solutions",
    excerpt: "Understanding different types of skin pigmentation and how modern dermatology can address them effectively and safely...",
    category: "Skin Care",
    date: "2024-11-15",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/7446680/pexels-photo-7446680.jpeg"
  },
  {
    id: 6,
    title: "Metabolism and Weight Loss: What Your Doctor Wants You to Know",
    excerpt: "Learn how metabolic factors affect weight loss and why medical supervision makes all the difference in your weight management journey...",
    category: "Weight Management",
    date: "2024-11-08",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHx3ZWlnaHQlMjBsb3NzfGVufDB8fHx8MTc3NDE4ODE0OXww&ixlib=rb-4.1.0&q=85"
  }
];

export const faqs = {
  weightManagement: [
    {
      question: "How is medical weight loss different from diet plans?",
      answer: "Medical weight loss involves comprehensive health evaluation, personalized treatment under doctor supervision, medical-grade interventions when needed, and continuous monitoring of your health parameters. Unlike generic diet plans, we address underlying medical conditions affecting your weight."
    },
    {
      question: "Is medical weight loss safe?",
      answer: "Yes, when conducted under qualified medical supervision. We evaluate your complete health profile, existing conditions, and medications before creating a safe, effective treatment plan. Regular monitoring ensures your safety throughout the journey."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most patients start seeing noticeable results within 4-6 weeks. However, sustainable weight loss is a gradual process. We focus on healthy weight loss of 2-4 kg per month, which is medically recommended for long-term success."
    },
    {
      question: "Do you treat PCOS-related weight issues?",
      answer: "Yes, PCOS-related weight management is one of our specializations. We address hormonal imbalances, insulin resistance, and metabolic issues specific to PCOS through a comprehensive medical approach."
    }
  ],
  skinCare: [
    {
      question: "Are your skin treatments painful?",
      answer: "Most of our aesthetic treatments are minimally invasive with little to no discomfort. We use advanced techniques and, when needed, topical anesthetics to ensure your comfort during procedures."
    },
    {
      question: "How many sessions are required for acne treatment?",
      answer: "It varies based on acne severity and type. Typically, patients see significant improvement in 4-6 sessions, combined with prescribed medical-grade skincare. We create a customized treatment plan after thorough skin analysis."
    },
    {
      question: "Will pigmentation come back after treatment?",
      answer: "With proper post-treatment care and sun protection, results are long-lasting. We provide detailed aftercare instructions and recommend maintenance treatments to prevent recurrence."
    },
    {
      question: "What's the difference between your clinic and a beauty salon?",
      answer: "We are a medical facility led by a qualified doctor. All treatments are medical-grade, scientifically proven, and performed under medical supervision. We address skin concerns at a deeper, clinical level with safety as our priority."
    }
  ]
};

export const stats = [
  { number: "300+", label: "Happy Patients" },
  { number: "5+", label: "Years Experience" },
  { number: "20+", label: "Treatment Options" },
  { number: "20+", label: "Serving states" }
];

export const appointmentSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", 
  "5:00 PM", "6:00 PM"
];

