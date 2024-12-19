import { Users, BookOpen, TrendingUp, MessageCircle } from 'lucide-react';

export const services = [
  {
    icon: Users,
    title: "Konsulting Strategiczny",
    description: "Otrzymaj spersonalizowane wskazówki, jak skalować swoją szkołę językową przy użyciu sprawdzonych systemów i strategii.",
  },
  {
    icon: BookOpen,
    title: "Optymalizacja Kursów",
    description: "Zoptymalizuj program nauczania i metody prowadzenia zajęć dla maksymalnego zaangażowania i retencji uczniów.",
  },
  {
    icon: TrendingUp,
    title: "Marketing i Sprzedaż",
    description: "Wdrażaj skuteczne strategie marketingowe, aby przyciągnąć więcej uczniów i zwiększyć zapisy.",
  },
  {
    icon: MessageCircle,
    title: "Rozwój Zespołu",
    description: "Buduj i szkol wysokowydajny zespół, aby zapewnić wyjątkową edukację językową.",
  },
] as const;