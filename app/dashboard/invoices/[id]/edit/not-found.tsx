export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="mb-2 text-2xl font-bold">Invoice Not Found</h2>
      <p className="mb-4 text-gray-600">
        Sorry, we couldn&apos;t find an invoice with this ID. It may have been deleted or you entered an invalid link.
      </p>
      <a
        href="/dashboard/invoices"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Invoices
      </a>
    </div>
  );
}