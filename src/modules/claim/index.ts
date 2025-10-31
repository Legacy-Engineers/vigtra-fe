import type { ModuleCfgDefinition } from "..";
import ClaimHome from "./pages/claimHome.svelte";


const DEFAULT_CFG: ModuleCfgDefinition = {
    name: "Vigtra Claim Module",
    description: "Module for managing claims within the Vigtra application",
    version: 1,
    routes: {
        '/claims': ClaimHome,
    },
    menu: {
        title: "Claims",
        icon: "mdi:file-document",
        items: [
            {
                title: "All Claims",
                url: "/claims",
                icon: "mdi:file-document-check",
            },
            {
                title: "Encounters",
                url: "/encounter",
                icon: "streamline-ultimate:doctor-home-visit-1-bold",
            }
        ],
    }
}

const ClaimModule = () => {
    return { ...DEFAULT_CFG }
}

export default ClaimModule;