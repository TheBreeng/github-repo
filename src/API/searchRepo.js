import axios from 'axios';

export default class searchRepo {
    static async getAll(keyword, limit = 10) {
        const response = await axios.get(
            `https://api.github.com/search/repositories?q=${keyword}&per_page=${limit}`
        );

        return response.data.items;
    }
}
