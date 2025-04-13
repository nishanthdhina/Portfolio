export default function TestBasic() {
  return (
    <div style={{padding: '20px'}}>
      <h1 className="text-3xl font-bold text-blue-500">Basic Tailwind Test</h1>
      <p className="mt-4 text-gray-700">This is a simple test.</p>
      <div className="mt-6 p-4 bg-blue-100 rounded">
        <p>This should have a blue background and rounded corners.</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Blue Button
      </button>
      
      <div className="test-active">
        This div should have a red background, white text, yellow border, and 20px padding
        if CSS is loading correctly.
      </div>
    </div>
  );
} 