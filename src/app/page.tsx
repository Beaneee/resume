import Resume from "@/components/resume/Resume";
import { resumeData } from "@/data/resumeData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 print:bg-white print:py-0">
      <Resume data={resumeData} />
    </main>
  );
}
