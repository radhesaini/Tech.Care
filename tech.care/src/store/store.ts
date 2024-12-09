import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { authReducer } from "../app/utills/patientState";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { item: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
