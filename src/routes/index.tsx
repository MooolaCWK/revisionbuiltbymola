import { createFileRoute } from "@tanstack/react-router";
import { CaseRounds } from "@/components/case-rounds";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <CaseRounds />;
}
