import { createFileRoute } from "@tanstack/react-router";
import { AssessmentDesk } from "@/components/assessment-desk";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Pre RN revision" },
      {
        name: "description",
        content:
          "Pre-registration revision. Key notes and a hundred questions each, including laboratory results.",
      },
    ],
  }),
  component: AssessmentDesk,
});
