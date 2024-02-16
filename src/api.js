import axios from 'axios';

const searchImage = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID 1OLothho6Nr77AKRRCSPvBoMMzNPKH5p5rDHivEItqY`,
    },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImage;
