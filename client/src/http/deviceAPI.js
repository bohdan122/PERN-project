import { $authHost, $host } from "./index";

const handleRequest = async (request) => {
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }
};

export const createType = async (type) => {
    return handleRequest($authHost.post('api/type', type));
};

export const fetchTypes = async () => {
    return handleRequest($host.get('api/type'));
};

export const createBrand = async (brand) => {
    return handleRequest($authHost.post('api/brand', brand));
};

export const fetchBrands = async () => {
    return handleRequest($host.get('api/brand'));
};

export const createDevice = async (device) => {
    return handleRequest($authHost.post('api/device', device));
};

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    return handleRequest($host.get('api/device', { params: { typeId, brandId, page, limit } }));
};

export const fetchOneDevice = async (id) => {
    return handleRequest($host.get(`api/device/${id}`));
};
