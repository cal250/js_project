import { useState, useEffect } from 'react';

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:5600/api/adduser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice((currentPage - 1) * itemsPerPage + index, 1);
    setData(newData);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      {currentItems.length === 0 ? (
        <p>No data available</p>
      ) : (
        <>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Shop</th>
                <th className="py-2 px-4 border">Meeting</th>
                <th className='py-2 px-4 border'>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.shop}</td>
                  <td className="py-2 px-4 border">{item.Meeting}</td>
                  <td className='py-2 px-4 border'>
                    <button className='py-2 px-4 bg-blue-200 hover:bg-blue-500 rounded text-color-white-500'>Edit</button>    <button 
                      className='margin-20 py-2 px-4 bg-red-200 hover:bg-red-500 rounded text-color-white' 
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Previous Page
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="py-2 px-4 bg-blue-200 hover:bg-blue-300 rounded"
            >
              Next Page
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayData;

