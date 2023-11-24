import createApiClient from "./api.service";

class ProductService {
    constructor(baseUrl = "/api/product/") {
        this.api = createApiClient(baseUrl);
    }

    async getAll(path) {
        const res = await this.api.get(path);
        return res.data;
    }

    async deleteTempProduct(path) {
        const res = await this.api.patch(path);
        return res.data;
    }
}

export default new ProductService();