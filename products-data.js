// This file defines the actual data for each product tab
// You can edit these blocks to update descriptions, menus, prices, and health facts

const productData = {
  turkeys: {
    intro:
      "Our turkeys are raised on open pasture, with fresh air and forage — no antibiotics, no overcrowding, no water weight tricks. Just clean, flavorful meat you can trust.",
    health: [
      "Pasture-raised turkey contains 21–25g protein per 3 oz and is naturally lower in saturated fat compared to factory birds. [USDA 2022]",
      "Rich in selenium and B vitamins, supporting immune function and energy production for ages 11–70+. [NIH Office of Dietary Supplements, 2023]",
      "Lower sodium and higher omega-3s than conventional birds, beneficial for heart health and joint support in adults 31+. [Frontiers in Nutrition, 2021]",
      "No injected brines or growth enhancers — reducing inflammation and allergic response risk for children 5–10. [Journal of Food Quality, 2020]",
      "Supports muscle repair and recovery across all adult age groups (21–60+), making it ideal for active lifestyles. [Nutrition Journal, 2022]",
    ],
    menu: [
      {
        title: "Whole Turkeys",
        note: "$6.25/lb (Locked with $50 deposit)",
        items: [
          "Feast Bird (28–29 lbs): $175–181",
          "Holiday King (30–32 lbs): $187–200",
          "Crown Jewel (33–35 lbs): $206–219",
        ],
      },
      {
        title: "Cut-Up Turkey Parts (Vacuum-Sealed)",
        items: [
          "2 Bone-in Breast Halves – $24",
          "2 Thighs – $12",
          "2 Drumsticks – $12",
          "4 Wings (~1 lb) – $9",
          "1 Back – $5",
        ],
      },
      {
        title: "Turkey Marinades (Prepay Required)",
        note: "+ $2.75/lb add-on – 5 lb minimum per flavor",
        items: ["Italian", "Garlic-Herb"],
      },
      {
        title: "Turkey Sausage & Ground",
        items: [
          "Ground Turkey – $6.75/lb",
          "Mild Italian Patties – $7.00",
          "Jalape\u00f1o Cheddar Patties – $8.00",
          "Maple Patties – $7.25",
        ],
      },
      {
        title: "Turkey Kits & Bundles",
        items: [
          "Stock Kit – $10",
          "Country Breakfast Kit – $12",
          "White Meat Pack – $34",
          "Grill Pack – $32",
          "Everything But the Bird – $65",
          "Family Feast Bundle – $70",
        ],
      },
    ],
  },
  chickens: {
    intro:
      "Our pasture-raised chickens grow slow, live clean, and move freely in the sun. No antibiotics, no cages, and no nonsense. Just rich, honest flavor.",
    health: [
      "Pasture-raised chicken offers 19–23g of clean protein per serving, ideal for immune development in kids 5–10. [USDA National Nutrient Database, 2021]",
      "Higher vitamin D and omega-3s than caged birds — supporting mood, memory, and bone health in adults 31–60+. [Poultry Science, 2022]",
      "Less fat accumulation and better nutrient profile — helping balance cholesterol levels for ages 41–70. [Nutrition & Metabolism, 2023]",
      "Antibiotic-free meat reduces resistance risk and supports gut flora across all age groups. [World Health Organization, 2021]",
      "No retained water or shrinkage during cooking — making our chicken more nutrient-dense per ounce. [Food Science & Nutrition, 2020]",
    ],
    menu: [
      {
        title: "Whole Chickens",
        note: "$4.75/lb (avg 4.5–6.5 lbs)",
      },
      {
        title: "Cut Style A: All Cuts Combo (Boneless/Skinless)",
        items: [
          "2 B/S Breast Halves",
          "2 Thighs",
          "2 Drumsticks",
          "1 lb Party Wings",
          "1 Soup Pack",
          "Price: $33",
        ],
      },
      {
        title: "Cut Style B: 8-Piece Bone-In Birds",
        items: [
          "2 Bone-in Breast Halves",
          "2 Thighs",
          "2 Drumsticks",
          "2 Wings",
          "Estimated: $28–$30",
        ],
      },
      {
        title: "Cut-Up Chicken Parts",
        items: [
          "Breast Halves (2/pk) – $9.00",
          "Thighs (2/pk) – $6.00",
          "Drumsticks (2/pk) – $5.25",
          "Party Wings (1 lb) – $5.00",
          "Soup Pack – $4.25",
        ],
      },
      {
        title: "Chicken Marinades (Prepay Only)",
        note: "+ $2.50/lb add-on – 5 lb minimum per flavor",
        items: ["Garlic-Herb", "Lemon Garlic", "Italian"],
      },
      {
        title: "Chicken Bundles",
        items: [
          "Grill Box – $17",
          "Family Chicken Pack – $25",
          "Wing Night Bundle – $10",
          "All Cuts Combo – $33",
        ],
      },
    ],
  },
  eggs: {
    intro:
      "Rich golden yolks. Crisp whites. Our hens roam, forage, dust bathe, and soak up sunshine — producing real eggs that don’t need fake labels.",
    health: [
      "Higher in omega-3s and vitamin E compared to commercial eggs — supporting heart and skin health in all adults. [British Journal of Nutrition, 2021]",
      "More vitamin D due to sunlight exposure — critical for bone development in kids and seniors. [Journal of Clinical Nutrition, 2023]",
      "Better yolk structure and reduced cholesterol oxidation. [Food Chemistry, 2020]",
      "No antibiotics or forced molting — lowers inflammation and allergy risk. [Poultry Science Association, 2022]",
      "Eggs from pasture hens show 3–6x more beta-carotene — which supports vision, skin repair, and immunity. [Mother Earth News Lab Analysis, 2021]",
    ],
    menu: [
      {
        title: "Farm-Fresh Eggs",
        note: "$4.50/dozen (Buy 5+, Get 6th FREE)",
      },
    ],
  },
  rewards: {
    intro:
      "We reward loyalty, referrals, and big bundles. Because supporting local food should pay off.",
    menu: [
      {
        title: "Bonus Incentives",
        items: [
          "$150+ – FREE dozen eggs + $5 off",
          "$250+ – FREE Stock Kit + $10 off",
          "$350+ – FREE Country Breakfast Kit + $15 off",
          "$450+ – FREE Grill Pack + $20 off",
          "$500+ – VIP Loyalty – 5% off all future orders for 12 months",
        ],
        note: "Applies to single purchases only. Not stackable. Some items based on availability."
      },
      {
        title: "Service Discount",
        items: [
          "Military, Veterans, Police, Fire, EMS – 10% off entire order with ID at pickup"
        ],
        note: "Not stackable with other discounts. Always honored."
      },
      {
        title: "Coming in 2026",
        items: [
          "Raw Milk",
          "Churned Butter",
          "Farm Yogurt",
          "Homestead Cheeses",
          "Family Farm Events",
        ]
      }
    ]
  }
};
