const LOCAL_STORAGE_KEYS = {
    WISH_LIST: "Wish-list",
    VIEW_LIST: "View-list",
};

// Generic function to get items from localStorage
const getItemsFromLocalStorage = (key) => {
    try {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
        console.error(`Error parsing data from localStorage for key "${key}":`, error);
        return [];
    }
};

// Generic function to add an item to localStorage
const addItemToLocalStorage = (key, id) => {
    const storedData = getItemsFromLocalStorage(key);
    if (!storedData.includes(id)) {
        storedData.push(id);
        localStorage.setItem(key, JSON.stringify(storedData));
    }
};

// Specific functions for Wish List
const getWishListFromLocalStorage = () => getItemsFromLocalStorage(LOCAL_STORAGE_KEYS.WISH_LIST);
const addToWishList = (id) => addItemToLocalStorage(LOCAL_STORAGE_KEYS.WISH_LIST,id);

// Specific functions for View List
const getViewListFromLocalStorage = () => getItemsFromLocalStorage(LOCAL_STORAGE_KEYS.VIEW_LIST);
const addToViewList = (id) => addItemToLocalStorage(LOCAL_STORAGE_KEYS.VIEW_LIST,id);

export { getWishListFromLocalStorage, addToWishList, getViewListFromLocalStorage, addToViewList };