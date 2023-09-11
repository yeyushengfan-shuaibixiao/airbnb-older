import { configureStore } from "@reduxjs/toolkit";
import homeRuducer from "@/store/moudules/home";
import entireReducer from "./moudules/entire";
import detailsReducer from "./moudules/details";
import mianReducer from "./moudules/main";
const store = configureStore({
  reducer: {
    home: homeRuducer,
    entire: entireReducer,
    details: detailsReducer,
    main: mianReducer,
  },
});

export default store;
