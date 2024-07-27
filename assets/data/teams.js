import t1 from "@/assets/data/teams/2024.json";
import t2 from "@/assets/data/teams/2025.json";
import t3 from "@/assets/data/teams/2026.json";

const teams = [
  {
    batch: "2024",
    data: t1,
  },
  {
    batch: "2025",
    data: t2,
  },
  {
    batch: "2026",
    data: t3,
  },
];

export default teams.reverse();
