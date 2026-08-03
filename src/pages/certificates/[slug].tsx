import {useRouter} from 'next/router';
import {FC, memo} from 'react';

import Page from '../../components/Layout/Page';
import {certifications} from '../../data/data';

const CertificateViewer: FC = memo(() => {
  const router = useRouter();
  const {slug} = router.query;

  const slugStr = Array.isArray(slug) ? slug[0] : slug;

  const certificate = certifications.find(
    (cert) => cert.platform.toLowerCase().replace(/\s+/g, '-') === slugStr,
  );

  if (!certificate) {
    return (
      <Page description="Certificate not found" title="Certificate Not Found">
        <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">Certificate Not Found</h1>
          <button
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            onClick={() => router.push('/')}
          >
            Go Back Home
          </button>
        </div>
      </Page>
    );
  }

  const pdfUrl = certificate.certificates[0];

  return (
    <Page description={`${certificate.platform} certificate`} title={`${certificate.platform} Certificate`}>
      <div className="flex min-h-screen flex-col bg-neutral-900">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-neutral-700 bg-neutral-800 px-6 py-4">
          <button
            className="flex items-center gap-2 rounded-lg bg-neutral-700 px-4 py-2 font-semibold text-white transition hover:bg-neutral-600"
            onClick={() => router.push('/')}
          >
            <span aria-hidden="true">←</span> Back
          </button>
          <h1 className="text-lg font-bold text-white sm:text-xl">
            {certificate.platform} Certificate
          </h1>
          {/* Spacer to center the title */}
          <div className="w-20" />
        </div>

        {/* PDF viewer */}
        <div className="flex-1">
          <iframe
            className="h-[calc(100vh-4rem)] w-full border-none"
            src={pdfUrl}
            title={`${certificate.platform} certificate`}
          />
        </div>
      </div>
    </Page>
  );
});

CertificateViewer.displayName = 'CertificateViewer';
export default CertificateViewer;
