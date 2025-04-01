export default function PageTemplate({ title }: { title: string }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <p className="text-gray-600">Content for {title} page coming soon...</p>
      </div>
    </div>
  );
} 