import { fetchInsurees } from "./services";
import { loadingInsureeData, queriedInsureePaginationInfo, queriedInsurees } from "./stores";
import type { InsureeGqlSearchForm } from "./types";


export async function loadInsurees(formData: InsureeGqlSearchForm) {
    try {
        const insurees = await fetchInsurees(formData);
        loadingInsureeData.set(false);
        queriedInsureePaginationInfo.set({
            endCursor: insurees.pageInfo.endCursor,
            startCursor: insurees.pageInfo.startCursor,
            hasNextPage: insurees.pageInfo.hasNextPage,
            hasPreviousPage: insurees.pageInfo.hasPreviousPage,
        })
        queriedInsurees.set(insurees.data);
        console.log("Page Info:", insurees.pageInfo);

    } catch (error) {
        console.error(error);
        loadingInsureeData.set(false);
    }
}