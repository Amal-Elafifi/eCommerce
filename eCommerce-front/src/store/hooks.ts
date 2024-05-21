import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";
import {TypedUseSelectorHook} from "react-redux";



// use through your app instead of plain 'useDispatch ' and 'useSelector' 
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;