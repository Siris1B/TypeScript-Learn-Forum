// eslint-disable-next-line feature-sliced-import-checker/layer-imports-checker
import { RootState } from 'app/providers/StoreProvider/config/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
