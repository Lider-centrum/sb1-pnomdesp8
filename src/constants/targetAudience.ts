import { Building2, GraduationCap, Rocket, Shield } from 'lucide-react';

export const targetAudience = [
  {
    icon: Building2,
    title: "Właściciele szkół językowych",
    description: "Którzy chcą zwiększyć przychody i zoptymalizować działanie swojej szkoły",
  },
  {
    icon: GraduationCap,
    title: "Lektorzy języków obcych",
    description: "Planujący otworzyć własną szkołę lub rozwinąć działalność",
  },
  {
    icon: Rocket,
    title: "Początkujący przedsiębiorcy",
    description: "Stawiający pierwsze kroki w branży edukacji językowej",
  },
  {
    icon: Shield,
    title: "Doświadczeni edukatorzy",
    description: "Szukający nowych sposobów na rozwój swojego biznesu",
  },
] as const;