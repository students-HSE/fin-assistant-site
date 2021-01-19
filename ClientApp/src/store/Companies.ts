import {AppThunkAction} from "./index";
import {Reducer} from "redux";

export interface Company {
    id: number;
    name: string;
    tradingViewSymbol: string;
}

export interface CompaniesState {
    companies: Company[]; 
}

interface RequestCompaniesAction {
    type: 'REQUEST_COMPANIES'
}

interface ReceiveCompaniesAction {
    type: 'RECEIVE_COMPANIES',
    companies: Company[]
}

type KnownAction = RequestCompaniesAction | ReceiveCompaniesAction;

export const actionCreators = {
    requestCompanies(): AppThunkAction<KnownAction> {
        return async (dispatch, getState) => {
            dispatch({ type: "REQUEST_COMPANIES" });

            const response = await fetch('/api/v1/companies');
            const companies = (await response.json()) as Company[];

            dispatch({ type: "RECEIVE_COMPANIES", companies });
        }
    }
}

export const reducer: Reducer<CompaniesState> = (state, action: KnownAction) => {
    switch (action.type) {
        case "RECEIVE_COMPANIES":
            return { companies: action.companies };
    }

    return { } as CompaniesState;
}