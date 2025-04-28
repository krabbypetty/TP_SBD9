import { useState, useEffect } from 'react';

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500",
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-blue-600 p-4 text-white">
        <div className="text-xl font-bold">Nama Kamu</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Card Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.results.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt="Card" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Counter Demo */}
      <div className="p-6 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold">Counter Demo</h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCount(count - 1)} 
            className="px-6 py-2 rounded-lg bg-blue-300 text-black hover:bg-blue-400 transition-all"
          >
            -
          </button>
          <button 
            onClick={() => setCount(0)} 
            className="px-6 py-2 rounded-lg bg-blue-300 text-black hover:bg-blue-400 transition-all"
          >
            Reset
          </button>
          <button 
            onClick={() => setCount(count + 1)} 
            className="px-6 py-2 rounded-lg bg-blue-300 text-black hover:bg-blue-400 transition-all"
          >
            +
          </button>
        </div>
        <div className="text-3xl font-bold">{count}</div>
      </div>

    </div>
  );
}

export default App;
