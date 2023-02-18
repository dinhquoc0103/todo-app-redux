import store from "../redux/store";

function useSubscribe(callback) {
    store.subscribe(callback);
    return undefined;
}

export default useSubscribe;