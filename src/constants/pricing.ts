export const pricingPlans = [
  {
    title: "Płatność jednorazowa",
    price: "4997 zł",
    savings: "1491 zł",
    features: [
      "Natychmiastowy dostęp do wszystkich materiałów",
      "Dożywotni dostęp do aktualizacji",
      "Dodatkowe materiały bonusowe",
      "Priorytetowe wsparcie",
    ],
    buttonText: "Kup teraz"
  },
  {
    title: "Raty miesięczne",
    price: "499 zł",
    subtitle: "/ miesiąc przez 13 miesięcy",
    features: [
      "Łatwiejsze rozpoczęcie",
      "Dostęp do wszystkich materiałów",
      "Dożywotni dostęp do aktualizacji",
      "Materiały bonusowe",
      "Wsparcie techniczne"
    ],
    buttonText: "Wybierz plan ratalny",
    isHighlighted: true
  }
] as const;