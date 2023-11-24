import createApiClient from "./api.service";

class ProductCategoryService {
    constructor(baseUrl = "/api/product-category") {
        this.api = createApiClient(baseUrl);
    }

    async getAll() {
        const res = await this.api.get();
        return res.data;
    }
}

export default new ProductCategoryService();