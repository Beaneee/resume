import { Certificate } from "@/types/resume";

interface CertificatesSectionProps {
  certificates: Certificate[];
}

export default function CertificatesSection({ certificates }: CertificatesSectionProps) {
  if (certificates.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2 mb-4">
        자격증
      </h2>
      <div className="space-y-2">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex justify-between items-center">
            <div>
              <span className="font-medium text-gray-900">{cert.name}</span>
              <span className="text-gray-500 text-sm ml-2">· {cert.issuer}</span>
            </div>
            <span className="text-sm text-gray-500">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
