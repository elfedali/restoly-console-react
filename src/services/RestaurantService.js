import http from "./api";

const RestaurantService = {
  getRestaurantsByUserId: async (userId) => {
    try {
      const response = await http.get("/api/restaurants", {
        params: {
          userId: userId,
        },
      });
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error fetching restaurants:", error);
      throw error;
    }
  },
  getRestaurantById: async (restaurantId) => {
    try {
      const response = await http.get(`/api/restaurants/${restaurantId}`);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error fetching restaurant:", error);
      throw error;
    }
  },
  updateRestaurant: async (restaurantId, data) => {
    try {
      const response = await http.put(`/api/restaurants/${restaurantId}`, data);
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error updating restaurant:", error);
      throw error;
    }
  },
};

export default RestaurantService;
