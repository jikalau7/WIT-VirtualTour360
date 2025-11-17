// src/widgets/layout/PageTitle.jsx
export function PageTitle({ section, heading, children }) {
  return (
    <div className="text-center mb-8">
      <h3 className="text-sm text-red-600 font-bold uppercase mb-2">{section}</h3>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">{heading}</h2>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
